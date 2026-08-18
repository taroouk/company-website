# Homepage Content Map

Source of truth: `docs/official-content.pdf` ("دليل النصوص الرسمية الكاملة
للموقع الإلكتروني" — Official Website Copywriting Architecture), 3 pages.
Extracted 2026-08-15 by rendering each page to an image and transcribing
visually (the PDF's embedded text layer is corrupted/unreliable — see
**Extraction note** at the bottom).

Every Arabic string below is quoted exactly as it appears in the PDF.
English text in parentheses next to Arabic is the PDF's own bilingual
labeling, not a translation added here. Where I've added a plain-English
gloss for orientation, it is clearly marked "(gloss)" and is not to be used
as copy.

Nothing in this document should be treated as final page copy until
approved — this is a mapping of _what the PDF says_, not new marketing text.

---

## Navbar

**Source content: none in the PDF.** The PDF does not define a navigation
menu, its labels, or its order.

- **CONFIRMED (chat, 2026-08-16, superseding the earlier NEEDS
  CONFIRMATION below):** 7 nav labels and their exact RTL order —
  الرئيسية (Home), من نحن (About Us), خدماتنا (Our Services), مشاريعنا
  (Our Projects), بوابة الاستثمار (Investment Portal), الأخبار (News),
  انضم إلينا (Join Us). "News" and "Join Us" have no corresponding section
  on this one-page build (no News/Careers page exists), so they link to
  `#` rather than a fabricated destination — see `src/data/navbar.ts`.
- **Assets:** `logo-full.png` (see `assets.md`).
- **Required UI elements:** logo, nav links, language switcher (EN/AR — the
  project already has locale routing for this), mobile menu toggle.

---

## Hero

**Source: PDF page 1, "قسم البانر الرئيسي (Hero Section)".**

- Label "العنوان الرئيسي الفخم:" (gloss: "the elegant main headline:")
  followed by headline: **"نُطوّر اليوم.. نُدير المستقبل"**
- Label "العنوان الفرعي:" (gloss: "the subheading:") followed by:
  **"حلول ذكية متكاملة لتطوير خدمات البيع، والتجهيزات الميدانية، والشبكات
  الإعلانية الرقمية للمؤسسات والشركات."**
- Two buttons, each preceded by a role label in the source (these role
  labels describe _which_ button, they are not the button's own text):
  - "زر التفاعل الأول:" (gloss: "first interaction button:") →
    **"استكشف خدماتنا"**
  - "زر التفاعل الثاني:" (gloss: "second interaction button:") →
    **"تواصل معنا"**

**Assets:** `hero-main.jpg`.

**⚠ CONFLICT — NEEDS CONFIRMATION:** `hero-main.jpg` has its own baked-in
headline ("WE DEVELOP SMART SOLUTIONS FOR A CONNECTED FUTURE" /
"تبتكر حلول ذكية لمستقبل متصل") and tagline ("SMART SOLUTIONS | DIGITAL
FUTURE"), which do **not** match the PDF's headline/subheading above. Both
can't be shown as live text over the image without duplicating/contradicting
the image's own baked text. Needs a decision on which copy governs the Hero
before implementation.

**Required UI elements:** headline, subheading, two CTA buttons, hero
image/background.

---

## Metrics / Statistics

**Source: PDF page 1, "شريط الإحصائيات والأرقام القياسية (Key Performance
Metrics)".**

| Value | Label (Arabic, exact)                 |
| ----- | ------------------------------------- |
| +500  | عميل في مختلف القطاعات                |
| +10   | سنوات من الخبرة الفنية والتشاركية     |
| +100  | شريك نجاح ومؤسسة استثمارية            |
| +150  | مشروع ميداني منفذ بأعلى معايير الجودة |

**Assets:** none supplied for this section.

**Required UI elements:** 4 stat tiles (value + label), matches
`src/data/metrics.ts` shape already scaffolded (`id`, `label`, `value`).

**NEEDS CONFIRMATION:** English translations of the four labels (site is
bilingual; PDF only provides Arabic here).

---

## Services

**Source: PDF page 1, "قسم الخدمات الرئيسية (Core Services Overview)".**

Intro line: **"نقدم حلولاً متكاملة تدعم التحول الذكي وإدارة وتجهيز الأصول
بكفاءة:"**

1. **شبكة الإعلانات الذكية (DOOH Network):** إدارة وتشغيل أحدث شاشات الـ
   LED الخارجية والداخلية ومحطات النقل.
2. **تطوير منافذ البيع الخارجية:** أتمتة وتجهيز كبائن ومنافذ البيع الذكية
   والمستقلة (VIP Solutions).
3. **خدمات الطرق والأمن الذكي:** أنظمة المراقبة والتحكم بالمرور والمواقف
   الذكية الذاتية.
4. **الحلول الميدانية التفاعلية:** تجهيز صالات العرض والفعاليات بكوادر
   هندسية ومبيعات فنية متخصصة.

**Assets:** none (no icons or images per service — see `assets.md`).

**Required UI elements:** intro text + 4 service cards (title + description

- icon slot). Matches `src/data/services.ts` shape already scaffolded.

**NEEDS CONFIRMATION:** English copy for services (PDF is Arabic-only here);
icons/images per service.

---

## Projects

**Source: PDF page 2, "مشاريع الركائز الأربع الكبرى (Featured Case
Studies)" — presented as a table with columns المشروع (Project) /
الوصف والنص التسويقي (Description & marketing text).**

| Project (المشروع)      | Description (الوصف والنص التسويقي)                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| مواقف السيارات الذكية  | تجهيز وإدارة مواقف آلية رأسية وأوتوماتيكية متطورة تعتمد على أحدث برمجيات التحكم الذكي.     |
| المغاسل الذاتية الذكية | حلول غسيل السيارات الآلي المتكامل في كبائن زجاجية ذكية تعمل دون لمس وبكفاءة تشغيلية فائقة. |
| محطات النقل والـ LRT   | منظومة معلومات وإعلانات ذكية وشاشات عرض تفاعلية مخصصة لمحطات القطار والنقل السريع.         |
| شبكة إعلانات المترو    | شاشات إعلامية ورقمية ذات دقة عالية مخصصة لمحطات المترو الرئيسية والمساحات التجارية.        |

**Assets:** none (no images for any of the four projects — see
`assets.md`).

**Required UI elements:** section heading + 4 project cards (title +
description + image slot). Matches `src/data/projects.ts` shape already
scaffolded.

**NEEDS CONFIRMATION:** English copy for projects; one image per project.

---

## About

**Source: PDF page 2, "من نحن؟ (Corporate Identity)".**

**"شركة رائدة في تقديم حلول التحول الذكي المتكاملة. نعمل في مجالات
الإعلانات الذكية، تطوير المراكز التجارية، الخدمات الذكية، ومقرات البيع
الذاتي، بفريق من الخبراء وشركاء استراتيجيين لتحقيق أعلى قيمة لعملائنا
وتأمين استدامة تشغيلية مبتكرة."**

**Assets:** none supplied.

**Required UI elements:** heading + body paragraph, optional supporting
image (none supplied).

**NEEDS CONFIRMATION:** English translation; any supporting imagery.

---

## Mission

**Source: PDF page 2, within "الركائز الأربع للشركة (Core Values &
Mission)" card.**

