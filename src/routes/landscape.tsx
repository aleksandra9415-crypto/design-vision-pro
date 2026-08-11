import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PricingPlans } from "@/components/site/PricingPlans";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { UserMosaic } from "@/components/site/UserMosaic";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { GeneratorForm } from "@/components/site/GeneratorForm";
import { images, landscapeStyles } from "@/lib/mock-data";

import landHero from "@/assets/land-hero.jpg";
import landNatural from "@/assets/land-natural.jpg";
import landFormal from "@/assets/land-formal.jpg";
import landMinimal from "@/assets/land-minimal.jpg";
import landJapan from "@/assets/land-japan.jpg";
import landMedit from "@/assets/land-medit.jpg";
import landCountry from "@/assets/land-country.jpg";
import landNordic from "@/assets/land-nordic.jpg";
import landModern from "@/assets/land-modern.jpg";
import landOld from "@/assets/land-old.jpg";

const heroFacts = [
  { value: "10+ стилей", label: "ландшафта" },
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
  { title: "Загрузка фото", text: "Снимок с телефона подойдёт — важно, чтобы участок был виден целиком." },
  { title: "Выбор стиля", text: "Тип объекта и одно из направлений: природный, регулярный, японский сад и другие." },
  { title: "Генерация ИИ", text: "Около минуты — рельеф и постройки сохраняются, меняются озеленение, дорожки и свет." },
  { title: "Результат", text: "Сравниваете было/стало, просите правки словами и скачиваете кадр в высоком разрешении." },
];

const landscapeStyleGallery = landscapeStyles;


const mosaicTiles = [
  { before: landOld, after: landModern, alt: "Современный двор с качественным мощением и светом" },
  { before: landOld, after: landMinimal, alt: "Минималистичный участок с идеально ровным газоном" },
  { before: images.landscapeBefore, after: landNatural, alt: "Сад в природном стиле с многолетними травами" },
  { before: landOld, after: landFormal, alt: "Регулярный сад с четкой геометрией и формами" },
  { before: landOld, after: landJapan, alt: "Японский сад для медитации с камнями и водой" },
  { before: images.landscapeBefore, after: images.landscapeAfter, alt: "Ухоженный двор загородного дома с террасой" },
  { before: landOld, after: landMedit, alt: "Средиземноморский двор с характерными растениями" },
  { before: landOld, after: landCountry, alt: "Уютный огородный сад с аккуратными грядками" },
  { before: images.landscapeBefore, after: landNordic, alt: "Хвойный сад в скандинавском стиле с валунами" },
];


const cases = [
  {
    kicker: "Генерация по фото",
    title: "Фото участка — готовый вариант благоустройства",
    text: "Загружаете снимок двора и выбираете стиль. Рельеф, границы участка и постройки остаются на месте — меняются озеленение, дорожки и зоны отдыха.",
    image: landNatural,
  },
  {
    kicker: "Редактор фото",
    title: "Добавь дорожку, убери старый забор",
    text: "Результат не финальный кадр, а материал в работе. Опишите правку словами — остальная композиция участка сохранится, изменится только то, о чём вы попросили.",
    image: landMinimal,
  },
  {
    kicker: "Редизайн участка",
    title: "Тот же участок — другой сценарий",
    text: "Один и тот же снимок можно прогнать через несколько вариантов озеленения, сравнить их между собой и выбрать тот, который переживёт смету.",
    image: landModern,
  },
];

const finalThumbs = [landNatural, landMinimal, landJapan, landModern];

export const Route = createFileRoute("/landscape")({
  head: () => ({
    meta: [
      { title: "Дизайн ландшафта и участка по фото с ИИ — Vizoria" },
      {
        name: "description",
        content:
          "Загрузите фото двора — Vizoria покажет вариант благоустройства за минуту. Рельеф и постройки сохраняются, меняются озеленение, дорожки и освещение.",
      },
      { property: "og:title", content: "Дизайн ландшафта с ИИ — Vizoria" },
      {
        property: "og:description",
        content: "Газон, дорожки, посадки, зона отдыха и свет — визуализация по фотографии участка.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandscapePage,
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
      <Link to="/app/generator" search={{ tab: "landscape" }}>
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

function LandscapePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-auto sm:h-[85svh] min-h-[480px] w-full overflow-hidden">
        <img
          src={landHero}
          alt="Благоустроенный участок с газоном, дорожками и вечерней подсветкой"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full origin-center object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 pt-32 pb-14 sm:justify-end sm:pt-0">
          <p className="text-sm tracking-[0.18em] text-background/70">
            дизайн ландшафта с помощью ИИ
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-[0.02em] text-background sm:text-6xl">
            Увидеть участок до начала работ
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/80">
            Фотография двора или участка превращается в готовый вариант благоустройства за минуту.
            Рельеф и постройки сохраняются — меняются озеленение, дорожки и освещение.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/app/generator" search={{ tab: "landscape" }}>
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
          <div className="mt-8 grid grid-cols-1 sm:flex sm:flex-wrap gap-x-10 gap-y-6 border-t border-background/25 pt-6">
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
              Загрузите фото участка — получите готовый результат за минуту.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col">
              <BeforeAfter
                before={images.landscapeBefore}
                after={images.landscapeAfter}
                className="flex h-full flex-col [&>div]:flex-1"
              />
            </div>

            <GeneratorForm defaultTab="landscape" className="h-full " />
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
              Наведите на плитку — покажем исходное фото участка до благоустройства.
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

      {/* СТИЛИ ЛАНДШАФТА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Стили ландшафта
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Двенадцать направлений, с которых обычно начинают работу над участком.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {landscapeStyleGallery.map((s) => (
              <Link
                key={s.name}
                to="/app/generator"
                search={{ tab: "landscape" }}
                className="group block border border-border bg-card transition-colors hover:border-foreground/40"
              >
                <img
                  src={s.image}
                  alt={`Участок в стиле «${s.name}»`}
                  width={1024}
                  height={768}
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
          <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">О нас писали</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2">
              {press.map((p) => (
                <span
                  key={p}
                  className="flex-1 min-w-[calc(33.33%-8px)] text-center sm:flex-none border border-border bg-card px-5 py-3 sm:px-4 sm:py-2 font-display text-xl sm:text-lg tracking-[0.02em] text-muted-foreground"
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
            <PricingPlans ns="landscape" />
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
            Короткие видео от владельцев участков, дизайнеров и бригад: что загружали, что получили
            и как это повлияло на работы. Текст под каждым видео — краткая расшифровка.
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
              Регистрация занимает минуту, карта не нужна. Загрузите фото участка — и посмотрите,
              как может выглядеть новое благоустройство.
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
                alt="Пример визуализации участка Vizoria"
                width={1024}
                height={768}
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
