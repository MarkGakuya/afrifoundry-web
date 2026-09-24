import Link from "next/link";
import CardList from "@/components/CardList";

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
      <div className="mx-auto max-w-5xl px-6">
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

        <Link href="/contact" className="mt-8 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