**"الرسالة القوية:"** (gloss: "the strong mission:") **"تقديم قيمة
تشغيلية مستدامة للشركات والمؤسسات عبر كوادر هندسية ومبيعات احترافية."**

**NEEDS CONFIRMATION:** English translation.

---

## Vision

**Source: PDF page 2, within "الركائز الأربع للشركة (Core Values &
Mission)" card.**

**"الرؤية الواضحة:"** (gloss: "the clear vision:") **"صناعة مستقبل ذكي
يربط التكنولوجيا بالاستثمار الميداني الفعال."**

**NEEDS CONFIRMATION:** English translation.

---

## Values

**Source: PDF page 2, within "الركائز الأربع للشركة (Core Values &
Mission)" card.**

**"القيم الجوهرية:"** (gloss: "the core values:") **"الابتكار - الجودة -
الشراكة - الدقة الهندسية الميدانية."**

This is a single line of four dash-separated value names (Innovation,
Quality, Partnership, Field-engineering precision — glosses only), not four
individually-described value blocks.

**NEEDS CONFIRMATION:** whether each value needs its own description (PDF
only gives names, no elaboration per value); English translation.

---

## Investment

**Source: PDF page 3, "بوابة الاستثمار والفرص (Investment Hub)".**

Intro: **"فرص استثمارية واعدة بنموذج محدد وعوائد مستدامة."**

