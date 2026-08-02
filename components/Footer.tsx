import Link from 'next/link';
import { Wordmark } from '@/components/Brand';
import { products, scoutsHelpUrl, developer } from '@/lib/products';

// Dark footer. Two-tone wordmark (the family's premium dark treatment),
// product + help links, the developing body, and the UK-data trust line (§9).
export function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: 'var(--paper)' }}>
      <div className="container" style={{ padding: '56px 24px 40px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ maxWidth: 320 }}>
            <Wordmark size={24} tone="two-tone" />
            <p style={{ marginTop: 14, color: '#b8b1a1', fontSize: 14.5, lineHeight: 1.6 }}>
              Calm, trustworthy tools for the volunteers who run real-world events.
            </p>
          </div>

          <nav aria-label="Products" style={{ display: 'grid', gap: 10 }}>
            <span className="eyebrow" style={{ color: '#8f887a' }}>
              Products
            </span>
            {products.map((p) => (
              <a
                key={p.key}
                href={p.url}
                style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}
              >
                {p.shortName}
              </a>
            ))}
          </nav>

          <nav aria-label="Help" style={{ display: 'grid', gap: 10 }}>
            <span className="eyebrow" style={{ color: '#8f887a' }}>
              Help
            </span>
            <Link href="/support" style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
              Support
            </Link>
            <a
              href={scoutsHelpUrl}
              style={{ color: 'var(--paper)', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}
            >
              Scouts UK help
            </a>
          </nav>
        </div>

        <div
          style={{
            marginTop: 44,
            paddingTop: 24,
            borderTop: '1px solid var(--dark-hairline)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#8f887a',
            fontSize: 13.5,
          }}
        >
          <span>
            Developed by {developer.name}. Your data stays in the UK.
          </span>
          <span>© {new Date().getFullYear()} ScoutOS</span>
        </div>
      </div>
    </footer>
  );
}
