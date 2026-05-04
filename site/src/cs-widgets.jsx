import React from 'react'
// Comic Studio — interactive widgets (spec sheet, storyboard, locations map, logo wall)

const CSWIDGETS = (() => {
  const { RD_INK, RD_CREAM, RD_PAPER, Icn, ICONS, SpeechBadge, BurstBadge, AerialPlaceholder, MavicHero, HALFTONE } = window;

  // ── Logo wall — clients we've shot for. Placeholder logos in SVG.
  function LogoWall() {
    const clients = [
      { t: 'Caversham', s: 'Estates' }, { t: 'Riverside', s: 'Hotel · Reading' },
      { t: 'Bracknell', s: 'FC' }, { t: 'Sonning', s: 'Property Co.' },
      { t: 'Wokingham', s: 'Surveyors' }, { t: 'Henley', s: 'Hospitality' },
      { t: 'Berkshire', s: 'Construction' }, { t: 'Pangbourne', s: 'Marina' },
    ];
    return (
      <section style={{ background: RD_CREAM, padding: '64px 48px', borderTop: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <SpeechBadge size={12} color="var(--rd-primary)" rotate={-2}>★ Trusted by ★</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 38, margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Some of the people<br/>we've flown for.
            </h2>
          </div>
          <div className="cs-logowall" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: `${RD_INK}22`, border: `2px solid ${RD_INK}`, borderRadius: 8, overflow: 'hidden' }}>
            {clients.map((c, i) => (
              <div key={i} style={{
                background: RD_CREAM, padding: '28px 16px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
                minHeight: 110, opacity: 0.85, transition: 'opacity .2s, background .2s',
              }} className="cs-logo">
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 18, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>{c.t}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: RD_INK, opacity: 0.55, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Spec sheet — interactive drone fleet selector
  const FLEET = [
    {
      id: 'mavic4', name: 'DJI Mavic 4 Pro', tag: 'Hero camera',
      blurb: 'Hasselblad triple-camera, 100MP stills, 6K video. The workhorse for property, commercial and cinematic.',
      stats: [['Sensor', '4/3" Hasselblad'], ['Stills', '100MP RAW'], ['Video', '6K · 60fps'], ['Range', '15 km'], ['Wind', '12 m/s']],
      color: 'var(--rd-primary)',
    },
    {
      id: 'mini4', name: 'DJI Mini 4 Pro', tag: 'Lightweight',
      blurb: 'Sub-250g flexibility for tight permissions or quick turnaround. 4K HDR, vertical shooting, full obstacle sensing.',
      stats: [['Weight', '<249g'], ['Stills', '48MP RAW'], ['Video', '4K · 100fps'], ['Range', '20 km'], ['Class', 'C0 / A1']],
      color: 'var(--rd-accent)',
    },
    {
      id: 'avata2', name: 'DJI Avata 2', tag: 'FPV cinema',
      blurb: 'First-person fly-throughs for venues, restaurants and indoor cinematic work. Cage-protected for tight spaces.',
      stats: [['Type', 'FPV cinewhoop'], ['Video', '4K · 60fps'], ['FOV', '155°'], ['Mode', 'Manual / Acro'], ['Use', 'Indoor + outdoor']],
      color: 'var(--rd-tint)',
    },
    {
      id: 'neo2', name: 'DJI Neo 2', tag: 'Compact',
      blurb: 'Tiny, autonomous, indoor-safe. Used for quick orientation passes and behind-the-scenes content.',
      stats: [['Weight', '135g'], ['Video', '4K · 30fps'], ['Modes', '6 autonomous'], ['Use', 'BTS, Reels'], ['Class', 'C0']],
      color: 'var(--rd-primary)',
    },
  ];

  function SpecSheet() {
    const [active, setActive] = React.useState('mavic4');
    const drone = FLEET.find(d => d.id === active);
    return (
      <section style={{ background: RD_INK, color: RD_CREAM, padding: '96px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.06 }}></div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <SpeechBadge size={12} color="var(--rd-accent)" rotate={-2}>● The fleet</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.92 }}>
              The right tool<br/><span style={{ color: 'var(--rd-primary)' }}>for the brief.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {FLEET.map(d => (
              <button key={d.id} onClick={() => setActive(d.id)} style={{
                padding: '12px 18px',
                background: active === d.id ? d.color : 'transparent',
                color: active === d.id ? RD_INK : RD_CREAM,
                border: `2.5px solid ${active === d.id ? RD_INK : `${RD_CREAM}55`}`,
                borderRadius: 10, cursor: 'pointer',
                fontFamily: '"Archivo Black", sans-serif', fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase',
                boxShadow: active === d.id ? `0 4px 0 ${RD_INK}` : 'none',
              }}>{d.name}</button>
            ))}
          </div>
          <div style={{
            background: RD_CREAM, color: RD_INK, border: `4px solid ${RD_INK}`, borderRadius: 14,
            boxShadow: `10px 10px 0 ${drone.color}`,
            padding: 0, overflow: 'hidden',
            display: 'grid', gridTemplateColumns: '1.1fr 1fr',
          }}>
            <div style={{ padding: '40px 40px 36px' }}>
              <div style={{ display: 'inline-block', background: drone.color, padding: '6px 12px', border: `2.5px solid ${RD_INK}`, borderRadius: 6, fontFamily: '"Archivo Black", sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: `2px 2px 0 ${RD_INK}` }}>{drone.tag}</div>
              <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 44, margin: '16px 0 16px', textTransform: 'uppercase', lineHeight: 0.95 }}>{drone.name}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: RD_INK, opacity: 0.85, margin: '0 0 28px' }}>{drone.blurb}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {drone.stats.map(([k,v]) => (
                  <div key={k} style={{ background: RD_PAPER, border: `2px solid ${RD_INK}`, borderRadius: 8, padding: '12px 14px' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: RD_INK, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.14em' }}>{k}</div>
                    <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 16, marginTop: 4 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: drone.color, position: 'relative', overflow: 'hidden', borderLeft: `4px solid ${RD_INK}` }}>
              <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.18 }}></div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ transform: 'rotate(-8deg)' }}>
                  <MavicHero treatment="comic" size={280} outline={RD_INK} accent={RD_CREAM} />
                </div>
              </div>
              <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: '"Archivo Black", sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: RD_INK, background: RD_CREAM, padding: '4px 8px', border: `2px solid ${RD_INK}`, borderRadius: 4 }}>● PRO FLEET</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Storyboard — comic-strip of the shoot process
  function Storyboard() {
    const panels = [
      { n: '01', t: 'Brief', d: "You tell us what you're shooting and we figure out the angle.", icon: ICONS.mail },
      { n: '02', t: 'Recce', d: 'We scout the site, check airspace, file the permissions.', icon: ICONS.map },
      { n: '03', t: 'Fly', d: 'Pre-flight checks, weather window, and we shoot for as long as it takes.', icon: ICONS.drone },
      { n: '04', t: 'Edit', d: 'Colour-graded stills and a finished cut, delivered within 7 days.', icon: ICONS.edit },
    ];
    return (
      <section style={{ background: RD_PAPER, padding: '96px 48px', borderTop: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SpeechBadge size={12} color="var(--rd-primary)" rotate={-2}>★ How a shoot goes ★</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.92 }}>
              From brief to <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `2px ${RD_INK}`, paintOrder: 'stroke fill' }}>delivery.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {panels.map((p, i) => (
              <div key={p.n} style={{
                background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 12,
                boxShadow: `8px 8px 0 ${RD_INK}`, padding: '28px 24px 24px',
                position: 'relative', transform: `rotate(${(i-1.5) * 0.6}deg)`,
                display: 'flex', flexDirection: 'column', gap: 12, minHeight: 240,
              }}>
                <div style={{ position: 'absolute', top: -16, right: -16, background: 'var(--rd-primary)', border: `3px solid ${RD_INK}`, borderRadius: '50%', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `3px 3px 0 ${RD_INK}`, fontFamily: '"Archivo Black", sans-serif', fontSize: 16 }}>{p.n}</div>
                <div style={{ width: 56, height: 56, borderRadius: 10, background: 'var(--rd-accent)', border: `2.5px solid ${RD_INK}`, boxShadow: `3px 3px 0 ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icn d={p.icon} size={26} sw={2.2} />
                </div>
                <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 24, margin: 0, textTransform: 'uppercase' }}>{p.t}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, margin: 0, color: RD_INK, opacity: 0.8 }}>{p.d}</p>
                {/* arrow to next panel */}
                {i < panels.length - 1 && (
                  <div style={{ position: 'absolute', right: -28, top: '50%', transform: 'translateY(-50%) rotate(-3deg)', zIndex: 2, fontFamily: '"Archivo Black", sans-serif', fontSize: 28, color: RD_INK }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Locations map — playful map of recent shoot locations across Berkshire
  function LocationsMap() {
    // Coordinates are abstract — positioned on a stylised Berkshire-ish map
    const pins = [
      { x: 22, y: 38, label: 'Reading',   project: 'Caversham Manor', tone: 'estate' },
      { x: 34, y: 30, label: 'Caversham', project: 'Riverside Hotel · FPV', tone: 'venue' },
      { x: 48, y: 44, label: 'Wokingham', project: 'Roof Survey', tone: 'rooftop' },
      { x: 12, y: 56, label: 'Pangbourne',project: 'Marina Promo', tone: 'coast' },
      { x: 70, y: 36, label: 'Henley',    project: 'Hospitality Reel', tone: 'fields' },
      { x: 60, y: 58, label: 'Bracknell', project: 'FC Match Day', tone: 'sport' },
      { x: 84, y: 50, label: 'Maidenhead',project: 'Construction', tone: 'site' },
      { x: 38, y: 70, label: 'Sonning',   project: 'Estate Aerials', tone: 'estate' },
    ];
    const [active, setActive] = React.useState(0);
    const a = pins[active];
    return (
      <section style={{ background: RD_CREAM, padding: '96px 48px', borderTop: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <SpeechBadge size={12} color="var(--rd-accent)" rotate={-2}>● Where we've flown</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.92 }}>
              Recent <span style={{ color: 'var(--rd-accent)' }}>locations.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'stretch' }}>
            {/* Map */}
            <div style={{ position: 'relative', background: '#cfe7d8', border: `4px solid ${RD_INK}`, borderRadius: 14, overflow: 'hidden', minHeight: 480, boxShadow: `8px 8px 0 ${RD_INK}` }}>
              {/* abstract map shapes */}
              <svg viewBox="0 0 100 70" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <path d="M5 30 Q 20 15 40 22 T 70 18 T 95 28 L 98 50 Q 80 60 65 55 T 35 62 T 8 55 Z" fill="#a8d4b8" stroke={RD_INK} strokeWidth="0.4" />
                <path d="M0 42 Q 25 38 45 44 T 80 42 T 100 46" fill="none" stroke="#5fa9c6" strokeWidth="1.2" />
                <path d="M10 60 Q 30 55 50 58 T 90 60" fill="none" stroke="#5fa9c6" strokeWidth="0.8" />
                {/* halftone grid hint */}
                <g opacity="0.15">{[...Array(60)].map((_, i) => (<circle key={i} cx={(i%10)*10+5} cy={Math.floor(i/10)*12+5} r="0.6" fill={RD_INK}/>))}</g>
              </svg>
              {/* dotted compass */}
              <div style={{ position: 'absolute', top: 18, right: 18, width: 56, height: 56, border: `2.5px solid ${RD_INK}`, borderRadius: '50%', background: RD_CREAM, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Archivo Black", sans-serif', fontSize: 11, letterSpacing: '0.1em', boxShadow: `3px 3px 0 ${RD_INK}` }}>N ↑</div>
              {/* pins */}
              {pins.map((p, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
                  transform: 'translate(-50%, -100%)', cursor: 'pointer',
                  background: 'transparent', border: 'none', padding: 0,
                }}>
                  <div style={{
                    background: active === i ? 'var(--rd-accent)' : 'var(--rd-primary)',
                    color: RD_INK, border: `2.5px solid ${RD_INK}`,
                    padding: '6px 10px 8px', borderRadius: 10,
                    fontFamily: '"Archivo Black", sans-serif', fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.04em',
                    boxShadow: `0 4px 0 ${RD_INK}`, position: 'relative',
                    transform: active === i ? 'translateY(-4px) scale(1.05)' : 'none',
                    transition: 'transform .15s',
                  }}>
                    {p.label}
                    <div style={{ position: 'absolute', left: '50%', bottom: -8, transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: `8px solid ${RD_INK}` }}></div>
                  </div>
                </button>
              ))}
            </div>
            {/* Detail card */}
            <div style={{ background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 14, boxShadow: `8px 8px 0 var(--rd-primary)`, padding: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 240, borderBottom: `4px solid ${RD_INK}`, position: 'relative' }}>
                <AerialPlaceholder tone={a.tone} label={a.label} />
              </div>
              <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--rd-accent)', textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, marginBottom: 10 }}>● {a.label}, Berkshire</div>
                <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 24, margin: 0, textTransform: 'uppercase', lineHeight: 1 }}>{a.project}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, color: RD_INK, opacity: 0.78, marginTop: 14, marginBottom: 0 }}>
                  Tap a pin on the map to explore. We cover most of Berkshire, Oxfordshire and West London — travel within 20 miles of Reading is included in every quote.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 18, display: 'flex', gap: 8 }}>
                  <div style={{ background: 'var(--rd-primary)', border: `2px solid ${RD_INK}`, borderRadius: 6, padding: '5px 9px', fontFamily: '"Archivo Black", sans-serif', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pin {String(active+1).padStart(2,'0')} / {pins.length}</div>
                  <div style={{ background: RD_CREAM, border: `2px solid ${RD_INK}`, borderRadius: 6, padding: '5px 9px', fontFamily: '"Archivo Black", sans-serif', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>● Recent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return { LogoWall, SpecSheet, Storyboard, LocationsMap };
})();

window.CSWIDGETS = CSWIDGETS;
