import { useState } from "react";

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

  return (
    <div>
      <div className="relative h-[220px] w-full select-none overflow-hidden bg-muted sm:h-[260px]">
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
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-background"
          style={{ left: `${pos}%` }}
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label={`Сравнение до и после — ${alt}`}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-4 w-full accent-primary"
      />
      <p className="mt-2 font-display normal-case text-lg leading-tight tracking-[0.02em]">{alt}</p>
    </div>
  );
}

