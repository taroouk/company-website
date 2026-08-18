# Project Foundation

This repository currently contains **only the technical foundation** — no
final brand content, images, logos, fonts, or copy. See
[`docs/architecture.md`](docs/architecture.md) for the full architecture
breakdown.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 ·
next-intl (Arabic/English, RTL/LTR)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/en` or `http://localhost:3000/ar`.

## Scripts

| Command                | Purpose                    |
| ---------------------- | -------------------------- |
| `npm run dev`          | Start the dev server       |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | TypeScript, no emit        |
| `npm run format`       | Prettier, write            |
| `npm run format:check` | Prettier, check only       |

## Where things go later

- **Images / icons / fonts**: `public/images`, `public/icons`,
  `public/fonts` (each currently holds a `.gitkeep` placeholder only).
- **Logo**: `public/images` or `public/icons`, referenced from
  `src/sections/home/Navbar.tsx` and `Footer.tsx` once supplied.
- **Brand colors and other design values**: `src/styles/tokens.css` — this
  file currently holds neutral, temporary placeholder values only.
- **Translations (English/Arabic)**: `src/i18n/messages/en.json` and
  `src/i18n/messages/ar.json`.
- **Services / projects / metrics data**: `src/data/services.ts`,
  `src/data/projects.ts`, `src/data/metrics.ts` — currently empty typed
  arrays.
- **Homepage section content**: one file per section in
  `src/sections/home/` (`Navbar`, `Hero`, `Metrics`, `Services`,
  `Projects`, `About`, `Values`, `Investment`, `Contact`, `Footer`) — each
  is an empty structural shell today.

## Localization

Routes are locale-prefixed (`/en`, `/ar`) via `src/proxy.ts` and
`src/i18n/routing.ts`. Text direction (`dir="rtl"`/`"ltr"`) is set
automatically per locale in `src/app/[locale]/layout.tsx`.

## Architecture

Full breakdown of the folder structure, design tokens, and component
layers: [`docs/architecture.md`](docs/architecture.md).
