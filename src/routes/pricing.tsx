import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { plans, styleCatalog, totalStyles } from "@/lib/mock-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Тарифы — пакеты кредитов на генерации дизайна" },
      {
        name: "description",
        content:
          "Три разовых пакета кредитов без подписки: «Эскиз», «Проект» и «Объект». 34 стиля, редактор фото и коммерческая лицензия.",
      },
      { property: "og:title", content: "Тарифы сервиса дизайна с ИИ" },
      { property: "og:description", content: "Разовые пакеты кредитов от 990 ₽, без подписки." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function StyleList({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`styles-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-2 text-left text-sm"
      >
        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
        <span className="flex-1">
          Доступные стили — <span className="font-medium">{totalStyles}</span>
        </span>
        <ChevronDown
          className={`mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div id={`styles-${id}`} className="mt-3 space-y-3 border-l border-border pl-4">
          {styleCatalog.map((g) => (
            <div key={g.group}>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {g.group} · {g.items.length}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Consents() {
  return (
    <div className="space-y-3">
      <label htmlFor="terms" className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground">
        <Checkbox id="terms" className="mt-0.5" />
        <span>
          Принимаю условия{" "}
          <Link to="/terms" className="underline underline-offset-2">
            Пользовательского соглашения
          </Link>
        </span>
      </label>
      <label htmlFor="privacy" className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground">
        <Checkbox id="privacy" className="mt-0.5" />
        <span>
          Согласие на{" "}
          <Link to="/privacy" className="underline underline-offset-2">
            обработку персональных данных
          </Link>
        </span>
      </label>
      <label htmlFor="ads" className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground">
        <Checkbox id="ads" className="mt-0.5" />
        <span>
          Согласие на информационную и рекламную рассылку (см.{" "}
          <Link to="/offer" className="underline underline-offset-2">
            оферту
          </Link>
          )
        </span>
      </label>
    </div>
  );
}

function PayMethods() {
  const methods = ["МИР", "VISA", "Mastercard", "СБП"];
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {methods.map((m) => (
          <span
            key={m}
            className="border border-border px-2 py-1 text-[11px] uppercase tracking-widest text-muted-foreground"
          >
            {m}
          </span>
        ))}
      </div>
      <Link
        to="/payment-info"
        className="mt-3 inline-block text-xs text-muted-foreground underline underline-offset-2"
      >
        Способы оплаты и безопасность
      </Link>
    </div>
  );
}

function Pricing() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Тарифы</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
          Выберите подходящий <span className="font-semibold text-primary">тариф</span>
        </h1>
        <p className="mt-3 text-muted-foreground">Прозрачные цены без скрытых платежей</p>
        <p className="mt-8 text-sm text-muted-foreground">
          1 кредит — 1 кадр в стандартном качестве, 2 кредита — в PRO. Кредиты не сгорают, подписки
          нет.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col border bg-card p-8 lg:p-10 ${
                p.popular ? "border-foreground" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-2xl">{p.name}</p>
                {p.popular && (
                  <span className="bg-foreground px-2 py-1 text-[11px] uppercase tracking-widest text-background">
                    Популярный
                  </span>
                )}
              </div>
              <p className="mt-6 font-display text-4xl tracking-[0.02em]">{p.price} ₽</p>
              <p className="mt-4 text-sm font-medium">{p.credits} кредитов</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <p className="mt-4 text-xs text-muted-foreground">{p.perFrame}</p>

              <hr className="mt-8 border-border" />

              <p className="mt-8 text-[11px] uppercase tracking-widest text-muted-foreground">
                Что входит
              </p>
              <ul className="mt-4 flex-1 space-y-4">
                {p.features.map((f) =>
                  f.startsWith("Доступные стили") ? (
                    <li key={f}>
                      <StyleList id={p.id} />
                    </li>
                  ) : (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                      <span>{f}</span>
                    </li>
                  ),
                )}
              </ul>

              <Button
                asChild
                size="lg"
                variant={p.popular ? "default" : "outline"}
                className="mt-8 w-full rounded-none"
              >
                <Link to="/app/billing" search={{ plan: p.id }}>
                  Оплатить
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 border border-border bg-muted/40 p-6 sm:flex-row sm:items-start sm:justify-between">
          <Consents />
          <PayMethods />
        </div>
      </section>
    </PageShell>
  );
}
