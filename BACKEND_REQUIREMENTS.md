# What the backend needs to provide

This is the single checklist for wiring the live website up to a real
backend. Everything on the frontend is built and working — every piece
below fails **honestly** (a clear error, never a fabricated response) until
its corresponding backend piece and env vars exist. Nothing here requires
changing frontend code — just pointing env vars at real endpoints.

---

## 1. Afri3B conversation endpoint

**Powers:** homepage "Ask Afri3B" widget, WhatsApp DMs, developer playground,
team application chat — one backend connection, four front doors.

| Env var | Where it's set | What it is |
|---|---|---|
| `AFRIFOUNDRY_CHAT_API_URL` | Vercel | Your live chat endpoint, e.g. `https://api.afrifoundry.com/v1/chat` |
| `AFRIFOUNDRY_CHAT_API_KEY` | Vercel | Bearer token, if your endpoint requires one |

**Your endpoint receives** (`POST`, from `app/api/chat/route.js`):
```json
{
  "message": "string — what the person typed",
  "sessionId": "string or null — lets you thread a conversation if you support it",
  "source": "website | whatsapp | developer-playground | team-application",
  "context": "string or null — e.g. 'Applicant conversation for the ML engineer role', present only on the team application chat",
  "submittedAt": "ISO 8601 timestamp"
}
```

**Your endpoint must return:**
```json
{ "reply": "string — Afri3B's actual response" }
```
Any other shape, non-2xx status, or timeout is treated as "Afri3B couldn't
respond" on the frontend — never silently swallowed, never faked.

**Note on `source`:** if you want different behavior per surface (e.g. a
shorter/more casual tone on WhatsApp, or a system prompt that knows it's
mid-interview for `team-application`), branch on this field server-side.
The frontend doesn't need to know — it just sends the tag.

---

## 2. Training contribution relay

**Powers:** the live mini-Afri3B chat widget on `/contribute`.

| Env var | Where it's set | What it is |
|---|---|---|
| `AFRIFOUNDRY_TRAINING_API_URL` | Vercel | Endpoint that receives training messages |
| `AFRIFOUNDRY_TRAINING_API_KEY` | Vercel | Bearer token, if required |

**Your endpoint receives** (`POST`, from `app/api/contribute/route.js`):
```json
{
  "message": "string",
  "consent": true,
  "source": "website-widget",
  "submittedAt": "ISO 8601 timestamp"
}
```

**Your endpoint may optionally return** `{ "reply": "string" }` — if present,
the widget shows it as an Afri3B chat bubble, making this a genuine live
exchange rather than a one-way log. If you don't return a reply, the widget
just shows "Logged for review — thank you," which is also fine.

This is intentionally a **separate** endpoint from the chat one above —
training submissions likely need different handling (queued for human
review before entering the corpus) than a live conversational reply.

---

## 3. Investor metrics

**Powers:** `/investors/dashboard`, only reachable after email verification
(see §5).

| Env var | Where it's set | What it is |
|---|---|---|
| `AFRIFOUNDRY_METRICS_API_URL` | Vercel | Endpoint returning current metrics |
| `AFRIFOUNDRY_METRICS_API_KEY` | Vercel | Bearer token, if required |

**Your endpoint must return** a flat JSON object of `{ "label": value }` —
the dashboard renders every key/value pair it gets as a stat tile
automatically:
```json
{
  "Training examples": "12,400",
  "Verified language entries": "3,100",
  "Languages in progress": 10,
  "Partner API calls (30d)": "8,900"
}
```
No fixed schema — whatever you return is what shows up. Until this is set,
verified investors see an honest "you're verified, but live metrics aren't
connected yet" instead of a blank page or fake numbers.

---

## 4. Team applications

**Powers:** the per-role "Apply for this role" chat on `/team`.

No new backend endpoint needed — this already works end-to-end via email
(see §6, Resend). Once someone finishes a conversation with Afri3B (using
the endpoint from §1 with `source: "team-application"`) and clicks "Submit
application," the full transcript is emailed to `support@afrifoundry.com`.
**If/when you want applications to land in an ATS or database instead of
email**, that would mean adding a new env var (e.g.
`AFRIFOUNDRY_APPLICATIONS_API_URL`) and updating `app/api/team/apply/route.js`
to forward there instead of/alongside the email — not built yet, since email
is a completely reasonable v1.

