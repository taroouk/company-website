/**
 * Shared content types for the homepage data layer.
 *
 * `Bilingual` fields come straight from the PDF, which already prints every
 * section/card heading in both Arabic and English — so both locales are
 * genuinely sourced, not translated here.
 *
 * `LocalizedBody<T>` fields are Arabic-only in the PDF. The `en` value is
 * `null` until an official translation is supplied — components render
 * `NeedsContent` instead of inventing one. See docs/decisions.md #4.
 */
import type { Locale } from "@/i18n/routing";

export type Bilingual = { ar: string; en: string };

export type LocalizedBody<T> = Record<Locale, T>;
