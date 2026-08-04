import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Sparkles, Upload } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { images, plans } from "@/lib/mock-data";
import heroWide from "@/assets/hero-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizoria — дизайн интерьера, ландшафта и фасада с ИИ" },
      {
        name: "description",
        content:
          "Vizoria: загрузите фото комнаты, дома или участка — студийная визуализация будет готова примерно за минуту.",
      },
      { property: "og:title", content: "Vizoria — дизайн интерьера, ландшафта и фасада с ИИ" },
      {
        property: "og:description",
        content:
          "Vizoria: загрузите фото комнаты, дома или участка — студийная визуализация будет готова примерно за минуту.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const heroFacts = [
  { value: "20+ стилей", label: "интерьер, ландшафт и фасад" },
  { value: "~60 секунд", label: "от фото до готового кадра" },
  { value: "0 навыков", label: "три поля и одна кнопка — справится любой" },
];

const verticals = [
  {
    to: "/interior" as const,
    label: "Дизайн интерьера",
    desc: "По фото комнаты, за минуту",
    image: images.interiorAfter,
  },
  {
    to: "/landscape" as const,
    label: "Дизайн ландшафта",
    desc: "Благоустройство участка по фото",
    image: images.landscapeAfter,
  },
  {
    to: "/facade" as const,
    label: "Дизайн фасада",
    desc: "Новый облик дома по фото",
    image: images.facadeAfter,
  },
];

const stats = [
  { value: "48 000", label: "созданных проектов" },
  { value: "12 400", label: "пользователей сервиса" },
  { value: "4,8", label: "средняя оценка сервиса" },
  { value: "Топ-10", label: "в обзорах сервисов визуализации 2026" },
];

const press = ["Т—Ж", "VC.ru", "Cossa", "Habr", "Inc."];

const steps = [
  { title: "Загрузка фото", text: "Снимок с телефона подойдёт — важно, чтобы было видно стены, окна и пол." },
  { title: "Выбор стиля", text: "Тип помещения и одно из 20+ направлений: сканди, лофт, джапанди и другие." },
  { title: "Генерация ИИ", text: "Около минуты — геометрия комнаты сохраняется, меняются отделка, свет и мебель." },
  { title: "Результат", text: "Сравниваете до/после, просите правки словами и скачиваете кадр в высоком разрешении." },
];

