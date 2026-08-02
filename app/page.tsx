import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Compass, Wordmark } from '@/components/Brand';
import { products, developer, scoutsHelpUrl } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <Compass
            size={560}
            color="#EAE2CE"
            style={{ position: 'absolute', top: -120, right: -140, opacity: 0.7, pointerEvents: 'none' }}
          />
          <div className="container" style={{ position: 'relative', padding: '84px 24px 72px' }}>
            <span className="eyebrow">The ScoutOS family</span>
            <h1 style={{ marginTop: 16, fontSize: 'clamp(38px, 6vw, 60px)', maxWidth: 780 }}>
              Calm, trustworthy tools for the people who run Scouting.
            </h1>
            <p
              style={{
                marginTop: 22,
                maxWidth: 620,
                fontSize: 19,
                lineHeight: 1.6,
                color: 'var(--ink-2)',
              }}
            >
              ScoutOS builds equipment, not apps — for the volunteers who run real-world events for real
              people. Permissions, safety on the trail, and a fair place in the queue. Made by leaders who run
              the events themselves.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="#products" className="btn btn-primary">
                Explore the products
              </a>
              <a href="#about" className="btn btn-ghost">
                Who we are
              </a>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" style={{ padding: '24px 0 72px' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 34px)' }}>Three tools, one family</h2>
            <p style={{ marginTop: 12, maxWidth: 600, fontSize: 16.5, color: 'var(--ink-2)' }}>
              Each product does one job well and shares the same discipline: safety states you can’t miss,
              plain words, and data that stays in the UK.
            </p>

            <div
              style={{
                marginTop: 36,
                display: 'grid',
                gap: 20,
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              }}
            >
              {products.map((p) => (
                <article
                  key={p.key}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--surface)',
                    border: '1px solid var(--hairline)',
                    borderRadius: 'var(--radius)',
                    padding: 28,
                    boxShadow: '0 1px 0 rgba(0,0,0,.03)',
                  }}
                >
                  <Wordmark product={p.shortName} size={21} />
                  <p
                    style={{
                      marginTop: 18,
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      lineHeight: 1.2,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {p.promise}
                  </p>
                  <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', flexGrow: 1 }}>
                    {p.description}
                  </p>
                  <a
                    href={p.url}
                    style={{
                      marginTop: 22,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      alignSelf: 'flex-start',
                      fontWeight: 700,
                      fontSize: 15,
                      textDecoration: 'none',
                      color: 'var(--ink)',
                      borderBottom: '2px solid var(--yellow)',
                      paddingBottom: 2,
                    }}
                  >
                    Visit {p.shortName}
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About / who we are — council only */}
        <section id="about" style={{ background: 'var(--dark)', color: 'var(--paper)' }}>
          <div
            className="container"
            style={{ padding: '76px 24px', display: 'grid', gap: 48, gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', alignItems: 'center' }}
          >
            <div>
              <span className="eyebrow" style={{ color: 'var(--yellow)' }}>
                Who we are
              </span>
              <h2 style={{ marginTop: 16, color: 'var(--paper)', fontSize: 'clamp(26px, 4vw, 36px)' }}>
                Built by volunteers, for volunteers.
              </h2>
              <div style={{ marginTop: 20, display: 'grid', gap: 16, maxWidth: 620, fontSize: 16.5, lineHeight: 1.65, color: '#d7d1c4' }}>
                <p>
                  ScoutOS is developed by <strong style={{ color: 'var(--paper)' }}>{developer.name}</strong> — a
                  volunteer-led charity that runs Scouting across Milton Keynes. Everything here started as a
                  problem a leader hit on a real event: a pile of paper permission slips, a headcount that
                  didn’t add up, a waiting list nobody could keep straight.
                </p>
                <p>
                  So we build the tools we wished we had, and share them with the movement. There’s no growth
                  team and no venture backing — just leaders who care that a young person’s data is handled
                  properly and that everyone comes home safely.
                </p>
                <p>
                  That’s why every ScoutOS product follows the same rules: safety states you can’t miss, plain
                  British English, generous tap targets for cold hands and bright sun, and data that stays in
                  the UK and is never sold.
                </p>
              </div>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
              {[
                ['Not-for-profit', 'Made for the movement, not for shareholders.'],
                ['Safety first', 'Permission and safety states are always unmissable — colour is never the only signal.'],
                ['UK data', 'Your data stays in the UK and is never sold or shared outside agreed channels.'],
                ['Built in the field', 'Designed by leaders who run the camps, hikes and club nights themselves.'],
              ].map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: 'var(--dark-surface)',
                    border: '1px solid var(--dark-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px 18px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--paper)' }}>{title}</div>
                  <div style={{ marginTop: 4, fontSize: 14.5, lineHeight: 1.55, color: '#b8b1a1' }}>{body}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Support signpost */}
        <section style={{ padding: '72px 0' }}>
          <div
            className="container"
            style={{
              background: 'var(--yellow-tint)',
              border: '1px solid var(--yellow-soft)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(32px, 5vw, 56px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 28,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 30px)' }}>Need a hand?</h2>
              <p style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                Help with a specific product lives on that product’s own site. For anything about Scouting
                itself — membership, safeguarding, running your section — the official Scouts UK help is the
                place to go. We’ll point you the right way.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="/support" className="btn btn-primary">
                Get support
              </a>
              <a href={scoutsHelpUrl} className="btn btn-ghost">
                Scouts UK help
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
