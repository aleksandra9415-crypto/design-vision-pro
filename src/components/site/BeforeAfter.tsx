import { useState } from "react";

export function BeforeAfter({
  before,
  after,
  className = "",
}: {
  before: string;
  after: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className={className}>
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden border border-border bg-muted">
        {/* Фон: До (оригинал) — виден полностью, когда ползунок слева */}
        <img
          src={before}
          alt="До генерации"
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        {/* Наложение: После (результат) — открывается слева направо */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={after}
            alt="После генерации"
            className="absolute inset-0 h-full max-w-none object-cover"
            style={{ width: `calc(100% * ${100 / Math.max(pos, 1)})` }}
            loading="lazy"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-background"
          style={{ left: `${pos}%` }}
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/85 px-2 py-1 text-xs font-medium">
          До
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-background/85 px-2 py-1 text-xs font-medium">
          После
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label="Сравнение до и после"
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-4 w-full accent-foreground"
      />
    </div>
  );
}
