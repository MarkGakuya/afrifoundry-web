// Relays a message to the live Afri3B conversational backend and returns
// its actual reply. This is the single chat entry point both the website's
// "Ask Afri3B" widget AND the WhatsApp webhook (app/api/whatsapp/route.js)
// call into — one backend connection, two front doors.
//
// This route does NOT generate any reply itself. If the backend isn't
// configured, it fails honestly rather than fabricating a scripted answer —
// consistent with the rest of this site's "never fabricate" principle.
//
// Required env vars (Vercel → Project → Settings → Environment Variables,
// server-only — do NOT prefix with NEXT_PUBLIC_):
//   AFRIFOUNDRY_CHAT_API_URL  — e.g. https://api.afrifoundry.com/v1/public-chat
//   AFRIFOUNDRY_CHAT_API_KEY  — value matching WEBSITE_CHAT_KEY on the API
//
// Request sent to the backend (JSON):
// {
//   message: string,
//   sessionId: string | null,   // lets the backend thread a conversation if it supports it
//   history: { role: "user" | "assistant", content: string }[],
//   source: "website" | "whatsapp" | "developer-playground" | "team-application",
//   context: string | null,     // optional framing hint, e.g. "Applicant for: ML engineer"
//   submittedAt: ISO 8601 string
// }
//
// Response expected back: { reply: string }

const VALID_SOURCES = ["website", "whatsapp", "whatsapp-marketing", "developer-playground", "team-application", "marketing-studio"];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { message, sessionId, source, context, history, company } = body || {};

  // Honeypot — real users never fill this in.
  if (company) {
    return Response.json({ reply: "" });
  }

  if (!message || typeof message !== "string" || message.trim().length < 1) {
    return Response.json({ error: "Say something first." }, { status: 400 });
  }
  if (message.length > 2000) {
    return Response.json({ error: "That's too long — please shorten it." }, { status: 400 });
  }

  if (history !== undefined && !Array.isArray(history)) {
    return Response.json({ error: "Invalid conversation history." }, { status: 400 });
  }
  if ((history || []).length > 8) {
    return Response.json({ error: "Please start a new conversation." }, { status: 400 });
  }
  const recentHistory = (history || []).map((turn) => {
    if (
      !turn ||
      !["user", "assistant"].includes(turn.role) ||
      typeof turn.content !== "string" ||
      turn.content.trim().length === 0 ||
      turn.content.length > 2000
    ) {
      return null;
    }
    return { role: turn.role, content: turn.content.trim() };
  });
  if (recentHistory.includes(null)) {
    return Response.json({ error: "Invalid conversation history." }, { status: 400 });
  }

  const endpoint = process.env.AFRIFOUNDRY_CHAT_API_URL;
  const apiKey = process.env.AFRIFOUNDRY_CHAT_API_KEY;

  if (!endpoint || !apiKey) {
    console.error("Afri3B chat is not configured: endpoint or server-side API key is missing.");
    return Response.json(
      { error: "Afri3B chat isn't connected here yet. Please try again later." },
      { status: 503 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        message: message.trim(),
        sessionId: sessionId || null,
        history: recentHistory,
        source: VALID_SOURCES.includes(source) ? source : "website",
        context: typeof context === "string" && context.trim() ? context.trim().slice(0, 500) : null,
        submittedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error("Chat backend error:", res.status);
      return Response.json({ error: "Afri3B couldn't respond to that. Please try again." }, { status: 502 });
    }

    const data = await res.json().catch(() => ({}));
    if (typeof data.reply !== "string" || !data.reply.trim()) {
      console.error("Chat backend returned no usable reply.");
      return Response.json({ error: "Afri3B couldn't respond to that. Please try again." }, { status: 502 });
    }

    return Response.json({ reply: data.reply });
  } catch (err) {
    if (err?.name === "AbortError") {
      return Response.json({ error: "Afri3B took too long to respond. Please try again." }, { status: 504 });
    }
    console.error("Failed to reach chat backend.");
    return Response.json({ error: "Couldn't reach Afri3B. Please try again." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
