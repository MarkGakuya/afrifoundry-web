// WhatsApp Business Cloud API webhook — Meta's official, ToS-compliant
// integration. This is deliberately NOT an unofficial library logged in as
// a phone number sitting inside the group; Meta's official API has no
// mechanism for a bot to join or post into a group at all. What this does:
// answers people who message the AfriFoundry WhatsApp Business number
// directly, one-on-one, using the same live Afri3B backend as the website's
// "Ask Afri3B" widget (app/api/chat/route.js).
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
//
// Also uses AFRIFOUNDRY_CHAT_API_URL / AFRIFOUNDRY_CHAT_API_KEY (same as
// app/api/chat/route.js) to get Afri3B's actual reply.

import crypto from "crypto";

const GRAPH_VERSION = "v21.0";

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

  const reply = await getAfri3BReply(message.text, message.from);
  if (reply) {
    await sendWhatsAppMessage(message.from, reply);
  }

  return new Response("OK", { status: 200 });
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

async function getAfri3BReply(text, from) {
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
        source: "whatsapp",
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
