# hire.jjaaee.site — Portfolio

Personal portfolio for Mark Jonathan M. Bacarac (Jae): full stack developer and SOC security
analyst. A single-page, anchor-navigated site plus two static legal pages, built with React,
TypeScript, Vite, and Tailwind CSS.

## Stack

- **React 19 + TypeScript + Vite** (client-only, static build)
- **Tailwind CSS v4** for styling (design tokens live in `src/index.css`)
- **Framer Motion** for scroll reveals, fully disabled under `prefers-reduced-motion`
- **React Router** for the two legal pages (`/privacy`, `/terms`)
- **lucide-react** for icons, plus two hand-drawn brand marks (GitHub, LinkedIn) since lucide's
  current release ships no brand icons

No backend. The contact form posts to Formspree when configured, and falls back to opening the
visitor's email client (`mailto:`) when it isn't, so it always works.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
  components/   UI building blocks (one per section, plus shared bits like Nav, Footer)
  data/         Content as typed data (projects, experience, skills, security, site info)
  lib/theme.tsx Light/dark theme context (class + localStorage, respects system preference)
  pages/        Home.tsx (assembles all sections), Privacy.tsx, Terms.tsx
public/         Favicons, OG image, manifest, robots.txt, sitemap.xml, SPA redirect rules
```

Content lives in `src/data/*.ts` as plain typed objects, edit those files to change copy,
projects, experience, or skills without touching component code.

## Design

Dark-mode-first, with a working light-mode toggle (`localStorage`-backed, defaults to the
visitor's OS preference on first visit). One accent color (a terminal-amber, standing in for a
SIEM alert light) with named, themed tokens (`surface`, `content`, `accent`, `border`) defined in
`src/index.css`. Headings use Space Grotesk, body text Inter, and code/labels/tags use JetBrains
Mono, tying into the small terminal motif used for section tags (`~/projects`, `> whoami`, and so
on). All color pairs were checked against WCAG contrast targets (4.5:1 for body text, 3:1 for
large text and UI boundaries) in both themes.

## Deployment

The site is a static build (`dist/`), deployable anywhere that serves static files. Because it's
a single-page app with client-side routes (`/privacy`, `/terms`), the host needs a catch-all
rewrite to `index.html` so deep links and page refreshes work:

- **Vercel**: `vercel.json` (included) already rewrites everything to `/index.html`.
- **Netlify**: `public/_redirects` (included) does the same.
- **Cloudflare Pages**: also reads `_redirects` in the same format, no extra config needed.

Deploy commands:

```bash
# Vercel
npx vercel --prod

# Netlify
npx netlify deploy --prod --dir dist

# Any static host
npm run build && rsync -av dist/ user@host:/path/to/site
```

### Custom domain

The site targets `jaehyung.site` (see `index.html` canonical/OG tags and `public/sitemap.xml`,
`public/robots.txt`). To point the real domain at it:

1. Add `jaehyung.site` as a custom domain in your host's dashboard (Vercel/Netlify/Cloudflare
   Pages all support this from the project settings).
2. Point the domain's DNS at the host as instructed there (usually a CNAME or the host's
   nameservers, if using Cloudflare Pages with a domain already on Cloudflare).
3. If you deploy anywhere else, or under a different domain, update the hardcoded
   `https://jaehyung.site` references in `index.html` (canonical, OG/Twitter tags), `public/robots.txt`,
   and `public/sitemap.xml`.

## Launch checklist

| Item | Status |
| --- | --- |
| Custom domain connected | **Owner to finish.** No builder subdomain is hardcoded anywhere; `jaehyung.site` is used as the canonical URL throughout. Point DNS at your chosen host and add the domain in its dashboard. |
| Favicon set | Done. `favicon.svg`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, and `site.webmanifest` are all in `public/` and linked from `index.html`. |
| Open Graph image | Done. `public/og-image.png` (1200x630), referenced from `index.html` OG/Twitter tags. |
| "Made with AI" / builder badge | N/A. This project was hand-built as a plain Vite app, no builder runtime or badge is embedded anywhere in the output. |
| Privacy Policy page | Done. `/privacy`, linked in the footer. |
| Terms & Conditions page | Done. `/terms`, linked in the footer. |
| Resume PDF | **Owner to finish.** Every "Resume" button currently points at the placeholder `#RESUME_PDF_URL` (see `src/data/site.ts`, `resumeUrl`). Replace it with a real hosted PDF link. |
| Contact form endpoint | **Owner to finish.** `src/components/Contact.tsx` has a `FORMSPREE_FORM_ID` constant set to the placeholder `"CONTACT_FORM_ENDPOINT_KEY"`. Create a form at [formspree.io](https://formspree.io) and paste its ID in. Until then, the form still works, it opens the visitor's email client instead. |

Everything else in the brief (real content throughout, no lorem ipsum, no company names on
security items, no fake metrics or testimonials, dark/light theme with contrast-checked colors,
componentized code, SEO tags, accessibility pass) is done and lives in this repo as shipped.

## Self-review notes

A few things worth knowing about decisions made during the build:

- **Security & Tooling** project cards are intentionally organization-agnostic per the brief, no
  employer or client is named on any of them, and none describe exploit construction or
  reproduction steps, only outcomes and defensive framing.
- The **Security** section is styled with a fixed dark palette regardless of site theme (it reads
  as a distinct, "always-on" band even when the rest of the site is in light mode), this is
  deliberate, not a theming bug.
- The hero originally had a second mono status line above the headline restating the job title and
  location, both already stated a few lines down. It was cut during the craft review as
  redundant, one less thing competing with the name.
