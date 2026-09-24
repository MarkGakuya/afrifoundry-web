# AfriFoundry Website

## Site map — what's on every page

| Route | Purpose |
|---|---|
| `/` | Homepage. Positions AfriFoundry as *"the data and intelligence infrastructure layer for Africa"* — the systems that turn real African data (markets, languages, usage) into AI infrastructure, with Afri3B as the first product built on it. |
| `/about` | Who's building this and why. Bootstrapped solo from Mombasa, Kenya, alongside a Biomedical Engineering degree — the founding story and reasoning behind building African AI infrastructure from the ground up rather than adapting Western models. |
| `/product` | Afri3B, the core AI product — "learns a language the way it's actually spoken." Explains the hybrid model architecture, and that vocabulary/grammar/cultural context are recorded only from real ingested text, never invented from general knowledge. |
| `/team` | "Built solo so far. Growing now." Honest about being a one-person team since June 2025, with an open call for who's being brought on first (software engineers, ML/data engineers, data analysts/verifiers, early operators). |
| `/partners` | For commerce/logistics platforms — "the AI layer for how Africa actually buys and sells." Built for informal and secondhand trade at scale, sold to platforms rather than individual traders. References an already-live integration with a Kenyan multi-marketplace and logistics platform. |
| `/investors` | The infrastructure thesis — why Africa's languages and markets lack AI infrastructure built from their own ground truth, and why that gap is the opportunity. Reiterates the solo-bootstrapped founding story as part of the pitch. |
| `/developers` | API documentation entry point. Describes real-time integration (Afri3B calls back to partner systems rather than holding a copy of their data), per-partner auth keys, rate limits, and revocable access. |
| `/users` | What Afri3B can do today, for any user — not positioned as a niche/student tool, everyone gets the same grounded reasoning. |
| `/contribute` | For universities, NGOs, language holders, and open-data initiatives who want to contribute real data — explicit about only accepting sources with clear provenance and proper consent, nothing scraped or fabricated. |
| `/contact` | Direct `mailto:` contact form (no backend, no tracking) plus links to LinkedIn, X/Twitter, WhatsApp Channel, and the "The Validation Point" newsletter. |
| `/privacy` | Privacy policy — how AfriFoundry handles user data. |
| `/terms` | Terms of use for the AfriFoundry website and Afri3B. |
| `/sitemap.xml` | Auto-generated sitemap covering all routes above (Next.js metadata route). |
| `/robots.txt` | Allows all crawlers, points to the sitemap. |
| 404 (any unmatched route) | Custom not-found page styled to match the rest of the site, with a link back home. |

## Structure

- `app/` — one folder per route above, each a `page.js`; plus `sitemap.js`,
  `robots.js`, `not-found.js`, and `icon.png` (favicon) as Next.js App
  Router convention files
- `components/` — shared `Nav`, `Footer`, `CardList`, `StatRow`,
  `SystemDiagram`, `MoeDiagram`, `RoadmapDiagram`
- `public/` — real logo, founder photo, and product screenshot as actual
  image files (no base64-in-HTML)

## Consistent through the whole site

- Honest positioning throughout: Phase 1, sector-by-sector rollout, no
  invented traction numbers, no fabricated team
- The Dropby confidentiality constraint (never named, described generically)
  where relevant
- Flat, no-gradient design language (Palantir/Linear-influenced) — dark by
  default with a light-mode toggle stored in `localStorage`
- Every page carries the shared `Nav` and `Footer`, real `<Image>`
  optimization, and Metadata-API-generated `<title>` / Open Graph tags

## What's genuinely new here vs. the HTML version

- Real URLs per page — shareable, bookmarkable, crawlable individually
- Real `<Image>` optimization instead of embedded base64
- Next's Metadata API generates per-page `<title>` and OG tags automatically
- Component reuse (CardList, diagrams) instead of copy-pasted markup
- Sitemap, robots.txt, favicon, custom 404, and Google Analytics wired in
  ahead of launch
