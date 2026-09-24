export const metadata = { title: "Privacy Policy — AfriFoundry" };

export default function Privacy() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">PRIVACY POLICY</div>
        <h1 className="font-display text-3xl font-bold">How AfriFoundry handles your data</h1>
        <p className="mt-4 text-ink-dim">
          This is a plain-language summary, not a substitute for the full policy AfriFoundry
          publishes on its product.
        </p>
        <h3 className="mb-2 mt-7 font-semibold">What&apos;s collected</h3>
        <p className="text-ink-dim">
          The Afri3B product collects an account email, conversation history, and optional
          settings (language, location) you provide directly. This website collects nothing
          automatically — no cookies, no tracking, no analytics.
        </p>
        <h3 className="mb-2 mt-7 font-semibold">Training consent</h3>
        <p className="text-ink-dim">
          Whether your Afri3B conversations may inform future model training is a setting you
          control, off by default.
        </p>
        <h3 className="mb-2 mt-7 font-semibold">Contact</h3>
        <p className="text-ink-dim">Questions about data handling: hello@afrifoundry.com</p>
      </div>
    </section>
  );
}
