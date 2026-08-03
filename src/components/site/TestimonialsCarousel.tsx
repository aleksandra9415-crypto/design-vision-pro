import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VideoTestimonial } from "@/components/site/VideoTestimonial";
import { testimonialsExtended } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  const total = testimonialsExtended.length;

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true, containScroll: false }}
      className="mt-10"
    >
      <CarouselContent className="-ml-4">
        {testimonialsExtended.map((t) => (
          <CarouselItem
            key={t.name}
            className="basis-[78%] pl-4 sm:basis-[48%] lg:basis-[30%]"
          >
            <VideoTestimonial item={t} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <div className="flex gap-3">
          <CarouselPrevious className="static size-12 translate-y-0 rounded-none border-foreground/30 bg-background text-foreground transition-colors hover:bg-foreground hover:text-background" />
          <CarouselNext className="static size-12 translate-y-0 rounded-none border-foreground/30 bg-background text-foreground transition-colors hover:bg-foreground hover:text-background" />
        </div>

        <div className="flex items-center gap-2">
          {testimonialsExtended.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Отзыв ${i + 1} из ${total}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-none transition-all",
                i === current
                  ? "w-8 bg-foreground"
                  : "w-3 bg-foreground/25 hover:bg-foreground/50",
              )}
            />
          ))}
        </div>

        <span className="text-sm tabular-nums text-muted-foreground">
          {current + 1} / {total}
        </span>
      </div>
    </Carousel>
  );
}
