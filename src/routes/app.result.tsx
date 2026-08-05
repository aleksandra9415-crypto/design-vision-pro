import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/site/AppShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { loadGeneration, mockPair, type GenerationResult } from "@/lib/generation-store";
import { generationHistory } from "@/lib/mock-data";

export const Route = createFileRoute("/app/result")({
  validateSearch: (search: Record<string, unknown>) => ({
    id: typeof search["id"] === "string" ? search["id"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Результат генерации — сравнение до и после" },
      { name: "description", content: "Сравните исходное фото и результат генерации, скачайте изображение." },
      { property: "og:title", content: "Результат генерации" },
      { property: "og:description", content: "Сравнение до/после и параметры генерации." },
    ],
  }),
  component: Result,
});

const fallback: GenerationResult = {
  tab: "interior",
  tabLabel: "Интерьер",
  type: "Гостиная",
  style: "Сканди",
  notes: "",
  ...mockPair("interior"),
  createdAt: new Date().toLocaleDateString("ru-RU"),
};

function Result() {
  const { id } = Route.useSearch();
  const saved = id ? generationHistory.find((g) => g.id === id) : undefined;
  const fromHistory: GenerationResult | null = saved
    ? {
        tab: saved.tabId,
        tabLabel: saved.tab,
        type: saved.room,
        style: saved.style,
        notes: "",
        before: saved.before,
        after: saved.after,
        createdAt: saved.date,
      }
    : null;

  const [result, setResult] = useState<GenerationResult>(fromHistory ?? fallback);

  useEffect(() => {
    if (fromHistory) {
      setResult(fromHistory);
      return;
    }
    const stored = loadGeneration();
    if (stored) setResult(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  return (
    <AppShell kicker="Результат" title="Готовый кадр" subtitle={`Генерация от ${result.createdAt}`}>
      <div className=" grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="rounded-none border-border bg-card">
          <CardContent className="pt-6">
            <BeforeAfter before={result.before} after={result.after} />
          </CardContent>
        </Card>

        <Card className="rounded-none border-border bg-card">
          <CardContent className="pt-6">
            <p className="font-medium">Параметры</p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Раздел", result.tabLabel],
                ["Объект", result.type],
                ["Стиль", result.style],
                ["Уточнения", result.notes || "—"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-28 shrink-0 text-muted-foreground">{k}</dt>
                  <dd className="min-w-0 break-words">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-2">
              <Button
                className="w-full rounded-none"
                onClick={() => toast.success("Изображение сохранено (демо)")}
              >
                <Download className="size-4" /> Скачать
              </Button>
              <Button asChild variant="outline" className="w-full rounded-none">
                <Link to="/app/generator" search={{ tab: result.tab }}>
                  <RefreshCw className="size-4" /> Сгенерировать ещё
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
