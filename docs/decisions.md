# Implementation Decisions

Record of decisions made during homepage implementation where the source
material was ambiguous or conflicting. Each entry states the conflict, the
options considered, and the decision taken — so it can be revisited if the
assumption turns out wrong.

## 1. Hero image baked-in text vs. official PDF Hero copy

**Conflict.** `public/assets/hero/hero-main.jpg` is a flattened marketing
render with non-editable text baked into the pixels: a brand lockup, the
tagline "SMART SOLUTIONS | DIGITAL FUTURE", the headline "WE DEVELOP SMART
SOLUTIONS FOR A CONNECTED FUTURE" / "تبتكر حلول ذكية لمستقبل متصل", a
5-icon service row, and even mockup statistics on a fake billboard
("128.7M", "5.47%", "2.4M" — not real metrics, just placeholder numbers
in the render). None of this matches `docs/official-content.pdf`'s actual
Hero copy: headline **"نُطوّر اليوم.. نُدير المستقبل"**, subheadline about
integrated smart solutions, and two CTAs ("استكشف خدماتنا" /
"تواصل معنا"). Showing both texts live and legible at once would put two
different headlines in the same viewport.

**Options considered.**

1. Overlay the real PDF headline directly on top of the image as-is —
   rejected: the image's own baked headline stays fully legible right next
   to it, so visitors see two competing headlines in the same section.
2. Heavy blur (`blur-[3px]`) plus an ~80% flat scrim over the full frame —
   tried first. It fully suppressed the baked text, but also flattened the
   cinematic quality of the shot (the neon glow, the billboard, the kiosk
   all read as a dim, undifferentiated smear). Superseded once the brief
   asked to "keep the image visually recognizable and cinematic."
3. Crop the baked text panel out of frame by scaling the image from its
   trailing edge (`object-right`/`object-left` + `scale`), so the ~30% of
   the file carrying the brand lockup/tagline/headline/icon row falls
   outside the visible container, combined with a light blur (`blur-[3px]`
   pre-crop tuning landed at this value after visually confirming the
   billboard's mockup stats — "128.7M", "5.47%", "2.4M", not real
   figures — were illegible) and a much lighter flat scrim (~30%) plus a
   directional gradient behind the copy column only — **chosen**.

**Decision (revised for the visual-audit pass against the supplied
reference design).** The reference composes the Hero as two columns — real
PDF copy on one side, the hero photo contained in a rounded portrait panel
on the other — rather than a full-bleed background. `Hero.tsx` now follows
that: the panel is sized `aspect-[4/5]` (`3/4` at `sm`), and the image is
cropped, not blurred, to isolate the parking-tower portion of the frame.
`object-right` anchors the visible crop window to the image's trailing
edge; `scale-[2]` with `origin-right` (default Tailwind `origin-right` is
`100% 50%`, i.e. the right edge, not the center) zooms in from that fixed
edge rather than the image center. Working through the cover-fit geometry
for the 1399×768 source against a portrait container: plain `object-right`
alone shows source x-range ≈[823,1399]; anchoring the zoom at the right
edge and scaling 2× tightens that to ≈[1111,1399] — comfortably past the
billboard's right edge (≈1050) and the brand-lockup text panel (≈0–420),
landing squarely on the tower. Because the crop itself now keeps the
problem regions out of frame, **no blur and no flat scrim are needed** —
only two light directional gradients for grounding the panel into the
page background. This reads as strictly more "cinematic" than the
previous blur+scrim approach, directly addressing the brief's repeated
"keep the image visually recognizable and cinematic" instruction.

**Residual risk / follow-up.** The crop boundary above was computed from
the source image's approximate region layout (visually inspected, not
pixel-measured), so there's a margin of error; if a future asset revision
shifts the billboard further right, the scale factor may need retuning.
In-scene signage on the tower itself ("SMART PARKING", "AUTO PARKING",
"PAYMENT", "24/7 ACCESS", "SECURE") is left as-is, consistent with the
existing precedent of keeping in-scene signage rather than treating it as
a competing headline. **Recommendation unchanged:** a clean hero
photo/render with no baked-in marketing text would remove the need for
any crop tuning. Tracked as NEEDS CONFIRMATION in `content-map.md`.

