import { applyMove, legalMoves, pipsSum, canDraw } from "./engine";
import type { GameState, PlayMove, Pip, Tile } from "./types";

export type Difficulty = "novato" | "amador" | "profissional" | "lendario";

function scoreTile(t: Tile): number {
  // heavier tiles / doubles preferred to shed
  return t.a + t.b + (t.a === t.b ? 2 : 0);
}

function pickBestPlay(state: GameState, moves: { tileId: string; side: "L" | "R" | "C" }[], mode: Difficulty): PlayMove {
  const hand = state.hands.ai;
  const scored = moves.map((m) => {
    const t = hand.find((x) => x.id === m.tileId)!;
    let s = scoreTile(t);
    if (mode === "profissional" || mode === "lendario") {
      // simulate resulting ends and prefer plays that keep flexible ends
      const next = applyMove(state, "ai", { kind: "play", tileId: m.tileId, side: m.side === "C" ? "L" : m.side } as PlayMove);
      const opponentLegal = legalMoves(next, "you").length;
      s += Math.max(0, 6 - opponentLegal) * 1.5;
      if (mode === "lendario") {
        // reward if it blocks opponent completely
        if (opponentLegal === 0) s += 8;
      }
    }
    return { m, s };
  });
  scored.sort((a, b) => b.s - a.s);
  const pick = mode === "novato" ? scored[Math.floor(Math.random() * scored.length)] : scored[0];
  const side = pick.m.side === "C" ? "L" : (pick.m.side as "L" | "R");
  return { kind: "play", tileId: pick.m.tileId, side };
}

export function aiChooseMove(state: GameState, difficulty: Difficulty): PlayMove {
  const moves = legalMoves(state, "ai");
  if (moves.length > 0) {
    // novato: 30% jogadas aleatórias
    if (difficulty === "novato" && Math.random() < 0.3) {
      const m = moves[Math.floor(Math.random() * moves.length)];
      const side = m.side === "C" ? "L" : (m.side as "L" | "R");
      return { kind: "play", tileId: m.tileId, side };
    }
    return pickBestPlay(state, moves, difficulty);
  }
  if (canDraw(state)) return { kind: "draw" };
  return { kind: "pass" };
}