"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = { ar: "EN", en: "AR" };
const targets: Record<Locale, Locale> = { ar: "en", en: "ar" };

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      locale={targets[locale]}
      className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
    >
      {labels[locale]}
    </Link>
  );
}
