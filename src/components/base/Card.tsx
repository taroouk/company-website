import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  glow?: boolean;
  children: ReactNode;
};

export function Card({ className, glow = false, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 shadow-[var(--shadow-sm)] transition-[box-shadow,border-color] duration-[var(--duration-base)]",
        glow &&
          "hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
