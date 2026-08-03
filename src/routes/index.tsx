import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Upload } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Button } from "@/components/ui/button";
import { galleryExamples, howItWorks, images, interiorStyles, testimonials } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Студия дизайна интерьера, ландшафта и фасада с ИИ" },
      {
        name: "description",
        content:
          "Загрузите фото комнаты, дома или схему расстановки мебели — студийная визуализация будет готова примерно за минуту.",
      },
      { property: "og:title", content: "Студия дизайна интерьера и экстерьера" },
      {
        property: "og:description",
        content: "Визуализация интерьера, ландшафта и фасада по фото или чертежу за минуту.",
      },
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

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Студия визуализации
              </p>
              <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
                Сначала посмотрите,
                <br />
                <span className="italic text-primary">потом ремонтируйте</span>
              </h1>
            </div>
            <p className="max-w-sm text-base text-muted-foreground lg:col-span-5 lg:pb-3">
              Фотография комнаты, фасада или план расстановки мебели превращается в готовый кадр
              интерьера. Геометрия помещения сохраняется — меняются отделка, свет и обстановка.
            </p>
          </div>

          {/* Крупное до/после как доказательство */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <BeforeAfter before={images.interiorBefore} after={images.interiorAfter} />
            </div>

            {/* Живая зона загрузки прямо в композиции */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-4">
              <Link
                to="/app/generator"
                search={{ tab: "interior" }}
                className="group flex flex-1 flex-col items-center justify-center gap-3 border-2 border-dashed border-border bg-card/60 p-8 text-center transition-colors hover:border-primary/60 hover:bg-card"
              >
                <Upload className="size-6 text-primary" />
                <span className="font-display text-2xl leading-tight">Перетащите фото сюда</span>
                <span className="text-xs text-muted-foreground">
                  JPG или PNG до 15 МБ · первые 3 кадра бесплатно
                </span>
              </Link>
              <div>
                <Button asChild size="lg" className="w-full rounded-none">
                  <Link to="/app/generator" search={{ tab: "interior" }}>
                    Открыть генератор <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Link
                  to="/pricing"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Пакеты кредитов <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
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
              Никакого обучения интерфейсу. Ниже — реальный экран генератора: снимок, стиль,
              уточнение словами. Дальше остаётся дождаться кадра.
            </p>
            <ol className="mt-8 space-y-4 border-t border-border pt-6">
              {howItWorks.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="font-medium">{step.title}. </span>
                    <span className="text-sm text-muted-foreground">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Фрагмент интерфейса */}
          <div className="lg:col-span-7">
            <div className="border border-border bg-card p-5 shadow-[0_24px_60px_-40px_oklch(0.235_0.012_60/0.6)] sm:p-7">
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
                            ? "border-primary bg-primary/10 font-medium"
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
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">{c.kicker}</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{c.text}</p>
                  <Link
                    to={c.to}
                    className="mt-6 inline-flex items-center gap-1 border-b border-foreground/30 pb-1 text-sm font-medium hover:border-foreground"
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Из архива работ
            </h2>
            <p className="text-sm text-muted-foreground">
              Потяните ползунок, чтобы увидеть исходный кадр
            </p>
          </div>
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
      <section>
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

          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 sm:flex-row sm:items-end">
            <h2 className="max-w-lg font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Первые три кадра — за наш счёт
            </h2>
            <Button asChild size="lg" className="rounded-none">
              <Link to="/app/generator" search={{ tab: "interior" }}>
                Загрузить фото <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
