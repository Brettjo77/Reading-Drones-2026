# Reading Drones — Agent Instructions

Marketing site for Reading Drones (Berkshire). React 18 + JSX, bundled with Vite, deployed to GitHub Pages on push to `main`. See [README.md](../README.md) for the public-facing overview.

## Where the code lives

The active site is `site/` only. Anything outside it is reference / staging:

- [site/](../site/) — the live Vite app (edit here)
- [archive/old-site-2022/](../archive/old-site-2022/) — previous static site, **read-only reference**
- [New Website May 2026/](../New%20Website%20May%202026/) — original Claude designer mock + SEO drop staging; superseded by `site/src/`. Do not edit unless explicitly asked.
- [photo-source-library/](../photo-source-library/) — large source images, not shipped. Optimised exports go to [site/public/assets/photos/](../site/public/assets/photos/).

## Architecture (non-obvious)

The app is the **Comic Studio designer bundle**, ported almost verbatim from a JSX mock. It does not use ES module exports between components — instead each `site/src/*.jsx` file runs as a side-effect import that **attaches its API to `window.*`**. This is intentional, not a smell. Don't refactor it to ESM imports.

Load order is fixed in [site/src/main.jsx](../site/src/main.jsx):

```
site-shared.jsx   → window.* (RD_INK, ICONS, SpeechBadge, SOCIAL, …)
ccb-logo.jsx      → window.CCBLogo / window.CompactLockup
mavic-icon.jsx    → window.MavicHero
cs-widgets.jsx    → window.CSWIDGETS  (LogoWall, SpecSheet, Storyboard, LocationsMap)
cs-extras.jsx     → window.SunburstRays, etc.
site-frame.jsx    → window.SITE       (CSNav, CSFooter, useRoute, applyPalette, TWEAK_DEFAULTS, ScrollDrone)
cs-pages.jsx      → window.CSPAGES    (HomePage, ServicesPage, ContactPage, AboutPage, PortfolioPage)
cs-pages2.jsx     → window.CSPAGES2   (PortfolioPage, PricingPage, CaseStudyPage, VideosPage)
cs-app.jsx        → window.CSAPP.Site (composes everything)
```

When adding a new page or widget: add the file, append it to `main.jsx` in the right slot, and consume its globals from `window.*` inside `cs-app.jsx` or a page.

## Routing

Tiny custom router in `useRoute()` ([site-frame.jsx](../site/src/site-frame.jsx)) — uses `?p=services` query strings, **not** path-style URLs and not React Router. Supports a `case:<id>` prefix for case-study pages. Add new routes in the `if/else` chain inside `cs-app.jsx`'s `Site()`.

Implication for SEO: every route serves the same `index.html`. The sitemap therefore lists only `/`. Prerendering each route (see `New Website May 2026/SEO Files/files/SEO-AUDIT.md` "Tier 2") is needed before listing per-route URLs.

## Styling

- All styling is **inline `style={{}}` props**. There is no CSS Modules / Tailwind / styled-components.
- Global CSS lives only in [site/index.html](../site/index.html) inside a `<style>` block.
- Mobile responsiveness is implemented via attribute-selector overrides in that `<style>` block (e.g. `[style*="grid-template-columns"][style*="repeat(3"]`) plus `!important`. This is the only practical way to override inline styles in bulk — keep that pattern when adjusting mobile layout.
- Palette comes from CSS variables `--rd-primary`, `--rd-accent`, `--rd-tint`, set by `applyPalette()`. Use `var(--rd-primary)` etc. in JSX rather than hard-coding the hex.
- Brand ink is `RD_INK = '#0d0d10'`. Comic-style 4px ink borders + offset hard shadows (`box-shadow: NpxNpx 0 #0d0d10`) are the visual signature — preserve them.

## Build, dev, deploy

```bash
cd site
npm install
npm run dev       # http://localhost:5173
npm run build     # → site/dist/
npm run preview
```

Always run npm commands from `site/`, never the repo root.

Deploy: pushing to `main` runs [.github/workflows/deploy.yml](workflows/deploy.yml), which builds `site/` and publishes `site/dist/` to GitHub Pages. The custom domain `readingdrones.co.uk` (apex, no `www`) is pinned by [site/public/CNAME](../site/public/CNAME). All canonical URLs, OG tags, and JSON-LD must use the apex host.

## Conventions

- React 18, function components only, JSX (not TSX).
- No new top-level dependencies without a reason — current deps are React, ReactDOM, `simple-icons`, Vite, `@vitejs/plugin-react`. Keep it that way.
- Icons: line-art icons via the `Icn` helper + `ICONS` map in [site-shared.jsx](../site/src/site-shared.jsx); brand glyphs via `simple-icons` (LinkedIn is shipped inline because simple-icons removed it).
- Photos: drop optimised JPGs into [site/public/assets/photos/](../site/public/assets/photos/) and reference as `/assets/photos/<name>.jpg`. Large source files belong in `photo-source-library/` and stay out of the bundle.
- SEO assets in [site/index.html](../site/index.html) reference `/favicon.ico`, `/icon.svg`, `/apple-touch-icon.png`, `/site.webmanifest`, `/og-cover.jpg`, `/logo.png` at the root of `site/public/`. Drop real files in or expect 404s in DevTools.
- Don't edit anything in `New Website May 2026/` or `archive/`. If a change is needed there, ask first.

## Known follow-ups (from README)

Contact form endpoint, self-hosted fonts, real testimonials, real client logos, favicon + PWA assets, prerendering pipeline. See [README.md](../README.md#known-follow-ups) and `New Website May 2026/SEO Files/files/SEO-AUDIT.md`.
