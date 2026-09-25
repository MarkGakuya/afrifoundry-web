import Link from "next/link";

export const metadata = { title: "Community — AfriFoundry" };

// TODO: replace with the actual WhatsApp Group invite link (the interactive
// Founding Group, not the WhatsApp Channel linked in the footer — those are
// two different WhatsApp products).
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/REPLACE_WITH_GROUP_INVITE_LINK";

// AfriFoundry's WhatsApp Business number (Cloud API), in international
// format with no "+" or spaces, e.g. "254712345678". Falls back to a
// placeholder until NEXT_PUBLIC_WHATSAPP_NUMBER is set in Vercel.
const WHATSAPP_BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "REPLACE_WITH_NUMBER";

const pillars = [
  {
    title: "Ownership, the real kind",
    body: "Not equity, not assets — the sense that comes from actually being part of building Africa's own AI infrastructure from the ground up, not just using something someone else made.",
  },
  {
    title: "Insight, before it's public",
    body: "Where new language entries, product decisions, and honest progress get shared first — the same discipline as the website, no polish added for the room.",
  },
  {
    title: "A hand in the training itself",
    body: "The people who teach Afri3B a word it doesn't know yet, correct it when it's wrong, or push back on an assumption it made.",
  },
];

export default function Community() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          THE AFRIFOUNDRY COMMUNITY
        </div>
        <h1 className="max-w-[20ch] font-display text-4xl font-bold md:text-5xl">
          You&apos;re not just using Afri3B. You&apos;re part of building it.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          AfriFoundry started as one person, bootstrapped, from Mombasa. It doesn&apos;t stay
          that way by accident — it grows because people who believe African AI infrastructure
          should be built by Africans, from African ground truth, show up and help build it.
          That&apos;s the movement. The Founding Group is where it happens.
        </p>

        <div className="mt-8 border-l-2 border-gold pl-6">
          <p className="max-w-[55ch] text-lg italic text-ink">
            Currently 69 members and active — the earliest people in the room, before any of
            this was proven. This page is the rebuild around what that group is actually for.
          </p>
        </div>

        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-[#17140c] transition-transform hover:-translate-y-0.5"
        >
          Join the Founding Group →
        </a>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="mb-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-ink-dim">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
              THE GROUP IS FOR PEOPLE
            </div>
            <h2 className="font-display text-2xl font-bold">Human-run, on purpose.</h2>
            <p className="mt-4 max-w-[55ch] text-ink-dim">
              WhatsApp doesn&apos;t let a bot join or post inside a group chat — not a limit
              we&apos;re working around, a deliberate one we respect. So the Founding Group
              stays what it&apos;s always been: real conversation, run by people.
            </p>
          </div>
          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
              AFRI3B IS ONE DM AWAY
            </div>
            <h2 className="font-display text-2xl font-bold">Message it directly, anytime.</h2>
            <p className="mt-4 max-w-[55ch] text-ink-dim">
              Afri3B runs behind AfriFoundry&apos;s own WhatsApp number — a real one-on-one
              conversation, the same Afri3B as the website, in your language.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent("Hi Afri3B")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[#17140c] transition-transform hover:-translate-y-0.5"
            >
              Message Afri3B on WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <p className="max-w-[55ch] text-ink-dim">
            Want to contribute directly to training instead? Head to{" "}
            <Link href="/contribute" className="text-gold underline">
              Contribute
            </Link>{" "}
            — a live mini version of Afri3B lives there, connected straight to the training
            pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