- دراسات جدوى دقيقة وموثوقة لكافة المشاريع الميدانية.
- تحليلات مالية وواقعية تناسب حركة السوق.
- نماذج تشغيلية مخصصة وإدارة كاملة للأصول.
- عقود استثمارية قياسية تضمن حقوق كافة الأطراف.

**Assets:** none supplied.

**Required UI elements:** heading + intro + 4-item feature/benefit list.

**NEEDS CONFIRMATION:** English translation; any investor-specific
documents/CTAs beyond the text shown.

---

## Contact

**Source: PDF page 3, "مركز الدعم والتواصل المباشر (Contact & Live
Chat)".**

Heading: **"تواصل معنا - فريق الدعم جاهز لخدمتك على مدار الساعة"**

Quick actions: **"خيارات التفاعل السريع: [استفسار عن خدمة] | [طلب عرض سعر]
| [اجتماع مع خبير]"** — three options: "استفسار عن خدمة" (service inquiry),
"طلب عرض سعر" (request a quote), "اجتماع مع خبير" (meeting with an expert).

**Source content NOT present:** no phone number, email address, physical
address, office hours, or social media links/handles anywhere in the PDF.

**Required UI elements:** heading + 3 quick-action options (buttons or
links) + contact form (fields undefined) and/or live chat entry point.

**Resolved (2026-08-17):** English translation confirmed (see
`src/data/contact.ts`). Phone/email/address/hours/social — client
direction is to omit these entirely rather than wait on confirmation, so
`Contact.tsx` shows no field or placeholder for any of them. Contact form
uses generic, content-neutral field labels (Name/Email/Message/Send) since
the PDF's own section title implies some interactive contact mechanism
belongs here even without a literal field spec — see docs/decisions.md
#13.

**Still NEEDS CONFIRMATION:** whether "live chat" is an actual planned
integration or just descriptive copy; contact form fields/destination if a
real backend is ever wired up.

---

## Footer

**Source content: none.** Re-checked directly across all 3 PDF pages for
this pass — the PDF has no footer section anywhere: no copyright line,
legal/policy links, sitemap, social icons, secondary nav, or newsletter
copy.

**Resolved (2026-08-17):** client direction is to keep the footer
minimal rather than wait on this content — `Footer.tsx` shows only the
brand lockup (`logo-full.png`) and the official tagline (both already
approved and used elsewhere on the page), with no columns, links,
newsletter block, or copyright line. See docs/decisions.md #14.

**Still NEEDS CONFIRMATION, if ever supplied:** copyright text, legal
pages, social links, secondary nav, newsletter feature.

---

## Other Official Content

Content present in the PDF that does not map cleanly to a homepage section
above:

- **"الهدف" (gloss: "the goal"),** from the same "Core Values & Mission"
  card as Vision/Mission/Values: **"الريادة في تقديم الحلول الذكية
  والتجهيزات التقنية الشاملة للقطاعات الفاخرة والميدانية."** Doesn't fit
  Mission or Vision as given (it's phrased as a goal/objective statement,
  distinct from both). **NEEDS CONFIRMATION:** where this belongs — folded
  into Mission, into About, or its own element.
- **Document metadata title:** "دليل النصوص الرسمية لموقع شركة تكنو سيلز
  ديفيلوبر" (PDF's internal `/Title` field) — descriptive of the document
  itself, not page content.
- **Page footers "صفحة 1 من 3" / "صفحة 2 من 3" / "صفحة 3 من 3"** — PDF
  pagination artifacts, not site content.

---

## Extraction note

`docs/official-content.pdf`'s embedded text layer extracts as garbled,
duplicated text when read programmatically (via `pypdf`/`pdfminer`) — text
runs from the running header appear to bleed into unrelated content blocks,
and certain glyphs (e.g. leading capital letters in bold English headings)
are dropped by the font's character map. This is a defect in how the PDF
was generated (WeasyPrint 62.3, per its metadata), not a formatting choice.

To get reliable content, each page was rendered to a PNG image (via macOS
`sips`) and read visually instead of parsed as text. All content above was
cross-checked against those renders. If the PDF is regenerated later, a
plain-text/programmatic extraction should be re-attempted and diffed against
this document.