function StartButton({
  label = "Начать бесплатно",
  variant = "default",
}: {
  label?: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button asChild size="lg" variant={variant} className="rounded-none">
      <Link to="/app/generator" search={{ tab: "interior" }}>
        {label} <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}

function BuyButton({ label = "Купить кредиты" }: { label?: string }) {
  return (
    <Button asChild size="lg" variant="outline" className="rounded-none">
      <Link to="/pricing">
        {label} <ArrowUpRight className="size-4" />
      </Link>
    </Button>
  );
}

function Home() {
  return (
    <PageShell>
      {/* ХИРО */}
      <section className="relative h-[85svh] min-h-[480px] w-full overflow-hidden">
        <img
          src={heroWide}
          alt="Светлая гостиная в нейтральной серо-жемчужной палитре"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full origin-center object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14">
          <p className="text-sm tracking-[0.18em] text-background/70">дизайн с помощью ИИ</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-[0.02em] text-background sm:text-6xl">
            Увидеть результат до ремонта
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/80">
            Фотография комнаты, участка или фасада превращается в готовый кадр за минуту.
            Геометрия и планировка сохраняются — меняются отделка, свет и обстановка.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none bg-background text-foreground hover:bg-background/90">
              <Link to="/app/generator" search={{ tab: "interior" }}>
                Начать бесплатно <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-background/60 bg-transparent text-background hover:bg-background/15 hover:text-background"
            >
              <Link to="/pricing">Тарифы и кредиты</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-background/25 pt-6">
            {heroFacts.map((f) => (
              <div key={f.label}>
                <p className="font-display text-2xl leading-none tracking-[0.02em] text-background">
                  {f.value}
                </p>
                <p className="mt-2 text-xs text-background/70">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГЕНЕРАТОР */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Начните прямо здесь
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Загрузите фото — получите готовый результат за минуту.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-6 border border-border bg-card p-6 sm:p-8">
            <div className="flex gap-1 border border-border bg-muted p-1 text-sm">
              {["Интерьер", "Ландшафт", "Фасад"].map((t, i) => (
                <span
                  key={t}
                  className={`flex-1 px-3 py-2 text-center ${
                    i === 0 ? "bg-background font-medium" : "text-muted-foreground"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border bg-muted/30 px-6 py-8 text-center">
              <Upload className="size-6 text-muted-foreground" />
              <p className="text-sm font-medium">Перетащите фото комнаты</p>
              <p className="text-xs text-muted-foreground">или нажмите, чтобы выбрать</p>
              <Button asChild variant="outline" size="sm" className="mt-2 rounded-none">
                <Link to="/app/generator" search={{ tab: "interior" }}>
                  Выбрать файл
                </Link>
              </Button>
              <p className="mt-1 text-xs text-muted-foreground">JPG, PNG до 15 МБ</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Тип помещения</p>
              <div className="flex items-center justify-between border border-border bg-background px-3 py-2.5 text-sm">
                <span>Гостиная</span>
                <ChevronDown className="size-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Стиль</p>
              <div className="flex items-center justify-between border border-border bg-background px-3 py-2.5 text-sm">
                <span>Сканди</span>
                <ChevronDown className="size-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Уточнения (необязательно)
              </p>
              <p className="border border-border bg-muted/50 px-3 py-2.5 text-sm text-muted-foreground">
                тёплый свет, зелёный акцент, больше растений
              </p>
            </div>

            <Button asChild size="lg" className="mt-auto w-full rounded-none">
              <Link to="/app/generator" search={{ tab: "interior" }}>
                <Sparkles className="size-4" /> Сгенерировать дизайн
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ТРИ НАПРАВЛЕНИЯ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Три направления
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Выберите, что хотите изменить — интерьер, участок или фасад дома.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {verticals.map((v) => (
              <Link
                key={v.to}
                to={v.to}
                className="group block border border-border bg-card transition-colors hover:border-foreground/40"
              >
                <img
                  src={v.image}
                  alt={v.label}
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="flex items-center gap-1 font-display text-2xl leading-none tracking-[0.02em]">
                    {v.label}
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* НАС ВЫБИРАЮТ */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
            Нас выбирают
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2">
                <p className="font-display text-4xl tracking-[0.02em] sm:text-5xl">{s.value}</p>
                <p className="mt-2 max-w-[16ch] text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">О нас писали</p>
            <div className="flex flex-wrap items-center gap-2">
              {press.map((p) => (
                <span
                  key={p}
                  className="border border-border bg-card px-4 py-2 font-display text-lg tracking-[0.02em] text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕМ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Работать с нами просто
            </h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Четыре шага от снимка на телефоне до готовой визуализации.
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col bg-background p-6">
                <span className="font-display text-3xl tracking-[0.02em] text-muted-foreground/50">
                  0{i + 1}
                </span>
                <h3 className="mt-8 font-display text-2xl leading-tight tracking-[0.02em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StartButton />
            <BuyButton />
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Тарифы
            </h2>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Один кредит — один кадр. Кредиты не сгорают, подписки нет.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`flex flex-col border bg-card p-6 ${
                  p.popular ? "border-foreground" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-2xl">{p.name}</p>
                  {p.popular && (
                    <span className="bg-foreground px-2 py-1 text-[11px] uppercase tracking-widest text-background">
                      Выбирают чаще
                    </span>
                  )}
                </div>
                <p className="mt-4 font-display text-4xl tracking-[0.02em]">{p.price} ₽</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.credits} генераций · {p.desc}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={p.popular ? "default" : "outline"}
                  className="mt-6 w-full rounded-none"
                >
                  <Link to="/app/billing" search={{ plan: p.id }}>
                    Купить пакет
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <BuyButton label="Все тарифы" />
            <StartButton label="Сначала попробовать" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
