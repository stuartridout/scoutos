import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://scoutos.org'),
  title: {
    default: 'ScoutOS — calm, trustworthy tools for volunteers',
    template: '%s · ScoutOS',
  },
  description:
    'ScoutOS builds calm, trustworthy tools for the volunteers who run real-world events — permissions, safety and waiting lists. Developed by Milton Keynes District Scout Council.',
  applicationName: 'ScoutOS',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ScoutOS — calm, trustworthy tools for volunteers',
    description:
      'Permissions, safety and waiting lists for the people who run Scouting. Developed by Milton Keynes District Scout Council.',
    url: 'https://scoutos.org',
    siteName: 'ScoutOS',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        {/* Fonts per masterbrand §7: Cal Sans (display + lockups) and Nunito
            Sans (UI/body). Loaded from Google Fonts (the only external origin;
            allowed in the CSP). display=swap so warm fallbacks show first. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Nunito+Sans:opsz,wght@6..12,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
