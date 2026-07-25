import type { GameState, PlacedTile, PlayMove, Pip, Player, RuleSet, Tile } from "./types";

export const ALL_PIPS: Pip[] = [0, 1, 2, 3, 4, 5, 6];

export function createDeck(): Tile[] {
  const tiles: Tile[] = [];
  for (let a = 0; a <= 6; a++) {
    for (let b = a; b <= 6; b++) {
      tiles.push({ id: `${a}-${b}`, a: a as Pip, b: b as Pip });
    }
  }
  return tiles;
}

export function shuffle<T>(arr: T[], seed?: number): T[] {
  const a = arr.slice();
  let s = seed ?? Math.floor(Math.random() * 2 ** 31);
  const rand = () => {
    s = (s * 1664525 + 1013904223) % 2 ** 32;
    return s / 2 ** 32;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pipsSum(tiles: Tile[]): number {
  return tiles.reduce((s, t) => s + t.a + t.b, 0);
}

export function newGame(opts: {
  ruleset?: RuleSet;
  targetScore?: number;
  seed?: number;
  handSize?: number;
  firstMover?: Player;
}): GameState {
  const ruleset = opts.ruleset ?? "block";
  const handSize = opts.handSize ?? 7;
  const deck = shuffle(createDeck(), opts.seed);
  const you = deck.slice(0, handSize);
  const ai = deck.slice(handSize, handSize * 2);
  const boneyard = deck.slice(handSize * 2);
  // First mover: highest double, else provided
  let first: Player = opts.firstMover ?? "you";
  const bestDouble = (h: Tile[]) =>
    h.filter((t) => t.a === t.b).reduce((m, t) => (t.a > m ? t.a : m), -1);
  const y = bestDouble(you);
  const a = bestDouble(ai);
  if (y !== a) first = y > a ? "you" : "ai";
  return {
    hands: { you, ai },
    boneyard,
    board: [],
    leftEnd: null,
    rightEnd: null,
    turn: first,
    status: { kind: "playing" },
    score: { you: 0, ai: 0 },
    round: 1,
    targetScore: opts.targetScore ?? 100,
    ruleset,
    log: [`Rodada 1 começa. ${first === "you" ? "Você" : "Adversário"} joga primeiro.`],
    consecutivePasses: 0,
  };
}

export function legalMoves(state: GameState, player: Player): { tileId: string; side: "L" | "R" | "C" }[] {
  const hand = state.hands[player];
  if (state.board.length === 0) {
    return hand.map((t) => ({ tileId: t.id, side: "C" as const }));
  }
  const moves: { tileId: string; side: "L" | "R" | "C" }[] = [];
  for (const t of hand) {
    if (t.a === state.leftEnd || t.b === state.leftEnd) moves.push({ tileId: t.id, side: "L" });
    if (t.a === state.rightEnd || t.b === state.rightEnd) moves.push({ tileId: t.id, side: "R" });
  }
  return moves;
}

export function canDraw(state: GameState): boolean {
  return state.ruleset === "draw" && state.boneyard.length > 0;
}

function opponent(p: Player): Player {
  return p === "you" ? "ai" : "you";
}

export function applyMove(state: GameState, player: Player, move: PlayMove): GameState {
  if (state.status.kind !== "playing") return state;
  if (state.turn !== player) return state;
  const s: GameState = {
    ...state,
    hands: { you: state.hands.you.slice(), ai: state.hands.ai.slice() },
    boneyard: state.boneyard.slice(),
    board: state.board.slice(),
    score: { ...state.score },
    log: state.log.slice(),
  };
  const who = player === "you" ? "Você" : "Adversário";

  if (move.kind === "play") {
    const idx = s.hands[player].findIndex((t) => t.id === move.tileId);
    if (idx < 0) return state;
    const tile = s.hands[player][idx];
    if (s.board.length === 0) {
      const placed: PlacedTile = {
        ...tile,
        orientation: tile.a === tile.b ? "v" : "h",
        side: "C",
        leftPip: tile.a,
        rightPip: tile.b,
      };
      s.board.push(placed);
      s.leftEnd = tile.a;
      s.rightEnd = tile.b;
    } else if (move.side === "L") {
      const end = s.leftEnd!;
      if (tile.a !== end && tile.b !== end) return state;
      const outer: Pip = tile.a === end ? tile.b : tile.a;
      // On the left: matching pip must sit on the RIGHT visually (touching neighbor).
      // outer becomes the new leftEnd and appears on the LEFT visually.
      s.board.unshift({
        ...tile,
        orientation: tile.a === tile.b ? "v" : "h",
        side: "L",
        leftPip: outer,
        rightPip: end,
      });
      s.leftEnd = outer;
    } else if (move.side === "R") {
      const end = s.rightEnd!;
      if (tile.a !== end && tile.b !== end) return state;
      const outer: Pip = tile.a === end ? tile.b : tile.a;
      // On the right: matching pip on the LEFT visually (touching neighbor);
      // outer on the RIGHT becomes new rightEnd.
      s.board.push({
        ...tile,
        orientation: tile.a === tile.b ? "v" : "h",
        side: "R",
        leftPip: end,
        rightPip: outer,
      });
      s.rightEnd = outer;
    } else return state;
    s.hands[player].splice(idx, 1);
    s.consecutivePasses = 0;
    s.lastEvent = { kind: "play", by: player, tile, side: move.side };
    s.log.push(`${who} jogou [${tile.a}|${tile.b}].`);
    if (s.hands[player].length === 0) {
      const pts = pipsSum(s.hands[opponent(player)]);
      s.score[player] += pts;
      s.status = { kind: "ended", winner: player, reason: "dominou", points: pts };
      s.lastEvent = { kind: "dominou", by: player };
      s.log.push(`${who} DOMINOU! +${pts} pts.`);
      return s;
    }
    s.turn = opponent(player);
    return s;
  }

  if (move.kind === "draw") {
    if (!canDraw(s)) return state;
    const t = s.boneyard.pop()!;
    s.hands[player].push(t);
    s.lastEvent = { kind: "draw", by: player };
    s.log.push(`${who} comprou uma peça.`);
    // stay in turn if now has a legal move; else pass
    if (legalMoves(s, player).length === 0 && s.boneyard.length > 0) return s;
    if (legalMoves(s, player).length === 0) {
      s.consecutivePasses += 1;
      s.log.push(`${who} passou.`);
      s.lastEvent = { kind: "pass", by: player };
      s.turn = opponent(player);
      return checkBlock(s);
    }
    return s;
  }

  if (move.kind === "pass") {
    if (legalMoves(s, player).length > 0) return state;
    if (canDraw(s)) return state;
    s.consecutivePasses += 1;
    s.lastEvent = { kind: "pass", by: player };
    s.log.push(`${who} passou.`);
    s.turn = opponent(player);
    return checkBlock(s);
  }

  return state;
}

function checkBlock(state: GameState): GameState {
  if (state.consecutivePasses < 2) return state;
  const youPts = pipsSum(state.hands.you);
  const aiPts = pipsSum(state.hands.ai);
  const s = { ...state };
  if (youPts < aiPts) {
    s.score = { ...state.score, you: state.score.you + aiPts };
    s.status = { kind: "ended", winner: "you", reason: "bloqueio", points: aiPts };
    s.log = [...state.log, `BLOQUEIO! Você venceu com menos pontos (+${aiPts}).`];
  } else if (aiPts < youPts) {
    s.score = { ...state.score, ai: state.score.ai + youPts };
    s.status = { kind: "ended", winner: "ai", reason: "bloqueio", points: youPts };
    s.log = [...state.log, `BLOQUEIO! Adversário venceu (+${youPts}).`];
  } else {
    s.status = { kind: "ended", winner: "draw", reason: "empate", points: 0 };
    s.log = [...state.log, `BLOQUEIO! Empate na contagem.`];
  }
  s.lastEvent = { kind: "bloqueio" };
  return s;
}

export function autoPassOrDrawIfStuck(state: GameState): GameState {
  if (state.status.kind !== "playing") return state;
  const p = state.turn;
  if (legalMoves(state, p).length > 0) return state;
  if (canDraw(state)) return applyMove(state, p, { kind: "draw" });
  return applyMove(state, p, { kind: "pass" });
}