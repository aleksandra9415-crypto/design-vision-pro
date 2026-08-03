import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Upload } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Button } from "@/components/ui/button";
import {
  galleryExamples,
  howItWorks,
  images,
  interiorStyles,
  plans,
  testimonials,
} from "@/lib/mock-data";
import heroWide from "@/assets/hero-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizoria — дизайн интерьера, ландшафта и фасада с ИИ" },
      {
        name: "description",
        content:
          "Vizoria: загрузите фото комнаты, дома или схему расстановки мебели — студийная визуализация будет готова примерно за минуту.",
      },
      { property: "og:title", content: "Vizoria — визуализация интерьера и экстерьера" },
      {
        property: "og:description",
        content: "Визуализация интерьера, ландшафта и фасада по фото или чертежу за минуту.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "48 000", label: "созданных проектов" },
  { value: "12 400", label: "человек в работе с нами" },
  { value: "4,8", label: "средняя оценка сервиса" },
  { value: "Топ-10", label: "в обзорах сервисов визуализации 2026" },
];

const cases = [
  {
    kicker: "Правка текстом",
    title: "«Сделай светлее и убери ковёр»",
    text: "Результат не финальный кадр, а материал в работе. Опишите правку словами — композиция и геометрия комнаты сохранятся, изменится только то, о чём вы попросили.",
    image: images.interiorAfter,
    to: "/interior" as const,
    linkLabel: "Как это работает в интерьере",
  },
  {
    kicker: "Для профи",
    title: "Из схемы расстановки — в подачу клиенту",
    text: "Загружаете план с мебелью, получаете фотореалистичный кадр помещения. Дизайнеры показывают вариант прямо на встрече, вместо того чтобы неделю ждать рендер.",
    image: images.planAfter,
    to: "/pro" as const,
    linkLabel: "Сценарий для дизайнеров",
  },
  {
    kicker: "Фасад и участок",
    title: "Увидеть двор до первой лопаты",
    text: "Один снимок дома — и вы сравниваете отделку фасада, дорожки и посадки. Спор о том, где будет терраса, заканчивается за пять минут.",
    image: images.exteriorAfter,
    to: "/exterior" as const,
    linkLabel: "Ландшафт и фасад",
  },
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
      {/* HERO — полноэкранное фото */}
      <section className="relative h-[calc(100svh-65px)] min-h-[520px] w-full overflow-hidden">
        <img
          src={heroWide}
          alt="Светлая гостиная в нейтральной серо-жемчужной палитре"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full origin-center object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14">
          <p className="text-xs uppercase tracking-[0.32em] text-background/70">Vizoria</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-background sm:text-7xl">
            Сначала посмотрите,
            <br />
            <span className="italic">потом ремонтируйте</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/80">
            Фотография комнаты, фасада или план расстановки мебели превращается в готовый кадр
            интерьера. Геометрия помещения сохраняется — меняются отделка, свет и обстановка.
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
        </div>
      </section>

      {/* ЦИФРЫ */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-2">
              <p className="font-display text-4xl tracking-tight sm:text-5xl">{s.value}</p>
              <p className="mt-2 max-w-[16ch] text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ДО / ПОСЛЕ — крупно */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Одно фото — другая комната
            </h2>
            <p className="text-sm text-muted-foreground">
              Потяните ползунок, чтобы увидеть исходный кадр
            </p>
          </div>
          <div className="mt-8">
            <BeforeAfter before={images.interiorBefore} after={images.interiorAfter} />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-center">
            <Link
              to="/app/generator"
              search={{ tab: "interior" }}
              className="group flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border bg-card/60 p-8 text-center transition-colors hover:border-foreground/40 hover:bg-card lg:col-span-7"
            >
              <Upload className="size-6" />
              <span className="font-display text-2xl leading-tight">Перетащите фото сюда</span>
              <span className="text-xs text-muted-foreground">
                JPG или PNG до 15 МБ · первые 3 кадра бесплатно
              </span>
            </Link>
            <div className="flex flex-wrap gap-3 lg:col-span-5">
              <StartButton label="Загрузить фото" />
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* ДЕМО ГЕНЕРАТОРА */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Как устроена работа
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Три поля и одна кнопка
            </h2>
            <p className="mt-4 text-muted-foreground">
              Никакого обучения интерфейсу. Рядом — реальный экран генератора: снимок, стиль,
              уточнение словами. Дальше остаётся дождаться кадра.
            </p>
            <ol className="mt-8 space-y-4 border-t border-border pt-6">
              {howItWorks.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>
                    <span className="font-medium">{step.title}. </span>
                    <span className="text-sm text-muted-foreground">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <StartButton label="Попробовать бесплатно" />
              <BuyButton label="Выбрать тариф" />
            </div>
          </div>

          {/* Фрагмент интерфейса */}
          <div className="lg:col-span-7">
            <div className="border border-border bg-card p-5 shadow-[0_24px_60px_-40px_oklch(0.205_0.003_250/0.6)] sm:p-7">
              <div className="flex gap-1 border border-border bg-muted p-1 text-sm">
                {["Интерьер", "Экстерьер", "Чертёж"].map((t, i) => (
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

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Фото комнаты
                  </p>
                  <img
                    src={images.interiorBefore}
                    alt="Загруженное фото гостиной до генерации"
                    className="mt-2 h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Стиль</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {interiorStyles.slice(0, 4).map((s, i) => (
                      <span
                        key={s.id}
                        className={`border px-3 py-2 text-sm ${
                          i === 0
                            ? "border-foreground bg-foreground/5 font-medium"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 border border-border bg-muted/50 px-3 py-2.5 text-sm text-muted-foreground">
                тёплый свет, зелёный акцент, больше растений
              </p>

              <Button asChild size="lg" className="mt-5 w-full rounded-none">
                <Link to="/app/generator" search={{ tab: "interior" }}>
                  <Sparkles className="size-4" /> Сгенерировать
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* КЕЙСЫ — журнальный разворот */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Что с этим делают
          </h2>
          <div className="mt-12 space-y-20">
            {cases.map((c, i) => (
              <article
                key={c.title}
                className={`grid items-center gap-8 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <figure className={`lg:col-span-7 ${i === 1 ? "lg:col-span-6" : ""}`}>
                  <img
                    src={c.image}
                    alt={c.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className={`lg:col-span-5 ${i === 1 ? "lg:col-span-6 lg:pr-10" : ""}`}>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {c.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{c.text}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <StartButton label="Начать бесплатно" />
                    <BuyButton />
                  </div>
                  <Link
                    to={c.to}
                    className="mt-5 inline-flex items-center gap-1 border-b border-foreground/30 pb-1 text-sm font-medium hover:border-foreground"
                  >
                    {c.linkLabel} <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ПРИМЕРЫ */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Из архива работ
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {galleryExamples.map((ex) => (
              <figure key={ex.style}>
                <BeforeAfter before={ex.before} after={ex.after} />
                <figcaption className="mt-3">
                  <span className="font-display text-2xl">{ex.style}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{ex.room}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-t border-foreground/20 pt-6">
                <p className="font-display text-2xl leading-snug">«{t.text}»</p>
                <footer className="mt-5 text-sm text-muted-foreground">
                  {t.name}, {t.city}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ПРЕВЬЮ ТАРИФОВ */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Пакеты кредитов
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
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
                <p className="mt-4 font-display text-4xl tracking-tight">{p.price} ₽</p>
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

      {/* ФИНАЛЬНЫЙ CTA */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-end">
          <h2 className="max-w-lg font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Первые три кадра — за наш счёт
          </h2>
          <div className="flex flex-wrap gap-3">
            <StartButton label="Загрузить фото" />
            <BuyButton />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
