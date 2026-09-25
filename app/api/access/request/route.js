// Issues a 15-minute magic-link verification email for either the investor
// or developer gate. Stateless — no database, the signed token itself is
// the proof of the request. Real verification, not a fake login screen:
// only someone who controls the email address they entered can click
// through to the dashboard.
//
// Required env vars:
//   ACCESS_AUTH_SECRET — any long random string, used to sign tokens.
//     Without it, this route fails honestly (503) rather than issuing an
//     unsigned or fake link.
//   RESEND_API_KEY, EMAIL_FROM — see lib/email.js

import { signToken } from "@/lib/jwt";
import { sendEmail } from "@/lib/email";

const PURPOSES = {
  investor: { label: "Investor" },
  developer: { label: "Developer" },
  marketing: { label: "Marketing Studio" },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, purpose, company } = body || {};

  if (company) return Response.json({ ok: true }); // honeypot

  if (!PURPOSES[purpose]) {
    return Response.json({ error: "Unknown request type." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const secret = process.env.ACCESS_AUTH_SECRET;
  if (!secret) {
    console.error("ACCESS_AUTH_SECRET not set — magic link not issued.");
    return Response.json(
      { error: "Access requests aren't connected yet. Please email support@afrifoundry.com directly." },
      { status: 503 }
    );
  }

  const token = signToken({ email, purpose }, secret, 15 * 60);
  const origin = new URL(request.url).origin;
  const link = `${origin}/api/access/verify?token=${encodeURIComponent(token)}`;

  const result = await sendEmail({
    to: email,
    subject: `Your AfriFoundry ${PURPOSES[purpose].label} access link`,
    text: `Click to verify and continue:\n\n${link}\n\nThis link expires in 15 minutes. If you didn't request this, you can ignore it.`,
  });

  if (!result.ok) {
    return Response.json(
      { error: "Couldn't send the email right now. Please try again, or email support@afrifoundry.com directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
