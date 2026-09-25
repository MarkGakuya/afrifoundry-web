# AfriFoundry Website — Next.js

Full rebuild of the marketing site as a real Next.js 14 App Router project —
real routes, Tailwind, next/font, next/image, the Metadata API for SEO, a
live training widget wired into an API route, and everything else below.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub and import into Vercel (recommended). Set environment
variables in Vercel → Project → Settings → Environment Variables.

**→ See [`BACKEND_REQUIREMENTS.md`](./BACKEND_REQUIREMENTS.md) for the full,
organized checklist of every env var and API contract needed to make this
fully live** — this README covers the same vars, just not grouped by which
backend piece they depend on.

| Variable | Required for | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics | GA4 Measurement ID, e.g. `G-XXXXXXXXXX`. Site works fine without it — analytics just won't load. |
| `AFRIFOUNDRY_TRAINING_API_URL` | Contribute page's training widget | Your backend endpoint that receives training messages. Without it, submissions fail with a clear "not connected yet" message rather than silently vanishing. |
| `AFRIFOUNDRY_TRAINING_API_KEY` | Contribute page's training widget | Bearer token your backend expects, if any. |
| `AFRIFOUNDRY_CHAT_API_URL` | "Ask Afri3B" widget, WhatsApp, dev playground, team application chat | Your live conversational Afri3B endpoint. One backend, four front doors. |
| `AFRIFOUNDRY_CHAT_API_KEY` | Same as above | Bearer token your backend expects, if any. |
| `AFRIFOUNDRY_METRICS_API_URL` | Investor dashboard | Returns real metrics as flat JSON — renders automatically, no fixed schema. |
| `AFRIFOUNDRY_METRICS_API_KEY` | Investor dashboard | Bearer token your backend expects, if any. |
| `ACCESS_AUTH_SECRET` | Investor/developer email verification | Any long random string — signs the magic-link tokens. No database needed. Keep secret. |
| `RESEND_API_KEY` | Magic-link emails + team application emails | From resend.com, free tier available. |
| `EMAIL_FROM` | Same as above | e.g. `AfriFoundry <no-reply@afrifoundry.com>` — domain must be verified in Resend first. |
| `WHATSAPP_VERIFY_TOKEN` | WhatsApp webhook | Any string you choose — must match what you enter in Meta's webhook config. |
| `WHATSAPP_ACCESS_TOKEN` | WhatsApp webhook | Permanent System User access token from Meta for Developers. |
| `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp webhook | The Phone Number ID for your WhatsApp Business number. |
| `WHATSAPP_APP_SECRET` | WhatsApp webhook | Your Meta App Secret — used to verify incoming webhook calls are genuinely from Meta. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Community page's "Message Afri3B" link | Your WhatsApp Business number, international format, no `+` (e.g. `254712345678`). |

### Setting up the WhatsApp integration

Afri3B talks to people on WhatsApp through Meta's **official Cloud API** —
not an unofficial library logged in as a phone number sitting inside a
group. That route (Baileys, whatsapp-web.js, etc.) is how most "AI in my
WhatsApp group" bots work, but it violates WhatsApp's Terms of Service and
numbers running it get banned, sometimes fast. Meta's official API also
technically **cannot** post into a group at all — so the architecture here
is: the Founding Group stays human, and Afri3B lives one DM away.

1. In [Meta for Developers](https://developers.facebook.com), create an app
   → add the **WhatsApp** product.
2. Add/verify your business phone number, note its **Phone Number ID**.
3. Generate a **permanent System User access token** (not the 24-hour test
   token) with `whatsapp_business_messaging` permission.
4. Set the webhook URL to `https://afrifoundry.com/api/whatsapp`, choose a
   verify token, subscribe to the `messages` field.
5. Put all five `WHATSAPP_*` env vars above into Vercel, plus
   `AFRIFOUNDRY_CHAT_API_URL`/`_KEY` so it has something to actually talk to.
