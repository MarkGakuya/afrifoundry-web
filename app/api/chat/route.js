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
//   AFRIFOUNDRY_CHAT_API_URL  — e.g. https://api.afrifoundry.com/v1/chat
//   AFRIFOUNDRY_CHAT_API_KEY  — bearer token the backend expects
//
// Request sent to the backend (JSON):
// {
//   message: string,
//   sessionId: string | null,   // lets the backend thread a conversation if it supports it
//   source: "website" | "whatsapp" | "developer-playground" | "team-application",
//   context: string | null,     // optional framing hint, e.g. "Applicant for: ML engineer"
//   submittedAt: ISO 8601 string
// }
//
// Response expected back: { reply: string }

const VALID_SOURCES = ["website", "whatsapp", "whatsapp-marketing", "developer-playground", "team-application"];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { message, sessionId, source, context, company } = body || {};

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

  const endpoint = process.env.AFRIFOUNDRY_CHAT_API_URL;
  const apiKey = process.env.AFRIFOUNDRY_CHAT_API_KEY;

  if (!endpoint) {
    console.error("AFRIFOUNDRY_CHAT_API_URL is not set — chat message dropped.");
    return Response.json(
      { error: "Afri3B isn't connected here yet — try the full app instead." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        message: message.trim(),
        sessionId: sessionId || null,
        source: VALID_SOURCES.includes(source) ? source : "website",
        context: typeof context === "string" && context.trim() ? context.trim().slice(0, 500) : null,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Chat backend error:", res.status, text);
      return Response.json({ error: "Afri3B couldn't respond to that. Please try again." }, { status: 502 });
    }

    const data = await res.json().catch(() => ({}));
    if (typeof data.reply !== "string") {
      console.error("Chat backend returned no reply field:", data);
      return Response.json({ error: "Afri3B couldn't respond to that. Please try again." }, { status: 502 });
    }

    return Response.json({ reply: data.reply });
  } catch (err) {
    console.error("Failed to reach chat backend:", err);
    return Response.json({ error: "Couldn't reach Afri3B. Please try again." }, { status: 502 });
  }
}
