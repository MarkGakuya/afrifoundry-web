import { cookies } from "next/headers";
import Link from "next/link";
import { verifyToken } from "@/lib/jwt";
import MarketingStudio from "@/components/MarketingStudio";
import AccessRequestForm from "@/components/AccessRequestForm";

export const metadata = { title: "Marketing Studio — AfriFoundry" };

export default function MarketingStudioPage() {
  const secret = process.env.ACCESS_AUTH_SECRET;
  const token = cookies().get("af_marketing_session")?.value;
  const payload = token && secret ? verifyToken(token, secret) : null;

  if (!payload || payload.purpose !== "marketing") {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
            INTERNAL — TEAM ONLY
          </div>
          <h1 className="max-w-[26ch] font-display text-3xl font-bold md:text-4xl">
            Marketing Studio
          </h1>
          <p className="mt-4 max-w-[55ch] text-ink-dim">
            Verify your team email to get in. Afri3B drafts, you review and post — nothing
            goes out on its own.
          </p>
          <AccessRequestForm purpose="marketing" ctaLabel="Verify & open studio" />
          <p className="mt-8 text-sm text-ink-dim">
            <Link href="/team" className="text-gold underline">
              ← Back to Team
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          VERIFIED — MARKETING STUDIO
        </div>
        <h1 className="max-w-[26ch] font-display text-3xl font-bold md:text-4xl">
          Draft, review, post. In that order, always.
        </h1>
        <p className="mt-4 max-w-[55ch] text-ink-dim">
          Same Afri3B as everywhere else, drafting in AfriFoundry&apos;s actual voice — no
          hype, no invented numbers. Every draft is reviewed by {payload.email} before
          anything goes anywhere.
        </p>
        <MarketingStudio />
      </div>
    </section>
  );
}
