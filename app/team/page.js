import Link from "next/link";
import RoleApplyChat from "@/components/RoleApplyChat";

export const metadata = { title: "Team — AfriFoundry" };

const roles = [
  {
    title: "Software engineers, backend and full-stack",
    summary: "APIs, infrastructure, and the pipelines that keep training and serving running on unreliable networks and growing corpora.",
    expects: [
      "Comfortable across the stack: today that's Next.js on the frontend, a TypeScript/Fastify API gateway, and a Python/FastAPI AI service, deployed on Railway.",
      "Can design for unreliable networks and a corpus that's growing daily, not a fixed dataset.",
      "Ships working code solo — there's no larger team to catch what a review would.",
    ],
  },
  {
    title: "ML / data engineers",
    summary: "Fine-tuning, the hybrid router, and the self-building dictionary — real model work on real African data, not prompt tweaking.",
    expects: [
      "Real experience with fine-tuning or training small/specialist models, not just calling an API.",
      "Comfortable building evaluation harnesses for languages with little existing tooling.",
      "Cares about the gating discipline — a domain only earns its own weights once it's actually tested.",
    ],
  },
  {
    title: "Data analysts and verifiers",
    summary: "Checking and grounding ingested data — including native or near-native speakers who can verify language and market entries firsthand.",
    expects: [
      "Native or near-native fluency in at least one African language Afri3B is ingesting.",
      "Meticulous with repetitive verification work — this is the job in the early stage, not a detour from it.",
      "Comfortable flagging \"not verified yet\" instead of guessing to fill a gap.",
    ],
  },
  {
    title: "Early operators who want to build from zero",
    summary: "Comfortable with ambiguity, comfortable being the first hire in a function rather than joining a built-out team.",
    expects: [
      "Generalist instincts — ops, growth, or partnerships, wherever the gap actually is that week.",
      "Can work without a playbook, because one doesn't exist yet for most of this.",
      "Wants to build the function, not just work inside one that's already defined.",
    ],
  },
];

export default function Team() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">TEAM</div>
        <h1 className="max-w-[20ch] font-display text-4xl font-bold md:text-5xl">
          Built solo so far. Growing now.
        </h1>

        <div className="mt-8 max-w-[62ch] border-l-2 border-gold pl-6">
          <p className="text-xl leading-relaxed text-ink">
            AfriFoundry has been bootstrapped and run solo from Mombasa since June 2025. There
            isn&apos;t a team page full of headshots yet, because there isn&apos;t a team yet —
            that&apos;s the honest state of things, and it&apos;s changing now.
          </p>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <h2 className="mb-7 font-display text-2xl font-bold">Who we&apos;re looking to bring on first</h2>
          <div className="space-y-1">
            {roles.map((r) => (
              <details key={r.title} className="group border-t border-line py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink-dim">{r.summary}</p>
                  </div>
                  <span className="shrink-0 font-mono text-lg text-gold group-open:hidden">+</span>
                  <span className="hidden shrink-0 font-mono text-lg text-gold group-open:inline">−</span>
                </summary>
                <div className="mt-4 max-w-[55ch]">
                  <p className="mb-2 text-sm font-semibold text-ink">What&apos;s expected</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-ink-dim">
                    {r.expects.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  <RoleApplyChat role={r.title} />
                  <a
                    href={`mailto:support@afrifoundry.com?subject=${encodeURIComponent("Application — " + r.title)}`}
                    className="mt-3 block text-xs text-ink-dim underline"
                  >
                    Or just email us directly
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <h2 className="mb-2 text-xl font-semibold">How joining actually works</h2>
          <ol className="mt-4 max-w-[55ch] space-y-4 text-ink-dim">
            <li>
              <span className="font-semibold text-ink">1. Start the conversation</span> — open
              a role above and click &quot;Start application conversation,&quot; or email
              support@afrifoundry.com directly if you&apos;d rather skip straight to a person.
            </li>
            <li>
              <span className="font-semibold text-ink">2. A conversation with Afri3B first</span>{" "}
              — the same Afri3B as the website, framed around the role you&apos;re applying
              for. It&apos;s a real conversation, not a scripted quiz, and it&apos;s not the
              decision-maker — a human reads the full transcript afterward.
            </li>
            <li>
              <span className="font-semibold text-ink">3. Founding Circle</span> — approved
              applicants join a smaller working group inside the AfriFoundry community first.
            </li>
            <li>
              <span className="font-semibold text-ink">4. Core team</span> — once you&apos;re
              embedded and contributing, you move into the main AfriFoundry team space.
            </li>
          </ol>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <h2 className="mb-2 text-xl font-semibold">Where things stand, honestly</h2>
          <p className="max-w-[55ch] text-ink-dim">
            AfriFoundry is bootstrapped and pre-revenue — there&apos;s no set salary band to
            quote yet. What&apos;s realistic today is a mix of contract work, deferred pay, and
            equity depending on the role and how it fits into what you&apos;re looking for.
            There&apos;s no fixed template for this — it gets worked out directly, person by
            person, based on what makes sense for both sides.
          </p>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <Link href="/marketing/studio" className="text-xs text-ink-dim underline">
            Team tools: Marketing Studio →
          </Link>
        </div>
      </div>
    </section>
  );
}
