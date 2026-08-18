import type { Bilingual, LocalizedBody } from "./types";

export type ValueItem = {
  id: string;
  label: string;
};

export type MissionVisionValuesBody = {
  visionLabel: string;
  vision: string;
  missionLabel: string;
  mission: string;
  valuesLabel: string;
  values: ValueItem[];
  goalLabel: string;
  goal: string;
};

// Source: docs/official-content.pdf, page 2,
// "الركائز الأربع للشركة (Core Values & Mission)".
// Note: "الهدف" (goal) is filed under "Other Official Content" in
// content-map.md (it doesn't map cleanly to Mission/Vision/Values) but is
// kept here since the PDF groups it in the same card.
export const missionVisionValuesHeading: Bilingual = {
  ar: "الركائز الأربع للشركة",
  en: "Core Values & Mission",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
export const missionVisionValues: LocalizedBody<MissionVisionValuesBody> = {
  ar: {
    visionLabel: "الرؤية الواضحة",
    vision: "صناعة مستقبل ذكي يربط التكنولوجيا بالاستثمار الميداني الفعال.",
    missionLabel: "الرسالة القوية",
    mission:
      "تقديم قيمة تشغيلية مستدامة للشركات والمؤسسات عبر كوادر هندسية ومبيعات احترافية.",
    valuesLabel: "القيم الجوهرية",
    values: [
      { id: "innovation", label: "الابتكار" },
      { id: "quality", label: "الجودة" },
      { id: "partnership", label: "الشراكة" },
      { id: "precision", label: "الدقة الهندسية الميدانية" },
    ],
    goalLabel: "الهدف",
    goal: "الريادة في تقديم الحلول الذكية والتجهيزات التقنية الشاملة للقطاعات الفاخرة والميدانية.",
  },
  en: {
    visionLabel: "Clear Vision",
    vision:
      "Building a smart future that connects technology with effective field investment.",
    missionLabel: "Strong Mission",
    mission:
      "Delivering sustainable operational value to companies and institutions through professional engineering and sales teams.",
    valuesLabel: "Core Values",
    values: [
      { id: "innovation", label: "Innovation" },
      { id: "quality", label: "Quality" },
      { id: "partnership", label: "Partnership" },
      { id: "precision", label: "Field Engineering Precision" },
    ],
    goalLabel: "Goal",
    goal: "Leadership in delivering smart solutions and comprehensive technical outfitting for premium and field sectors.",
  },
};
