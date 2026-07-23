import { DominoTile } from "./DominoTile";
import type { Tile } from "@/game/types";

export function PlayerHand({
  hand, hidden, playableIds, onPlay, label,
}: {
  hand: Tile[]; hidden?: boolean;
  playableIds?: Set<string>;
  onPlay?: (tileId: string) => void;
  label: string;
}) {
  return (
    <div className="w-full">
      <div className="text-center font-display uppercase text-hq-ink tracking-wide mb-2">{label}</div>
      <div className="flex flex-wrap justify-center gap-2">
        {hand.map((t) => {
          const playable = playableIds?.has(t.id);
          return (
            <DominoTile
              key={t.id}
              a={t.a}
              b={t.b}
              size={44}
              orientation="v"
              hidden={hidden}
              playable={playable}
              onClick={playable && onPlay ? () => onPlay(t.id) : undefined}
            />
          );
        })}
        {hand.length === 0 && <div className="text-hq-ink/60 italic">(sem peças)</div>}
      </div>
    </div>
  );
}