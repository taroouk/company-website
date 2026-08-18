import {
  Section,
  Card,
  Text,
  IconTile,
  type IconName,
} from "@/components/base";
import { SectionHeading } from "@/components/layouts/SectionHeading";
import { services, servicesHeading, servicesIntro } from "@/data/services";
import type { Locale } from "@/i18n/routing";

// Presentation-only mapping from the data layer's stable ids to icon art.
const serviceIcons: Record<string, IconName> = {
  "dooh-network": "monitor",
  "vip-outlets": "storefront",
  "smart-roads-security": "shield",
  "interactive-field-solutions": "presentation",
};

export function Services({ locale }: { locale: Locale }) {
  const items = services[locale];

  return (
    <Section id="services">
      <SectionHeading
        heading={servicesHeading}
        locale={locale}
        align="center"
        description={servicesIntro[locale]}
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((service) => (
          <Card
            key={service.id}
            glow
            className="flex flex-col items-center gap-3 p-5 text-center"
          >
            <IconTile
              name={serviceIcons[service.id] ?? "monitor"}
              size="md"
              className="rounded-[var(--radius-md)]"
            />
            <h3 className="text-sm leading-snug font-semibold text-[var(--color-fg)]">
              {service.title}
            </h3>
            <Text muted size="sm" className="text-xs leading-relaxed">
              {service.description}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
