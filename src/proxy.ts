import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// Only used on targets that run a real Next.js server (Vercel, `next
// start`, local dev) — restores automatic Accept-Language locale
// detection and a fast redirect for the bare `/`, on top of what
// src/app/page.tsx's static fallback provides. Middleware can't coexist
// with `output: "export"`, so the GitHub Pages workflow deletes this
// file from its own checkout before building. See docs/decisions.md #18.
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
