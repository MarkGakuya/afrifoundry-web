import Link from "next/link";
import CardList from "@/components/CardList";

export const metadata = { title: "Team — AfriFoundry" };

const roles = [
  {
    title: "Software engineers, backend and full-stack",
    body: "APIs, infrastructure, and the pipelines that keep training and serving running on unreliable networks and growing corpora.",
  },
  {
    title: "ML / data engineers",
    body: "Fine-tuning, the hybrid router, and the self-building dictionary - real model work on real African data, not prompt tweaking.",
  },
  {
    title: "Data analysts and verifiers",
    body: "Checking and grounding ingested data - including native or near-native speakers who can verify language and market entries firsthand.",
  },
  {
    title: "Early operators who want to build from zero",
    body: "Comfortable with ambiguity, comfortable being the first hire in a function rather than joining a built-out team.",
  },
];

export default function Team() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">TEAM</div>
        <h1 className="max-w-[20ch] font-display text-4xl font-bold md:text-5xl">
          Built solo so far. Growing now.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          AfriFoundry has been bootstrapped and run solo from Mombasa since June 2025. There
          isn&apos;t a team page full of headshots yet, because there isn&apos;t a team yet -
          that&apos;s the honest state of things, and it&apos;s changing now.
        </p>

        <div className="mt-10 border-l-2 border-gold pl-6">
          <p className="max-w-[55ch] text-lg italic text-ink">
            Who we&apos;re looking to bring on first:
          </p>
        </div>

        <CardList items={roles} />

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="mb-2 text-xl font-semibold">Where things stand, honestly</h2>
          <p className="max-w-[55ch] text-ink-dim">
            AfriFoundry is bootstrapped and pre-revenue, there&apos;s no set salary band to
            quote yet. What&apos;s realistic today is a mix of contract work, deferred pay, and
            equity depending on the role and how it fits into what you&apos;re looking for.
            There&apos;s no fixed template for this - it gets worked out directly, person by
            person, based on what makes sense for both sides.
          </p>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="mb-2 text-xl font-semibold">Think you&apos;re a fit?</h2>
          <p className="max-w-[55ch] text-ink-dim">
            If one of these sounds like you, reach out directly, every message gets read by
            the founder, not a hiring pipeline.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
