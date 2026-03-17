import Link from 'next/link';
import { STATS, LINKS, FOUNDING_MEMBERS } from '../../lib/constants';

export const metadata = {
  title: 'Founding 100 — AfriFoundry',
  description: `${STATS.foundingClaimed} entrepreneurs believed in AfriFoundry before anyone else. ${STATS.foundingLeft} spots remain. The wall closes permanently when paid plans launch.`,
};

const RESERVED = Array.from({ length: STATS.foundingTotal - STATS.foundingClaimed }, (_, i) => ({
  num: `#${String(STATS.foundingClaimed + i + 1).padStart(3, '0')}`,
}));

const PIONEER_TIER = FOUNDING_MEMBERS.slice(0, 10);
const MAIN_WALL = FOUNDING_MEMBERS.slice(10);

export default function FoundingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '9rem 1.5rem 5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 65%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25, maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)' }} />

        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.4)',
            color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem',
            letterSpacing: '0.15em', padding: '0.4rem 1.1rem', borderRadius: 100, marginBottom: '1.75rem',
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
            {STATS.foundingLeft} SPOTS LEFT · CLOSING SOON
          </div>

          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.8rem,6vw,4.8rem)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            The Founding 100
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 'clamp(1rem,2vw,1.1rem)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 2.5rem' }}>
            {STATS.foundingClaimed} people believed in AfriFoundry before anyone else. Their names are permanent — engraved on this wall forever. When this closes, it closes.
          </p>

          {/* Progress counter */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '2rem',
            background: 'var(--surface)', border: '1px solid var(--border2)',
            borderRadius: 14, padding: '1.25rem 2.5rem', marginBottom: '2.5rem',
            flexWrap: 'wrap', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--green)', lineHeight: 1 }}>{STATS.foundingClaimed}</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.1em', marginTop: '0.3rem' }}>CLAIMED</div>
            </div>
            <div style={{ width: 200 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 100, height: 8, overflow: 'hidden', marginBottom: '0.5rem' }}>
                <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--green), #0fa56e)', borderRadius: 100, width: `${STATS.foundingClaimed}%`, transition: 'width 1.2s ease' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.08em', textAlign: 'center' }}>
                {STATS.foundingLeft} of {STATS.foundingTotal} remaining
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--border2)', lineHeight: 1 }}>{STATS.foundingTotal}</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.1em', marginTop: '0.3rem' }}>TOTAL</div>
            </div>
          </div>

          <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
            Claim Your Spot →
          </a>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center' }}>
          {[
            '🏛️ Permanent name on the Founding Wall',
            '💎 Best pricing AfriFoundry will ever offer',
            '⚡ Early access to every new feature',
            '📞 Direct line to the founder',
            '🌍 Part of African AI history',
          ].map(b => (
            <div key={b} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.55rem 1.1rem', background: 'var(--surface)',
              border: '1px solid var(--border)', borderRadius: 100,
              fontSize: '0.85rem', color: 'var(--text2)',
            }}>{b}</div>
          ))}
        </div>
      </section>

      {/* ── THE WALL ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem 7rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>

          {/* Outer frame */}
          <div style={{
            borderRadius: 24, padding: 2,
            background: 'linear-gradient(145deg, rgba(249,115,22,0.6) 0%, rgba(245,158,11,0.3) 30%, rgba(30,45,70,0.8) 60%, rgba(249,115,22,0.4) 100%)',
            boxShadow: '0 0 100px rgba(249,115,22,0.06), 0 40px 80px rgba(0,0,0,0.5)',
          }}>
            <div style={{
              background: 'linear-gradient(170deg, #0d1726 0%, #080c18 50%, #0b1220 100%)',
              borderRadius: 22, padding: '3rem 2.5rem',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Subtle texture */}
              <div className="noise-bg" style={{ opacity: 0.4 }} />
              {/* Inner decorative border */}
              <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(249,115,22,0.05)', borderRadius: 10, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: 20, border: '1px solid rgba(255,255,255,0.02)', borderRadius: 8, pointerEvents: 'none' }} />

              {/* Wall Header */}
              <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(245,158,11,0.06))',
                  border: '1px solid rgba(249,115,22,0.25)', borderRadius: 100,
                  padding: '0.35rem 1.5rem', marginBottom: '1.25rem',
                }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--orange)', fontWeight: 600 }}>
                    OFFICIAL RECORD · AFRIFOUNDRY · EST. 2025
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 'clamp(2rem,5vw,3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #fff 0%, rgba(249,115,22,0.95) 55%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  marginBottom: '0.4rem',
                }}>
                  The Founding 100
                </h2>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--text3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Those Who Believed First
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem 0 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)' }} />
                  <span style={{ color: 'var(--orange)', fontSize: '0.9rem', opacity: 0.6 }}>✦</span>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)' }} />
                </div>
              </div>

              {/* Pioneer Tier — #001 to #010 */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', textAlign: 'center', marginBottom: '1.25rem', opacity: 0.85 }}>
                  ◆ FOUNDING PIONEERS · #001 – #010 ◆
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.75rem' }}>
                  {PIONEER_TIER.map(m => (
                    <div key={m.num} style={{
                      background: m.name === 'Mark Gakuya'
                        ? 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.08))'
                        : 'linear-gradient(135deg, rgba(245,158,11,0.07), rgba(249,115,22,0.04))',
                      border: m.name === 'Mark Gakuya' ? '1px solid rgba(249,115,22,0.4)' : '1px solid rgba(245,158,11,0.2)',
                      borderRadius: 12, padding: '1rem 1.1rem',
                      boxShadow: m.name === 'Mark Gakuya' ? '0 0 20px rgba(249,115,22,0.1)' : '0 0 10px rgba(245,158,11,0.05)',
                    }}>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.52rem', color: 'var(--gold)', opacity: 0.7, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{m.num}</div>
                      <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.88rem', color: m.name === 'Mark Gakuya' ? 'var(--orange)' : '#fff', lineHeight: 1.35 }}>{m.name}</div>
                      <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.52rem', color: 'var(--text3)', letterSpacing: '0.1em', marginTop: '0.3rem' }}>{m.city}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', color: 'var(--text3)', letterSpacing: '0.15em' }}>THE FOUNDING WALL</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
              </div>

              {/* Main Wall — #011 onwards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {MAIN_WALL.map(m => (
                  <div key={m.num} style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 10, padding: '0.85rem 1rem',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.5rem', color: 'var(--text3)', opacity: 0.5, letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{m.num}</div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.35 }}>{m.name}</div>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.5rem', color: 'var(--text3)', letterSpacing: '0.08em', marginTop: '0.25rem', opacity: 0.55 }}>{m.city}</div>
                  </div>
                ))}

                {/* Open spots */}
                {RESERVED.map(r => (
                  <div key={r.num} style={{
                    background: 'transparent',
                    border: '1px dashed rgba(255,255,255,0.08)',
                    borderRadius: 10, padding: '0.85rem 1rem',
                  }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{r.num}</div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '0.82rem', color: 'rgba(255,255,255,0.12)', lineHeight: 1.35 }}>Your name here</div>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.1)', letterSpacing: '0.08em', marginTop: '0.25rem' }}>OPEN</div>
                  </div>
                ))}
              </div>

              {/* Wall footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(249,115,22,0.07)' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.1em' }}>
                  AfriFoundry · Mombasa, Kenya · Est. July 2025
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 100, padding: '0.25rem 0.9rem' }}>
                  <span style={{ width: 5, height: 5, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', color: 'var(--green)', letterSpacing: '0.1em' }}>{STATS.foundingClaimed} / {STATS.foundingTotal} Claimed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: 460, margin: '0 auto 1.75rem' }}>
              Only {STATS.foundingLeft} plates remain. When paid plans launch, this wall closes permanently.
            </p>
            <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
              Claim Your Spot →
            </a>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', marginTop: '1.1rem', letterSpacing: '0.05em' }}>
              Closes at 100 members or when paid plans launch — whichever comes first.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
