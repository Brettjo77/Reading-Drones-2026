import React from 'react'
// Comic Studio — full site app: chrome + router + pages

const CSAPP = (() => {
  const { CSNav, CSFooter, SiteTweaks, useRoute, ScrollDrone, applyPalette, TWEAK_DEFAULTS } = window.SITE;
  const { HomePage, ServicesPage, ContactPage, AboutPage, PortfolioPage, PrivacyPage } = window.CSPAGES;
  const { RD_INK } = window;
  // New pages (loaded after CSPAGES)
  const PortfolioPage2 = window.CSPAGES2 && window.CSPAGES2.PortfolioPage;
  const PricingPage    = window.CSPAGES2 && window.CSPAGES2.PricingPage;
  const CaseStudyPage  = window.CSPAGES2 && window.CSPAGES2.CaseStudyPage;
  const VideosPage     = window.CSPAGES2 && window.CSPAGES2.VideosPage;

  function Site({ heroVariant = 'A' }) {
    const [route, go] = useRoute();
    const scrollerRef = React.useRef(null);
    const [enableDrone, setEnableDrone] = React.useState(true);

    // Initialise palette CSS vars on mount
    React.useEffect(() => { applyPalette(TWEAK_DEFAULTS.palette); }, []);

    // Watch tweak persistence to flip the drone on/off
    React.useEffect(() => {
      const handler = (e) => {
        const d = e.data || {};
        if (d.type === '__edit_mode_set_keys' && d.edits && 'showDroneOnScroll' in d.edits) {
          setEnableDrone(!!d.edits.showDroneOnScroll);
        }
      };
      window.addEventListener('message', handler);
      return () => window.removeEventListener('message', handler);
    }, []);

    let body;
    if (route === 'services') body = <ServicesPage go={go} />;
    else if (route === 'about' && AboutPage) body = <AboutPage go={go} />;
    else if (route === 'contact') body = <ContactPage go={go} />;
    else if (route === 'privacy' && PrivacyPage) body = <PrivacyPage go={go} />;
    else if (route === 'videos' && VideosPage) body = <VideosPage go={go} />;
    else if (route === 'pricing' && PricingPage) body = <PricingPage go={go} />;
    else if (route && route.indexOf && route.indexOf('case:') === 0 && CaseStudyPage) {
      body = <CaseStudyPage go={go} id={route.slice(5)} />;
    }
    else if (route === 'portfolio' && PortfolioPage2) body = <PortfolioPage2 go={go} />;
    else if (route === 'portfolio') body = <PortfolioPage go={go} />;
    else body = <HomePage go={go} heroVariant={heroVariant} />;

    return (
      <div ref={scrollerRef} id="cs-scroller" className="device-scroll" style={{
        width: '100%', height: '100%', overflow: 'auto', background: '#fff',
        position: 'relative',
      }}>
        <a href="#main" className="rd-skip-link">Skip to main content</a>
        <CSNav route={route} go={go} />
        {/* Spacer: nav is position:fixed so reserve its height to keep page content below it */}
        <div className="cs-nav-spacer" style={{ height: 'var(--rd-nav-h, 76px)' }} aria-hidden="true" />
        <main id="main" tabIndex={-1}>{body}</main>
        <CSFooter go={go} />
        <ScrollDrone enabled={enableDrone} scrollerRef={scrollerRef} />
      </div>
    );
  }

  return { Site, SiteTweaks };
})();

window.CSAPP = CSAPP;
