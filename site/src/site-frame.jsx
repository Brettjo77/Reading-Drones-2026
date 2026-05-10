import React from 'react'
// Comic Studio Site — Tweaks (palette) + small site-wide helpers

const SITE = (() => {
  const {
    RD_INK, RD_CREAM, RD_PAPER, RD_YELLOW, RD_ORANGE, RD_TINT,
    SpeechBadge, BurstBadge, CCBButton, CompactLockup, Icn, ICONS, HALFTONE,
    SunburstRays, MavicHero, SOCIAL, SocialIcon,
    TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle,
  } = window;

  // Palette presets — yellow vs orange dominance + alt accents
  const PALETTES = {
    'yellow-orange': { primary: '#fcd34d', accent: '#ef5a24', tint: '#2aa7c8', name: 'Yellow + Orange (default)' },
    'orange-yellow': { primary: '#ef5a24', accent: '#fcd34d', tint: '#2aa7c8', name: 'Orange-led' },
    'yellow-pink':   { primary: '#fcd34d', accent: '#ec4899', tint: '#5b9cf2', name: 'Yellow + Hot Pink' },
    'mint-orange':   { primary: '#7ee0a3', accent: '#ef5a24', tint: '#0d0d10', name: 'Mint + Orange' },
    'red-yellow':    { primary: '#e63946', accent: '#fcd34d', tint: '#0d0d10', name: 'Comic Red + Yellow' },
    'cyan-magenta':  { primary: '#22d3ee', accent: '#e0399f', tint: '#fcd34d', name: 'Pop Art Cyan + Magenta' },
  };

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "yellow-orange",
    "comicIntensity": "default",
    "showDroneOnScroll": true
  }/*EDITMODE-END*/;

  // Apply palette to CSS vars (so all comic studio pages can read them)
  function applyPalette(key) {
    const p = PALETTES[key] || PALETTES['yellow-orange'];
    const r = document.documentElement.style;
    r.setProperty('--rd-primary', p.primary);
    r.setProperty('--rd-accent', p.accent);
    r.setProperty('--rd-tint', p.tint);
  }

  function SiteTweaks() {
    const [t, setT] = useTweaks(TWEAK_DEFAULTS);
    React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);

    return (
      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakRadio
            label="Preset"
            value={t.palette}
            onChange={(v) => setT('palette', v)}
            options={Object.entries(PALETTES).map(([k, v]) => ({ value: k, label: v.name }))}
          />
        </TweakSection>
        <TweakSection title="Detail">
          <TweakToggle
            label="Drone scrolls between sections"
            value={t.showDroneOnScroll}
            onChange={(v) => setT('showDroneOnScroll', v)}
          />
        </TweakSection>
      </TweaksPanel>
    );
  }

  // Tiny router — query string ?p=services etc
  function useRoute() {
    const [route, setRoute] = React.useState(() => {
      try { return new URL(location.href).searchParams.get('p') || 'home'; }
      catch (e) { return 'home'; }
    });
    React.useEffect(() => {
      const onPop = () => {
        try { setRoute(new URL(location.href).searchParams.get('p') || 'home'); }
        catch (e) { setRoute('home'); }
      };
      window.addEventListener('popstate', onPop);
      return () => window.removeEventListener('popstate', onPop);
    }, []);
    const go = React.useCallback((p) => {
      try {
        const u = new URL(location.href);
        if (p === 'home') u.searchParams.delete('p'); else u.searchParams.set('p', p);
        history.pushState({}, '', u);
      } catch (e) {}
      setRoute(p);
      // Reset scroll on route change. In production the real scroll lives on window
      // (cs-scroller is set to overflow:visible in main.jsx); the inner scroller reset
      // is kept for the designer/preview shell where cs-scroller owns the scroll.
      try {
        const sc = document.getElementById('cs-scroller');
        if (sc) sc.scrollTop = 0;
      } catch (e) {}
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        try { window.scrollTo(0, 0); } catch (e2) {}
      }
    }, []);
    return [route, go];
  }

  // CS-prefixed nav (uses CSS vars for primary/accent)
  function CSNav({ route, go }) {
    const [open, setOpen] = React.useState(false);
    const links = [
      ['home', 'Home'], ['services', 'Services'], ['portfolio', 'Portfolio'],
      ['videos', 'Videos'], ['pricing', 'Packages'], ['contact', 'Contact'],
    ];
    const goAndClose = (p) => { setOpen(false); go(p); };
    return (
      <header style={{
        display: 'flex', alignItems: 'center',
        padding: '18px 48px', background: RD_CREAM,
        borderBottom: `4px solid ${RD_INK}`,
        position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 30,
      }} className="cs-nav-header">
        {/* logo (left) */}
        <div className="cs-nav-left" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a onClick={() => goAndClose('home')} style={{ cursor: 'pointer' }}><CompactLockup size={22} /></a>
        </div>
        {/* socials — flex:1 wrapper centers them in the gap between logo and nav */}
        <div className="cs-nav-socials-wrap" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div className="cs-nav-socials" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {Object.values(SOCIAL).map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Reading Drones on ${s.label}`}
                title={s.label}
                className="rd-social-tile"
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  border: `2px solid ${RD_INK}`,
                  background: 'var(--rd-primary)',
                  boxShadow: `2px 2px 0 ${RD_INK}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', cursor: 'pointer',
                  transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
                }}
              >
                <SocialIcon brand={s.key} size={16} fg={RD_INK} />
              </a>
            ))}
          </div>
        </div>
        {/* nav (right) */}
        <nav className={`cs-nav ${open ? 'cs-nav-open' : ''}`} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {links.map(([p, l]) => {
            const on = route === p || (p === 'portfolio' && typeof route === 'string' && route.indexOf('case:') === 0);
            return (
              <a key={p} onClick={() => goAndClose(p)} className="cs-navlink" style={{
                fontFamily: '"Archivo Black", sans-serif', fontSize: 13,
                textTransform: 'uppercase', color: RD_INK, letterSpacing: '0.05em',
                padding: '8px 14px', cursor: 'pointer', borderRadius: 8,
                background: on ? 'var(--rd-primary)' : 'transparent',
                border: on ? `2.5px solid ${RD_INK}` : '2.5px solid transparent',
                boxShadow: on ? `3px 3px 0 ${RD_INK}` : 'none',
              }}>{l}</a>
            );
          })}
          <div className="cs-nav-quote" style={{ marginLeft: 16 }}>
            <button onClick={() => goAndClose('contact')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 20px', background: 'var(--rd-accent)', color: RD_INK,
              border: `2.8px solid ${RD_INK}`, borderRadius: 10,
              fontFamily: '"Archivo Black", sans-serif', textTransform: 'uppercase',
              fontSize: 13, letterSpacing: '0.04em',
              boxShadow: `0 5px 0 ${RD_INK}`, cursor: 'pointer',
            }}>Quote!</button>
          </div>
        </nav>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="cs-nav-burger"
          style={{
            display: 'none',
            background: open ? 'var(--rd-accent)' : RD_CREAM,
            border: `2.5px solid ${RD_INK}`, borderRadius: 8,
            width: 44, height: 44, cursor: 'pointer', padding: 0,
            boxShadow: `3px 3px 0 ${RD_INK}`,
            alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4,
          }}
        >
          <span style={{ display: 'block', width: 22, height: 3, background: RD_INK, borderRadius: 2, transform: open ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform .2s' }}></span>
          <span style={{ display: 'block', width: 22, height: 3, background: RD_INK, borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity .2s' }}></span>
          <span style={{ display: 'block', width: 22, height: 3, background: RD_INK, borderRadius: 2, transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform .2s' }}></span>
        </button>
      </header>
    );
  }

  function CSFooter({ go }) {
    return (
      <footer style={{ background: RD_CREAM, color: RD_INK, padding: '56px 48px 24px', borderTop: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 36 }}>
          <div>
            <CompactLockup size={22} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, marginTop: 14, opacity: 0.75, maxWidth: 280 }}>
              Aerial photography, video and FPV tours from Reading, Berkshire.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {Object.values(SOCIAL).map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Reading Drones on ${s.label}`}
                  title={s.label}
                  className="rd-social-tile"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    border: `2.5px solid ${RD_INK}`,
                    background: 'var(--rd-primary)',
                    boxShadow: `3px 3px 0 ${RD_INK}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', cursor: 'pointer',
                    transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
                  }}
                >
                  <SocialIcon brand={s.key} size={18} fg={RD_INK} />
                </a>
              ))}
            </div>
          </div>
          {[
            { h: 'Services', items: [['services','Photography'], ['services','Video'], ['services','FPV Tours'], ['services','Inspections'], ['services','Day Rates']] },
            { h: 'Studio',  items: [['contact','About'], ['portfolio','Portfolio'], ['pricing','Packages'], ['videos','Videos']] },
            { h: 'Reach Us',  items: [['contact','contact@readingdrones.co.uk'], ['contact','07801 881403'], ['contact','Reading, Berkshire']] },
          ].map((col) => (
            <div key={col.h}>
              <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 13, color: 'var(--rd-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.items.map(([p, t]) => <li key={t} onClick={() => go(p)} style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, opacity: 0.78, cursor: 'pointer' }}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `2px solid ${RD_INK}`, marginTop: 36, paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontFamily: '"Archivo Black", sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span>© 2026 Reading Drones</span>
          <span>CAA A2 · £5M Coverdrone</span>
        </div>
      </footer>
    );
  }

  // Scroll-flying drone — small drone that animates between sections as user scrolls
  function ScrollDrone({ enabled, scrollerRef }) {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
      if (!enabled) return;
      const el = scrollerRef.current;
      if (!el) return;
      const onScroll = () => {
        const max = el.scrollHeight - el.clientHeight;
        setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
      };
      el.addEventListener('scroll', onScroll);
      onScroll();
      return () => el.removeEventListener('scroll', onScroll);
    }, [enabled, scrollerRef]);

    if (!enabled) return null;
    // sweeps left↔right & dips up/down as scrolling progresses
    const x = 8 + progress * 84;            // 8% → 92% across viewport
    const y = 18 + Math.sin(progress * Math.PI * 2) * 10; // bob
    const tilt = -8 + Math.sin(progress * Math.PI * 3) * 14;
    return (
      <div style={{
        position: 'fixed', left: `${x}%`, top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
        pointerEvents: 'none', zIndex: 25, transition: 'left .12s linear, top .12s linear, transform .12s linear',
        filter: `drop-shadow(0 6px 0 ${RD_INK}33)`,
      }}>
        <window.MavicHero treatment="comic" size={68} outline={RD_INK} accent="var(--rd-accent)" />
      </div>
    );
  }

  return { PALETTES, TWEAK_DEFAULTS, applyPalette, SiteTweaks, useRoute, CSNav, CSFooter, ScrollDrone };
})();

window.SITE = SITE;
