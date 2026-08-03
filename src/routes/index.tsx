import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Camera, Image, PenSquare, Sparkles, Trees, Wand2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { galleryExamples, howItWorks, images, testimonials } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Дизайн интерьера, ландшафта и фасада с ИИ по фото" },
      {
        name: "description",
        content:
          "Загрузите фото комнаты, дома или схему расстановки мебели — нейросеть создаст фотореалистичный дизайн за минуту.",
      },
      { property: "og:title", content: "Дизайн интерьера и экстерьера с ИИ" },
      {
        property: "og:description",
        content: "Визуализация интерьера, ландшафта и фасада по фото или чертежу за 60 секунд.",
      },
    ],
  }),
  component: Home,
});

const stepIcons = [Camera, Wand2, Sparkles, Image];

function Home() {
  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="size-3.5" /> 3 бесплатные генерации после регистрации
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Дизайн интерьера по фото или по схеме мебели
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              Загрузите снимок комнаты, фасада, участка или план расстановки мебели — нейросеть
              покажет готовый результат примерно за минуту, сохранив геометрию помещения.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/app/generator" search={{ tab: "interior" }}>
                  Начать бесплатно <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">Посмотреть тарифы</Link>
              </Button>
            </div>
          </div>
          <BeforeAfter before={images.interiorBefore} after={images.interiorAfter} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Как это работает</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => {
            const Icon = stepIcons[i] ?? Sparkles;
            return (
              <Card key={step.title} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">Шаг {i + 1}</span>
                  </div>
                  <p className="mt-4 font-medium">{step.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Примеры работ</h2>
          <p className="mt-2 text-muted-foreground">Реальные сценарии: комната, фасад и чертёж.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {galleryExamples.map((ex) => (
              <Card key={ex.style} className="overflow-hidden border-border">
                <CardContent className="p-4">
                  <BeforeAfter before={ex.before} after={ex.after} />
                  <p className="mt-3 font-medium">{ex.style}</p>
                  <p className="text-sm text-muted-foreground">{ex.room}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              to: "/interior" as const,
              icon: Building2,
              title: "Дизайн интерьера",
              text: "Для владельцев квартир и домов: от сканди до классики по фото комнаты.",
            },
            {
              to: "/exterior" as const,
              icon: Trees,
              title: "Ландшафт и фасад",
              text: "Обновите фасад дома и спланируйте участок до начала работ.",
            },
            {
              to: "/pro" as const,
              icon: PenSquare,
              title: "Для профи",
              text: "Визуализация по схеме расстановки мебели и коммерческая лицензия.",
            },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group">
              <Card className="h-full border-border transition-colors group-hover:border-primary/50">
                <CardContent className="pt-6">
                  <c.icon className="size-6 text-primary" />
                  <p className="mt-4 text-lg font-medium">{c.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Подробнее <ArrowRight className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Отзывы</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">«{t.text}»</p>
                  <p className="mt-4 text-sm font-medium">
                    {t.name}, {t.city}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
