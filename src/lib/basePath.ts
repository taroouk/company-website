// This app builds for two different targets: a normal Next.js server
// build (Vercel, `next start`, local dev) served at its own domain root,
// and a static export for GitHub Pages, served under `/company-website`
// because that's the repo name. The same build artifact can't be correct
// for both — a hardcoded basePath baked into every URL only works on the
// one host it was built for. `GITHUB_PAGES=true` is set explicitly (only)
// by .github/workflows/deploy.yml's build step, so this resolves to the
// GH Pages subpath there and to "" (no prefix) everywhere else, including
// Vercel. See docs/decisions.md #18.
export const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

export const basePath = isGithubPagesBuild ? "/company-website" : "";

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
