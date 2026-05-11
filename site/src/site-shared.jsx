import React from 'react'
import { siYoutube, siInstagram, siFacebook } from 'simple-icons'
// Shared bits used by desktop + mobile mocks
const RD_INK    = '#0d0d10';
const RD_CREAM  = '#f4ede1';
const RD_PAPER  = '#faf6ec';
const RD_YELLOW = '#fcd34d';
const RD_ORANGE = '#ef5a24';
const RD_TINT   = '#2aa7c8';
const RD_LED    = '#3fe07a';
const RD_NAVY   = '#0f1d34';

// Halftone dot pattern as a CSS background
const HALFTONE = `radial-gradient(${RD_INK} 1.2px, transparent 1.4px) 0 0/8px 8px`;

// Inline icon helpers (line-style, ink stroke)
function Icn({ d, size = 20, sw = 2.2 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
      stroke={RD_INK} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block' }}>
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  camera: 'M3 8h3l2-2h8l2 2h3v11H3z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  film:   'M3 5h18v14H3z M7 5v14 M17 5v14 M3 9h4 M17 9h4 M3 15h4 M17 15h4',
  fpv:    'M2 12h2 M20 12h2 M12 2v2 M12 20v2 M5 5l1.5 1.5 M17.5 17.5L19 19 M5 19l1.5-1.5 M17.5 6.5L19 5 M9 9l3-2 3 2v6l-3 2-3-2z',
  roof:   'M3 12 12 4l9 8 M5 11v9h14v-9 M10 20v-5h4v5',
  home:   'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z',
  map:    'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z M9 4v14 M15 6v14',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z M9 12l2 2 4-4',
  caa:    'M12 3v18 M3 12h18 M5 5l14 14 M19 5 5 19',
  check:  'M5 12l4 4 10-10',
  arrow:  'M5 12h14 M13 6l6 6-6 6',
  phone:  'M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail:   'M3 6h18v12H3z M3 6l9 7 9-7',
  pin:    'M12 22s7-8 7-13a7 7 0 0 0-14 0c0 5 7 13 7 13z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  star:   'M12 3l2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17l-5.6 3.4L7.8 14 3 9.6 9.4 9z',
  cog:    'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',
  clock:  'M12 6v6l4 2 M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z',
  yt:     'M2 8c0-2 1-3 3-3h14c2 0 3 1 3 3v8c0 2-1 3-3 3H5c-2 0-3-1-3-3z M10 9l5 3-5 3z',
  fb:     'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1z',
  ig:     'M4 4h16v16H4z M16 7.5h.01 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  drone:  'M5 5 9 9 M19 5l-4 4 M5 19l4-4 M19 19l-4-4 M9 9h6v6H9z M5 5h2v2H5z M17 5h2v2h-2z M5 17h2v2H5z M17 17h2v2h-2z',
  play:   'M8 5l12 7-12 7z',
  edit:   'M4 20h16 M14 4l6 6L8 22H2v-6z',
  group:  'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M2 21a7 7 0 0 1 14 0 M17 11a3 3 0 1 0 0-6 M17 21a5 5 0 0 1 6-5',
};

// Inline LinkedIn glyph — simple-icons removed LinkedIn from its set, so
// we ship the official mark inline. Same 24x24 viewBox + filled-path shape
// as the other simple-icons exports, so SocialIcon treats them uniformly.
const siLinkedin = {
  title: 'LinkedIn',
  hex: '0A66C2',
  path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z',
};

// Social URLs and brand-icon data, single source of truth.
const SOCIAL = {
  youtube:   { url: 'https://youtube.com/playlist?list=PLgzYa-pTCKVDYnkFEJiJYzoLVNZUQLP9_&si=pTsdaBcMZViUgKse', label: 'YouTube',   icon: siYoutube,   key: 'youtube' },
  instagram: { url: 'https://www.instagram.com/readingdrones/',                                                  label: 'Instagram', icon: siInstagram, key: 'instagram' },
  facebook:  { url: 'https://www.facebook.com/readingdrones',                                                    label: 'Facebook',  icon: siFacebook,  key: 'facebook' },
  linkedin:  { url: 'https://www.linkedin.com/company/105997088/',                                               label: 'LinkedIn',  icon: siLinkedin,  key: 'linkedin' },
};

// Speech-bubble badge — comic-styled callout
function SpeechBadge({ children, color = RD_ORANGE, ink = RD_INK, size = 14, rotate = -3 }) {
  return (
    <div style={{
      position: 'relative', display: 'inline-flex',
      background: color, color: ink, padding: `${size*0.55}px ${size*1.1}px`,
      border: `${Math.max(2, size*0.18)}px solid ${ink}`,
      borderRadius: size * 0.6,
      fontFamily: '"Archivo Black", sans-serif', textTransform: 'uppercase',
      fontSize: size, letterSpacing: '0.04em',
      transform: `rotate(${rotate}deg)`,
      boxShadow: `0 ${Math.max(3, size*0.32)}px 0 ${ink}`,
      whiteSpace: 'nowrap',
    }}>{children}</div>
  );
}

// Star burst badge
function BurstBadge({ children, color = RD_YELLOW, ink = RD_INK, size = 90, rotate = -8 }) {
  const points = 12;
  const r1 = size / 2, r2 = size * 0.42;
  const path = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? r1 : r2;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    path.push(`${size/2 + Math.cos(a)*r},${size/2 + Math.sin(a)*r}`);
  }
  return (
    <div style={{
      position: 'relative', width: size, height: size,
      transform: `rotate(${rotate}deg)`,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ position: 'absolute', inset: 0, filter: `drop-shadow(0 4px 0 ${ink})` }}>
        <polygon points={path.join(' ')} fill={color} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <div style={{
        position: 'relative', textAlign: 'center', lineHeight: 0.95,
        fontFamily: '"Archivo Black", sans-serif',
        fontSize: size * 0.16, color: ink, textTransform: 'uppercase',
        padding: '0 12%',
      }}>{children}</div>
    </div>
  );
}