6. Put your number into `NEXT_PUBLIC_WHATSAPP_NUMBER` so the Community
   page's "Message Afri3B" button opens the right chat.

Once live: anyone who messages that number gets a real Afri3B reply,
threaded by phone number as the session ID. No group-posting, no scripted
welcome message — Afri3B's own conversational behavior handles that,
the same as the website.

## ⚠️ Before you launch — fill these in

A few things were built with honest placeholders because I don't have the
real values. Search the codebase for them:

- **`app/community/page.js`** — `WHATSAPP_GROUP_URL` is a placeholder. Swap in
  the real Founding Group invite link (a WhatsApp *Group* invite, not the
  Channel link already live in the footer — those are different WhatsApp
  products). It also reads `NEXT_PUBLIC_WHATSAPP_NUMBER` for the "Message
  Afri3B" button — falls back to a visible placeholder until you set it.
- **`app/about/page.js`** — the Instagram link under the founder's "Get in
  touch" dropdown is `REPLACE_WITH_HANDLE`. Swap in the real handle.
- **`app/api/contribute/route.js`** — returns an honest 503 until
  `AFRIFOUNDRY_TRAINING_API_URL` is set. The widget on /contribute will show
  "Training pipeline isn't connected yet" until then.

## Site map — what's on every page

| Route | Purpose |
|---|---|
| `/` | Homepage. Now leads with a real **"Ask Afri3B" chat widget** instead of a static screenshot — an actual interaction, wired to `/api/chat`. |
| `/about` | Who's building this and why — now also carries the **Mission** statement (moved here from the homepage), the founder bio with a **Get in touch dropdown** (email / Instagram / LinkedIn), the honest "first product was retired" story, values, timeline, and FAQ. |
| `/product` | Afri3B, the core AI product architecture. |
| `/team` | "Built solo so far. Growing now." Each role is **expandable** with real expectations and its own **live apply-chat with Afri3B** (transcript emailed to the team for human review), plus an email fallback and an honest step-by-step description of how joining actually works. |
| `/partners` | For commerce/logistics platforms. CTA routes to `partnerships@afrifoundry.com`. |
| `/investors` | The infrastructure thesis, plus a real **email-verified gate** (`/investors/dashboard`) — no password, a signed magic link — that renders live metrics once `AFRIFOUNDRY_METRICS_API_URL` is connected. |
| `/developers` | API docs plus a clearly-labeled example request/response, and a real **email-verified live playground** (`/developers/playground`) that talks directly to Afri3B. |
| `/users` | What Afri3B can do today. CTA now links straight out to `afri3b.afrifoundry.com` instead of a contact page. |
| `/contribute` | Org data partnerships (unchanged, mailto flow) **plus** a live chat-style **mini-Afri3B training widget** for individuals — no structured form, just a message box wired to `/api/contribute`. |
| `/community` **(new)** | The WhatsApp Founding Group, rebuilt around a "you're part of building this" ownership narrative. Explains honestly why Afri3B isn't inside the group (WhatsApp's official API can't post into groups), and links to messaging Afri3B one-on-one instead. |
| `/privacy` | Privacy policy — updated to accurately describe Google Analytics and the training widget's data collection (no more stale "collects nothing" claim). |
| `/terms` | Terms of use. |
| `/sitemap.xml`, `/robots.txt` | Auto-generated, updated for the current route list. |
| 404 | Custom not-found page. |

`/contact` no longer exists as a page — it's a redirect to `/` (see
`next.config.js`), replaced by a **"Get in touch" disclosure in the footer**
listing three real addresses with descriptions (general / partnerships /
support), on every page.

## What changed in this pass

- **Investor gate, for real**: `/investors` now sends a signed magic-link
  email (no database, no password) that unlocks `/investors/dashboard` —
  renders live metrics if `AFRIFOUNDRY_METRICS_API_URL` is set, an honest
  "not connected yet" if not. Never a fake login screen.
- **Developer playground, for real**: same magic-link gate unlocks
  `/developers/playground` — a live chat against the actual Afri3B backend,
  with a raw-JSON view of each request/response for developer eyes.
