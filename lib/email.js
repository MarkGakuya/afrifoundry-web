// Thin wrapper around Resend's REST API (no SDK dependency needed — it's a
// plain HTTP POST). Used for magic-link verification emails and for relaying
// team application transcripts to support@afrifoundry.com. Fails honestly
// when RESEND_API_KEY isn't set, rather than pretending mail went out.
//
// Required env vars:
//   RESEND_API_KEY — from resend.com
//   EMAIL_FROM     — e.g. "AfriFoundry <no-reply@afrifoundry.com>"
//                    (the sending domain must be verified in Resend)

export async function sendEmail({ to, subject, text, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "AfriFoundry <no-reply@afrifoundry.com>";

  if (!apiKey) {
    console.error("RESEND_API_KEY not set — email not sent:", { to, subject });
    return { ok: false, error: "not_configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, text, html }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, errText);
      return { ok: false, error: "send_failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("Resend send error:", err);
    return { ok: false, error: "send_failed" };
  }
}
