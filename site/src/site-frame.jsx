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
  const ROUTE_META = {
    home:      { title: 'Drone Photography & Video Reading | Reading Drones (CAA Certified)', desc: 'Professional aerial photography, video and FPV tours from Reading, Berkshire. CAA A2 CofC certified pilot, £5M public liability insured.' },
    services:  { title: 'Drone Services | Aerial Photography, Video & FPV | Reading Drones', desc: 'Aerial photography, aerial video, FPV tours, roof inspections, residential and day rates — covering Reading, Berkshire and the Thames Valley.' },
    portfolio: { title: 'Portfolio | Recent Drone Projects | Reading Drones', desc: 'Recent aerial photography and video projects across Berkshire, Oxfordshire and the Thames Valley.' },
    videos:    { title: 'Showreels | Cinematic, Construction & FPV Drone Video | Reading Drones', desc: 'Selected cinematic, construction and FPV drone reels from Reading Drones.' },
    pricing:   { title: 'Drone Photography Packages & Pricing | Reading Drones', desc: 'Three flexible drone packages plus bespoke quotes — single shoot, standard, and full production day.' },
    contact:   { title: 'Contact | Get a Quote | Reading Drones', desc: 'Send a brief and get a no-obligation quote within one working day. CAA certified, £5M insured.' },
    about:     { title: 'About | The Studio | Reading Drones', desc: 'A small Berkshire-based aerial studio. CAA-licensed, £5M insured, eight years professional.' },
    privacy:   { title: 'Privacy Policy | Reading Drones', desc: 'How Reading Drones handles your enquiry data and footage. UK GDPR-compliant.' },
  };
  function applyRouteMeta(p) {
    const key = (typeof p === 'string' && p.indexOf('case:') === 0) ? 'portfolio' : (ROUTE_META[p] ? p : 'home');
    const meta = ROUTE_META[key];
    try { document.title = meta.title; } catch (e) {}
    try {
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.desc);
      const can = document.querySelector('link[rel="canonical"]');
      if (can) can.setAttribute('href', key === 'home' ? 'https://readingdrones.co.uk/' : `https://readingdrones.co.uk/?p=${key}`);
    } catch (e) {}
  }

  function useRoute() {
    const [route, setRoute] = React.useState(() => {
      try { return new URL(location.href).searchParams.get('p') || 'home'; }
      catch (e) { return 'home'; }
    });
    React.useEffect(() => {
      const onPop = () => {
        try {
          const p = new URL(location.href).searchParams.get('p') || 'home';
          setRoute(p);
          applyRouteMeta(p);
        }
        catch (e) { setRoute('home'); }
      };
      window.addEventListener('popstate', onPop);
      // Also set initial meta on first mount.
      try { applyRouteMeta(new URL(location.href).searchParams.get('p') || 'home'); } catch (e) {}
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
      applyRouteMeta(p);
    }, []);
    return [route, go];
  }

  // Build the canonical URL for a route key (used for nav anchors so they're keyboard reachable + middle-clickable).
  function hrefFor(p) {
    return p === 'home' ? '?' : `?p=${p}`;
  }

  // CSNav-internal click handler: support modifier keys (open in new tab), otherwise SPA navigate.
  function navClick(e, go, p) {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)) return; // let the browser handle it
    if (e && e.preventDefault) e.preventDefault();
    go(p);
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
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30,
        boxSizing: 'border-box',
      }} className="cs-nav-header">
        {/* logo (left) */}
        <div className="cs-nav-left" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href={hrefFor('home')} onClick={(e) => { navClick(e, go, 'home'); setOpen(false); }} aria-label="Reading Drones — home" style={{ cursor: 'pointer', textDecoration: 'none', color: RD_INK }}><CompactLockup size={22} /></a>
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
              <a key={p} href={hrefFor(p)} onClick={(e) => { navClick(e, go, p); setOpen(false); }} className="cs-navlink" aria-current={on ? 'page' : undefined} style={{
                fontFamily: '"Archivo Black", sans-serif', fontSize: 13,
                textTransform: 'uppercase', color: RD_INK, letterSpacing: '0.05em',
                padding: '8px 14px', cursor: 'pointer', borderRadius: 8,
                background: on ? 'var(--rd-primary)' : 'transparent',
                border: on ? `2.5px solid ${RD_INK}` : '2.5px solid transparent',
                boxShadow: on ? `3px 3px 0 ${RD_INK}` : 'none',
                textDecoration: 'none',
              }}>{l}</a>
            );
          })}
          <div className="cs-nav-quote" style={{ marginLeft: 16 }}>
            <a href={hrefFor('contact')} onClick={(e) => { navClick(e, go, 'contact'); setOpen(false); }} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 20px', background: 'var(--rd-accent)', color: RD_INK,
              border: `2.8px solid ${RD_INK}`, borderRadius: 10,
              fontFamily: '"Archivo Black", sans-serif', textTransform: 'uppercase',
              fontSize: 13, letterSpacing: '0.04em',
              boxShadow: `0 5px 0 ${RD_INK}`, cursor: 'pointer',
              textDecoration: 'none',
            }}>Quote!</a>
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
            { h: 'Studio',  items: [['about','About'], ['portfolio','Portfolio'], ['pricing','Packages'], ['videos','Videos'], ['privacy','Privacy']] },
            { h: 'Reach Us',  items: [['contact','contact@readingdrones.co.uk'], ['contact','07801 881403'], ['contact','Reading, Berkshire']] },
          ].map((col) => (
            <div key={col.h}>
              <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 13, color: 'var(--rd-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.items.map(([p, t]) => (
                  <li key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
                    <a href={hrefFor(p)} onClick={(e) => navClick(e, go, p)} style={{ color: RD_INK, opacity: 0.78, textDecoration: 'none', cursor: 'pointer' }}>{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `2px solid ${RD_INK}`, marginTop: 36, paddingTop: 16, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', fontFamily: '"Archivo Black", sans-serif', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
      // In production cs-scroller is set to overflow:visible (main.jsx),
      // so the real scroll lives on window. Detect at runtime and bind to the right target.
      const usingWindow = !el || el.scrollHeight <= el.clientHeight + 1;
      const onScroll = () => {
        if (usingWindow) {
          const max = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
          setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        } else {
          const max = el.scrollHeight - el.clientHeight;
          setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
        }
      };
      const target = usingWindow ? window : el;
      target.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => target.removeEventListener('scroll', onScroll);
    }, [enabled, scrollerRef]);

    if (!enabled) return null;
    // Keep the drone in the far-left lane so it never covers the hero photo
    // or other centred content. Sweeps a narrow band as you scroll.
    const x = 3 + progress * 18;            // 3% → 21% across viewport
    const y = 22 + Math.sin(progress * Math.PI * 2) * 10; // bob
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
