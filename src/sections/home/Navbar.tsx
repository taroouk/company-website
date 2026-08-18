"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, buttonVariants, icons } from "@/components/base";
import { LocaleSwitcher } from "@/components/layouts/LocaleSwitcher";
import { logos, brandName } from "@/data/brand";
import { navLinks } from "@/data/navbar";
import { hero } from "@/data/hero";
import type { Locale } from "@/i18n/routing";

/**
 * A static, in-flow header — not fixed/sticky and never transparent — so it
 * occupies its own real layout height above the Hero rather than overlaying
 * it. Its height (`h-16`/`sm:h-[4.5rem]`/`lg:h-20`) is the exact value the
 * Hero subtracts from `100dvh`, so together they fill the first screen with
 * no gap and no overlap. See Hero.tsx.
 */
export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const links = navLinks[locale];
  // Reuses the Hero's official secondary-CTA copy ("تواصل معنا") rather
  // than inventing separate navbar CTA text — see docs/decisions.md.
  const ctaLabel = hero[locale].secondaryCta;

  const MenuIcon = open ? icons.close : icons.menu;

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem] lg:h-20">
        <a href="#hero" className="shrink-0" aria-label={brandName[locale]}>
          <Image
            src={logos.full}
            alt={brandName[locale]}
            width={244}
            height={203}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav className="hidden items-center gap-3.5 lg:flex xl:gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-[13px] whitespace-nowrap text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className={buttonVariants("primary", "sm")}>
            {ctaLabel}
          </a>
          <LocaleSwitcher locale={locale} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={locale === "ar" ? "القائمة" : "Menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-fg)]"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-fg-muted)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={buttonVariants("primary", "sm", "self-start")}
            >
              {ctaLabel}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
