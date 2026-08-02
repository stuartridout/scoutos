# scoutos

## What this is
The parent site for scoutos.org — the umbrella over ScoutOS Events, HikeCheck
and Waitlist. A small static marketing + signposting site (home + `/support`),
developed by Milton Keynes District Scout Council.

## Stack
Next.js 15 App Router, React 19, TypeScript strict, Node ≥ 22.6. Static export
(`output: 'export'`) served from GitHub Pages on the custom domain scoutos.org.
No DB, no auth, no APIs — every route is statically prerendered. Cal Sans +
Nunito Sans from Google Fonts.

## Invariants — do not break
- **Follow the family masterbrand** (`brand/scoutos-masterbrand.md`) — it is
  canonical. `brand/` and `public/brand/` hold the master marks: use the compass
  path bit-identical, never redraw it. Wordmark construction lives in
  `components/Brand.tsx`.
- **All outbound links and the contact email live in `lib/products.ts`** — the
  single source of truth. Don't hard-code product URLs elsewhere.
- **Design tokens live in `lib/tokens.ts`** (mirrored in `app/globals.css`).
  ScoutOS yellow is the identity colour; green/red stay reserved for
  safety-critical status per §6 and aren't used decoratively here.
- CSP is best-effort via a `<meta>` tag in `app/layout.tsx` (Pages sets no
  server headers). `output: 'export'` supports no `headers()` — don't re-add it.
  Google Fonts is the only allowed external origin; keep the meta CSP in step.
- `public/CNAME` (scoutos.org) and `public/.nojekyll` must stay — the CNAME
  binds the custom domain; `.nojekyll` stops Jekyll from dropping `_next/`.
- No `basePath` — the build targets the apex domain, not the github.io project
  path. Don't add one without also revisiting CNAME + links.

## How to deploy
Automatic via `.github/workflows/deploy-pages.yml` on push to `main` (and manual
dispatch): builds the static export and publishes `out/` to GitHub Pages. One-off
setup: Settings → Pages → Source = GitHub Actions; point scoutos.org DNS at Pages.

## Conventions
- Work on a feature branch; explain git operations in one sentence.
- Gate before pushing: `npm run typecheck && npm run build`.
- British English, sentence case, no exclamation marks (masterbrand §9).

## Status
- Last session: Aug 2026 — built home + `/support`; moved hosting to GitHub
  Pages (static export). Typecheck + export green.
- Next three actions:
  1. Enable Pages (Source = GitHub Actions) and point scoutos.org DNS.
  2. Fill in real Scouts UK help deep-links if wanted.
  3. Add OG/social image + sitemap when content settles.

## Out of scope
Per-product content, auth, databases, and infra — this repo is the parent
marketing site only.
