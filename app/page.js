import Image from "next/image";
import Link from "next/link";
import StatRow from "@/components/StatRow";
import SystemDiagram from "@/components/SystemDiagram";
import RoadmapDiagram from "@/components/RoadmapDiagram";

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
              usage — into AI infrastructure the continent doesn&apos;t yet have. Afri3B is the
              first product built on it.
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
          <div className="mx-auto max-w-[300px]">
            <Image
              src="/product-screenshot.png"
              alt="Real screenshot of the Afri3B chat product greeting a signed-in user"
              width={420}
              height={780}
              className="w-full rounded-2xl border border-line shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
            />
            <p className="mt-4 text-center font-mono text-xs text-ink-dim">
              The actual product. No mockup.
            </p>
          </div>
        </div>

        <StatRow />

        <div className="mt-20 border-t border-line pt-14">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">MISSION</div>
          <p className="max-w-[38ch] font-display text-2xl font-bold leading-snug md:text-3xl">
            To build Africa&apos;s fully-equipped AI workstation — the single place every
            African decision-maker, from farmer to founder, gets intelligence built from
            Africa&apos;s own ground truth.
          </p>
          <p className="mt-5 max-w-[60ch] text-ink-dim">
            Not a chatbot wrapped in African prompts, and not a slogan — an infrastructure
            layer, built one verified word and one earned specialist at a time.
          </p>
        </div>

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
