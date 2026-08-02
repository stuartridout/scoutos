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
- **Azure Static Web Apps** (`output: 'standalone'`), same as the other ScoutOS
  products.
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
npm run build       # next build (the CI gate)
```

## Status

- Built: Aug 2026. Home + `/support` live, typecheck + build green.
- Product links use `*.scoutos.org` subdomains — wire the DNS, or adjust the
  URLs in `lib/products.ts`, before launch.
- `contactEmail` in `lib/products.ts` is a placeholder (`hello@scoutos.org`) —
  confirm before launch.

## Out of scope

No infra/Bicep, CI workflow, or per-product content is included yet — this is
the site only. Add `infra/` + `deploy` when standing up the Azure stack, following
the eventok/guild pattern.
