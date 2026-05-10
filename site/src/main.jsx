import React from 'react'
import ReactDOM from 'react-dom/client'

// Each side-effect import attaches its exports to window.* (CSAPP, SITE, CSPAGES, etc).
// Order matters: shared globals first, then components that read them, then the composer.
import './site-shared.jsx'
import './ccb-logo.jsx'
import './mavic-icon.jsx'
import './cs-widgets.jsx'
import './cs-extras.jsx'
import './site-frame.jsx'
import './cs-logos.jsx'
import './cs-pages.jsx'
import './cs-pages2.jsx'
import './cs-app.jsx'

const { Site } = window.CSAPP

function ProductionSite() {
  React.useEffect(() => {
    // Designer's bundle uses an inner #cs-scroller; in production we let the page own scroll.
    const sc = document.getElementById('cs-scroller')
    if (sc) {
      sc.style.height = 'auto'
      sc.style.minHeight = '100vh'
      sc.style.overflow = 'visible'
    }
  })
  return <Site heroVariant="A" />
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProductionSite />)
