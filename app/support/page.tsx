import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { products, scoutsHelpUrl, developer, supportEmail } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'How to get help with ScoutOS. Product questions go to each product’s own help and FAQs; anything about Scouting itself goes to the official Scouts UK help.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: '64px 0 8px' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <span className="eyebrow">Support</span>
            <h1 style={{ marginTop: 16, fontSize: 'clamp(32px, 5vw, 46px)' }}>Getting help</h1>
            <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640 }}>
              Where you go depends on what you need. Questions about one of our tools live on that tool’s own
              site. Anything about Scouting itself — membership, safeguarding, running your section — is best
              answered by the official Scouts UK help.
            </p>
          </div>
        </section>

        {/* Path 1 — product help + FAQs */}
        <section style={{ padding: '40px 0' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)' }}>Help with a ScoutOS product</h2>
            <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 620 }}>
              Each product keeps its own help pages and FAQs — the fastest answer is usually there. Pick the
              one you’re using:
            </p>

            <div style={{ marginTop: 26, display: 'grid', gap: 14 }}>
              {products.map((p) => (
                <a
                  key={p.key}
                  href={p.supportUrl}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    background: 'var(--surface)',
                    border: '1px solid var(--hairline)',
                    borderRadius: 'var(--radius)',
                    padding: '20px 24px',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                  }}
                >
                  <span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 19 }}>{p.name}</span>
                    <span style={{ display: 'block', marginTop: 4, fontSize: 14.5, color: 'var(--muted)' }}>
                      Help &amp; FAQs for {p.shortName}
                    </span>
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      whiteSpace: 'nowrap',
                      borderBottom: '2px solid var(--yellow)',
                      paddingBottom: 2,
                    }}
                  >
                    Open help <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Path 2 — Scouts UK help */}
        <section style={{ padding: '20px 0 56px' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div
              style={{
                background: 'var(--dark)',
                color: 'var(--paper)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(28px, 4vw, 44px)',
              }}
            >
              <span className="eyebrow" style={{ color: 'var(--yellow)' }}>
                Help with Scouting itself
              </span>
              <h2 style={{ marginTop: 14, color: 'var(--paper)', fontSize: 'clamp(22px, 3.5vw, 30px)', maxWidth: 620 }}>
                For anything beyond our tools, go to the official Scouts UK help.
              </h2>
              <p style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.6, color: '#d7d1c4', maxWidth: 620 }}>
                Membership, safeguarding and safety, badges and programme, first response, or getting in touch
                with your District or County — The Scout Association keeps the definitive guidance. ScoutOS is a
                set of tools; it isn’t a substitute for that.
              </p>
              <a href={scoutsHelpUrl} className="btn btn-on-dark" style={{ marginTop: 24 }}>
                Go to Scouts UK help <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Still stuck — contact ScoutOS */}
        <section style={{ padding: '0 0 72px' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div
              style={{
                border: '1px solid var(--hairline)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(24px, 4vw, 36px)',
                background: 'var(--surface-2)',
              }}
            >
              <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)' }}>Still stuck?</h2>
              <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 620 }}>
                If your question is about ScoutOS as a whole — rather than one product — email us and a
                volunteer will get back to you. We’re {developer.name}; please bear with us, we run this
                alongside everything else Scouting asks of us.
              </p>
              <a
                href={`mailto:${supportEmail}`}
                style={{
                  marginTop: 18,
                  display: 'inline-block',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: 'none',
                  color: 'var(--ink)',
                  borderBottom: '2px solid var(--yellow)',
                  paddingBottom: 2,
                }}
              >
                {supportEmail}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