## 8. Metrics and Mission/Vision/Values: inline strips, not elevated cards

**Context.** The visual-audit reference shows the stats bar sitting
directly on the Hero's plain dark background, flowing inline beneath the
headline/CTA column — not as a raised, bordered card overlapping the
Hero's bottom edge (the treatment used in the first implementation pass).
The same reference gives the Mission/Vision/Values row equally light
treatment: icon + label pairs with no card background or grid dividers.

**Decision.** Both `Metrics.tsx` and `MissionVisionValues.tsx` were
restyled to plain, borderless rows (a single `border-t` top rule on
Metrics for separation, nothing on MVV) using `borderInlineStart` inline
styles for the RTL/LTR-safe dividers between metric items — deliberately
not a Tailwind physical-side utility, since the divider's correct screen
side flips between locales and CSS logical properties handle that
natively regardless of Tailwind's logical-utility support in the installed
version. Neither section's official PDF heading is dropped — both stay
`sr-only` for structure and assistive tech, matching the reference's own
choice not to print a visible heading for either strip.

**Superseded for MVV (kept for Metrics).** On a later pass, MVV was
explicitly asked to read as "a finished corporate website section" with
"clean visual hierarchy," with permission to use cards. `MissionVisionValues.tsx`
now uses the same visible `SectionHeading` + `Card` grid pattern as
Services (see #11), giving all four pillars — Vision, Mission, Values,
Goal — equal card weight instead of a borderless inline row. Metrics is
untouched and keeps the treatment described above.

## 2. Which logo file goes where

**Conflict.** Three logo variants were supplied
(`logo-full.png`, `logo-icon.png`, `logo-wordmark.png`) with no usage
guidance.

**Decision.** Based on each file's actual composition (see `assets.md`):

- **Navbar:** `logo-full.png` (icon + wordmark lockup) — standard primary
  placement.
- **Footer:** `logo-wordmark.png` (text-only) — common secondary
  placement, avoids repeating the full icon mark twice on one page.
- **Mobile-collapsed nav / favicon-scale contexts:** `logo-icon.png`
  (icon-only) is reserved for this but not wired into the favicon in this
  pass (the favicon itself is out of scope — `src/app/favicon.ico` is
  untouched, still the Next.js placeholder).

No logo file was recreated, redrawn, or altered — all three are referenced
by their exact `public/assets/brand/` path. **NEEDS CONFIRMATION:** this
placement is a reasonable default, not a confirmed brand guideline.

## 3. Design tokens sourced from supplied assets, not invented

**Context.** The foundation phase intentionally used neutral gray
placeholder tokens. This phase's instructions make the hero image the
"visual design authority" for a dark, blue-accented aesthetic, so the
neutral tokens are now replaced.

**Decision.** Rather than picking colors by eye, `tokens.css`'s new
palette was sampled directly from the two supplied assets:

- Deep background and card-surface tones sampled from `hero-main.jpg`'s
  night-sky/panel regions.
- Accent blues sampled from `logo-icon.png`'s "T" mark (`#0B6ED8` body
  gradient, `#06278E` deep shade) and from the glowing icon ring color in
  `hero-main.jpg` (`#38C4E5`), used for glow/hover states.

These are derived, not officially specified swatches — flagged as
**NEEDS CONFIRMATION** in case an official brand color guide exists
separately from these two assets.

## 4. Content data layer: bilingual headings vs. Arabic-only body copy

**Observation.** The PDF itself already gives every section/card heading
in both Arabic and English (e.g., "قسم البانر الرئيسي (Hero Section)") —
this is official bilingual content, not a translation added here. Body
copy (paragraphs, bullet text, button labels, stat labels) is Arabic-only
in the PDF.

**Decision.** `src/data/*.ts` content files use the PDF's own bilingual
heading pairs directly (safe in both `en` and `ar` locales) and mark only
the Arabic-only body fields as `null` for the `en` locale. Components
render a `NeedsContent` placeholder wherever a field is `null`, instead of
inventing an English translation. See `src/components/base/NeedsContent.tsx`.

