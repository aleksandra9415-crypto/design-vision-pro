import { BeforeAfter } from "./BeforeAfter";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";


type Tile = {
  before: string;
  after: string;
  alt: string;
  /** tailwind span classes */
  span?: string;
};

export function UserMosaic({ tiles }: { tiles: Tile[] }) {
  // We need exactly 9 tiles for the requested pattern.
  // If more are provided, we take the first 9.
  const displayTiles = tiles.slice(0, 9);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Group 1: Columns 1-3 */}
      {/* Col 1: 1 large vertical */}
      <div className="flex flex-col">
        {displayTiles[0] && <MosaicCard tile={displayTiles[0]} type="vertical" />}
      </div>
      {/* Col 2: 2 horizontal */}
      <div className="flex flex-col justify-between">
        {displayTiles[1] && <MosaicCard tile={displayTiles[1]} type="horizontal" />}
        {displayTiles[2] && <MosaicCard tile={displayTiles[2]} type="horizontal" />}
      </div>
      {/* Col 3: 1 large vertical */}
      <div className="flex flex-col">
        {displayTiles[3] && <MosaicCard tile={displayTiles[3]} type="vertical" />}
      </div>

      {/* Group 2: Columns 1-3 */}
      {/* Col 1: 2 horizontal */}
      <div className="flex flex-col justify-between">
        {displayTiles[4] && <MosaicCard tile={displayTiles[4]} type="horizontal" />}
        {displayTiles[5] && <MosaicCard tile={displayTiles[5]} type="horizontal" />}
      </div>
      {/* Col 2: 1 large vertical */}
      <div className="flex flex-col">
        {displayTiles[6] && <MosaicCard tile={displayTiles[6]} type="vertical" />}
      </div>
      {/* Col 3: 2 horizontal */}
      <div className="flex flex-col justify-between">
        {displayTiles[7] && <MosaicCard tile={displayTiles[7]} type="horizontal" />}
        {displayTiles[8] && <MosaicCard tile={displayTiles[8]} type="horizontal" />}
      </div>
    </div>
  );
}


function MosaicCard({ tile, type }: { tile: Tile; type: "vertical" | "horizontal" }) {
  // Generate a mock prompt based on the tile content
  const getPrompt = (alt: string) => {
    if (alt.toLowerCase().includes("фасад")) {
      return "Современный минимализм, отделка деревом и тёмным металлом, панорамные окна";
    }
    if (alt.toLowerCase().includes("ландшафт") || alt.toLowerCase().includes("двор")) {
      return "Уютная зона отдыха, мощёные дорожки, многоуровневое освещение и хвойные растения";
    }
    return "Тёплый мягкий свет, натуральное дерево, больше зелени и минималистичный декор";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <figure
          className={cn(
            "group relative cursor-pointer overflow-hidden border border-border bg-muted w-full transition-all duration-300 hover:border-foreground/20",
            type === "vertical" ? "aspect-[4/5]" : "aspect-[8/5]"
          )}
        >
          {/* После (результат) */}
          <img
            src={tile.after}
            alt={tile.alt}
            className="absolute inset-0 size-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          {/* До (оригинал) — показывается при наведении */}
          <img
            src={tile.before}
            alt={`${tile.alt} — оригинал`}
            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />

          <figcaption className="absolute inset-x-0 bottom-0 flex min-h-[48px] items-center justify-between gap-3 bg-background/95 px-4 py-2 text-xs backdrop-blur-sm sm:text-[13px]">
            <span className="line-clamp-2 leading-tight font-medium text-foreground/90">
              {tile.alt}
            </span>
            <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              было
            </span>
          </figcaption>
        </figure>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-3xl lg:max-w-4xl rounded-none border-none p-0">
        <VisuallyHidden.Root>
          <DialogTitle>{tile.alt}</DialogTitle>
        </VisuallyHidden.Root>
        <div className="relative bg-background p-4 sm:p-8">
          <BeforeAfter before={tile.before} after={tile.after} />
          <div className="mt-6 text-center space-y-1">
            <h3 className="font-display text-2xl tracking-normal normal-case font-normal">
              {tile.alt}
            </h3>
            <p className="text-muted-foreground text-sm italic">
              «{getPrompt(tile.alt)}»
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


