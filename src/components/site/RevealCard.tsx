import { useCallback, useEffect, useRef, useState } from "react";

export function RevealCard({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
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

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      className="relative h-[220px] w-full cursor-ew-resize select-none overflow-hidden bg-muted sm:h-[260px]"
    >
      {/* Слева — оригинал, справа — результат */}
      <img
        src={before}
        alt={`${alt} — оригинал`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        loading="lazy"
      />
      <img
        src={after}
        alt={`${alt} — результат`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        loading="lazy"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      />

      <span className="absolute bottom-3 left-3 bg-background/85 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground">
        Оригинал
      </span>
      <span className="absolute bottom-3 right-3 bg-background/85 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground">
        Результат
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-background"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg">
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <path d="M9 6 4 12l5 6zM15 6l5 6-5 6z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
