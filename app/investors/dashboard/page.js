import { cookies } from "next/headers";
import Link from "next/link";
import { verifyToken } from "@/lib/jwt";

export const metadata = { title: "Investor Dashboard — AfriFoundry" };

async function getMetrics() {
  const endpoint = process.env.AFRIFOUNDRY_METRICS_API_URL;
  const apiKey = process.env.AFRIFOUNDRY_METRICS_API_KEY;
  if (!endpoint) return null;

  try {
    const res = await fetch(endpoint, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : {},
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function InvestorDashboard() {
  const secret = process.env.ACCESS_AUTH_SECRET;
  const token = cookies().get("af_investor_session")?.value;
  const payload = token && secret ? verifyToken(token, secret) : null;

  if (!payload || payload.purpose !== "investor") {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
            NOT VERIFIED
          </div>
          <h1 className="font-display text-3xl font-bold md:text-4xl">
            That link expired or isn&apos;t valid.
          </h1>
          <p className="mt-4 max-w-[55ch] text-ink-dim">
            Request a fresh one — links are only good for 15 minutes.
          </p>
          <Link
            href="/investors"
            className="mt-6 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]"
          >
            Back to Investors
          </Link>
        </div>
      </section>
    );
  }

  const metrics = await getMetrics();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          VERIFIED — INVESTOR VIEW
        </div>
        <h1 className="max-w-[26ch] font-display text-3xl font-bold md:text-4xl">
          Welcome, {payload.email}.
        </h1>

        {metrics ? (
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="bg-bg p-6">
                <div className="font-display text-2xl font-bold text-ink">{String(value)}</div>
                <div className="mt-1 text-xs text-ink-dim">{key}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 max-w-[55ch] text-ink-dim">
            You&apos;re verified — but the live metrics endpoint isn&apos;t connected yet
            (<code className="text-xs">AFRIFOUNDRY_METRICS_API_URL</code>). Once it is, real
            ingestion, training, and partner numbers render here automatically — nothing
            fabricated to fill the gap in the meantime.
          </p>
        )}

        <p className="mt-10 max-w-[55ch] text-sm text-ink-dim">
          Questions on any of this — email{" "}
          <a href="mailto:support@afrifoundry.com" className="text-gold underline">
            support@afrifoundry.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
