'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      padding: '0 2rem',
      height: '64px',
      background: scrolled ? 'rgba(8,12,24,0.97)' : 'rgba(8,12,24,0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(38,50,71,0.7)' : 'transparent'}`,
      transition: 'all 0.3s',
    }}>

      {/* ── Logo ── */}
      <Link href="/" style={{
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        textDecoration: 'none', flexShrink: 0,
      }}>
        {/* Logo image — white bg is hidden via mix-blend-mode on dark nav */}
        <div style={{
          width: 38, height: 38, flexShrink: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Image
            src="/logo.png"
            alt="AfriFoundry Logo"
            width={38}
            height={38}
            style={{
              objectFit: 'contain',
              mixBlendMode: 'lighten',
              filter: 'brightness(1.05)',
            }}
            priority
          />
        </div>
        <span style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800,
          fontSize: '1.12rem', letterSpacing: '-0.02em', lineHeight: 1,
        }}>
          <span style={{ color: 'var(--orange)' }}>Afri</span>
          <span style={{ color: '#fff' }}>Foundry</span>
        </span>
      </Link>

      {/* ── Desktop links ── */}
      <ul style={{
        display: 'flex', gap: '2rem', alignItems: 'center',
        listStyle: 'none', margin: 0, padding: 0,
      }} className="hidden md:flex">
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={{
              color: 'var(--text3)', textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: 500,
              fontFamily: 'var(--font-dm)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* ── CTA ── */}
      <div className="hidden md:flex" style={{
        display: 'flex', alignItems: 'center', flexShrink: 0,
      }}>
        <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
          color: 'var(--orange)', border: '1px solid rgba(249,115,22,0.35)',
          padding: '0.45rem 1.1rem', borderRadius: '8px',
          fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '0.04em',
          transition: 'background 0.2s, border-color 0.2s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.1)'; e.currentTarget.style.borderColor = 'var(--orange)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; }}>
          <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
          Try AfriFoundry AI
        </a>
      </div>

      {/* ── Hamburger ── */}
      <button onClick={() => setOpen(!open)} className="md:hidden" style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: 5, padding: 6, flexShrink: 0,
      }} aria-label="Toggle menu">
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: 22, height: 2,
            background: open ? 'var(--orange)' : 'var(--text2)',
            borderRadius: 2, transition: 'background 0.2s',
          }} />
        ))}
      </button>

      {/* ── Mobile menu ── */}
      {open && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'rgba(8,12,24,0.98)', borderBottom: '1px solid var(--border)',
          padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
          backdropFilter: 'blur(20px)',
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: 'var(--text2)', textDecoration: 'none',
              fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-dm)',
            }}>{l.label}</Link>
          ))}
          <a href={LINKS.ai} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ width: 'fit-content', marginTop: '0.25rem' }}>
            Try AfriFoundry AI →
          </a>
        </div>
      )}
    </nav>
  );
}
