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
            className="absolute inset-0 size-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={t.before}
            alt={`${t.alt} — оригинал`}
            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/85 px-3 py-2 text-xs">
            <span className="truncate">{t.alt}</span>
            <span className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              оригинал
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
