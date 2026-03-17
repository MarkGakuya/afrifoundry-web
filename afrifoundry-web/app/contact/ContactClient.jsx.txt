'use client';
import { LINKS } from '../../lib/constants';

const CONTACT_EMAILS = [
  {
    label: 'General',
    email: 'hello@afrifoundry.com',
    icon: '👋',
    desc: 'General enquiries, partnerships, press — start here',
    key: 'emailHello',
  },
  {
    label: 'AfriFoundry AI',
    email: 'ai@afrifoundry.com',
    icon: '🤖',
    desc: 'Questions about the AI product, access, or integrations',
    key: 'emailAI',
  },
  {
    label: 'Support',
    email: 'support@afrifoundry.com',
    icon: '🛠️',
    desc: 'Technical issues, account help, or data queries',
    key: 'emailSupport',
  },
  {
    label: 'Admin',
    email: 'admin@afrifoundry.com',
    icon: '📋',
    desc: 'Investor conversations, legal, and administrative matters',
    key: 'emailAdmin',
  },
];

export default function ContactClient() {
  return (
    <>
      <section style={{ padding: '9rem 1.5rem 6rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 65%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="section-label">Get In Touch</div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.4rem,5vw,3.8rem)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1rem', maxWidth: 600 }}>
            Let's talk about<br /><span style={{ color: 'var(--orange)' }}>building Africa.</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, marginBottom: '4rem' }}>
            Reach the right team directly. No gatekeeping — every inbox is monitored and we reply fast.
          </p>

          {/* 4 official email cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            {CONTACT_EMAILS.map(c => (
              <a key={c.label} href={`mailto:${c.email}`} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 14, padding: '1.75rem', textDecoration: 'none',
                display: 'block', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.35rem' }}>{c.email}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.55 }}>{c.desc}</div>
              </a>
            ))}
          </div>

          {/* Social channels */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--text2)' }}>Follow the build</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { label: 'LinkedIn', href: LINKS.linkedin, icon: '💼' },
                { label: 'Twitter / X', href: LINKS.twitter, icon: '🐦' },
                { label: 'WhatsApp Channel', href: LINKS.whatsapp, icon: '📱' },
                { label: 'Newsletter', href: LINKS.newsletter, icon: '📰' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '0.65rem 1.1rem',
                  color: 'var(--text2)', textDecoration: 'none',
                  fontFamily: 'var(--font-dm)', fontSize: '0.875rem', fontWeight: 500,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* What to reach out for */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.4rem', marginBottom: '1.5rem' }}>What we're open to</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Partnerships', desc: 'Distribution, institutional collaborations, research partnerships. Universities, NGOs, and government bodies welcome.' },
                { title: 'Investment', desc: 'Pre-seed conversations welcome. We have traction, a moat, and a clear roadmap. If you back African founders, talk to us.' },
                { title: 'Data Licensing', desc: 'Enterprise or research teams who need verified African market data — reach out to discuss licensing the AfriFoundry Dataset.' },
                { title: 'Media & Press', desc: 'Building the Bloomberg Terminal of Africa from a TUM Mombasa dorm room. Happy to talk.' },
              ].map(item => (
                <div key={item.title}>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--orange)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.68 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
