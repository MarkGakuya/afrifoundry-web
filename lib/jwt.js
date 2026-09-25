// Minimal, dependency-free HMAC-SHA256 signed token (JWT-shaped) — no
// database needed for auth: the token itself carries and proves its own
// validity. Used for the magic-link email verification flow (investors,
// developers) and the resulting session cookie.

import crypto from "crypto";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlDecode(str) {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return Buffer.from(s, "base64").toString();
}

function sign(data, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function signToken(payload, secret, expiresInSeconds) {
  const header = { alg: "HS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const body = { ...payload, iat: now, exp: now + expiresInSeconds };
  const headerB64 = base64url(JSON.stringify(header));
  const bodyB64 = base64url(JSON.stringify(body));
  const signature = sign(`${headerB64}.${bodyB64}`, secret);
  return `${headerB64}.${bodyB64}.${signature}`;
}

export function verifyToken(token, secret) {
  try {
    const [headerB64, bodyB64, signature] = token.split(".");
    if (!headerB64 || !bodyB64 || !signature) return null;

    const expected = sign(`${headerB64}.${bodyB64}`, secret);
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

    const payload = JSON.parse(base64urlDecode(bodyB64));
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}
