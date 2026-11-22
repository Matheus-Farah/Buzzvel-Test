# Luma — Buzzvel Front-End Challenge

A responsive landing page for **Luma**, a practical-learning course platform, built from the
Figma file _Buzzvel FE - Test 2026_ with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

Repository: https://github.com/Matheus-Farah/Buzzvel-Test

## Tech stack

| Tool                 | Version | Why                                                                                |
| -------------------- | ------- | ---------------------------------------------------------------------------------- |
| Next.js (App Router) | 16.4    | Required by the challenge; Server Components by default, `next/image`, `next/font` |
| React                | 19.3    | —                                                                                  |
| TypeScript           | 5       | Typed props, typed mock data, safer refactors                                      |
| Tailwind CSS         | 4.3     | CSS-first config (`@theme`) mapped 1:1 to the Figma color and font tokens          |
| ESLint + Prettier    | 9 / 3   | `eslint-config-next`, `prettier-plugin-tailwindcss` for class ordering             |

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:3000
npm run build      # production build (type-checks and prerenders the page)
npm run start      # serve the production build
npm run lint       # ESLint
npm run format     # Prettier
```

## Project structure

```
src/
├── app/                 # layout (fonts, metadata), page, global styles, favicon
├── components/
│   ├── layout/          # Header, MobileMenu, Footer, SkipLink
│   ├── sections/        # one component per page section
│   └── ui/              # reusable pieces: Container, ButtonLink, SectionHeading, FormField, icons…
├── data/                # typed mock data (navigation, categories, course, steps, testimonial, footer)
└── lib/                 # pure logic (contact form validation)
```

## Key decisions

**Design system**

- Figma variables (colors, fonts) are mirrored as Tailwind `@theme` tokens (`bg-primary`, `text-muted`,
  `font-heading`…), so components use the same names as the design.
- Fonts load through `next/font/google` (self-hosted, `display: swap`, no layout shift).

**Components**

- Small, typed, reusable components. `ButtonLink` exposes `variant` (`primary | secondary | accent`) and
  `size` (`md | lg`) through `Record` maps, so adding a variant is type-checked.
- `SectionHeading` handles every section title with `tone` (default / inverse) and `align` (left / center)
  props instead of near-duplicate components.
- Content lives in `src/data/*` as typed mock data, keeping components free of copy and easy to wire to an API.
- Server Components by default; only the mobile menu and the contact form are Client Components.

**Navigation**

- One page with in-page anchors. Anchors use plain `<a>`; `next/link` is used only for real routes
  (logo → `/`). The Next router ignores a click on a hash link when the URL already has that hash, so a
  second click on the same menu item didn't scroll — a native anchor always does.
- Sticky header; `scroll-padding-top` stops section titles from hiding under it.
- Below 1024px the navigation collapses into a hamburger menu. **The open state is not in the Figma
  file**, so the dropdown panel is my own design. It uses `aria-expanded` / `aria-controls` and closes
  with Escape or after choosing a link.

**Contact form (main interaction)**

- Client-side validation with a pure, reusable `validateContact` function (`src/lib`).
- Custom, accessible errors: `noValidate` + `aria-invalid` + `aria-describedby`; focus moves to the first
  invalid field; an error clears as soon as the user edits that field.
- Explicit states (`idle | submitting | success`): the button shows "Sending…" and is disabled while
  submitting; success is announced through an always-mounted `role="status"` live region.

**Images and performance**

- All images use `next/image` (responsive `srcset`, WebP/AVIF, lazy loading below the fold).
- The hero image (LCP) loads with `loading="eager"` + `fetchPriority="high"` (`priority` is deprecated in
  Next 16) inside an aspect-ratio box to avoid layout shift.
- The 10-photo "Meet international students & teachers" collage is exported as **one** image: one request
  and a pixel-exact match, since the photos are purely decorative. Alternative: a CSS grid of 10 images.
- Decorative shapes (hero, steps, final CTA) are built with CSS instead of image files.
- Production build passes with **Cache Components** enabled (Next 16 default from `create-next-app`). The
  first build failed because the footer's `new Date()` is uncached synchronous IO; the year is now
  captured in the static shell with a `"use cache"` function.

**Accessibility**

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, sections labelled by their headings.
- Skip link to main content; visible `:focus-visible` ring (white on the blue section for contrast).
- Meaningful `alt` text; decorative images use `alt=""`, decorative shapes use `aria-hidden`.
- Testimonial uses `figure` / `blockquote` / `figcaption`; stats use a `<dl>` (visual order swapped with
  `flex-col-reverse` so the DOM order stays correct).
- `prefers-reduced-motion` disables transitions, animations and smooth scrolling.

**Responsive**

- Built mobile-first and checked at 375, 768, 1280 and 1920px. Tablet layouts are not in the Figma file,
  so I chose them (e.g. categories in 2 columns, hamburger menu up to 1024px).

## Known gaps

- The contact form submission is **mocked** (simulated request); nothing is sent. Next step: a Server
  Action with `useActionState`, reusing `validateContact` on the server.
- "Log in", category cards and footer links to pages that don't exist (Careers, Journal, Terms, Privacy)
  are placeholders.
- The "Meet international students & teachers" paragraph is the lorem ipsum from the Figma file.
- The final CTA's three small line icons (sun, cube, arrows) were left out; the other shapes are recreated.
- The final CTA avatar group is a single image cropped with CSS; four separate files would be lighter.
- Hover states aren't in the Figma file, so they are kept subtle.
- In the Figma file all three "How it works" steps say "Step 01"; I treated this as a typo and numbered
  them 01–03.
- No automated tests yet. `validateContact` is the first candidate for unit tests.

## Time spent

TODO-TIME: approximately 15 hours.

## AI tools used

I used **Claude Code** as a pair-programming tutor. It was my first project with Next.js; my background
is Angular.

- **How I used it:** it read the Figma file to extract measurements, colors and typography, explained
  Next.js / React / Tailwind concepts, and proposed code for each section step by step.
- **What I did:** I typed and integrated every file myself, ran all commands myself, and asked for an
  explanation of anything I didn't understand before moving on.
- **How results were checked:**
  - after each step the AI reviewed my files and pointed out bugs, mostly typos in Tailwind classes,
    which fail silently;
  - I ran `npm run lint`, `npx prettier --check .` and `npm run build` (type-check + prerender);
  - I tested manually at several widths, with keyboard only and with reduced motion emulated;
  - I compared each section with the Figma file.
- **Problems found along the way:**
  - the Next router not re-scrolling to a hash link already in the URL (switched to native anchors);
  - the Cache Components build error (fixed with `"use cache"`).
