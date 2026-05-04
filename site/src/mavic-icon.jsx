import React from 'react'
// Mavic 4 Pro — 3/4 hero icon. Three-lens gimbal turret is the signature detail.
// Treatments: 'solid' | 'line' | 'comic' | 'silhouette'

const MV_INK    = '#0d0d10';
const MV_BODY   = '#2a2a2e';
const MV_HI     = '#4a4a52';
const MV_ORANGE = '#ef5a24';
const MV_GLASS  = '#0a0a0c';
const MV_TINT   = '#2aa7c8';
const MV_LED    = '#3fe07a';

function mvColors(t, { body = MV_BODY, hi = MV_HI, outline = MV_INK } = {}) {
  const isLine = t === 'line', isSil = t === 'silhouette', isComic = t === 'comic';
  return {
    isLine, isSil, isComic,
    bodyFill: isSil ? MV_INK : (isLine ? 'none' : body),
    hiFill:   isSil || isLine ? 'none' : hi,
    stroke:   isSil ? 'none' : (isLine ? (body === MV_BODY ? MV_INK : body) : outline),
    sw:       isLine ? 2.4 : (isComic ? 4.2 : 3.2),
  };
}

function MavicHero({
  size = 240, treatment = 'comic',
  body = MV_BODY, bodyHi = MV_HI,
  outline = MV_INK, accent = MV_ORANGE, led = MV_LED,
  showLED = true,
}) {
  const C = mvColors(treatment, { body, hi: bodyHi, outline });
  const sw = C.sw;
  const bTL = [108, 94], bTR = [188, 88], bBR = [196, 128], bBL = [100, 134];
  const M = {
    BL: { cx: 32, cy: 46, r: 10 },
    BR: { cx: 250, cy: 38, r: 9 },
    FL: { cx: 60, cy: 102, r: 13 },
    FR: { cx: 222, cy: 96, r: 12 },
  };
  const A = {
    BL: [bTL[0] + 4, bTL[1] + 2],
    BR: [bTR[0] - 4, bTR[1] + 2],
    FL: [bBL[0] + 12, bBL[1] - 14],
    FR: [bBR[0] - 12, bBR[1] - 14],
  };

  return (
    <svg viewBox="0 0 280 200" width={size} height={size * 200 / 280} style={{ display: 'block' }}>
      {C.isComic && (
        <defs>
          <pattern id="mvHHT" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="0.95" fill={outline} opacity="0.55" />
          </pattern>
        </defs>
      )}

      {!C.isSil && Object.values(M).map((m, i) => (
        C.isLine
          ? <ellipse key={i} cx={m.cx} cy={m.cy - m.r/2} rx={m.r * 3.6} ry="4" stroke={C.stroke} strokeWidth={sw * 0.5} fill="none" opacity="0.55" />
          : <ellipse key={i} cx={m.cx} cy={m.cy - m.r/2} rx={m.r * 3.6} ry="4" fill={outline} opacity="0.22" />
      ))}

      <line x1={A.BL[0]} y1={A.BL[1]} x2={M.BL.cx + 4} y2={M.BL.cy + 4}
        stroke={C.isSil ? MV_INK : C.stroke} strokeWidth={sw * 1.8} strokeLinecap="round" />
      <line x1={A.BR[0]} y1={A.BR[1]} x2={M.BR.cx - 4} y2={M.BR.cy + 4}
        stroke={C.isSil ? MV_INK : C.stroke} strokeWidth={sw * 1.8} strokeLinecap="round" />

      <circle cx={M.BL.cx} cy={M.BL.cy} r={M.BL.r} fill={C.bodyFill} stroke={C.stroke} strokeWidth={sw} />
      {!C.isLine && !C.isSil && <circle cx={M.BL.cx} cy={M.BL.cy - 2} r={M.BL.r - 3} fill={C.hiFill} opacity="0.7" />}
      {showLED && !C.isSil && <circle cx={M.BL.cx + M.BL.r - 3} cy={M.BL.cy + 2} r="2" fill={led} />}

      <circle cx={M.BR.cx} cy={M.BR.cy} r={M.BR.r} fill={C.bodyFill} stroke={C.stroke} strokeWidth={sw} />
      {!C.isLine && !C.isSil && <circle cx={M.BR.cx} cy={M.BR.cy - 2} r={M.BR.r - 3} fill={C.hiFill} opacity="0.7" />}
      {showLED && !C.isSil && <circle cx={M.BR.cx - M.BR.r + 3} cy={M.BR.cy + 2} r="2" fill={led} />}

      <path d={`M ${bBL[0] + 18} ${bBL[1] - 4} L ${bBL[0] + 4} ${bBL[1] + 30} L ${bBL[0] - 6} ${bBL[1] + 34}`}
        stroke={C.isSil ? MV_INK : C.stroke} strokeWidth={sw + 2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M ${bBR[0] - 18} ${bBR[1] - 4} L ${bBR[0] - 4} ${bBR[1] + 30} L ${bBR[0] + 6} ${bBR[1] + 34}`}
        stroke={C.isSil ? MV_INK : C.stroke} strokeWidth={sw + 2} fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <path d={`M ${bTL[0]} ${bTL[1]} L ${bTR[0]} ${bTR[1]} L ${bBR[0]} ${bBR[1]} L ${bBL[0]} ${bBL[1]} Z`}
        fill={C.bodyFill} stroke={C.stroke} strokeWidth={sw} strokeLinejoin="round" />
      {!C.isLine && !C.isSil && (
        <path d={`M ${bTL[0] + 4} ${bTL[1] + 3} L ${bTR[0] - 4} ${bTR[1] + 3} L ${bTR[0] - 2} ${bTR[1] + 12} L ${bTL[0] + 2} ${bTL[1] + 14} Z`} fill={C.hiFill} opacity="0.85" />
      )}
      {C.isComic && <path d={`M ${bTL[0] + 4} ${bTL[1] + 18} L ${bTR[0] - 4} ${bTR[1] + 16} L ${bBR[0] - 6} ${bBR[1] - 4} L ${bBL[0] + 6} ${bBL[1] - 4} Z`} fill="url(#mvHHT)" opacity="0.65" />}

      <line x1={A.FL[0]} y1={A.FL[1]} x2={M.FL.cx + 8} y2={M.FL.cy + 2}
        stroke={C.isSil ? MV_INK : C.stroke} strokeWidth={sw * 2.2} strokeLinecap="round" />
      <line x1={A.FR[0]} y1={A.FR[1]} x2={M.FR.cx - 8} y2={M.FR.cy + 2}
        stroke={C.isSil ? MV_INK : C.stroke} strokeWidth={sw * 2.2} strokeLinecap="round" />
      {!C.isLine && !C.isSil && (
        <>
          <line x1={A.FL[0]} y1={A.FL[1] + 4} x2={M.FL.cx + 8} y2={M.FL.cy + 6} stroke={accent} strokeWidth="1.4" opacity="0.9" />
          <line x1={A.FR[0]} y1={A.FR[1] + 4} x2={M.FR.cx - 8} y2={M.FR.cy + 6} stroke={accent} strokeWidth="1.4" opacity="0.9" />
        </>
      )}

      <circle cx={M.FL.cx} cy={M.FL.cy} r={M.FL.r} fill={C.bodyFill} stroke={C.stroke} strokeWidth={sw} />
      {!C.isLine && !C.isSil && <circle cx={M.FL.cx} cy={M.FL.cy - 2} r={M.FL.r - 4} fill={C.hiFill} opacity="0.75" />}
      {showLED && !C.isSil && <circle cx={M.FL.cx + M.FL.r - 4} cy={M.FL.cy + 2} r="2.6" fill={led} />}

      <circle cx={M.FR.cx} cy={M.FR.cy} r={M.FR.r} fill={C.bodyFill} stroke={C.stroke} strokeWidth={sw} />
      {!C.isLine && !C.isSil && <circle cx={M.FR.cx} cy={M.FR.cy - 2} r={M.FR.r - 4} fill={C.hiFill} opacity="0.75" />}
      {showLED && !C.isSil && <circle cx={M.FR.cx - M.FR.r + 4} cy={M.FR.cy + 2} r="2.6" fill={led} />}

      {/* GIMBAL TURRET with 3-lens trefoil */}
      <g>
        <path d={`M 128 108 Q 122 138 138 152 L 166 152 Q 184 138 178 108 Z`}
          fill={C.bodyFill} stroke={C.stroke} strokeWidth={sw} strokeLinejoin="round" />
        {!C.isSil && !C.isLine && <rect x="130" y="113" width="44" height="1.8" fill={accent} opacity="0.95" />}

        <circle cx="153" cy="124" r="9" fill={C.isSil ? MV_INK : (C.isLine ? 'none' : MV_GLASS)} stroke={C.isSil ? 'none' : C.stroke} strokeWidth={C.isSil ? 0 : sw * 0.9} />
        {!C.isSil && <>
          <circle cx="153" cy="124" r="5.8" fill={C.isLine ? 'none' : outline} stroke={C.isLine ? C.stroke : 'none'} strokeWidth={C.isLine ? sw * 0.6 : 0} />
          <circle cx="153" cy="124" r="2.8" fill={MV_TINT} opacity="0.95" />
          <circle cx="151" cy="122" r="1.1" fill="#fff" opacity="0.95" />
        </>}

        {[[146, 143], [160, 143]].map(([lx, ly], i) => (
          <g key={i}>
            <circle cx={lx} cy={ly} r="4.5" fill={C.isSil ? MV_INK : (C.isLine ? 'none' : MV_GLASS)} stroke={C.isSil ? 'none' : C.stroke} strokeWidth={C.isSil ? 0 : sw * 0.75} />
            {!C.isSil && <>
              <circle cx={lx} cy={ly} r="2.7" fill={C.isLine ? 'none' : outline} stroke={C.isLine ? C.stroke : 'none'} strokeWidth={C.isLine ? sw * 0.5 : 0} />
              <circle cx={lx} cy={ly} r="1.2" fill={i === 0 ? MV_TINT : accent} opacity="0.9" />
            </>}
          </g>
        ))}
      </g>

      {!C.isLine && !C.isSil && <line x1={bBL[0] + 2} y1={bBL[1] - 2} x2={bBR[0] - 2} y2={bBR[1] - 2} stroke={accent} strokeWidth="1.4" opacity="0.9" />}
    </svg>
  );
}

Object.assign(window, { MavicHero });
