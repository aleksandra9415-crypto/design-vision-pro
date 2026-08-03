import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Sparkles } from "lucide-react";
import { AppShell } from "@/components/site/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generationHistory } from "@/lib/mock-data";

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
    <AppShell>
      <h1 className="text-2xl font-semibold tracking-tight">Личный кабинет</h1>

      <Card className="mt-6 border-border">
        <CardContent className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pt-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Баланс</p>
            <p className="mt-1 text-3xl font-semibold">12 кредитов</p>
            <p className="mt-1 text-xs text-muted-foreground">1 кредит = 1 генерация</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link to="/app/billing" search={{ plan: "optimum" }}>
                <Plus className="size-4" /> Пополнить
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/app/generator" search={{ tab: "interior" }}>
                <Sparkles className="size-4" /> Новая генерация
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <h2 className="mt-10 text-lg font-medium">История генераций</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {generationHistory.map((g) => (
          <Card key={g.id} className="overflow-hidden border-border pt-0">
            <img
              src={g.thumb}
              alt={`${g.style}, ${g.room}`}
              className="h-36 w-full object-cover"
              loading="lazy"
            />
            <CardContent className="pb-6">
              <p className="text-sm font-medium">
                {g.style} · {g.room}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {g.tab} · {g.date}
              </p>
              <Button asChild size="sm" variant="outline" className="mt-3 w-full">
                <Link to="/app/result">Открыть</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
