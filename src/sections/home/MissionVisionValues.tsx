import { Section, Card, Text, IconTile } from "@/components/base";
import { SectionHeading } from "@/components/layouts/SectionHeading";
import {
  missionVisionValues,
  missionVisionValuesHeading,
} from "@/data/missionVisionValues";
import type { Locale } from "@/i18n/routing";

/**
 * The PDF's own card title, "الركائز الأربع للشركة" (lit. "the company's
 * four pillars"), groups exactly these four items — Vision, Mission,
 * Values, Goal — as four parallel, equally-weighted pillars, in this
 * exact order. See docs/content-map.md and docs/decisions.md #8/#11:
 * "الهدف" (Goal) is kept as its own pillar rather than folded into
 * Mission, because the PDF's own heading already frames it as one of the
 * four, not as elaboration on another.
 */
export function MissionVisionValues({ locale }: { locale: Locale }) {
  const content = missionVisionValues[locale];

  const pillars = [
    {
      id: "vision",
      icon: "eye" as const,
      label: content.visionLabel,
      body: content.vision,
    },
    {
      id: "mission",
      icon: "target" as const,
      label: content.missionLabel,
      body: content.mission,
    },
    {
      id: "values",
      icon: "spark" as const,
      label: content.valuesLabel,
      body: null,
    },
    {
      id: "goal",
      icon: "flag" as const,
      label: content.goalLabel,
      body: content.goal,
    },
  ];

  return (
    <Section id="mission-vision-values">
      <SectionHeading
        heading={missionVisionValuesHeading}
        locale={locale}
        align="center"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <Card
            key={pillar.id}
            glow
            className="flex flex-col items-start gap-3 p-6"
          >
            <IconTile name={pillar.icon} size="md" />
            <h3 className="text-base font-semibold text-[var(--color-fg)]">
              {pillar.label}
            </h3>

            {pillar.id === "values" ? (
              <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                {content.values.map((value, i) => (
                  <li
                    key={value.id}
                    className="flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)]"
                  >
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="h-0.5 w-0.5 rounded-full bg-[var(--color-fg-muted)]/60"
                      />
                    )}
                    {value.label}
                  </li>
                ))}
              </ul>
            ) : (
              <Text muted size="sm" className="leading-relaxed">
                {pillar.body}
              </Text>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