// Comic-stroke button
function CCBButton({ children, primary, dark, size = 16, fullWidth, onClick, href }) {
  const bg   = primary ? RD_ORANGE : (dark ? RD_INK : RD_CREAM);
  const fg   = primary ? RD_INK    : (dark ? RD_CREAM : RD_INK);
  const lift = Math.max(4, size * 0.35);
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: size * 0.6,
    padding: `${size * 0.85}px ${size * 1.5}px`,
    background: bg, color: fg, border: `${Math.max(2.5, size*0.2)}px solid ${RD_INK}`,
    borderRadius: size * 0.7,
    fontFamily: '"Archivo Black", sans-serif', textTransform: 'uppercase',
    fontSize: size, letterSpacing: '0.04em',
    boxShadow: `0 ${lift}px 0 ${RD_INK}`,
    cursor: 'pointer', width: fullWidth ? '100%' : 'auto',
    justifyContent: 'center', textDecoration: 'none',
  }
  if (href) {
    return <a href={href} style={style}>{children}</a>
  }
  return (
    <button type="button" onClick={onClick} style={style}>{children}</button>
  );
}

// Real photos available — keyed by tone. If a tone is mapped here, AerialPlaceholder
// renders the actual photo; unmapped tones fall back to the abstract SVG placeholder.
const TONE_PHOTOS = {
  estate:  '/assets/photos/traitors-castle.jpg',
  fields:  '/assets/photos/shinfield-tree-sunset.jpg',
  venue:   '/assets/photos/blackpool-tower-night.jpg',
  rooftop: '/assets/photos/ouse-viaduct-arches.jpg',
  site:    '/assets/photos/construction-site.jpg',
  sport:   '/assets/photos/shinfield-sports-fields.jpg',
  coast:   '/assets/photos/needles-isle-of-wight.jpg',
  night:   '/assets/photos/manchester-skyline-night.jpg',
}

