import CardList from "@/components/CardList";
import SystemDiagram from "@/components/SystemDiagram";
import MoeDiagram from "@/components/MoeDiagram";

export const metadata = { title: "Product — AfriFoundry" };

const items = [
  { title: "Grounded, not generated", body: "Every dictionary entry, pattern, and cultural note traces back to a real source file — nothing fabricated to look complete." },
  { title: "Honest about maturity", body: "A domain only moves from general-purpose reasoning to Afri3B's own weights once it's actually earned that — never claimed early." },
  { title: "Built for how Africa actually communicates", body: "Swahili, English, and code-switched queries — understood natively, not translated around." },
  { title: "A specialist across every sector — the goal, built sector by sector", body: "Not claimed all at once. Each sector earns real depth before Afri3B treats it as a specialty, the same discipline that governs every language." },
];

const languages = ["Swahili", "English", "Kikuyu", "Dholuo", "Kalenjin", "Maasai", "Somali", "Suba", "Kambe", "Luhya"];

export default function Product() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">THE PRODUCT</div>
        <h1 className="max-w-[20ch] font-display text-4xl font-bold md:text-5xl">
          Afri3B learns a language the way it&apos;s actually spoken.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          Vocabulary, grammar patterns, and cultural context are recorded only from real ingested
          text — never invented from general knowledge. Afri3B runs a hybrid model: general-purpose
          reasoning wrapped in African context today, shifting to Afri3B&apos;s own trained weights
          as each language earns it.
        </p>

        <CardList items={items} />

        <div className="mt-10 flex flex-wrap gap-2">
          {languages.map((l) => (
            <span key={l} className="chip">{l}</span>
          ))}
          <span className="chip border-gold/35 font-mono text-xs text-gold">+ more in active ingestion</span>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">THE PIPELINE</div>
          <h2 className="max-w-[22ch] font-display text-2xl font-bold">
            From raw upload to a language Afri3B actually speaks.
          </h2>
          <SystemDiagram />
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
            HOW IT THINKS — MIXTURE OF EXPERTS
          </div>
          <h2 className="max-w-[22ch] font-display text-2xl font-bold">
            Five specialists. One honest router.
          </h2>
          <p className="mt-3 max-w-[52ch] text-ink-dim">
            Afri3B isn&apos;t one model pretending to know everything — it&apos;s five domain
            specialists, each trained on real data for its own domain, arbitrated by a router
            that only ever promotes a specialist once it&apos;s actually earned trust.
          </p>
          <MoeDiagram />
        </div>
      </div>
    </section>
  );
}
