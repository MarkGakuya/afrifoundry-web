import Link from 'next/link';
import { LINKS, STATS } from '../lib/constants';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(245,158,11,0.04))',
        borderBottom: '1px solid rgba(249,115,22,0.1)',
        padding: '2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.2rem' }}>
            The thinking partner that knows Africa.
          </p>
          <p style={{ color: 'var(--text3)', fontSize: '0.85rem', fontFamily: 'var(--font-jetbrains)', letterSpacing: '0.04em' }}>
            {STATS.datapoints} verified datapoints. Live now.
          </p>
        </div>
        <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Talk to AfriFoundry AI →
        </a>
      </div>

      {/* Columns */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
        maxWidth: 1100, margin: '0 auto',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Col 1 */}
        <div style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--orange)' }}>Afri</span>Foundry
          </div>
          <p style={{ color: 'var(--text3)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.25rem' }}>
            Data and intelligence infrastructure for Africa. Building the Bloomberg Terminal of the continent — starting with the data nobody collected.
          </p>
          <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em' }}>
            📍 Mombasa, Kenya · Est. 2025
          </p>
        </div>

        {/* Col 2 */}
        <div style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '1rem' }}>
            Navigate
          </div>
          {[
            { href: '/', label: 'Home' },
            { href: '/product', label: 'AfriFoundry AI' },
            { href: '/data', label: 'The Dataset' },
            { href: '/about', label: 'About' },
            { href: '/founding', label: 'Founding 100' },
            { href: '/contact', label: 'Contact' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              display: 'block', color: 'var(--text3)', textDecoration: 'none',
              fontSize: '0.85rem', padding: '0.28rem 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 3 */}
        <div style={{ padding: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '1rem' }}>
            Connect
          </div>
          <a href={`mailto:${LINKS.email}`} style={{ display: 'block', color: 'var(--text3)', textDecoration: 'none', fontSize: '0.85rem', padding: '0.28rem 0' }}>
            {LINKS.email}
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'var(--text3)', textDecoration: 'none', fontSize: '0.85rem', padding: '0.28rem 0' }}>
            LinkedIn
          </a>
          <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'var(--text3)', textDecoration: 'none', fontSize: '0.85rem', padding: '0.28rem 0' }}>
            Twitter / X
          </a>
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--border2)', marginBottom: '0.5rem' }}>
              Newsletter
            </div>
            <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)',
              color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 600,
              padding: '0.45rem 0.85rem', borderRadius: '6px', textDecoration: 'none',
            }}>
              📰 The Validation Point →
            </a>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <Link href="/terms" style={{ color: 'var(--text3)', fontSize: '0.8rem', textDecoration: 'none', marginRight: '1rem' }}>Terms</Link>
            <Link href="/privacy" style={{ color: 'var(--text3)', fontSize: '0.8rem', textDecoration: 'none' }}>Privacy</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem', flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)' }}>
          © 2026 AfriFoundry · Built in Kenya · {STATS.datapoints} datapoints
        </span>
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)' }}>
          Built by Africans. For Africans. Forged in context.
        </span>
      </div>
    </footer>
  );
}
