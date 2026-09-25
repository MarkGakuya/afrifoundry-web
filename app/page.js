import Link from "next/link";
import StatRow from "@/components/StatRow";
import SystemDiagram from "@/components/SystemDiagram";
import RoadmapDiagram from "@/components/RoadmapDiagram";
import AskAfri3B from "@/components/AskAfri3B";

const overview = [
  { href: "/product", title: "The Product", body: "Afri3B's architecture — ingestion, self-building dictionary, specialist minimodels, hybrid router." },
  { href: "/partners", title: "For Businesses", body: "The AI layer for informal and secondhand commerce, sold B2B, already live with a real partner." },
  { href: "/users", title: "For Users", body: "What Afri3B can actually do right now, for any user — Phase 1, honestly scoped." },
  { href: "/investors", title: "For Investors", body: "Why infrastructure, why Africa, why now — the real thesis, no invented traction." },
  { href: "/contribute", title: "Contribute", body: "What the pipeline actually needs — language corpora, market data, or one real word at a time." },
  { href: "/about", title: "About", body: "Who's building this, the values that govern it, and the honest timeline so far." },
];

export default function Home() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
              AFRIFOUNDRY LIMITED
            </div>
            <h1 className="max-w-[15ch] font-display text-5xl font-bold leading-[1.03] tracking-tight md:text-6xl">
              The data and intelligence infrastructure layer for Africa.
            </h1>
            <p className="mt-5 max-w-[46ch] text-lg text-ink-dim">
              AfriFoundry builds the systems that turn real African data — markets, languages,
              usage — into AI infrastructure built deeply from the continent&apos;s own ground
              truth. Afri3B is the first product built on it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product" className="rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]">
                See Afri3B
              </Link>
              <Link href="/about" className="rounded-md border border-line px-6 py-3 font-semibold">
                Who&apos;s building this
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[380px]">
            <AskAfri3B />
            <p className="mt-4 text-center font-mono text-xs text-ink-dim">
              The actual product. No mockup. Full app at{" "}
              <a
                href="https://afri3b.afrifoundry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                afri3b.afrifoundry.com
              </a>
              .
            </p>
          </div>
        </div>

        <StatRow />

        <div className="mt-20 border-t border-line pt-14">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">ROADMAP</div>
          <h2 className="max-w-[24ch] font-display text-3xl font-bold">
            From a hybrid system today to the full workstation.
          </h2>
          <p className="mt-4 max-w-[55ch] text-ink-dim">
            Each stage only counts once it&apos;s actually built — nothing here is claimed
            ahead of the evidence.
          </p>
          <RoadmapDiagram />
        </div>

        <div className="mt-20 border-t border-line pt-14">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">THE SYSTEM</div>
          <h2 className="max-w-[24ch] font-display text-3xl font-bold">
            One company, one pipeline, two doors out.
          </h2>
          <SystemDiagram />
        </div>

        <div className="mt-20 border-t border-line pt-14">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
            WHAT AFRIFOUNDRY IS BUILDING
          </div>
          <h2 className="max-w-[24ch] font-display text-3xl font-bold">
            One infrastructure layer, several real fronts.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
            {overview.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="bg-bg p-7 transition-colors hover:bg-bg-raised"
              >
                <h3 className="mb-2 font-semibold">{o.title}</h3>
                <p className="mb-4 text-sm text-ink-dim">{o.body}</p>
                <span className="font-mono text-xs text-gold">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
