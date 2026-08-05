import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/site/AppShell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { generationHistory, tabs, type TabId } from "@/lib/mock-data";

type FilterId = TabId | "all";

export const Route = createFileRoute("/app/history")({
  validateSearch: (search: Record<string, unknown>) => ({
    tab: (["all", "interior", "landscape", "facade"].includes(String(search["tab"]))
      ? (search["tab"] as FilterId)
      : "all") as FilterId,
  }),
  head: () => ({
    meta: [
      { title: "История генераций — все проекты Vizoria" },
      {
        name: "description",
        content:
          "Полный список ваших генераций интерьера, ландшафта и фасада: открывайте, скачивайте и создавайте похожие.",
      },
      { property: "og:title", content: "История генераций" },
      { property: "og:description", content: "Все ваши генерации Vizoria в одном месте." },
    ],
  }),
  component: History,
});

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "Все" },
  ...tabs.map((t) => ({ id: t.id as FilterId, label: t.label })),
];

function History() {
  const { tab } = Route.useSearch();
  const items = tab === "all" ? generationHistory : generationHistory.filter((g) => g.tabId === tab);

  return (
    <AppShell
      kicker="Кабинет"
      title="История генераций"
      subtitle="Все ваши генерации в одном месте — открывайте, скачивайте, генерируйте похожие."
    >
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {filters.map((f) => (
          <Link
            key={f.id}
            to="/app/history"
            search={{ tab: f.id }}
            className={cn(
              "border px-4 py-2 text-sm transition-colors",
              tab === f.id
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-primary",
            )}
          >
            {f.label}
          </Link>
        ))}
        <span className="ml-auto self-center text-sm text-muted-foreground">
          {items.length} генераций
        </span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((g) => (
          <article key={g.id} className="flex flex-col border border-border bg-card">
            <img
              src={g.thumb}
              alt={`${g.style}, ${g.room}`}
              className="h-36 w-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-4">
              <div className="h-10">
                <p className="truncate text-sm font-medium leading-5">{g.style}</p>
                <p className="truncate text-sm leading-5 text-muted-foreground">{g.room}</p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {g.tab} · {g.date}
              </p>
              <Button asChild size="sm" variant="outline" className="mt-3 w-full rounded-none">
                <Link to="/app/result" search={{ id: g.id }}>
                  Открыть
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-8 text-sm text-muted-foreground">
          В этом направлении генераций пока нет.
        </p>
      )}
    </AppShell>
  );
}
