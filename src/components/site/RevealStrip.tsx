export type RevealItem = { before: string; after: string; alt: string };

const IMG_CLASS =
  "h-[240px] w-[220px] shrink-0 object-cover sm:h-[300px] sm:w-[280px] lg:h-[360px] lg:w-[320px]";

export function RevealStrip({ items }: { items: RevealItem[] }) {
  // Дублируем набор — для бесшовного зацикливания
  const loop = [...items, ...items, ...items, ...items];

  const track = (key: "before" | "after") => (
    <div className="flex w-max animate-[reveal-marquee_60s_linear_infinite] motion-reduce:animate-none">
      {[0, 1].map((dup) => (
        <div className="flex shrink-0" key={dup}>
          {loop.map((it, i) => (
            <img
              key={`${dup}-${i}`}
              src={it[key]}
              alt={dup === 0 && key === "before" ? `${it.alt} — оригинал` : ""}
              aria-hidden={dup === 1 || key === "after" ? true : undefined}
              className={IMG_CLASS}
              draggable={false}
              loading="lazy"
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex items-end justify-between pb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span>Оригинал</span>
        <span>Результат</span>
      </div>
      <div className="relative w-full select-none overflow-hidden bg-muted">
        {track("before")}

        {/* Правая половина — «после», выровнена по той же ленте */}
        <div className="absolute inset-y-0 left-1/2 right-0 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-[200%] -translate-x-1/2">
            {track("after")}
          </div>
        </div>

        {/* Центральный разделитель */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-background" />
      </div>
    </div>
  );
}
