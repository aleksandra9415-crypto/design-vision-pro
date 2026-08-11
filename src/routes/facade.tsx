import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PricingPlans } from "@/components/site/PricingPlans";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { UserMosaic } from "@/components/site/UserMosaic";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { GeneratorForm } from "@/components/site/GeneratorForm";
import { images, facadeStyles } from "@/lib/mock-data";

import facadeHero from "@/assets/facade-hero.jpg";
import facadeModern from "@/assets/facade-modern.jpg";
import facadeScandi from "@/assets/facade-scandi.jpg";
import facadeClassic from "@/assets/facade-classic.jpg";
import facadeLoft from "@/assets/facade-loft.jpg";
import facadeChalet from "@/assets/facade-chalet.jpg";
import facadeHitech from "@/assets/facade-hitech.jpg";
import facadeMedit from "@/assets/facade-medit.jpg";
import facadeEco from "@/assets/facade-eco.jpg";
import facadeOld from "@/assets/facade-old.jpg";

const heroFacts = [
  { value: "10+ стилей", label: "фасадов" },
  { value: "~60 секунд", label: "от фото до готового кадра" },
  { value: "0 навыков", label: "три поля и одна кнопка — справится любой" },
];

const stats = [
  { value: "48 000", label: "созданных проектов" },
  { value: "12 400", label: "пользователей сервиса" },
  { value: "4,8", label: "средняя оценка сервиса" },
  { value: "Топ-10", label: "в обзорах сервисов визуализации 2026" },
];

const press = ["Т—Ж", "VC.ru", "Cossa", "Habr", "Inc."];

const steps = [
  { title: "Загрузка фото", text: "Снимок с телефона подойдёт — важно, чтобы фасад был виден целиком." },
  { title: "Выбор стиля", text: "Тип объекта и одно из направлений: современный, сканди, шале и другие." },
  { title: "Генерация ИИ", text: "Около минуты — геометрия дома сохраняется, меняются материалы, цвет и свет." },
  { title: "Результат", text: "Сравниваете было/стало, просите правки словами и скачиваете кадр в высоком разрешении." },
];

const facadeStyleGallery = facadeStyles;


const mosaicTiles = [
  { before: facadeOld, after: facadeModern, alt: "Современный фасад частного дома с панорамными окнами" },
  { before: facadeOld, after: facadeScandi, alt: "Фасад в скандинавском стиле с отделкой светлым деревом" },
  { before: images.facadeBefore, after: facadeHitech, alt: "Технологичный фасад в стиле хай-тек из металла и стекла" },
  { before: facadeOld, after: facadeClassic, alt: "Классический фасад с колоннами и декоративными элементами" },
  { before: facadeOld, after: facadeLoft, alt: "Фасад в индустриальном стиле лофт с кирпичной кладкой" },
  { before: images.facadeBefore, after: images.facadeAfter, alt: "Обновленный фасад загородного коттеджа" },
  { before: facadeOld, after: facadeChalet, alt: "Фасад в стиле альпийского шале с каменным цоколем" },
  { before: facadeOld, after: facadeMedit, alt: "Средиземноморский фасад в светлых тонах с черепицей" },
  { before: images.facadeBefore, after: facadeEco, alt: "Экологичный фасад с использованием натуральных материалов" },
];


const cases = [
  {
    kicker: "Генерация по фото",
    title: "Фото дома — готовый вариант отделки",
    text: "Загружаете снимок дома и выбираете стиль. Геометрия здания, окна и кровля остаются на месте — меняются материалы отделки, цвет и освещение фасада.",
    image: facadeModern,
  },
  {
    kicker: "Редактор фото",
    title: "Поменяй цвет, убери старый козырёк",
    text: "Результат не финальный кадр, а материал в работе. Опишите правку словами — форма дома сохранится, изменится только то, о чём вы попросили.",
    image: facadeScandi,
  },
  {
    kicker: "Редизайн фасада",
    title: "Тот же дом — другой сценарий",
    text: "Один и тот же снимок можно прогнать через несколько отделок и цветовых решений, сравнить варианты и выбрать тот, который переживёт смету.",
    image: facadeChalet,
  },
];

const finalThumbs = [facadeModern, facadeScandi, facadeChalet, facadeHitech];

