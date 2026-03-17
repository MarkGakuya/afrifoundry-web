'use client';
import Link from 'next/link';
import { LINKS, STATS } from '../lib/constants';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'AfriFoundry AI' },
  { href: '/data', label: 'The Dataset' },
  { href: '/about', label: 'About' },
  { href: '/founding', label: 'Founding 100' },
  { href: '/contact', label: 'Contact' },
];

const SOCIALS = [
  { href: LINKS.linkedin, label: 'LinkedIn', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { href: LINKS.twitter, label: 'X', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { href: LINKS.whatsapp, label: 'WhatsApp', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { href: LINKS.newsletter, label: 'Newsletter', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>

      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(249,115,22,0.07), rgba(245,158,11,0.03))',
        borderBottom: '1px solid rgba(249,115,22,0.1)',
        padding: '1.5rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1rem', margin: 0 }}>
          The thinking partner that knows Africa.
        </p>
        <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
          Talk to AfriFoundry AI →
        </a>
      </div>

      {/* Main — 2 columns: brand+connect LEFT, navigate RIGHT */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '2rem',
        padding: '2rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>

        {/* LEFT — Brand, socials, emails */}
        <div>
          <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem' }}>
            <span style={{ color: 'var(--orange)' }}>Afri</span>Foundry
          </div>
          <p style={{ color: 'var(--text3)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Data and intelligence infrastructure for Africa.
          </p>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 7,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  color: 'var(--text3)', textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--border2)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Emails */}
          <a href={`mailto:${LINKS.emailHello}`} style={{ display: 'block', color: 'var(--text3)', fontSize: '0.8rem', textDecoration: 'none', marginBottom: '0.2rem' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
            {LINKS.emailHello}
          </a>
          <a href={`mailto:${LINKS.emailAI}`} style={{ display: 'block', color: 'var(--text3)', fontSize: '0.8rem', textDecoration: 'none', marginBottom: '1rem' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
            {LINKS.emailAI}
          </a>

          {/* Legal */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/terms" style={{ color: 'var(--text3)', fontSize: '0.75rem', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>Terms</Link>
            <Link href="/privacy" style={{ color: 'var(--text3)', fontSize: '0.75rem', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>Privacy</Link>
          </div>
        </div>

        {/* RIGHT — Navigate */}
        <div style={{ minWidth: 120 }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '0.85rem' }}>
            Navigate
          </div>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: 'block', color: 'var(--text3)', textDecoration: 'none',
              fontSize: '0.82rem', padding: '0.25rem 0', whiteSpace: 'nowrap',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.85rem 2rem', flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)' }}>
          © 2026 AfriFoundry · Built in Kenya
        </span>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)' }}>
          Built by Africans. For Africans. Forged in context.
        </span>
      </div>
    </footer>
  );
}
