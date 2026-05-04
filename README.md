# Reading Drones

Marketing site for Reading Drones — CAA-licensed aerial photography & video, Berkshire.

Live at **[readingdrones.co.uk](https://readingdrones.co.uk)**.

## Stack

- React 18 + JSX, bundled with Vite
- Static output — deployable to GitHub Pages, Netlify, or Cloudflare Pages with no build server config

## Layout

```text
site/                     ← the actual website (Vite project)
  index.html              ← entry point
  src/                    ← React/JSX components (homepage, services, portfolio, case studies, pricing, about, contact)
  public/                 ← static assets, CNAME, robots.txt
  dist/                   ← build output (gitignored)
archive/old-site-2022/    ← previous static rebuild, preserved for reference
```

## Develop

```bash
cd site
npm install
npm run dev          # http://localhost:5173
```

## Build

```bash
cd site
npm run build        # outputs to site/dist/
npm run preview      # serves the build locally
```

## Deploy (GitHub Pages)

A GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and deploys on every push to `main`. To enable: in GitHub repo settings → Pages → Source: **GitHub Actions**. The `site/public/CNAME` file pins the custom domain to `readingdrones.co.uk`.

## Known follow-ups

- Wire the contact form to a real endpoint (Formspree / Netlify Forms / mailto)
- Self-host fonts (Archivo Black + Inter)
- Replace placeholder testimonials and portfolio descriptions
- Real client logos in the logo wall
- Favicon
- Generate fresh `sitemap.xml`
