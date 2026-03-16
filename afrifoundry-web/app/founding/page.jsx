import Link from 'next/link';
import { STATS, LINKS, FOUNDING_MEMBERS } from '../../lib/constants';

export const metadata = {
  title: 'Founding 100 — AfriFoundry',
  description: `${STATS.foundingClaimed} entrepreneurs believed before anyone else did. ${STATS.foundingLeft} spots remaining. The Founding 100 wall closes permanently when paid plans launch.`,
};

const RESERVED = Array.from({ length: STATS.foundingTotal - STATS.foundingClaimed }, (_, i) => ({
  num: `#${String(STATS.foundingClaimed + i + 1).padStart(3, '0')}`,
  reserved: true,
}));

export default function FoundingPage() {
  const firstTen = FOUNDING_MEMBERS.slice(0, 10);
  const rest = FOUNDING_MEMBERS.slice(10);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '9rem 1.5rem 5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 65%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3, maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Urgent pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.4)',
            color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem',
            letterSpacing: '0.15em', padding: '0.4rem 1.1rem', borderRadius: 100,
            marginBottom: '1.75rem',
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block', animation: 'pulse-dot 1.5s infinite' }} />
            {STATS.foundingLeft} SPOTS LEFT · CLOSING SOON
          </div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.6rem,6vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            The Founding 100
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {STATS.foundingClaimed} entrepreneurs believed in AfriFoundry before anyone else did. Their names are permanent. When this closes, founding members get the best deal AfriFoundry will ever offer — guaranteed.
          </p>

          {/* Progress */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '2rem',
            background: 'var(--surface)', border: '1px solid var(--border2)',
            borderRadius: 12, padding: '1.25rem 2rem', marginBottom: '2.5rem',
            flexWrap: 'wrap', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--green)', lineHeight: 1 }}>{STATS.foundingClaimed}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text2)', marginTop: '0.2rem' }}>claimed</div>
            </div>
            <div style={{ width: 180 }}>
              <div style={{ background: 'var(--border)', borderRadius: 100, height: 6, overflow: 'hidden', marginBottom: '0.4rem' }}>
                <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--green), #0fa56e)', borderRadius: 100, width: `${STATS.foundingClaimed}%` }} />
              </div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.08em', textAlign: 'center' }}>
                {STATS.foundingLeft} plates remaining
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--text3)', lineHeight: 1 }}>{STATS.foundingTotal}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text2)', marginTop: '0.2rem' }}>total</div>
            </div>
          </div>

          <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
            Claim Your Spot →
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center' }}>
            {[
              'Permanent name on the Founding Wall',
              'Best pricing AfriFoundry will ever offer — guaranteed',
              'Early access to every new feature',
              'Direct line to the founder',
              'Part of African AI history',
            ].map(b => (
              <div key={b} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.55rem 1.1rem', background: 'var(--surface)',
                border: '1px solid var(--border)', borderRadius: 100,
              }}>
                <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text2)' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HALL OF FAME WALL */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>

          {/* Wall outer frame */}
          <div style={{
            position: 'relative', borderRadius: 20, padding: 3,
            background: 'linear-gradient(135deg, rgba(249,115,22,0.7), rgba(245,158,11,0.4), rgba(38,50,71,0.9), rgba(16,185,129,0.3), rgba(249,115,22,0.5))',
            boxShadow: '0 0 80px rgba(249,115,22,0.08), 0 0 160px rgba(245,158,11,0.04)',
          }}>
            <div style={{
              background: 'linear-gradient(160deg, #0c1525 0%, #080d1a 60%, #0b1422 100%)',
              borderRadius: 18, padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden',
            }}>
              <div className="noise-bg" />
              {/* Inner border */}
              <div style={{ position: 'absolute', inset: 12, border: '1px solid rgba(249,115,22,0.06)', borderRadius: 10, pointerEvents: 'none' }} />

              {/* Wall header */}
              <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(245,158,11,0.06))',
                  border: '1px solid rgba(249,115,22,0.3)', borderRadius: 100,
                  padding: '0.3rem 1.2rem', marginBottom: '1rem',
                }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)', fontWeight: 600 }}>
                    Official Record · AfriFoundry · Est. 2025
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #fff 0%, rgba(249,115,22,0.9) 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  marginBottom: '0.3rem',
                }}>The Founding 100</h2>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Those who believed first
                </div>
                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.5rem 0 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)' }} />
                  <span style={{ color: 'var(--orange)', fontSize: '0.75rem', opacity: 0.7 }}>✦</span>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)' }} />
                </div>
              </div>

              {/* First 10 — FOUNDERS TIER */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textAlign: 'center', marginBottom: '0.85rem', opacity: 0.8 }}>
                  ◆ FOUNDING PIONEERS · #001 – #010 ◆
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.6rem' }}>
                  {firstTen.map(m => (
                    <div key={m.num} style={{
                      background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(249,115,22,0.05))',
                      border: '1px solid rgba(245,158,11,0.25)', borderRadius: 10,
                      padding: '0.85rem 0.9rem',
                      boxShadow: '0 0 12px rgba(245,158,11,0.06)',
                    }}>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', color: 'var(--gold)', opacity: 0.7, letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{m.num}</div>
                      <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.85rem', color: m.name === 'Mark Gakuya' ? 'var(--orange)' : '#fff', lineHeight: 1.3 }}>{m.name}</div>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', color: 'var(--text3)', letterSpacing: '0.08em', marginTop: '0.25rem' }}>{m.city}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)', margin: '1.5rem 0' }} />

              {/* Rest of members */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {rest.map(m => (
                  <div key={m.num} style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(38,50,71,0.6)',
                    borderRadius: 8, padding: '0.7rem 0.85rem',
                    transition: 'border-color 0.2s',
                  }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.52rem', color: 'var(--text3)', opacity: 0.6, letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{m.num}</div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.3 }}>{m.name}</div>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.5rem', color: 'var(--text3)', letterSpacing: '0.08em', marginTop: '0.2rem', opacity: 0.6 }}>{m.city}</div>
                  </div>
                ))}

                {/* Reserved slots */}
                {RESERVED.map(r => (
                  <div key={r.num} style={{
                    background: 'transparent', border: '1px dashed rgba(38,50,71,0.4)',
                    borderRadius: 8, padding: '0.7rem 0.85rem',
                  }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.52rem', color: 'var(--border2)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{r.num}</div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '0.78rem', color: 'var(--border2)', lineHeight: 1.3 }}>Your name here</div>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.5rem', color: 'var(--border2)', letterSpacing: '0.08em', marginTop: '0.2rem' }}>UNCLAIMED</div>
                  </div>
                ))}
              </div>

              {/* Wall footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(249,115,22,0.08)' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>
                  AfriFoundry · Mombasa, Kenya · Est. 2025
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 100, padding: '0.2rem 0.75rem' }}>
                  <span style={{ width: 5, height: 5, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', color: 'var(--green)', letterSpacing: '0.1em' }}>{STATS.foundingClaimed} / {STATS.foundingTotal} Claimed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below wall */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 480, margin: '0 auto 1.5rem' }}>
              Only {STATS.foundingLeft} engraved plates remain. Once the wall closes, it closes permanently.
            </p>
            <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
              Claim Your Spot →
            </a>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', color: 'var(--text3)', marginTop: '1rem', letterSpacing: '0.05em' }}>
              Closes at 100 members — or when paid plans launch. Whichever comes first.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
