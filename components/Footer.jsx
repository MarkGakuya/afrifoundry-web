import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/afrifoundry",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/AfriFoundry",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[16px] w-[16px]">
        <path d="M18.9 2H22l-7.6 8.68L23.3 22h-7l-5.48-7.16L4.5 22H1.4l8.13-9.3L1 2h7.17l4.95 6.55L18.9 2Zm-1.23 18.17h1.72L6.42 3.75H4.57l13.1 16.42Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029VbB1Yu07T8beQCLSJZ0I",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.36A10 10 0 1 0 12 2Zm5.55 14.27c-.24.66-1.4 1.27-1.93 1.31-.5.05-1.06.24-3.58-.86-3.02-1.32-4.96-4.5-5.1-4.71-.15-.2-1.23-1.64-1.23-3.13 0-1.5.78-2.23 1.07-2.53.28-.3.6-.36.81-.36h.58c.2 0 .44-.03.68.55.24.6.82 2.05.9 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.16.3.72 1.24 1.57 2 1.08.98 1.98 1.28 2.28 1.43.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.14.28.1 1.75.83 2.05.98.3.15.5.22.57.35.08.13.08.72-.16 1.38Z" />
      </svg>
    ),
  },
  {
    label: "The Validation Point (newsletter)",
    href: "https://www.linkedin.com/newsletters/the-validation-point-7401988315769634816",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[16px] w-[16px]">
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.2.5 6.8 5.1L18.8 6H5.2ZM19 8.1l-6.4 4.8a1 1 0 0 1-1.2 0L5 8.1V18h14V8.1Z" />
      </svg>
    ),
  },
];

const contacts = [
  { email: "hello@afrifoundry.com", label: "General", body: "Questions, press, or just saying hello." },
  { email: "partnerships@afrifoundry.com", label: "Partnerships", body: "Marketplaces and platforms integrating Afri3B." },
  { email: "support@afrifoundry.com", label: "Investors, support & everything else", body: "Investor inquiries, team applications, product support." },
];

const exploreLinks = [
  { href: "/product", label: "Product" },
  { href: "/partners", label: "For Partners" },
  { href: "/users", label: "Users" },
  { href: "/developers", label: "Developers" },
  { href: "/contribute", label: "Contribute" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <Image src="/logo.jpg" alt="AfriFoundry logo" width={28} height={28} className="rounded" />
              AfriFoundry
            </Link>
            <p className="mt-4 max-w-[32ch] text-sm text-ink-dim">
              The data and intelligence infrastructure layer for Africa. Bootstrapped solo from
              Mombasa since June 2025.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AfriFoundry — ${s.label}`}
                  title={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-ink-dim transition-colors hover:text-ink"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">EXPLORE</div>
            <div className="flex flex-col gap-2.5 text-sm text-ink-dim">
              {exploreLinks.map((l) => (
                <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">COMPANY</div>
            <div className="flex flex-col gap-2.5 text-sm text-ink-dim">
              <Link href="/about" className="transition-colors hover:text-ink">
                About
              </Link>
              <Link href="/team" className="flex items-center gap-2 transition-colors hover:text-ink">
                Team
                <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">
                  We&apos;re hiring
                </span>
              </Link>
              <Link href="/investors" className="transition-colors hover:text-ink">
                Investors
              </Link>
              <Link href="/community" className="font-semibold text-gold transition-colors hover:text-gold/80">
                Join the community →
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">GET IN TOUCH</div>
            <div className="space-y-3">
              {contacts.map((c) => (
                <div key={c.email}>
                  <a href={`mailto:${c.email}`} className="text-sm font-semibold text-gold hover:underline">
                    {c.email}
                  </a>
                  <p className="text-xs text-ink-dim">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-ink-dim">
          <p>&copy; 2026 AfriFoundry Limited.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
