// WhatsApp Business Cloud API webhook — Meta's official, ToS-compliant
// integration. This is deliberately NOT an unofficial library logged in as
// a phone number sitting inside the group; Meta's official API has no
// mechanism for a bot to join or post into a group at all. What this does:
// answers people who message the AfriFoundry WhatsApp Business number
// directly, one-on-one, using the same live Afri3B backend as the website's
// "Ask Afri3B" widget (app/api/chat/route.js).
//
// It ALSO carries the marketing agent — lives here, in the community
// channel, not on the website. When someone on the admin allowlist sends
// "/marketing <platform> <brief>", Afri3B drafts that post and replies with
// it, right there in the same DM. Everyone else's messages (including
// anything that happens to start with "/marketing" from a non-admin number)
// are just answered normally — there's no separate mode to discover.
//
// Setup (Meta for Developers → your App → WhatsApp product):
//   1. Add a phone number, note its Phone Number ID.
//   2. Generate a permanent access token (System User token, not the
//      24-hour test token).
//   3. Webhook URL: https://afrifoundry.com/api/whatsapp
//      Verify token: any string you choose — must match WHATSAPP_VERIFY_TOKEN below.
//   4. Subscribe the webhook to the "messages" field.
//
// Required env vars (Vercel, server-only — no NEXT_PUBLIC_ prefix):
//   WHATSAPP_VERIFY_TOKEN    — the string you set in the Meta webhook config
//   WHATSAPP_ACCESS_TOKEN    — permanent System User access token
//   WHATSAPP_PHONE_NUMBER_ID — the Phone Number ID from step 1
//   WHATSAPP_APP_SECRET      — your Meta App Secret, used to verify that
//                              incoming webhook calls actually came from Meta
//                              (HMAC signature check) — without this, anyone
//                              who finds the URL could POST fake messages.
//   MARKETING_AGENT_ADMIN_NUMBERS — comma-separated WhatsApp numbers (E.164,
//                              no "+", e.g. "254712345678,254798765432")
//                              allowed to trigger the marketing agent. Any
//                              number not on this list never sees that
//                              behavior, no matter what they send.
//
// Also uses AFRIFOUNDRY_CHAT_API_URL / AFRIFOUNDRY_CHAT_API_KEY (same as
// app/api/chat/route.js) to get Afri3B's actual reply.
//
// Marketing agent usage (admin numbers only), sent as a normal WhatsApp message:
//   /marketing linkedin announce the investor dashboard going live
//   /marketing instagram a Ground Truth Drop about the new Swahili entries
//   /marketing this week's Build Log — shipped the WhatsApp integration
// First word after "/marketing" is checked against known platforms
// (linkedin, x, instagram, whatsapp, newsletter, forge); if it doesn't
// match one, the whole thing is treated as the brief and drafted for The
// Forge by default, since that's this agent's home.

import crypto from "crypto";

const GRAPH_VERSION = "v21.0";

const PLATFORM_ALIASES = {
  linkedin: "LinkedIn",
  x: "X",
  twitter: "X",
  instagram: "Instagram",
  whatsapp: "WhatsApp Channel",
  newsletter: "Newsletter",
  forge: "The Forge",
};

// --- Webhook verification handshake (Meta calls this once, on setup) ---
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response("Forbidden", { status: 403 });
}

// --- Incoming messages ---
export async function POST(request) {
  const rawBody = await request.text();

  if (!verifySignature(rawBody, request.headers.get("x-hub-signature-256"))) {
    console.error("WhatsApp webhook: signature verification failed.");
    return new Response("Invalid signature", { status: 401 });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response("Bad payload", { status: 400 });
  }

  const message = extractMessage(payload);
  // Delivery/read receipts and non-text updates land here too — ignore them.
  if (!message) {
    return new Response("OK", { status: 200 });
  }

  const marketingCommand = isAdmin(message.from) ? parseMarketingCommand(message.text) : null;

  const reply = marketingCommand
    ? await getMarketingDraft(marketingCommand, message.from)
    : await getAfri3BReply(message.text, message.from);

  if (reply) {
    await sendWhatsAppMessage(message.from, reply);
  }

  return new Response("OK", { status: 200 });
}

