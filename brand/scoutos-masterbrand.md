# ScoutOS masterbrand

**Version 1.0 · July 2026 · The canonical family brand definition**

This is the single source of truth for the **ScoutOS** brand across every ScoutOS
site and app — HikeCheck, Events (EventOK), the scoutos.org home page, and whatever
comes next. Product repos carry their own brand specs covering *product-level*
choices only; where a product spec and this document disagree on a family constant,
this document wins.

Current product specs:

- HikeCheck — `docs/scoutos-branding-spec.md` in `stuartridout/hikecheck`
- Events — `design/scoutos-branding-spec.md` in `stuartridout/eventok`

This document encodes the family decisions agreed in July 2026 (§12 lists the
migrations they imply, and the one decision still open).

---

## 1. Brand idea

ScoutOS builds **calm, trustworthy tools for volunteers** who run real-world
events for real people — hikes, camps, club events. The products are used
outdoors, at kitchen tables, and in control tents, by everyone from an
18-year-old marshal to a 70-year-old charity walker.

Three words govern every visual and copy decision, family-wide:

- **Calm** — warm paper neutrals, hairline borders, no decoration that competes
  with information.
- **Trustworthy** — safety and permission states are unmissable; reassurance
  microcopy wherever data is collected; it should feel like equipment, not a
  social app.
- **Confident** — plain statements, generous targets, disciplined colour.

---

## 2. Naming

- The family brand is **ScoutOS** — always one word, capital S, capital OS.
- Products are **ScoutOS ProductName** on first/formal use ("ScoutOS HikeCheck",
  "ScoutOS Events"), plain **ProductName** thereafter. Product names are
  CamelCase compounds or single capitalised words.
- Page-title pattern: `ScoutOS ProductName — plain-english descriptor`
  (e.g. "ScoutOS Events — parental permissions, sorted"); title template
  `%s · ScoutOS ProductName`.

---

## 3. The compass mark

The ScoutOS compass — ring, vertical needle, centre pivot — is the family
symbol. One master drawing, never redrawn:

| Asset | File |
|---|---|
| Master artwork (wordmark + compass, live text) | `brand/assets/scoutos-master.svg` |
| Compass glyph alone | `brand/assets/compass.svg` |
| Compass on yellow disc | `brand/assets/compass-disc.svg` |

Rules:

- The glyph is used **bit-identical** from the master path — copy the path data,
  never trace or redraw it.
- Colourways: monochrome (ink, or white/paper on dark), ScoutOS yellow on dark,
  or ink on the yellow disc. **Never a tenant or campaign colour.**
- Minimum size 16px. Decorative alongside text — `aria-hidden`.
- Large watermark use (e.g. 480px at low opacity on marketing cards) is
  encouraged; it is the family's quiet signature.

---

## 4. The wordmark and product lockups

### 4.1 Construction

Built from the master artwork at a common cap height:

| Part | Face | Weight |
|---|---|---|
| "Scout" | **Cal Sans** | Bold |
| The first "O" of "OS" | the compass glyph | — |
| "S" | **Avenir Light** (Nunito Sans Light in web use) | 300 |
| Product name (appended after a word space) | **Cal Sans** | Bold |

### 4.2 Delivery standard: outlined vectors

Product lockups ship as **fully outlined vector paths** — text converted to
curves in the compass's master coordinate space — so they render bit-identically
at every size with zero font dependency, no load flash, no fallback. (EventOK's
`EOWordmark` in `components/ui/Brand.tsx` is the reference implementation;
live-text lockups are deprecated — see §12.)

### 4.3 Colour tones

- **Default: monochrome** `currentColor` — ink on light surfaces, white/paper on
  dark or brand-colour surfaces. Quiet trailing placements may drop to ~82% ink
  opacity.
