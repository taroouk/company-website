import Image from "next/image";
import { Section, Text } from "@/components/base";
import { SectionHeading } from "@/components/layouts/SectionHeading";
import { about, aboutHeading, aboutSectionHeading } from "@/data/about";
import { brandName, brandTagline, logos } from "@/data/brand";
import type { Locale } from "@/i18n/routing";

/**
 * Media panel uses the real supplied photo (public/assets/about/about-main.jpg,
 * ~4:3 already) — not the earlier brand-pattern placeholder built from the
 * icon mark, now that a real asset exists for this section.
 */
export function About({ locale }: { locale: Locale }) {
  const content = about[locale];
  const tagline = brandTagline[locale];

  return (
    <Section id="about">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col gap-6">
          <Image
            src={logos.full}
            alt={brandName[locale]}
            width={244}
            height={203}
            className="h-14 w-auto self-start"
          />

          <SectionHeading
            heading={aboutSectionHeading}
            locale={locale}
            align="start"
            description={aboutHeading[locale]}
          />

          <Text muted className="max-w-xl leading-[var(--leading-relaxed)]">
            {content.body}
          </Text>

          {tagline && (
            <Text size="sm" className="text-[var(--color-fg-muted)]">
              {tagline}
            </Text>
          )}
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-glow)]">
          <Image
            src="/assets/about/about-main.jpg"
            alt={aboutHeading[locale]}
            fill
            sizes="(min-width: 768px) 42vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
