import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PricingPlans } from "@/components/site/PricingPlans";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { RevealStrip } from "@/components/site/RevealStrip";
import { RevealCard } from "@/components/site/RevealCard";
import { UserMosaic } from "@/components/site/UserMosaic";
import { RoomTabs } from "@/components/site/RoomTabs";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";

import { Button } from "@/components/ui/button";
import { GeneratorForm } from "@/components/site/GeneratorForm";
import {
  images,
  interiorStyles,
} from "@/lib/mock-data";

import heroWide from "@/assets/hero-wide.jpg";
import styleScandi from "@/assets/style-scandi.jpg";
import styleLoft from "@/assets/style-loft.jpg";
import styleMinimal from "@/assets/style-minimal.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import styleJapandi from "@/assets/style-japandi.jpg";
import styleHygge from "@/assets/style-hygge.jpg";
import styleNeoclassic from "@/assets/style-neoclassic.jpg";
import styleEclectic from "@/assets/style-eclectic.jpg";
import styleBoho from "@/assets/style-boho.jpg";
import roomKitchen from "@/assets/room-kitchen.jpg";
import roomBath from "@/assets/room-bath.jpg";
import roomKids from "@/assets/room-kids.jpg";

const styleGallery = interiorStyles;


const revealItems = [
  { before: images.interiorBefore, after: styleScandi, alt: "Гостиная в стиле сканди" },
  { before: images.landscapeBefore, after: images.landscapeAfter, alt: "Участок с новым газоном" },
  { before: images.interiorBefore, after: styleJapandi, alt: "Спальня в стиле джапанди" },
  { before: images.facadeBefore, after: images.facadeAfter, alt: "Фасад частного дома" },
  { before: images.interiorBefore, after: roomBath, alt: "Ванная в спа-минимализме" },
  { before: images.interiorBefore, after: styleLoft, alt: "Студия в стиле лофт" },
];

const revealCards = [
  { before: images.interiorBefore, after: images.interiorAfter, alt: "Смена интерьера" },
  { before: images.landscapeBefore, after: images.landscapeAfter, alt: "Ландшафтный дизайн" },
  { before: images.facadeBefore, after: images.facadeAfter, alt: "Дизайн фасада" },
];

const finalThumbs = [styleScandi, roomKitchen, styleJapandi, roomBath];

const mosaicTiles = [
  { before: images.interiorBefore, after: styleScandi, alt: "Гостиная в скандинавском стиле с элементами минимализма" },
  { before: images.interiorBefore, after: styleLoft, alt: "Просторная студия в индустриальном стиле лофт" },
  { before: images.interiorBefore, after: roomKitchen, alt: "Современная кухня с островом и встроенной техникой" },
  { before: images.interiorBefore, after: roomBath, alt: "Ванная комната в стиле спа-минимализм с подсветкой" },
  { before: images.interiorBefore, after: styleJapandi, alt: "Уютная спальня в стиле джапанди в светлых тонах" },
  { before: images.interiorBefore, after: roomKids, alt: "Детская комната в теплых тонах для игр и отдыха" },
  { before: images.interiorBefore, after: styleNeoclassic, alt: "Гостиная в стиле неоклассика с лепниной" },
  { before: images.interiorBefore, after: styleBoho, alt: "Творческая спальня в стиле бохо с декором" },
  { before: images.interiorBefore, after: styleMinimal, alt: "Минималистичная спальня без визуального шума" },
];


const steps = [
  { title: "Загрузка фото", text: "Снимок с телефона подойдёт — важно, чтобы было видно стены, окна и пол." },
  { title: "Выбор стиля", text: "Тип помещения и одно из 20+ направлений: сканди, лофт, джапандии другие." },
  { title: "Генерация ИИ", text: "Около минуты — геометрия комнаты сохраняется, меняются отделка, свет и мебель." },
  { title: "Результат", text: "Сравниваете до/после, просите правки словами и скачиваете кадр в высоком разрешении." },
];

const rooms = [
  { name: "Спальня", before: images.interiorBefore, after: styleJapandi, note: "Спокойная палитра, мягкий свет и вместительное хранение без визуального шума." },
  { name: "Кухня", before: images.interiorBefore, after: roomKitchen, note: "Рабочий треугольник, фартук и фасады — в актуальных материалах." },
  { name: "Детская", before: images.interiorBefore, after: roomKids, note: "Тёплые тона, зоны для сна, игр и занятий в одном кадре." },
  { name: "Гостиная", before: images.interiorBefore, after: styleScandi, note: "Сценарии для отдыха и приёма гостей, светлое дерево и текстиль." },
  { name: "Ванная", before: images.interiorBefore, after: roomBath, note: "Микроцемент, ниши и подсветка — спа-минимализм в городской квартире." },
  { name: "Кабинет", before: images.interiorBefore, after: styleClassic, note: "Стол у окна, книжные секции и собранный, рабочий свет." },
  { name: "Прихожая", before: images.interiorBefore, after: styleMinimal, note: "Компактное хранение, зеркало и износостойкая отделка у входа." },
];


const press = ["Т—Ж", "VC.ru", "Cossa", "Habr", "Inc."];

