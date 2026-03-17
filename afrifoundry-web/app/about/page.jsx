import { STATS, LINKS } from '../../lib/constants';

export const metadata = {
  title: 'About AfriFoundry — Data & Intelligence Infrastructure for Africa',
  description: 'AfriFoundry is building the data and intelligence infrastructure Africa was never given. The Bloomberg Terminal of Africa — starting with the data nobody collected.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '9rem 1.5rem 5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 65%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="section-label">About AfriFoundry</div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.4rem,5.5vw,4rem)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            The data and intelligence<br />
            <span style={{ color: 'var(--orange)' }}>Africa was never given.</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 'clamp(1rem,2vw,1.1rem)', lineHeight: 1.8, maxWidth: 620 }}>
            AfriFoundry is building the infrastructure that was skipped — ground-truth African data, collected at the market level, verified by humans who were actually there. The Bloomberg Terminal of Africa, starting with the data nobody else collected.
          </p>
        </div>
      </section>

      {/* The Mission */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">The Mission</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Every major AI was trained<br />
                <span style={{ color: 'var(--orange)' }}>without Africa.</span>
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                The internet is approximately 98% non-African. African languages, African market prices, African business realities — almost entirely absent from every intelligent system on the planet.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                When an African entrepreneur asks these systems a real African question, they hallucinate. They guess. They don't know what avocados cost in Kiambu. They don't know Sheng. They don't know how Kongowea market works on a Friday.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.8 }}>
                AfriFoundry is building what was skipped. Ground-truth data. African context baked in. Infrastructure that was never given to us — so we built it ourselves.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { n: STATS.datapoints, l: 'Verified African market datapoints', sub: STATS.datapointsSub, c: 'var(--orange)' },
                { n: STATS.users, l: 'Active users since Feb 2026 launch', sub: null, c: 'var(--green)' },
                { n: STATS.sectors, l: 'Sectors covered across Kenya', sub: null, c: 'var(--gold)' },
                { n: `${STATS.newsletterSubs}+`, l: 'Newsletter subscribers', sub: 'The Validation Point', c: 'var(--orange)' },
              ].map(s => (
                <div key={s.l} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.4rem' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontWeight: 600, fontSize: '1.5rem', color: s.c, lineHeight: 1, flexShrink: 0, minWidth: 80 }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text2)', fontWeight: 500 }}>{s.l}</div>
                    {s.sub && <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', letterSpacing: '0.06em', marginTop: '0.15rem' }}>{s.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">What AfriFoundry Is</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: '0.75rem' }}>
            Infrastructure. Not just a product.
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 620, marginBottom: '3rem' }}>
            AfriFoundry is the parent company. It owns the data layer, the collection network, and the products that run on top of it. As the company grows, more products will be built on this infrastructure.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                icon: '🏗️', color: 'var(--orange)',
                title: 'The Infrastructure',
                label: 'The Foundation',
                desc: 'AfriFoundry owns the data layer — the collection pipeline, the dataset, the verification system, and the APIs that will power the next generation of African AI products.',
              },
              {
                icon: '🤖', color: 'var(--orange)',
                title: 'AfriFoundry AI',
                label: 'Product 01 · Live',
                desc: 'The thinking partner who knows Africa. Powered by verified African market data. Speaks English, Swahili, Sheng, and growing. Live at ai.afrifoundry.com.',
              },
              {
                icon: '🌍', color: 'var(--green)',
                title: 'AfriScout',
                label: 'Collection Network',
                desc: 'The field collection arm. Human scouts walk the markets — collecting data that no scraper can replicate. GPS-tagged, offline-first, verified. Ground truth by definition.',
              },
              {
                icon: '📊', color: 'var(--gold)',
                title: 'The Dataset',
                label: 'The Moat',
                desc: `${STATS.datapoints} verified datapoints on the road to ${STATS.datapointsTarget}. The asset that compounds — the more we collect, the smarter every product built on AfriFoundry becomes.`,
              },
            ].map(c => (
              <div key={c.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: `3px solid ${c.color}`, borderRadius: 14, padding: '1.75rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{c.label}</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>The Vision</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            The Bloomberg Terminal<br />
            <span style={{ color: 'var(--orange)' }}>of Africa</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '3rem' }}>
            Bloomberg Terminal became the world's most trusted financial intelligence platform by owning the data layer first, then building products on top. AfriFoundry is doing the same for Africa — starting with the market intelligence nobody else collected.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', textAlign: 'left' }}>
            {[
              { label: 'V1 · Now', text: 'Thinking partner for African entrepreneurs', color: 'var(--orange)', live: true },
              { label: 'V2 · Late 2026', text: 'Agent — does the research and drafting with you', color: 'var(--gold)' },
              { label: 'V3 · 2027', text: 'Executor — takes action on your behalf', color: 'var(--green)' },
              { label: 'V4 · Beyond', text: 'The African data standard for global AI', color: '#8B5CF6' },
            ].map(v => (
              <div key={v.label} style={{ background: 'var(--surface)', border: `1px solid ${v.live ? 'rgba(249,115,22,0.3)' : 'var(--border)'}`, borderTop: `2px solid ${v.color}`, borderRadius: 12, padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: v.color, letterSpacing: '0.1em' }}>{v.label}</span>
                  {v.live && <span style={{ width: 5, height: 5, background: v.color, borderRadius: '50%', display: 'inline-block' }} />}
                </div>
                <p style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.6 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin — small, one section */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div className="section-label">Where It Started</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            A hospital triage line in Mombasa.
          </h2>
          <div style={{
            background: 'rgba(249,115,22,0.04)', border: '1px solid rgba(249,115,22,0.15)',
            borderLeft: '3px solid var(--orange)', borderRadius: '0 12px 12px 0',
            padding: '1.75rem 2rem',
          }}>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1rem' }}>
              AfriFoundry's founder had built an AI-powered infection control system — technically sound, investor-ready. Standing in a hospital triage line in Kenya, watching dust, heat, and crumbling infrastructure, he saw clearly that his own solution would fail in Africa within months. Not because the technology was wrong. Because the data it was built on was wrong.
            </p>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.85 }}>
              That moment became the company: African entrepreneurs fail not from lack of talent — but from building on borrowed data that was never designed for their reality. AfriFoundry is the answer.
            </p>
            <p style={{ color: 'var(--orange)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '1.25rem' }}>
              Founded July 8, 2025 · Mombasa, Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">The Team</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: '2.5rem' }}>
            Founder
          </h2>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', borderRadius: 16, padding: '2.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'start', maxWidth: 720 }}>
            {/* Avatar */}
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--orange), var(--gold))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem', color: '#fff',
              flexShrink: 0, boxShadow: '0 4px 20px rgba(249,115,22,0.25)',
            }}>
              MG
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.2rem' }}>Mark Mugo Gakuya</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                FOUNDER & CEO · MOMBASA, KENYA
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {[
                  { label: 'Education', value: 'Biomedical Engineering' },
                  { label: 'Location', value: 'Mombasa, Kenya' },
                  { label: 'Founded', value: STATS.founded },
                  { label: 'Stage', value: 'Pre-seed · Bootstrapped' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text2)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Solo founder. Built AfriFoundry from zero in 9 months with no external funding. Has personally walked Gikomba, Kongowea, and Likoni markets collecting the data that powers AfriFoundry AI.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={`mailto:${LINKS.founderEmail}`} style={{ color: 'var(--orange)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-jetbrains)' }}>{LINKS.founderEmail}</a>
                <span style={{ color: 'var(--border2)' }}>·</span>
                <a href={LINKS.founderLinkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text3)', fontSize: '0.85rem', textDecoration: 'none' }}>LinkedIn</a>
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text3)', fontSize: '0.82rem', marginTop: '1.5rem', fontFamily: 'var(--font-jetbrains)', letterSpacing: '0.04em' }}>
            Team is growing. If you want to build Africa's data infrastructure — reach out.
          </p>
        </div>
      </section>
    </>
  );
}
