import Image from "next/image";
import { Container, Text } from "@/components/base";
import { logos, brandName, brandTagline } from "@/data/brand";
import { withBasePath } from "@/lib/basePath";
import type { Locale } from "@/i18n/routing";

/**
 * The PDF has no footer section anywhere across its 3 pages (re-checked
 * directly for this pass, not just inferred) — no legal links, social
 * links, secondary nav, copyright text, or newsletter copy of any kind.
 * The only footer-appropriate content that's both real and already
 * approved elsewhere on the page is the brand lockup and its tagline
 * (the tagline appears on the PDF's own cover page), so the footer is
 * deliberately minimal rather than padded out with empty columns, an
 * unsupported newsletter block, or an auto-generated copyright line —
 * see docs/decisions.md #14.
 */
export function Footer({ locale }: { locale: Locale }) {
  const tagline = brandTagline[locale];

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-accent)]/10 to-transparent" />
      <Container className="relative flex flex-col items-center gap-5 py-16 text-center sm:py-20">
        <Image
          src={withBasePath(logos.full)}
          alt={brandName[locale]}
          width={244}
          height={203}
          className="h-14 w-auto"
        />
        <Text size="sm" muted className="max-w-md leading-relaxed">
          {tagline}
        </Text>
      </Container>
    </footer>
  );
}