export const Route = createFileRoute("/facade")({
  head: () => ({
    meta: [
      { title: "Дизайн фасада дома по фото с ИИ — Vizoria" },
      {
        name: "description",
        content:
          "Загрузите фото дома — Vizoria покажет вариант отделки фасада за минуту. Геометрия здания сохраняется, меняются материалы, цвет и освещение.",
      },
      { property: "og:title", content: "Дизайн фасада дома с ИИ — Vizoria" },
      {
        property: "og:description",
        content: "Отделка стен, кровля, входная группа и вечерний свет по фотографии дома.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacadePage,
});

function StartButton({
  label = "Начать бесплатно",
  variant = "default",
}: {
  label?: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button asChild size="lg" variant={variant} className="rounded-none">
      <Link to="/app/generator" search={{ tab: "facade" }}>
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

function FacadePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-[85svh] min-h-[480px] w-full overflow-hidden">
        <img
          src={facadeHero}
          alt="Современный фасад частного дома в вечернем свете"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full origin-center object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14">
          <p className="text-sm tracking-[0.18em] text-background/70">
            дизайн фасада с помощью ИИ
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-[0.02em] text-background sm:text-6xl">
            Увидеть фасад до ремонта
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/80">
            Фотография дома превращается в готовый вариант отделки за минуту. Геометрия здания
            сохраняется — меняются материалы, цвет и освещение.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/app/generator" search={{ tab: "facade" }}>
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

      {/* ДО/ПОСЛЕ + ДЕМО ГЕНЕРАТОРА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Узнайте, как это будет выглядеть
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Загрузите фото дома — получите готовый результат за минуту.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col">
              <BeforeAfter
                before={images.facadeBefore}
                after={images.facadeAfter}
                className="flex h-full flex-col [&>div]:flex-1"
              />
            </div>

            <GeneratorForm defaultTab="facade" className="h-full " />
          </div>
        </div>
      </section>

      {/* ПРИМЕРЫ РАБОТ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Примеры работ
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Наведите на плитку — покажем исходное фото дома до генерации.
            </p>
          </div>
          <div className="mt-10">
            <UserMosaic tiles={mosaicTiles} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StartButton label="Сгенерировать свой" />
            <BuyButton />
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
        </div>
      </section>

      {/* СТИЛИ ФАСАДА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Стили фасада
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Десять направлений, с которых обычно начинают работу над домом.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {facadeStyleGallery.map((s) => (
              <Link
                key={s.name}
                to="/app/generator"
                search={{ tab: "facade" }}
                className="group block border border-border bg-card transition-colors hover:border-foreground/40"
              >
                <img
                  src={s.image}
                  alt={`Фасад в стиле ${s.name}`}
                  width={768}
                  height={576}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-3">
                  <p className="font-display normal-case text-xl leading-none tracking-[0.02em]">
                    {s.name}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StartButton label="Примерить стиль" />
            <BuyButton />
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

      {/* ВОЗМОЖНОСТИ СЕРВИСА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
            Возможности сервиса
          </h2>
          <div className="mt-12 space-y-20">
            {cases.map((c, i) => (
              <article
                key={c.title}
                className={`grid items-center gap-8 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <figure className="lg:col-span-7">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="lg:col-span-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {c.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight tracking-[0.02em] sm:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{c.text}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <StartButton label="Начать бесплатно" />
                    <BuyButton />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Тарифы
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              1 кредит — 1 кадр в стандартном качестве, 2 кредита — в PRO. Кредиты не сгорают,
              подписки нет.
            </p>
          </div>

          <div className="mt-10">
            <PricingPlans ns="facade" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <BuyButton label="Все тарифы" />
            <StartButton label="Сначала попробовать" />
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
            Что говорят пользователи
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Короткие видео от владельцев домов, дизайнеров и бригад: что загружали, что получили и
            как это повлияло на ремонт. Текст под каждым видео — краткая расшифровка.
          </p>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Создайте первый дизайн
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Регистрация занимает минуту, карта не нужна. Загрузите фото дома — и посмотрите, как
              может выглядеть новый фасад.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StartButton label="Загрузить фото" />
              <BuyButton />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-7">
            {finalThumbs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Пример визуализации фасада Vizoria"
                width={768}
                height={576}
                className={`aspect-[4/3] w-full object-cover ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
