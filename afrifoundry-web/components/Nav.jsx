'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LINKS } from '../lib/constants';

const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/data', label: 'Data' },
  { href: '/about', label: 'About' },
  { href: '/founding', label: 'Founding 100' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.9rem 2rem',
      background: scrolled ? 'rgba(8,12,24,0.95)' : 'rgba(8,12,24,0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(38,50,71,0.6)' : 'transparent'}`,
      transition: 'all 0.3s',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <span style={{ color: 'var(--orange)', fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
          Afri<span style={{ color: '#fff' }}>Foundry</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center', listStyle: 'none', margin: 0 }}
          className="hidden md:flex">
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={{
              color: 'var(--text3)', textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: 500,
              transition: 'color 0.2s',
              fontFamily: 'var(--font-dm)',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'var(--text3)'}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          color: 'var(--orange)', border: '1px solid rgba(249,115,22,0.35)',
          padding: '0.42rem 1rem', borderRadius: '7px',
          fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '0.05em',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.08)'; e.currentTarget.style.borderColor = 'var(--orange)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; }}>
          <span className="live-dot" style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
          Try AfriFoundry AI
        </a>
      </div>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="md:hidden" style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
      }}>
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--text2)', borderRadius: 2 }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: 'var(--text2)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
            }}>{l.label}</Link>
          ))}
          <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: 'fit-content' }}>
            Try AfriFoundry AI →
          </a>
        </div>
      )}
    </nav>
  );
}