## 5. Default locale switched from `en` to `ar`

**Context.** The foundation phase set `defaultLocale: "en"` arbitrarily
(no content existed yet in either language). All real content from the PDF
is Arabic-only.

**Decision.** Changed `defaultLocale` in `src/i18n/routing.ts` to `"ar"` so
visiting the bare domain shows the fully-populated Arabic page rather than
an English page consisting mostly of `NeedsContent` placeholders. This is a
one-line config change, not a restructuring — `/en` remains fully
functional and ready for translated content.

## 6. Icon artwork: generic inline SVG, not the official icon set

**Conflict.** The reference design is icon-heavy — every metric, service,
value, investment bullet, and contact card carries an icon. No icon assets
were supplied (`public/icons/` is empty — see `assets.md`). Leaving every
slot empty would be the most literal reading of "don't generate assets,"
but would leave the page visibly unfinished next to the reference in
exactly the areas the reference leans on hardest.

**Decision (confirmed with the user).** `src/components/base/icons.tsx`
defines a small set of generic, hand-drawn geometric line icons (circles,
simple paths — not traced from the reference or any supplied artwork, not
a redrawing of the brand mark) rendered as inline SVG. Every consumer goes
through `<IconTile name="..." />`, so replacing this file with the real
icon set later is the only change needed — no section component touches
icon markup directly. This is UI chrome (vector line art standing in for a
missing UI kit), not a brand or content asset, and is distinct from the
"do not generate images/logos" rule, which is about photographic/brand
assets. Tracked as NEEDS CONFIRMATION — official icon set to replace this
file.

## 9. Navbar becomes a static in-flow header; Hero height adjusts to match

**Context.** Navbar was originally `fixed`, transparent-over-Hero, gaining
a solid background only on scroll — a common pattern, but explicitly
rejected on review: the Hero image must not sit behind or underneath the
Navbar, and the Navbar must occupy real, dedicated layout space as its own
distinct area, not an overlay.

**Decision.** `Navbar.tsx` is now a plain static `<header>` — no `fixed`,
no `sticky`, no scroll-tracking state, always a solid `var(--color-bg)`
background with a bottom border. It sits in normal document flow directly
above the Hero. Its height is fixed per breakpoint (`h-16` / `sm:h-[4.5rem]`
/ `lg:h-20`), and `Hero.tsx`'s height formula subtracts those exact same
values from `100dvh` (`h-[calc(100dvh-4rem)]` / `sm:h-[calc(100dvh-4.5rem)]`
/ `lg:h-[calc(100dvh-5rem)]`), so Navbar + Hero together fill the first
screen with neither gap nor overlap, without the two components needing to
share a literal height variable.

Separately, the Navbar's 7 nav-link labels (previously all `null`,
rendered as `NeedsContent` — the PDF defines no nav menu at all) were
supplied and confirmed directly by the client in chat on 2026-08-16,
superseding that NEEDS CONFIRMATION status. See `content-map.md` → Navbar
and `src/data/navbar.ts`. Two of the seven ("الأخبار"/News,
"انضم إلينا"/Join Us) have no corresponding section on this one-page
build and link to `#` rather than a fabricated destination, since adding
a News or Careers page is out of this project's scope.

## 10. Real project photos mapped by sequential order, not visual subject

**Context.** The client supplied four real photos
(`public/assets/projects/project-01.jpg` through `-04.jpg`) with explicit
instructions to map them to the four official PDF projects "in the EXACT
same order as the project data currently defined" — i.e. positionally
(`project-01` → array index 0, `project-02` → index 1, and so on), not by
matching each photo's visual subject to a project description.

**Decision.** `src/data/projects.ts` maps strictly by that confirmed
order: `project-01.jpg` → Smart Car Parking, `project-02.jpg` → Smart
Self-Service Car Wash, `project-03.jpg` → Transit & LRT Stations,
`project-04.jpg` → Metro Advertising Network. This was followed exactly
as instructed rather than second-guessed.

