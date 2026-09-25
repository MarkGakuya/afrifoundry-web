import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About — AfriFoundry" };

const values = [
  { title: "Never fabricate", body: "If the data doesn't exist yet, Afri3B says so — it doesn't invent an answer to sound complete." },
  { title: "African ground truth first", body: "Kenyan markets, real languages, real usage — the foundation, not a translation layer over someone else's model." },
  { title: "Earned, not claimed", body: "A capability is only real once it's actually built and tested — not announced ahead of it." },
  { title: "Built in Africa, for Africa", body: "Decisions get made from Mombasa and Nairobi, for the markets AfriFoundry actually knows." },
];

const timeline = [
  { date: "June 2025", title: "AfriFoundry founded", body: "Bootstrapped solo from Mombasa, alongside a Biomedical Engineering degree." },
  { date: "May 2026", title: "First live partner integration signed", body: "A production API integration agreement with a Kenyan multi-marketplace and logistics platform — the proof point behind the Partners page." },
  { date: "Ongoing", title: "Language infrastructure in active build", body: "Self-building dictionary and hybrid routing live; more than ten African languages in active ingestion and training." },
];

const faqs = [
  { q: "Is Afri3B live right now?", a: "Afri3B is live as a hybrid system — general-purpose reasoning wrapped in African context today, with Afri3B's own trained models taking over language by language as each one earns it. Nothing is claimed as \"fully trained\" before it actually is." },
  { q: "What languages does it support?", a: "English and Swahili are handled natively today, including code-switched queries. More than ten additional African languages are in active ingestion and training." },
  { q: "Where does the data come from?", a: "Real ingested sources only — manual collection, partner data, and verified corpora — never scraped and fabricated to look complete. If a word or pattern isn't verified, it's flagged, not guessed." },
  { q: "How is this different from wrapping GPT or Gemini with African prompts?", a: "That's the starting point, not the destination — every domain is built toward its own trained weights from real African data, with the general-purpose layer only ever a honest, temporary scaffold." },
  { q: "Who's behind AfriFoundry?", a: "Mark Gakuya, founder and CEO, building from Mombasa and Nairobi, Kenya." },
];

export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">ABOUT AFRIFOUNDRY</div>
        <h1 className="max-w-[20ch] font-display text-4xl font-bold md:text-5xl">
          Who&apos;s building this, and why it&apos;s built this way.
        </h1>

        <div className="mt-10 border-l-2 border-gold pl-6">
          <div className="mb-2 font-mono text-xs font-semibold tracking-wide text-gold">MISSION</div>
          <p className="max-w-[42ch] font-display text-2xl font-bold leading-snug">
            To build Africa&apos;s fully-equipped AI workstation — the single place every
            African decision-maker, from farmer to founder, gets intelligence built from
            Africa&apos;s own ground truth.
          </p>
          <p className="mt-4 max-w-[55ch] text-ink-dim">
            Not a chatbot wrapped in African prompts, and not a slogan — an infrastructure
            layer, built one verified word and one earned specialist at a time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[130px_1fr] items-start gap-5 md:grid-cols-[200px_1fr] md:gap-9">
          <Image
            src="/founder.jpg"
            alt="Mark Gakuya, Founder and CEO of AfriFoundry, standing on a street in Nairobi"
            width={400}
            height={600}
            className="w-full rounded-xl border border-line object-cover"
            style={{ aspectRatio: "2/3" }}
          />
          <div>
            <h3 className="text-xl font-semibold">Mark Gakuya</h3>
            <div className="mb-3 font-semibold text-gold">Founder &amp; CEO</div>
            <p className="text-ink-dim">
              Bootstrapped AfriFoundry Limited solo from Mombasa, Kenya, building the company
              alongside a Biomedical Engineering degree. AfriFoundry exists because
              Africa&apos;s languages and markets don&apos;t yet have AI infrastructure built
              from their own ground truth — Afri3B is the attempt to build it honestly, one
              verified word at a time.
            </p>
            <details className="group relative mt-4 inline-block">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-[#17140c]">
                Get in touch
                <span className="font-mono group-open:hidden">▾</span>
                <span className="hidden font-mono group-open:inline">▴</span>
              </summary>
              <div className="absolute left-0 z-10 mt-2 w-56 space-y-1 rounded-md border border-line bg-bg-raised p-2 shadow-lg">
                <a
                  href="mailto:mark@afrifoundry.com"
                  className="block rounded px-3 py-2 text-sm text-ink hover:bg-bg"
                >
                  Email
                </a>
                {/* TODO: confirm the real Instagram handle before launch */}
                <a
                  href="https://instagram.com/REPLACE_WITH_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded px-3 py-2 text-sm text-ink hover:bg-bg"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/markgakuya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded px-3 py-2 text-sm text-ink hover:bg-bg"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </details>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-1 font-semibold">Where this actually started</h3>
            <p className="text-ink-dim">
              AfriFoundry&apos;s first product was a general-purpose assistant wrapping existing
              AI models with African framing. It worked, but it wasn&apos;t building anything of
              its own — every answer still came from somewhere else. That product was retired.
              Afri3B is the deliberate rebuild: infrastructure trained from real African ground
              truth, not adapted onto it afterward.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-semibold">The team, growing</h3>
            <p className="text-ink-dim">
              AfriFoundry has been built solo from day one. A team is now being brought on to
              build at the scale this vision actually needs.
            </p>
            <Link
              href="/team"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
            >
              Meet the team, and who we&apos;re looking for →
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="border-t border-line pt-4">
              <h3 className="mb-1 text-sm font-semibold">{v.title}</h3>
              <p className="text-sm text-ink-dim">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">TIMELINE</div>
          <h2 className="mb-7 font-display text-2xl font-bold">Built one verified step at a time.</h2>
          <div className="space-y-1">
            {timeline.map((t) => (
              <details key={t.title} open className="border-t border-line py-4 last:border-b">
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  {t.date} — {t.title}
                </summary>
                <p className="mt-3 text-ink-dim">{t.body}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">QUESTIONS</div>
          <h2 className="mb-7 font-display text-2xl font-bold">Straight answers, since this matters to us.</h2>
          <div>
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-line py-4 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <span className="ml-4 font-mono text-lg text-gold group-open:hidden">+</span>
                  <span className="ml-4 hidden font-mono text-lg text-gold group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-ink-dim">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
