import { cn } from "@/lib/cn";
import { icons } from "./icons";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

/**
 * Reserved slot for a local image that hasn't been supplied yet.
 * Swap for a real <Image src="/images/..." /> once the asset exists —
 * no surrounding markup needs to change. See docs/assets.md.
 */
export function ImagePlaceholder({
  label = "NEEDS IMAGE",
  className,
}: ImagePlaceholderProps) {
  const Glyph = icons.image;

  return (
    <div
      className={cn(
        "flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-bg-elevated-2)]",
        className,
      )}
    >
      <Glyph className="h-7 w-7 text-[var(--color-fg-muted)]/50" />
      <span className="text-[0.6875rem] font-medium tracking-wide text-[var(--color-fg-muted)]/70 uppercase">
        {label}
      </span>
    </div>
  );
}
