import { Link } from "@tanstack/react-router";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/interior", label: "Интерьер" },
  { to: "/exterior", label: "Ландшафт и фасад" },
  { to: "/pro", label: "Для профи" },
  { to: "/pricing", label: "Тарифы" },
  { to: "/faq", label: "Вопросы" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="truncate text-base font-semibold tracking-tight">ЛОГО · Дизайн ИИ</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link to="/auth">Войти</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/app/generator" search={{ tab: "interior" }}>
              Попробовать
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
              Войти
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
