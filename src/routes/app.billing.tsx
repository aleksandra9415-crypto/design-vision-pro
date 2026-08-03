import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/site/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { plans } from "@/lib/mock-data";

export const Route = createFileRoute("/app/billing")({
  validateSearch: (search: Record<string, unknown>): { plan: string } => ({
    plan: typeof search["plan"] === "string" ? search["plan"] : "optimum",
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
    <AppShell>
      <h1 className="text-2xl font-semibold tracking-[0.02em]">Оплата</h1>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <button key={p.id} onClick={() => setSelected(p.id)} className="text-left">
            <Card
              className={`h-full transition-colors ${
                selected === p.id ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <CardContent className="pt-6">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.credits} генераций</p>
                <p className="mt-3 text-2xl font-semibold">{p.price} ₽</p>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>

      <Card className="mt-8 border-border">
        <CardContent className="pt-6">
          <p className="font-medium">Данные карты</p>
          <form
            className="mt-4 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success(`Пакет «${active.name}» оплачен (демо)`);
              navigate({ to: "/app/account" });
            }}
          >
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="card">Номер карты</Label>
              <Input id="card" required placeholder="0000 0000 0000 0000" inputMode="numeric" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exp">Срок действия</Label>
              <Input id="exp" required placeholder="ММ/ГГ" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" required placeholder="000" inputMode="numeric" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full">
                <Lock className="size-4" /> Оплатить {active.price} ₽
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Демоверсия: платёжный шлюз не подключён, деньги не списываются.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </AppShell>
  );
}
