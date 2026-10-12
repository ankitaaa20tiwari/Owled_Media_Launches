# Confido Health · Launch Day

A single-page microsite for the Confido Health launch on **October 14, 2026 at 8:00 AM ET**.
Supporters land on it, read what Confido Health is building, and click straight through to the
launch post on X or LinkedIn.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS 4. The page is fully prerendered at
build time, so it's served as static HTML from Vercel's CDN and works without JavaScript.

---

## Adding the launch post links (the only launch-day step)

Everything lives in **`src/config/launch.ts`**:

```ts
export const launchConfig: LaunchConfig = {
  xPostUrl: "",          // ← paste the X post link here
  linkedinPostUrl: "",   // ← paste the LinkedIn post link here
  launchDate: "2026-10-14T08:00:00-04:00",   // 8:00 AM ET
  companyWebsite: "https://confido.health",
};
```

1. **X:** open the post → Share → *Copy link*. Looks like `https://x.com/<handle>/status/1234…`
2. **LinkedIn:** open the post → `…` → *Copy link to post*. Looks like
   `https://www.linkedin.com/posts/…` or `https://www.linkedin.com/feed/update/urn:li:activity:…`
3. Paste each one between the quotes and save.
   - **No coding setup?** Open the file on GitHub, click the pencil icon, paste, and *Commit changes*.
     Vercel redeploys automatically in about a minute.

What visitors see:

| Config | Page shows |
| --- | --- |
| Both links empty | Status "Post links will be available on launch day"; both cards say "Link coming soon" and aren't clickable |
| One or both links set | Status "The launch is live"; each configured card opens its post in a new tab |
| A link that isn't a single X / LinkedIn post (typo, profile, homepage) | **The deploy fails** with a message naming the problem. The previous version stays live, so visitors never get a wrong link. Check the Vercel build log, fix the link, save again. |

The hero shows a live countdown to `launchDate` (days, hours, minutes, seconds), which disappears
once that moment passes. The countdown never claims the launch is live: the page only says that once
a real post link is in the config.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also validates the links)
npm run start      # serve the production build
```

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New… → Project**, import the repository. Vercel detects Next.js; keep the
   default settings and click **Deploy**. No environment variables are needed.
3. **Custom domain:** Project → **Settings → Domains** → add your domain (for example
   `launch.confido.health`), then add the DNS record Vercel shows you (a `CNAME` to
   `cname.vercel-dns.com` for a subdomain) at your DNS provider. HTTPS is issued automatically.
4. Every commit to the main branch redeploys production. That's how the post links go live.

Alternatively, from this folder: `npx vercel` (preview) and `npx vercel --prod` (production).

Social previews (Open Graph / X cards) use the generated image at `/opengraph-image` and the
production domain Vercel provides at build time.

### Launch-day checklist

- [ ] Both post links pasted into `src/config/launch.ts` and committed
- [ ] Vercel deployment finished (green) for that commit
- [ ] Open the production URL on a phone and a laptop, click both cards, and confirm each opens the right post

## Project structure

```
src/
  config/launch.ts        ← the links and launch date (edit this)
  lib/launch.ts           URL validation and date formatting
  app/                    layout, page, favicon (icon.svg), share image
  components/             header, hero, launch cards, support note, footer
```
