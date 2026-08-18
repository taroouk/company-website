import type { Bilingual, LocalizedBody } from "./types";

export type Metric = {
  id: string;
  value: string;
  label: string;
};

// Source: docs/official-content.pdf, page 1,
// "شريط الإحصائيات والأرقام القياسية (Key Performance Metrics)".
export const metricsHeading: Bilingual = {
  ar: "شريط الإحصائيات والأرقام القياسية",
  en: "Key Performance Metrics",
};

export const metrics: LocalizedBody<Metric[]> = {
  ar: [
    { id: "clients", value: "+500", label: "عميل في مختلف القطاعات" },
    {
      id: "experience",
      value: "+10",
      label: "سنوات من الخبرة الفنية والتشاركية",
    },
    { id: "partners", value: "+100", label: "شريك نجاح ومؤسسة استثمارية" },
    {
      id: "field-projects",
      value: "+150",
      label: "مشروع ميداني منفذ بأعلى معايير الجودة",
    },
  ],
  // English labels are a faithful translation of the Arabic PDF copy above,
  // confirmed with the client as the required approach for genuine
  // AR→EN content gaps — not new marketing claims.
  en: [
    { id: "clients", value: "+500", label: "Clients across various sectors" },
    {
      id: "experience",
      value: "+10",
      label: "Years of technical and partnership experience",
    },
    {
      id: "partners",
      value: "+100",
      label: "Success partners and investment institutions",
    },
    {
      id: "field-projects",
      value: "+150",
      label: "Field projects delivered to the highest quality standards",
    },
  ],
};
