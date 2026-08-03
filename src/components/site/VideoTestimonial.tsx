import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import clip from "@/assets/testimonial-clip.mp4.asset.json";

type Item = {
  name: string;
  city: string;
  role: string;
  text: string;
  duration: string;
  poster: string;
};

export function VideoTestimonial({ item }: { item: Item }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="flex h-full flex-col border border-border bg-card">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Пауза" : `Смотреть отзыв: ${item.name}`}
        className="group relative block aspect-[4/5] w-full overflow-hidden bg-secondary"
      >
        <video
          ref={videoRef}
          src={clip.url}
          poster={item.poster}
          playsInline
          muted
          loop
          onEnded={() => setPlaying(false)}
          className="size-full object-cover"
        />
        <span className="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
        <span className="absolute bottom-4 left-4 flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground">
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </span>
          <span className="bg-background/90 px-2 py-1 text-xs text-foreground">
            {item.duration}
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
          «{item.text}»
        </blockquote>
        <figcaption className="mt-5 border-t border-border pt-4 text-sm">
          <span className="font-medium">{item.name}</span>
          <span className="text-muted-foreground">
            {" "}
            · {item.city} · {item.role}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
