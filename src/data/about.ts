import type { Bilingual, LocalizedBody } from "./types";

export type AboutBody = {
  body: string;
};

// Source: docs/official-content.pdf, page 2,
// "قسم عن الشركة والحلول الفنية (About Us & Methodology)" > "من نحن؟ (Corporate Identity)".
export const aboutSectionHeading: Bilingual = {
  ar: "قسم عن الشركة والحلول الفنية",
  en: "About Us & Methodology",
};

export const aboutHeading: Bilingual = {
  ar: "من نحن؟",
  en: "Corporate Identity",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
export const about: LocalizedBody<AboutBody> = {
  ar: {
    body: "شركة رائدة في تقديم حلول التحول الذكي المتكاملة. نعمل في مجالات الإعلانات الذكية، تطوير المراكز التجارية، الخدمات الذكية، ومقرات البيع الذاتي، بفريق من الخبراء وشركاء استراتيجيين لتحقيق أعلى قيمة لعملائنا وتأمين استدامة تشغيلية مبتكرة.",
  },
  en: {
    body: "A leading company in delivering integrated smart-transformation solutions. We work across smart advertising, commercial-center development, smart services, and self-service sales outlets, with a team of experts and strategic partners to deliver the highest value to our clients and secure innovative operational sustainability.",
  },
};
