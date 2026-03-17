'use client';
import { LINKS } from '../../lib/constants';

export default function ContactClient() {
  return (
    <>
      <section style={{ padding: '9rem 1.5rem 5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 65%)' }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="section-label">Get In Touch</div>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2.4rem,5vw,3.8rem)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1rem', maxWidth: 600 }}>
            Let's talk about<br /><span style={{ color: 'var(--orange)' }}>building Africa.</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 500, marginBottom: '4rem' }}>
            For partnerships, media enquiries, investor conversations, or anything else — Mark is directly reachable. No gatekeeping.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}`, icon: '✉️', desc: 'For all enquiries — fastest response' },
              { label: 'LinkedIn', value: 'Mark Gakuya', href: LINKS.linkedin, icon: '💼', desc: 'Follow the build journey · 2,512 followers' },
              { label: 'WhatsApp Channel', value: 'AfriFoundry Official', href: LINKS.whatsapp, icon: '📱', desc: 'Updates and announcements' },
              { label: 'Newsletter', value: 'The Validation Point', href: LINKS.newsletter, icon: '📰', desc: '594+ subscribers · Published biweekly' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 14, padding: '1.75rem', textDecoration: 'none',
                display: 'block', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.35rem' }}>{c.value}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text3)' }}>{c.desc}</div>
              </a>
            ))}
          </div>

          {/* What to reach out for */}
          <div style={{ marginTop: '4rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.4rem', marginBottom: '1.5rem' }}>What we're open to</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              {[
                { title: 'Partnerships', desc: 'Distribution, institutional collaborations, research partnerships. We are open to working with universities, NGOs, and government bodies.' },
                { title: 'Investment', desc: 'Pre-seed conversations welcome. We have traction, a moat, and a clear roadmap. If you back African founders, talk to us.' },
                { title: 'Data Licensing', desc: 'Enterprise or research teams who need verified African market data — reach out to discuss licensing the AfriFoundry Dataset.' },
                { title: 'Media & Press', desc: 'Building the Bloomberg Terminal of Africa from a TUM Mombasa dorm room. We are happy to talk.' },
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
