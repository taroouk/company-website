import { Section, Text, IconTile, type IconName } from "@/components/base";
import { SectionHeading } from "@/components/layouts/SectionHeading";
import {
  investment,
  investmentHeading,
  investmentSectionHeading,
} from "@/data/investment";
import type { Locale } from "@/i18n/routing";

// Presentation-only: one icon per official bullet, in source order.
const pointIcons: IconName[] = [
  "documentChart",
  "chartLine",
  "layers",
  "documentCheck",
];

// Decorative bar heights for the abstract analytics graphic below — not
// derived from any real figure, so no value or label is ever printed on
// top of them. Purely a "this is an investment/analytics panel" visual
// cue, not a representation of actual performance data (the PDF supplies
// no chart, figures, or statistics for this section).
const barHeights = [38, 62, 48, 84, 56, 70];

/**
 * The PDF supplies no image, chart, or figures for this section (see
 * docs/content-map.md → Investment) — only an intro line and four bullet
 * points. The media panel is an abstract bars+ring "analytics" graphic:
 * illustrative only, no numbers or labels anywhere on it, so it never
 * implies real performance data.
 */
export function Investment({ locale }: { locale: Locale }) {
  const content = investment[locale];

  return (
    <Section id="investment">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col gap-6">
          <SectionHeading
            heading={investmentSectionHeading}
            locale={locale}
            align="start"
            description={investmentHeading[locale]}
          />

          <Text className="text-[var(--color-fg)]">{content.intro}</Text>

          <ul className="flex flex-col gap-3">
            {content.points.map((point, i) => (
              <li
                key={`point-${i}`}
                className="flex items-center gap-3.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3"
              >
                <IconTile name={pointIcons[i] ?? "documentChart"} size="sm" />
                <Text muted size="sm">
                  {point}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex h-full items-end justify-center gap-6">
            <div className="flex h-full items-end gap-2.5">
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-4 rounded-t-[var(--radius-sm)] bg-gradient-to-t from-[var(--color-accent-deep)] to-[var(--color-accent-glow)] opacity-90 sm:w-5"
                />
              ))}
            </div>
            <div
              className="mb-2 h-24 w-24 shrink-0 rounded-full sm:h-28 sm:w-28"
              style={{
                background:
                  "conic-gradient(var(--color-accent-glow) 0deg 235deg, var(--color-border) 235deg 360deg)",
              }}
            >
              <div className="flex h-full w-full items-center justify-center p-2">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--color-bg-elevated)]">
                  <IconTile
                    name="chartLine"
                    size="md"
                    className="border-0 bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
