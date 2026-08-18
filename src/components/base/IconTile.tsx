import { cn } from "@/lib/cn";
import { icons, type IconName } from "./icons";

type IconTileSize = "sm" | "md" | "lg";

type IconTileProps = {
  name: IconName;
  size?: IconTileSize;
  className?: string;
};

const tileSizes: Record<IconTileSize, string> = {
  sm: "h-9 w-9 rounded-[var(--radius-sm)]",
  md: "h-11 w-11 rounded-[var(--radius-md)]",
  lg: "h-14 w-14 rounded-[var(--radius-md)]",
};

const glyphSizes: Record<IconTileSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

/**
 * Rounded tile housing a single icon — the repeated icon treatment used
 * throughout the reference design. Icon artwork is generic (see icons.tsx);
 * swapping in the official set touches only that file.
 */
export function IconTile({ name, size = "md", className }: IconTileProps) {
  const Glyph = icons[name];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-accent)]/10 text-[var(--color-accent-glow)]",
        tileSizes[size],
        className,
      )}
    >
      <Glyph className={glyphSizes[size]} />
    </span>
  );
}
