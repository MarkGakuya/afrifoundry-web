import dynamic from 'next/dynamic';
import { STATS, LINKS } from '../../lib/constants';

export const metadata = {
  title: 'The AfriFoundry Dataset — Ground-Truth African Market Data',
  description: 'Ground-truth African data collected at market level in Gikomba, Kongowea, Wakulima and 30+ markets. 500,000+ verified datapoints on the road to 1 million.',
};

// Load map client-side only — Leaflet requires browser APIs
const DataMapClient = dynamic(() => import('./DataMapClient'), { ssr: false });

const SECTORS = [
  'Food & Agriculture', 'Healthcare', 'Construction & Real Estate', 'Transport & Logistics',
  'Education', 'Technology & Telecoms', 'Finance & M-Pesa', 'Retail & Trade',
  'Energy & Power', 'Water & Sanitation', 'Tourism & Hospitality', 'Manufacturing',
  'Media & Content', 'Government & Regulation', 'Labour & Employment',
];

const MARKETS = [
  { name: 'Gikomba', city: 'Nairobi', type: 'Wholesale clothing & goods' },
  { name: 'Kongowea', city: 'Mombasa', type: 'Fresh produce' },
  { name: 'Wakulima', city: 'Nairobi', type: 'Produce wholesale' },
  { name: 'City Market', city: 'Nairobi', type: 'Mixed retail' },
  { name: 'Marikiti', city: 'Mombasa', type: 'Fresh produce' },
  { name: 'Eastleigh', city: 'Nairobi', type: 'Clothing & electronics' },
  { name: 'Toi Market', city: 'Nairobi', type: 'Second-hand goods' },
  { name: 'Kibuye', city: 'Kisumu', type: 'Fresh produce & fish' },
  { name: 'Karatina', city: 'Nyeri', type: 'Produce & livestock' },
  { name: 'Kongowea Phase 2', city: 'Mombasa', type: 'Electronics & phones' },
  { name: 'Likoni', city: 'Mombasa', type: 'Mixed retail' },
  { name: 'Limuru Road', city: 'Kiambu', type: 'Farm gate prices' },
];

const PIPELINE = [
  { step: '01', label: 'Collected', desc: 'Scout walks the market, records price, location, and timestamp', color: 'var(--orange)' },
  { step: '02', label: 'Normalised', desc: 'Cleaned and standardised into the three-table schema', color: 'var(--gold)' },
  { step: '03', label: 'Validated', desc: 'Confidence-scored — below 0.65 goes to manual review queue', color: '#8B5CF6' },
  { step: '04', label: 'Deduplicated', desc: 'Cross-checked against existing datapoints by location and product', color: 'var(--green)' },
  { step: '05', label: 'Stored', desc: 'Tagged across three axes: Geography × Industry × Intelligence Layer', color: 'var(--green)' },
];

