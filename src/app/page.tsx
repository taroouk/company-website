import type { Metadata } from "next";
import { defaultLocale, localeDirections } from "@/i18n/routing";
import { basePath } from "@/lib/basePath";

// With `output: "export"` there is no middleware (see docs/decisions.md
// #17), so the previous behavior of next-intl's middleware — redirecting
// the bare `/` to the default locale — is replaced by a static
// meta-refresh here. The root layout (src/app/layout.tsx) is a bare
// passthrough with no <html>/<body>, so this page supplies its own, same
// as [locale]/layout.tsx does for every other route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function RootRedirect() {
  const target = `${basePath}/${defaultLocale}/`;

  return (
    <html lang={defaultLocale} dir={localeDirections[defaultLocale]}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </head>
      <body>
        <p>
          <a href={target}>Continue</a>
        </p>
      </body>
    </html>
  );
}
