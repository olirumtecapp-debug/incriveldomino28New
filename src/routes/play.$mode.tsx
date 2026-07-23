import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { ComicEffect, type EffectKind } from "@/components/comic/ComicEffect";
import { Board } from "@/components/game/Board";
import { PlayerHand } from "@/components/game/PlayerHand";
import { HUD } from "@/components/game/HUD";
import { applyMove, autoPassOrDrawIfStuck, canDraw, legalMoves, newGame } from "@/game/engine";
import type { GameState, PlayMove } from "@/game/types";
import { aiChooseMove, type Difficulty } from "@/game/ai";
import { CHARACTERS, pickLine } from "@/game/characters";
import { primeAudio, playMusic, stopMusic, sfx } from "@/lib/audio";
import { usePrefs } from "@/hooks/use-prefs";
import { setPrefs } from "@/lib/preferences";

const VALID_MODES = ["casual", "relax", "campanha"] as const;
type Mode = (typeof VALID_MODES)[number];

export const Route = createFileRoute("/play/$mode")({
  head: ({ params }) => {
    const m = params.mode;
    const title = `Jogar ${m[0].toUpperCase() + m.slice(1)} — Incrível Dominó`;
    return {
      meta: [
        { title },
        { name: "description", content: `Partida de dominó no modo ${m}, com IA caricata e efeitos HQ.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `Modo ${m} do Incrível Dominó.` },
      ],
    };
  },
  beforeLoad: ({ params }) => {
    if (!VALID_MODES.includes(params.mode as Mode)) throw notFound();
  },
  component: PlayPage,
});

function pickCharacterForMode(mode: Mode, prefsCharacterId: string, campaignProgress: number) {
  if (mode === "campanha") {
    return CHARACTERS[Math.min(campaignProgress, CHARACTERS.length - 1)];
  }
  return CHARACTERS.find((c) => c.id === prefsCharacterId) ?? CHARACTERS[0];
}

function difficultyForMode(mode: Mode, base: Difficulty): Difficulty {
  if (mode === "relax") return "novato";
  return base;
}

function PlayPage() {
  const { mode } = useParams({ from: "/play/$mode" }) as { mode: Mode };
  const prefs = usePrefs();
  const character = useMemo(
    () => pickCharacterForMode(mode, prefs.characterId, prefs.campaignProgress),
    [mode, prefs.characterId, prefs.campaignProgress],
  );
  const difficulty = difficultyForMode(mode, character.difficulty);

  const [seed, setSeed] = useState(() => Date.now() & 0x7fffffff);
  const [state, setState] = useState<GameState>(() =>
    newGame({
      ruleset: mode === "relax" ? "draw" : prefs.ruleset,
      targetScore: prefs.targetScore,
      seed,
    }),
  );
  const [effect, setEffect] = useState<EffectKind | null>(null);
  const [aiDialog, setAiDialog] = useState<string>(pickLine(character, "start"));
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    primeAudio();
    playMusic(mode === "campanha" ? "campanha" : mode === "relax" ? "relax" : "casual");
    return () => stopMusic();
  }, [mode]);

  // AI turn loop
  useEffect(() => {
    if (state.status.kind !== "playing") return;
    if (state.turn !== "ai") return;
    const t = setTimeout(() => {
      let s = state;
      // If AI has no legal moves and can't draw, auto pass
      s = autoPassOrDrawIfStuck(s);
      if (s !== state) { setState(s); return; }
      const move = aiChooseMove(state, difficulty);
      const next = applyMove(state, "ai", move);
      if (move.kind === "play") { sfx.place(); setAiDialog(pickLine(character, "play")); }
      else if (move.kind === "draw") sfx.draw();
      else sfx.pass();
      setState(next);
    }, 800);
    return () => clearTimeout(t);
  }, [state, difficulty, character]);

  // Detect game end
  useEffect(() => {
    if (state.status.kind !== "ended") return;
    const st = state.status;
    if (st.reason === "dominou") {
      if (st.winner === "you") { setEffect("dominou"); sfx.dominou(); }
      else { setEffect("derrota"); sfx.defeat(); setAiDialog(pickLine(character, "win")); }
    } else if (st.reason === "bloqueio") {
      setEffect("bloqueio"); sfx.bloqueio();
      if (st.winner === "you") setTimeout(() => { setEffect("vitoria"); sfx.vitoria(); }, 1700);
      else if (st.winner === "ai") setAiDialog(pickLine(character, "win"));
    }
    // Campanha: se vencer, avança
    if (mode === "campanha" && st.winner === "you") {
      setPrefs({ campaignProgress: Math.min(CHARACTERS.length, prefs.campaignProgress + 1) });
    }
    setPrefs({
      lastResult: {
        mode, winner: st.winner, points: st.points, date: new Date().toISOString(),
      },
    });
  }, [state.status, character, mode, prefs.campaignProgress]);

  const playable = useMemo(() => {
    if (state.turn !== "you" || state.status.kind !== "playing") return new Set<string>();
    return new Set(legalMoves(state, "you").map((m) => m.tileId));
  }, [state]);

  const myLegal = useMemo(() => legalMoves(state, "you"), [state]);

  const onPlayTile = useCallback((tileId: string) => {
    const options = myLegal.filter((m) => m.tileId === tileId);
    if (options.length === 0) return;
    // If two sides possible, prefer center then right, else the only side
    let move: PlayMove;
    if (options.some((o) => o.side === "C")) move = { kind: "play", tileId, side: "L" };
    else if (options.length === 2) {
      // simple: play on the side matching first
      move = { kind: "play", tileId, side: options[0].side as "L" | "R" };
    } else move = { kind: "play", tileId, side: options[0].side as "L" | "R" };
    sfx.place();
    setState((s) => applyMove(s, "you", move));
  }, [myLegal]);

  const canYouDraw = state.turn === "you" && myLegal.length === 0 && canDraw(state);
  const mustPass = state.turn === "you" && myLegal.length === 0 && !canDraw(state);

  const restart = () => {
    const nextSeed = Date.now() & 0x7fffffff;
    setSeed(nextSeed);
    setState(newGame({
      ruleset: mode === "relax" ? "draw" : prefs.ruleset,
      targetScore: prefs.targetScore,
      seed: nextSeed,
    }));
    setAiDialog(pickLine(character, "start"));
    setEffect(null);
  };

  return (
    <main className="min-h-screen px-3 py-4 md:py-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-4">
          <Link to="/"><ComicButton variant="ghost" size="sm">← Menu</ComicButton></Link>
          <div className="font-hq text-2xl uppercase">{mode}</div>
          <ComicButton variant="secondary" size="sm" onClick={restart}>🔄 Nova rodada</ComicButton>
        </div>

        <HUD state={state} character={character} />

        {/* AI character speech bubble */}
        <div className="mt-4 flex items-start gap-3">
          <img
            src={character.portrait}
            alt={character.name}
            loading="lazy"
            width={64}
            height={64}
            className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ink-border bg-hq-cream"
          />
          <div className="flex-1 min-w-0 ink-border rounded-2xl bg-hq-cream px-4 py-2 relative">
            <span className="font-display italic">{aiDialog}</span>
          </div>
        </div>

        <div ref={bannerRef} className="mt-4">
          <ComicPanel tone="ink">
            <div className="text-xs font-display uppercase mb-2 opacity-95 bg-hq-cream text-hq-ink ink-border rounded-md px-2 py-1 inline-block">
              Pontas: L={state.leftEnd ?? "—"} · R={state.rightEnd ?? "—"} · Monte: {state.boneyard.length}
            </div>
            <Board tiles={state.board} />
          </ComicPanel>
        </div>

        <div className="mt-6">
          <PlayerHand hand={state.hands.ai} hidden label={`${character.name} • ${state.hands.ai.length} peças`} />
        </div>

        <div className="mt-6">
          <PlayerHand
            hand={state.hands.you}
            label={`Sua mão • ${state.hands.you.length} peças`}
            playableIds={playable}
            onPlay={onPlayTile}
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {canYouDraw && (
            <ComicButton variant="accent" onClick={() => { sfx.draw(); setState((s) => applyMove(s, "you", { kind: "draw" })); }}>
              🎴 Comprar peça
            </ComicButton>
          )}
          {mustPass && (
            <ComicButton variant="ghost" onClick={() => { sfx.pass(); setState((s) => applyMove(s, "you", { kind: "pass" })); }}>
              ➡️ Passar vez
            </ComicButton>
          )}
        </div>

        {state.status.kind === "ended" && (
          <div className="mt-6">
            <ComicPanel tone={state.status.winner === "you" ? "yellow" : "ink"} title="Fim de rodada">
              <div className="text-center">
                <div className="font-hq text-3xl mb-2">
                  {state.status.winner === "you" ? "🏆 Você venceu!" : state.status.winner === "ai" ? `${character.emoji} ${character.name} venceu` : "Empate!"}
                </div>
                <div className="mb-4 text-sm opacity-90">
                  {state.status.reason === "dominou" ? "DOMINOU! " : state.status.reason === "bloqueio" ? "Jogo bloqueado. " : ""}
                  +{state.status.points} pts
                </div>
                <div className="flex justify-center gap-3">
                  <ComicButton variant="primary" onClick={restart}>Jogar de novo</ComicButton>
                  <Link to="/"><ComicButton variant="ghost">Menu</ComicButton></Link>
                </div>
              </div>
            </ComicPanel>
          </div>
        )}

        <ComicEffect kind={effect} onDone={() => setEffect(null)} />
      </div>
    </main>
  );
}