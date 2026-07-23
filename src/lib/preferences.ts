export type TableTheme = "botequim" | "neon" | "praia" | "espaco" | "circo" | "hq";
export type TileSkin = "classic" | "hq" | "neon" | "wood";

export type Prefs = {
  nickname: string;
  muted: boolean;
  volume: { master: number; music: number; sfx: number };
  tableTheme: TableTheme;
  tileSkin: TileSkin;
  characterId: string;
  ruleset: "block" | "draw";
  targetScore: number;
  reducedMotion: boolean;
  campaignProgress: number;
  lastResult?: { mode: string; winner: string; points: number; date: string };
};

const KEY = "incrivel-domino:prefs:v1";

const DEFAULT_PREFS: Prefs = {
  nickname: "Jogador",
  muted: false,
  volume: { master: 0.8, music: 0.5, sfx: 0.8 },
  tableTheme: "hq",
  tileSkin: "hq",
  characterId: "zeca",
  ruleset: "draw",
  targetScore: 100,
  reducedMotion: false,
  campaignProgress: 0,
};

let cache: Prefs | null = null;
const listeners = new Set<() => void>();

function read(): Prefs {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_PREFS;
    return { ...DEFAULT_PREFS, ...JSON.parse(raw) };
  } catch { return DEFAULT_PREFS; }
}

export function getPrefs(): Prefs {
  if (!cache) cache = read();
  return cache;
}

export function setPrefs(patch: Partial<Prefs>) {
  cache = { ...getPrefs(), ...patch };
  if (typeof window !== "undefined") {
    try { window.localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* noop */ }
  }
  listeners.forEach((l) => l());
}

export function subscribePrefs(fn: () => void) {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}