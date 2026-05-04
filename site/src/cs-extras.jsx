import React from 'react'
// Comic Studio — homepage Process section, FAQ accordion, Testimonials block

const CSEXTRAS = (() => {
  const { RD_INK, RD_CREAM, RD_PAPER, Icn, ICONS, SpeechBadge, BurstBadge, HALFTONE } = window;

  // ── Process — four-step strip for the home page
  function ProcessSection() {
    const steps = [
      { n: '01', t: 'Brief',      d: 'You send us the brief — we send back a quote within a working day.', ic: ICONS.mail },
      { n: '02', t: 'Plan',       d: 'CAA permissions, NOTAMs, weather, site visits — we sort the lot.',    ic: ICONS.cog  },
      { n: '03', t: 'Fly',        d: 'On the day: stress-free shoot. We bring backup kit, you bring the kettle.', ic: ICONS.drone },
      { n: '04', t: 'Deliver',    d: 'Edited stills + finished video, on time, with two free revisions.',     ic: ICONS.check },
    ];
    return (
      <section style={{ background: RD_CREAM, padding: '96px 48px', borderTop: `4px solid ${RD_INK}`, borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.06 }}></div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SpeechBadge size={14} color="var(--rd-accent)" rotate={-2}>★ The process ★</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 64, margin: '20px 0 8px', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
              Four steps. <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `2px ${RD_INK}`, paintOrder: 'stroke fill' }}>No drama.</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: RD_INK, opacity: 0.7, maxWidth: 560, margin: '12px auto 0', lineHeight: 1.5 }}>
              Most jobs move from first email to delivered files in under two weeks.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
            {/* Connector dashed line */}
            <div aria-hidden="true" style={{ position: 'absolute', top: 56, left: '12.5%', right: '12.5%', height: 4, background: `repeating-linear-gradient(90deg, ${RD_INK} 0 14px, transparent 14px 24px)`, zIndex: 0 }}></div>
            {steps.map((s, i) => (
              <div key={s.n} style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 112, height: 112, borderRadius: '50%',
                  background: i === 1 || i === 3 ? 'var(--rd-primary)' : 'var(--rd-accent)',
                  border: `4px solid ${RD_INK}`, boxShadow: `6px 6px 0 ${RD_INK}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                }}>
                  <Icn d={s.ic} size={40} sw={2.4} />
                  <div style={{ position: 'absolute', top: -10, left: -10, background: RD_CREAM, border: `3px solid ${RD_INK}`, borderRadius: 999, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Archivo Black", sans-serif', fontSize: 13 }}>{s.n}</div>
                </div>
                <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 24, margin: '20px 0 8px', textTransform: 'uppercase' }}>{s.t}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, color: RD_INK, opacity: 0.8, margin: 0, maxWidth: 240 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── FAQ accordion
  function FAQ() {
    const faqs = [
      { q: 'How far do you travel?', a: 'Free travel within 20 miles of Reading on Single Shoot, 30 miles on Standard, anywhere in the UK on Production Day. Outside that, mileage at HMRC rates plus accommodation if needed.' },
      { q: 'What about CAA permissions?', a: 'We hold A1/A3 and A2 CofC, and have an Operational Authorisation for restricted airspace. We sort NOTAMs, landowner permissions and risk assessments for every job — included in the quote.' },
      { q: 'Are you insured?', a: 'Yes. £5M public liability through Coverdrone, with a certificate available on request before the shoot.' },
      { q: 'Can I see raw footage?', a: 'Standard and Production Day packages include all raw 4K footage on a hand-off drive. Single Shoot includes edited stills only.' },
      { q: 'How quickly can you turn things around?', a: 'Single Shoot: 24 hours. Standard: five working days. Production Day: 7–10 days. Rush options available on every package — usually +£100.' },
      { q: 'Do you do indoor / FPV?', a: 'Yes — FPV cinewhoop work with the DJI Avata 2 is a specialism. Common briefs: hospitality, hotel walkthroughs, restaurant fly-throughs and short-form social.' },
      { q: 'What if the weather is rubbish?', a: 'We reschedule for free up to 2pm the day before, and on the day if conditions are unsafe. Most clients get one weather-related reschedule per project at no extra cost.' },
    ];
    const [open, setOpen] = React.useState(0);
    return (
      <section style={{ background: RD_PAPER, padding: '96px 48px', borderTop: `4px solid ${RD_INK}` }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <SpeechBadge size={14} color="var(--rd-primary)" rotate={-2}>★ Frequently asked ★</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '20px 0 8px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Quick answers.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  background: isOpen ? RD_CREAM : RD_PAPER,
                  border: `3px solid ${RD_INK}`, borderRadius: 12,
                  boxShadow: isOpen ? `6px 6px 0 var(--rd-accent)` : `4px 4px 0 ${RD_INK}`,
                  overflow: 'hidden', transition: 'all .2s ease',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer',
                    fontFamily: '"Archivo Black", sans-serif', fontSize: 18, color: RD_INK, textAlign: 'left',
                    textTransform: 'uppercase', letterSpacing: '0.02em',
                  }}>
                    <span>{f.q}</span>
                    <span style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: isOpen ? 'var(--rd-accent)' : 'var(--rd-primary)',
                      border: `2.5px solid ${RD_INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform .25s ease',
                      flexShrink: 0,
                    }}>
                      <Icn d="M12 5v14 M5 12h14" size={14} sw={3} />
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.65, color: RD_INK, opacity: 0.85 }}>
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // ── Testimonials
  function Testimonials() {
    const quotes = [
      { q: 'They sweated the small stuff and delivered a week ahead. The drone shots made the brochure.', who: 'Editorial Director · English Heritage', tag: 'Stonehenge series' },
      { q: 'Five emails, one shoot, finished video in my inbox the next morning. Pricing was clearer than any agency.', who: 'Marketing Lead · Riverside Hotel', tag: 'FPV walkthrough' },
      { q: 'Patient, organised, and the photos sold the house in three days. We use Reading Drones on every listing now.', who: 'Senior Agent · Caversham Estates', tag: 'Property listing' },
    ];
    return (
      <section style={{ background: 'var(--rd-primary)', padding: '96px 48px', borderTop: `4px solid ${RD_INK}`, borderBottom: `4px solid ${RD_INK}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: HALFTONE, opacity: 0.08 }}></div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SpeechBadge size={14} color={RD_CREAM} rotate={-2}>★★★★★ Five-star reviews</SpeechBadge>
            <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, margin: '20px 0 0', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Don't take <span style={{ color: 'var(--rd-accent)', WebkitTextStroke: `2px ${RD_INK}`, paintOrder: 'stroke fill' }}>our word for it.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {quotes.map((q, i) => (
              <div key={i} style={{
                background: RD_CREAM, border: `4px solid ${RD_INK}`, borderRadius: 14,
                padding: '32px 28px 28px', boxShadow: `8px 8px 0 ${RD_INK}`,
                transform: `rotate(${i === 1 ? 0 : (i === 0 ? -1 : 1)}deg)`,
                position: 'relative',
              }}>
                {/* Big quote mark */}
                <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 80, color: 'var(--rd-accent)', lineHeight: 0.6, position: 'absolute', top: 14, left: 18, opacity: 0.6 }}>"</div>
                <p style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 18, lineHeight: 1.4, margin: '40px 0 0', color: RD_INK, textTransform: 'uppercase', letterSpacing: '0.005em' }}>
                  {q.q}
                </p>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: `2px dashed ${RD_INK}33` }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: RD_INK }}>{q.who}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: RD_INK, opacity: 0.6, marginTop: 4 }}>{q.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return { ProcessSection, FAQ, Testimonials };
})();

window.CSEXTRAS = CSEXTRAS;
