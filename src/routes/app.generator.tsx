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
    <AppShell>
      <h1 className="text-2xl font-semibold tracking-[0.02em]">Генератор</h1>
      <GeneratorForm
        key={tab}
        defaultTab={tab}
        className="mt-6"
        onTabChange={(next) => navigate({ to: "/app/generator", search: { tab: next } })}
      />
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Демоверсия: генерация имитируется и возвращает подготовленный пример.
      </p>
    </AppShell>
  );
}