- **Two-tone on dark surfaces** (the family's premium treatment): the ScoutOS
  segment — "Scout" + compass + "S" — in **ScoutOS yellow `#F2C41D`**, the
  product name in warm paper `#F4F1E9`.
- Never: tenant colours in the lockup · stretching · shadows, outlines or
  gradients · any other typeface · two-tone on light surfaces.

### 4.4 Sizing

Size lockups by height; width follows the artwork's ratio. Minimum lockup
height ~16–20px; below that, use the compass glyph alone.

---

## 5. Colour

### 5.1 The ScoutOS identity colours (family constants)

| Role | Hex | Notes |
|---|---|---|
| ScoutOS yellow | `#F2C41D` | The masterbrand's own colour: the compass disc, the ScoutOS segment of two-tone lockups, family marketing accents |
| Warm ink | near-black, warm | Each product's exact ink may vary (HikeCheck `#1B241E`, Events `#0D0B08`) but is always warm and near-black — never cold grey/blue |
| Warm paper | warm off-white | Page backgrounds are always warm paper (HikeCheck `#F4F1E9`, Events `#F3F1EC`) — never pure white pages, never cool grey |

### 5.2 Product accent strategy (family pattern, per-product values)

Every ScoutOS product defines its accent using the **one-hex-in, palette-out**
model (EventOK's system, adopted family-wide July 2026):

```
--brand        product (or tenant) primary
--brand-deep   pressed / deep accents
--brand-soft   light surface tint (selected states)
--brand-tint   paler still — page wash
--brand-ink    readable ink on --brand-soft
--brand-on     readable ink on --brand
```

- **HikeCheck**: fixed accent, waymark yellow `#F2C41D` (coincides with the
  ScoutOS identity colour — a deliberate feature of its trail identity).
- **Events**: tenant-controlled accent, Scout purple `#7413DC` by default.
- Accents are for identity and action — headers, primary CTAs, selected states,
  focus. **Never** for status meaning.
- Any user-facing accent picker must enforce a WCAG AA contrast check.

### 5.3 Semantic status palette (family constants, July 2026 decision)

One set of semantic hexes family-wide (tuned to hold WCAG AA on light and dark):

```
--ok:    #1F8A5B;  --ok-soft: #D8EFE2;  --ok-ring: #2CB074;  --ok-ink-deep: #175E40;
--no:    #B53326;  --no-soft: #F6DAD6;  --no-ring: #D65244;
--amber: #B16A1F;  --amber-soft: #FDF3E4;  --amber-ink: #8A5217;
```

---

## 6. The status discipline

Family-wide, non-negotiable:

1. **Status always carries a label.** Colour alone is never the signal.
2. **Green and red are reserved for safety-critical meaning** (overdue/on-pace,
   photo permission, allergy, in/out) — never lifecycle, never decoration.
3. **Amber names the task**, not the mood: "Photo needed", "Beyond leg" — never
   a bare "Warning".
4. **Icons (✓ ▲ ‼) are mandatory on outdoor/sunlight surfaces** (trail-facing,
   marshal-facing screens — the HikeCheck class of surface) and recommended
   elsewhere.
5. Status pills are 999px-radius, small, weight ~550–650.

Status *labels* and taxonomies are product-level (HikeCheck's pace model;
Events' lifecycle / needs-action / day-and-safety families).

---

## 7. Typography

| Role | Face | Rule |
|---|---|---|
| Display + lockups | **Cal Sans** | Lockups always; display headings per product style |
| **UI / body — family-wide** | **Nunito Sans** (300–800) | The family UI face (July 2026 decision). It stands in for Avenir, the face in the master artwork |
| Mono | product's choice (JetBrains Mono, system stack…) | The *rule* is the constant: monospace is semantic — codes, IDs, times, phone numbers, audit trails; anything a human reads aloud. Never decorative |

Conventions: sentence case everywhere including buttons and pills; the eyebrow
(11–12px, 600–700, 0.08–0.12em tracking) is the **only** uppercase; tabular
numerals for counts and times; inputs ≥16px on touch devices.

---

## 8. Shape

- Pills and chips: **999px radius** (family constant).
- Corner radii live on a small scale per product (≈8–18px band); hairline
  borders in warm tones; elevation is a product choice (HikeCheck: flat;
  Events: soft shadows) but never heavy or cool-toned.

---

## 9. Voice

British English. The voice is a competent volunteer leader / safety officer:
plain, warm, specific, never corporate, no exclamation marks.

- Lead with the job, stated flatly or with quiet wit: *"Permission slips, taken
  seriously."* · *"At any moment, know where everyone was last seen — and who
  to worry about."*
- Explain mechanisms, not vibes: *"A party that stops moving turns red without
  anyone touching the screen."*
- Reassure specifically wherever data is collected: *"Only event staff can see
  this. Deleted after the event."* · *"Never sold or shared outside agreed
  channels."*
- Errors say what happened and what to do next.
- Trust footer pattern on transactional email: *"ScoutOS ProductName · your
  data stays in the UK"*.

---

## 10. Email

Transactional email mirrors the app in email-safe form: table-based inline
styles, no web fonts (system sans fallback), a white card (~440–560px max-width,
12–16px radius, warm hairline border) on a warm background, the brand line in
the header, semantic colours from §5.3, and the §9 trust footer.

---

## 11. Accessibility floor (family-wide, non-negotiable)

- WCAG AA contrast minimum on every theme a product ships — aim higher outdoors.
- Status per the §6 discipline — never colour alone in effect.
- Visible focus states on every interactive element.
- ≥48px tap targets on outdoor/trail-facing screens; ≥16px inputs on touch.
- `prefers-reduced-motion` respected globally.
- Every QR flow keeps a human-typable fallback code.
- Labelled escape routes on every screen — no screen's only exit is a bare icon.

---

## 12. Decisions log and open items

**Agreed July 2026** (encoded above):

1. **UI face: Nunito Sans family-wide.** HikeCheck already complies. *Migration:*
   EventOK moves from Geist to Nunito Sans; until then Geist is a documented
   deviation.
2. **Accent strategy: one-hex-in palette-out, per product** (§5.2). Waymark
   yellow is reclassified as HikeCheck's product accent; `#F2C41D` remains the
   ScoutOS *identity* colour (§5.1).
3. **Semantic status hexes: the Events values, family-wide** (§5.3). *Migration:*
   HikeCheck moves from `#2E7D46`/`#B26A00`/`#BC3C2B` (and tints) to the family
   values; its icon+label discipline is unchanged and now mandatory for its
   surface class (§6.4).
4. **App icons: OPEN** — see below.
5. **Lockups ship as outlined vectors** (§4.2), monochrome by default with the
   two-tone treatment on dark (§4.3). *Migration:* HikeCheck's live-text
   `Logo.tsx` is replaced with an outlined lockup (keeping its two-tone dark
   colouring).
6. **This document is canonical** and lives in `stuartridout/scoutos`, the
   future scoutos.org home. Product specs describe product-level choices and
   defer to this document for constants.

**Open — app icon treatment.** Today the icons don't match: HikeCheck ships the
yellow compass+"S" on warm ink; Events ships a white compass on navy `#26336D`
(a colour outside every palette). Candidate rules:

- **A — one identical badge**: every ScoutOS app uses the same icon; apps are
  distinguished only by their name label.
- **B — shared template, product colour** *(recommended)*: identical composition
  (rounded square, centred compass glyph at fixed scale), background/glyph
  colours set per product (e.g. HikeCheck yellow-on-ink; Events white-on-purple).

Whichever is chosen, the navy Events icon is replaced.

---

*Assets in `brand/assets/` are the masters. If a product repo's copy and these
disagree, these win.*
