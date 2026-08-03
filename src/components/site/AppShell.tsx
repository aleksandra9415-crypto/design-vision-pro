import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/app/generator", label: "Генератор" },
  { to: "/app/account", label: "Кабинет" },
  { to: "/app/billing", label: "Оплата" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <header className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="truncate font-display text-xl tracking-[0.02em]">Vizoria</span>
          </Link>
          <nav className="flex shrink-0 items-center gap-1">
            {nav.map((n) => (
              <Button key={n.to} asChild variant="ghost" size="sm">
                <Link to={n.to} activeProps={{ className: "bg-secondary" }}>
                  {n.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
    </div>
  );
}
