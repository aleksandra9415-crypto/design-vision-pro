import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Sparkles } from "lucide-react";
import { AppShell } from "@/components/site/AppShell";
import { Button } from "@/components/ui/button";
import { accountBalance, generationHistory } from "@/lib/mock-data";

export const Route = createFileRoute("/app/account")({
  head: () => ({
    meta: [
      { title: "Личный кабинет — баланс и история генераций" },
      { name: "description", content: "Баланс кредитов и история сгенерированных проектов." },
      { property: "og:title", content: "Личный кабинет" },
      { property: "og:description", content: "Кредиты и история генераций дизайна." },
    ],
  }),
  component: Account,
});

function Account() {
  return (
    <AppShell
      kicker="Кабинет"
      title="Личный кабинет"
      subtitle="Баланс кредитов и все ваши генерации в одном месте."
    >
      <div className="grid gap-6 border border-border bg-card p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Баланс</p>
          <p className="mt-4 font-display text-4xl tracking-[0.02em]">
            {accountBalance} кредитов
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            1 кредит — 1 кадр в стандартном качестве, 2 кредита — в PRO.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-none">
            <Link to="/app/billing" search={{ plan: "proekt" }}>
              <Plus className="size-4" /> Пополнить
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-none">
            <Link to="/app/generator" search={{ tab: "interior" }}>
              <Sparkles className="size-4" /> Новая генерация
            </Link>
          </Button>
        </div>
      </div>

      <h2 className="mt-14 font-display text-3xl tracking-[0.02em]">История генераций</h2>
      <p className="mt-3 text-muted-foreground">Готовые кадры доступны для скачивания в любой момент.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {generationHistory.map((g) => (
          <article key={g.id} className="flex flex-col border border-border bg-card">
            <img
              src={g.thumb}
              alt={`${g.style}, ${g.room}`}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm font-medium">
                {g.style} · {g.room}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {g.tab} · {g.date}
              </p>
              <Button asChild size="sm" variant="outline" className="mt-5 w-full rounded-none">
                <Link to="/app/result">Открыть</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
