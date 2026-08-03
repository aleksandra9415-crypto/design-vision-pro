import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { plans } from "@/lib/mock-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Тарифы — пакеты кредитов на генерации дизайна" },
      {
        name: "description",
        content:
          "Три разовых пакета кредитов без подписки: старт, оптимум и максимум. Коммерческая лицензия включена в любой платный пакет.",
      },
      { property: "og:title", content: "Тарифы сервиса дизайна с ИИ" },
      { property: "og:description", content: "Разовые пакеты кредитов от 490 ₽, без подписки." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-[0.02em] sm:text-4xl">Тарифы</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Никаких подписок: вы покупаете пакет кредитов, и он остаётся на счёте бессрочно. Одна
          генерация — один кредит.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.id}
              className={p.popular ? "border-primary shadow-sm" : "border-border"}
            >
              <CardContent className="flex h-full flex-col pt-6">
                {p.popular && (
                  <span className="mb-3 w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    Популярный
                  </span>
                )}
                <p className="text-lg font-medium">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-5 text-3xl font-semibold">{p.price} ₽</p>
                <p className="text-sm text-muted-foreground">{p.credits} генераций</p>
                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant={p.popular ? "default" : "outline"}>
                  <Link to="/app/billing" search={{ plan: p.id }}>
                    Выбрать пакет
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-border bg-muted/40 p-6 sm:flex-row sm:items-start">
          <ShieldCheck className="size-6 shrink-0 text-primary" />
          <div>
            <p className="font-medium">Коммерческая лицензия включена</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Право использовать результаты в проектах клиентов, презентациях и рекламе включено в
              любой платный пакет. Это не отдельная подписка и не доплата: купили кредиты — лицензия
              уже ваша.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
