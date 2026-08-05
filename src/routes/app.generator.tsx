import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/site/AppShell";
import { GeneratorForm } from "@/components/site/GeneratorForm";
import type { TabId } from "@/lib/mock-data";

const validTabs: TabId[] = ["interior", "landscape", "facade"];

export const Route = createFileRoute("/app/generator")({
  validateSearch: (search: Record<string, unknown>): { tab: TabId } => {
    const tab = search["tab"];
    return { tab: validTabs.includes(tab as TabId) ? (tab as TabId) : "interior" };
  },
  head: () => ({
    meta: [
      { title: "Генератор дизайна — интерьер, экстерьер, чертёж" },
      { name: "description", content: "Загрузите фото или чертёж, выберите стиль и получите визуализацию." },
      { property: "og:title", content: "Генератор дизайна" },
      { property: "og:description", content: "Генерация визуализации по фото или схеме мебели." },
    ],
  }),
  component: Generator,
});


function Generator() {
  const { tab } = Route.useSearch() as { tab: TabId };
  const navigate = useNavigate();

  return (
    <AppShell
      kicker="Генератор"
      title="Создайте новый кадр"
      subtitle="Загрузите фото, выберите тип объекта и стиль — результат будет готов примерно за минуту."
    >
      <GeneratorForm
        key={tab}
        defaultTab={tab}
        advanced
        onTabChange={(next) => navigate({ to: "/app/generator", search: { tab: next } })}
      />

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Демоверсия: генерация имитируется и возвращает подготовленный пример.
      </p>
    </AppShell>
  );
}
