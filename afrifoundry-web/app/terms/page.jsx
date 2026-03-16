export const metadata = { title: 'Terms of Service — AfriFoundry' };

export default function TermsPage() {
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
        <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text3)', fontFamily: 'var(--font-jetbrains)', fontSize: '0.68rem', letterSpacing: '0.06em', marginBottom: '3rem' }}>Last updated: March 2026</p>

        <Section title="1. Acceptance of Terms">
          By accessing or using AfriFoundry AI at ai.afrifoundry.com or any other AfriFoundry product, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </Section>
        <Section title="2. Description of Service">
          AfriFoundry provides an AI-powered thinking partner and market intelligence platform trained on verified African market data. The service is designed to help entrepreneurs, researchers, and individuals make better-informed decisions in the African context. AfriFoundry AI is a tool for thinking and research — not professional financial, legal, or business advice.
        </Section>
        <Section title="3. User Conduct">
          <p style={{ marginBottom: '0.75rem' }}>You agree not to use AfriFoundry services to:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {['Transmit harmful, abusive, or illegal content', 'Attempt to reverse-engineer or extract training data', 'Misrepresent AI-generated content as professional advice', 'Violate any applicable laws or regulations', 'Spam or abuse the platform in any way'].map(item => <li key={item}>{item}</li>)}
          </ul>
        </Section>
        <Section title="4. Intellectual Property">
          All data, models, interfaces, and content on AfriFoundry platforms are the intellectual property of AfriFoundry. The AfriFoundry Dataset — including all market datapoints collected by AfriFoundry scouts and scrapers — is proprietary. Reproduction, resale, or distribution without written permission is prohibited.
        </Section>
        <Section title="5. Disclaimers">
          AfriFoundry AI provides information and analysis for general informational purposes only. Nothing on our platform constitutes professional business, financial, legal, or investment advice. Always conduct your own due diligence before making business decisions. AfriFoundry does not guarantee the accuracy, completeness, or timeliness of any information provided.
        </Section>
        <Section title="6. Limitation of Liability">
          AfriFoundry shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our services. Our total liability shall not exceed the amount paid by you to AfriFoundry in the 12 months preceding the claim.
        </Section>
        <Section title="7. Changes to Terms">
          AfriFoundry reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
        </Section>
        <Section title="8. Contact">
          For questions regarding these terms, contact us at mark@afrifoundry.com.
        </Section>
      </div>
    </section>
  );
}
