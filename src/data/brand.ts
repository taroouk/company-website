import type { Bilingual } from "./types";

// Source: docs/official-content.pdf, page 1 running header, and the
// supplied logo files (public/assets/brand/) — genuinely bilingual and
// official in both locales, not a translation added here.
export const brandName: Bilingual = {
  ar: "تكنو سيلز ديفيلوبر",
  en: "Techno Sales Developer",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
export const brandTagline: Bilingual = {
  ar: "هوية بصرية وتقنية متكاملة مخصصة للتطوير الميداني الذكي والمبيعات",
  en: "An integrated visual and technical identity dedicated to smart field development and sales",
};

export const logos = {
  full: "/assets/brand/logo-full.png",
  icon: "/assets/brand/logo-icon.png",
  wordmark: "/assets/brand/logo-wordmark.png",
} as const;