**Flag for the client.** Visually inspecting the four files: `project-01`
(a vertical rotary parking tower) and `project-02` (a glass car-wash bay)
clearly match their assigned projects. `project-04` (an LRT platform with
digital ad screens and an arriving train) clearly matches transit/rail
content. `project-03`, however, shows a branded mobile sales truck/kiosk
("VENUS") in a busy street — it does not visually depict a train or LRT
station. It's possible the four files were supplied in a different
intended order, or `project-03` is meant for a different project/service
entirely. Flagging this now rather than silently reordering the images
to "look right," since the client's instruction was explicit about using
positional order.

## 11. Mission/Vision/Values: card grid, and confirming Goal's position

**Context.** `content-map.md`'s Mission/Vision/Values entries were written
from a visual read of the rendered PDF and flagged "الهدف" (Goal) as
NEEDS CONFIRMATION — unclear whether it belonged folded into Mission,
into About, or as its own element. Re-rendering PDF page 2 directly
(`docs/official-content.pdf`, page 2 of 3) to check the source layout
resolved this: the card's own title is "الركائز الأربع للشركة" — literally
"the company's **four** pillars." The card lists exactly four bullets,
top to bottom: **الرؤية الواضحة** (Vision), **الرسالة القوية** (Mission),
**القيم الجوهرية** (Values), **الهدف** (Goal). The heading's own wording
("four pillars") confirms the PDF treats these as four parallel,
equally-weighted items — not three-plus-a-stray-line — so Goal stays a
distinct fourth pillar rather than being merged into Mission. This also
confirms `src/data/missionVisionValues.ts`'s existing order and wording
were already exactly correct.

