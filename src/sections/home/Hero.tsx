import Image from "next/image";
import { buttonVariants } from "@/components/base";
import { hero } from "@/data/hero";
import { withBasePath } from "@/lib/basePath";
import type { Locale } from "@/i18n/routing";

/**
 * `hero-main.jpg` already carries the Hero headline, tagline and service
 * icon row baked into its pixels. Per direction, the image is shown
 * essentially as-is — full-bleed, sharp, unblurred, no scrim — and no HTML
 * headline/paragraph duplicates that text. The only overlay is the two
 * official CTA buttons, positioned in the image's lower-left "empty"
 * street/reflection band, just beneath its own text/icon block.
 *
 * Height: the Navbar is a static, in-flow header (not fixed/overlaid), so
 * the Hero no longer owns the full `100dvh` — it subtracts the Navbar's
 * exact height at each breakpoint (`4rem`/`4.5rem`/`5rem`, matching
 * Navbar.tsx's `h-16`/`sm:h-[4.5rem]`/`lg:h-20`) so the two together fill
 * the first screen with neither gap nor overlap.
 *
 * Crop: `object-left` anchors the crop window to the image's leading edge
 * at every breakpoint. Because the Hero's height is always shorter,
 * relative to its width, than the source photo's own 1399×768 (≈1.82)
 * aspect ratio, `object-cover` is height-constrained here — the full image
 * height (and therefore every line of baked-in text, top to bottom) always
 * stays in frame; only the right-hand portion of the image (the billboard
 * and parking tower) gets trimmed on narrower viewports. This is the
 * opposite crop from the previous pass, which anchored right to isolate
 * the tower — see docs/decisions.md #1 for the full history.
 */
export function Hero({ locale }: { locale: Locale }) {
  const content = hero[locale];

  return (
    <section
      id="hero"
      className="relative h-[calc(100dvh-4rem)] min-h-[420px] overflow-hidden sm:h-[calc(100dvh-4.5rem)] lg:h-[calc(100dvh-5rem)]"
    >
      <Image
        src={withBasePath("/assets/hero/hero-main.jpg")}
        alt={content.headline ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover object-left"
      />

      <div className="absolute inset-x-0 bottom-[9%] px-5 sm:bottom-[10%] sm:px-8 lg:bottom-[12%] lg:px-14">
        <div className="flex flex-wrap items-center gap-3">
          <a href="#contact" className={buttonVariants("secondary", "lg")}>
            {content.secondaryCta}
          </a>
          <a href="#services" className={buttonVariants("primary", "lg")}>
            {content.primaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
