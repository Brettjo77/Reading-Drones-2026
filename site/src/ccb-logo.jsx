import React from 'react'
// CCB1 — Reading Drones "Classic Comic Burst" logo
// Composition: yellow sunburst + Mavic 3/4 + READING/DRONES wordmark + tagline ribbon

const CCB_INK        = '#0d0d10';
const CCB_CREAM      = '#f4ede1';
const CCB_YELLOW     = '#fcd34d';
const CCB_ORANGE     = '#ef5a24';

function SunburstRays({ size = 900, rays = 24, rayColor = CCB_ORANGE, bg = CCB_YELLOW }) {
  const cx = size / 2, cy = size / 2;
  const r = size * 0.8;
  const paths = [];
  for (let i = 0; i < rays; i++) {
    const a1 = i / rays * Math.PI * 2 - Math.PI / 2 - Math.PI / rays * 0.25;
    const a2 = i / rays * Math.PI * 2 - Math.PI / 2 + Math.PI / rays * 0.25;
    const x1 = cx + Math.cos(a1) * r, y1 = cy + Math.sin(a1) * r;
    const x2 = cx + Math.cos(a2) * r, y2 = cy + Math.sin(a2) * r;
    paths.push(<path key={i} d={`M ${cx} ${cy} L ${x1} ${y1} L ${x2} ${y2} Z`} fill={rayColor} />);
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <rect width={size} height={size} fill={bg} />
      {paths}
    </svg>
  );
}

function CCBWordmark({ ink = CCB_INK, fill = CCB_CREAM, size = 88 }) {
  const apSize = size * 0.82;
  const apSW = Math.max(6, size * 0.11);
  const rowStyle = {
    fontFamily: '"Archivo Black", "Bungee", sans-serif',
    fontWeight: 900, fontSize: size,
    letterSpacing: '0.01em', lineHeight: 0.92,
    color: fill,
    WebkitTextStroke: `${Math.max(3, size * 0.055)}px ${ink}`,
    paintOrder: 'stroke fill',
    textTransform: 'uppercase',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textShadow: `0 ${Math.max(3, size * 0.05)}px 0 ${ink}`
  };

  const Aperture = () => {
    const cx = 50, cy = 50;
    const rOuter = 40;
    const rInner = 10;
    const blades = [];
    for (let i = 0; i < 6; i++) {
      const a1 = i / 6 * Math.PI * 2 - Math.PI / 2;
      const a2 = (i + 1) / 6 * Math.PI * 2 - Math.PI / 2;
      const aMid = (a1 + a2) / 2;
      blades.push(
        <path key={i}
          d={`M ${cx + Math.cos(aMid) * rInner} ${cy + Math.sin(aMid) * rInner}
              L ${cx + Math.cos(a1) * (rOuter - 4)} ${cy + Math.sin(a1) * (rOuter - 4)}
              L ${cx + Math.cos(a2) * (rOuter - 4)} ${cy + Math.sin(a2) * (rOuter - 4)} Z`}
          fill={CCB_ORANGE} stroke={ink} strokeWidth={3} strokeLinejoin="round" />
      );
    }
    return (
      <svg viewBox="0 0 100 100" width={apSize} height={apSize} style={{ display: 'block' }}>
        <circle cx={cx} cy={cy} r={rOuter + apSW / 2} fill={fill} stroke={ink} strokeWidth={apSW} />
        {blades}
        <circle cx={cx} cy={cy} r={4} fill={ink} />
      </svg>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.08 }}>
      <div style={rowStyle}>Reading</div>
      <div style={{ ...rowStyle, gap: size * 0.04 }}>
        <span>Dr</span>
        <span style={{ display: 'inline-flex', transform: `translateY(${size * 0.04}px)` }}><Aperture /></span>
        <span>nes</span>
      </div>
    </div>
  );
}

