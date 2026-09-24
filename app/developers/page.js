import Link from "next/link";
import CardList from "@/components/CardList";

export const metadata = { title: "Developers — AfriFoundry" };

const items = [
  { title: "POST /v1/search", body: "Natural language search with native Swahili, English, and code-switched support." },
  { title: "POST /v1/describe", body: "Enriches sparse listings into clear, customer-facing descriptions." },
  { title: "POST /v1/visual-search", body: "Image-to-result matching against your live catalogue." },
  { title: "POST /v1/vendor/analytics · /feedback · /forecast", body: "Sales, sentiment, and demand signals - queried in plain language, not read off a dashboard." },
];

export default function Developers() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">FOR DEVELOPERS</div>
        <h1 className="max-w-[18ch] font-display text-4xl font-bold md:text-5xl">
          One API, real African-context intelligence.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          Partners integrate against a live architecture - Afri3B calls back to your own systems
          in real time rather than keeping a copy, so responses are always grounded in your
          actual current data.
        </p>

        <CardList items={items} />

        <p className="mt-8 max-w-[60ch] text-ink-dim">
          Authenticated by a dedicated key per partner, rate-limited, revocable on request. Full
          integration docs shared once a partnership is scoped.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]">
          Request API access
        </Link>
      </div>
    </section>
  );
}
