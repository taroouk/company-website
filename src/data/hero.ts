import type { LocalizedBody } from "./types";

export type HeroBody = {
  /** Full official headline, used for metadata / a11y. */
  headline: string | null;
  /**
   * The same official headline split at its own ".." pause so the second
   * half can take the accent colour, matching the reference's two-line
   * hero treatment. Presentation only — the wording is unchanged and
   * nothing is added. See docs/decisions.md #7.
   */
  headlineLead: string | null;
  headlineAccent: string | null;
  subheadline: string | null;
  primaryCta: string | null;
  secondaryCta: string | null;
};

// Source: docs/official-content.pdf, page 1, "قسم البانر الرئيسي (Hero Section)".
export const hero: LocalizedBody<HeroBody> = {
  ar: {
    headline: "نُطوّر اليوم.. نُدير المستقبل",
    headlineLead: "نُطوّر اليوم..",
    headlineAccent: "نُدير المستقبل",
    subheadline:
      "حلول ذكية متكاملة لتطوير خدمات البيع، والتجهيزات الميدانية، والشبكات الإعلانية الرقمية للمؤسسات والشركات.",
    primaryCta: "استكشف خدماتنا",
    secondaryCta: "تواصل معنا",
  },
  en: {
    // Faithful translation, only used as the hero image's `alt` text (the
    // image itself carries its own baked-in — untranslatable — copy, so
    // this never renders as visible HTML). Matches the English gloss
    // already recorded for this headline in docs/decisions.md #1.
    headline: "We develop today.. we manage the future",
    headlineLead: null,
    headlineAccent: null,
    subheadline: null,
    // CTA translations confirmed directly by the client in chat on
    // 2026-08-16.
    primaryCta: "Explore Our Services",
    secondaryCta: "Contact Us",
  },
};
