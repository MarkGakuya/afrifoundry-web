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

// Africa silhouette path — simplified outline for decorative use
const AFRICA_PATH = "M256 64 C256 64 240 56 224 64 C208 72 200 88 192 96 C184 104 176 104 168 112 C160 120 152 136 144 144 C136 152 120 152 112 160 C104 168 96 184 96 200 C96 216 104 232 112 248 C120 264 136 272 144 280 C152 288 160 296 168 312 C176 328 176 344 176 360 C176 376 168 392 160 400 C152 408 144 408 136 416 C128 424 120 440 120 456 C120 472 128 480 136 480 C144 480 152 472 160 464 C168 456 176 448 184 448 C192 448 200 456 208 456 C216 456 224 448 232 440 C240 432 248 416 248 400 C248 384 240 376 240 360 C240 344 248 328 256 320 C264 312 280 312 288 320 C296 328 296 344 296 360 C296 376 288 392 280 400 C272 408 264 416 264 432 C264 448 272 464 280 472 C288 480 304 480 312 472 C320 464 320 448 320 432 C320 416 312 400 312 384 C312 368 320 352 328 344 C336 336 352 336 360 328 C368 320 368 304 368 288 C368 272 360 256 352 248 C344 240 328 240 320 232 C312 224 312 208 312 192 C312 176 320 160 320 144 C320 128 312 112 304 104 C296 96 280 96 272 88 C264 80 264 64 256 64Z";

function AfricaDecoration() {
  return (
    <svg
      viewBox="0 0 480 520"
      style={{
        position: 'absolute', right: '-40px', top: '50%',
        transform: 'translateY(-50%)',
        width: 'min(420px, 45vw)', height: 'auto',
        opacity: 0.035, pointerEvents: 'none',
      }}
    >
      <path d={AFRICA_PATH} fill="#F97316" />
    </svg>
  );
}

