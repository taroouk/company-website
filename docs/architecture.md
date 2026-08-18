# Architecture

This is the technical foundation only. No final content, brand assets, or
copy exist yet — every piece described here is a placeholder or an empty
structure ready to receive real content later.

## Stack

- **Next.js 16** (App Router, TypeScript, `src/` layout)
- **React 19**
- **Tailwind CSS 4** (CSS-first config via `@theme` in `src/styles/globals.css`)
- **next-intl** for Arabic/English localization and RTL/LTR support
- **ESLint** (`eslint-config-next`) + **Prettier** (with `prettier-plugin-tailwindcss`)

## Routing

All routes live under `src/app/[locale]/...`, so every page is locale-aware
from the start. `src/proxy.ts` resolves the locale from the URL prefix
(`/en/...`, `/ar/...`) via `next-intl`'s middleware. `src/i18n/routing.ts` is
the single source of truth for supported locales and their text direction.

## Folder structure

```
src/
  app/
    layout.tsx            # minimal root passthrough
    [locale]/
      layout.tsx           # sets <html lang dir>, loads fonts, i18n provider
      page.tsx              # homepage route (structural shell only)
  components/
    base/                   # generic, brand-agnostic UI primitives
    layouts/                # page-level layout composition (PageShell, etc.)
  sections/
    home/                   # one file per homepage section (structural only)
  data/                     # typed data sources, currently empty arrays
  hooks/                    # reusable client hooks
  lib/                      # framework-agnostic utilities
  i18n/
    routing.ts              # locales, default locale, directions
    navigation.ts           # locale-aware Link/router
    request.ts               # next-intl request config
    messages/                # en.json / ar.json translation dictionaries
  styles/
    globals.css              # Tailwind entry + base element styles
    tokens.css                # design tokens (CSS variables)
public/
  assets/                    # generic static files
  images/                    # real images go here later
  icons/                     # real icon assets go here later
  fonts/                     # real font files go here later
docs/                        # this documentation
```

## Design tokens

`src/styles/tokens.css` defines CSS variables for color, typography,
spacing, radius, shadow, container widths, and animation timing. Colors are
currently a **neutral grayscale placeholder** — swap the values in that file
once brand colors are finalized. Nothing downstream needs to change because
components consume the variables, not hardcoded values.

## Base components

`src/components/base/` contains generic primitives (`Container`, `Section`,
`Button`, `Card`, `Heading`, `Text`, `Icon`) that only know about design
tokens — never about brand colors, logos, or copy. Homepage sections compose
these primitives.

## Homepage sections

`src/sections/home/` has one structural component per section
(Navbar, Hero, Metrics, Services, Projects, About, Values, Investment,
Contact, Footer). Each is currently an empty shell with a comment marking
where real content will go. `src/app/[locale]/page.tsx` assembles them in
order via `PageShell`.

## Swapping in real content later

- **Images/icons/fonts/logo**: drop files into `public/images`,
  `public/icons`, `public/fonts`; reference them from components — no
  structural changes needed.
- **Colors**: edit `src/styles/tokens.css` only.
- **Copy/translations**: edit `src/i18n/messages/en.json` and `ar.json`.
- **Services/projects/metrics data**: populate the arrays in `src/data/`.
- **Section content**: fill in the JSX inside each file in
  `src/sections/home/`.
