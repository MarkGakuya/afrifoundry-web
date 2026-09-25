// Receives the transcript of a completed conversation with Afri3B from the
// Team page's per-role apply widget, and emails it to support@afrifoundry.com
// for human review. This is the honest version of "Afri3B does a first-pass
// interview" — it's a real conversation, but a person reads and decides,
// not an automated accept/reject.

import { sendEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { role, email, transcript, company } = body || {};

  if (company) return Response.json({ ok: true }); // honeypot

  if (!role || typeof role !== "string") {
    return Response.json({ error: "Missing role." }, { status: 400 });
  }
  if (!Array.isArray(transcript) || transcript.length === 0) {
    return Response.json({ error: "Have a short conversation first." }, { status: 400 });
  }
  if (email && (typeof email !== "string" || !EMAIL_RE.test(email))) {
    return Response.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  const transcriptText = transcript
    .map((m) => `${m.role === "user" ? "Applicant" : "Afri3B"}: ${m.text}`)
    .join("\n\n");

  const result = await sendEmail({
    to: "support@afrifoundry.com",
    subject: `Application — ${role}`,
    text: `Role: ${role}\nApplicant email: ${email || "not given"}\n\n--- Conversation with Afri3B ---\n\n${transcriptText}`,
  });

  if (!result.ok) {
    return Response.json(
      {
        error:
          "Couldn't send your application right now — please email support@afrifoundry.com directly with the role in the subject.",
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
