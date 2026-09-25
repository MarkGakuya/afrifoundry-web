// Verifies the magic-link token from the email, and if valid, sets a real
// httpOnly, signed session cookie (30 days) and redirects to the matching
// gated dashboard. No session store needed — the cookie itself is a signed
// token (see lib/jwt.js), so a dashboard page just re-verifies it on each
// request server-side.

import { NextResponse } from "next/server";
import { signToken, verifyToken } from "@/lib/jwt";

const PURPOSES = {
  investor: { dashboardPath: "/investors/dashboard", cookieName: "af_investor_session" },
  developer: { dashboardPath: "/developers/playground", cookieName: "af_developer_session" },
  marketing: { dashboardPath: "/marketing/studio", cookieName: "af_marketing_session" },
};

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const token = searchParams.get("token");
  const secret = process.env.ACCESS_AUTH_SECRET;

  if (!token || !secret) {
    return NextResponse.redirect(`${origin}/?access_error=unavailable`);
  }

  const payload = verifyToken(token, secret);
  if (!payload || !PURPOSES[payload.purpose] || !payload.email) {
    return NextResponse.redirect(`${origin}/?access_error=expired`);
  }

  const { dashboardPath, cookieName } = PURPOSES[payload.purpose];
  const sessionToken = signToken({ email: payload.email, purpose: payload.purpose }, secret, THIRTY_DAYS);

  const response = NextResponse.redirect(`${origin}${dashboardPath}`);
  response.cookies.set(cookieName, sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });
  return response;
}
