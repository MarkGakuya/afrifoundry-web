import CardList from "@/components/CardList";
import AccessRequestForm from "@/components/AccessRequestForm";

export const metadata = { title: "Developers — AfriFoundry" };

const items = [
  { title: "POST /v1/search", body: "Natural language search with native Swahili, English, and code-switched support." },
  { title: "POST /v1/describe", body: "Enriches sparse listings into clear, customer-facing descriptions." },
  { title: "POST /v1/visual-search", body: "Image-to-result matching against your live catalogue." },
  { title: "POST /v1/vendor/analytics · /feedback · /forecast", body: "Sales, sentiment, and demand signals — queried in plain language, not read off a dashboard." },
];

export default function Developers() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">FOR DEVELOPERS</div>
        <h1 className="max-w-[18ch] font-display text-4xl font-bold md:text-5xl">
          One API, real African-context intelligence.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-ink-dim">
          Partners integrate against a live architecture — Afri3B calls back to your own systems
          in real time rather than keeping a copy, so responses are always grounded in your
          actual current data.
        </p>

        <CardList items={items} />

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="mb-2 text-xl font-semibold">Example — POST /v1/search</h2>
          <p className="mb-4 max-w-[55ch] text-ink-dim">
            Illustrative only, not a live sandbox yet — shown to make the shape of the API
            concrete ahead of full docs.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="mb-2 font-mono text-xs font-semibold tracking-wide text-gold">
                EXAMPLE REQUEST
              </div>
              <pre className="overflow-x-auto rounded-md border border-line bg-bg-raised p-4 text-xs text-ink">
{`curl -X POST https://api.afrifoundry.com/v1/search \\
  -H "Authorization: Bearer <partner_key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "simu chini ya 20k",
    "language": "sw"
  }'`}
              </pre>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs font-semibold tracking-wide text-gold">
                EXAMPLE RESPONSE
              </div>
              <pre className="overflow-x-auto rounded-md border border-line bg-bg-raised p-4 text-xs text-ink">
{`{
  "interpreted": {
    "item": "phone",
    "max_price": 20000,
    "currency": "KES"
  },
  "results": [
    { "id": "...", "title": "...", "price": 18500 }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[60ch] text-ink-dim">
          Authenticated by a dedicated key per partner, rate-limited, revocable on request. Full
          integration docs shared once a partnership is scoped.
        </p>
        <a
          href="mailto:support@afrifoundry.com?subject=Developer%20API%20access%20request"
          className="mt-6 inline-block rounded-md border border-line px-6 py-3 font-semibold text-ink-dim"
        >
          Request full API access
        </a>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="mb-2 text-xl font-semibold">Try Afri3B itself, live</h2>
          <p className="max-w-[55ch] text-ink-dim">
            Different from the partner REST API above — this talks directly to Afri3B, the same
            backend as the website and WhatsApp. Verify your email and you&apos;re in, no
            partner agreement needed for this part.
          </p>
          <AccessRequestForm purpose="developer" ctaLabel="Verify & open playground" />
        </div>
      </div>
    </section>
  );
}
