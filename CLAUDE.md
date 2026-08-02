# scoutos

## What this is
The parent site for scoutos.org — the umbrella over ScoutOS Events, HikeCheck
and Waitlist. A small static marketing + signposting site (home + `/support`),
developed by Milton Keynes District Scout Council.

## Stack
Next.js 15 App Router, React 19, TypeScript strict, Node ≥ 22.6. Azure Static
Web Apps (`output: 'standalone'`). No DB, no auth, no APIs — every route is
statically prerendered. Cal Sans + Nunito Sans from Google Fonts.

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
- Keep the CSP in `next.config.mjs` and `staticwebapp.config.json` in sync;
  Google Fonts is the only allowed external origin.

## How to deploy
Not wired yet. When standing up Azure, copy the eventok/guild `infra/` +
`provision.sh` + `deploy-dev.yml` pattern (SWA Standard, uksouth, no auto-deploy).

## Conventions
- Work on a feature branch; explain git operations in one sentence.
- Gate before pushing: `npm run typecheck && npm run build`.
- British English, sentence case, no exclamation marks (masterbrand §9).

## Status
- Last session: Aug 2026 — built home + `/support`; typecheck + build green.
- Next three actions:
  1. Confirm the `*.scoutos.org` subdomains and `contactEmail`, wire DNS.
  2. Add `infra/` + deploy workflow (eventok pattern).
  3. Fill in real Scouts UK help deep-links / any council contact details.

## Out of scope
Per-product content, auth, databases, and infra — this repo is the parent
marketing site only.
