# NorthPeak Digital — one-page agency site

A responsive one-page site for the fictional agency **NorthPeak Digital**, built for the
Digital Heroes Web Development qualification task (Role 05, Task A + Task B).

No page builder, no framework — hand-written HTML, CSS, and vanilla JS.

## Design concept

NorthPeak's name is the whole brief. The site leans into an alpine / topographic-survey
identity instead of a generic "agency" look:

- **Palette** — Ink Navy (`#0b1826`), Glacier White (`#ffffff` / `#f6f8fa`), Summit Amber
  (`#e2924a`) as the single accent, plus a muted Fog grey for secondary text.
- **Type** — Space Grotesk for display headings (technical, geometric — reads like survey
  equipment lettering), Inter for body copy, JetBrains Mono for data points (stats, elevation
  labels) to reinforce the "instrument reading" feel.
- **Signature element** — the hero's layered topographic contour lines, and pricing tiers
  named by elevation: **Basecamp → Ridge → Summit**, each tagged with a literal altitude
  (1,200m / 3,400m / 5,600m). This isn't decorative — it's the one idea (small business to
  full-scale growth partner) expressed consistently through naming, iconography, and copy.

## File structure

```
northpeak/
├── index.html      # all page content and structure
├── style.css        # design tokens + all styling, mobile-first
├── script.js         # mobile nav toggle + contact form validation
└── README.md
```

## Sections (per brief)

1. Hero — headline + CTA
2. Services grid — 6 disciplines (Web Design, Development, SEO, Branding, Content, Growth & Analytics)
3. Results / testimonials — 3 client quotes + an aggregate results strip
4. Pricing — 3 tiers (Basecamp / Ridge / Summit)
5. Contact form — name, email, company (optional), message, with client + intended server-side validation

## Responsive behaviour

Built mobile-first with breakpoints at `768px` (tablet) and `1024px+` (desktop), verified
against 360px, 768px, and 1440px viewports specifically per the brief. The nav collapses to
a hamburger menu below 768px; grids go 1 → 2 → 3 columns as space allows.

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment (do this before submitting)

Pick one of the free options the brief allows:

**GitHub Pages**
```bash
git init
git add .
git commit -m "NorthPeak Digital — Task A"
git branch -M main
git remote add origin https://github.com/<your-username>/northpeak-digital.git
git push -u origin main
```
Then in the repo: Settings → Pages → Deploy from branch → `main` / root.

**Netlify / Vercel** — drag-and-drop this folder into the Netlify dashboard, or run
`vercel` / `netlify deploy` from inside the folder. Either gives you a live URL in under a
minute with zero config since there's no build step.

Make the GitHub repo public, and grab both links (repo + live URL) for your submission.

## Where AI was used

I collaborated with an AI coding assistant to completely overhaul the visual identity of the project, taking the standard alpine theme and customizing it into a "Cyber-Alpine" dark mode layout. We paired to rewrite the base CSS variables—shifting the color palette to deep slate (`#020617`) with vibrant neon green (`#00ff88`) accents, and updated the typography stack to use Outfit, DM Sans, and Fira Code for a sleeker, more modern aesthetic. We also updated the hero section's inline SVG paths to match the new accent colors. The underlying HTML structure and grid systems remain hand-coded, but the new look and feel is unmistakably custom, built through iterative prompting and design decisions to make it my own.
