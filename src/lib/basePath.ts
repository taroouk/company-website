// Single source of truth for the GitHub Pages repo-name subpath, shared
// between next.config.ts (Next's own basePath/assetPrefix handling) and
// the places that construct an asset URL by hand — see
// docs/decisions.md #17.
export const basePath = "/company-website";

/**
 * next/image auto-prepends `basePath` to `src` only when going through
 * its default optimization loader. With `images.unoptimized: true` (the
 * only option without a running Next server — see next.config.ts), it
 * renders a plain `<img src>` with no basePath treatment at all, so every
 * local image path needs it applied explicitly. Use for every
 * `<Image src="/assets/...">` call.
 */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
