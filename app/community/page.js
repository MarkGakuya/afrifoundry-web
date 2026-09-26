import Link from "next/link";

export const metadata = { title: "Community — AfriFoundry" };

const COMMUNITY_NAME = "the Forge";
const COMMUNITY_NAME_TITLE = "The Forge";

// TODO: replace with the actual invite link for The Forge — the main
// public group, open for anyone to join. Founding Circle and AfriFoundry
// Team are reached through the application flow on /team, not joined
// directly from here.
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/REPLACE_WITH_INVITE_LINK";

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

const groups = [
  {
    name: "Announcements",
    who: "Everyone in the community, automatically",
    body: "Official updates only — a shipped feature, a milestone, a real number that changed. Read-only, low-noise, the one channel where you'll never miss what actually matters.",
  },
  {
    name: COMMUNITY_NAME_TITLE,
    who: "Open — this is the one you join below",
    body: "The main room. Discussion, language and market insight, first look at what's shipping, and the weekly rhythm of content described below. Small enough on purpose — showing up still means something.",
  },
  {
    name: "Founding Circle",
    who: "By application — see /team",
    body: "A smaller working group for people moving through the team application process, after a first conversation with Afri3B and before joining the core team.",
  },
  {
    name: "AfriFoundry Team",
    who: "Core team only",
    body: "Where the actual work happens day to day, once someone's fully in.",
  },
];

export default function Community() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          THE AFRIFOUNDRY COMMUNITY
        </div>
        <h1 className="max-w-[22ch] font-display text-4xl font-bold md:text-5xl">
          You&apos;re not just using Afri3B. You&apos;re part of forging it.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          AfriFoundry started as one person, bootstrapped, from Mombasa. It doesn&apos;t stay
          that way by accident — it grows because people who believe African AI infrastructure
          should be built by Africans, from African ground truth, show up and help build it.
          That&apos;s the movement. {COMMUNITY_NAME_TITLE} is where it happens — raw language,
          raw market knowledge, raw correction, shaped into something real.
        </p>

        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-[#17140c] transition-transform hover:-translate-y-0.5"
        >
          Join {COMMUNITY_NAME} →
        </a>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="mb-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-ink-dim">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
            HOW IT&apos;S STRUCTURED
          </div>
          <h2 className="max-w-[28ch] font-display text-2xl font-bold">
            One community, four rooms — each with an actual reason to exist.
          </h2>
          <p className="mt-4 max-w-[55ch] text-ink-dim">
            Not four groups for the sake of it — four distinct stages, from "just joined" to
            "on the core team," each with a different amount of noise and a different bar to
            get in.
          </p>
          <div className="mt-8 space-y-6">
            {groups.map((g, i) => (
              <div key={g.name} className="flex gap-5 border-t border-line pt-6 first:border-t-0 first:pt-0">
                <div className="font-mono text-sm text-ink-dim">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-semibold text-ink">{g.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-gold">{g.who}</p>
                  <p className="mt-2 max-w-[55ch] text-sm text-ink-dim">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
              THE GROUPS ARE FOR PEOPLE
            </div>
            <h2 className="font-display text-2xl font-bold">Human-run, on purpose.</h2>
            <p className="mt-4 max-w-[55ch] text-ink-dim">
              WhatsApp doesn&apos;t let a bot join or post inside a group chat — not a limit
              we&apos;re working around, a deliberate one we respect. Every room above stays
              what it&apos;s always been: real conversation, run by people.
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
            pipeline. Or see an open role and start an application conversation on{" "}
            <Link href="/team" className="text-gold underline">
              Team
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
