import type { ReactNode } from "react";

type PageShellProps = {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
};

export function PageShell({ header, footer, children }: PageShellProps) {
  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
