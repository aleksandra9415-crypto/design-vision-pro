import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Sparkles, Upload } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { RevealStrip } from "@/components/site/RevealStrip";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";

import { Button } from "@/components/ui/button";
import {
  images,
  plans,
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

const styleGallery = [
  { name: "Сканди", desc: "Светлое дерево и мягкий текстиль", image: styleScandi },
  { name: "Лофт", desc: "Кирпич, металл, открытые коммуникации", image: styleLoft },
  { name: "Минимализм", desc: "Чистые линии, ничего лишнего", image: styleMinimal },
  { name: "Классика", desc: "Молдинги, симметрия, благородные тона", image: styleClassic },
  { name: "Джапанди", desc: "Японская сдержанность и северный уют", image: styleJapandi },
  { name: "Хюгге", desc: "Тёплый свет, пледы, натуральные фактуры", image: styleHygge },
  { name: "Неоклассика", desc: "Лепнина в спокойной серой гамме", image: styleNeoclassic },
  { name: "Эклектика", desc: "Смешение эпох, яркое искусство", image: styleEclectic },
  { name: "Бохо", desc: "Ротанг, растения, этнические узоры", image: styleBoho },
  { name: "Современный", desc: "Актуальные формы и материалы", image: roomKitchen },
  { name: "Спа-минимализм", desc: "Микроцемент и мягкий свет", image: roomBath },
  { name: "Тёплый нейтральный", desc: "Дерево и молочные оттенки", image: roomKids },
];

const revealItems = [
  { before: images.interiorBefore, after: styleScandi, alt: "Гостиная в стиле сканди" },
  { before: images.landscapeBefore, after: images.landscapeAfter, alt: "Участок с новым газоном" },
  { before: images.interiorBefore, after: styleJapandi, alt: "Спальня в стиле джапанди" },
  { before: images.facadeBefore, after: images.facadeAfter, alt: "Фасад частного дома" },
  { before: images.interiorBefore, after: roomBath, alt: "Ванная в спа-минимализме" },
  { before: images.interiorBefore, after: styleLoft, alt: "Студия в стиле лофт" },
];

const finalThumbs = [styleScandi, roomKitchen, styleJapandi, roomBath];


const press = ["Т—Ж", "VC.ru", "Cossa", "Habr", "Inc."];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizoria — дизайн интерьера, ландшафта и фасада с ИИ" },
      {
        name: "description",
        content:
          "Vizoria: загрузите фото комнаты, дома или участка — студийная визуализация будет готова примерно за минуту.",
      },
      { property: "og:title", content: "Vizoria — визуализация интерьера и экстерьера" },
      {
        property: "og:description",
        content: "Визуализация интерьера, ландшафта и фасада по фото за минуту.",
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
    kicker: "Ландшафт",
    title: "Участок целиком — до первой лопаты",
    text: "Загружаете фото двора и сравниваете газон, дорожки, посадки и зону отдыха. Спор о том, где будет терраса, заканчивается за пять минут.",
    image: images.landscapeAfter,
    to: "/landscape" as const,
    linkLabel: "Как это работает на участке",
  },
  {
    kicker: "Фасад",
    title: "Новый фасад на своём доме",
    text: "Один снимок дома — и вы сравниваете отделку стен, кровлю, входную группу и вечернюю подсветку, не заказывая макет.",
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

function Home() {
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
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14">
          <p className="text-xs uppercase tracking-[0.32em] text-background/70">Vizoria</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-[0.02em] text-background sm:text-6xl">
            Сначала посмотрите,
            <br />
            потом ремонтируйте
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
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
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

      {/* ДО/ПОСЛЕ + ДЕМО ГЕНЕРАТОРА */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Одно фото — другая комната
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Загрузите фото — получите готовый кадр интерьера.
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
            <div className="flex h-full flex-col gap-6 border border-border bg-card p-6 shadow-[0_24px_60px_-40px_oklch(0.205_0.003_250/0.6)] sm:p-8">
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
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Тип помещения
                </p>
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
        </div>
      </section>


      {/* ГАЛЕРЕЯ СТИЛЕЙ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Витрина стилей
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
                  <p className="font-display text-xl leading-none tracking-[0.02em]">{s.name}</p>
                  <p className="mt-1.5 line-clamp-1 text-xs text-muted-foreground">{s.desc}</p>
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


      {/* КЕЙСЫ — журнальный разворот */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Из архива работ
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Разные комнаты, стили и сценарии — от студии до фасада частного дома.
            </p>
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


      {/* ПРЕВЬЮ ТАРИФОВ */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
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

      {/* ФИНАЛЬНЫЙ CTA */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-tight tracking-[0.02em] sm:text-5xl">
              Первые три кадра — за наш счёт
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Регистрация занимает минуту, карта не нужна. Загрузите фото комнаты или план — и
              посмотрите, как она может выглядеть.
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
