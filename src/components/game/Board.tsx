import { DominoTile } from "./DominoTile";
import type { PlacedTile } from "@/game/types";

export function Board({ tiles }: { tiles: PlacedTile[] }) {
  return (
    <div className="relative w-full min-h-[180px] flex items-center justify-center overflow-x-auto py-6">
      <div className="flex items-center gap-1 flex-wrap justify-center max-w-full">
        {tiles.length === 0 ? (
          <div className="font-display text-2xl text-hq-ink/60 uppercase">Comece jogando qualquer peça</div>
        ) : (
          tiles.map((t) => (
            <div key={t.id} className="animate-tile-drop">
              <DominoTile a={t.a} b={t.b} orientation={t.a === t.b ? "v" : "h"} size={36} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}