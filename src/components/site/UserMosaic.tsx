type Tile = {
  before: string;
  after: string;
  alt: string;
  /** tailwind span classes */
  span?: string;
};

export function UserMosaic({ tiles }: { tiles: Tile[] }) {
  return (
    <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-4 lg:auto-rows-[170px] lg:grid-cols-6">
      {tiles.map((t) => (
        <figure
          key={t.alt}
          className={`group relative overflow-hidden border border-border bg-muted ${t.span ?? ""}`}
        >
          <img
            src={t.after}
            alt={t.alt}
            className="absolute inset-x-0 top-0 bottom-10 w-full object-cover object-bottom transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={t.before}
            alt={`${t.alt} — оригинал`}
            className="absolute inset-x-0 top-0 bottom-10 w-full object-cover object-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 bg-background px-3 text-xs">
            <span className="line-clamp-2 leading-tight">{t.alt}</span>
            <span className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              оригинал
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
