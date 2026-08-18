import type { Bilingual, LocalizedBody } from "./types";

export type ContactBody = {
  heading: string;
  quickActions: string[];
};

// Source: docs/official-content.pdf, page 3,
// "مركز الدعم والتواصل المباشر (Contact & Live Chat)".
// Phone, email, address, and social links are NOT present anywhere in the
// PDF — see docs/content-map.md, Contact section, NEEDS CONFIRMATION.
export const contactHeading: Bilingual = {
  ar: "مركز الدعم والتواصل المباشر",
  en: "Contact & Live Chat",
};

// English is a faithful translation of the Arabic PDF copy, confirmed with
// the client as the required approach for genuine AR→EN content gaps.
export const contact: LocalizedBody<ContactBody> = {
  ar: {
    heading: "تواصل معنا - فريق الدعم جاهز لخدمتك على مدار الساعة",
    quickActions: ["استفسار عن خدمة", "طلب عرض سعر", "اجتماع مع خبير"],
  },
  en: {
    heading:
      "Contact Us — Our support team is ready to serve you around the clock",
    quickActions: ["Service Inquiry", "Request a Quote", "Meet an Expert"],
  },
};

// No phone, email, address, hours, or social links exist anywhere in the
// PDF (see docs/content-map.md) — no data field is kept for these, since
// there is nothing to translate or confirm, only to omit. See
// docs/decisions.md #13.