// Aerial photo — real photo when available, abstract SVG fallback otherwise.
// Keeps the same API as the original placeholder so nothing else needs to change.
function AerialPlaceholder({ tone = 'fields', label = 'Aerial Photo Placeholder', children, src, eager = false }) {
  const photo = src || TONE_PHOTOS[tone];
  if (photo) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: RD_INK }}>
        <img
          src={photo}
          alt={label}
          loading={eager ? 'eager' : 'lazy'}
          decoding={eager ? 'sync' : 'async'}
          fetchpriority={eager ? 'high' : 'auto'}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }}
        />
        {children}
      </div>
    );
  }
  // Fallback abstract placeholder for unmapped tones (fpv, custom, etc).
  const palettes = {
    fields:   ['#cfe7d8', '#7ab895', '#3f6e57', '#22432f'],
    rooftop:  ['#e8d3a0', '#c98c4a', '#7a4a2a', '#2a1a14'],
    coast:    ['#bfe2ee', '#5fa9c6', '#2c6e90', '#11324a'],
    night:    ['#243b66', '#16264a', '#0a1530', '#040814'],
    estate:   ['#e3d9c2', '#a89272', '#6a5436', '#2b1f12'],
    site:     ['#d9c89e', '#a37f4a', '#604224', '#221610'],
    venue:    ['#e9c69a', '#b87a3e', '#723e1c', '#1b0c06'],
    sport:    ['#dfecc6', '#8db94e', '#456b21', '#13230a'],
  };
  const p = palettes[tone] || palettes.fields;
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: `linear-gradient(180deg, ${p[0]} 0%, ${p[0]} 38%, ${p[1]} 38%, ${p[2]} 78%, ${p[3]} 100%)`,
      overflow: 'hidden',
    }}>
      <svg viewBox="0 0 400 240" preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <path d="M0 140 L60 120 L130 145 L200 115 L280 140 L360 120 L400 135 L400 240 L0 240 Z" fill={p[2]} opacity="0.7" />
        <path d="M0 170 L80 160 L160 180 L260 155 L340 175 L400 160 L400 240 L0 240 Z" fill={p[3]} opacity="0.7" />
        <circle cx="320" cy="55" r="22" fill="#fff8d6" opacity="0.8" />
      </svg>
      <div style={{
        position: 'absolute', top: 12, left: 12,
        fontFamily: '"Archivo Black", sans-serif', fontSize: 10, letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: RD_CREAM,
        background: `${RD_INK}cc`, padding: '4px 8px', border: `1.5px solid ${RD_CREAM}`,
        borderRadius: 3,
      }}>● REC · {label}</div>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 36, height: 36, border: `1.5px solid ${RD_CREAM}88`, borderRadius: '50%',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: -8, right: -8, height: 1, background: `${RD_CREAM}88` }}></div>
        <div style={{ position: 'absolute', left: '50%', top: -8, bottom: -8, width: 1, background: `${RD_CREAM}88` }}></div>
      </div>
      {children}
    </div>
  );
}

// Compact lockup — small drone icon next to the wordmark word "Reading Drones"
function CompactLockup({ size = 22, ink = RD_INK }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.45 }}>
      <window.MavicHero treatment="comic" size={size * 2.2} outline={ink} accent={RD_ORANGE} />
      <div style={{
        fontFamily: '"Archivo Black", sans-serif', fontSize: size, lineHeight: 0.95,
        textTransform: 'uppercase', color: ink, letterSpacing: '0.01em',
      }}>
        <div>Reading</div>
        <div style={{ color: RD_ORANGE, WebkitTextStroke: `1.5px ${ink}`, paintOrder: 'stroke fill' }}>Drones</div>
      </div>
    </div>
  );
}

// Brand-glyph icon for social links. Renders the official path data
// from simple-icons (or the inline LinkedIn fallback) with the parent's
// fg color. Always set aria-hidden on the SVG; the wrapping <a> carries
// the accessible label.
function SocialIcon({ brand, size = 18, fg = RD_CREAM }) {
  const entry = SOCIAL[brand];
  if (!entry) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <title>{entry.label}</title>
      <path fill={fg} d={entry.icon.path} />
    </svg>
  );
}

Object.assign(window, {
  RD_INK, RD_CREAM, RD_PAPER, RD_YELLOW, RD_ORANGE, RD_TINT, RD_LED, RD_NAVY,
  HALFTONE, Icn, ICONS, SpeechBadge, BurstBadge, CCBButton, AerialPlaceholder, CompactLockup,
  SOCIAL, SocialIcon,
});
