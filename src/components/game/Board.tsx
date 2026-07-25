import { DominoTile } from "./DominoTile";
import type { PlacedTile } from "@/game/types";

export function Board({ tiles }: { tiles: PlacedTile[] }) {
  return (
    <div
      className="relative w-full min-h-[200px] sm:min-h-[240px] flex items-center justify-center overflow-x-auto py-6 rounded-xl ink-border"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, oklch(0.38 0.08 155) 0%, oklch(0.22 0.06 155) 100%)",
      }}
    >
      <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-hq-cream/25 pointer-events-none" />
      <div className="relative flex items-center gap-1 flex-wrap justify-center max-w-full px-2">
        {tiles.length === 0 ? (
          <div className="font-display text-xl sm:text-2xl text-hq-cream/90 uppercase text-center px-3">
            Comece jogando qualquer peça
          </div>
        ) : (
          tiles.map((t) => (
            <div key={t.id} className="animate-tile-drop">
              <DominoTile
                a={t.leftPip ?? t.a}
                b={t.rightPip ?? t.b}
                orientation={t.a === t.b ? "v" : "h"}
                size={36}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}