export const metadata = { title: "Privacy Policy — AfriFoundry" };

export default function Privacy() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">PRIVACY POLICY</div>
        <h1 className="font-display text-3xl font-bold">How AfriFoundry handles your data</h1>
        <p className="mt-4 text-ink-dim">
          This is a plain-language summary, not a substitute for the full policy AfriFoundry
          publishes on its product.
        </p>
        <h3 className="mb-2 mt-7 font-semibold">What&apos;s collected</h3>
        <p className="text-ink-dim">
          The Afri3B product collects an account email, conversation history, and optional
          settings (language, location) you provide directly. This website uses Google
          Analytics (page views and general usage patterns only — no separate tracking scripts
          beyond that), and collects whatever you voluntarily send through the &quot;Ask
          Afri3B&quot; widget on the homepage or the live training widget on the Contribute
          page — just the messages you type in, nothing else. If you message Afri3B on
          WhatsApp, your phone number and message content are received the same way any
          WhatsApp Business conversation works, and are used only to generate a reply — never
          posted anywhere, never shared into a group. Nothing on this website or WhatsApp
          number is collected automatically beyond that.
        </p>
        <h3 className="mb-2 mt-7 font-semibold">Training consent</h3>
        <p className="text-ink-dim">
          Whether your Afri3B conversations may inform future model training is a setting you
          control, off by default. Contributions submitted through the Contribute page are
          different: submitting one requires you to explicitly check a consent box first, and
          each is reviewed by hand before it&apos;s used for training.
        </p>
        <h3 className="mb-2 mt-7 font-semibold">Contact</h3>
        <p className="text-ink-dim">Questions about data handling: hello@afrifoundry.com</p>
      </div>
    </section>
  );
}
