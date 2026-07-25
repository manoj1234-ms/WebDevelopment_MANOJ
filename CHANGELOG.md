# Optimization changelog — Task B

These are the performance and accessibility decisions baked into the build, and what each
one buys. After you deploy, run Lighthouse yourself (Chrome DevTools → Lighthouse tab, or
https://pagespeed.web.dev with your live URL) and drop the two screenshots (Performance +
Accessibility) into your submission — that part has to come from your actual live deployment,
I can't fake a Lighthouse report for a URL that doesn't exist yet.

## Performance

| Change | Why it matters |
|---|---|
| Zero raster images — hero graphic and all 6 service icons are inline SVG | No image bytes to download, no CLS from images loading in, crisp at any pixel density |
| No JS framework, no build tooling, ~3KB of vanilla JS | Nothing to parse beyond what's needed; instant Time to Interactive |
| `<link rel="preconnect">` to Google Fonts + `display=swap` | Text renders immediately in a fallback font instead of blocking on the webfont — kills the biggest common cause of a low Performance score |
| Only 5 font weights loaded across 3 families (500/600/700 display, 400/500 body, 400/500 mono) | Smaller font payload than the default "load every weight" behavior |
| Single external stylesheet, no CSS framework | ~14KB uncompressed CSS, nothing unused shipped |
| `sticky` header instead of JS-driven scroll listener | No scroll-jank, no extra JS execution on every frame |
| Total page weight (HTML+CSS+JS, pre-fonts) ≈ 31KB | Well under any meaningful budget for a marketing page |

## Accessibility

| Change | Why it matters |
|---|---|
| Skip-to-content link, visible on focus | Keyboard/screen-reader users can bypass the nav |
| Visible `:focus-visible` outline in the accent color everywhere | Keyboard navigation is never invisible |
| All form inputs have real `<label>` elements tied by `for`/`id` | Screen readers announce what each field is |
| Validation errors use `role="alert"` and `aria-invalid` | Errors are announced immediately, not just shown visually |
| Form status message uses `aria-live="polite"` | Success/error state is announced without stealing focus |
| Decorative icons/SVGs marked `aria-hidden="true"` | Screen readers skip pure decoration instead of reading garbage |
| Color pairs checked for contrast (amber-on-navy for text is avoided — amber is only ever used on light backgrounds or as a small accent, never as body text on navy) | Meets WCAG AA contrast for body text |
| `prefers-reduced-motion` respected globally | Smooth-scroll and any transition durations collapse to near-zero for users who've asked for reduced motion |
| Hamburger button has `aria-expanded` and `aria-controls` | Screen readers know the menu's open/closed state |

## If your Lighthouse score comes in under 90 after deploying

Most likely culprit is the Google Fonts request on a slow connection. Two options, in order
of effort:
1. Add `font-display: swap` is already set — but if it's still flagged, try dropping to 2
   font weights total instead of 5.
2. Self-host the fonts (download the `.woff2` files, put them in `/assets/fonts/`, add
   `@font-face` rules in `style.css`) to remove the third-party request entirely.

## What I'd do with one more day

Self-host the fonts from the start rather than pulling from Google Fonts CDN, and add a
tiny CSS-only fallback so the page has zero third-party requests at all.
