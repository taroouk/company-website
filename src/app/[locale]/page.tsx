import { PageShell } from "@/components/layouts/PageShell";
import {
  Navbar,
  Hero,
  Metrics,
  Services,
  Projects,
  About,
  MissionVisionValues,
  Investment,
  Contact,
  Footer,
} from "@/sections/home";
import type { Locale } from "@/i18n/routing";

// The [locale] layout already validates the locale (notFound() otherwise),
// so this page can trust the param.
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };

  return (
    <PageShell
      header={<Navbar locale={locale} />}
      footer={<Footer locale={locale} />}
    >
      <Hero locale={locale} />
      <Metrics locale={locale} />
      <Services locale={locale} />
      <Projects locale={locale} />
      <About locale={locale} />
      <MissionVisionValues locale={locale} />
      <Investment locale={locale} />
      <Contact locale={locale} />
    </PageShell>
  );
}
