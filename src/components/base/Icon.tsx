import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
  size?: number;
  glow?: boolean;
  children?: ReactNode;
};

/**
 * Generic wrapper for swappable icon sources (SVG components, sprite refs, icon libs).
 * Replace children with real icon assets later without changing call sites.
 * With no children, renders as an empty glow-ring slot reserved for a future icon.
 */
export function Icon({
  className,
  size = 24,
  glow = false,
  children,
}: IconProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)]",
        glow &&
          "border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated-2)] shadow-[var(--shadow-glow)]",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}