**Decision.** With content confirmed correct, this pass focused on
visual polish: `MissionVisionValues.tsx` moved from the borderless
inline-row treatment (#8) to a visible `SectionHeading` + four-`Card`
grid — the same pattern `Services.tsx` uses — so the section reads as a
complete, self-contained part of the page rather than a quiet strip with
an `sr-only` heading. Values (a single dash-separated list of four names
in the PDF, not four individually-described items — see
`content-map.md`) stays as one card containing a small tag list, not
four separate value-cards, since inventing individual descriptions per
value isn't supported by the source.

## 12. Investment: real icons replace the invented bar/ring graphic

**Context.** Re-rendered PDF page 3 directly to double check Investment's
source content. It confirms exactly what `src/data/investment.ts` already
had — one intro line and four bullet points, word for word — and, just as
`content-map.md` already noted, **no image, chart, figure, or number of
any kind** is supplied for this section. The earlier implementation's
media panel (a bar chart of arbitrary heights plus a circular progress
ring, no numbers ever printed on it) was flagged on review as still
effectively "a fake investment chart" — a shape that reads as a
data visualization even without labels.

**Decision.** Removed the bar/ring graphic entirely. `Investment.tsx`'s
media panel now shows the same four icons already attached to the four
real bullets (`documentChart`, `chartLine`, `layers`, `documentCheck`),
enlarged into a 2×2 feature grid on a bordered, dot-grid-textured panel —
generic UI iconography tied to actual PDF content, not a shape implying
performance data. No numbers, percentages, or chart forms appear anywhere
in this section.

## 13. Contact: removed the fabricated Phone/Email/Address/Support cards

**Context.** The earlier implementation showed four detail cards —
Support, Phone, Email, Address — each with a label and either an em dash
or nothing where a real value would go. On review, the problem wasn't
just the dash filler: the card _categories themselves_ (the idea that
this section has a phone number, an email, an address) were never
sourced from the PDF at all. `docs/content-map.md` already flagged this
("Source content NOT present: no phone number, email address, physical
address, office hours, or social media links/handles anywhere in the
PDF"), but the UI still implied those channels exist by giving each one
its own labeled card.

**Decision.** `Contact.tsx` no longer renders any Phone/Email/Address/
Support element. The section now shows exactly what the PDF supplies —
the heading pair, the one tagline sentence ("تواصل معنا - فريق الدعم
جاهز لخدمتك على مدار الساعة" / "Contact Us — Our support team is ready
to serve you around the clock"), and the three quick-action labels — plus
a generic, unwired contact form (Name/Email/Message/Send). The form's
field _labels_ are kept: they're universal UI chrome, not a claim about
the business (no different from the "Send"/"Subscribe" labels used
elsewhere), and the section's own title, "Contact & Live Chat," implies
some interactive contact mechanism is the point of the section even
though the PDF never spells out field names. `src/data/contact.ts`'s
now-unused `contactDetails` export (email/phone/address, all `null`) was
removed rather than left as dead scaffolding for data that doesn't exist
in the source.

## 14. Footer: minimal by design, not by omission

**Context.** Re-checked all 3 PDF pages directly for this pass
specifically looking for footer content: there is none, anywhere — no
copyright line, legal/policy links, social icons, secondary nav, or
newsletter copy. The earlier implementation filled that gap with three
"—"-labeled placeholder columns and a newsletter signup block (neither
grounded in the PDF) plus an auto-generated `© {year} {brandName}` line.

**Decision.** `Footer.tsx` now shows exactly two things: the brand
lockup (`logo-full.png`, already used in Navbar and About) and the
official tagline (already used in About and previously in this same
footer) — both real, both already approved elsewhere on the page.
Everything else — the three placeholder columns, the newsletter block,
the copyright line, `legalLinks`/`socialLinks` — was removed rather than
kept empty, since the brief was explicit that a copyright year and a
newsletter are themselves things not to invent absent PDF support, not
just their specific values. `src/data/footer.ts` (which only ever
exported two permanently-empty arrays) was deleted rather than kept as
unused scaffolding. If real footer content — legal pages, social
accounts, a newsletter feature — is supplied later, this file is the one
to extend; nothing else needs to change to accommodate it.

## 15. About media panel: real photo replaces the brand-pattern placeholder

**Context.** About previously had no supplied image, so its media panel
was a deliberate placeholder built from real approved assets (the icon
mark on a dot-grid) rather than a fabricated photo. The client has now
supplied a real image specifically for this section:
`public/assets/about/about-main.jpg`.

**Decision.** `About.tsx`'s media panel now shows that file directly
(`object-cover` inside the same `aspect-[4/3]` rounded card used before —
the source is ~1195×896, already almost exactly 4:3, so essentially no
cropping occurs). The dot-grid/gradient/icon-mark placeholder treatment
was removed entirely rather than layered underneath or kept as a fallback,
since a real asset now exists. Text content, heading, and layout
(side-by-side ≥`md`, stacked below) are unchanged.

## 16. Investment media panel: abstract bars+ring restored

**Context.** An earlier pass built an abstract "analytics" graphic for
Investment's empty media slot (decorative bar heights + a conic-gradient
ring, no numbers or labels anywhere on it — the PDF supplies no chart,
image, or figures for this section). A later pass replaced it with a
plainer 2×2 grid of the bullet-point icons enlarged. The client asked for
the original bars+ring treatment back specifically.

**Decision.** Restored the exact bars+ring graphic in `Investment.tsx`:
six decorative bars of fixed, non-data-derived heights plus a
conic-gradient ring with a chart icon at its center. As before, no value,
percentage, or label is ever printed on top of it — it reads as "this is
an analytics/investment panel," not as a claim about real performance.

## 17. Static export to GitHub Pages: middleware removed, replaced statically

**Context.** Deploying to `https://taroouk.github.io/company-website/`
requires `output: "export"` (GitHub Pages only serves static files — no
Node server, no Vercel). Next.js does not support Middleware under
`output: "export"`: the build fails outright if a middleware/proxy file
is present, regardless of whether it would ever run. `src/proxy.ts`
existed solely to run next-intl's locale-prefix middleware, whose only
real job here — since `localePrefix: "always"` means every real page
already has an explicit `/ar` or `/en` segment via
`generateStaticParams` — was redirecting the bare, unprefixed `/` to the
default locale.

**Decision.** Deleted `src/proxy.ts` and added `src/app/page.tsx`: a
static page (not a redirect handler) that renders nothing but a
`<meta http-equiv="refresh">` to `{basePath}/ar/`, reproducing the same
user-facing outcome (visiting the bare domain lands on the Arabic
homepage) without needing a server. `/ar` and `/en` themselves were
never dependent on the middleware — they're pre-rendered directly by
`generateStaticParams` — so this only replaces the one piece of behavior
that genuinely needed it.

**Residual limitation, inherent to static hosting, not a bug:** the
middleware also let next-intl auto-detect a visitor's preferred language
from their `Accept-Language` header when hitting the bare `/`. A static
host has no per-request server to read that header, so this is no longer
possible — the root now always redirects to the default locale (`ar`)
regardless of browser language. This is an unavoidable trade-off of
static export, not something a different implementation choice could
have preserved.

**basePath.** `next.config.ts` sets `basePath`/`assetPrefix` to
`/company-website` (extracted into `src/lib/basePath.ts` as a single
source of truth). `next/link` gets this applied automatically, and so
does `next/image` — but _only_ when it goes through Next's own
`/_next/image` optimization endpoint. `images.unoptimized: true` (see
above — required, since that endpoint doesn't exist without a server)
turns off that whole code path, and with it the automatic basePath
handling: an unoptimized `next/image` renders a plain `<img src>` using
exactly the string it was given, unprefixed. Confirmed this the hard way
— the first build produced correct `/company-website/_next/...` chunk
URLs but bare, un-prefixed `/assets/...` image URLs that would 404 on
GitHub Pages. Fixed with `src/lib/basePath.ts`'s `withBasePath()` helper,
applied at each of the 6 `<Image src="...">` call sites across
Hero/About/Navbar/Footer/Projects (both inline `"/assets/..."` literals
and the `logos.full`/`project.image` values from the data layer).

## 18. basePath made conditional — the GH Pages config broke Vercel

**Context.** #17's config hardcoded `output: "export"` and
`basePath: "/company-website"` unconditionally, reasoning that local
`npm run build` needed to produce a usable `out/` for verification. That
reasoning didn't account for a second real deployment target: this repo
is also connected to Vercel. Every URL in a GitHub-Pages build has
`/company-website` baked into it at build time (asset paths, JS/CSS chunk
URLs, the root page's redirect target) — correct only because GitHub
Pages project sites are automatically served at
`username.github.io/repo-name/`. Vercel serves a deployment at its own
domain root, with no knowledge of that assumption, so every one of those
`/company-website`-prefixed URLs 404s there — surfaced as Vercel's
`NOT_FOUND` error, including on the very first request (the root page's
own meta-refresh points at a path that doesn't exist on Vercel).

**Decision.** `src/lib/basePath.ts` now branches on `GITHUB_PAGES=true`,
an environment variable set _only_ by `.github/workflows/deploy.yml`'s
own build step — never ambient, never inferred from the generic
`GITHUB_ACTIONS` variable (which would also be `true` for any other
workflow this repo might grow later, e.g. a PR-check job that shouldn't
silently switch into static-export mode). `next.config.ts`'s entire
export/basePath/unoptimized-images block is now conditional on this same
flag. Everywhere else — Vercel, `next start`, local dev — gets a normal
Next.js server build: no basePath, native `next/image` optimization, and
(see below) working middleware.

`src/proxy.ts` (deleted in #17, since middleware can't coexist with
`output: "export"`) is restored, since normal server builds have no such
restriction and middleware is what gives Vercel real Accept-Language
locale detection plus a fast redirect for `/`, on top of the static
fallback `src/app/page.tsx` still provides. The GitHub Pages workflow
deletes `src/proxy.ts` from its own ephemeral checkout immediately before
building (`rm -f src/proxy.ts`, one step before `npm run build:pages`) —
this only ever touches that workflow run's local copy, never the repo
itself, so the file stays present for every other build path.

**Why not just disable Vercel instead?** That was offered as the simpler
alternative (this project has no inherent need for two hosts), but the
choice belongs to whoever owns the Vercel account/integration, not to a
default assumption baked into the config. Asked directly; the answer was
to keep both working.
