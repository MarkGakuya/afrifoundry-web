import { STATS, LINKS } from '../../lib/constants';

export const metadata = {
  title: 'About AfriFoundry — Built in Kenya, Built for Africa',
  description: 'AfriFoundry was born in a hospital triage line in Mombasa. The story of why Mark Gakuya is building the data infrastructure Africa was never given.',
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
            Built in Kenya.<br />
            <span style={{ color: 'var(--orange)' }}>Built for Africa.</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.75, maxWidth: 580 }}>
            AfriFoundry is not a Silicon Valley company that decided to expand into Africa. It was born in a hospital triage line in Mombasa — from a founder who learned the hard way that good ideas die when they meet the wrong data.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Photo placeholder */}
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface)', aspectRatio: '4/5', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ flex: 1, background: 'linear-gradient(135deg, var(--surface2), var(--bg))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', opacity: 0.3 }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.12em' }}>PHOTO COMING</div>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.12em', marginTop: '0.25rem' }}>MARK GAKUYA</div>
                </div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '0.85rem 1.1rem', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: 'var(--text3)' }}>Mark Gakuya · Founder, AfriFoundry · Mombasa, Kenya</p>
              </div>
            </div>

            <div>
              <div className="section-label">The Origin Story</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                It started in a<br />
                <span style={{ color: 'var(--orange)' }}>hospital triage line</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Mark Gakuya had built an AI-powered infection control doorway — technically sound, investor-ready. He stood in a hospital triage line in Kenya, watching dust, heat, and infrastructure gaps. In that moment he saw his own solution would have failed in Africa within months.",
                  "Not because the technology was wrong. Because the data it was built on was wrong. Western assumptions about hospital infrastructure. European benchmarks for patient flow. None of it matched the reality in front of him.",
                  "That moment became the thesis: African entrepreneurs fail not because of bad ideas, but because the tools they use to validate those ideas are built on Western data and Western assumptions.",
                  "AfriFoundry is the answer he built. Ground-truth African data. A thinking partner that knows your market from the inside. Infrastructure that was never given to us — so we built it ourselves.",
                ].map((p, i) => (
                  <p key={i} style={{ color: i === 0 ? 'var(--text2)' : 'var(--text3)', fontSize: '1rem', lineHeight: 1.75 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder card */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">The Founder</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: '2.5rem' }}>Mark Mugo Gakuya</h2>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', borderRadius: 16, padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Role', value: 'Founder & CEO' },
                  { label: 'Location', value: 'Mombasa, Kenya' },
                  { label: 'Education', value: 'Biomedical Engineering, TUM Mombasa' },
                  { label: 'Class', value: '2027' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <a href={`mailto:${LINKS.founderEmail}`} style={{ color: 'var(--orange)', fontSize: '0.85rem', textDecoration: 'none' }}>{LINKS.founderEmail}</a>
                <a href={LINKS.founderLinkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text3)', fontSize: '0.85rem', textDecoration: 'none' }}>LinkedIn · 2,512 followers</a>
              </div>
            </div>

            <div>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Solo founder. Bootstrapped. Building while studying Biomedical Engineering at TUM Mombasa. Has personally walked Gikomba, Kongowea, and Likoni markets collecting the data that powers AfriFoundry AI.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  `Founded AfriFoundry on 8th July 2025`,
                  `Built and launched AfriFoundry AI in 9 months, zero funding`,
                  `${STATS.datapoints} datapoints collected and counting`,
                  `${STATS.users} active users since Feb 2026 launch`,
                  `${STATS.newsletterSubs}+ subscribers — The Validation Point`,
                ].map(fact => (
                  <div key={fact} style={{ display: 'flex', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text2)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0 }}>✓</span>
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">AfriFoundry — The Company</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: '2.5rem' }}>
            Data infrastructure, not just a product
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🏗️', title: 'The Infrastructure', desc: 'AfriFoundry owns and maintains the data layer — the collection pipeline, the dataset, the verification system, the APIs that will power the next generation of African AI.' },
              { icon: '🤖', title: 'The Product', desc: 'AfriFoundry AI is Product 01. The first thing we shipped. One thinking partner for African entrepreneurs — powered by the infrastructure beneath it.' },
              { icon: '🌍', title: 'The Scout Network', desc: 'AfriScout is the field arm. Humans who walk the markets we serve, collecting data that no scraper can replicate. Ground truth by definition.' },
              { icon: '📊', title: 'The Dataset', desc: '500,000+ verified datapoints on their way to 1 million. The asset that compounds. The more we collect, the smarter every product gets.' },
            ].map(c => (
              <div key={c.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.75rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.68 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
