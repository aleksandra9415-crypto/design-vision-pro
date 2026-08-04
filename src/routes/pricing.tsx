import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PricingPlans } from "@/components/site/PricingPlans";

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

        <div className="mt-8">
          <PricingPlans ns="pricing" />
        </div>
      </section>
    </PageShell>
  );
}
