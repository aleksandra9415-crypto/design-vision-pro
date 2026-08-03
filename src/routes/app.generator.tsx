import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2, Sparkles, Upload, X } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/site/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockPair, saveGeneration } from "@/lib/generation-store";
import {
  facadeStyles,
  facadeTypes,
  interiorStyles,
  landscapeStyles,
  landscapeTypes,
  roomTypes,
  tabs,
  type TabId,
} from "@/lib/mock-data";

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

const config = {
  interior: { types: roomTypes, styles: interiorStyles, typeLabel: "Тип помещения", upload: "фото комнаты" },
  landscape: { types: landscapeTypes, styles: landscapeStyles, typeLabel: "Объект", upload: "фото участка" },
  facade: { types: facadeTypes, styles: facadeStyles, typeLabel: "Объект", upload: "фото дома" },
} as const;


function Generator() {
  const { tab } = Route.useSearch() as { tab: TabId };
  const navigate = useNavigate();
  const cfg = config[tab] as {
    types: readonly string[];
    styles: readonly { id: string; name: string; desc: string }[];
    typeLabel: string;
    upload: string;
  };

  const [file, setFile] = useState<{ name: string; url: string } | null>(null);
  const [type, setType] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const setTab = (next: TabId) => {
    setStyle("");
    setType("");
    navigate({ to: "/app/generator", search: { tab: next } });
  };

  const handleFile = (f?: File) => {
    if (!f) return;
    setFile({ name: f.name, url: URL.createObjectURL(f) });
  };

  const submit = () => {
    setLoading(true);
    const pair = mockPair(tab, file?.url);
    window.setTimeout(() => {
      saveGeneration({
        tab,
        tabLabel: tabs.find((t) => t.id === tab)?.label ?? "Интерьер",
        type: type || cfg.types[0] || "",
        style: cfg.styles.find((s) => s.id === style)?.name ?? cfg.styles[0]?.name ?? "",
        notes,
        before: pair.before,
        after: pair.after,
        createdAt: new Date().toLocaleDateString("ru-RU"),
      });
      navigate({ to: "/app/result" });
    }, 2500);
  };

  if (loading) {
    return (
      <AppShell>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Loader2 className="size-10 animate-spin text-primary" />
          <p className="mt-6 text-lg font-medium">Нейросеть работает над вашим проектом</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Обычно это занимает около минуты. Не закрывайте страницу — результат откроется
            автоматически.
          </p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <h1 className="text-2xl font-semibold tracking-[0.02em]">Генератор</h1>

      <div className="mt-5 grid grid-cols-3 gap-1 rounded-lg bg-muted p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-md py-2 text-sm font-medium transition-colors ${
              tab === t.id ? "bg-background shadow-sm" : "text-muted-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <Card className="mt-6 border-border">
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label>Загрузите {cfg.upload}</Label>
            {file ? (
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src={file.url} alt={file.name} className="h-56 w-full object-cover" />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute right-2 top-2"
                  aria-label="Удалить файл"
                  onClick={() => setFile(null)}
                >
                  <X className="size-4" />
                </Button>
              </div>
            ) : (
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  handleFile(e.dataTransfer.files?.[0]);
                }}
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
                  dragging ? "border-primary bg-primary/5" : "border-border bg-muted/30"
                }`}
              >
                <Upload className="size-6 text-muted-foreground" />
                <span className="text-sm font-medium">Перетащите файл сюда</span>
                <span className="text-xs text-muted-foreground">или нажмите, чтобы выбрать · JPG, PNG до 15 МБ</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
              </label>
            )}
          </div>

          <div className="space-y-2">
            <Label>{cfg.typeLabel}</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите вариант" />
              </SelectTrigger>
              <SelectContent>
                {cfg.types.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Стиль</Label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cfg.styles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    style === s.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                  }`}
                >
                  <span className="block text-sm font-medium">{s.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{s.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Уточнения (необязательно)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Например: тёплый свет, зелёный акцент, больше растений"
            />
          </div>

          <Button size="lg" className="w-full" onClick={submit}>
            <Sparkles className="size-4" /> Сгенерировать
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Демоверсия: генерация имитируется и возвращает подготовленный пример.
          </p>
        </CardContent>
      </Card>
    </AppShell>
  );
}
