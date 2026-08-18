import type { ReactNode } from "react";
import { Heading, Text } from "@/components/base";
import { cn } from "@/lib/cn";
import type { Bilingual } from "@/data/types";
import type { Locale } from "@/i18n/routing";

type SectionHeadingProps = {
  heading: Bilingual;
  locale: Locale;
  description?: ReactNode;
  align?: "start" | "center";
  className?: string;
};

/**
 * Renders a section heading in the active locale only. Earlier versions of
 * this component also printed the other locale's translation underneath as
 * a small eyebrow caption (mirroring how the source PDF prints every
 * heading bilingually) — removed per the site-wide requirement that only
 * one language render at a time; a bilingual site must not show Arabic and
 * English simultaneously, even as a stylistic accent.
 */
export function SectionHeading({
  heading,
  locale,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Heading level={2} className="text-[var(--color-fg)]">
        {heading[locale]}
      </Heading>
      {description && (
        <Text
          muted
          className={cn("max-w-2xl", align === "center" && "mx-auto")}
        >
          {description}
        </Text>
      )}
    </div>
  );
}
