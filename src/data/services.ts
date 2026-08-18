import type { Bilingual, LocalizedBody } from "./types";

export type Service = {
  id: string;
  title: string;
  description: string;
  /** Local image path once one is supplied — see docs/assets.md. */
  image?: string;
};

// Source: docs/official-content.pdf, page 1,
// "قسم الخدمات الرئيسية (Core Services Overview)".
export const servicesHeading: Bilingual = {
  ar: "قسم الخدمات الرئيسية",
  en: "Core Services Overview",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
export const servicesIntro: Bilingual = {
  ar: "نقدم حلولاً متكاملة تدعم التحول الذكي وإدارة وتجهيز الأصول بكفاءة:",
  en: "We provide integrated solutions that support smart transformation and the efficient management and outfitting of assets:",
};

export const services: LocalizedBody<Service[]> = {
  ar: [
    {
      id: "dooh-network",
      title: "شبكة الإعلانات الذكية (DOOH Network)",
      description:
        "إدارة وتشغيل أحدث شاشات الـ LED الخارجية والداخلية ومحطات النقل.",
    },
    {
      id: "vip-outlets",
      title: "تطوير منافذ البيع الخارجية",
      description:
        "أتمتة وتجهيز كبائن ومنافذ البيع الذكية والمستقلة (VIP Solutions).",
    },
    {
      id: "smart-roads-security",
      title: "خدمات الطرق والأمن الذكي",
      description: "أنظمة المراقبة والتحكم بالمرور والمواقف الذكية الذاتية.",
    },
    {
      id: "interactive-field-solutions",
      title: "الحلول الميدانية التفاعلية",
      description:
        "تجهيز صالات العرض والفعاليات بكوادر هندسية ومبيعات فنية متخصصة.",
    },
  ],
  en: [
    {
      id: "dooh-network",
      title: "Smart Advertising Network (DOOH Network)",
      description:
        "Managing and operating the latest indoor and outdoor LED screens and transit-station displays.",
    },
    {
      id: "vip-outlets",
      title: "Outdoor Point-of-Sale Development",
      description:
        "Automating and outfitting smart, self-service sales kiosks and outlets (VIP Solutions).",
    },
    {
      id: "smart-roads-security",
      title: "Smart Roads & Security Services",
      description:
        "Surveillance and traffic-control systems, and self-service smart parking.",
    },
    {
      id: "interactive-field-solutions",
      title: "Interactive Field Solutions",
      description:
        "Outfitting showrooms and events with specialized engineering and technical sales teams.",
    },
  ],
};
