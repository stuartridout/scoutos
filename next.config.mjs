/** @type {import('next').NextConfig} */

// Security headers are set here (not only in staticwebapp.config.json) because
// Azure Static Web Apps does not honour staticwebapp.config.json globalHeaders
// for hybrid Next.js apps — the standalone server must set them itself. This
// mirrors the eventok / hikecheck house pattern. Google Fonts is allowed for
// style + font because the ScoutOS lockup and body face (Cal Sans, Nunito
// Sans) load from Google Fonts; there is no other external origin.
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), microphone=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Self-contained server in .next/standalone that SWA's Next adapter packages.
  output: 'standalone',
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
export default nextConfig;
