# Asset Inventory

Discovery pass performed 2026-08-15. This documents every real asset found
under `public/` and `docs/` at that time. **No assets were renamed, moved,
replaced, or overwritten to produce this inventory.**

## Logos

| Filename            | Path                                    | Type                      | Dimensions | Size     | Likely intended usage                                                                                                                    |
| ------------------- | --------------------------------------- | ------------------------- | ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `logo-full.png`     | `public/assets/brand/logo-full.png`     | PNG, RGBA, transparent bg | 244 × 203  | 41.5 KB  | Full lockup (icon stacked above wordmark: "TECHNO / SALES DEVELOPER"). Candidate for primary navbar logo.                                |
| `logo-icon.png`     | `public/assets/brand/logo-icon.png`     | PNG, RGBA, transparent bg | 595 × 419  | 125.9 KB | Icon-only mark (the blue/silver "T" + arrow + pixel-dissolve glyph, no text). Candidate for favicon, compact/mobile navbar, or app icon. |
| `logo-wordmark.png` | `public/assets/brand/logo-wordmark.png` | PNG, RGBA, transparent bg | 996 × 250  | 160.2 KB | Wordmark-only ("TECHNO SALES DEVELOPER" text, no icon). Candidate for footer or contexts needing brand name without the mark.            |

**NEEDS CONFIRMATION:** which of the three logo variants is canonical for the navbar vs. footer vs. favicon. No usage guidance was supplied with the files.

## Hero imagery

| Filename        | Path                               | Type           | Dimensions | Size     | Notes                                                                                                                                  |
| --------------- | ---------------------------------- | -------------- | ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `hero-main.jpg` | `public/assets/hero/hero-main.jpg` | JPEG, baseline | 1399 × 768 | 932.6 KB | Composite marketing visual: night cityscape with a smart-kiosk/car-wash structure, a DOOH billboard mockup, and a smart-parking tower. |

**Important — text baked into this image does not match the PDF:** the JPEG has non-editable text rendered directly into the pixels: brand lockup, tagline "SMART SOLUTIONS | DIGITAL FUTURE", headline "WE DEVELOP SMART SOLUTIONS FOR A CONNECTED FUTURE" / "تبتكر حلول ذكية لمستقبل متصل", a service icon row (Smart Advertising, Smart Parking, Smart Car Wash, Data & Analytics, IoT Solutions), and a URL (`www.techno-sd.com`). This wording **differs from** the Hero copy in `docs/official-content.pdf` ("نُطوّر اليوم.. نُدير المستقبل" / "We develop today.. we manage the future"). See `content-map.md` → Hero for the flagged conflict.

**NEEDS CONFIRMATION:** is this JPEG meant to be used as-is (its own baked text becomes the Hero visual, and the PDF headline would be redundant or placed elsewhere), or is a clean background-only hero image still coming, with the PDF headline overlaid as real text? Also flag: file is ~930 KB — will need optimization/responsive variants before production use, but no action taken yet.

## Service images

None found. `public/images/` currently contains only `.gitkeep`. The four services described in the PDF (DOOH Network, VIP Solutions sales outlets, smart roads/security, interactive field solutions) have no dedicated images or icons supplied yet.

**NEEDS CONFIRMATION:** service icons/images to be supplied later.

## Project images

Supplied 2026-08-17: `public/assets/projects/project-01.jpg` through
`project-04.jpg` (1536×1024, 1600×900, 1536×724, 1600×900 respectively).
Mapped in sequential order to the four featured case studies per the
client's explicit instruction — see `docs/decisions.md` #10, which also
flags that `project-03.jpg` does not visually match its assigned project
(Transit & LRT Stations) and may be misordered.

## About imagery

Supplied 2026-08-17: `public/assets/about/about-main.jpg` (despite the
extension, the file is actually PNG-encoded, 1195×896 — read via its
content, not renamed). A stylized 3D render of the brand mark (no baked-in
text), used as-is for the About section's media panel. See
`docs/decisions.md` #15.

## Icons

None found beyond the logo files above. `public/icons/` currently contains only `.gitkeep`. No standalone SVG/icon set was supplied for UI icons (the icon glyphs visible in `hero-main.jpg` are baked into that raster image and are not usable as standalone assets).

**NEEDS CONFIRMATION:** icon set/library to be supplied or selected later.

## Fonts

None found. `public/fonts/` currently contains only `.gitkeep`. The project currently loads Geist/Geist Mono via `next/font/google` as a technical placeholder (set during the foundation phase) — no official brand typeface has been supplied.

**NEEDS CONFIRMATION:** official brand font files (and Arabic-script font pairing, since the site is bilingual) to be supplied later.

## Background images

None found beyond `hero-main.jpg` above.

## Other files present but not usable assets

| Path                                                                                                                             | Note                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `public/.DS_Store`, `public/assets/.DS_Store`, `public/assets/brand/.DS_Store`, `public/assets/hero/.DS_Store`, `docs/.DS_Store` | macOS Finder metadata, not project assets. Left in place (not deleted) per the no-removal rule; flagging for awareness only. |
| `src/app/favicon.ico`                                                                                                            | Default Next.js placeholder favicon, not an official asset. Left in place.                                                   |

## Source document

| Filename               | Path                        | Type         | Notes                                                                                                                                                     |
| ---------------------- | --------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `official-content.pdf` | `docs/official-content.pdf` | PDF, 3 pages | "دليل النصوص الرسمية لموقع شركة تكنو سيلز ديفيلوبر" (Official website copywriting guide for Techno Sales Developer). Full extraction in `content-map.md`. |
