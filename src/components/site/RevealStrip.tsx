export type RevealItem = { before: string; after: string; alt: string };

export function RevealStrip({ items }: { items: RevealItem[] }) {
  // Чередуем «до» и «после» в одну ленту и дублируем набор для бесшовного цикла
  const base = items.flatMap((it) => [
    { src: it.before, alt: `${it.alt} — оригинал` },
    { src: it.after, alt: `${it.alt} — результат` },
  ]);
  const loop = [...base, ...base];

  const track = (ariaHidden: boolean) => (
    <div className="flex shrink-0" aria-hidden={ariaHidden || undefined}>
      {loop.map((it, i) => (
        <img
          key={i}
          src={it.src}
          alt={ariaHidden ? "" : it.alt}
          className="h-[240px] w-[220px] shrink-0 object-cover sm:h-[300px] sm:w-[280px] lg:h-[360px] lg:w-[320px]"
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
      <div className="relative w-full select-none overflow-hidden bg-muted">
        <div className="flex w-max animate-[reveal-marquee_60s_linear_infinite] motion-reduce:animate-none">
          {track(false)}
          {track(true)}
        </div>
      </div>
    </div>
  );
}
