// Receives live training messages from the mini-Afri3B widget on /contribute
// and forwards them to the Afri3B training pipeline.
//
// This route intentionally does NOT store anything itself — it's a thin,
// validated relay. The actual receiving endpoint lives on the Afri3B backend
// (the Railway-hosted API service), configured via env vars below, so no
// key or internal URL is ever exposed to the browser.
//
// Required env vars (set in Vercel → Project → Settings → Environment
// Variables — NOT prefixed with NEXT_PUBLIC_, so they stay server-only):
//   AFRIFOUNDRY_TRAINING_API_URL  — e.g. https://api.afrifoundry.com/v1/contributions
//   AFRIFOUNDRY_TRAINING_API_KEY  — bearer token the backend expects
//
// Contract sent to the backend (JSON):
// {
//   message: string,      // whatever the person typed in the widget
//   consent: true,
//   source: "website-widget",
//   submittedAt: ISO 8601 string
// }
//
// Contract expected back (optional): { reply?: string }
// If the backend returns a `reply`, the widget shows it as an Afri3B chat
// bubble — so once a real conversational endpoint exists, this becomes a
// genuine live exchange, not just a one-way log. Until AFRIFOUNDRY_TRAINING_API_URL
// is set, this route fails honestly rather than pretending the message went
// anywhere.

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { message, consent, company } = body || {};

  // Silently "succeed" on honeypot hits so bots don't learn to adapt.
  if (company) {
    return Response.json({ ok: true });
  }

  if (!message || typeof message !== "string" || message.trim().length < 2) {
    return Response.json({ error: "Say a little more than that." }, { status: 400 });
  }
  if (message.length > 2000) {
    return Response.json({ error: "That's too long — please shorten it." }, { status: 400 });
  }
  if (!consent) {
    return Response.json({ error: "Please check the consent box first." }, { status: 400 });
  }

  const payload = {
    message: message.trim(),
    consent: true,
    source: "website-widget",
    submittedAt: new Date().toISOString(),
  };

  const endpoint = process.env.AFRIFOUNDRY_TRAINING_API_URL;
  const apiKey = process.env.AFRIFOUNDRY_TRAINING_API_KEY;

  if (!endpoint) {
    // Backend isn't wired up yet. Fail honestly rather than pretending
    // the message went somewhere — logged so it's visible in Vercel's
    // function logs during setup.
    console.error("AFRIFOUNDRY_TRAINING_API_URL is not set — message dropped:", payload);
    return Response.json(
      { error: "Training pipeline isn't connected yet. Please try again later." },
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
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Training backend rejected message:", res.status, text);
      return Response.json({ error: "Something went wrong sending that. Please try again." }, { status: 502 });
    }

    const data = await res.json().catch(() => ({}));
    return Response.json({ ok: true, reply: typeof data.reply === "string" ? data.reply : undefined });
  } catch (err) {
    console.error("Failed to reach training backend:", err);
    return Response.json({ error: "Couldn't reach the server. Please try again." }, { status: 502 });
  }
}
