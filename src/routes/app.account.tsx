import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, Gift, Plus, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/site/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  accountBalance,
  accountPlan,
  accountUser,
  generationHistory,
  referralProgram,
  telegramBonus,
} from "@/lib/mock-data";
import type { TabId } from "@/lib/mock-data";

export const Route = createFileRoute("/app/account")({
  head: () => ({
    meta: [
      { title: "Личный кабинет — баланс, бонусы и история генераций" },
      {
        name: "description",
        content:
          "Баланс кредитов, активный тариф, реферальная программа и история сгенерированных проектов.",
      },
      { property: "og:title", content: "Личный кабинет" },
      { property: "og:description", content: "Кредиты, бонусы и история генераций дизайна." },
    ],
  }),
  component: Account,
});

const quickLinks: { tab: TabId; title: string; text: string }[] = [
  { tab: "interior", title: "Интерьер", text: "Комната по фото — от сканди до джапанди." },
  { tab: "landscape", title: "Ландшафт", text: "Участок, сад и зона отдыха по снимку." },
  { tab: "facade", title: "Фасад", text: "Новый облик дома с сохранением геометрии." },
];

function Account() {
  const [copied, setCopied] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);

  return (
    <AppShell
      kicker="Кабинет"
      title={`Привет, ${accountUser.name}!`}
      subtitle="Баланс кредитов, бонусы и все ваши генерации в одном месте."
    >
      <section className="border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Баланс</p>
            <p className="mt-1 font-display text-3xl tracking-[0.02em]">
              {accountBalance} кредитов
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild className="rounded-none">
              <Link to="/app/billing" search={{ plan: "proekt" }}>
                <Plus className="size-4" /> Пополнить
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none">
              <Link to="/app/generator" search={{ tab: "interior" }}>
                <Sparkles className="size-4" /> Новая генерация
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border pt-3">
          <p className="text-sm text-muted-foreground">
            1 кредит — 1 кадр в стандартном качестве, 2 кредита — в PRO.
          </p>
          <p className="text-sm">
            Активный тариф: <span className="font-medium">«{accountPlan.name}»</span>{" "}
            <Link
              to="/app/billing"
              search={{ plan: accountPlan.id }}
              className="underline underline-offset-4 hover:text-primary"
            >
              Сменить тариф
            </Link>
          </p>
        </div>
      </section>

      <h2 className="mt-8 font-display text-2xl tracking-[0.02em]">Быстрые переходы</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Откройте генератор сразу с нужным направлением.
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {quickLinks.map((q) => (
          <Link
            key={q.tab}
            to="/app/generator"
            search={{ tab: q.tab }}
            className="flex flex-col border border-border bg-card p-4 transition-colors hover:border-primary"
          >
            <span className="font-display text-lg tracking-[0.02em]">{q.title}</span>
            <span className="mt-1 text-sm text-muted-foreground">{q.text}</span>
            <span className="mt-3 text-sm font-medium">Открыть генератор →</span>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <section className="border border-border bg-card p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Реферальная программа
          </p>
          <h2 className="mt-2 font-display text-xl tracking-[0.02em]">
            Пригласи друга — получи {referralProgram.bonus} кредитов
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Кредиты начисляются после первой оплаты приглашённого друга.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Input
              readOnly
              value={referralProgram.link}
              aria-label="Ссылка-приглашение"
              className="rounded-none bg-background"
            />
            <Button
              type="button"
              variant="outline"
              className="shrink-0 rounded-none"
              onClick={() => {
                void navigator.clipboard?.writeText(`https://${referralProgram.link}`);
                setCopied(true);
                toast.success("Ссылка скопирована");
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />} Скопировать
            </Button>
          </div>

          <div className="mt-5 grid gap-4 border-t border-border pt-4 sm:grid-cols-3">
            {[
              { label: "Приглашено друзей", value: referralProgram.invited },
              { label: "Оплатили", value: referralProgram.paid },
              { label: "Заработано кредитов", value: referralProgram.earned },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl tracking-[0.02em]">{s.value}</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col border border-border bg-card p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Бонус</p>
          <h2 className="mt-2 font-display text-xl tracking-[0.02em]">
            Подпишись на нас — получи {telegramBonus.credits} кредитов
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Подпишитесь на Telegram-канал Vizoria: подборки стилей, обновления и разборы кейсов.
          </p>
          <div className="mt-auto pt-4">
            <Button
              type="button"
              className="w-full rounded-none"
              onClick={() => toast.success(`Бонус ${telegramBonus.credits} кредитов начислен (демо)`)}
            >
              <Send className="size-4" /> Подписаться и получить {telegramBonus.credits} кредитов
            </Button>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Gift className="size-3.5" /> Демоверсия: бонус имитируется.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-display text-2xl tracking-[0.02em]">История генераций</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Готовые кадры доступны для скачивания в любой момент.
          </p>
        </div>
        <Link
          to="/app/history"
          search={{ tab: "all" }}
          className="text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          Все генерации →
        </Link>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {generationHistory.slice(0, 4).map((g) => (
          <article key={g.id} className="flex flex-col border border-border bg-card">
            <img
              src={g.thumb}
              alt={`${g.style}, ${g.room}`}
              className="h-36 w-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-4">
              <div className="h-10">
                <p className="truncate text-sm font-medium leading-5">{g.style}</p>
                <p className="truncate text-sm leading-5 text-muted-foreground">{g.room}</p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {g.tab} · {g.date}
              </p>
              <Button asChild size="sm" variant="outline" className="mt-3 w-full rounded-none">
                <Link to="/app/result" search={{ id: g.id }}>
                  Открыть
                </Link>
              </Button>
            </div>
          </article>
        ))}

      </div>

      <section className="mt-8 border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Безопасность
            </p>
            <h2 className="mt-1 font-display text-xl tracking-[0.02em]">Смена пароля</h2>
          </div>
          <Button
            type="button"
            variant="outline"
            className="rounded-none"
            aria-expanded={passwordOpen}
            onClick={() => setPasswordOpen((v) => !v)}
          >
            {passwordOpen ? "Свернуть" : "Изменить пароль"}
          </Button>
        </div>

        {passwordOpen && (
          <form
            className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-3"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
              setPasswordOpen(false);
              toast.success("Пароль обновлён (демо)");
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="current-password">Текущий пароль</Label>
              <Input
                id="current-password"
                type="password"
                required
                autoComplete="current-password"
                className="rounded-none bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Новый пароль</Label>
              <Input
                id="new-password"
                type="password"
                required
                autoComplete="new-password"
                className="rounded-none bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтверждение пароля</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                autoComplete="new-password"
                className="rounded-none bg-background"
              />
            </div>
            <div className="sm:col-span-3">
              <Button type="submit" className="rounded-none">
                Сохранить
              </Button>
            </div>
          </form>
        )}
        <p className="mt-3 text-xs text-muted-foreground">Демоверсия: пароль не сохраняется.</p>
      </section>
    </AppShell>
  );
}
