import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextSize = "sm" | "base" | "lg";

type TextProps = {
  as?: ElementType;
  size?: TextSize;
  muted?: boolean;
  className?: string;
  children: ReactNode;
};

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

export function Text({
  as: Tag = "p",
  size = "base",
  muted = false,
  className,
  children,
}: TextProps) {
  return (
    <Tag
      className={cn(
        "leading-[var(--leading-normal)]",
        sizeClasses[size],
        muted && "text-[var(--color-fg-muted)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
