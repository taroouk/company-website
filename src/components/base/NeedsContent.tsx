import type { ElementType } from "react";
import { cn } from "@/lib/cn";

type NeedsContentProps = {
  as?: ElementType;
  label?: string;
  /** "default" for content areas; "compact" for dense chrome like nav links. */
  variant?: "default" | "compact";
  className?: string;
};

const variantClasses = {
  default:
    "gap-1.5 rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border-strong)] px-2 py-0.5 text-xs",
  compact:
    "gap-1 rounded-[var(--radius-sm)] border border-dotted border-[var(--color-fg-muted)]/40 px-1.5 py-0.5 text-[0.6875rem] opacity-70",
};

/**
 * Visible placeholder for a content slot with no official copy yet.
 * Renders instead of inventing text — see docs/decisions.md #4.
 */
export function NeedsContent({
  as: Tag = "span",
  label = "NEEDS CONTENT",
  variant = "default",
  className,
}: NeedsContentProps) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center font-medium tracking-wide text-[var(--color-fg-muted)] uppercase",
        variantClasses[variant],
        className,
      )}
    >
      {label}
    </Tag>
  );
}
