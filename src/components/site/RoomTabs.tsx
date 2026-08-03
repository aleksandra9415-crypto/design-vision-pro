import { useState } from "react";
import { BeforeAfter } from "@/components/site/BeforeAfter";

export type RoomItem = {
  name: string;
  before: string;
  after: string;
  note: string;
};

export function RoomTabs({ rooms }: { rooms: RoomItem[] }) {
  const [active, setActive] = useState(0);
  const room = rooms[active]!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Типы помещений"
        className="flex flex-wrap gap-2 border-b border-border pb-4"
      >
        {rooms.map((r, i) => (
          <button
            key={r.name}
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`border px-4 py-2 text-sm transition-colors ${
              i === active
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <BeforeAfter key={room.name} before={room.before} after={room.after} />
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-display text-3xl leading-tight tracking-[0.02em]">{room.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{room.note}</p>
        </div>
      </div>
    </div>
  );
}
