# scoutos

The parent site for **scoutos.org** — the umbrella over the ScoutOS family:
[ScoutOS Events](https://events.scoutos.org), [ScoutOS HikeCheck](https://hikecheck.scoutos.org)
and [ScoutOS Waitlist](https://waitlist.scoutos.org). Developed by
**Milton Keynes District Scout Council**.

It's a small, static marketing + signposting site: a home page that introduces
the family and links to each product, and a `/support` page that routes people
either to the official Scouts UK help or to the right product's own help/FAQs.

## Stack

- **Next.js 15** (App Router, React 19), TypeScript strict, Node ≥ 22.6 — the
  EventOK/house standard.
- **Static export** (`output: 'export'`) served from **GitHub Pages** on the
  custom domain **scoutos.org**. `next build` emits a static `out/` directory.
- No database, no auth, no server APIs — every route is statically prerendered.
- Design tokens in `lib/tokens.ts`, brand marks in `components/Brand.tsx`, all
  following the family masterbrand (`brand/scoutos-masterbrand.md`).
- Fonts: **Cal Sans** (display/lockups) + **Nunito Sans** (UI/body), from
  Google Fonts.

## Layout

```
app/
  layout.tsx          root layout, fonts, metadata
  globals.css         tokens + base styles
  page.tsx            home
  support/page.tsx    /support
  icon.svg            favicon (compass on yellow)
components/
  Brand.tsx           Compass glyph + ScoutOS wordmark / product lockups
  Nav.tsx  Footer.tsx shared chrome
lib/
  tokens.ts           design tokens (mirrors masterbrand §5, §7)
  products.ts         product list + all outbound links (single source of truth)
brand/                the canonical masterbrand + master SVGs (unchanged)
public/brand/         copies of the master marks served to the page
```

**To change where the product links point** or the general-enquiries email,
edit `lib/products.ts` — nothing else references those URLs directly.

## Commands

```bash
npm install
npm run dev         # local dev
npm run typecheck   # tsc --noEmit
npm run build       # next build → static export in out/
npm run preview     # serve the built out/ locally on :3000
```

## Deploy (GitHub Pages)

Deployment is automatic via `.github/workflows/deploy-pages.yml` — it builds the
static export and publishes it on every push to `main` (and on manual dispatch).

First-time setup, once:

1. **Settings → Pages → Source: GitHub Actions.**
2. **Custom domain:** `public/CNAME` already contains `scoutos.org`. Point DNS
   at GitHub Pages — apex `A`/`AAAA` records to GitHub's Pages IPs (or an
   `ALIAS`/`ANAME` to `stuartridout.github.io`), and optionally a `www` CNAME.
   Then confirm the domain in Settings → Pages and enable "Enforce HTTPS".

Until DNS resolves, the export can be checked locally with `npm run preview`.
(The default `stuartridout.github.io/scoutos/` project URL would need a
`basePath` — this build is configured for the apex domain, not that path.)

## Status

- Built: Aug 2026. Home + `/support` live; typecheck + static export green.
- Products point at `events.scoutos.org` (live), `hikecheck.scoutos.org` and
  `waitlist.scoutos.org` — all in `lib/products.ts`.
- Emails: general `hello@scoutos.org`, support `help@scoutos.org`
  (`lib/products.ts`).

## Out of scope

No per-product content or CMS — this is the parent marketing + signposting site
only. Security headers (X-Frame-Options / CSP `frame-ancestors`) can't be set on
Pages; a best-effort CSP `<meta>` is in `app/layout.tsx`.
