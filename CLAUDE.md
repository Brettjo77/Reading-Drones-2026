# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Read this first

The canonical agent instructions live in [.github/copilot-instructions.md](.github/copilot-instructions.md). It covers the `window.*` module pattern, the fixed load order in `main.jsx`, the custom `useRoute()` router, the inline-style + attribute-selector mobile pattern, and the palette CSS variables. Read it before making non-trivial changes — the conventions are unusual and easy to violate by accident.

## Where to work

Only [site/](site/) is the live app. Everything else is reference and should not be edited unless explicitly asked:

- [archive/old-site-2022/](archive/old-site-2022/) — read-only snapshot of the previous site
- [New Website May 2026/](New%20Website%20May%202026/) — superseded design/SEO staging
- [photo-source-library/](photo-source-library/) — large source images, not bundled

Optimised photos for the live site go in [site/public/assets/photos/](site/public/assets/photos/).

## Commands

All npm commands run from `site/`, never the repo root:

```bash
cd site
npm install
npm run dev       # http://localhost:5173
npm run build     # → site/dist/
npm run preview   # serve the build
```

There is no test suite, no linter, and no type checker configured. "Done" means the dev server runs cleanly and the affected page renders correctly in the browser — verify visually before reporting completion.

## Architecture pitfalls (the ones that bite)

- **No ESM exports between site components.** Each `site/src/*.jsx` file is a side-effect import that attaches its API to `window.*` (e.g. `window.SITE`, `window.CSPAGES`, `window.CSWIDGETS`). Don't "fix" this to ESM. New files must be added to [site/src/main.jsx](site/src/main.jsx) in the correct slot — load order is fixed because later files read globals set by earlier ones.
- **Routing is `?p=<route>` query strings**, not paths and not React Router. Add new routes inside `Site()` in [site/src/cs-app.jsx](site/src/cs-app.jsx). Case studies use a `case:<id>` prefix.
- **All styling is inline `style={{}}`.** Global CSS lives only in the `<style>` block in [site/index.html](site/index.html); mobile rules there override inline styles via attribute selectors (e.g. `[style*="grid-template-columns"][style*="repeat(3"]`) plus `!important`. Keep that pattern when adjusting responsive layout — it's the only practical bulk override.
- **Palette via CSS variables** (`--rd-primary`, `--rd-accent`, `--rd-tint`) set by `applyPalette()`. Use `var(--rd-primary)` in JSX rather than hard-coding hexes. Brand ink `#0d0d10` is exposed as `RD_INK`. The 4px ink borders + offset hard shadows (`box-shadow: NpxNpx 0 #0d0d10`) are the visual signature — preserve them.

## Deploy

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds `site/` and publishes `site/dist/` to GitHub Pages. The custom domain is pinned via [site/public/CNAME](site/public/CNAME) to the apex `readingdrones.co.uk` (no `www`) — all canonical URLs, OG tags, and JSON-LD must use the apex host.

Because every route serves the same `index.html`, `sitemap.xml` lists only `/`. Per-route URLs require a prerendering step that doesn't exist yet.

## Dependencies

Current deps are React 18, ReactDOM, `simple-icons`, Vite, and `@vitejs/plugin-react`. Don't add top-level dependencies without a clear reason. Icons go through the `Icn` helper + `ICONS` map in [site/src/site-shared.jsx](site/src/site-shared.jsx); brand glyphs come from `simple-icons` (LinkedIn is inlined because simple-icons removed it).
