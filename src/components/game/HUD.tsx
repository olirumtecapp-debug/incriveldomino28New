import { ComicPanel } from "@/components/comic/ComicPanel";
import { FullscreenToggle } from "@/components/comic/FullscreenToggle";
import type { GameState, Player } from "@/game/types";

export function HUD({ state, character }: { state: GameState; character: { name: string; emoji: string; portrait?: string } }) {
  const turn: Player = state.turn;
  return (
   <div>
    <div className="flex justify-end mb-2">
      <FullscreenToggle size="sm" />
    </div>
    <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
      <ComicPanel tone="yellow" className="text-center">
        <div className="font-display uppercase text-xs">Você</div>
        <div className="font-hq text-3xl">{state.score.you}</div>
      </ComicPanel>
      <ComicPanel tone={turn === "you" ? "red" : "ink"} className="text-center min-w-[120px] sm:min-w-[140px]">
        <div className="font-display uppercase text-xs">Vez de</div>
        <div className="font-hq text-lg sm:text-2xl truncate">
          {turn === "you" ? "Você" : character.name.split(" ")[0]}
        </div>
      </ComicPanel>
      <ComicPanel tone="blue" className="text-center">
        <div className="flex items-center justify-center gap-2 min-w-0">
          {character.portrait ? (
            <img
              src={character.portrait}
              alt={character.name}
              loading="lazy"
              width={40}
              height={40}
              className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover ink-border bg-hq-cream"
            />
          ) : <span className="text-xl">{character.emoji}</span>}
          <div className="font-display uppercase text-xs truncate">{character.name.split(" ")[0]}</div>
        </div>
        <div className="font-hq text-3xl">{state.score.ai}</div>
      </ComicPanel>
    </div>
   </div>
  );
}