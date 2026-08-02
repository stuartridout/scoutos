/** @type {import('next').NextConfig} */

// Static export for GitHub Pages. The site has no server APIs, auth or dynamic
// routes, so `next build` emits a fully static `out/` directory that Pages
// serves as-is. Served from the custom domain scoutos.org (see public/CNAME),
// so no basePath/assetPrefix is needed — links stay root-relative.
//
// Note: security headers can't be set here under `output: 'export'` (Pages
// serves static files and honours no server headers). A best-effort CSP is set
// via a <meta> tag in app/layout.tsx instead; frame protection would need a
// host that sets X-Frame-Options / frame-ancestors, which Pages does not.
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Emit `out/<route>/index.html` so Pages serves clean `/support/` URLs.
  trailingSlash: true,
  // No server image optimisation under static export.
  images: { unoptimized: true },
};
export default nextConfig;
