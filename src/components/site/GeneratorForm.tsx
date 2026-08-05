import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Check, Loader2, Lock, Plus, Sparkles, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockPair, saveGeneration } from "@/lib/generation-store";
import {
  accountPlan,
  facadeStyles,
  facadeTypes,
  images,
  interiorStyles,
  landscapeStyles,
  landscapeTypes,
  roomTypes,
  tabs,
  type TabId,
  type StyleItem,
} from "@/lib/mock-data";

const config: Record<
  TabId,
  {
    types: readonly string[];
    styles: readonly StyleItem[];
    typeLabel: string;
    upload: string;
    notesPlaceholder: string;
    preview: string;
  }
> = {
  interior: {
    types: roomTypes,
    styles: interiorStyles,
    typeLabel: "Тип помещения",
    upload: "Перетащите фото комнаты",
    notesPlaceholder: "тёплый свет, зелёный акцент, больше растений",
    preview: images.interiorAfter,
  },
  landscape: {
    types: landscapeTypes,
    styles: landscapeStyles,
    typeLabel: "Тип объекта",
    upload: "Перетащите фото участка",
    notesPlaceholder: "добавь дорожку к террасе и мягкий свет вдоль газона",
    preview: images.landscapeAfter,
  },
  facade: {
    types: facadeTypes,
    styles: facadeStyles,
    typeLabel: "Тип объекта",
    upload: "Перетащите фото дома",
    notesPlaceholder: "тёмная отделка, панорамные окна, вечерняя подсветка",
    preview: images.facadeAfter,
  },
};

function StepTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-foreground text-xs font-medium text-background">
        {n}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{children}</span>
    </div>
  );
}

function UpgradeNote({ text }: { text: string }) {
  return (
    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
      <Lock className="size-3" /> {text}{" "}
      <Link
        to="/app/billing"
        search={{ plan: "obekt" }}
        className="underline underline-offset-4 hover:text-primary"
      >
        Обновить тариф
      </Link>
    </p>
  );
}

