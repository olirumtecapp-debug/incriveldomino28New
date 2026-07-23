// Web Audio SFX + música procedural. Sem dependências.
import { getPrefs, subscribePrefs } from "./preferences";

let ctx: AudioContext | null = null;
let musicGain: GainNode | null = null;
let sfxGain: GainNode | null = null;
let musicNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
let musicTimer: ReturnType<typeof setInterval> | null = null;

function ensureCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    musicGain = ctx.createGain();
    sfxGain = ctx.createGain();
    musicGain.connect(ctx.destination);
    sfxGain.connect(ctx.destination);
    applyVolumes();
    subscribePrefs(applyVolumes);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function applyVolumes() {
  if (!ctx || !musicGain || !sfxGain) return;
  const p = getPrefs();
  const master = p.muted ? 0 : p.volume.master;
  musicGain.gain.setTargetAtTime(master * p.volume.music, ctx.currentTime, 0.05);
  sfxGain.gain.setTargetAtTime(master * p.volume.sfx, ctx.currentTime, 0.05);
}

function beep(freq: number, dur: number, type: OscillatorType = "square", vol = 0.25) {
  const c = ensureCtx();
  if (!c || !sfxGain) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime);
  g.gain.setValueAtTime(0, c.currentTime);
  g.gain.linearRampToValueAtTime(vol, c.currentTime + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  osc.connect(g).connect(sfxGain);
  osc.start();
  osc.stop(c.currentTime + dur);
}

export const sfx = {
  tap: () => beep(520, 0.06, "square", 0.18),
  place: () => { beep(180, 0.08, "triangle", 0.35); setTimeout(() => beep(120, 0.12, "sine", 0.25), 30); },
  draw: () => beep(360, 0.12, "sawtooth", 0.18),
  pass: () => beep(220, 0.15, "sine", 0.2),
  combo: () => { [440, 550, 660, 880].forEach((f, i) => setTimeout(() => beep(f, 0.08, "square", 0.3), i * 60)); },
  dominou: () => { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f, 0.18, "triangle", 0.35), i * 90)); },
  bloqueio: () => { [220, 180, 140].forEach((f, i) => setTimeout(() => beep(f, 0.2, "sawtooth", 0.3), i * 80)); },
  vitoria: () => { [523, 659, 784, 1046, 1318].forEach((f, i) => setTimeout(() => beep(f, 0.22, "triangle", 0.4), i * 100)); },
  defeat: () => { [400, 320, 260, 200].forEach((f, i) => setTimeout(() => beep(f, 0.25, "sawtooth", 0.3), i * 120)); },
};

const CHORD_LOOPS: Record<string, number[][]> = {
  campanha: [[220, 277, 330], [196, 246, 294], [174, 220, 261], [220, 277, 330]],
  casual:   [[261, 329, 392], [220, 277, 329], [246, 311, 369], [220, 277, 329]],
  relax:    [[196, 246, 294], [174, 220, 261], [164, 207, 246], [174, 220, 261]],
  desafio:  [[220, 277, 349], [196, 246, 311], [207, 261, 329], [220, 277, 349]],
  menu:     [[261, 329, 392], [246, 311, 369], [220, 277, 329], [261, 329, 392]],
};

export function playMusic(scene: keyof typeof CHORD_LOOPS) {
  const c = ensureCtx();
  if (!c || !musicGain) return;
  stopMusic();
  const chords = CHORD_LOOPS[scene] ?? CHORD_LOOPS.menu;
  let step = 0;
  const play = () => {
    stopChord();
    const chord = chords[step % chords.length];
    chord.forEach((f) => {
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, c.currentTime);
      g.gain.setValueAtTime(0, c.currentTime);
      g.gain.linearRampToValueAtTime(0.06, c.currentTime + 0.4);
      g.gain.setValueAtTime(0.06, c.currentTime + 1.6);
      g.gain.linearRampToValueAtTime(0.0001, c.currentTime + 2);
      osc.connect(g).connect(musicGain!);
      osc.start();
      osc.stop(c.currentTime + 2.1);
      musicNodes.push({ osc, gain: g });
    });
    step++;
  };
  play();
  musicTimer = setInterval(play, 1800);
}

function stopChord() {
  musicNodes.forEach((n) => { try { n.osc.stop(); } catch { /* noop */ } });
  musicNodes = [];
}

export function stopMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
  stopChord();
}

export function primeAudio() { ensureCtx(); }