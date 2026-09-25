"use client";
import CardList from "@/components/CardList";
import TrainAfri3B from "@/components/TrainAfri3B";

const orgItems = [
  { title: "Language corpora — the biggest gap today", body: "Text and audio in Swahili, Kikuyu, Dholuo, Kalenjin, Maasai, Somali, Suba, Kambe, Luhya, and more. Parallel text (the same content in two languages) and paired audio-with-transcript are the most valuable — they're what the dictionary researcher and voice model actually need." },
  { title: "Real commerce and market data", body: "Pricing, listings, and vendor patterns from informal and secondhand markets specifically — the segment formal retail data doesn't cover." },
  { title: "Sector-specific data", body: "Real feasibility studies, market reports, and outcomes per sector — what lets Afri3B push back with something real instead of a generic guess." },
  { title: "Cultural context, as it's actually used", body: "Real writing that contains cultural terms in real use — never generated or inferred from general knowledge." },
];

export default function Contribute() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">CONTRIBUTE — ORGANIZATIONS</div>
        <h1 className="max-w-[18ch] font-display text-4xl font-bold md:text-5xl">
          What actually moves the pipeline forward.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          AfriFoundry works with universities, NGOs, language holders, and open-data initiatives
          — real sources only, never scraped and fabricated to look complete.
        </p>

        <CardList items={orgItems} />

        <div className="mt-8 border-l-2 border-gold pl-6">
          <p className="max-w-[50ch] text-lg italic text-ink">
            What we won&apos;t take: anything without clear provenance, or data requiring consent
            we can&apos;t verify. The same non-fabrication discipline that governs every response
            governs what goes into training it.
          </p>
        </div>

        <a
          href="mailto:hello@afrifoundry.com"
          className="mt-8 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]"
        >
          Propose a partnership
        </a>

        <div className="mt-16 border-t border-line pt-12">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">CONTRIBUTE — INDIVIDUALS</div>
          <h2 className="max-w-[24ch] font-display text-2xl font-bold">
            Know a language Afri3B is still learning? Teach it, live.
          </h2>
          <p className="mt-3 max-w-[60ch] text-ink-dim">
            A mini version of Afri3B lives right here, connected to the training pipeline. Teach
            it a word, correct something it got wrong, or just talk to it — every message is
            reviewed by hand before it enters the self-building dictionary, the same honesty
            discipline as everything else here.
          </p>
          <TrainAfri3B />
        </div>
      </div>
    </section>
  );
}