export const Route = createFileRoute("/interior")({
  head: () => ({
    meta: [
      { title: "Дизайн интерьера с ИИ — Vizoria" },
      {
        name: "description",
        content:
          "Загрузите фото комнаты — Vizoria покажет готовый дизайн интерьера примерно за минуту.",
      },
      { property: "og:title", content: "Дизайн интерьера с ИИ — Vizoria" },
      {
        property: "og:description",
        content: "Загрузите фото комнаты — Vizoria покажет готовый дизайн интерьера примерно за минуту.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InteriorPage,
});

const heroFacts = [
  { value: "20+ стилей", label: "интерьер, ландшафт и фасад" },
  { value: "~60 секунд", label: "от фото до готового кадра" },
  { value: "0 навыков", label: "три поля и одна кнопка — справится любой" },
];

const stats = [
  { value: "48 000", label: "созданных проектов" },
  { value: "12 400", label: "пользователей сервиса" },
  { value: "4,8", label: "средняя оценка сервиса" },
  { value: "Топ-10", label: "в обзорах сервисов визуализации 2026" },
];

const cases = [
  {
    kicker: "Генерация по фото",
    title: "Фото комнаты — готовый кадр",
    text: "Загружаете снимок помещения, выбираете тип комнаты и стиль. Геометрия и окна остаются на месте — меняются отделка, свет и обстановка.",
    image: images.interiorAfter,
    to: "/interior" as const,
    linkLabel: "Как это работает в интерьере",
  },
  {
    kicker: "Редактор фото",
    title: "Добавь дорожку, убери старый забор",
    text: "Результат не финальный кадр, а материал в работе. Опишите правку словами — расположение построек и рельеф участка сохранятся, изменится только то, о чём вы попросили.",
    image: images.landscapeAfter,
    to: "/landscape" as const,
    linkLabel: "Как это работает на участке",
  },
  {
    kicker: "Редизайн фасада",
    title: "Тот же дом — другой сценарий",
    text: "Один и тот же снимок можно прогнать через несколько отделок и цветовых решений, сравнить варианты и выбрать тот, который переживёт смету.",
    image: images.facadeAfter,
    to: "/facade" as const,
    linkLabel: "Как это работает на фасаде",
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

function InteriorPage() {
  return (
    <PageShell>
      {/* HERO — полноэкранное фото */}
      <section className="relative h-[85svh] min-h-[480px] w-full overflow-hidden">
        <img
          src={heroWide}
          alt="Светлая гостиная в нейтральной серо-жемчужной палитре"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full origin-center object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 pt-32 pb-14 sm:justify-end sm:pt-0">
          <p className="text-sm tracking-[0.18em] text-background/70">
            дизайн интерьера с помощью ИИ
          </p>
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



      {/* ДО/ПОСЛЕ + ДЕМО ГЕНЕРАТОРА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Узнайте, как это будет выглядеть
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Загрузите фото — получите готовый результат за минуту.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col">
              <BeforeAfter
                before={images.interiorBefore}
                after={images.interiorAfter}
                className="flex h-full flex-col [&>div]:flex-1"
              />
            </div>

            {/* Фрагмент интерфейса генератора */}
            <GeneratorForm defaultTab="interior" className="h-full " />
          </div>
        </div>
      </section>

      {/* МОЗАИКА ПОЛЬЗОВАТЕЛЕЙ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Дизайны, которые сгенерированы у нас
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Наведите на плитку — покажем исходное фото до генерации.
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

          <div className="mt-8 flex flex-wrap gap-3">
            <StartButton />
            <BuyButton />
          </div>
        </div>
      </section>



      {/* ГАЛЕРЕЯ СТИЛЕЙ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Стили интерьера
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Больше 20 направлений в генераторе. Вот двенадцать, с которых обычно начинают.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {styleGallery.map((s) => (
              <Link
                key={s.name}
                to="/app/generator"
                search={{ tab: "interior" }}
                className="group block border border-border bg-card transition-colors hover:border-foreground/40"
              >
                <img
                  src={s.image}
                  alt={`Интерьер в стиле ${s.name}`}
                  width={768}
                  height={576}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-3">
                  <p className="font-display normal-case text-xl leading-none tracking-[0.02em]">{s.name}</p>
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
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              О нас писали
            </p>
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



      {/* КЕЙСЫ — журнальный разворот */}
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
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Любое пространство
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Разные комнаты, стили и сценарии — от студии до фасада частного дома.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {revealCards.map((it) => (
              <RevealCard key={it.alt} before={it.before} after={it.after} alt={it.alt} />
            ))}
          </div>
          <div className="mt-10">
            <RevealStrip items={revealItems} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <StartButton label="Сделать свой кадр" />
            <BuyButton />
          </div>
        </div>
      </section>

      {/* ЛЮБАЯ КОМНАТА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Любая комната
            </h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Выберите тип помещения и посмотрите, как меняется кадр.
            </p>
          </div>
          <div className="mt-10">
            <RoomTabs rooms={rooms} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StartButton label="Обновить свою комнату" />
            <BuyButton />
          </div>
        </div>
      </section>



      {/* ПРЕВЬЮ ТАРИФОВ */}
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
            <PricingPlans ns="interior" />
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
            Короткие видео от владельцев квартир, дизайнеров и бригад: что загружали, что получили
            и как это повлияло на ремонт. Текст под каждым видео — краткая расшифровка.
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
              Регистрация занимает минуту, карта не нужна. Загрузите фото комнаты, участка или
              фасада — и посмотрите, как это может выглядеть.
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
                alt="Пример визуализации Vizoria"
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
