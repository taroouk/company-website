import type { Bilingual, LocalizedBody } from "./types";

export type InvestmentBody = {
  intro: string;
  points: string[];
};

// Source: docs/official-content.pdf, page 3,
// "بوابة الاستثمار والدعم والتواصل (Investor Portal & Support)" >
// "بوابة الاستثمار والفرص (Investment Hub)".
export const investmentSectionHeading: Bilingual = {
  ar: "بوابة الاستثمار والدعم والتواصل",
  en: "Investor Portal & Support",
};

export const investmentHeading: Bilingual = {
  ar: "بوابة الاستثمار والفرص",
  en: "Investment Hub",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
export const investment: LocalizedBody<InvestmentBody> = {
  ar: {
    intro: "فرص استثمارية واعدة بنموذج محدد وعوائد مستدامة.",
    points: [
      "دراسات جدوى دقيقة وموثوقة لكافة المشاريع الميدانية.",
      "تحليلات مالية وواقعية تناسب حركة السوق.",
      "نماذج تشغيلية مخصصة وإدارة كاملة للأصول.",
      "عقود استثمارية قياسية تضمن حقوق كافة الأطراف.",
    ],
  },
  en: {
    intro:
      "Promising investment opportunities with a defined model and sustainable returns.",
    points: [
      "Accurate, reliable feasibility studies for all field projects.",
      "Realistic financial analyses suited to market movement.",
      "Customized operating models and complete asset management.",
      "Standard investment contracts that safeguard the rights of all parties.",
    ],
  },
};
