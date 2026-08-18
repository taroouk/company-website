import type { LocalizedBody } from "./types";

export type NavLink = {
  id: string;
  label: string;
  href: string;
};

// The PDF itself defines no navigation menu (see docs/content-map.md,
// Navbar) — these 7 labels and their exact order were supplied and
// confirmed directly by the client in chat, standing in for that gap.
// "news" and "join" have no corresponding section on this one-page build
// (no News/Careers page exists yet — out of scope per the "no new pages"
// rule), so they link to "#" rather than a fabricated destination.
//
// Order matches the confirmed RTL reading order exactly: under dir="rtl"
// the first array item renders rightmost, so this single array order is
// correct for both locales without any per-locale reversal.
type NavId =
  "home" | "about" | "services" | "projects" | "investment" | "news" | "join";

const hrefs: Record<NavId, string> = {
  home: "#hero",
  about: "#about",
  services: "#services",
  projects: "#projects",
  investment: "#investment",
  news: "#",
  join: "#",
};

export const navLinks: LocalizedBody<NavLink[]> = {
  ar: [
    { id: "home", label: "الرئيسية", href: hrefs.home },
    { id: "about", label: "من نحن", href: hrefs.about },
    { id: "services", label: "خدماتنا", href: hrefs.services },
    { id: "projects", label: "مشاريعنا", href: hrefs.projects },
    { id: "investment", label: "بوابة الاستثمار", href: hrefs.investment },
    { id: "news", label: "الأخبار", href: hrefs.news },
    { id: "join", label: "انضم إلينا", href: hrefs.join },
  ],
  en: [
    { id: "home", label: "Home", href: hrefs.home },
    { id: "about", label: "About Us", href: hrefs.about },
    { id: "services", label: "Our Services", href: hrefs.services },
    { id: "projects", label: "Our Projects", href: hrefs.projects },
    { id: "investment", label: "Investment Portal", href: hrefs.investment },
    { id: "news", label: "News", href: hrefs.news },
    { id: "join", label: "Join Us", href: hrefs.join },
  ],
};
