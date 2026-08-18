import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = {
  level?: HeadingLevel;
  className?: string;
  children: ReactNode;
};

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl leading-[var(--leading-tight)] font-bold",
  2: "text-3xl sm:text-4xl leading-[var(--leading-tight)] font-bold",
  3: "text-2xl sm:text-3xl leading-[var(--leading-tight)] font-semibold",
  4: "text-xl sm:text-2xl leading-[var(--leading-tight)] font-semibold",
};

export function Heading({ level = 2, className, children }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={cn(levelClasses[level], className)}>{children}</Tag>;
}
