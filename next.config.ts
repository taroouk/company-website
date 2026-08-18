import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { basePath, isGithubPagesBuild } from "./src/lib/basePath";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// See src/lib/basePath.ts for why this branches. GitHub Pages needs a
// static export under a fixed subpath; every other target (Vercel,
// `next start`, local dev) gets a normal server build with no basePath,
// middleware, and native next/image optimization all intact.
const nextConfig: NextConfig = isGithubPagesBuild
  ? {
      output: "export",
      basePath,
      assetPrefix: `${basePath}/`,
      trailingSlash: true,
      images: {
        // The default loader needs the `/_next/image` optimization
        // endpoint, which only exists on a running Next.js server —
        // unavailable for a static export served by GitHub Pages.
        unoptimized: true,
      },
    }
  : {};

export default withNextIntl(nextConfig);
