import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, Sparkles, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const config: Record<
  TabId,
  {
    types: readonly string[];
    styles: readonly { id: string; name: string; desc: string }[];
    typeLabel: string;
    upload: string;
    notesPlaceholder: string;
  }
> = {
  interior: {
    types: roomTypes,
    styles: interiorStyles,
    typeLabel: "Тип помещения",
    upload: "Перетащите фото комнаты",
    notesPlaceholder: "тёплый свет, зелёный акцент, больше растений",
  },
  landscape: {
    types: landscapeTypes,
    styles: landscapeStyles,
    typeLabel: "Тип объекта",
    upload: "Перетащите фото участка",
    notesPlaceholder: "добавь дорожку к террасе и мягкий свет вдоль газона",
  },
  facade: {
    types: facadeTypes,
    styles: facadeStyles,
    typeLabel: "Тип объекта",
    upload: "Перетащите фото дома",
    notesPlaceholder: "тёмная отделка, панорамные окна, вечерняя подсветка",
  },
};


export function GeneratorForm({
  defaultTab = "interior",
  showTabs = true,
  onTabChange,
  className = "",
}: {
  defaultTab?: TabId;
  showTabs?: boolean;
  onTabChange?: (tab: TabId) => void;
  className?: string;
}) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const [tab, setTab] = useState<TabId>(defaultTab);
  const [file, setFile] = useState<{ name: string; url: string } | null>(null);
  const [type, setType] = useState<string>(config[defaultTab].types[0] ?? "");
  const [style, setStyle] = useState<string>(config[defaultTab].styles[0]?.id ?? "");
  const [notes, setNotes] = useState("");
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTab(defaultTab);
  }, [defaultTab]);

  const cfg = config[tab];

  const switchTab = (next: TabId) => {
    setTab(next);
    setType(config[next].types[0] ?? "");
    setStyle(config[next].styles[0]?.id ?? "");
    onTabChange?.(next);
  };

  const handleFile = (f?: File | null) => {
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
      <div
        className={`flex min-h-[420px] flex-col items-center justify-center border border-border bg-card p-8 text-center ${className}`}
      >
        <Loader2 className="size-10 animate-spin text-primary" />
        <p className="mt-6 text-lg font-medium">Нейросеть работает над вашим проектом</p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Обычно это занимает около минуты. Не закрывайте страницу — результат откроется
          автоматически.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-6 border border-border bg-card p-6 sm:p-8 ${className}`}>
      {showTabs && (
        <div className="flex gap-1 border border-border bg-muted p-1 text-sm">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => switchTab(t.id)}
              aria-pressed={tab === t.id}
              className={`flex-1 px-3 py-2 text-center transition-colors ${
                tab === t.id ? "bg-background font-medium" : "text-muted-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {file ? (
        <div className="relative overflow-hidden border border-border">
          <img src={file.url} alt={file.name} className="h-48 w-full object-cover" />
          <Button
            size="icon"
            variant="secondary"
            className="absolute right-2 top-2 rounded-none"
            aria-label="Удалить файл"
            onClick={() => setFile(null)}
          >
            <X className="size-4" />
          </Button>
        </div>
      ) : (
        <div
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
          className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed px-6 py-8 text-center transition-colors ${
            dragging ? "border-foreground bg-muted/60" : "border-border bg-muted/30"
          }`}
        >
          <Upload className="size-6 text-muted-foreground" />
          <p className="text-sm font-medium">{cfg.upload}</p>
          <p className="text-xs text-muted-foreground">или нажмите, чтобы выбрать</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2 rounded-none"
            onClick={() => inputRef.current?.click()}
          >
            Выбрать файл
          </Button>
          <p className="mt-1 text-xs text-muted-foreground">JPG, PNG до 15 МБ</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor={`type-${tab}`}
          className="text-xs uppercase tracking-widest text-muted-foreground"
        >
          {cfg.typeLabel}
        </label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger
            id={`type-${tab}`}
            className="h-auto w-full rounded-none border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground focus:ring-0 focus:ring-offset-0 [&>svg]:text-muted-foreground"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-none border-border bg-card shadow-sm">
            {cfg.types.map((t) => (
              <SelectItem
                key={t}
                value={t}
                className="rounded-none border-b border-border px-3 py-2.5 text-sm last:border-b-0 focus:bg-muted"
              >
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor={`style-${tab}`}
          className="text-xs uppercase tracking-widest text-muted-foreground"
        >
          Стиль
        </label>
        <Select value={style} onValueChange={setStyle}>
          <SelectTrigger
            id={`style-${tab}`}
            className="h-auto w-full rounded-none border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground focus:ring-0 focus:ring-offset-0 [&>svg]:text-muted-foreground"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-none border-border bg-card shadow-sm">
            {cfg.styles.map((s) => (
              <SelectItem
                key={s.id}
                value={s.id}
                title={s.desc}
                className="rounded-none border-b border-border px-3 py-2.5 text-sm last:border-b-0 focus:bg-muted"
              >
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor={`notes-${tab}`}
          className="text-xs uppercase tracking-widest text-muted-foreground"
        >
          Уточнения (необязательно)
        </label>
        <textarea
          id={`notes-${tab}`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder={cfg.notesPlaceholder}
          className="w-full border border-border bg-muted/50 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground focus:bg-background"
        />
      </div>

      <Button size="lg" className="mt-auto w-full rounded-none" onClick={submit}>
        <Sparkles className="size-4" /> Сгенерировать дизайн
      </Button>
    </div>
  );
}
