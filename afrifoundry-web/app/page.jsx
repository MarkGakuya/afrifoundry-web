'use client';
import Link from 'next/link';
import { STATS, LINKS } from '../lib/constants';

const TICKER_ITEMS = [
  'Avocado · Kiambu · KES 120/kg', 'Sukuma Wiki · Wakulima · KES 15/bunch',
  'Maize · Gikomba · KES 65/kg', 'Tomatoes · Kongowea · KES 90/kg',
  'Tilapia · Kisumu · KES 450/kg', 'Milk · Limuru · KES 60/L',
  'Boda ride · Nairobi · KES 50', 'Chapati · Mombasa CBD · KES 20',
  'Omena · Kibuye · KES 80/250g', 'Onions · Marikiti · KES 95/kg',
  'Unga 2kg · Tuskys · KES 185', 'Rent · Kisumu 1BR · KES 8,500/mo',
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: 'clamp(5rem, 10vw, 9rem) 1.5rem clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden',
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 75% 55% at 50% -5%, rgba(249,115,22,0.12) 0%, transparent 68%), radial-gradient(ellipse 40% 35% at 80% 95%, rgba(16,185,129,0.05) 0%, transparent 60%), #080C18',
        }} />
        <div className="grid-bg noise-bg" style={{ position: 'absolute', inset: 0,
          maskImage: 'radial-gradient(ellipse 95% 70% at 50% 0%, black 0%, transparent 80%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860 }}>
          {/* Company pill */}
          <div className="animate-float" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem',
            letterSpacing: '0.14em', padding: '0.35rem 1.1rem', borderRadius: 100,
            marginBottom: '2rem',
          }}>
            <span style={{ color: 'var(--orange)', fontWeight: 600 }}>AfriFoundry</span>
            <span style={{ opacity: 0.4 }}>·</span>
            Data & Intelligence Infrastructure for Africa
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ color: 'var(--green)' }}>Est. 2025</span>
          </div>

          {/* THE headline — stops you cold */}
          <h1 className="animate-float-delay-1" style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
            lineHeight: 1.08, letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, rgba(249,115,22,0.9) 55%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              98% of the world's AI<br />was built without Africa.
            </span>
          </h1>

          {/* Sub — makes you feel it */}
          <p className="animate-float-delay-2" style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
            color: 'var(--text2)', maxWidth: 600, margin: '0 auto 1rem',
            lineHeight: 1.75,
          }}>
            Every entrepreneur on this continent has been building on borrowed assumptions —
            wrong prices, wrong market data, wrong context.
          </p>
          <p className="animate-float-delay-3" style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
            color: '#fff', maxWidth: 560, margin: '0 auto 2.5rem',
            lineHeight: 1.75, fontWeight: 600,
          }}>
            AfriFoundry is building the other 2%.
          </p>

          {/* CTAs */}
          <div className="animate-float-delay-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary animate-glow">
              Talk to AfriFoundry AI →
            </a>
            <Link href="/data" className="btn-ghost">See the data →</Link>
          </div>

          {/* Stat row */}
          <div className="animate-float-delay-4" style={{
            display: 'flex', gap: '2.5rem', justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {[
              { num: STATS.datapoints, label: 'Verified datapoints', sub: STATS.datapointsSub },
              { num: STATS.users, label: 'Active users' },
              { num: STATS.sectors, label: 'Sectors covered' },
              { num: `${STATS.foundingLeft} left`, label: 'Founding spots', sub: 'closing soon', urgent: true },
            ].map(s => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-jetbrains)', fontWeight: 600,
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                  color: s.urgent ? 'var(--orange)' : 'var(--orange)',
                  lineHeight: 1, marginBottom: '0.2rem',
                }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>{s.label}</div>
                {s.sub && <div style={{ fontSize: '0.65rem', color: s.urgent ? 'var(--orange)' : 'var(--text3)', opacity: s.urgent ? 1 : 0.7, fontFamily: 'var(--font-jetbrains)', marginTop: '0.1rem' }}>{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          opacity: 0.6,
        }}>
          scroll to explore
          <span style={{ fontSize: '0.8rem' }}>↓</span>
        </div>
      </section>

      {/* ─── LIVE DATA TICKER ─────────────────────────────────────────────────── */}
      <div style={{
        background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '0.7rem 0', overflow: 'hidden',
      }}>
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center',
                fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem',
                color: 'var(--text3)', letterSpacing: '0.06em', padding: '0 2rem',
              }}>
                <span style={{ color: 'var(--orange)', marginRight: '0.5rem', opacity: 0.5 }}>◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── THE PROBLEM + VISION ─────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">The Problem We Are Solving</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                African entrepreneurs have been building on{' '}
                <em style={{ fontStyle: 'normal', color: 'var(--orange)' }}>borrowed data</em>
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                Every major AI — Claude, GPT, Gemini — was trained on internet data. The internet is approximately 98% non-African. Market prices sourced from Western databases. Consumer behaviour modelled on European surveys. Business frameworks built for stable grids and clean roads.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                The result: a 75% SME failure rate. Not from lack of talent. From lack of the right intelligence.
              </p>
              <div style={{
                background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.18)',
                borderLeft: '3px solid var(--orange)',
                borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem',
              }}>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.65, fontStyle: 'italic' }}>
                  "AfriFoundry was born in a hospital triage line in Kenya. I had built an AI-powered infection control doorway — technically sound, investor-ready. But standing in that line, watching dust, heat, and infrastructure gaps, I saw my own solution would have failed in Africa within months."
                </p>
                <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '0.75rem' }}>
                  — MARK GAKUYA, FOUNDER
                </p>
              </div>
            </div>

            {/* Vision card */}
            <div>
              <div style={{
                background: 'linear-gradient(145deg, var(--surface), var(--surface2))',
                border: '1px solid var(--border2)',
                borderTop: '3px solid var(--orange)',
                borderRadius: 16, padding: '2.5rem',
              }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>The Vision</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
                  The Bloomberg Terminal<br />
                  <span style={{ color: 'var(--orange)' }}>for Africa</span>
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                  Bloomberg Terminal became the world's most trusted financial intelligence platform by owning the data layer. AfriFoundry is doing the same for Africa — starting with ground-truth market intelligence that nobody else has collected.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { label: 'V1 — Now', text: 'Thinking partner for African entrepreneurs' },
                    { label: 'V2 — 2026', text: 'API for developers & startups' },
                    { label: 'V3 — 2027', text: 'Enterprise intelligence platform' },
                    { label: 'V4 — Beyond', text: 'The African data standard for global AI' },
                  ].map(v => (
                    <div key={v.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: '0.1em', marginTop: '0.15rem', flexShrink: 0, whiteSpace: 'nowrap' }}>{v.label}</span>
                      <span style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.5 }}>{v.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What We've Built</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Infrastructure, not just a product
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* AfriFoundry AI */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border2)',
              borderTop: '3px solid var(--orange)', borderRadius: 16, padding: '2.25rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 100, padding: '0.2rem 0.6rem' }}>
                <span className="live-dot" style={{ width: 5, height: 5, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', color: 'var(--orange)', letterSpacing: '0.1em' }}>LIVE</span>
              </div>
              <div className="section-label">Product 01</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.75rem' }}>
                AfriFoundry AI
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                The thinking partner who knows Africa. Not a chatbot. Not a business tool. Built for every African — entrepreneur, student, farmer, driver, mwananchi — navigating a consequential decision without access to expertise.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {['Entrepreneur — validate your idea with real KES numbers before risking your savings', 'Student — career paths, HELB, and what the job market actually looks like', 'Farmer — planting seasons, input costs, when to sell. County and crop specific.', 'Driver & Transport — vehicle economics, SACCO financing, route profitability', 'Mwananchi — any consequential decision, any context. Africa knows.'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--text2)' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>Try it free →</a>
                <Link href="/product" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>Learn more</Link>
              </div>
            </div>

            {/* The Dataset */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderTop: '3px solid var(--gold)', borderRadius: 16, padding: '2.25rem',
            }}>
              <div className="section-label" style={{ color: 'var(--gold)' }}>The Moat</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.75rem' }}>
                The AfriFoundry Dataset
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                {STATS.datapoints} ground-truth African market datapoints — collected in Gikomba, Kongowea, Wakulima, and 30+ markets. Real prices. Real people. Real context.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {[
                  { n: STATS.datapoints, l: 'Verified datapoints' },
                  { n: STATS.sectors, l: 'Sectors covered' },
                  { n: '30+', l: 'Markets sampled' },
                  { n: '47', l: 'Counties represented' },
                ].map(s => (
                  <div key={s.l} style={{ background: 'var(--bg2)', borderRadius: 10, padding: '0.85rem 1rem', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.2rem' }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/data" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem', borderColor: 'rgba(245,158,11,0.3)', color: 'var(--gold)' }}>
                Explore the data →
              </Link>
            </div>

            {/* AfriScout */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderTop: '3px solid var(--green)', borderRadius: 16, padding: '2.25rem',
            }}>
              <div className="section-label" style={{ color: 'var(--green)' }}>Collection Network</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.75rem' }}>
                AfriScout
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                The field collection arm of AfriFoundry. Human scouts walk the markets we serve — verifying prices, recording observations, building what no scraper can replicate.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {['GPS-tagged datapoints from real markets', 'AI-powered collection via voice and photo', 'Offline-first — works without internet', 'Scout quality scoring and verification'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--text2)' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>◉</span>
                    {f}
                  </div>
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em' }}>
                collector.afrifoundry.com · Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRACTION NUMBERS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Traction</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.2 }}>
              9 months. Zero funding. Real numbers.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {[
              { n: STATS.datapoints, l: 'Verified datapoints', sub: STATS.datapointsSub, accent: true },
              { n: STATS.users, l: 'Active users since launch', sub: 'Feb 2026' },
              { n: '9 months', l: 'Time to build', sub: 'bootstrapped, solo' },
              { n: 'KES 0', l: 'External funding raised', sub: 'pure conviction' },
              { n: STATS.sectors, l: 'Sectors covered', sub: 'across Kenya' },
              { n: `${STATS.newsletterSubs}+`, l: 'Newsletter subscribers', sub: 'The Validation Point' },
            ].map(s => (
              <div key={s.l} style={{
                background: 'var(--surface)', border: `1px solid ${s.accent ? 'rgba(249,115,22,0.3)' : 'var(--border)'}`,
                borderRadius: 12, padding: '1.5rem',
                borderTop: s.accent ? '2px solid var(--orange)' : undefined,
              }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', fontWeight: 600, color: s.accent ? 'var(--orange)' : 'var(--orange)', lineHeight: 1, marginBottom: '0.3rem' }}>{s.n}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text2)', marginBottom: '0.2rem' }}>{s.l}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.06em' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDING 100 URGENT ──────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          {/* Urgent pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.35)',
            color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem',
            letterSpacing: '0.14em', padding: '0.4rem 1.1rem', borderRadius: 100,
            marginBottom: '1.75rem',
          }}>
            <span className="live-dot" style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
            CLOSING SOON · {STATS.foundingLeft} SPOTS REMAINING
          </div>

          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            The Founding 100
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
            {STATS.foundingClaimed} entrepreneurs are already on the wall. They believed before anyone else did. When this closes, these names are permanent — and founding members get the best deal AfriFoundry will ever offer.
          </p>

          {/* Progress */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', borderRadius: 12, padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'inline-block', minWidth: 300 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2rem', fontWeight: 600, color: 'var(--green)', lineHeight: 1 }}>{STATS.foundingClaimed}</span>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '1rem', color: 'var(--text3)' }}>/ {STATS.foundingTotal}</span>
            </div>
            <div style={{ background: 'var(--border)', borderRadius: 100, height: 6, overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--green), #0fa56e)', borderRadius: 100, width: `${STATS.foundingClaimed}%`, transition: 'width 1s ease' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.08em' }}>
              {STATS.foundingLeft} plates remaining — closes at 100 or when paid plans launch
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
              Claim Your Spot →
            </a>
            <Link href="/founding" className="btn-ghost">See the wall</Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">AfriFoundry's Publication</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              The Validation Point
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1rem' }}>
              "The newsletter for founders who validate for context, not just function."
            </p>
            <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.75rem' }}>
              African market realities, validation frameworks, and ground-truth data insights — written for entrepreneurs building in Africa, not about Africa.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2rem', fontWeight: 600, color: 'var(--green)' }}>{STATS.newsletterSubs}+</span>
              <span style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>founders already reading</span>
            </div>
            <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Read on LinkedIn →
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { issue: 'Issue 1', title: 'Africa just got its first AI thinking partner', read: '4 min read' },
              { issue: 'Issue 4', title: 'When the Validation Framework Validates You', read: '5 min read' },
              { issue: 'Featured', title: 'My Most Successful Failure And How It Exposed Africa\'s Hidden Innovation Crisis', read: '6 min read' },
            ].map(a => (
              <a key={a.title} href={LINKS.newsletter} target="_blank" rel="noopener noreferrer" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.1rem 1.35rem', textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s', display: 'block',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{a.issue}</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.45, marginBottom: '0.3rem' }}>{a.title}</div>
                <div style={{ color: 'var(--text3)', fontSize: '0.75rem' }}>{a.read}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
