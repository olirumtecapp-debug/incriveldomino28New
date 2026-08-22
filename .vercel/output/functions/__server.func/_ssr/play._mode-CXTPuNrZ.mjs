import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn, t as ComicButton } from "./ComicButton-CA0Q43IX.mjs";
import { t as ComicPanel } from "./ComicPanel-BHcv12V6.mjs";
import { n as pickLine, t as CHARACTERS } from "./characters-CbiSUxJv.mjs";
import { a as sfx, i as setPrefs, n as playMusic, o as stopMusic, r as primeAudio } from "./audio-BYXBkrHP.mjs";
import { t as usePrefs } from "./use-prefs-DQ-1rmvK.mjs";
import { _ as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FullscreenToggle } from "./FullscreenToggle-BoPo10o5.mjs";
import { t as DominoTile } from "./DominoTile-mrsadwqL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/play._mode-CXTPuNrZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CONFIG = {
	dominou: {
		text: "DOMINOU!",
		bg: "bg-hq-yellow",
		fg: "text-hq-ink"
	},
	combo: {
		text: "COMBO!",
		bg: "bg-hq-red",
		fg: "text-hq-cream"
	},
	bloqueio: {
		text: "BLOQUEOU!",
		bg: "bg-hq-blue",
		fg: "text-hq-cream"
	},
	vitoria: {
		text: "VITÓRIA!",
		bg: "bg-hq-yellow",
		fg: "text-hq-red"
	},
	derrota: {
		text: "DERROTA!",
		bg: "bg-hq-ink",
		fg: "text-hq-cream"
	}
};
function ComicEffect({ kind, onDone, duration = 1600 }) {
	const [show, setShow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!kind) return;
		setShow(kind);
		const t = setTimeout(() => {
			setShow(null);
			onDone?.();
		}, duration);
		return () => clearTimeout(t);
	}, [
		kind,
		duration,
		onDone
	]);
	if (!show) return null;
	const c = CONFIG[show];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-50 grid place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("burst ink-border-lg animate-hq-pop px-16 py-16 font-hq text-6xl md:text-8xl", c.bg, c.fg),
			style: { filter: "drop-shadow(6px 6px 0 rgba(0,0,0,0.9))" },
			children: c.text
		})
	});
}
function Board({ tiles }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full min-h-[200px] sm:min-h-[240px] flex items-center justify-center overflow-x-auto py-6 rounded-xl ink-border",
		style: { backgroundImage: "radial-gradient(ellipse at center, oklch(0.38 0.08 155) 0%, oklch(0.22 0.06 155) 100%)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-6 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-hq-cream/25 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex items-center gap-1 flex-wrap justify-center max-w-full px-2",
			children: tiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-xl sm:text-2xl text-hq-cream/90 uppercase text-center px-3",
				children: "Comece jogando qualquer peça"
			}) : tiles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-tile-drop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: t.leftPip ?? t.a,
					b: t.rightPip ?? t.b,
					orientation: t.a === t.b ? "v" : "h",
					size: 36
				})
			}, t.id))
		})]
	});
}
function PlayerHand({ hand, hidden, playableIds, onPlay, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center font-display uppercase text-hq-ink tracking-wide mb-2",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap justify-center gap-2",
			children: [hand.map((t) => {
				const playable = playableIds?.has(t.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: t.a,
					b: t.b,
					size: 44,
					orientation: "v",
					hidden,
					playable,
					onClick: playable && onPlay ? () => onPlay(t.id) : void 0
				}, t.id);
			}), hand.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-hq-ink/60 italic",
				children: "(sem peças)"
			})]
		})]
	});
}
function HUD({ state, character }) {
	const turn = state.turn;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-end mb-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenToggle, { size: "sm" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
				tone: "yellow",
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display uppercase text-xs",
					children: "Você"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-hq text-3xl",
					children: state.score.you
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
				tone: turn === "you" ? "red" : "ink",
				className: "text-center min-w-[120px] sm:min-w-[140px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display uppercase text-xs",
					children: "Vez de"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-hq text-lg sm:text-2xl truncate",
					children: turn === "you" ? "Você" : character.name.split(" ")[0]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
				tone: "blue",
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2 min-w-0",
					children: [character.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: character.portrait,
						alt: character.name,
						loading: "lazy",
						width: 40,
						height: 40,
						className: "shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover ink-border bg-hq-cream"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: character.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display uppercase text-xs truncate",
						children: character.name.split(" ")[0]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-hq text-3xl",
					children: state.score.ai
				})]
			})
		]
	})] });
}
function createDeck() {
	const tiles = [];
	for (let a = 0; a <= 6; a++) for (let b = a; b <= 6; b++) tiles.push({
		id: `${a}-${b}`,
		a,
		b
	});
	return tiles;
}
function shuffle(arr, seed) {
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
function pipsSum(tiles) {
	return tiles.reduce((s, t) => s + t.a + t.b, 0);
}
function newGame(opts) {
	const ruleset = opts.ruleset ?? "block";
	const handSize = opts.handSize ?? 7;
	const deck = shuffle(createDeck(), opts.seed);
	const you = deck.slice(0, handSize);
	const ai = deck.slice(handSize, handSize * 2);
	const boneyard = deck.slice(handSize * 2);
	let first = opts.firstMover ?? "you";
	const bestDouble = (h) => h.filter((t) => t.a === t.b).reduce((m, t) => t.a > m ? t.a : m, -1);
	const y = bestDouble(you);
	const a = bestDouble(ai);
	if (y !== a) first = y > a ? "you" : "ai";
	return {
		hands: {
			you,
			ai
		},
		boneyard,
		board: [],
		leftEnd: null,
		rightEnd: null,
		turn: first,
		status: { kind: "playing" },
		score: {
			you: 0,
			ai: 0
		},
		round: 1,
		targetScore: opts.targetScore ?? 100,
		ruleset,
		log: [`Rodada 1 começa. ${first === "you" ? "Você" : "Adversário"} joga primeiro.`],
		consecutivePasses: 0
	};
}
function legalMoves(state, player) {
	const hand = state.hands[player];
	if (state.board.length === 0) return hand.map((t) => ({
		tileId: t.id,
		side: "C"
	}));
	const moves = [];
	for (const t of hand) {
		if (t.a === state.leftEnd || t.b === state.leftEnd) moves.push({
			tileId: t.id,
			side: "L"
		});
		if (t.a === state.rightEnd || t.b === state.rightEnd) moves.push({
			tileId: t.id,
			side: "R"
		});
	}
	return moves;
}
function canDraw(state) {
	return state.ruleset === "draw" && state.boneyard.length > 0;
}
function opponent(p) {
	return p === "you" ? "ai" : "you";
}
function applyMove(state, player, move) {
	if (state.status.kind !== "playing") return state;
	if (state.turn !== player) return state;
	const s = {
		...state,
		hands: {
			you: state.hands.you.slice(),
			ai: state.hands.ai.slice()
		},
		boneyard: state.boneyard.slice(),
		board: state.board.slice(),
		score: { ...state.score },
		log: state.log.slice()
	};
	const who = player === "you" ? "Você" : "Adversário";
	if (move.kind === "play") {
		const idx = s.hands[player].findIndex((t) => t.id === move.tileId);
		if (idx < 0) return state;
		const tile = s.hands[player][idx];
		if (s.board.length === 0) {
			const placed = {
				...tile,
				orientation: tile.a === tile.b ? "v" : "h",
				side: "C",
				leftPip: tile.a,
				rightPip: tile.b
			};
			s.board.push(placed);
			s.leftEnd = tile.a;
			s.rightEnd = tile.b;
		} else if (move.side === "L") {
			const end = s.leftEnd;
			if (tile.a !== end && tile.b !== end) return state;
			const outer = tile.a === end ? tile.b : tile.a;
			s.board.unshift({
				...tile,
				orientation: tile.a === tile.b ? "v" : "h",
				side: "L",
				leftPip: outer,
				rightPip: end
			});
			s.leftEnd = outer;
		} else if (move.side === "R") {
			const end = s.rightEnd;
			if (tile.a !== end && tile.b !== end) return state;
			const outer = tile.a === end ? tile.b : tile.a;
			s.board.push({
				...tile,
				orientation: tile.a === tile.b ? "v" : "h",
				side: "R",
				leftPip: end,
				rightPip: outer
			});
			s.rightEnd = outer;
		} else return state;
		s.hands[player].splice(idx, 1);
		s.consecutivePasses = 0;
		s.lastEvent = {
			kind: "play",
			by: player,
			tile,
			side: move.side
		};
		s.log.push(`${who} jogou [${tile.a}|${tile.b}].`);
		if (s.hands[player].length === 0) {
			const pts = pipsSum(s.hands[opponent(player)]);
			s.score[player] += pts;
			s.status = {
				kind: "ended",
				winner: player,
				reason: "dominou",
				points: pts
			};
			s.lastEvent = {
				kind: "dominou",
				by: player
			};
			s.log.push(`${who} DOMINOU! +${pts} pts.`);
			return s;
		}
		s.turn = opponent(player);
		return s;
	}
	if (move.kind === "draw") {
		if (!canDraw(s)) return state;
		const t = s.boneyard.pop();
		s.hands[player].push(t);
		s.lastEvent = {
			kind: "draw",
			by: player
		};
		s.log.push(`${who} comprou uma peça.`);
		if (legalMoves(s, player).length === 0 && s.boneyard.length > 0) return s;
		if (legalMoves(s, player).length === 0) {
			s.consecutivePasses += 1;
			s.log.push(`${who} passou.`);
			s.lastEvent = {
				kind: "pass",
				by: player
			};
			s.turn = opponent(player);
			return checkBlock(s);
		}
		return s;
	}
	if (move.kind === "pass") {
		if (legalMoves(s, player).length > 0) return state;
		if (canDraw(s)) return state;
		s.consecutivePasses += 1;
		s.lastEvent = {
			kind: "pass",
			by: player
		};
		s.log.push(`${who} passou.`);
		s.turn = opponent(player);
		return checkBlock(s);
	}
	return state;
}
function checkBlock(state) {
	if (state.consecutivePasses < 2) return state;
	const youPts = pipsSum(state.hands.you);
	const aiPts = pipsSum(state.hands.ai);
	const s = { ...state };
	if (youPts < aiPts) {
		s.score = {
			...state.score,
			you: state.score.you + aiPts
		};
		s.status = {
			kind: "ended",
			winner: "you",
			reason: "bloqueio",
			points: aiPts
		};
		s.log = [...state.log, `BLOQUEIO! Você venceu com menos pontos (+${aiPts}).`];
	} else if (aiPts < youPts) {
		s.score = {
			...state.score,
			ai: state.score.ai + youPts
		};
		s.status = {
			kind: "ended",
			winner: "ai",
			reason: "bloqueio",
			points: youPts
		};
		s.log = [...state.log, `BLOQUEIO! Adversário venceu (+${youPts}).`];
	} else {
		s.status = {
			kind: "ended",
			winner: "draw",
			reason: "empate",
			points: 0
		};
		s.log = [...state.log, `BLOQUEIO! Empate na contagem.`];
	}
	s.lastEvent = { kind: "bloqueio" };
	return s;
}
function autoPassOrDrawIfStuck(state) {
	if (state.status.kind !== "playing") return state;
	const p = state.turn;
	if (legalMoves(state, p).length > 0) return state;
	if (canDraw(state)) return applyMove(state, p, { kind: "draw" });
	return applyMove(state, p, { kind: "pass" });
}
function scoreTile(t) {
	return t.a + t.b + (t.a === t.b ? 2 : 0);
}
function pickBestPlay(state, moves, mode) {
	const hand = state.hands.ai;
	const scored = moves.map((m) => {
		let s = scoreTile(hand.find((x) => x.id === m.tileId));
		if (mode === "profissional" || mode === "lendario") {
			const opponentLegal = legalMoves(applyMove(state, "ai", {
				kind: "play",
				tileId: m.tileId,
				side: m.side === "C" ? "L" : m.side
			}), "you").length;
			s += Math.max(0, 6 - opponentLegal) * 1.5;
			if (mode === "lendario") {
				if (opponentLegal === 0) s += 8;
			}
		}
		return {
			m,
			s
		};
	});
	scored.sort((a, b) => b.s - a.s);
	const pick = mode === "novato" ? scored[Math.floor(Math.random() * scored.length)] : scored[0];
	const side = pick.m.side === "C" ? "L" : pick.m.side;
	return {
		kind: "play",
		tileId: pick.m.tileId,
		side
	};
}
function aiChooseMove(state, difficulty) {
	const moves = legalMoves(state, "ai");
	if (moves.length > 0) {
		if (difficulty === "novato" && Math.random() < .3) {
			const m = moves[Math.floor(Math.random() * moves.length)];
			const side = m.side === "C" ? "L" : m.side;
			return {
				kind: "play",
				tileId: m.tileId,
				side
			};
		}
		return pickBestPlay(state, moves, difficulty);
	}
	if (canDraw(state)) return { kind: "draw" };
	return { kind: "pass" };
}
function pickCharacterForMode(mode, prefsCharacterId, campaignProgress) {
	if (mode === "campanha") return CHARACTERS[Math.min(campaignProgress, CHARACTERS.length - 1)];
	return CHARACTERS.find((c) => c.id === prefsCharacterId) ?? CHARACTERS[0];
}
function difficultyForMode(mode, base) {
	if (mode === "relax") return "novato";
	return base;
}
function PlayPage() {
	const { mode } = useParams({ from: "/play/$mode" });
	const prefs = usePrefs();
	const character = (0, import_react.useMemo)(() => pickCharacterForMode(mode, prefs.characterId, prefs.campaignProgress), [
		mode,
		prefs.characterId,
		prefs.campaignProgress
	]);
	const difficulty = difficultyForMode(mode, character.difficulty);
	const [seed, setSeed] = (0, import_react.useState)(() => Date.now() & 2147483647);
	const [state, setState] = (0, import_react.useState)(() => newGame({
		ruleset: mode === "relax" ? "draw" : prefs.ruleset,
		targetScore: prefs.targetScore,
		seed
	}));
	const [effect, setEffect] = (0, import_react.useState)(null);
	const [aiDialog, setAiDialog] = (0, import_react.useState)(pickLine(character, "start"));
	const bannerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		primeAudio();
		playMusic(mode === "campanha" ? "campanha" : mode === "relax" ? "relax" : "casual");
		return () => stopMusic();
	}, [mode]);
	(0, import_react.useEffect)(() => {
		if (state.status.kind !== "playing") return;
		if (state.turn !== "ai") return;
		const t = setTimeout(() => {
			let s = state;
			s = autoPassOrDrawIfStuck(s);
			if (s !== state) {
				setState(s);
				return;
			}
			const move = aiChooseMove(state, difficulty);
			const next = applyMove(state, "ai", move);
			if (move.kind === "play") {
				sfx.place();
				setAiDialog(pickLine(character, "play"));
			} else if (move.kind === "draw") sfx.draw();
			else sfx.pass();
			setState(next);
		}, 800);
		return () => clearTimeout(t);
	}, [
		state,
		difficulty,
		character
	]);
	(0, import_react.useEffect)(() => {
		if (state.status.kind !== "ended") return;
		const st = state.status;
		if (st.reason === "dominou") {
			if (st.winner === "you") {
				setEffect("dominou");
				sfx.dominou();
			} else {
				setEffect("derrota");
				sfx.defeat();
				setAiDialog(pickLine(character, "win"));
			}
		} else if (st.reason === "bloqueio") {
			setEffect("bloqueio");
			sfx.bloqueio();
			if (st.winner === "you") setTimeout(() => {
				setEffect("vitoria");
				sfx.vitoria();
			}, 1700);
			else if (st.winner === "ai") setAiDialog(pickLine(character, "win"));
		}
		if (mode === "campanha" && st.winner === "you") setPrefs({ campaignProgress: Math.min(CHARACTERS.length, prefs.campaignProgress + 1) });
		setPrefs({ lastResult: {
			mode,
			winner: st.winner,
			points: st.points,
			date: (/* @__PURE__ */ new Date()).toISOString()
		} });
	}, [
		state.status,
		character,
		mode,
		prefs.campaignProgress
	]);
	const playable = (0, import_react.useMemo)(() => {
		if (state.turn !== "you" || state.status.kind !== "playing") return /* @__PURE__ */ new Set();
		return new Set(legalMoves(state, "you").map((m) => m.tileId));
	}, [state]);
	const myLegal = (0, import_react.useMemo)(() => legalMoves(state, "you"), [state]);
	const onPlayTile = (0, import_react.useCallback)((tileId) => {
		const options = myLegal.filter((m) => m.tileId === tileId);
		if (options.length === 0) return;
		let move;
		if (options.some((o) => o.side === "C")) move = {
			kind: "play",
			tileId,
			side: "L"
		};
		else if (options.length === 2) move = {
			kind: "play",
			tileId,
			side: options[0].side
		};
		else move = {
			kind: "play",
			tileId,
			side: options[0].side
		};
		sfx.place();
		setState((s) => applyMove(s, "you", move));
	}, [myLegal]);
	const canYouDraw = state.turn === "you" && myLegal.length === 0 && canDraw(state);
	const mustPass = state.turn === "you" && myLegal.length === 0 && !canDraw(state);
	const restart = () => {
		const nextSeed = Date.now() & 2147483647;
		setSeed(nextSeed);
		setState(newGame({
			ruleset: mode === "relax" ? "draw" : prefs.ruleset,
			targetScore: prefs.targetScore,
			seed: nextSeed
		}));
		setAiDialog(pickLine(character, "start"));
		setEffect(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-3 py-4 md:py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
								variant: "ghost",
								size: "sm",
								children: "← Menu"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-hq text-2xl uppercase",
							children: mode
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
							variant: "secondary",
							size: "sm",
							onClick: restart,
							children: "🔄 Nova rodada"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HUD, {
					state,
					character
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: character.portrait,
						alt: character.name,
						loading: "lazy",
						width: 64,
						height: 64,
						className: "shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ink-border bg-hq-cream"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 min-w-0 ink-border rounded-2xl bg-hq-cream px-4 py-2 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display italic",
							children: aiDialog
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: bannerRef,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
						tone: "ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-display uppercase mb-2 opacity-95 bg-hq-cream text-hq-ink ink-border rounded-md px-2 py-1 inline-block",
							children: [
								"Pontas: L=",
								state.leftEnd ?? "—",
								" · R=",
								state.rightEnd ?? "—",
								" · Monte: ",
								state.boneyard.length
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Board, { tiles: state.board })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerHand, {
						hand: state.hands.ai,
						hidden: true,
						label: `${character.name} • ${state.hands.ai.length} peças`
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerHand, {
						hand: state.hands.you,
						label: `Sua mão • ${state.hands.you.length} peças`,
						playableIds: playable,
						onPlay: onPlayTile
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [canYouDraw && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
						variant: "accent",
						onClick: () => {
							sfx.draw();
							setState((s) => applyMove(s, "you", { kind: "draw" }));
						},
						children: "🎴 Comprar peça"
					}), mustPass && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
						variant: "ghost",
						onClick: () => {
							sfx.pass();
							setState((s) => applyMove(s, "you", { kind: "pass" }));
						},
						children: "➡️ Passar vez"
					})]
				}),
				state.status.kind === "ended" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
						tone: state.status.winner === "you" ? "yellow" : "ink",
						title: "Fim de rodada",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-hq text-3xl mb-2",
									children: state.status.winner === "you" ? "🏆 Você venceu!" : state.status.winner === "ai" ? `${character.emoji} ${character.name} venceu` : "Empate!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 text-sm opacity-90",
									children: [
										state.status.reason === "dominou" ? "DOMINOU! " : state.status.reason === "bloqueio" ? "Jogo bloqueado. " : "",
										"+",
										state.status.points,
										" pts"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
										variant: "primary",
										onClick: restart,
										children: "Jogar de novo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
											variant: "ghost",
											children: "Menu"
										})
									})]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicEffect, {
					kind: effect,
					onDone: () => setEffect(null)
				})
			]
		})
	});
}
//#endregion
export { PlayPage as component };
