import type { Bilingual, LocalizedBody } from "./types";

export type Project = {
  id: string;
  title: string;
  description: string;
  /** Local image path — see docs/assets.md. */
  image: string;
};

// Source: docs/official-content.pdf, page 2,
// "قسم المشاريع والأعمال الميدانية (Projects Portfolio)" >
// "مشاريع الركائز الأربع الكبرى (Featured Case Studies)".
export const projectsSectionHeading: Bilingual = {
  ar: "قسم المشاريع والأعمال الميدانية",
  en: "Projects Portfolio",
};

export const projectsHeading: Bilingual = {
  ar: "مشاريع الركائز الأربع الكبرى",
  en: "Featured Case Studies",
};

// Real supplied assets (public/assets/projects/), mapped in the exact
// sequential order the client specified — project-01 through project-04
// against this array's existing project order, not by re-matching each
// photo's visual subject. See docs/decisions.md #10 for a flagged mismatch
// (project-03.jpg does not visually depict transit-lrt-stations).
const projectImages: Record<string, string> = {
  "smart-car-parking": "/assets/projects/project-01.jpg",
  "smart-car-wash": "/assets/projects/project-02.jpg",
  "transit-lrt-stations": "/assets/projects/project-03.jpg",
  "metro-ads-network": "/assets/projects/project-04.jpg",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
const projectsBase: LocalizedBody<Omit<Project, "image">[]> = {
  ar: [
    {
      id: "smart-car-parking",
      title: "مواقف السيارات الذكية",
      description:
        "تجهيز وإدارة مواقف آلية رأسية وأوتوماتيكية متطورة تعتمد على أحدث برمجيات التحكم الذكي.",
    },
    {
      id: "smart-car-wash",
      title: "المغاسل الذاتية الذكية",
      description:
        "حلول غسيل السيارات الآلي المتكامل في كبائن زجاجية ذكية تعمل دون لمس وبكفاءة تشغيلية فائقة.",
    },
    {
      id: "transit-lrt-stations",
      title: "محطات النقل والـ LRT",
      description:
        "منظومة معلومات وإعلانات ذكية وشاشات عرض تفاعلية مخصصة لمحطات القطار والنقل السريع.",
    },
    {
      id: "metro-ads-network",
      title: "شبكة إعلانات المترو",
      description:
        "شاشات إعلامية ورقمية ذات دقة عالية مخصصة لمحطات المترو الرئيسية والمساحات التجارية.",
    },
  ],
  en: [
    {
      id: "smart-car-parking",
      title: "Smart Car Parking",
      description:
        "Outfitting and managing advanced vertical, automated parking facilities powered by the latest smart-control software.",
    },
    {
      id: "smart-car-wash",
      title: "Smart Self-Service Car Wash",
      description:
        "Fully automated car-wash solutions in smart glass cabins that operate touch-free with exceptional operational efficiency.",
    },
    {
      id: "transit-lrt-stations",
      title: "Transit & LRT Stations",
      description:
        "A smart information and advertising system with interactive display screens dedicated to train and light-rail transit stations.",
    },
    {
      id: "metro-ads-network",
      title: "Metro Advertising Network",
      description:
        "High-resolution digital media screens dedicated to major metro stations and commercial spaces.",
    },
  ],
};

export const projects: LocalizedBody<Project[]> = {
  ar: projectsBase.ar.map((p) => ({ ...p, image: projectImages[p.id] })),
  en: projectsBase.en.map((p) => ({ ...p, image: projectImages[p.id] })),
};