// Floating data points visual
function DataConstellation() {
  const nodes = [
    { x: '15%', y: '20%', size: 3, delay: 0 },
    { x: '82%', y: '15%', size: 2, delay: 0.6 },
    { x: '70%', y: '65%', size: 4, delay: 1.2 },
    { x: '25%', y: '75%', size: 2, delay: 1.8 },
    { x: '88%', y: '42%', size: 3, delay: 0.3 },
    { x: '45%', y: '88%', size: 2, delay: 0.9 },
    { x: '8%', y: '55%', size: 2, delay: 1.5 },
  ];
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x} cy={n.y} r={n.size + 4}
            fill={`rgba(249,115,22,0.05)`}
            className="data-node"
            style={{ animationDelay: `${n.delay}s` }}
          />
          <circle
            cx={n.x} cy={n.y} r={n.size}
            fill={`rgba(249,115,22,0.5)`}
            className="data-node"
            style={{ animationDelay: `${n.delay}s` }}
          />
        </g>
      ))}
      {/* Connection lines between some nodes */}
      <line x1="15%" y1="20%" x2="25%" y2="75%" stroke="rgba(249,115,22,0.06)" strokeWidth="1" />
      <line x1="82%" y1="15%" x2="70%" y2="65%" stroke="rgba(249,115,22,0.06)" strokeWidth="1" />
      <line x1="70%" y1="65%" x2="45%" y2="88%" stroke="rgba(249,115,22,0.06)" strokeWidth="1" />
      <line x1="88%" y1="42%" x2="70%" y2="65%" stroke="rgba(249,115,22,0.06)" strokeWidth="1" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '9rem 1.5rem 5rem', position: 'relative', overflow: 'hidden',
      }}>
        {/* Background layers */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 75% 55% at 50% -5%, rgba(249,115,22,0.13) 0%, transparent 68%), radial-gradient(ellipse 40% 35% at 80% 95%, rgba(16,185,129,0.05) 0%, transparent 60%), #080C18',
        }} />
        <div className="grid-bg noise-bg" style={{ position: 'absolute', inset: 0, maskImage: 'radial-gradient(ellipse 95% 70% at 50% 0%, black 0%, transparent 80%)' }} />
        {/* Floating data nodes */}
        <DataConstellation />
        {/* Africa faint silhouette */}
        <AfricaDecoration />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860 }}>
          <div className="animate-float" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem',
            letterSpacing: '0.14em', padding: '0.35rem 1.1rem', borderRadius: 100, marginBottom: '2rem',
          }}>
            <span style={{ color: 'var(--orange)', fontWeight: 600 }}>AfriFoundry</span>
            <span style={{ opacity: 0.4 }}>·</span>
            Data & Intelligence Infrastructure for Africa
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ color: 'var(--green)' }}>Est. 2025</span>
          </div>

          <h1 className="animate-float-delay-1" style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
            lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.5rem',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, rgba(249,115,22,0.9) 55%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              98% of the world's AI<br />was built without Africa.
            </span>
          </h1>

          <p className="animate-float-delay-2" style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)', color: 'var(--text2)',
            maxWidth: 600, margin: '0 auto 0.75rem', lineHeight: 1.75,
          }}>
            Every entrepreneur on this continent has been building on borrowed assumptions —
            wrong prices, wrong market data, wrong context.
          </p>
          <p className="animate-float-delay-3" style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)', color: '#fff',
            maxWidth: 560, margin: '0 auto 1.75rem', lineHeight: 1.75, fontWeight: 600,
          }}>
            AfriFoundry is building the other 2%.
          </p>

          {/* Languages pill */}
          <div className="animate-float-delay-3" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)',
            borderRadius: 100, padding: '0.35rem 1.1rem', marginBottom: '2.25rem',
            fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--green)',
            letterSpacing: '0.08em',
          }}>
            <span style={{ width: 5, height: 5, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }} />
            Speaks English · Swahili · Sheng · more in progress
          </div>

          <div className="animate-float-delay-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary animate-glow">
              Talk to AfriFoundry AI →
            </a>
            <Link href="/data" className="btn-ghost">See the data →</Link>
          </div>

          {/* Stats */}
          <div className="animate-float-delay-4" style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { num: STATS.datapoints, label: 'Verified datapoints', sub: STATS.datapointsSub },
              { num: STATS.users, label: 'Active users', sub: STATS.usersSub },
              { num: STATS.sectors, label: 'Sectors covered' },
              { num: `${STATS.foundingLeft} left`, label: 'Founding spots', sub: 'closing soon', urgent: true },
            ].map(s => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 600, fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: 'var(--orange)', lineHeight: 1, marginBottom: '0.2rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>{s.label}</div>
                {s.sub && <div style={{ fontSize: '0.65rem', color: s.urgent ? 'var(--orange)' : 'var(--text3)', opacity: s.urgent ? 1 : 0.7, fontFamily: 'var(--font-jetbrains)', marginTop: '0.1rem' }}>{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.5,
        }}>
          scroll to explore <span style={{ fontSize: '0.8rem' }}>↓</span>
        </div>
      </section>

      {/* ─── TICKER ───────────────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '0.7rem 0', overflow: 'hidden' }}>
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', color: 'var(--text3)', letterSpacing: '0.06em', padding: '0 2rem' }}>
                <span style={{ color: 'var(--orange)', marginRight: '0.5rem', opacity: 0.5 }}>◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PROBLEM + VISION ─────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 1.5rem', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        {/* Faint Africa outline on right */}
        <svg viewBox="0 0 300 380" style={{ position: 'absolute', right: 0, bottom: 0, width: 280, opacity: 0.025, pointerEvents: 'none' }}>
          <path d={AFRICA_PATH} fill="#F97316" transform="scale(0.6)" />
        </svg>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">The Problem We Are Solving</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                African entrepreneurs have been building on{' '}
                <em style={{ fontStyle: 'normal', color: 'var(--orange)' }}>borrowed data</em>
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                Every major AI — Claude, GPT, Gemini — was trained on internet data. The internet is approximately 98% non-African. Market prices from Western databases. Consumer behaviour from European surveys. Business frameworks built for stable grids and clean roads.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                The result: a 75% SME failure rate. Not from lack of talent. From lack of the right intelligence.
              </p>
              <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.18)', borderLeft: '3px solid var(--orange)', borderRadius: '0 10px 10px 0', padding: '1rem 1.25rem' }}>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.65, fontStyle: 'italic' }}>
                  "AfriFoundry was born in a hospital triage line in Kenya. I had built an AI-powered infection control doorway — technically sound, investor-ready. But standing in that line, watching dust, heat, and infrastructure gaps, I saw my own solution would have failed in Africa within months."
                </p>
                <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '0.75rem' }}>— MARK GAKUYA, FOUNDER</p>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(145deg, var(--surface), var(--surface2))', border: '1px solid var(--border2)', borderTop: '3px solid var(--orange)', borderRadius: 16, padding: '2.5rem' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>The Vision</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
                The Bloomberg Terminal<br /><span style={{ color: 'var(--orange)' }}>for Africa</span>
              </h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                Bloomberg Terminal became the world's most trusted financial intelligence platform by owning the data layer. AfriFoundry is doing the same for Africa — starting with ground-truth market intelligence nobody else collected.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'V1 — Now', text: 'Thinking partner for African entrepreneurs', live: true },
                  { label: 'V2 — 2026', text: 'Agent — does the work with you' },
                  { label: 'V3 — 2027', text: 'Executor — takes action on your behalf' },
                  { label: 'V4 — Beyond', text: 'The African data standard for global AI' },
                ].map(v => (
                  <div key={v.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: '0.1em', marginTop: '0.15rem', flexShrink: 0, whiteSpace: 'nowrap' }}>{v.label}</span>
                    <span style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.5 }}>{v.text}</span>
                    {v.live && <span style={{ width: 5, height: 5, background: 'var(--green)', borderRadius: '50%', display: 'inline-block', marginTop: '0.35rem', flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What We've Built</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Infrastructure, not just a product</h2>
            <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem', letterSpacing: '0.08em', marginTop: '0.75rem' }}>
              AfriFoundry AI is Product 01 · The Dataset is the moat · AfriScout is the collection engine
            </p>
          </div>

          {/* AfriFoundry AI — hero card */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', borderTop: '3px solid var(--orange)', borderRadius: 16, padding: '2.5rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', background: 'radial-gradient(ellipse 80% 80% at 100% 50%, rgba(249,115,22,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            {/* Decorative data visualization on right */}
            <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.08, pointerEvents: 'none' }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                {[40, 60, 80].map((r, i) => (
                  <circle key={r} cx="80" cy="80" r={r} fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray={i === 1 ? "4 4" : "1 8"} />
                ))}
                {[0, 45, 90, 135].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return <line key={i} x1="80" y1="80" x2={80 + 75 * Math.cos(rad)} y2={80 + 75 * Math.sin(rad)} stroke="#F97316" strokeWidth="1" opacity="0.5" />;
                })}
                <circle cx="80" cy="80" r="6" fill="#F97316" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
                  const rad = (a * Math.PI) / 180;
                  const dist = [40, 60, 60, 40, 80, 40, 60, 80][i];
                  return <circle key={i} cx={80 + dist * Math.cos(rad)} cy={80 + dist * Math.sin(rad)} r="3" fill="#F97316" opacity="0.7" />;
                })}
              </svg>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--orange)', letterSpacing: '0.15em' }}>PRODUCT 01</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 100, padding: '0.15rem 0.6rem' }}>
                    <span className="live-dot" style={{ width: 5, height: 5, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.52rem', color: 'var(--orange)', letterSpacing: '0.1em' }}>LIVE</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: '0.75rem' }}>AfriFoundry AI</h3>
                <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Not a chatbot. The thinking partner who knows Africa. Ask it about prices in your market, viability of your idea, or what a boda earns in Kisumu. It knows — and it tells you the truth.
                </p>
                <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
                  English · Swahili · Sheng — multilingual expansion in progress
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary">Try it free →</a>
                  <Link href="/product" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>Learn more</Link>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { mode: 'VALIDATOR', color: 'var(--orange)', text: 'Stress-test your business idea with real KES numbers' },
                  { mode: 'EXPLORER', color: 'var(--gold)', text: 'Find the right idea for your skills and location' },
                  { mode: 'LEARNER', color: 'var(--green)', text: 'Deep market intelligence on any African sector' },
                ].map(m => (
                  <div key={m.mode} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', background: 'var(--bg2)', borderRadius: 10, padding: '0.85rem 1rem', border: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: m.color, letterSpacing: '0.12em', flexShrink: 0, marginTop: '0.1rem' }}>{m.mode}</span>
                    <span style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.5 }}>{m.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dataset + AfriScout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', borderRadius: 16, padding: '2.25rem' }}>
              <div className="section-label" style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>The Moat · Powering Product 01</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>The AfriFoundry Dataset</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                {STATS.datapoints} ground-truth African market datapoints and counting. Collected in Gikomba, Kongowea, Wakulima, and 30+ markets. Real prices. Real people. Real context.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1.5rem' }}>
                {[
                  { n: STATS.datapoints, l: 'Verified datapoints' },
                  { n: STATS.sectors, l: 'Sectors covered' },
                  { n: '30+', l: 'Markets sampled' },
                  { n: '47', l: 'Counties represented' },
                ].map(s => (
                  <div key={s.l} style={{ background: 'var(--bg2)', borderRadius: 8, padding: '0.75rem', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.15rem' }}>{s.n}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/data" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem', borderColor: 'rgba(245,158,11,0.3)', color: 'var(--gold)' }}>
                Explore the data →
              </Link>
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: '3px solid var(--green)', borderRadius: 16, padding: '2.25rem' }}>
              <div className="section-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>Collection Engine · Powers the Dataset</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>AfriScout</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                The field collection arm of AfriFoundry. Human scouts walk the markets we serve — recording prices, verifying data, building what no scraper can replicate. Ground truth by definition.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                {['GPS-tagged datapoints from real markets', 'AI-powered collection via voice and photo', 'Offline-first — works without internet', 'Scout quality scoring and verification'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--text2)' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>◉</span>{f}
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

      {/* ─── TRACTION ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Traction</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.2 }}>9 months. Zero funding. Real numbers.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {[
              { n: STATS.datapoints, l: 'Verified datapoints', sub: STATS.datapointsSub, accent: true },
              { n: STATS.users, l: 'Active users since launch', sub: 'Feb 2026' },
              { n: '9 months', l: 'Time to build & launch', sub: 'bootstrapped, solo' },
              { n: 'KES 0', l: 'External funding raised', sub: 'pure conviction' },
              { n: STATS.sectors, l: 'Sectors covered', sub: 'across Kenya' },
              { n: `${STATS.newsletterSubs}+`, l: 'Newsletter subscribers', sub: 'The Validation Point' },
            ].map(s => (
              <div key={s.l} style={{ background: 'var(--surface)', border: `1px solid ${s.accent ? 'rgba(249,115,22,0.3)' : 'var(--border)'}`, borderRadius: 12, padding: '1.5rem', borderTop: s.accent ? '2px solid var(--orange)' : undefined }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', fontWeight: 600, color: 'var(--orange)', lineHeight: 1, marginBottom: '0.3rem' }}>{s.n}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text2)', marginBottom: '0.2rem' }}>{s.l}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.06em' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDING 100 ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.35)', color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', letterSpacing: '0.14em', padding: '0.4rem 1.1rem', borderRadius: 100, marginBottom: '1.75rem' }}>
            <span className="live-dot" style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block' }} />
            CLOSING SOON · {STATS.foundingLeft} SPOTS REMAINING
          </div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>The Founding 100</h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
            {STATS.foundingClaimed} entrepreneurs are already on the wall. They believed before anyone else did. When this closes, these names are permanent — and founding members get the best deal AfriFoundry will ever offer.
          </p>
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
            <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>Claim Your Spot →</a>
            <Link href="/founding" className="btn-ghost">See the wall</Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">AfriFoundry's Publication</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>The Validation Point</h2>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1rem' }}>"The newsletter for founders who validate for context, not just function."</p>
            <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.72, marginBottom: '1.75rem' }}>African market realities, validation frameworks, and ground-truth data insights — written for entrepreneurs building in Africa, not about Africa.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '2rem', fontWeight: 600, color: 'var(--green)' }}>{STATS.newsletterSubs}+</span>
              <span style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>founders already reading</span>
            </div>
            <a href={LINKS.newsletter} target="_blank" rel="noopener noreferrer" className="btn-primary">Read on LinkedIn →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { issue: 'Issue 1', title: 'Africa just got its first AI thinking partner', read: '4 min read' },
              { issue: 'Issue 4', title: 'When the Validation Framework Validates You', read: '5 min read' },
              { issue: 'Featured', title: "My Most Successful Failure And How It Exposed Africa's Hidden Innovation Crisis", read: '6 min read' },
            ].map(a => (
              <a key={a.title} href={LINKS.newsletter} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.35rem', textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s', display: 'block' }}
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
