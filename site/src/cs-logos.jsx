import React from 'react'
// Logo wall variants — preview-only.
// Mounted at ?p=logos-preview so we can compare two layouts before picking
// one to wire into the live homepage.

const CSLOGOS = (() => {
  const { RD_INK, RD_CREAM, SpeechBadge, BurstBadge } = window;

  // Source of truth: the 13 real clients.
  // `file` is the asset path under /assets/clients/; if missing we render a
  // wordmark fallback so the section never looks broken.
  // `sector` drives Variant B grouping.
  const CLIENTS = [
    { name: 'BBC',                                short: 'BBC',               file: '/assets/clients/bbc.svg',                       sector: 'Broadcast',         note: 'Footage used by' },
    { name: 'ITN',                                short: 'ITN',               file: '/assets/clients/itn.svg',                       sector: 'Broadcast',         note: 'Footage used by' },
    { name: 'Wokingham Borough Council',          short: 'Wokingham BC',      file: '/assets/clients/wokingham-bc.svg',              sector: 'Public sector' },
    { name: 'University of Reading',              short: 'Reading Uni',       file: '/assets/clients/university-of-reading.svg',     sector: 'Public sector' },
    { name: 'Reading Football Club',              short: 'Reading FC',        file: '/assets/clients/reading-fc.svg',                sector: 'Sport' },
    { name: 'Bellway',                            short: 'Bellway',           file: '/assets/clients/bellway.svg',                   sector: 'Property' },
    { name: 'Savills Estate Agents',              short: 'Savills',           file: '/assets/clients/savills.svg',                   sector: 'Property' },
    { name: 'Avocado Property',                   short: 'Avocado',           file: '/assets/clients/avocado-property.jpg',          sector: 'Property' },
    { name: 'Inara Home Imagery',                 short: 'Inara',             file: '/assets/clients/inara-home-imagery.jpg',        sector: 'Property' },
    { name: 'Wall 2 Wall Construction',           short: 'Wall 2 Wall',       file: '/assets/clients/wall-2-wall-construction.png',  sector: 'Construction' },
    { name: 'Associated Asphalt',                 short: 'Assoc. Asphalt',    file: '/assets/clients/associated-asphalt.svg',        sector: 'Construction',     bg: RD_INK },
    { name: 'The Emmbrook School',                short: 'Emmbrook',          file: '/assets/clients/emmbrook-school.svg',           sector: 'Education & faith', bg: RD_INK },
    { name: "Shinfield St Mary's Junior School",  short: 'St Mary\u2019s',    file: '/assets/clients/shinfield-st-marys.jpg',        sector: 'Education & faith' },
    { name: 'Shinfield Baptist Church',           short: 'Shinfield Baptist', file: '/assets/clients/shinfield-baptist-church.png',  sector: 'Education & faith' },
  ];

  // Tile renderer — tries the logo file, falls back to a wordmark if missing.
  function LogoTile({ c, showCaption = true, height = 84 }) {
    const [broken, setBroken] = React.useState(false);
    // Some logos are white-on-transparent; honour a per-client background override.
    const tileBg = c.bg || '#fff';
    const captionLight = tileBg !== '#fff';
    return (
      <div className="rd-logo-tile" style={{
        background: tileBg,
        border: `3px solid ${RD_INK}`,
        borderRadius: 10,
        boxShadow: `5px 5px 0 ${RD_INK}`,
        padding: '18px 14px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 10, minHeight: height + 50,
      }}>
        <div className="rd-logo-mark" style={{
          height, width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {broken ? (
            <div style={{
              fontFamily: '"Archivo Black", sans-serif',
              fontSize: c.short.length > 12 ? 16 : 22,
              textTransform: 'uppercase',
              textAlign: 'center',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: captionLight ? RD_CREAM : RD_INK,
            }}>{c.short}</div>
          ) : (
            <img
              src={c.file}
              alt={c.name}
              loading="lazy"
              onError={() => setBroken(true)}
              style={{ display: 'block', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', margin: '0 auto' }}
            />
          )}
        </div>
        {showCaption && (
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: captionLight ? RD_CREAM : RD_INK,
            opacity: captionLight ? 0.75 : 0.6,
            textAlign: 'center',
          }}>{c.note ? `${c.note} \u00b7 ` : ''}{c.name}</div>
        )}
      </div>
    );
  }

  // Variant A — alphabetical, captions visible
  function LogoWallA() {
    const items = [...CLIENTS].sort((a, b) => a.short.localeCompare(b.short));
    return (
      <section style={{ background: RD_CREAM, padding: '64px 48px', borderTop: `4px solid ${RD_INK}`, borderBottom: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <SpeechBadge size={12} color="var(--rd-primary)" rotate={-2}>★ Real clients ★</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 38, margin: '14px 0 6px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Some of the people we've flown for.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK, opacity: 0.7, margin: 0 }}>
              Broadcast, councils, housebuilders, schools, sport, agents.
            </p>
          </div>
          <div className="rd-logowall-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 18,
          }}>
            {items.map((c) => <LogoTile key={c.name} c={c} showCaption />)}
            {/* fill the trailing 2 cells (13 items in a 5-col grid) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BurstBadge size={120} rotate={-6}>8+ years</BurstBadge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SpeechBadge size={14} color="var(--rd-accent)" rotate={4}>● Berkshire &amp; beyond</SpeechBadge>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant B — sector-grouped, captions hidden (logo-only rows)
  function LogoWallB() {
    const SECTOR_ORDER = ['Broadcast', 'Public sector', 'Sport', 'Property', 'Construction', 'Education & faith'];
    const grouped = SECTOR_ORDER
      .map(s => ({ s, items: CLIENTS.filter(c => c.sector === s) }))
      .filter(g => g.items.length);
    return (
      <section style={{ background: RD_CREAM, padding: '64px 48px', borderTop: `4px solid ${RD_INK}`, borderBottom: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <SpeechBadge size={12} color="var(--rd-accent)" rotate={-2}>★ Real clients ★</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 38, margin: '14px 0 6px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Some of the people we've flown for.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK, opacity: 0.7, margin: 0 }}>
              Grouped by sector. Logo only \u2014 names listed under each row.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {grouped.map(({ s, items }) => (
              <div key={s}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{
                    fontFamily: '"Archivo Black", sans-serif', fontSize: 13,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: RD_INK, background: 'var(--rd-primary)',
                    border: `2.5px solid ${RD_INK}`, borderRadius: 6,
                    padding: '4px 10px', boxShadow: `2px 2px 0 ${RD_INK}`,
                  }}>{s}</div>
                  <div style={{ flex: 1, height: 2, background: `${RD_INK}33` }} />
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, opacity: 0.55 }}>
                    {items.length} client{items.length === 1 ? '' : 's'}
                  </div>
                </div>
                <div className="rd-logowall-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.min(5, items.length)}, 1fr)`,
                  gap: 16,
                }}>
                  {items.map((c) => <LogoTile key={c.name} c={c} showCaption={false} height={70} />)}
                </div>
                <div style={{
                  marginTop: 8,
                  fontFamily: 'Inter, sans-serif', fontSize: 12,
                  color: RD_INK, opacity: 0.55,
                  textAlign: 'center',
                }}>
                  {items.map(c => c.name).join('  \u00b7  ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Side-by-side preview page (route ?p=logos-preview)
  function LogosPreviewPage() {
    const banner = (label, sub) => (
      <div style={{ background: RD_INK, color: RD_CREAM, padding: '24px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 28, textTransform: 'uppercase', color: 'var(--rd-primary)' }}>{label}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, opacity: 0.8 }}>{sub}</div>
        </div>
      </div>
    );
    return (
      <div>
        <section style={{ background: 'var(--rd-primary)', padding: '48px 48px', borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <SpeechBadge size={12} color={RD_CREAM} rotate={-3}>● Preview</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '14px 0 6px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Logo wall mockups.
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: RD_INK, opacity: 0.85, margin: 0, maxWidth: 720 }}>
              Both variants render with wordmark fallbacks until real SVGs are dropped into <code>/assets/clients/</code>. Pick the one you prefer and I'll swap it into the homepage.
            </p>
          </div>
        </section>

        {banner('Variant A', 'Alphabetical \u00b7 captions on \u00b7 real client colours')}
        <LogoWallA />

        {banner('Variant B', 'Grouped by sector \u00b7 captions off \u00b7 names listed under each row')}
        <LogoWallB />
      </div>
    );
  }

  return { CLIENTS, LogoTile, LogoWallA, LogoWallB, LogosPreviewPage };
})();

window.CSLOGOS = CSLOGOS;
