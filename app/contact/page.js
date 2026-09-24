export const metadata = { title: "Contact — AfriFoundry" };

export default function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">GET IN TOUCH</div>
        <h1 className="max-w-[18ch] font-display text-4xl font-bold md:text-5xl">
          Partner with us, or just say hello.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          This opens your email app with the details filled in — there&apos;s no tracking or
          server behind this form.
        </p>
        <form action="mailto:hello@afrifoundry.com" method="post" encType="text/plain" className="mt-8 grid max-w-md gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold">Name</label>
            <input id="name" name="Name" type="text" required className="w-full rounded-md border border-line bg-bg-raised px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold">Email</label>
            <input id="email" name="Email" type="email" required className="w-full rounded-md border border-line bg-bg-raised px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold">What are you reaching out about?</label>
            <textarea id="message" name="Message" required rows={4} className="w-full rounded-md border border-line bg-bg-raised px-3 py-2.5 text-sm" />
          </div>
          <button type="submit" className="justify-self-start rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]">
            Send message
          </button>
          <p className="-mt-2 text-xs text-ink-dim">
            Or email directly, general: hello@afrifoundry.com · support: support@afrifoundry.com
          </p>
        </form>

        <div className="mt-12 border-t border-line pt-8">
          <div className="mb-4 text-sm font-semibold text-ink-dim">Or find us here</div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/company/afrifoundry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/AfriFoundry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              X / Twitter
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbB1Yu07T8beQCLSJZ0I"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              WhatsApp Channel
            </a>
            <a
              href="https://www.linkedin.com/newsletters/the-validation-point-7401988315769634816"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              The Validation Point (newsletter)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