- **Team applications are now a real conversation with Afri3B**: each role
  on `/team` has a live apply-chat (framed around that specific role) —
  the transcript gets emailed to the team for human review. This is the
  honest version of "Afri3B does a first-pass interview": a real
  conversation, never an automated accept/reject.
- **Email sending is wired in** (Resend) — powers both the magic links
  above and the team application emails.

- **Nav**: wider container on laptop/large screens (`lg:`/`xl:` breakpoints)
  so it doesn't look cramped in a narrow centered column while the rest of
  the screen sits empty; every link and the CTA share one consistent,
  responsive size scale; "Try Afri3B" redesigned as a pill with a live
  pulsing indicator dot.
- **Mission** moved from the homepage to `/about`, where it fits the "who's
  building this and why" framing better.
- **Contact page removed**, replaced by the footer disclosure + a redirect.
- **Per-section CTAs now route to real addresses** instead of a generic
  contact form: Partners → `partnerships@`, Investors/Developers/Team →
  `support@`, each with a pre-filled subject line.
- **Contribute's individual flow is now a live chat widget**, not a
  multi-field form — consented, honeypot-protected, posts to
  `/api/contribute`, and will show Afri3B's actual reply inline once a real
  conversational backend is wired up (falls back to an honest "logged for
  review" until then).
- **New `/community` page** for the WhatsApp Founding Group, rebuilt around
  the ownership/movement narrative.
- **Team page** roles are now expandable with real expectations and a
  role-specific apply link; the intro statement got a larger, standalone
  treatment instead of being one paragraph among many.
- **About page founder contact** is now a dropdown (email / Instagram /
  LinkedIn) instead of two separate buttons.
- **Homepage hero copy** softened from "AI infrastructure the continent
  doesn't yet have" (an absolute claim) to "built deeply from the
  continent's own ground truth" (a claim about what AfriFoundry is doing).
- **Privacy policy** corrected — it previously claimed the site collects
  "nothing automatically... no analytics," which was false once Google
  Analytics and the training widget were added. Now accurate.
- **Homepage now has a live "Ask Afri3B" widget** in place of the static
  product screenshot — a real conversation via `/api/chat`, not a picture.
- **WhatsApp integration, done the compliant way**: `/api/whatsapp` is a
  real Meta Cloud API webhook (with HMAC signature verification) that lets
  people DM Afri3B directly. It deliberately does NOT try to put a bot
  inside the group — Meta's official API has no mechanism for that, and the
  unofficial libraries that fake it violate WhatsApp's ToS and risk getting
  the number banned. The Community page explains this honestly instead of
  hiding it.

## Structure

- `app/` — one folder per route, each a `page.js`; API routes under
  `app/api/`: `contribute` (training relay), `chat` (live chat relay, used
  by the homepage widget, WhatsApp, dev playground, and team apply chat),
  `whatsapp` (Meta Cloud API webhook), `access/request` + `access/verify`
  (magic-link auth), `team/apply` (emails application transcripts);
  gated pages `investors/dashboard` and `developers/playground`;
  `sitemap.js`, `robots.js`, `not-found.js`, `icon.png` as Next.js App
  Router convention files
- `lib/` — `jwt.js` (dependency-free signed-token helper, no database
  needed for auth), `email.js` (Resend wrapper)
- `components/` — `Nav`, `Footer`, `CardList`, `StatRow`, `SystemDiagram`,
  `MoeDiagram`, `RoadmapDiagram`, `TrainAfri3B` (Contribute page's training
  widget), `AskAfri3B` (homepage's live chat widget), `AccessRequestForm`
  (shared investor/developer email-verification UI), `DevPlayground`
  (developer playground chat), `RoleApplyChat` (team page's per-role apply
  chat)
- `public/` — real logo, founder photo, product screenshot
- `BACKEND_REQUIREMENTS.md` — the full checklist of what a backend needs to
  provide for everything here to go fully live
