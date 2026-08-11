import { useState } from "react";
import { BeforeAfter } from "./BeforeAfter";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type Tile = {
  before: string;
  after: string;
  alt: string;
  /** tailwind span classes */
  span?: string;
};

export function UserMosaic({ tiles }: { tiles: Tile[] }) {
  return (
    <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] sm:grid-cols-4 lg:auto-rows-[300px] lg:grid-cols-6">
      {tiles.map((t) => {
        return (
          <Dialog key={t.alt}>
            <DialogTrigger asChild>
              <figure
                className={`group relative cursor-pointer overflow-hidden border border-border bg-muted ${t.span ?? ""}`}
              >
                {/* После (результат) */}
                <img
                  src={t.after}
                  alt={t.alt}
                  className="absolute inset-0 size-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  loading="lazy"
                />
                {/* До (оригинал) — показывается при наведении */}
                <img
                  src={t.before}
                  alt={`${t.alt} — оригинал`}
                  className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
                
                <figcaption
                  className="absolute inset-x-0 bottom-0 flex min-h-[50px] items-center justify-between gap-2 bg-background/90 px-3 py-2 text-[10px] sm:text-xs backdrop-blur-sm"
                >
                  <span className="flex-1 leading-tight">{t.alt}</span>
                  <span className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    было
                  </span>
                </figcaption>
              </figure>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-3xl lg:max-w-4xl">
              <VisuallyHidden.Root>
                <DialogTitle>{t.alt}</DialogTitle>
              </VisuallyHidden.Root>
              <div className="py-4">
                <BeforeAfter before={t.before} after={t.after} />
                <p className="mt-4 text-center font-display text-xl tracking-[0.02em]">{t.alt}</p>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
