import React from 'react'
// Comic Studio — Portfolio (categories + filterable grid) + 2 case studies + Pricing page

const CSPAGES2 = (() => {
  const { RD_INK, RD_CREAM, RD_PAPER, Icn, ICONS, SpeechBadge, BurstBadge, CCBButton, AerialPlaceholder, HALFTONE } = window;

  // Real photos we have
  const STONEHENGE = '/assets/photos/stonehenge-web.jpg';
  const SPIRAL = '/assets/photos/spiral-night-web.jpg';

  const PROJECTS = [
    { id: 'stonehenge', cat: 'aerial', t: 'Stonehenge — Solstice Series', sub: 'Editorial · Stills + 4K Video', y: '2026', img: STONEHENGE,
      excerpt: 'Pre-dawn flight permissions, golden-hour timing and a tight 90-minute window over a UNESCO site.', tone: 'fields' },
    { id: 'spiral', cat: 'industrial', t: 'Reading Multi-Storey', sub: 'Architectural · Night Series', y: '2025', img: SPIRAL,
      excerpt: 'A nocturnal study of a brutalist car-park spiral. Two hours, lights at full lume, four delivered hero shots.', tone: 'rooftop' },
    { id: 'caversham', cat: 'property', t: 'Caversham Manor', sub: 'Estate Agent · Stills', y: '2026', tone: 'estate', img: '/assets/photos/traitors-castle.jpg',
      excerpt: 'Five hero stills for a high-end private listing. Same-week turnaround.' },
    { id: 'riverside', cat: 'fpv', t: 'Riverside Hotel', sub: 'FPV Cinematic Tour', y: '2026', tone: 'venue', img: '/assets/photos/blackpool-tower-night.jpg',
      excerpt: 'A single-take FPV walkthrough — from car park to riverside terrace — for the hotel\'s relaunch reel.' },
    { id: 'redingside', cat: 'construction', t: 'Reading West Phase 3', sub: 'Construction · 12-month progress', y: '2025', tone: 'site', img: '/assets/photos/construction-steel-frame.jpg',
      excerpt: 'Monthly aerial captures stitched into a one-minute timelapse for the developer\'s investor pack.' },
    { id: 'wokingham', cat: 'inspection', t: 'Wokingham House', sub: 'Roof + chimney inspection', y: '2025', tone: 'rooftop', img: '/assets/photos/roof-inspection.jpg',
      excerpt: 'High-resolution photo report — 32 annotated images, delivered as PDF the same day.' },
    { id: 'sonning', cat: 'aerial', t: 'Sonning Estate Aerials', sub: 'Editorial · Brochure', y: '2025', tone: 'fields', img: '/assets/photos/town-aerial-golden-hour.jpg',
      excerpt: 'Wide-format estate aerials shot in three sessions across spring, summer and autumn light.' },
    { id: 'bracknell', cat: 'event', t: 'Bracknell FC Match-day', sub: 'Sports · Highlights reel', y: '2024', tone: 'sport', img: '/assets/photos/football-match-aerial.jpg',
      excerpt: 'CAA-cleared low-altitude crowd shots and aerial coverage of the Bracknell vs Maidenhead derby.' },
    { id: 'reading-uni', cat: 'event', t: 'University Open Day', sub: 'Events · Day-of-edit', y: '2024', tone: 'venue', img: '/assets/photos/shinfield-sports-complex.jpg',
      excerpt: 'Same-day edit of the Reading University open day — raw to delivered in eight hours.' },
    { id: 'm4-resurfacing', cat: 'construction', t: 'M4 Night Resurfacing', sub: 'Infrastructure · Night Series', y: '2025', tone: 'site', img: '/assets/photos/m4-resurfacing-night.jpg',
      excerpt: 'Atmospheric night-shoot for highway maintenance contractors. CAA-cleared low-altitude work alongside live plant.' },
    { id: 'london-skyline', cat: 'aerial', t: 'London — Tower Bridge', sub: 'Editorial · Cityscape', y: '2024', tone: 'night', img: '/assets/photos/london-tower-bridge.jpg',
      excerpt: 'Tower Bridge and the Shard from above the Thames at twilight. Single hand-held flight, blue-hour timing.' },
    { id: 'manchester-skyline', cat: 'aerial', t: 'Manchester — Night Aerial', sub: 'Editorial · Cityscape', y: '2024', tone: 'night', img: '/assets/photos/manchester-night-aerial.jpg',
      excerpt: 'Long-exposure night cityscape over central Manchester for a property developer\'s investor brochure.' },
  ];

  const CATS = [
    { k: 'all', l: 'All Work' },
    { k: 'aerial', l: 'Aerial Photography' },
    { k: 'fpv', l: 'FPV Tours' },
    { k: 'property', l: 'Property' },
    { k: 'construction', l: 'Construction' },
    { k: 'inspection', l: 'Inspections' },
    { k: 'industrial', l: 'Industrial' },
    { k: 'event', l: 'Events' },
  ];

  function ProjectCard({ p, i, onOpen }) {
    return (
      <div onClick={() => onOpen(p.id)} style={{
        background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 14,
        overflow: 'hidden', boxShadow: `8px 8px 0 ${RD_INK}`, cursor: 'pointer',
        transform: `rotate(${(i % 2 === 0 ? -0.5 : 0.5)}deg)`,
        transition: 'transform .2s ease, box-shadow .2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px) rotate(0deg)'; e.currentTarget.style.boxShadow = `12px 14px 0 ${RD_INK}`; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${(i % 2 === 0 ? -0.5 : 0.5)}deg)`; e.currentTarget.style.boxShadow = `8px 8px 0 ${RD_INK}`; }}
      >
        <div style={{ aspectRatio: '4/3', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          {p.img ? (
            <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <AerialPlaceholder tone={p.tone} label={p.t} />
          )}
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <SpeechBadge size={10} color="var(--rd-primary)" rotate={-3}>{(CATS.find(c => c.k === p.cat) || {}).l || p.cat}</SpeechBadge>
          </div>
          <div style={{ position: 'absolute', top: 12, right: 12, background: RD_CREAM, color: RD_INK, padding: '4px 8px', border: `2px solid ${RD_INK}`, borderRadius: 4, fontFamily: '"Archivo Black", sans-serif', fontSize: 10, letterSpacing: '0.08em' }}>{p.y}</div>
        </div>
        <div style={{ padding: '18px 20px 20px' }}>
          <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 20, margin: 0, textTransform: 'uppercase', lineHeight: 1.05 }}>{p.t}</h3>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: RD_INK, opacity: 0.65, marginTop: 4 }}>{p.sub}</div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: RD_INK, opacity: 0.82, margin: '12px 0 0' }}>{p.excerpt}</p>
          {(p.id === 'stonehenge' || p.id === 'spiral') && (
            <div style={{ marginTop: 14, fontFamily: '"Archivo Black", sans-serif', fontSize: 11, color: 'var(--rd-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 6 }}>
              Read case study <Icn d={ICONS.arrow} size={13} sw={2.5} />
            </div>
          )}
        </div>
      </div>
    );
  }

  function PortfolioPage({ go }) {
    const [cat, setCat] = React.useState('all');
    const filtered = cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);

    return (
      <div>
        {/* Hero */}
        <section style={{ background: 'var(--rd-primary)', padding: '72px 48px 56px', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.1 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'end' }}>
            <div>
              <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Selected work · 2024–2026</SpeechBadge>
              <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '-0.01em' }}>
                Recent<br/>
                <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>adventures.</span>
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.55, color: RD_INK, margin: 0, maxWidth: 380, background: RD_CREAM, padding: 18, border: `3px solid ${RD_INK}`, borderRadius: 8, boxShadow: `5px 5px 0 ${RD_INK}` }}>
              Nine of the projects we've enjoyed most. Filter by category, or hit a thumbnail with a <strong>"Read case study"</strong> tag for the full story.
            </p>
          </div>
        </section>

        {/* Filter chips */}
        <section style={{ background: RD_CREAM, padding: '28px 48px', borderBottom: `2px solid ${RD_INK}22`, position: 'sticky', top: 0, zIndex: 5 }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {CATS.map((c) => {
              const on = c.k === cat;
              return (
                <button key={c.k} onClick={() => setCat(c.k)} style={{
                  fontFamily: '"Archivo Black", sans-serif', fontSize: 12,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  padding: '10px 16px',
                  background: on ? 'var(--rd-accent)' : RD_PAPER,
                  color: RD_INK,
                  border: `2.5px solid ${RD_INK}`, borderRadius: 999,
                  boxShadow: on ? `3px 3px 0 ${RD_INK}` : `2px 2px 0 ${RD_INK}55`,
                  cursor: 'pointer',
                  transform: on ? 'translateY(-1px)' : 'none',
                  transition: 'all .15s ease',
                }}>{c.l}</button>
              );
            })}
            <div style={{ marginLeft: 'auto', fontFamily: 'Inter, sans-serif', fontSize: 13, color: RD_INK, opacity: 0.6, alignSelf: 'center' }}>
              Showing <strong>{filtered.length}</strong> of {PROJECTS.length}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{ background: RD_CREAM, padding: '48px 48px 80px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {filtered.map((p, i) => <ProjectCard key={p.id} p={p} i={i} onOpen={(id) => go(`case:${id}`)} />)}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: RD_INK, color: RD_CREAM, padding: '64px 48px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 48, margin: 0, textTransform: 'uppercase' }}>
            Want yours <span style={{ color: 'var(--rd-primary)' }}>on this page?</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, opacity: 0.85, margin: '16px auto 24px', maxWidth: 460 }}>Pitch us your project. Most jobs start with a quick call.</p>
          <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
            <CCBButton primary size={15}>Get a Quote <Icn d={ICONS.arrow} size={17} /></CCBButton>
          </span>
        </section>
      </div>
    );
  }

  // ── Case studies (two real ones)
  function CaseStudyPage({ go, id }) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) {
      return (
        <section style={{ padding: 80, textAlign: 'center' }}>
          <h1 style={{ fontFamily: '"Archivo Black", sans-serif' }}>Case study not found.</h1>
          <span onClick={() => go('portfolio')} style={{ display: 'inline-block' }}><CCBButton primary>Back to Portfolio</CCBButton></span>
        </section>
      );
    }

    // Stonehenge case study
    if (id === 'stonehenge') {
      return (
        <div>
          <section style={{ position: 'relative', height: 620, overflow: 'hidden', background: RD_INK }}>
            <img src={STONEHENGE} alt="Stonehenge aerial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${RD_INK}22 0%, ${RD_INK}cc 100%)` }}></div>
            <div style={{ position: 'absolute', left: 48, bottom: 64, right: 48, color: RD_CREAM, maxWidth: 1300, margin: '0 auto' }}>
              <div onClick={() => go('portfolio')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: '"Archivo Black", sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', opacity: 0.85 }}>
                <Icn d="M19 12H5 M11 6l-6 6 6 6" size={14} sw={2.6}/> Back to portfolio
              </div>
              <SpeechBadge size={13} color="var(--rd-primary)" rotate={-3}>● Case Study · 01</SpeechBadge>
              <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '-0.01em' }}>
                Stonehenge<br/>
                <span style={{ color: 'var(--rd-primary)' }}>Solstice Series.</span>
              </h1>
            </div>
          </section>

          {/* Meta strip */}
          <section style={{ background: 'var(--rd-primary)', padding: '24px 48px', borderBottom: `4px solid ${RD_INK}` }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {[['Client', 'English Heritage'], ['Year', '2026'], ['Deliverables', '12 stills · 3-min film'], ['Permissions', 'Special Operations Authorisation']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 11, color: RD_INK, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{k}</div>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 16, color: RD_INK, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Body — brief / approach / outcome */}
          <section style={{ background: RD_CREAM, padding: '80px 48px' }}>
            <div style={{ maxWidth: 980, margin: '0 auto' }}>
              <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 36, margin: '0 0 18px', textTransform: 'uppercase' }}>The brief.</h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.7, color: RD_INK, opacity: 0.88 }}>
                Capture Stonehenge from the air during the week of the summer solstice — for editorial use across English Heritage's 2026 print catalogue and online channels. The window: 90 minutes either side of sunrise, three consecutive mornings, weather permitting.
              </p>
            </div>
          </section>

          {/* Big image */}
          <section style={{ padding: '0 48px 80px', background: RD_CREAM }}>
            <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', aspectRatio: '16/9', border: `4px solid ${RD_INK}`, borderRadius: 16, overflow: 'hidden', boxShadow: `12px 12px 0 var(--rd-accent)` }}>
              <img src={STONEHENGE} alt="Stonehenge wide aerial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </section>

          {/* Approach */}
          <section style={{ background: RD_PAPER, padding: '80px 48px', borderTop: `2px solid ${RD_INK}22`, borderBottom: `2px solid ${RD_INK}22` }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 36, margin: '0 0 18px', textTransform: 'uppercase' }}>The <span style={{ color: 'var(--rd-accent)' }}>approach.</span></h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: RD_INK, opacity: 0.88 }}>
                  Stonehenge sits in restricted airspace. Six weeks of pre-flight: a Special Operations Authorisation from the CAA, written permission from English Heritage, a NOTAM, and a same-day site survey with the heritage warden.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: RD_INK, opacity: 0.88, marginTop: 18 }}>
                  On the day, we flew the Mavic 4 Pro to capture the long shadow lines that fan out from the henge in low sun — the bit that you can't see from the ground.
                </p>
              </div>
              <div>
                <div style={{ background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 14, padding: 28, boxShadow: `8px 8px 0 ${RD_INK}` }}>
                  <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 22, margin: '0 0 16px', textTransform: 'uppercase' }}>What we shot</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      ['Twelve high-resolution stills', 'RAW + JPEG, multiple altitudes'],
                      ['One three-minute film', '4K, 60fps, with colour grade'],
                      ['Aerial site map', 'Geo-referenced overlay'],
                      ['Time-lapse', 'Sunrise across the henge'],
                    ].map(([t, sub]) => (
                      <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--rd-primary)', border: `2.5px solid ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icn d={ICONS.check} size={14} sw={2.8} />
                        </div>
                        <div>
                          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15, color: RD_INK, textTransform: 'uppercase' }}>{t}</div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: RD_INK, opacity: 0.7, marginTop: 2 }}>{sub}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quote */}
          <section style={{ background: RD_CREAM, padding: '80px 48px', position: 'relative' }}>
            <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', left: -12, top: -36 }}><BurstBadge size={100} rotate={-12}>★</BurstBadge></div>
              <p style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 36, lineHeight: 1.2, margin: 0, color: RD_INK, textTransform: 'uppercase' }}>
                "Honestly the best aerial coverage we've had — they sweated the small stuff and delivered ahead of schedule."
              </p>
              <div style={{ marginTop: 24, fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK, opacity: 0.7 }}>
                <strong>Editorial Director</strong> · English Heritage
              </div>
            </div>
          </section>

          {/* Next CTA */}
          <section style={{ background: RD_INK, color: RD_CREAM, padding: '64px 48px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 48, margin: 0, textTransform: 'uppercase' }}>Got a heritage site?</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, opacity: 0.85, margin: '16px auto 24px', maxWidth: 460 }}>We're CAA-licensed for restricted airspace and happy to scope the permissions side too.</p>
            <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
              <CCBButton primary size={15}>Start a Conversation <Icn d={ICONS.arrow} size={17} /></CCBButton>
            </span>
          </section>
        </div>
      );
    }

    // Spiral case study
    if (id === 'spiral') {
      return (
        <div>
          <section style={{ position: 'relative', height: 620, overflow: 'hidden', background: RD_INK }}>
            <img src={SPIRAL} alt="Reading multi-storey at night" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${RD_INK}22 0%, ${RD_INK}cc 100%)` }}></div>
            <div style={{ position: 'absolute', left: 48, bottom: 64, right: 48, color: RD_CREAM, maxWidth: 1300, margin: '0 auto' }}>
              <div onClick={() => go('portfolio')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: '"Archivo Black", sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', opacity: 0.85 }}>
                <Icn d="M19 12H5 M11 6l-6 6 6 6" size={14} sw={2.6}/> Back to portfolio
              </div>
              <SpeechBadge size={13} color="var(--rd-primary)" rotate={-3}>● Case Study · 02</SpeechBadge>
              <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '-0.01em' }}>
                After Hours.<br/>
                <span style={{ color: 'var(--rd-primary)' }}>Brutalist study.</span>
              </h1>
            </div>
          </section>

          <section style={{ background: 'var(--rd-primary)', padding: '24px 48px', borderBottom: `4px solid ${RD_INK}` }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {[['Client', 'Reading Borough'], ['Year', '2025'], ['Deliverables', '4 stills · web series'], ['Permissions', 'Night Operations · A2 CofC']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 11, color: RD_INK, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{k}</div>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 16, color: RD_INK, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: RD_CREAM, padding: '80px 48px' }}>
            <div style={{ maxWidth: 980, margin: '0 auto' }}>
              <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 36, margin: '0 0 18px', textTransform: 'uppercase' }}>The brief.</h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.7, color: RD_INK, opacity: 0.88 }}>
                Reading Borough commissioned a small editorial series on the town's mid-century concrete architecture, framed as a contemporary, urban-cinematic study. The hero subject: a brutalist multi-storey car park with a perfect circular spiral.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.7, color: RD_INK, opacity: 0.88, marginTop: 18 }}>
                Shot at midnight, with the building's signature amber lights at full output, from directly above. The result: a single graphic frame that reads almost like an illustration.
              </p>
            </div>
          </section>

          <section style={{ background: RD_INK, padding: '0 48px 80px' }}>
            <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', aspectRatio: '16/9', border: `4px solid ${RD_CREAM}`, borderRadius: 16, overflow: 'hidden', boxShadow: `12px 12px 0 var(--rd-primary)` }}>
              <img src={SPIRAL} alt="Spiral car park" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </section>

          <section style={{ background: RD_PAPER, padding: '80px 48px' }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 36, margin: '0 0 18px', textTransform: 'uppercase' }}>The <span style={{ color: 'var(--rd-accent)' }}>approach.</span></h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: RD_INK, opacity: 0.88 }}>
                  Night operations need extra paperwork. We held an A2 CofC and a documented night-ops procedure; the council closed the surrounding pavements for our two-hour window.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: RD_INK, opacity: 0.88, marginTop: 18 }}>
                  Camera-wise: we shot at low ISO with the Mavic 4 Pro's 4/3" sensor, exposure-bracketed, then composited in post for clean shadow detail. Total flight time: 18 minutes.
                </p>
              </div>
              <div style={{ background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 14, padding: 28, boxShadow: `8px 8px 0 ${RD_INK}` }}>
                <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 22, margin: '0 0 16px', textTransform: 'uppercase' }}>What we shot</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    ['Four hero stills', '6K · vertical and landscape crops'],
                    ['Behind-the-scenes reel', 'For the council\'s social channels'],
                    ['Geo-coordinates', 'For the print catalogue captions'],
                  ].map(([t, sub]) => (
                    <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--rd-primary)', border: `2.5px solid ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icn d={ICONS.check} size={14} sw={2.8} />
                      </div>
                      <div>
                        <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15, color: RD_INK, textTransform: 'uppercase' }}>{t}</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: RD_INK, opacity: 0.7, marginTop: 2 }}>{sub}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section style={{ background: RD_INK, color: RD_CREAM, padding: '64px 48px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 48, margin: 0, textTransform: 'uppercase' }}>Got an after-hours brief?</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, opacity: 0.85, margin: '16px auto 24px', maxWidth: 460 }}>Night ops, restricted airspace, complex permissions — happy to scope the lot.</p>
            <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
              <CCBButton primary size={15}>Start a Conversation <Icn d={ICONS.arrow} size={17} /></CCBButton>
            </span>
          </section>
        </div>
      );
    }

    // Generic case study fallback for the placeholder projects
    return (
      <div>
        <section style={{ background: 'var(--rd-primary)', padding: '64px 48px', borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <div onClick={() => go('portfolio')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: '"Archivo Black", sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', opacity: 0.85 }}>
              <Icn d="M19 12H5 M11 6l-6 6 6 6" size={14} sw={2.6}/> Back to portfolio
            </div>
            <SpeechBadge size={13} color={RD_CREAM} rotate={-3}>● Case study</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 80, margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.9 }}>{project.t}</h1>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: RD_INK, opacity: 0.7, marginTop: 8 }}>{project.sub} · {project.y}</div>
          </div>
        </section>
        <section style={{ background: RD_CREAM, padding: '64px 48px' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.7, color: RD_INK, opacity: 0.88 }}>{project.excerpt}</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK, opacity: 0.5, marginTop: 24, fontStyle: 'italic' }}>Full case study coming soon.</p>
          </div>
        </section>
      </div>
    );
  }

  // ── Pricing page — package comparison
  function PricingPage({ go }) {
    const tiers = [
      { name: 'Single Shoot', tagline: 'For one-off jobs',
        desc: 'Property listings, single events, one location. Five edited images delivered.',
        features: ['Up to 5 edited images', '24-hour delivery', '20-mile travel free', 'Same-day rush available'],
        not: ['Video', 'Multiple locations', 'Day-rate flexibility'],
        accent: 'var(--rd-primary)' },
      { name: 'Standard', tagline: 'Most common', popular: true,
        desc: 'Photography + video, finished cut. Suitable for marketing, listings, social.',
        features: ['Up to 10 edited stills', 'One finished video edit (90s)', 'Music + colour grade', 'Two revisions', 'Travel within 30mi'],
        not: ['Multi-day production'],
        accent: 'var(--rd-accent)' },
      { name: 'Production Day', tagline: 'For the full reel',
        desc: 'A full day of shooting across multiple locations. Best value for big briefs.',
        features: ['8 hours on the ground', 'Multiple locations', 'Unlimited shots', 'All raw footage included', 'Travel & accommodation in scope', 'Two finished cuts'],
        not: [],
        accent: 'var(--rd-tint)' },
    ];

    const compareRows = [
      ['Edited stills', 'Up to 5', 'Up to 10', 'Unlimited'],
      ['Finished video', '—', '90s', 'Two cuts'],
      ['Raw footage', '—', '✓', '✓'],
      ['Locations', '1', '1–2', 'Up to 5'],
      ['Travel', '20mi free', '30mi free', 'Anywhere UK'],
      ['Revisions', '1', '2', 'Unlimited'],
      ['Turnaround', '24h', '5 days', '7–10 days'],
      ['Rush option', '✓', '✓', '✓'],
    ];

    return (
      <div>
        {/* Hero */}
        <section style={{ background: 'var(--rd-primary)', padding: '72px 48px 56px', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.1 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Three packages · Bespoke quotes welcome</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '20px 0 12px', textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '-0.01em' }}>
              Our <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>packages.</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: RD_INK, margin: '0 auto', maxWidth: 580 }}>
              Three shapes cover most jobs. Every brief gets a bespoke quote — send the details and we'll come back within a working day.
            </p>
          </div>
        </section>

        {/* Tier cards */}
        <section style={{ background: RD_CREAM, padding: '64px 48px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
            {tiers.map((t) => (
              <div key={t.name} style={{
                background: t.popular ? 'var(--rd-primary)' : RD_PAPER,
                border: `4px solid ${RD_INK}`, borderRadius: 16,
                padding: '32px 28px 28px', boxShadow: t.popular ? `12px 12px 0 var(--rd-accent)` : `8px 8px 0 ${RD_INK}`,
                position: 'relative', display: 'flex', flexDirection: 'column',
                transform: t.popular ? 'translateY(-12px)' : 'none',
              }}>
                {t.popular && (
                  <div style={{ position: 'absolute', top: -22, right: -18 }}>
                    <BurstBadge size={88} rotate={-12}>Most<br/>popular!</BurstBadge>
                  </div>
                )}
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, color: RD_INK, opacity: 0.65, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>{t.tagline}</div>
                <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 32, margin: '0 0 12px', textTransform: 'uppercase' }}>{t.name}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.55, color: RD_INK, opacity: 0.85, margin: '0 0 20px' }}>{t.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: t.accent, border: `2px solid ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icn d={ICONS.check} size={12} sw={2.8} />
                      </div>{f}
                    </li>
                  ))}
                  {t.not.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK, opacity: 0.4, textDecoration: 'line-through' }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'transparent', border: `2px solid ${RD_INK}`, opacity: 0.4, flexShrink: 0 }}></div>{f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto' }}>
                  <span onClick={() => go('contact')} style={{ display: 'inline-block', width: '100%' }}>
                    <CCBButton primary={!t.popular} dark={t.popular} size={14} fullWidth>Pick {t.name} <Icn d={ICONS.arrow} size={15} /></CCBButton>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: RD_PAPER, padding: '80px 48px', borderTop: `2px solid ${RD_INK}22` }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 40, margin: '0 0 32px', textTransform: 'uppercase', textAlign: 'center' }}>
              Compare <span style={{ color: 'var(--rd-accent)' }}>packages.</span>
            </h2>
            <div style={{ background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 14, overflow: 'auto', boxShadow: `8px 8px 0 ${RD_INK}`, WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', minWidth: 560, borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif' }}>
                <thead>
                  <tr style={{ background: RD_INK, color: RD_CREAM }}>
                    <th style={{ textAlign: 'left', padding: '18px 24px', fontFamily: '"Archivo Black", sans-serif', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}></th>
                    {tiers.map((t) => (
                      <th key={t.name} style={{ textAlign: 'center', padding: '18px 16px', fontFamily: '"Archivo Black", sans-serif', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: t.popular ? 'var(--rd-primary)' : RD_CREAM }}>{t.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row[0]} style={{ borderTop: `2px solid ${RD_INK}15`, background: i % 2 === 0 ? RD_CREAM : RD_PAPER }}>
                      <td style={{ padding: '14px 24px', fontFamily: '"Archivo Black", sans-serif', fontSize: 13, color: RD_INK, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} style={{ padding: '14px 16px', textAlign: 'center', fontSize: 14, color: RD_INK, fontWeight: cell === '✓' ? 700 : 500, background: j === 1 ? 'var(--rd-primary)22' : 'transparent' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bespoke CTA */}
        <section style={{ background: RD_INK, color: RD_CREAM, padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.08 }}></div>
          <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: 0, textTransform: 'uppercase', lineHeight: 0.92 }}>
              None of these fit?<br/><span style={{ color: 'var(--rd-primary)' }}>Tell us anyway.</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, opacity: 0.85, margin: '20px auto 28px', maxWidth: 480 }}>Multi-day, mapping, full production, weddings — bespoke quotes within a working day.</p>
            <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
              <CCBButton primary size={16}>Get a Bespoke Quote <Icn d={ICONS.arrow} size={18} /></CCBButton>
            </span>
          </div>
        </section>
      </div>
    );
  }

  // ── Videos page — embedded YouTube reels grouped by category
  function VideosPage({ go }) {
    const groups = [
      {
        kind: 'cinematic',
        title: 'Cinematic',
        accent: 'var(--rd-accent)',
        blurb: 'Long-form cinematic work — the pieces we are most proud of. Best watched full-screen.',
        videos: [
          { id: 'thvwXQ9eoKY', t: 'Saltash · I' },
          { id: 'vJJRWkx4cFw', t: 'Saltash · II' },
          { id: 'k2ckxMDVvvk', t: 'Saltash · III' },
        ],
      },
      {
        kind: 'fpv',
        title: 'FPV',
        accent: 'var(--rd-tint)',
        blurb: 'First-person flight. Cinewhoop walkthroughs, single-take fly-throughs — venues, properties, environments brought to life from the inside.',
        videos: [
          { id: 'V9MM7U9Y_b4', t: 'FPV reel · I' },
          { id: 'f9mo7RJcfQk', t: 'FPV reel · II' },
          { id: 'e1Uh7EBqz34', t: 'FPV reel · III' },
          { id: '-qFVhbmP9ic', t: 'FPV reel · IV' },
        ],
      },
      {
        kind: 'construction',
        title: 'Construction',
        accent: 'var(--rd-primary)',
        blurb: 'Infrastructure, sites, progress timelapses. Aerial captures from active sites and finished hand-overs.',
        videos: [
          { id: 't5ItrbnOego', t: 'Construction · I' },
          { id: 'hM9Rv7eaxdI', t: 'Construction · II' },
          { id: 'HFp3yQMKqlU', t: 'Construction · III' },
        ],
      },
    ];

    const VideoCard = ({ v, i }) => (
      <div style={{
        background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 14,
        overflow: 'hidden', boxShadow: `8px 8px 0 ${RD_INK}`,
        transform: `rotate(${(i % 2 === 0 ? -0.4 : 0.4)}deg)`,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ position: 'relative', aspectRatio: '16/9', borderBottom: `4px solid ${RD_INK}`, background: RD_INK }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
            title={v.t}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
        <div style={{ padding: '14px 18px 16px' }}>
          <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 16, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.005em' }}>{v.t}</h3>
        </div>
      </div>
    );

    return (
      <div>
        {/* Page hero */}
        <section style={{ background: 'var(--rd-primary)', padding: '72px 48px 56px', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.1 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Watch · Selected reels</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '20px 0 12px', textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '-0.01em' }}>
              In <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>motion.</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: RD_INK, margin: '0 auto', maxWidth: 580 }}>
              Cinematic, FPV and construction work — a hand-picked selection from the YouTube channel. Pop them full-screen.
            </p>
          </div>
        </section>

        {/* Groups */}
        {groups.map((g) => (
          <section key={g.kind} style={{ background: g.kind === 'fpv' ? RD_CREAM : RD_PAPER, padding: '72px 48px', borderBottom: `2px solid ${RD_INK}22` }}>
            <div style={{ maxWidth: 1300, margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                <div>
                  <SpeechBadge size={12} color={g.accent} rotate={-2}>● {g.title}</SpeechBadge>
                  <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '12px 0 8px', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
                    {g.title}.
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: RD_INK, opacity: 0.8, margin: 0, maxWidth: 640 }}>{g.blurb}</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {g.videos.map((v, i) => <VideoCard key={v.id} v={v} i={i} />)}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section style={{ background: RD_INK, color: RD_CREAM, padding: '72px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.06 }}></div>
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
            <BurstBadge size={110} rotate={-8}>More on<br/>YouTube!</BurstBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '24px 0 16px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Got a reel<br/><span style={{ color: 'var(--rd-primary)' }}>in mind?</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, opacity: 0.85, margin: '0 auto 28px', maxWidth: 560, lineHeight: 1.55 }}>
              Send the brief and we'll come back with a treatment, timing and a quote.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <CCBButton primary size={16} onClick={() => go('contact')}>Start a project <Icn d={ICONS.arrow} size={18} /></CCBButton>
              <CCBButton dark size={16} href="https://youtube.com/playlist?list=PLgzYa-pTCKVDYnkFEJiJYzoLVNZUQLP9_">Full playlist <Icn d={ICONS.arrow} size={18} /></CCBButton>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return { PortfolioPage, CaseStudyPage, PricingPage, VideosPage, PROJECTS };
})();

window.CSPAGES2 = CSPAGES2;
