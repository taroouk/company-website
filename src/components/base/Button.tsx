import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-fg)] shadow-[0_8px_28px_-10px_rgb(20_112_240/0.9)] hover:brightness-110",
  secondary:
    "bg-[var(--color-bg-elevated)]/70 text-[var(--color-fg)] border border-[var(--color-border)] backdrop-blur hover:border-[var(--color-border-strong)]",
  ghost:
    "bg-transparent text-[var(--color-fg)] border border-transparent hover:border-[var(--color-border)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3",
};

export function buttonVariants(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(
    "inline-flex items-center justify-center rounded-[var(--radius-full)] font-medium transition-[filter,border-color,background-color,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
