import React from 'react'
// Comic Studio — Homepage with hero variations + inner pages

const CSPAGES = (() => {
  const { RD_INK, RD_CREAM, RD_PAPER, Icn, ICONS, SpeechBadge, BurstBadge, CCBButton, AerialPlaceholder, MavicHero, HALFTONE, SOCIAL, SocialIcon } = window;
  const SunburstRays = window.SunburstRays;
  const { LogoWall, SpecSheet, Storyboard, LocationsMap } = window.CSWIDGETS;

  // ── Hero variations
  function HeroA({ go }) {
    // Original — twin tilted photos + burst
    return (
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 720 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {SunburstRays ? <SunburstRays size={1700} rays={28} rayColor="var(--rd-accent)" bg="var(--rd-primary)" /> :
            <div style={{ width:'100%', height:'100%', background: 'var(--rd-primary)' }}></div>}
        </div>
        <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.12 }}></div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', padding: '64px 48px 88px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
          <div>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Reading · Berkshire ·</SpeechBadge>
            <h1 style={{
              fontFamily: '"Archivo Black", sans-serif', fontSize: 92, lineHeight: 0.88, margin: '24px 0 0',
              textTransform: 'uppercase', color: RD_INK, letterSpacing: '-0.01em',
              textShadow: `4px 4px 0 ${RD_CREAM}`,
            }}>
              Drone shots<br/>
              <span style={{ color: RD_CREAM, WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill', textShadow: 'none' }}>WITH POW!</span>
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.5, fontWeight: 500,
              color: RD_INK, maxWidth: 480, marginTop: 28,
              background: RD_CREAM, padding: 20, border: `3px solid ${RD_INK}`, borderRadius: 8,
              boxShadow: `6px 6px 0 ${RD_INK}`,
            }}>
              Aerial photography, video and FPV tours for the projects that need a little more <em>oomph</em>. Eight years of pro work. CAA-licensed. £5M insured. <strong>An eye for detail and a sense of fun.</strong>
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, alignItems: 'center' }}>
              <CCBButton primary size={16} onClick={() => go('services')}>See Services <Icn d={ICONS.arrow} size={18} /></CCBButton>
              <CCBButton size={16} onClick={() => go('contact')}>Get a Quote</CCBButton>
            </div>
          </div>
          <div className="cs-hero-stack" style={{ position: 'relative', height: 760 }}>
            {/* Comic-sticker frame: white "matt" border inside the ink outline,
                inner wrapper applies B&W so the sticker frame stays white. */}
            <div className="cs-hero-card cs-hero-card-1" style={{ position: 'absolute', right: 20, top: 20, width: 580, height: 440, background: '#fff', padding: 12, boxSizing: 'border-box', border: `4px solid ${RD_INK}`, borderRadius: 8, overflow: 'hidden', boxShadow: `12px 12px 0 ${RD_INK}`, transform: 'rotate(3deg)' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', filter: 'grayscale(1) contrast(1.05)' }}>
                <AerialPlaceholder src="/assets/photos/london-tower-bridge.jpg" label="Tower Bridge · London" eager />
              </div>
            </div>
            <div className="cs-hero-card cs-hero-card-2" style={{ position: 'absolute', left: -40, bottom: 30, width: 520, height: 360, background: '#fff', padding: 12, boxSizing: 'border-box', border: `4px solid ${RD_INK}`, borderRadius: 8, overflow: 'hidden', boxShadow: `12px 12px 0 ${RD_INK}`, transform: 'rotate(-4deg)' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', filter: 'grayscale(1) contrast(1.05)' }}>
                <AerialPlaceholder src="/assets/photos/stonehenge-misty-sunrise.jpg" label="Stonehenge · Wiltshire" />
              </div>
            </div>
            <div className="cs-hero-burst" style={{ position: 'absolute', right: -10, bottom: -10, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:contact@readingdrones.co.uk" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: RD_CREAM, border: `3px solid ${RD_INK}`, borderRadius: 10,
                padding: '10px 14px', boxShadow: `5px 5px 0 ${RD_INK}`,
                textDecoration: 'none', color: RD_INK,
                transform: 'rotate(-2deg)',
              }}>
                <div style={{ background: 'var(--rd-primary)', border: `2px solid ${RD_INK}`, borderRadius: 6, padding: 6, boxShadow: `2px 2px 0 ${RD_INK}`, flexShrink: 0 }}>
                  <Icn d={ICONS.mail} size={16} sw={2.4} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>Email</div>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 13 }}>contact@readingdrones.co.uk</div>
                </div>
              </a>
              <a href="tel:07801881403" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: RD_CREAM, border: `3px solid ${RD_INK}`, borderRadius: 10,
                padding: '10px 14px', boxShadow: `5px 5px 0 ${RD_INK}`,
                textDecoration: 'none', color: RD_INK,
                transform: 'rotate(2deg)',
              }}>
                <div style={{ background: 'var(--rd-primary)', border: `2px solid ${RD_INK}`, borderRadius: 6, padding: 6, boxShadow: `2px 2px 0 ${RD_INK}`, flexShrink: 0 }}>
                  <Icn d={ICONS.phone} size={16} sw={2.4} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>Phone</div>
                  <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 15 }}>07801 881403</div>
                </div>
              </a>
            </div>
            <div className="cs-hero-mavic" style={{ position: 'absolute', left: -30, top: -10, transform: 'rotate(-12deg)' }}>
              <MavicHero treatment="comic" size={150} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  function HeroB({ go }) {
    // Big full-bleed image hero, comic chrome on top
    return (
      <section style={{ position: 'relative', minHeight: 700, background: RD_INK, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <AerialPlaceholder tone="estate" label="Featured · 2026 reel" />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${RD_INK}33 0%, ${RD_INK}aa 100%)` }}></div>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.08 }}></div>
        </div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', padding: '120px 48px 96px', color: RD_CREAM }}>
          <SpeechBadge size={14} color="var(--rd-primary)" rotate={-3}>● Reading · Berkshire ·</SpeechBadge>
          <h1 style={{
            fontFamily: '"Archivo Black", sans-serif', fontSize: 124, lineHeight: 0.88, margin: '24px 0 0',
            textTransform: 'uppercase', letterSpacing: '-0.02em', maxWidth: 1100,
            textShadow: `5px 5px 0 ${RD_INK}`,
          }}>
            Aerial<br/>
            <span style={{ color: 'var(--rd-primary)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>STORYTELLING</span><br/>
            with pow.
          </h1>
          <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
            <CCBButton primary size={16} onClick={() => go('services')}>View Services <Icn d={ICONS.arrow} size={18} /></CCBButton>
            <a href={SOCIAL.youtube.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <CCBButton dark size={16}><Icn d={ICONS.play} size={16} sw={2.5}/> Watch Reel</CCBButton>
            </a>
          </div>
          <div style={{ position: 'absolute', right: 48, bottom: 80, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="mailto:contact@readingdrones.co.uk" style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: RD_CREAM, border: `3px solid ${RD_INK}`, borderRadius: 10,
              padding: '12px 16px', boxShadow: `5px 5px 0 ${RD_INK}`,
              textDecoration: 'none', color: RD_INK,
              transform: 'rotate(-2deg)',
            }}>
              <div style={{ background: 'var(--rd-primary)', border: `2px solid ${RD_INK}`, borderRadius: 6, padding: 7, boxShadow: `2px 2px 0 ${RD_INK}`, flexShrink: 0 }}>
                <Icn d={ICONS.mail} size={18} sw={2.4} />
              </div>
              <div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>Email</div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 14 }}>contact@readingdrones.co.uk</div>
              </div>
            </a>
            <a href="tel:07801881403" style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: RD_CREAM, border: `3px solid ${RD_INK}`, borderRadius: 10,
              padding: '12px 16px', boxShadow: `5px 5px 0 ${RD_INK}`,
              textDecoration: 'none', color: RD_INK,
              transform: 'rotate(2deg)',
            }}>
              <div style={{ background: 'var(--rd-primary)', border: `2px solid ${RD_INK}`, borderRadius: 6, padding: 7, boxShadow: `2px 2px 0 ${RD_INK}`, flexShrink: 0 }}>
                <Icn d={ICONS.phone} size={18} sw={2.4} />
              </div>
              <div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>Phone</div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 16 }}>07801 881403</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  function HeroC({ go }) {
    // Comic-strip 4-panel layout for the hero
    const panels = [
      { tone: 'estate', cap: 'Property' },
      { tone: 'venue',  cap: 'FPV Tour' },
      { tone: 'rooftop',cap: 'Inspections' },
      { tone: 'fields', cap: 'Estate Aerial' },
    ];
    return (
      <section style={{ position: 'relative', overflow: 'hidden', padding: '64px 48px 88px', background: 'var(--rd-primary)' }}>
        <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.12 }}></div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Comic-strip aerials</SpeechBadge>
            <h1 style={{
              fontFamily: '"Archivo Black", sans-serif', fontSize: 88, lineHeight: 0.9, margin: '24px 0 0',
              textTransform: 'uppercase', color: RD_INK, letterSpacing: '-0.01em',
            }}>
              Every project<br/>
              <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `3.5px ${RD_INK}`, paintOrder: 'stroke fill' }}>tells a story.</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.5, fontWeight: 500, color: RD_INK, maxWidth: 480, marginTop: 28, background: RD_CREAM, padding: 20, border: `3px solid ${RD_INK}`, borderRadius: 8, boxShadow: `6px 6px 0 ${RD_INK}` }}>
              Photography, video and FPV tours. Eight years pro. CAA-licensed. <strong>Eye for detail. Sense of fun.</strong>
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
              <CCBButton primary size={16} onClick={() => go('services')}>See Services <Icn d={ICONS.arrow} size={18} /></CCBButton>
              <CCBButton size={16} onClick={() => go('contact')}>Get a Quote</CCBButton>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {panels.map((p, i) => (
              <div key={i} style={{
                aspectRatio: '4/3', border: `4px solid ${RD_INK}`, borderRadius: 10,
                overflow: 'hidden', boxShadow: `6px 6px 0 ${RD_INK}`,
                transform: `rotate(${(i%2===0?-1:1) * 0.7}deg)`, position: 'relative',
              }}>
                <AerialPlaceholder tone={p.tone} label={p.cap} />
                <div style={{ position: 'absolute', bottom: 8, left: 8, background: RD_CREAM, color: RD_INK, padding: '4px 8px', border: `2px solid ${RD_INK}`, borderRadius: 4, fontFamily: '"Archivo Black", sans-serif', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{String(i+1).padStart(2,'0')} · {p.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Homepage = current Comic Studio + new bits + hero variants
  function HomePage({ go, heroVariant = 'A' }) {
    const Hero = heroVariant === 'B' ? HeroB : (heroVariant === 'C' ? HeroC : HeroA);
    const services = [
      { i: ICONS.camera, t: 'Aerial Photography', p: 'Quote', d: 'Up to 10 high-res images, RAW + JPEG.', color: 'var(--rd-primary)', tone: 'fields',  img: '/assets/photos/stonehenge-misty-sunrise.jpg' },
      { i: ICONS.film,   t: 'Aerial Video',        p: 'Quote', d: 'Raw 4K + a finished cut, music & colour grade.', color: 'var(--rd-accent)',  tone: 'estate',  img: '/assets/photos/reading-lakes-sunset.jpg' },
      { i: ICONS.fpv,    t: 'FPV Immersive Tours', p: 'Quote', d: 'Cinematic fly-throughs with the Avata 2.', color: 'var(--rd-tint)', tone: 'venue',   img: '/assets/photos/london-tower-bridge.jpg' },
      { i: ICONS.roof,   t: 'Roof & Inspections',  p: 'Quote', d: 'Aerial survey + a detailed photo report.', color: 'var(--rd-primary)', tone: 'rooftop', img: '/assets/photos/roof-inspection.jpg' },
      { i: ICONS.home,   t: 'Residential', p: 'Quote', d: 'Five edited images. Same kit, same care.', color: 'var(--rd-accent)',  tone: 'estate',  img: '/assets/photos/shinfield-residential-dusk.jpg' },
      { i: ICONS.clock,  t: 'Day Rates',           p: 'Quote', d: 'Half- or full-day. Unlimited shooting.', color: 'var(--rd-tint)', tone: 'site',    img: '/assets/photos/m4-resurfacing-night.jpg' },
    ];
    return (
      <div>
        <Hero go={go} />
        {/* trust strip */}
        <div style={{ background: RD_INK, color: RD_CREAM, padding: '14px 48px', borderTop: `3px solid ${RD_INK}` }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', fontFamily: '"Archivo Black", sans-serif', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span>★ CAA A2 Certified</span><span>★ £5M Public Liability (Coverdrone)</span><span>★ 8+ Years Professional</span><span>★ DJI Pro Fleet</span><span>★ Free Travel · 20mi</span>
          </div>
        </div>

        {/* Credentials — moved here from the Contact page so the proof sits
            immediately under the trust strip's headline tease. */}
        <section style={{ background: RD_CREAM, padding: '32px 48px', borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <SpeechBadge size={10} color="var(--rd-accent)" rotate={-2}>★ Licensed & insured ★</SpeechBadge>
              <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 28, margin: '10px 0 0', textTransform: 'uppercase', lineHeight: 0.95 }}>Credentials.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { src: '/assets/cert/caa-approved.png', t: 'CAA Approved', s: 'Permission for Commercial Operation', bg: '#1f3d7a' },
                { src: '/assets/cert/caa-a2.jpg',       t: 'A2 CofC', s: 'Open Category — A2 Sub-category', bg: '#fcd34d' },
                { src: '/assets/cert/caa-a1-a3.jpg',    t: 'A1 / A3', s: 'Open Category — A1 & A3', bg: '#e63946' },
                { src: '/assets/cert/coverdrone.webp',  t: 'Coverdrone', s: '£5M Public Liability', bg: RD_PAPER },
              ].map((c) => (
                <div key={c.t} style={{ background: RD_PAPER, border: `3px solid ${RD_INK}`, borderRadius: 8, overflow: 'hidden', boxShadow: `4px 4px 0 ${RD_INK}` }}>
                  <div style={{ background: c.bg, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, borderBottom: `3px solid ${RD_INK}` }}>
                    <img src={c.src} alt={c.t} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: '10px 12px' }}>
                    <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 13, margin: 0, textTransform: 'uppercase' }}>{c.t}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: RD_INK, opacity: 0.7, margin: '3px 0 0', lineHeight: 1.4 }}>{c.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoWall />

        {/* services */}
        <section style={{ background: RD_PAPER, padding: '96px 48px', position: 'relative', borderTop: `4px solid ${RD_INK}` }}>
          <div style={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%) rotate(-2deg)' }}>
            <SpeechBadge size={16} color="var(--rd-primary)">★ What we shoot ★</SpeechBadge>
          </div>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 72, margin: '32px 0 56px', lineHeight: 0.92, textTransform: 'uppercase', textAlign: 'center', letterSpacing: '-0.01em' }}>
              What we <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `2px ${RD_INK}`, paintOrder: 'stroke fill' }}>shoot.</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              {services.map((s, i) => (
                <div
                  key={s.t}
                  className="cs-svc"
                  role="link"
                  tabIndex={0}
                  aria-label={`${s.t} \u2014 see services`}
                  onClick={() => go('services')}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('services'); } }}
                  style={{
                  background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 12,
                  boxShadow: `8px 8px 0 ${RD_INK}`, overflow: 'hidden', cursor: 'pointer',
                  transform: i % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                  transition: 'transform .2s, box-shadow .2s',
                }}>
                  <div style={{ height: 140, position: 'relative', borderBottom: `4px solid ${RD_INK}` }}>
                    <AerialPlaceholder src={s.img} tone={s.tone} label={s.t} />
                  </div>
                  <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ background: s.color, border: `2.5px solid ${RD_INK}`, borderRadius: 8, padding: 8, boxShadow: `3px 3px 0 ${RD_INK}` }}>
                        <Icn d={s.i} size={20} sw={2.2} />
                      </div>
                      <SpeechBadge size={13} color={RD_CREAM}>{s.p}</SpeechBadge>
                    </div>
                    <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 22, margin: '6px 0 0', textTransform: 'uppercase' }}>{s.t}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.5, margin: 0, color: RD_INK, opacity: 0.85 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process — single section. The old Storyboard ("From brief to delivery")
            duplicated this; collapsed into ProcessSection with richer copy. */}
        {window.CSEXTRAS && <window.CSEXTRAS.ProcessSection />}
        <SpecSheet />
        {window.CSEXTRAS && <window.CSEXTRAS.Testimonials />}
        <LocationsMap />

        {/* Follow the flying — social band */}
        <section style={{
          background: RD_CREAM,
          padding: '48px 48px',
          borderTop: `4px solid ${RD_INK}`,
          borderBottom: `4px solid ${RD_INK}`,
        }}>
          <div style={{
            maxWidth: 1100, margin: '0 auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
          }}>
            <SpeechBadge size={13} color="var(--rd-primary)" rotate={-2}>● Follow the flying</SpeechBadge>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
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
                    width: 48, height: 48, borderRadius: 12,
                    border: `2.5px solid ${RD_INK}`,
                    background: 'var(--rd-primary)',
                    boxShadow: `4px 4px 0 ${RD_INK}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', cursor: 'pointer',
                    transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
                  }}
                >
                  <SocialIcon brand={s.key} size={22} fg={RD_INK} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: RD_INK, color: RD_CREAM, padding: '96px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.08 }}></div>
          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <BurstBadge size={120} rotate={-8}>Let's<br/>fly!</BurstBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 92, margin: '28px 0 24px', lineHeight: 0.92, textTransform: 'uppercase' }}>
              Got a project?<br/><span style={{ color: 'var(--rd-primary)' }}>Tell us about it.</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, opacity: 0.85, maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.5 }}>
              Clear brief or rough idea — we'll talk it through and send a no-obligation quote.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <CCBButton primary size={16} onClick={() => go('contact')}><Icn d={ICONS.mail} size={18} /> Get a Quote</CCBButton>
              <CCBButton size={16} href="tel:07801881403"><Icn d={ICONS.phone} size={18} /> 07801 881403</CCBButton>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── Services detail page
  function ServicesPage({ go }) {
    const services = [
      { i: ICONS.camera, t: 'Aerial Photography', p: 'Bespoke quote',
        bullets: ['Up to 10 high-res images', 'RAW + JPEG delivery', 'Editing + colour grading', 'Travel within 20 miles'],
        copy: "Property, construction progress, events. We shoot until you've got the angle, then deliver edited stills within 7 days.",
        tone: 'fields', img: '/assets/photos/stonehenge-pink-dawn.jpg' },
      { i: ICONS.film, t: 'Aerial Video', p: 'Bespoke quote',
        bullets: ['Raw 4K footage', 'Finished cut with music', 'Colour grade + LUT', 'Subtitles & graphics on request'],
        copy: 'A finished film, not just clips. Suitable for marketing, social, brand reels and case studies.',
        tone: 'estate', img: '/assets/photos/reading-lakes-sunset.jpg' },
      { i: ICONS.fpv, t: 'FPV Immersive Tours', p: 'Bespoke quote',
        bullets: ['Cinematic fly-through', 'Indoor + outdoor capable', 'Avata 2 cinewhoop', 'Edit + soundtrack'],
        copy: 'A first-person camera move that walks viewers through a venue, restaurant or property in one continuous take.',
        tone: 'venue', img: '/assets/photos/london-tower-bridge.jpg' },
      { i: ICONS.roof, t: 'Roof & Inspections', p: 'Bespoke quote',
        bullets: ['Comprehensive aerial survey', 'Detailed photo report', 'Annotated findings', 'Faster than scaffolding'],
        copy: "Roof, gutters, chimney, structure — high-resolution survey delivered as an actionable photographic report.",
        tone: 'rooftop', img: '/assets/photos/roof-inspection.jpg' },
      { i: ICONS.home, t: 'Residential Property', p: 'Bespoke quote',
        bullets: ['Five beautifully edited images', 'Same kit as commercial', '24-hour delivery', 'Estate-agent friendly'],
        copy: 'Designed for estate agents and homeowners. Same standards as our commercial work, scoped for a single home.',
        tone: 'estate', img: '/assets/photos/shinfield-residential-dusk.jpg' },
      { i: ICONS.clock, t: 'Day Rates', p: 'Bespoke quote',
        bullets: ['Half-day = 4 hours', 'Full-day = 8 hours', 'Unlimited shooting', 'Multiple locations'],
        copy: 'Best value for events, multi-location shoots and full production days. Half- and full-day options.',
        tone: 'site', img: '/assets/photos/m4-resurfacing-night.jpg' },
    ];

    return (
      <div>
        {/* Page hero */}
        <section style={{ background: 'var(--rd-primary)', padding: '80px 48px 64px', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.1 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'end' }}>
            <div>
              <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● 01 — What we shoot</SpeechBadge>
              <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 88, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.01em' }}>
                Six things<br/>we shoot.<br/>
                <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `3.5px ${RD_INK}`, paintOrder: 'stroke fill' }}>One studio.</span>
              </h1>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.55, color: RD_INK, margin: 0, maxWidth: 380, background: RD_CREAM, padding: 18, border: `3px solid ${RD_INK}`, borderRadius: 8, boxShadow: `5px 5px 0 ${RD_INK}` }}>
              Every quote includes consultation, planning, flight permissions and travel within 20 miles of Reading. Send the brief — we'll come back within a working day.
            </p>
          </div>
        </section>

        {/* alternating service rows */}
        {services.map((s, i) => (
          <section key={s.t} style={{ background: i % 2 === 0 ? RD_CREAM : RD_PAPER, padding: '80px 48px', borderBottom: `2px solid ${RD_INK}22` }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', border: `4px solid ${RD_INK}`, borderRadius: 10, overflow: 'hidden', boxShadow: `10px 10px 0 ${RD_INK}`, transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}>
                  <AerialPlaceholder src={s.img} tone={s.tone} label={s.t} />
                </div>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ background: 'var(--rd-primary)', border: `2.5px solid ${RD_INK}`, borderRadius: 10, padding: 10, boxShadow: `3px 3px 0 ${RD_INK}` }}>
                    <Icn d={s.i} size={22} sw={2.2} />
                  </div>
                  <span style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 13, color: RD_INK, opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{`Service 0${i+1}`}</span>
                </div>
                <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '0 0 12px', textTransform: 'uppercase', lineHeight: 0.92 }}>{s.t}</h2>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 22, color: 'var(--rd-accent)', WebkitTextStroke: `1.5px ${RD_INK}`, paintOrder: 'stroke fill', marginBottom: 18 }}>Get a quote →</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.6, color: RD_INK, opacity: 0.82, margin: '0 0 24px', maxWidth: 540 }}>{s.copy}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {s.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--rd-primary)', border: `2px solid ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icn d={ICONS.check} size={12} sw={2.8} />
                      </div>{b}
                    </li>
                  ))}
                </ul>
                <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
                  <CCBButton primary size={14}>Quote this service <Icn d={ICONS.arrow} size={15} /></CCBButton>
                </span>
              </div>
            </div>
          </section>
        ))}

        {window.CSEXTRAS && <window.CSEXTRAS.FAQ />}

        {/* CTA */}
        <section style={{ background: RD_INK, color: RD_CREAM, padding: '80px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.08 }}></div>
          <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: 0, textTransform: 'uppercase', lineHeight: 0.92 }}>
              Need something <span style={{ color: 'var(--rd-primary)' }}>else?</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, opacity: 0.85, margin: '20px auto 28px', maxWidth: 480 }}>Mapping, surveying, full-production days, multi-day jobs — happy to scope a custom quote.</p>
            <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
              <CCBButton primary size={16}>Start a Conversation <Icn d={ICONS.arrow} size={18} /></CCBButton>
            </span>
          </div>
        </section>
      </div>
    );
  }

  // ── Contact / quote form
  function ContactPage({ go }) {
    const [vals, setVals] = React.useState({ name: '', email: '', phone: '', brief: '', botcheck: '' });
    const [sent, setSent] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);
    const [error, setError] = React.useState('');
    const [status, setStatus] = React.useState('');
    const set = (k) => (e) => setVals(v => ({ ...v, [k]: e.target.value }));

    const submit = async (e) => {
      e.preventDefault();
      // Real honeypot — if a bot filled the hidden field, silently “succeed”.
      if (vals.botcheck) { setSent(true); return; }
      setSubmitting(true);
      setError('');
      setStatus('Sending…');
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: 'a4699427-caf1-4493-b58c-5667fb23e40c',
            from_name: 'Reading Drones website',
            subject: `Quote request from ${vals.name || 'unknown'}`,
            name: vals.name,
            email: vals.email,
            phone: vals.phone,
            brief: vals.brief,
            botcheck: vals.botcheck,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setSent(true);
          setStatus('Message sent. We’ll reply within one working day.');
        } else {
          setError(data.message || 'Something went wrong. Please email us directly.');
          setStatus('There was a problem sending the form.');
        }
      } catch (err) {
        setError('Network error. Please email contact@readingdrones.co.uk directly.');
        setStatus('Network error — please email us instead.');
      } finally {
        setSubmitting(false);
      }
    };
    return (
      <div>
        <section style={{ background: 'var(--rd-primary)', padding: '64px 48px', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.1 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto' }}>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Quote · No obligation</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.88 }}>
              Tell us about<br/>
              <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>your project.</span>
            </h1>
          </div>
        </section>
        <section style={{ background: RD_CREAM, padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56 }}>
            {/* form */}
            <div style={{ background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 14, boxShadow: `10px 10px 0 var(--rd-primary)`, padding: 36 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <BurstBadge size={120} rotate={-6}>Got it!</BurstBadge>
                  <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 36, margin: '24px 0 12px', textTransform: 'uppercase' }}>Thanks, {vals.name.split(' ')[0] || 'pal'}!</h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: RD_INK, opacity: 0.78, maxWidth: 380, margin: '0 auto' }}>
                    We'll reply within one working day. If it's urgent, give us a ring on 07801 881403.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 32, margin: '0 0 8px', textTransform: 'uppercase' }}>Get a Quote</h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK, opacity: 0.7, margin: '0 0 24px' }}>Quick form. We'll reply within a working day.</p>
                  {/* Real honeypot — hidden from sighted + AT users; bots tend to fill every field. */}
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={vals.botcheck}
                    onChange={set('botcheck')}
                    style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
                  />
                  {[['name','Your name','text', true],['email','Email','email', true],['phone','Phone (optional)','tel', false]].map(([k,l,t,req]) => (
                    <label key={k} style={{ display: 'block', marginBottom: 16 }}>
                      <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{l}{req ? ' *' : ''}</div>
                      <input required={req} type={t} value={vals[k]} onChange={set(k)} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'tel'} style={{
                        width: '100%', boxSizing: 'border-box',
                        padding: '14px 16px', border: `2.5px solid ${RD_INK}`, borderRadius: 10,
                        background: RD_CREAM, fontFamily: 'Inter, sans-serif', fontSize: 16, color: RD_INK,
                        boxShadow: `inset 0 -3px 0 ${RD_INK}11`,
                      }}/>
                    </label>
                  ))}
                  <label style={{ display: 'block', marginBottom: 20 }}>
                    <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Brief / description</div>
                    <textarea required rows={5} value={vals.brief} onChange={set('brief')} placeholder="What are you shooting? Where? Any timing in mind?" style={{
                      width: '100%', boxSizing: 'border-box',
                      padding: '14px 16px', border: `2.5px solid ${RD_INK}`, borderRadius: 10,
                      background: RD_CREAM, fontFamily: 'Inter, sans-serif', fontSize: 15, color: RD_INK, resize: 'vertical',
                    }}/>
                  </label>
                  {error && (
                    <div role="alert" style={{
                      background: '#ffe5e0', border: `2.5px solid ${RD_INK}`, borderRadius: 8,
                      padding: '12px 16px', marginBottom: 16,
                      fontFamily: 'Inter, sans-serif', fontSize: 14, color: RD_INK,
                    }}>{error}</div>
                  )}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: RD_INK, opacity: 0.65, lineHeight: 1.5, margin: '0 0 16px' }}>
                    We use the details you submit only to reply to your enquiry. See our <a href="?p=privacy" onClick={(e) => { e.preventDefault(); go('privacy'); }} style={{ color: RD_INK, textDecoration: 'underline' }}>privacy policy</a>.
                  </p>
                  {/* Live region announces send/error state to AT */}
                  <div aria-live="polite" role="status" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>{status}</div>
                  <button type="submit" disabled={submitting} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '16px 28px', background: submitting ? RD_PAPER : 'var(--rd-accent)', color: RD_INK,
                    border: `3px solid ${RD_INK}`, borderRadius: 12,
                    fontFamily: '"Archivo Black", sans-serif', textTransform: 'uppercase',
                    fontSize: 16, letterSpacing: '0.04em',
                    boxShadow: `0 6px 0 ${RD_INK}`, cursor: submitting ? 'wait' : 'pointer',
                    opacity: submitting ? 0.7 : 1,
                  }}>{submitting ? 'Sending…' : 'Send it!'} <Icn d={ICONS.arrow} size={18} /></button>
                </form>
              )}
            </div>
            {/* sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                [ICONS.mail, 'Email', 'contact@readingdrones.co.uk'],
                [ICONS.phone, 'Phone', '07801 881403'],
                [ICONS.pin, 'Studio', 'Reading, Berkshire'],
                [ICONS.clock, 'Hours', 'Mon–Sat · 8am–7pm'],
              ].map(([ic, l, v]) => (
                <div key={l} style={{ background: RD_PAPER, border: `3px solid ${RD_INK}`, borderRadius: 10, boxShadow: `5px 5px 0 var(--rd-primary)`, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: 'var(--rd-primary)', border: `2.5px solid ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `2px 2px 0 ${RD_INK}` }}>
                    <Icn d={ic} size={20} sw={2.2}/>
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>{l}</div>
                    <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 16, marginTop: 2 }}>{v}</div>
                  </div>
                </div>
              ))}
              <div style={{ background: RD_INK, color: RD_CREAM, border: `3px solid ${RD_INK}`, borderRadius: 10, padding: 20, boxShadow: `5px 5px 0 var(--rd-accent)` }}>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, color: 'var(--rd-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Follow the flying</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {Object.values(SOCIAL).map((s) => (
                    <a
                      key={s.key}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Reading Drones on ${s.label}`}
                      title={s.label}
                      className="rd-social-tile-dark"
                      style={{
                        width: 40, height: 40, borderRadius: 8,
                        border: `2.5px solid ${RD_CREAM}`,
                        background: 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        textDecoration: 'none', cursor: 'pointer',
                        transition: 'transform .15s ease, background .15s ease',
                      }}
                    >
                      <SocialIcon brand={s.key} size={18} fg={RD_CREAM} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the studio */}
        <section style={{ background: RD_PAPER, padding: '80px 48px', borderTop: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.06 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <SpeechBadge size={14} color="var(--rd-primary)" rotate={-3}>● The studio</SpeechBadge>
              <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 72, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.92, letterSpacing: '-0.01em' }}>
                Hi — we're<br/><span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `3px ${RD_INK}`, paintOrder: 'stroke fill' }}>Reading Drones.</span>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.65, color: RD_INK, opacity: 0.85, margin: '20px 0 14px', maxWidth: 540 }}>
                A small Berkshire-based studio specialising in aerial photography and video. CAA-licensed, £5M insured, eight years in. We work directly with our clients — no account managers, no farming out.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.65, color: RD_INK, opacity: 0.85, margin: 0, maxWidth: 540 }}>
                Reading Drones started in 2018 with a single Mavic and a stubborn belief that aerial photography in the UK could be friendlier and a lot more fun. Eight years and several hundred shoots later, we've got a small but properly stocked fleet, a client list across Berkshire and Oxfordshire, and a reputation for doing the job carefully — and on time.
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5', border: `4px solid ${RD_INK}`, borderRadius: 14, overflow: 'hidden', boxShadow: `12px 12px 0 var(--rd-primary)`, transform: 'rotate(2deg)' }}>
              <AerialPlaceholder src="/assets/photos/brett-pilot.jpg" label="Pilot · Reading, Berks" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: 'var(--rd-primary)', padding: '64px 48px', borderTop: `4px solid ${RD_INK}`, borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[['8+','Years pro'],['400+','Projects flown'],['£5M','Public liability'],['20mi','Free travel']].map(([k,v]) => (
              <div key={k} style={{ background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 12, padding: '24px 20px', textAlign: 'center', boxShadow: `6px 6px 0 ${RD_INK}` }}>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, lineHeight: 1, color: 'var(--rd-accent)', WebkitTextStroke: `2px ${RD_INK}`, paintOrder: 'stroke fill' }}>{k}</div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials block was here — moved to HomePage (under trust strip). */}
      </div>
    );
  }

  // ── About / Studio page
  function AboutPage({ go }) {
    return (
      <div>
        <section style={{ background: RD_CREAM, padding: '80px 48px', borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.08 }}></div>
          <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <SpeechBadge size={14} color="var(--rd-primary)" rotate={-3}>● The studio</SpeechBadge>
              <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 96, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.01em' }}>
                Hi — we're<br/><span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>Reading Drones.</span>
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.6, color: RD_INK, opacity: 0.85, margin: '24px 0 0', maxWidth: 540 }}>
                A small Berkshire-based studio specialising in aerial photography and video. CAA-licensed, £5M insured, eight years in. We work directly with our clients — no account managers, no farming out.
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5', border: `4px solid ${RD_INK}`, borderRadius: 14, overflow: 'hidden', boxShadow: `12px 12px 0 var(--rd-primary)`, transform: 'rotate(2deg)' }}>
              <AerialPlaceholder src="/assets/photos/brett-pilot.jpg" label="Pilot · Reading, Berks" />
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ background: RD_PAPER, padding: '80px 48px', borderBottom: `2px solid ${RD_INK}22` }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 48, margin: '0 0 24px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              How we got <span style={{ color: 'var(--rd-accent)' }}>started.</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: RD_INK, opacity: 0.88, margin: '0 0 18px' }}>
              Reading Drones started in 2018 with a single Mavic and a stubborn belief that aerial photography in the UK could be friendlier and a lot more fun. Eight years and several hundred shoots later, we've got a small but properly stocked fleet, a client list across Berkshire and Oxfordshire, and a reputation for doing the job carefully — and on time.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: RD_INK, opacity: 0.88, margin: 0 }}>
              We work with estate agents, surveyors, hospitality, construction, sports clubs and creative agencies. Most jobs are within an hour of Reading; we travel further when the brief asks for it.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: 'var(--rd-primary)', padding: '64px 48px', borderTop: `4px solid ${RD_INK}`, borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[['8+','Years pro'],['400+','Projects flown'],['£5M','Public liability'],['20mi','Free travel']].map(([k,v]) => (
              <div key={k} style={{ background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 12, padding: '24px 20px', textAlign: 'center', boxShadow: `6px 6px 0 ${RD_INK}` }}>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, lineHeight: 1, color: 'var(--rd-accent)', WebkitTextStroke: `2px ${RD_INK}`, paintOrder: 'stroke fill' }}>{k}</div>
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section style={{ background: RD_CREAM, padding: '80px 48px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <SpeechBadge size={12} color="var(--rd-accent)" rotate={-2}>★ Licensed & insured ★</SpeechBadge>
              <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 48, margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.95 }}>Credentials.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
              {[
                { src: '/assets/cert/caa-approved.png', t: 'CAA Approved', s: 'Permission for Commercial Operation', bg: '#1f3d7a' },
                { src: '/assets/cert/caa-a2.jpg',       t: 'A2 CofC', s: 'Open Category — A2 Sub-category', bg: '#fcd34d' },
                { src: '/assets/cert/caa-a1-a3.jpg',    t: 'A1 / A3', s: 'Open Category — A1 & A3', bg: '#e63946' },
                { src: '/assets/cert/coverdrone.webp',  t: 'Coverdrone', s: '£5M Public Liability', bg: RD_PAPER },
              ].map((c) => (
                <div key={c.t} style={{ background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 12, overflow: 'hidden', boxShadow: `6px 6px 0 ${RD_INK}` }}>
                  <div style={{ background: c.bg, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, borderBottom: `4px solid ${RD_INK}` }}>
                    <img src={c.src} alt={c.t} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 18, margin: 0, textTransform: 'uppercase' }}>{c.t}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: RD_INK, opacity: 0.7, margin: '6px 0 0', lineHeight: 1.45 }}>{c.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: RD_INK, color: RD_CREAM, padding: '80px 48px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: 0, textTransform: 'uppercase', lineHeight: 0.92 }}>
            Want to <span style={{ color: 'var(--rd-primary)' }}>fly with us?</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, opacity: 0.85, margin: '20px auto 28px', maxWidth: 480 }}>Most projects start with a 10-minute call. No commitment, no hard sell.</p>
          <span onClick={() => go('contact')} style={{ display: 'inline-block' }}>
            <CCBButton primary size={16}>Get in Touch <Icn d={ICONS.arrow} size={18} /></CCBButton>
          </span>
        </section>
      </div>
    );
  }

  // ── Portfolio shell — minimal placeholder so nav works
  function PortfolioPage({ go }) {
    const projects = [
      { tone: 'estate', t: 'Caversham Manor', s: 'Property · Stills + Video', y: '2026' },
      { tone: 'venue',  t: 'Riverside Hotel', s: 'FPV Tour', y: '2026' },
      { tone: 'site',   t: 'Reading West', s: 'Construction · 12-month', y: '2025' },
      { tone: 'rooftop',t: 'Wokingham House', s: 'Roof Survey', y: '2025' },
      { tone: 'fields', t: 'Sonning Estate', s: 'Estate Aerials', y: '2025' },
      { tone: 'sport',  t: 'Bracknell FC', s: 'Match-day Reel', y: '2024' },
    ];
    return (
      <div>
        <section style={{ background: 'var(--rd-primary)', padding: '64px 48px', borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Selected work</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 92, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.9 }}>
              Recent <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `4px ${RD_INK}`, paintOrder: 'stroke fill' }}>adventures.</span>
            </h1>
          </div>
        </section>
        <section style={{ background: RD_CREAM, padding: '64px 48px' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 12, overflow: 'hidden', boxShadow: `8px 8px 0 ${RD_INK}`, transform: `rotate(${(i%2===0?-1:1)*0.5}deg)`, cursor: 'pointer' }}>
                <div style={{ aspectRatio: '4/3', borderBottom: `4px solid ${RD_INK}` }}>
                  <AerialPlaceholder tone={p.tone} label={p.t} />
                </div>
                <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 20, margin: 0, textTransform: 'uppercase' }}>{p.t}</h3>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: RD_INK, opacity: 0.65, marginTop: 4 }}>{p.s}</div>
                  </div>
                  <SpeechBadge size={11} color="var(--rd-primary)">{p.y}</SpeechBadge>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ── Privacy policy stub (UK GDPR-friendly boilerplate; owner can edit)
  function PrivacyPage({ go }) {
    const sec = (t, body) => (
      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 22, margin: '0 0 10px', textTransform: 'uppercase' }}>{t}</h2>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: RD_INK, opacity: 0.85 }}>{body}</div>
      </section>
    );
    return (
      <div>
        <section style={{ background: 'var(--rd-primary)', padding: '64px 48px', borderBottom: `4px solid ${RD_INK}` }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-3}>● Privacy</SpeechBadge>
            <h1 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 72, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.92 }}>
              Privacy <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `3px ${RD_INK}`, paintOrder: 'stroke fill' }}>Policy.</span>
            </h1>
          </div>
        </section>
        <section style={{ background: RD_CREAM, padding: '64px 48px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', background: RD_PAPER, border: `4px solid ${RD_INK}`, borderRadius: 12, boxShadow: `8px 8px 0 var(--rd-primary)`, padding: 36 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, opacity: 0.7, margin: '0 0 24px' }}>Last updated: May 2026.</p>
            {sec('Who we are', <p>Reading Drones is a small aerial photography and video studio based in Reading, Berkshire, United Kingdom. We are the data controller for the personal data described in this policy. Contact: <a href="mailto:contact@readingdrones.co.uk" style={{ color: RD_INK }}>contact@readingdrones.co.uk</a>.</p>)}
            {sec('What we collect', <p>When you submit the quote form we collect the name, email address, optional phone number, and project brief that you provide. Our website does not set marketing or analytics cookies.</p>)}
            {sec('Why we use it', <p>To reply to your enquiry and, if you become a client, to deliver the work and keep records required by HMRC. We do not sell your data, and we do not use it for marketing without your consent.</p>)}
            {sec('Lawful basis', <p>For enquiries: legitimate interest (responding to a request you initiated). For ongoing client work: performance of a contract. For accounting records: legal obligation.</p>)}
            {sec('Footage and likenesses', <p>If we capture footage of identifiable individuals on a commissioned shoot, the commissioning client is responsible for obtaining any needed consents from people in the frame. We retain raw footage for up to 12 months unless otherwise agreed.</p>)}
            {sec('Sharing', <p>The contact form is delivered via Web3Forms, which forwards your message to our inbox. Email is hosted by our domain provider. We do not share enquiry data with anyone else.</p>)}
            {sec('Retention', <p>Enquiry messages are kept for up to 24 months and then deleted. Client invoices and contracts are kept for 6 years to comply with UK tax rules.</p>)}
            {sec('Your rights', <p>You can ask us to access, correct, or delete your personal data, or to stop processing it, by emailing the address above. You can also complain to the Information Commissioner&rsquo;s Office (ico.org.uk).</p>)}
            {sec('CAA', <p>We operate under UK Civil Aviation Authority rules with an A2 Certificate of Competency and a registered Operator ID. Flights involving people or property are recorded in our flight log alongside any required risk assessment.</p>)}
            <div style={{ marginTop: 24, paddingTop: 18, borderTop: `2px solid ${RD_INK}22` }}>
              <a href="?p=contact" onClick={(e) => { e.preventDefault(); go('contact'); }} style={{ color: RD_INK, fontFamily: '"Archivo Black", sans-serif', textTransform: 'uppercase', fontSize: 13 }}>&larr; Back to contact</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return { HomePage, ServicesPage, ContactPage, AboutPage, PortfolioPage, PrivacyPage, SOCIAL };
})();

window.CSPAGES = CSPAGES;