export default function DataPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', padding: '9rem 1.5rem 5rem', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 65%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ color: 'var(--gold)' }}>The AfriFoundry Dataset</div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.4rem,5.5vw,4rem)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Africa's data.<br />
            <span style={{ color: 'var(--gold)' }}>Finally built.</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.75, maxWidth: 600, marginBottom: '0.75rem' }}>
            Every major AI in the world was trained on internet data. The internet is approximately 98% non-African. The internet is 98% non-African. That means 98% of African prices, behaviour, context, and reality was never in the training data for any AI. AfriFoundry is building what was left out — verified by humans who were actually there.
          </p>
          <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem', letterSpacing: '0.06em', marginBottom: '2rem' }}>
            {STATS.datapoints} verified · on the road to {STATS.datapointsTarget}
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { n: STATS.datapoints, l: 'Verified datapoints', sub: STATS.datapointsSub },
              { n: '30+', l: 'Markets sampled' },
              { n: STATS.sectors, l: 'Sectors covered' },
              { n: '47', l: 'Counties represented' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.2rem' }}>{s.n}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text3)' }}>{s.l}</div>
                {s.sub && <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--text3)', marginTop: '0.1rem' }}>{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE MAP ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="section-label">Live Data Coverage</div>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.15, marginBottom: '0.5rem' }}>
                Where the data lives
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 520 }}>
                Every bubble is a real location. Size and intensity reflect datapoint density — where we've collected the most, and where we're still building. Kenya is the primary market. East Africa is next.
              </p>
            </div>
            <div style={{
              background: 'var(--surface)', border: '1px solid rgba(249,115,22,0.2)',
              borderRadius: 12, padding: '1rem 1.25rem', flexShrink: 0,
            }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.58rem', color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>TOTAL MAPPED</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--orange)', lineHeight: 1 }}>{STATS.datapoints}</div>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--text3)', marginTop: '0.3rem' }}>{STATS.datapointsSub}</div>
            </div>
          </div>

          <DataMapClient />

          <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', letterSpacing: '0.05em', marginTop: '1rem', textAlign: 'center' }}>
            Hover any bubble to see location details · Scroll to zoom · Data updated as scouts submit
          </p>
        </div>
      </section>

      {/* ── THE 98% ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 14, padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '3rem', fontWeight: 600, color: 'var(--orange)', lineHeight: 1, marginBottom: '0.5rem' }}>98%</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>What global AI ignored</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>The internet is 98% non-African. Every AI — Claude, GPT, Gemini — was trained on that data. Which means African prices, markets, languages, and context were almost entirely absent from every intelligent system on the planet.</p>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 14, padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '3rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.5rem' }}>2%</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>What AfriFoundry is building — the 98%</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>The 98% of African data that global AI never had. Real prices, real markets, real context — collected at ground level by people who were actually there. Verified, structured, permanently owned by AfriFoundry.</p>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 14, padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '3rem', fontWeight: 600, color: 'var(--green)', lineHeight: 1, marginBottom: '0.5rem' }}>∞</div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>Why this is a moat</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>No competitor can train on data that doesn't exist. We have a 9-month head start building a dataset that will power every AI that wants to serve Africa — including ours.</p>
            </div>
          </div>

          {/* Pipeline */}
          <div className="section-label">How Every Datapoint Is Processed</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>Nothing junk enters the database.</h2>
          <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 600, marginBottom: '2.5rem' }}>
            Every datapoint passes through a 5-stage pipeline. Every point has a location, timestamp, source, and confidence score. Nothing estimated. Nothing scraped from Wikipedia.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PIPELINE.map((p, i) => (
              <div key={p.step} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                padding: '1.25rem 0',
                borderBottom: i < PIPELINE.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem', color: p.color, letterSpacing: '0.1em', flexShrink: 0, marginTop: '0.15rem', minWidth: 24 }}>{p.step}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.95rem', color: p.color, marginBottom: '0.2rem' }}>{p.label}</div>
                  <div style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE COLLECT ───────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">What We Collect</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>Real data. Real places. Real people.</h2>
          <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 640, marginBottom: '2.5rem' }}>
            12 data types across {STATS.sectors} sectors. Every category has a scraper, a field collection protocol, or both.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
            {[
              '📦 Market prices (produce, goods, services)',
              '🏗️ Construction costs by county',
              '🚌 Transport fares and routes',
              '💊 Healthcare costs and availability',
              '📱 Telecoms and data pricing',
              '🏠 Rent and real estate by area',
              '👨‍🌾 Farm-gate prices and yields',
              '⚡ Power access and reliability data',
              '💰 Labour rates and wage floors',
              '📋 Licensing and regulatory requirements',
              '🏪 Competitor pricing by sector',
              '🌍 Consumer behaviour patterns',
            ].map(item => (
              <div key={item} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.85rem 1rem', fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.5 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Where We Collect</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>Markets we've walked</h2>
          <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 580, marginBottom: '2.5rem' }}>
            Our scouts and founder have personally visited every market below. The data wasn't estimated — it was collected on the ground, by people who were there.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.85rem' }}>
            {MARKETS.map(m => (
              <div key={m.name} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.95rem' }}>{m.name}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: '0.1em' }}>{m.city.toUpperCase()}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', marginTop: '0.1rem' }}>{m.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Sectors Covered</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.15, marginBottom: '2.5rem' }}>{STATS.sectors} sectors. Growing.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {SECTORS.map(s => (
              <span key={s} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 100, padding: '0.45rem 1rem', fontSize: '0.85rem', color: 'var(--text2)' }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            See the data in action
          </h2>
          <p style={{ color: 'var(--text2)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Every conversation with AfriFoundry AI draws from this dataset in real time. Ask about prices in your market. See what {STATS.datapoints} verified African datapoints feels like.
          </p>
          <a href={LINKS.ai} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
            Talk to AfriFoundry AI →
          </a>
        </div>
      </section>
    </>
  );
}
