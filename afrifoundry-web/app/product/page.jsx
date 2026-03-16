import { STATS, LINKS } from '../../lib/constants';

export const metadata = {
  title: 'AfriFoundry AI — The Thinking Partner That Knows Africa',
  description: 'AfriFoundry AI stress-tests your business idea with 500,000+ verified African market datapoints. Three modes: Validator, Explorer, Learner.',
};

const TEMIS = [
  { letter: 'T', word: 'Technical', preview: 'Can this actually be built here?', body: "Kenya's infrastructure has specific constraints — power reliability, mobile internet coverage, last-mile logistics. An idea that works in Nairobi CBD may not work in Kisumu. TEMIS scores the technical viability against real local realities, not ideal conditions." },
  { letter: 'E', word: 'Economic', preview: 'Do the numbers work in real African conditions?', body: "Margins, pricing power, end-of-month consumer behaviour. African purchasing patterns differ — peak spending is 1st–5th of the month. Does your unit economics survive the last week of the month when wallets are thin?" },
  { letter: 'M', word: 'Market', preview: 'Is there a real demand here?', body: "Market size, competition density, distribution channels. Not global TAM numbers — what does the actual customer base look like within 10km of your target location? AfriFoundry maps this against verified local data." },
  { letter: 'I', word: 'Institutional', preview: 'Does the regulatory environment allow this?', body: "Regulation, licensing, county requirements, informal market dynamics. Many African business ideas are viable in theory but blocked in practice by permits, county levies, or sector-specific restrictions nobody warned the founder about." },
  { letter: 'S', word: 'Social', preview: 'Does it fit how Africa actually works?', body: "Culture, trust dynamics, community structures, informal networks. Africa runs on relationships and trust. A solution that ignores how Kenyans actually make decisions — and who they trust — is a solution that won't get adopted." },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', padding: '9rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 65%), var(--bg)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 100, padding: '0.3rem 0.9rem', marginBottom: '1.5rem' }}>
            <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', display: 'inline-block', animation: 'pulse-dot 1.5s infinite' }} />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--orange)', letterSpacing: '0.12em' }}>LIVE · ai.afrifoundry.com</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.4rem,5.5vw,4rem)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            AfriFoundry AI<br />
            <span style={{ color: 'var(--orange)' }}>The thinking partner<br />who knows Africa.</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.75, maxWidth: 560, marginBottom: '2.5rem' }}>
            Not a chatbot. Not a generic AI. A rigorous thinking partner trained on {STATS.datapoints} verified African market datapoints — built to challenge your assumptions before the market does.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary">Talk to AfriFoundry AI →</a>
            <a href={LINKS.foundingForm} target="_blank" rel="noopener noreferrer" className="btn-ghost">Join Founding 100</a>
          </div>
        </div>
      </section>

      {/* Three modes */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">How It Works</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '3rem', maxWidth: 600 }}>
            Three modes. One thinking partner.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { mode: 'VALIDATOR', color: 'var(--orange)', title: 'Stress-test your idea', desc: 'Have a specific business idea? Tell AfriFoundry AI about it. It will ask harder questions than any investor — using real KES numbers and local context to surface what will kill the idea before you invest a single shilling.', qs: ['Will this work in this county?', 'What do inputs actually cost here?', 'Who else is already doing this?', 'What regulatory barriers exist?'] },
              { mode: 'EXPLORER', color: 'var(--gold)', title: 'Find the right idea', desc: "Don't have an idea yet, or not sure if yours is the right one? EXPLORER helps you discover business opportunities that actually fit your skills, resources, location, and the real demand around you.", qs: ['What problems exist in your area?', 'What can you build with what you have?', 'Which sectors have gaps near you?', 'What does your community actually need?'] },
              { mode: 'LEARNER', color: 'var(--green)', title: 'Understand your market', desc: "Deep intelligence on African markets, policies, and economics. Ask anything about doing business in Kenya — from county-specific regulations to market days, import costs, or what a competitor charges in Gikomba.", qs: ['What does X cost in Mombasa?', 'How do I register this business?', 'What is the market like in Kisumu?', 'Who are the major players here?'] },
            ].map(m => (
              <div key={m.mode} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: `3px solid ${m.color}`, borderRadius: 16, padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: m.color, letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{m.mode} MODE</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.85rem' }}>{m.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{m.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {m.qs.map(q => (
                    <div key={q} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text3)' }}>
                      <span style={{ color: m.color, flexShrink: 0 }}>›</span>{q}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMIS Framework */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div className="section-label">AfriFoundry AI's Engine</div>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              The TEMIS Framework
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              The silent scoring engine behind every AfriFoundry AI conversation. Revealed in your validation report. Built specifically for the African context — not adapted from Western frameworks.
            </p>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
              <p style={{ color: 'var(--text3)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                Every conversation produces a TEMIS score across all 5 dimensions — giving you a structured picture of where your idea is strong and where it will get destroyed in the real world.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {TEMIS.map((t, i) => (
              <div key={t.letter} style={{ borderBottom: i < TEMIS.length - 1 ? '1px solid var(--border)' : 'none', padding: '1.25rem 0' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.5rem',
                    color: 'var(--orange)', width: 32, flexShrink: 0, lineHeight: 1,
                  }}>{t.letter}</span>
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem' }}>{t.word}</span>
                      <span style={{ color: 'var(--text3)', fontSize: '0.8rem' }}>{t.preview}</span>
                    </div>
                    <p style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.65 }}>{t.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            No signup. No credit card.<br />Just ask it anything.
          </h2>
          <p style={{ color: 'var(--text2)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Ask AfriFoundry AI about your business idea. Ask about prices in Gikomba. Ask about the market in your county. See what a thinking partner who actually knows Africa feels like.
          </p>
          <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
            Talk to AfriFoundry AI →
          </a>
        </div>
      </section>
    </>
  );
}