// Tagline: orange end-tails + black ink plate that auto-fits the entire text.
function CCBTagline({ ink = CCB_INK, fill = CCB_CREAM, size = 22, padding = 1.6, letterSpacing = 0.04, text = 'Photography & Videography' }) {
  const h = size * 2.1;
  const sideW = h * 0.55;
  const stroke = Math.max(2.5, size * 0.12);
  const innerStroke = Math.max(1, size * 0.055);
  const padX = size * padding;
  const tailNotch = sideW * 0.55;

  const Tail = ({ flip }) => (
    <svg viewBox={`0 0 ${sideW} ${h}`} width={sideW} height={h}
      preserveAspectRatio="none"
      style={{ display: 'block', flex: '0 0 auto', overflow: 'visible',
        transform: flip ? 'scaleX(-1)' : 'none' }}>
      <path d={`M 0 ${h * 0.15} L ${sideW * 0.55} ${h * 0.15}
                L ${sideW} ${h / 2} L ${sideW * 0.55} ${h * 0.85}
                L 0 ${h * 0.85} L ${sideW * 0.4} ${h / 2} Z`}
        fill={CCB_ORANGE} stroke={ink} strokeWidth={stroke} strokeLinejoin="round" />
    </svg>
  );

  const innerClip = `polygon(${tailNotch}px 50%, 0 0, 100% 0, calc(100% - ${tailNotch}px) 50%, 100% 100%, 0 100%)`;

  return (
    <div style={{
      position: 'relative', display: 'inline-flex', alignItems: 'stretch',
      filter: `drop-shadow(0 ${Math.max(3, size * 0.18)}px 0 ${ink})`,
      lineHeight: 1,
    }}>
      <Tail flip={false} />
      <div style={{
        position: 'relative', background: ink,
        clipPath: innerClip,
        padding: `${size * 0.25}px ${padX + tailNotch}px`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginLeft: -1, marginRight: -1,
      }}>
        <span aria-hidden="true" style={{
          position: 'absolute',
          top: size * 0.32, bottom: size * 0.32,
          left: tailNotch + size * 0.25, right: tailNotch + size * 0.25,
          border: `${innerStroke}px solid ${fill}`,
          opacity: 0.55, pointerEvents: 'none',
          clipPath: `polygon(${tailNotch * 0.5}px 50%, 0 0, 100% 0, calc(100% - ${tailNotch * 0.5}px) 50%, 100% 100%, 0 100%)`,
        }}></span>
        <span style={{
          fontFamily: '"Archivo Black", sans-serif', fontWeight: 900,
          fontSize: size, letterSpacing: `${letterSpacing}em`,
          textTransform: 'uppercase', color: fill,
          whiteSpace: 'nowrap', position: 'relative', zIndex: 1,
        }}>{text}</span>
      </div>
      <Tail flip={true} />
    </div>
  );
}

// CCB1 — full lockup. Pass `width` and `height`; everything inside scales accordingly.
function CCB1({ width = 680, height = 680, background = CCB_CREAM, mavicSize, wordmarkSize, taglineSize, showTagline = true }) {
  // Auto-scale defaults from height
  const ms = mavicSize ?? Math.round(height * 0.38);
  const ws = wordmarkSize ?? Math.round(height * 0.124);
  const ts = taglineSize ?? Math.round(height * 0.029);
  return (
    <div style={{ position: 'relative', width, height, background, overflow: 'hidden', borderRadius: 4 }}>
      <SunburstRays size={Math.max(width, height) * 1.4} rays={24} rayColor={CCB_ORANGE} bg={CCB_YELLOW} />
      <div style={{ position: 'absolute', top: '14%', left: '50%', transform: 'translate(-50%, 0)' }}>
        <window.MavicHero treatment="comic" size={ms} outline={CCB_INK} accent={CCB_ORANGE} />
      </div>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -40%)',
        width: '90%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: Math.round(height * 0.029),
      }}>
        <CCBWordmark size={ws} />
        {showTagline && <CCBTagline size={ts} />}
      </div>
    </div>
  );
}

Object.assign(window, { CCB1, CCBWordmark, CCBTagline, SunburstRays });
