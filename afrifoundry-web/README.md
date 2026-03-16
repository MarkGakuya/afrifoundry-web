# AfriFoundry Website

Official website for AfriFoundry — Data & Intelligence Infrastructure for Africa.

**Live at:** afrifoundry.com

## Pages

- `/` — Home
- `/product` — AfriFoundry AI
- `/data` — The Dataset
- `/about` — About AfriFoundry
- `/founding` — Founding 100 Wall
- `/contact` — Contact
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Syne + DM Sans + JetBrains Mono (Google Fonts)
- Deployed on Vercel

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "AfriFoundry website v2"
git remote add origin https://github.com/MarkGakuya/afrifoundry-web.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to vercel.com → New Project
2. Import `afrifoundry-web` from GitHub
3. Framework: Next.js (auto-detected)
4. Deploy — no environment variables needed for V1
5. Add custom domain: `afrifoundry.com`

### 3. DNS (point afrifoundry.com to Vercel)

In your domain registrar DNS settings:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Update Founding Wall

When new members join, update `/lib/constants.js`:
- Add name to `FOUNDING_MEMBERS` array
- Update `STATS.foundingClaimed` and `STATS.foundingLeft`

## Update Datapoints

All numbers live in `/lib/constants.js` — one place, updates everywhere.

---

*AfriFoundry · Built in Kenya · Built for Africa*
