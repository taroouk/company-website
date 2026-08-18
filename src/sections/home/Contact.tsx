import { Card, Section, Text, buttonVariants } from "@/components/base";
import { SectionHeading } from "@/components/layouts/SectionHeading";
import { contact, contactHeading } from "@/data/contact";
import type { Locale } from "@/i18n/routing";

// Generic contact-form field chrome — universal UI labels ("Name",
// "Email", "Message", "Send"), not business information, so this stays
// even though the PDF defines no specific field list. See
// docs/decisions.md #13: the PDF titles this section "Contact & Live
// Chat" and describes 24/7 support, which implies some interactive
// contact mechanism belongs here even without a literal field spec.
const fieldLabels: Record<
  Locale,
  { name: string; email: string; message: string; send: string }
> = {
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال",
  },
  en: { name: "Name", email: "Email", message: "Message", send: "Send" },
};

const inputClass =
  "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-sm text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-border-strong)]";

/**
 * The PDF supplies a heading pair, one tagline sentence, and three
 * quick-action labels for Contact — nothing else. No phone, email,
 * address, hours, or social links exist anywhere in the source (see
 * docs/content-map.md → Contact), so none are shown here — the earlier
 * "—"-filled detail cards for Phone/Email/Address/Support were removed
 * rather than left as filler. See docs/decisions.md #13.
 */
export function Contact({ locale }: { locale: Locale }) {
  const content = contact[locale];
  const fields = fieldLabels[locale];

  return (
    <Section id="contact">
      <SectionHeading heading={contactHeading} locale={locale} align="center" />

      <div className="mt-12 grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-5">
          <Text size="lg" className="text-[var(--color-fg)]">
            {content.heading}
          </Text>

          <div className="flex flex-wrap gap-2">
            {content.quickActions.map((action, i) => (
              <span
                key={`action-${i}`}
                className={buttonVariants("secondary", "sm")}
              >
                {action}
              </span>
            ))}
          </div>
        </div>

        {/* Structural form shell — not wired to a backend (see
            .env.example NEXT_PUBLIC_CONTACT_ENDPOINT). */}
        <Card glow className="flex flex-col gap-3.5 p-5 sm:p-6">
          <label className="flex flex-col gap-1.5 text-sm text-[var(--color-fg-muted)]">
            {fields.name}
            <input type="text" name="name" className={inputClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-[var(--color-fg-muted)]">
            {fields.email}
            <input type="email" name="email" className={inputClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-[var(--color-fg-muted)]">
            {fields.message}
            <textarea name="message" rows={4} className={inputClass} />
          </label>
          <button
            type="button"
            className={buttonVariants("primary", "md", "self-start")}
          >
            {fields.send}
          </button>
        </Card>
      </div>
    </Section>
  );
}
