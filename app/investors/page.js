import CardList from "@/components/CardList";
import AccessRequestForm from "@/components/AccessRequestForm";

export const metadata = { title: "For Investors — AfriFoundry" };

const items = [
  { title: "The wedge is proven, not theoretical", body: "Live with a real Kenyan multi-marketplace and logistics partner — natural language search, visual search, and vendor analytics running against a real production catalogue today." },
  { title: "Data moat, not a model moat", body: "Every language, price point, and market pattern is ingested and verified, not scraped and hoped-for. That corpus compounds — it's not reproducible by wrapping a bigger foundation model." },
  { title: "Sold B2B, not fighting your customers", body: "AfriFoundry sells the intelligence layer to marketplaces and platforms — never competes with them for the same buyer." },
  { title: "Honesty is the product discipline, not a slogan", body: "Every domain is gated behind real, earned maturity before it's trusted over general-purpose reasoning — the same discipline that keeps trust with partners keeps it with users." },
];

export default function Investors() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">FOR INVESTORS</div>
        <h1 className="max-w-[18ch] font-display text-4xl font-bold md:text-5xl">
          Why infrastructure, why Africa, why now.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          Africa&apos;s languages and markets don&apos;t have AI infrastructure built from their
          own ground truth — every major model today is adapted onto Africa afterward, not built
          from it. That gap is the thesis.
        </p>

        <CardList items={items} />

        <div className="mt-8 border-l-2 border-gold pl-6">
          <p className="max-w-[50ch] text-lg italic text-ink">
            Built and run by a solo, bootstrapped founder from Mombasa since June 2025 — the
            constraint that forced real discipline over shortcuts.
          </p>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="mb-2 text-xl font-semibold">How this works</h2>
          <p className="max-w-[55ch] text-ink-dim">
            Enter your email below and we&apos;ll send a verification link. Once you click it,
            you&apos;ll see the real numbers directly — ingestion, training, and partner
            metrics — rather than a public page. No password, no account, just a verified link
            tied to your email.
          </p>
          <AccessRequestForm purpose="investor" ctaLabel="Verify & view metrics" />
        </div>

        <p className="mt-8 max-w-[55ch] text-sm text-ink-dim">
          Prefer email?{" "}
          <a href="mailto:support@afrifoundry.com?subject=Investor%20inquiry" className="text-gold underline">
            support@afrifoundry.com
          </a>
        </p>
      </div>
    </section>
  );
}
