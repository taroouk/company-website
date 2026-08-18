import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { basePath } from "./src/lib/basePath";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  images: {
    // The default loader needs the `/_next/image` optimization endpoint,
    // which only exists on a running Next.js server — unavailable for a
    // static export served by GitHub Pages.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