function isAdmin(from) {
  const list = (process.env.MARKETING_AGENT_ADMIN_NUMBERS || "")
    .split(",")
    .map((n) => n.trim())
    .filter(Boolean);
  return list.includes(from);
}

function parseMarketingCommand(text) {
  const match = text.trim().match(/^\/marketing\b\s*(.*)$/is);
  if (!match) return null;

  const rest = match[1].trim();
  if (!rest) return { platform: "The Forge", brief: "", empty: true };

  const [firstWord, ...restWords] = rest.split(/\s+/);
  const alias = PLATFORM_ALIASES[firstWord.toLowerCase()];

  if (alias) {
    return { platform: alias, brief: restWords.join(" ").trim() };
  }
  return { platform: "The Forge", brief: rest };
}

async function getMarketingDraft(command, from) {
  if (command.empty || !command.brief) {
    return (
      "Marketing agent — usage:\n" +
      "/marketing <platform> <brief>\n\n" +
      "Platforms: linkedin, x, instagram, whatsapp, newsletter, forge (default)\n" +
      "Example: /marketing linkedin announce the investor dashboard going live"
    );
  }

  const context =
    `Marketing agent context: draft a ${command.platform} post for AfriFoundry. ` +
    `Voice: honest, no hype, matches AfriFoundry's website tone exactly — plain language, ` +
    `never fabricate metrics or claims, "earned not claimed." Length and format appropriate ` +
    `for ${command.platform}.`;

  const draft = await getAfri3BReply(command.brief, from, context);
  if (!draft) return null;

  return `📝 Draft for ${command.platform}:\n\n${draft}\n\nReview it, then post it yourself. Send /marketing again for another.`;
}

function verifySignature(rawBody, signatureHeader) {
  const secret = process.env.WHATSAPP_APP_SECRET;
  if (!secret || !signatureHeader) return false;

  const expected =
    "sha256=" + crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

  const a = Buffer.from(expected);
  const b = Buffer.from(signatureHeader);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function extractMessage(payload) {
  try {
    const value = payload.entry?.[0]?.changes?.[0]?.value;
    const msg = value?.messages?.[0];
    if (!msg || msg.type !== "text") return null;
    return { from: msg.from, text: msg.text.body };
  } catch {
    return null;
  }
}

async function getAfri3BReply(text, from, context) {
  const endpoint = process.env.AFRIFOUNDRY_CHAT_API_URL;
  const apiKey = process.env.AFRIFOUNDRY_CHAT_API_KEY;

  if (!endpoint) {
    console.error("AFRIFOUNDRY_CHAT_API_URL not set — WhatsApp message dropped.");
    return "Afri3B isn't fully connected here yet — try afri3b.afrifoundry.com in the meantime.";
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        message: text,
        sessionId: `whatsapp:${from}`,
        source: context ? "whatsapp-marketing" : "whatsapp",
        context: context || null,
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      console.error("Chat backend error from WhatsApp webhook:", res.status);
      return "Something went wrong on my end — try again in a moment.";
    }
    const data = await res.json().catch(() => ({}));
    return typeof data.reply === "string" ? data.reply : null;
  } catch (err) {
    console.error("Failed to reach chat backend from WhatsApp webhook:", err);
    return "Couldn't reach the server just now — try again in a moment.";
  }
}

async function sendWhatsAppMessage(to, body) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  if (!phoneNumberId || !accessToken) {
    console.error("WhatsApp send skipped — WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_ACCESS_TOKEN not set.");
    return;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body },
        }),
      }
    );
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("WhatsApp send failed:", res.status, text);
    }
  } catch (err) {
    console.error("WhatsApp send error:", err);
  }
}