export function GeneratorForm({
  defaultTab = "interior",
  showTabs = true,
  advanced = false,
  onTabChange,
  className = "",
}: {
  defaultTab?: TabId;
  showTabs?: boolean;
  advanced?: boolean;
  onTabChange?: (tab: TabId) => void;
  className?: string;
}) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const refsInputRef = useRef<HTMLInputElement>(null);

  const [tab, setTab] = useState<TabId>(defaultTab);
  const [file, setFile] = useState<{ name: string; url: string } | null>(null);
  const [type, setType] = useState<string>(config[defaultTab].types[0] ?? "");
  const [style, setStyle] = useState<string>(config[defaultTab].styles[0]?.id ?? "");
  const [notes, setNotes] = useState("");
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState<"standard" | "pro">("standard");
  const [refs, setRefs] = useState<{ name: string; url: string }[]>([]);
  const [priv, setPriv] = useState(false);
  const [spot, setSpot] = useState(false);

  const proAllowed = accountPlan.id === "proekt" || accountPlan.id === "obekt";
  const objectAllowed = accountPlan.id === "obekt";
  const cost = spot ? 2 : mode === "pro" ? 2 : 1;

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

      {advanced && <StepTitle n={1}>Загрузите фото</StepTitle>}

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

      {advanced ? (
        <>
          <div className={`space-y-3 ${spot ? "pointer-events-none opacity-50" : ""}`}>
            <StepTitle n={2}>Стиль</StepTitle>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cfg.styles.map((s) => {
                const active = style === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    disabled={spot}
                    onClick={() => setStyle(s.id)}
                    aria-pressed={active}
                    title={s.desc}
                    className={`group relative overflow-hidden border text-left transition-colors ${
                      active ? "border-foreground" : "border-border hover:border-foreground/50"
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="h-20 w-full object-cover"
                    />

                    {active && (
                      <span className="absolute right-1.5 top-1.5 grid size-5 place-items-center rounded-full bg-foreground text-background">
                        <Check className="size-3" />
                      </span>
                    )}
                    <span className="block px-2 py-1.5 text-xs font-medium">{s.name}</span>
                  </button>
                );
              })}
            </div>
            {spot && (
              <p className="text-xs text-muted-foreground">
                При точечной правке стиль не используется.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Режим генерации
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMode("standard")}
                aria-pressed={mode === "standard"}
                className={`border p-3 text-left transition-colors ${
                  mode === "standard" ? "border-foreground bg-muted/50" : "border-border"
                }`}
              >
                <span className="block text-sm font-medium">Standard</span>
                <span className="block text-xs text-muted-foreground">1 кредит, быстро</span>
              </button>
              <div>
                <button
                  type="button"
                  disabled={!proAllowed}
                  onClick={() => setMode("pro")}
                  aria-pressed={mode === "pro"}
                  className={`w-full border p-3 text-left transition-colors ${
                    mode === "pro" ? "border-foreground bg-muted/50" : "border-border"
                  } ${proAllowed ? "" : "cursor-not-allowed opacity-50"}`}
                >
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    {!proAllowed && <Lock className="size-3" />} PRO
                  </span>
                  <span className="block text-xs text-muted-foreground">2 кредита, детальнее</span>
                </button>
                {!proAllowed && <UpgradeNote text='Доступно с тарифа «Проект».' />}
              </div>
            </div>
          </div>

          <StepTitle n={3}>Дополнительно</StepTitle>

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

          <div className="border border-border p-3">
            <label className="flex items-start gap-2.5 text-sm">
              <input
                type="checkbox"
                checked={spot}
                onChange={(e) => setSpot(e.target.checked)}
                className="mt-0.5 size-4 accent-[var(--foreground)]"
              />
              <span className="font-medium">Точечная правка — не переделывать полностью</span>
            </label>
            <p className="mt-2 text-xs text-muted-foreground">
              Сохраним пространство как есть, применим только то, что вы описали в поле выше. Цена —
              2 кредита, стиль не используется.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Референсы</p>
            <div className={objectAllowed ? "" : "opacity-60"}>
              <div className="flex flex-wrap gap-2">
                {refs.map((r, i) => (
                  <div key={r.url} className="relative size-16 overflow-hidden border border-border">
                    <img src={r.url} alt={r.name} className="size-full object-cover" />
                    <button
                      type="button"
                      aria-label="Удалить референс"
                      onClick={() => setRefs((prev) => prev.filter((_, idx) => idx !== i))}
                      className="absolute right-0 top-0 bg-background/90 p-0.5"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  disabled={!objectAllowed || refs.length >= 5}
                  onClick={() => refsInputRef.current?.click()}
                  className="grid size-16 place-items-center border-2 border-dashed border-border text-muted-foreground transition-colors enabled:hover:border-foreground disabled:cursor-not-allowed"
                >
                  {objectAllowed ? <Plus className="size-4" /> : <Lock className="size-4" />}
                </button>
              </div>
              <input
                ref={refsInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  const list = Array.from(e.target.files ?? []).map((f) => ({
                    name: f.name,
                    url: URL.createObjectURL(f),
                  }));
                  setRefs((prev) => [...prev, ...list].slice(0, 5));
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              До 5 дополнительных фото: материалы, ракурсы, примеры стиля.
            </p>
            {!objectAllowed && <UpgradeNote text='Доступно в тарифе «Объект».' />}
          </div>

          <div className="flex flex-wrap items-start justify-between gap-3 border border-border p-3">
            <div className={objectAllowed ? "" : "opacity-60"}>
              <p className="text-sm font-medium">Приватная генерация</p>
              <p className="text-xs text-muted-foreground">
                Результат не попадает в общую галерею примеров.
              </p>
              {!objectAllowed && <UpgradeNote text='Доступно в тарифе «Объект».' />}
            </div>
            <Switch
              checked={priv && objectAllowed}
              disabled={!objectAllowed}
              onCheckedChange={setPriv}
              aria-label="Приватная генерация"
            />
          </div>
        </>
      ) : (
        <>
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
        </>
      )}

      <Button size="lg" className="mt-auto w-full rounded-none" onClick={submit}>
        <Sparkles className="size-4" />{" "}
        {advanced ? `Сгенерировать дизайн (${cost} кр.)` : "Сгенерировать дизайн"}
      </Button>
    </div>
  );
}
