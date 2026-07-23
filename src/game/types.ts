export type Pip = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Tile = { id: string; a: Pip; b: Pip };
export type PlacedTile = Tile & { orientation: "h" | "v"; side: "L" | "R" | "C" };

export type Player = "you" | "ai";

export type GameStatus =
  | { kind: "playing" }
  | { kind: "ended"; winner: Player | "draw"; reason: "dominou" | "bloqueio" | "empate"; points: number };

export type RuleSet = "block" | "draw" | "all-fives" | "mexican-train";

export type GameState = {
  hands: Record<Player, Tile[]>;
  boneyard: Tile[];
  board: PlacedTile[];
  leftEnd: Pip | null;
  rightEnd: Pip | null;
  turn: Player;
  status: GameStatus;
  score: Record<Player, number>;
  round: number;
  targetScore: number;
  ruleset: RuleSet;
  log: string[];
  consecutivePasses: number;
  lastEvent?:
    | { kind: "play"; by: Player; tile: Tile; side: "L" | "R" | "C" }
    | { kind: "draw"; by: Player }
    | { kind: "pass"; by: Player }
    | { kind: "dominou"; by: Player }
    | { kind: "bloqueio" }
    | { kind: "combo"; by: Player };
};

export type PlayMove =
  | { kind: "play"; tileId: string; side: "L" | "R" }
  | { kind: "draw" }
  | { kind: "pass" };