---

## 5. Investor / developer email verification (magic links)

**Powers:** the "verify your email" gates on `/investors` and `/developers`
that unlock the metrics dashboard and the live playground.

| Env var | Where it's set | What it is |
|---|---|---|
| `ACCESS_AUTH_SECRET` | Vercel | Any long random string (e.g. `openssl rand -hex 32`). Signs the magic-link tokens. **Keep this secret** — anyone with it could mint their own valid session. |

This needs **no database** — it's a signed, stateless token (see
`lib/jwt.js`), so there's nothing to provision here beyond the secret
itself. This part is fully built and requires zero further backend work —
it only depends on email actually sending, which is §6.

---

## 6. Email sending (Resend)

**Powers:** magic-link verification emails (§5) and team application emails
(§4).

| Env var | Where it's set | What it is |
|---|---|---|
| `RESEND_API_KEY` | Vercel | From [resend.com](https://resend.com) — has a free tier, no code changes needed once you have a key |
| `EMAIL_FROM` | Vercel | e.g. `AfriFoundry <no-reply@afrifoundry.com>` — the sending domain must be verified in Resend's dashboard first |

This is the one piece that's genuinely easiest to set up first, since it
unblocks both the investor/developer gates and team applications at once.

---

## 7. WhatsApp Business (Meta Cloud API)

**Powers:** DMing Afri3B directly on WhatsApp (linked from `/community`).

| Env var | Where it's set | What it is |
|---|---|---|
| `WHATSAPP_VERIFY_TOKEN` | Vercel | Any string you choose — must match Meta's webhook config |
| `WHATSAPP_ACCESS_TOKEN` | Vercel | Permanent System User token from Meta for Developers |
| `WHATSAPP_PHONE_NUMBER_ID` | Vercel | From your WhatsApp Business phone number in Meta's dashboard |
| `WHATSAPP_APP_SECRET` | Vercel | Your Meta App Secret — verifies incoming webhook calls are genuinely from Meta |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Vercel | Your WhatsApp Business number, international format, no `+` (e.g. `254712345678`) — used to build the "Message Afri3B" link on `/community` |

Setup steps are in `README.md` under "Setting up the WhatsApp integration."
This uses `AFRIFOUNDRY_CHAT_API_URL` from §1 — once that's live, WhatsApp
works automatically, no separate chat logic to build.

**Deliberately not built:** Afri3B posting or participating inside the
WhatsApp Group itself. Meta's official API has no mechanism for a bot to
join or post in a group at all — the only way to fake that is an unofficial
library logging in as a real phone number, which violates WhatsApp's ToS
and risks the number getting banned. Not a gap, a boundary.

---

## 8. Two placeholders that just need real values (no backend, just data)

| File | Placeholder | What to do |
|---|---|---|
| `app/community/page.js` | `WHATSAPP_GROUP_URL` | Swap in the real Founding Group invite link (`chat.whatsapp.com/...`) |
| `app/about/page.js` | Instagram link, `REPLACE_WITH_HANDLE` | Swap in the real handle |

---

## Suggested order to wire things up

1. **Resend (§6)** — unblocks investor/developer verification AND team
   applications in one step, and needs no other backend work.
2. **Chat endpoint (§1)** — the single highest-leverage piece: lights up
   the homepage widget, WhatsApp, the dev playground, and team application
   chat all at once.
3. **WhatsApp (§7)** — once §1 and §6 exist, this is mostly Meta dashboard
   configuration, not code.
4. **Training relay (§2)** and **metrics (§3)** — lower urgency, each is
   independent and can land whenever the corresponding backend piece is
   ready.
5. **The two placeholders (§8)** — anytime, thirty seconds each.

Every piece above was built to fail honestly and independently — there's no
order that breaks anything. Wire up one, see it come alive, move to the next.
