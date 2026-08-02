// ScoutOS parent-site design tokens.
//
// These encode the family masterbrand (see brand/scoutos-masterbrand.md, §5
// Colour and §7 Typography). The parent site's identity colour is ScoutOS
// yellow #F2C41D; primary actions render as ink-on-yellow, which clears WCAG
// AA comfortably (yellow can never carry text on its own on a light surface).
// Green/red are reserved for safety-critical status and are unused on this
// marketing site — kept here as family constants for parity.

export const tokens = {
  // Surfaces & ink (warm — never pure white pages, never cool grey)
  paper: '#F4F1E9', // page background (warm paper)
  surface: '#FFFFFF', // card background
  surface2: '#EFEBDD', // tinted / sunken card
  ink: '#0D0B08', // primary text (warm near-black)
  ink2: '#423D33', // body text
  muted: '#7D7367', // meta / hints
  hairline: '#E3DDCF', // dividers
  hairlineStrong: '#C8BEA9', // input borders / strong dividers

  // Dark section (trust band, footer, two-tone lockup surface)
  dark: '#14120D', // warm near-black section background
  darkSurface: '#1F1C15',
  darkHairline: '#322D22',

  // ScoutOS identity colour (family constant, §5.1)
  yellow: '#F2C41D',
  yellowDeep: '#D3A70F', // pressed / hover
  yellowSoft: '#FBEFC4', // soft tint
  yellowTint: '#FDF8E6', // paler still — wash

  // Semantic status palette (family constants, §5.3 — reserved, not decorative)
  ok: '#1F8A5B',
  okSoft: '#D8EFE2',
  no: '#B53326',
  noSoft: '#F6DAD6',
  amber: '#B16A1F',
} as const;

// The type faces, per masterbrand §7. Cal Sans for display + lockups; Nunito
// Sans for UI/body. Both are loaded from Google Fonts in app/layout.tsx.
export const fonts = {
  display: "'Cal Sans', 'Nunito Sans', ui-sans-serif, system-ui, sans-serif",
  body: "'Nunito Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
} as const;
