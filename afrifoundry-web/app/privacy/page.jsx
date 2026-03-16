export const metadata = { title: 'Privacy Policy — AfriFoundry' };

export default function PrivacyPage() {
  const Section = ({ title, children }) => (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--orange)', marginBottom: '0.85rem' }}>{title}</h2>
      <div style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.78 }}>{children}</div>
    </div>
  );

  return (
    <section style={{ padding: '9rem 1.5rem 6rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.62rem', color: 'var(--orange)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Legal</div>
        <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', letterSpacing: '0.06em', marginBottom: '3rem' }}>Last updated: March 2026</p>

        <Section title="1. What We Collect">
          When you use AfriFoundry AI, we may collect: conversation content (to improve AI responses), your email address if you register or join the Founding 100, usage analytics (anonymised), and feedback you voluntarily provide. We do not collect payment information — payments are handled by third-party processors.
        </Section>
        <Section title="2. How We Use Your Data">
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              'To provide and improve AfriFoundry AI',
              'To train and fine-tune our models on African market conversations',
              'To send product updates if you have opted in',
              'To maintain the security and integrity of our platform',
              'To understand usage patterns and improve the product',
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
        </Section>
        <Section title="3. Conversation Data">
          Conversations with AfriFoundry AI may be used to improve our models. We do not sell individual conversation data to third parties. If you prefer your conversations not be used for training, contact us at mark@afrifoundry.com and we will remove your data from our training pipeline.
        </Section>
        <Section title="4. Data Storage">
          Your data is stored on secure servers. We use industry-standard encryption for data in transit and at rest. AfriFoundry operates from Kenya and your data may be processed in Kenya or other jurisdictions where our infrastructure providers operate.
        </Section>
        <Section title="5. Third Parties">
          We use the following third-party services: Anthropic (AI infrastructure), Neon (database), Render (hosting), Tally (forms), Vercel (web hosting). Each of these has their own privacy policies which govern their handling of data.
        </Section>
        <Section title="6. Your Rights">
          You have the right to: access the data we hold about you, request deletion of your data, opt out of marketing communications, and request that your conversation data not be used for training. Exercise these rights by emailing mark@afrifoundry.com.
        </Section>
        <Section title="7. Cookies">
          AfriFoundry uses minimal cookies — primarily for authentication and session management. We do not use advertising cookies or third-party tracking.
        </Section>
        <Section title="8. Contact">
          For privacy concerns: mark@afrifoundry.com · AfriFoundry · Mombasa, Kenya
        </Section>
      </div>
    </section>
  );
}
