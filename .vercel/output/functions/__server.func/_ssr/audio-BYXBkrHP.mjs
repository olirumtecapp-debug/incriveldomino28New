//#region node_modules/.nitro/vite/services/ssr/assets/audio-BYXBkrHP.js
var KEY = "incrivel-domino:prefs:v1";
var DEFAULT_PREFS = {
	nickname: "Jogador",
	muted: false,
	volume: {
		master: .8,
		music: .5,
		sfx: .8
	},
	tableTheme: "hq",
	tileSkin: "hq",
	characterId: "zeca",
	ruleset: "draw",
	targetScore: 100,
	reducedMotion: false,
	campaignProgress: 0
};
var cache = null;
var listeners = /* @__PURE__ */ new Set();
function read() {
	if (typeof window === "undefined") return DEFAULT_PREFS;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return DEFAULT_PREFS;
		return {
			...DEFAULT_PREFS,
			...JSON.parse(raw)
		};
	} catch {
		return DEFAULT_PREFS;
	}
}
function getPrefs() {
	if (!cache) cache = read();
	return cache;
}
function setPrefs(patch) {
	cache = {
		...getPrefs(),
		...patch
	};
	if (typeof window !== "undefined") try {
		window.localStorage.setItem(KEY, JSON.stringify(cache));
	} catch {}
	listeners.forEach((l) => l());
}
function subscribePrefs(fn) {
	listeners.add(fn);
	return () => {
		listeners.delete(fn);
	};
}
var ctx = null;
var musicGain = null;
var sfxGain = null;
var musicNodes = [];
var musicTimer = null;
function ensureCtx() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return null;
		ctx = new AC();
		musicGain = ctx.createGain();
		sfxGain = ctx.createGain();
		musicGain.connect(ctx.destination);
		sfxGain.connect(ctx.destination);
		applyVolumes();
		subscribePrefs(applyVolumes);
	}
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function applyVolumes() {
	if (!ctx || !musicGain || !sfxGain) return;
	const p = getPrefs();
	const master = p.muted ? 0 : p.volume.master;
	musicGain.gain.setTargetAtTime(master * p.volume.music, ctx.currentTime, .05);
	sfxGain.gain.setTargetAtTime(master * p.volume.sfx, ctx.currentTime, .05);
}
function beep(freq, dur, type = "square", vol = .25) {
	const c = ensureCtx();
	if (!c || !sfxGain) return;
	const osc = c.createOscillator();
	const g = c.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, c.currentTime);
	g.gain.setValueAtTime(0, c.currentTime);
	g.gain.linearRampToValueAtTime(vol, c.currentTime + .01);
	g.gain.exponentialRampToValueAtTime(1e-4, c.currentTime + dur);
	osc.connect(g).connect(sfxGain);
	osc.start();
	osc.stop(c.currentTime + dur);
}
var sfx = {
	tap: () => beep(520, .06, "square", .18),
	place: () => {
		beep(180, .08, "triangle", .35);
		setTimeout(() => beep(120, .12, "sine", .25), 30);
	},
	draw: () => beep(360, .12, "sawtooth", .18),
	pass: () => beep(220, .15, "sine", .2),
	combo: () => {
		[
			440,
			550,
			660,
			880
		].forEach((f, i) => setTimeout(() => beep(f, .08, "square", .3), i * 60));
	},
	dominou: () => {
		[
			523,
			659,
			784,
			1046
		].forEach((f, i) => setTimeout(() => beep(f, .18, "triangle", .35), i * 90));
	},
	bloqueio: () => {
		[
			220,
			180,
			140
		].forEach((f, i) => setTimeout(() => beep(f, .2, "sawtooth", .3), i * 80));
	},
	vitoria: () => {
		[
			523,
			659,
			784,
			1046,
			1318
		].forEach((f, i) => setTimeout(() => beep(f, .22, "triangle", .4), i * 100));
	},
	defeat: () => {
		[
			400,
			320,
			260,
			200
		].forEach((f, i) => setTimeout(() => beep(f, .25, "sawtooth", .3), i * 120));
	}
};
var CHORD_LOOPS = {
	campanha: [
		[
			220,
			277,
			330
		],
		[
			196,
			246,
			294
		],
		[
			174,
			220,
			261
		],
		[
			220,
			277,
			330
		]
	],
	casual: [
		[
			261,
			329,
			392
		],
		[
			220,
			277,
			329
		],
		[
			246,
			311,
			369
		],
		[
			220,
			277,
			329
		]
	],
	relax: [
		[
			196,
			246,
			294
		],
		[
			174,
			220,
			261
		],
		[
			164,
			207,
			246
		],
		[
			174,
			220,
			261
		]
	],
	desafio: [
		[
			220,
			277,
			349
		],
		[
			196,
			246,
			311
		],
		[
			207,
			261,
			329
		],
		[
			220,
			277,
			349
		]
	],
	menu: [
		[
			261,
			329,
			392
		],
		[
			246,
			311,
			369
		],
		[
			220,
			277,
			329
		],
		[
			261,
			329,
			392
		]
	]
};
function playMusic(scene) {
	const c = ensureCtx();
	if (!c || !musicGain) return;
	stopMusic();
	const chords = CHORD_LOOPS[scene] ?? CHORD_LOOPS.menu;
	let step = 0;
	const play = () => {
		stopChord();
		chords[step % chords.length].forEach((f) => {
			const osc = c.createOscillator();
			const g = c.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(f, c.currentTime);
			g.gain.setValueAtTime(0, c.currentTime);
			g.gain.linearRampToValueAtTime(.06, c.currentTime + .4);
			g.gain.setValueAtTime(.06, c.currentTime + 1.6);
			g.gain.linearRampToValueAtTime(1e-4, c.currentTime + 2);
			osc.connect(g).connect(musicGain);
			osc.start();
			osc.stop(c.currentTime + 2.1);
			musicNodes.push({
				osc,
				gain: g
			});
		});
		step++;
	};
	play();
	musicTimer = setInterval(play, 1800);
}
function stopChord() {
	musicNodes.forEach((n) => {
		try {
			n.osc.stop();
		} catch {}
	});
	musicNodes = [];
}
function stopMusic() {
	if (musicTimer) clearInterval(musicTimer);
	musicTimer = null;
	stopChord();
}
function primeAudio() {
	ensureCtx();
}
//#endregion
export { sfx as a, setPrefs as i, playMusic as n, stopMusic as o, primeAudio as r, subscribePrefs as s, getPrefs as t };
