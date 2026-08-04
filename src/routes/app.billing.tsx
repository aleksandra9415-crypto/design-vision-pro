import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/site/AppShell";
import { PricingPlans } from "@/components/site/PricingPlans";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { plans } from "@/lib/mock-data";

export const Route = createFileRoute("/app/billing")({
  validateSearch: (search: Record<string, unknown>): { plan: string } => ({
    plan: typeof search["plan"] === "string" ? search["plan"] : "proekt",
  }),
  head: () => ({
    meta: [
      { title: "Оплата пакета кредитов — Vizoria" },
      { name: "description", content: "Выберите пакет кредитов и оформите оплату." },
      { property: "og:title", content: "Оплата" },
      { property: "og:description", content: "Покупка пакета кредитов без подписки." },
    ],
  }),
  component: Billing,
});

function Billing() {
  const { plan } = Route.useSearch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(plan);
  const active = plans.find((p) => p.id === selected) ?? plans[1]!;

  return (
    <AppShell
      kicker="Оплата"
      title="Выберите подходящий тариф"
      subtitle="Один кредит — один кадр. Кредиты не сгорают, подписки нет."
    >
      <PricingPlans ns="billing" selectedId={selected} onSelect={setSelected} />

      <div className="mt-10 border border-border bg-card p-8 lg:p-10">
        <p className="font-display text-2xl">Данные карты</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Пакет «{active.name}» — {active.credits} кредитов
        </p>
        <form
          className="mt-8 grid gap-6 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(`Пакет «${active.name}» оплачен (демо)`);
            navigate({ to: "/app/account" });
          }}
        >
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="card">Номер карты</Label>
            <Input
              id="card"
              required
              placeholder="0000 0000 0000 0000"
              inputMode="numeric"
              className="rounded-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="exp">Срок действия</Label>
            <Input id="exp" required placeholder="ММ/ГГ" className="rounded-none" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" required placeholder="000" inputMode="numeric" className="rounded-none" />
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className="w-full rounded-none">
              <Lock className="size-4" /> Оплатить {active.price} ₽
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Демоверсия: платёжный шлюз не подключён, деньги не списываются.
            </p>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
