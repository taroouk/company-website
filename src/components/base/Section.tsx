import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
};

export function Section({
  as: Tag = "section",
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn("py-16 sm:py-20 lg:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
