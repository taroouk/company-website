import { Container, IconTile, type IconName } from "@/components/base";
import { metrics, metricsHeading } from "@/data/metrics";
import { cn } from "@/lib/cn";
import type { Locale } from "@/i18n/routing";

// Presentation-only mapping from the data layer's stable ids to icon art.
const metricIcons: Record<string, IconName> = {
  clients: "users",
  experience: "clock",
  partners: "network",
  "field-projects": "building",
};

/**
 * A plain inline stats strip sitting directly below the Hero — no card
 * elevation, no overlap. Divider logic is tied to the fixed 2-col (mobile)
 * → 4-col (lg+) layout: items in column 2 get a leading divider
 * (`border-s`, a logical property so it flips correctly for RTL/LTR
 * without extra classes), and items in row 2 of the mobile grid get a top
 * divider that's turned off again at `lg`, where all four sit in one row.
 * The reference gives this strip no visible heading, so the official PDF
 * heading stays `sr-only` for structure/a11y rather than being dropped.
 */
export function Metrics({ locale }: { locale: Locale }) {
  const items = metrics[locale];

  return (
    <section
      id="metrics"
      className="pt-14 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <Container>
        <h2 className="sr-only">{metricsHeading[locale]}</h2>
        <div className="grid grid-cols-2 gap-y-6 border-t border-[var(--color-border)] pt-8 sm:pt-9 lg:grid-cols-4 lg:gap-y-0">
          {items.map((metric, i) => (
            <div
              key={metric.id}
              className={cn(
                "flex items-center gap-3 px-4 py-1 sm:gap-3.5 sm:px-6",
                i % 2 === 1 && "border-s border-[var(--color-border)]",
                i >= 2 &&
                  "border-t border-[var(--color-border)] pt-6 lg:border-t-0 lg:pt-1",
                i >= 2 && "lg:border-s lg:border-[var(--color-border)]",
              )}
            >
              <IconTile name={metricIcons[metric.id] ?? "building"} size="md" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-2xl leading-none font-bold text-[var(--color-fg)] sm:text-[1.75rem]">
                  {metric.value}
                </span>
                <span className="text-xs leading-snug text-[var(--color-fg-muted)] sm:text-sm">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
