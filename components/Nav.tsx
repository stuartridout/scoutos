import Link from 'next/link';
import { Wordmark } from '@/components/Brand';

// Sticky top nav. Warm paper, blurred backdrop, hairline underline. The
// wordmark always links home; the last item is the primary action.
export function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(244, 241, 233, 0.82)',
        backdropFilter: 'saturate(140%) blur(10px)',
        WebkitBackdropFilter: 'saturate(140%) blur(10px)',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}
      >
        <Link href="/" aria-label="ScoutOS home" style={{ display: 'inline-flex', textDecoration: 'none' }}>
          <Wordmark size={22} />
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link
            href="/#products"
            style={{ padding: '8px 12px', textDecoration: 'none', fontWeight: 600, fontSize: 15, color: 'var(--ink-2)' }}
          >
            Products
          </Link>
          <Link
            href="/#about"
            style={{ padding: '8px 12px', textDecoration: 'none', fontWeight: 600, fontSize: 15, color: 'var(--ink-2)' }}
          >
            About
          </Link>
          <Link href="/support" className="btn btn-ghost" style={{ padding: '9px 16px', fontSize: 14 }}>
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
