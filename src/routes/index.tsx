import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/mock-data";
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

const verticals = [
  {
    to: "/interior" as const,
    label: "Интерьер",
    desc: "Фото комнаты — готовый дизайн в выбранном стиле",
    image: images.interiorAfter,
  },
  {
    to: "/landscape" as const,
    label: "Ландшафт",
    desc: "Участок, сад и двор — благоустройство по фото",
    image: images.landscapeAfter,
  },
  {
    to: "/facade" as const,
    label: "Фасад",
    desc: "Дом снаружи — материалы, цвет и освещение",
    image: images.facadeAfter,
  },
];

function Home() {
  return (
    <PageShell>
      <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden">
        <img
          src={heroWide}
          alt="Интерьер, созданный в Vizoria"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-24 text-background">
          <p className="text-sm tracking-[0.14em] text-background/80">дизайн с помощью ИИ</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.02] sm:text-6xl">
            Увидеть результат до ремонта
          </h1>
          <p className="mt-5 max-w-xl text-background/85">
            Фотография комнаты, участка или фасада превращается в готовый кадр примерно за минуту.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/app/generator" search={{ tab: "interior" }}>
                Попробовать
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 text-background">
              <Link to="/pricing">Тарифы</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl">Три направления</h2>
        <p className="mt-3 text-muted-foreground">
          Выберите, что хотите изменить — интерьер, участок или фасад дома.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {verticals.map((v) => (
            <Link
              key={v.to}
              to={v.to}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/40"
            >
              <img src={v.image} alt={v.label} className="h-56 w-full object-cover" />
              <div className="p-5">
                <p className="flex items-center gap-1 text-lg">
                  {v.label}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
