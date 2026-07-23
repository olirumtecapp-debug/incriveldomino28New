import { ComicPanel } from "@/components/comic/ComicPanel";
import type { GameState, Player } from "@/game/types";

export function HUD({ state, character }: { state: GameState; character: { name: string; emoji: string } }) {
  const turn: Player = state.turn;
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
      <ComicPanel tone="yellow" className="text-center">
        <div className="font-display uppercase text-xs">Você</div>
        <div className="font-hq text-3xl">{state.score.you}</div>
      </ComicPanel>
      <ComicPanel tone={turn === "you" ? "red" : "ink"} className="text-center min-w-[140px]">
        <div className="font-display uppercase text-xs">Vez de</div>
        <div className="font-hq text-2xl">
          {turn === "you" ? "Você" : `${character.emoji} ${character.name.split(" ")[0]}`}
        </div>
      </ComicPanel>
      <ComicPanel tone="blue" className="text-center">
        <div className="font-display uppercase text-xs">{character.emoji} {character.name}</div>
        <div className="font-hq text-3xl">{state.score.ai}</div>
      </ComicPanel>
    </div>
  );
}