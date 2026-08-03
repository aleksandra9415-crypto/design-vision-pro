import { useCallback, useEffect, useRef, useState } from "react";

export type RevealItem = { before: string; after: string; alt: string };

export function RevealStrip({ items }: { items: RevealItem[] }) {
  const [pos, setPos] = useState(45);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (dragging.current) move(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  const row = (key: "before" | "after") => (
    <div className="flex h-full w-full">
      {items.map((it, i) => (
        <img
          key={`${key}-${i}`}
          src={it[key]}
          alt={key === "before" ? `${it.alt} — оригинал` : `${it.alt} — результат`}
          className="h-full min-w-0 flex-1 object-cover"
          draggable={false}
          loading="lazy"
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex items-end justify-between pb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span>Оригинал</span>
        <span>Результат</span>
      </div>
      <div
        ref={ref}
        onPointerDown={(e) => {
          dragging.current = true;
          move(e.clientX);
        }}
        className="relative h-[240px] w-full cursor-ew-resize select-none overflow-hidden bg-muted sm:h-[300px] lg:h-[360px]"
      >
        {row("before")}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="h-full" style={{ width: `${(100 / Math.max(pos, 0.001)) * 100}%` }}>
            {row("after")}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-background"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
              <path d="M9 6 4 12l5 6zM15 6l5 6-5 6z" />
            </svg>
          </span>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        aria-label="Сравнение оригинала и результата"
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-4 w-full accent-foreground"
      />
    </div>
  );
}
