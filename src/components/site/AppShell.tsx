import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function AppShell({
  children,
  kicker,
  title,
  subtitle,
}: {
  children: ReactNode;
  kicker?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader signedIn />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14">
        {(kicker || title) && (
          <header className="mb-10">
            {kicker && (
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {kicker}
              </p>
            )}
            {title && (
              <h1 className="mt-4 font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
                {title}
              </h1>
            )}
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          </header>
        )}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
