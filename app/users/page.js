import CardList from "@/components/CardList";

export const metadata = { title: "For Users — AfriFoundry" };

const items = [
  { title: "Open to every user, not gated to one group", body: "Anyone can ask Afri3B to reason through a real problem today — a student's project is one sharp example, not a requirement." },
  { title: "Stress-tests feasibility, not just the pitch", body: "Checks a project idea against real local market size, existing solutions, and what's actually viable to build and defend — the questions a jury will actually ask." },
  { title: "Honest, not just encouraging", body: "If an idea's core assumption doesn't hold up, Afri3B says so — the same non-fabrication discipline that governs everything else it does, not a cheerleader trained to always say yes." },
  { title: "Thinks in the language you actually think in", body: "Swahili, English, or mixed — reasoning happens natively, not translated into English and back." },
  { title: "Built by someone who's lived this exact problem", body: "Afri3B comes out of a founder's own path through university and building a company at the same time — the honest-reasoning gap it fills was lived, not guessed at." },
];

export default function Users() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          PHASE 1 — AVAILABLE TO EVERY USER
        </div>
        <h1 className="max-w-[20ch] font-display text-4xl font-bold md:text-5xl">
          What Afri3B can actually do right now, for anyone who asks.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          This isn&apos;t a student-only tool — every user gets the same grounded, honest
          reasoning. A student stress-testing a final-year project just happens to be the
          sharpest current example of the sector-by-sector specialism Afri3B is building toward,
          not who it&apos;s built exclusively for.
        </p>

        <CardList items={items} />

        <a
          href="https://afri3b.afrifoundry.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]"
        >
          Try it on your project →
        </a>
      </div>
    </section>
  );
}
