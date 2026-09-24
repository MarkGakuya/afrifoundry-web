import Link from "next/link";
import CardList from "@/components/CardList";

export const metadata = { title: "For Partners — AfriFoundry" };

const items = [
  { title: "Natural language, the way people actually search", body: '"Chini ya 20k" understood as a price constraint, not a stray phrase.' },
  { title: "Live, never stale", body: "Afri3B queries a partner's own live catalogue in real time -prices and stock stay current, and the partner keeps full control of their data." },
  { title: "Vendor intelligence, not just customer search", body: "Sales analytics, feedback synthesis, and demand signals - vendors ask questions in plain language instead of reading a dashboard." },
  { title: "Visual search, not just typed queries", body: "A customer photographs a product they want — in person, on social media, on TV and gets matching results from your real catalogue, no listing lookup required." },
  { title: "Integrates without ever copying your data", body: "Afri3B calls back to a partner's own live systems in real time rather than keeping a replicated copy - prices and stock are always current, and the partner keeps full control of their own data at all times." },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">FOR BUSINESSES</div>
        <h1 className="max-w-[18ch] font-display text-4xl font-bold md:text-5xl">
          The AI layer for how Africa actually buys and sells.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          Built for informal and secondhand commerce-the scale of trade formal retail tools
          were never designed for. Sold to the platforms that serve it, not to individual traders.
        </p>
        <div className="mt-8 border-l-2 border-gold pl-6">
          <p className="max-w-[50ch] text-lg italic text-ink">
            Already live with a Kenyan multi-marketplace and logistics platform - natural language
            product search in Swahili and English, visual search, and vendor analytics running
            against their real catalogue.
          </p>
        </div>

        <CardList items={items} />

        <Link href="/contact" className="mt-8 inline-block rounded-md border border-line px-6 py-3 font-semibold">
          Talk to us
        </Link>
      </div>
    </section>
  );
}
