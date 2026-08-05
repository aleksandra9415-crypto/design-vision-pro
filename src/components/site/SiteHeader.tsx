import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { accountBalance, accountUser } from "@/lib/mock-data";

import type { TabId } from "@/lib/mock-data";

const nav = [
  { to: "/interior", label: "Интерьер", tab: "interior" },
  { to: "/landscape", label: "Ландшафт", tab: "landscape" },
  { to: "/facade", label: "Фасад", tab: "facade" },
  { to: "/pricing", label: "Тарифы" },
  { to: "/faq", label: "Вопросы" },
] as const;

type NavItem = (typeof nav)[number];

function visibleNav(signedIn: boolean): readonly NavItem[] {
  return signedIn ? nav.filter((item) => "tab" in item) : nav;
}

function navLinkProps(item: NavItem, signedIn: boolean) {
  if (signedIn && "tab" in item) {
    return {
      to: "/app/generator" as const,
      search: { tab: item.tab as TabId },
    };
  }
  return { to: item.to };
}

export function SiteHeader({ signedIn = false }: { signedIn?: boolean }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="min-w-0">
          <span className="truncate font-display text-2xl leading-none tracking-[0.02em]">
            Vizoria
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {visibleNav(signedIn).map((item) => (
            <Link
              key={item.to}
              {...navLinkProps(item, signedIn)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          {signedIn && (
            <Link
              to="/app/history"
              search={{ tab: "all" as const }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Мои генерации
            </Link>
          )}
        </nav>


        <div className="flex shrink-0 items-center gap-2">
          {signedIn ? (
            <>
              <Link
                to="/app/billing"
                search={{ plan: "proekt" }}
                className="hidden h-9 items-center border border-border px-3 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              >
                {accountBalance} кредитов
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex h-9 items-center gap-2 border border-border px-3 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="grid size-6 place-items-center rounded-full bg-foreground text-background">
                      <User className="size-3.5" />
                    </span>
                    <span className="hidden max-w-28 truncate sm:inline">{accountUser.name}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-none bg-card">
                  <DropdownMenuItem asChild className="rounded-none">
                    <Link to="/app/account">Личный кабинет</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="rounded-none"
                    onSelect={() => {
                      toast.success("Вы вышли из аккаунта (демо)");
                      navigate({ to: "/" });
                    }}
                  >
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                <Link to="/auth">Войти</Link>
              </Button>
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link to="/app/generator" search={{ tab: "interior" }}>
                  Попробовать
                </Link>
              </Button>
            </>
          )}
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
            {visibleNav(signedIn).map((item) => (
              <Link
                key={item.to}
                {...navLinkProps(item, signedIn)}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            {signedIn ? (
              <>
                <Link
                  to="/app/history"
                  search={{ tab: "all" as const }}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-muted-foreground"
                >
                  Мои генерации
                </Link>
                <Link
                  to="/app/account"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium"
                >
                  Личный кабинет · {accountBalance} кредитов
                </Link>
                <button
                  type="button"
                  className="py-2 text-left text-sm text-muted-foreground"
                  onClick={() => {
                    setOpen(false);
                    toast.success("Вы вышли из аккаунта (демо)");
                    navigate({ to: "/" });
                  }}
                >
                  Выйти
                </button>
              </>

            ) : (
              <Link to="/auth" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                Войти
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
