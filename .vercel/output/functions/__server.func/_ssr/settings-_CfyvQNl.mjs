import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ComicButton } from "./ComicButton-CA0Q43IX.mjs";
import { t as ComicPanel } from "./ComicPanel-BHcv12V6.mjs";
import { a as sfx, i as setPrefs, r as primeAudio } from "./audio-BYXBkrHP.mjs";
import { t as usePrefs } from "./use-prefs-DQ-1rmvK.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-_CfyvQNl.js
var import_jsx_runtime = require_jsx_runtime();
var TABLES = [
	{
		id: "hq",
		label: "HQ Clássico",
		swatch: "bg-hq-cream"
	},
	{
		id: "botequim",
		label: "Botequim",
		swatch: "bg-[oklch(0.4_0.1_60)]"
	},
	{
		id: "neon",
		label: "Neon Noir",
		swatch: "bg-[oklch(0.25_0.15_300)]"
	},
	{
		id: "praia",
		label: "Praia",
		swatch: "bg-[oklch(0.85_0.12_180)]"
	},
	{
		id: "espaco",
		label: "Espaço",
		swatch: "bg-[oklch(0.2_0.08_270)]"
	},
	{
		id: "circo",
		label: "Circo",
		swatch: "bg-hq-red"
	}
];
var SKINS = [
	{
		id: "hq",
		label: "HQ"
	},
	{
		id: "classic",
		label: "Clássico"
	},
	{
		id: "wood",
		label: "Madeira"
	},
	{
		id: "neon",
		label: "Neon"
	}
];
function Settings() {
	const prefs = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
						variant: "ghost",
						size: "sm",
						children: "← Menu"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-hq text-3xl",
					children: "Configurações"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
						tone: "yellow",
						title: "Perfil",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block font-display uppercase text-sm mb-1",
							children: "Apelido"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: prefs.nickname,
							onChange: (e) => setPrefs({ nickname: e.target.value.slice(0, 20) }),
							className: "w-full px-3 py-2 ink-border rounded-md bg-hq-cream font-body",
							placeholder: "Seu apelido"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
						tone: "cream",
						title: "Áudio",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display uppercase",
									children: "Mudo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: prefs.muted ? "ghost" : "primary",
									size: "sm",
									onClick: () => {
										primeAudio();
										setPrefs({ muted: !prefs.muted });
										sfx.tap();
									},
									children: prefs.muted ? "🔇 Silenciado" : "🔊 Ligado"
								})]
							}),
							[
								"master",
								"music",
								"sfx"
							].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-display uppercase text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: k === "master" ? "Geral" : k === "music" ? "Música" : "Efeitos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(prefs.volume[k] * 100), "%"] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 0,
									max: 100,
									step: 1,
									value: prefs.volume[k] * 100,
									onChange: (e) => setPrefs({ volume: {
										...prefs.volume,
										[k]: Number(e.target.value) / 100
									} }),
									className: "w-full accent-hq-red"
								})]
							}, k)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
								variant: "accent",
								size: "sm",
								onClick: () => {
									primeAudio();
									sfx.combo();
								},
								children: "🔊 Testar som"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
						tone: "cream",
						title: "Mesa",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2",
							children: TABLES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setPrefs({ tableTheme: t.id });
									sfx.tap();
								},
								className: `relative ink-border rounded-lg p-2 text-xs font-display uppercase transition-transform hover:-translate-y-0.5 ${prefs.tableTheme === t.id ? "ring-4 ring-hq-red bg-hq-yellow -rotate-1 scale-[1.02]" : "bg-hq-cream"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-10 rounded ${t.swatch} mb-1 ink-border` }),
									t.label,
									prefs.tableTheme === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -top-2 -right-2 h-7 w-7 rounded-full bg-hq-red text-hq-cream ink-border flex items-center justify-center font-hq text-sm animate-hq-pop",
										children: "✓"
									})
								]
							}, t.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
						tone: "cream",
						title: "Skin das peças",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
							children: SKINS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setPrefs({ tileSkin: s.id });
									sfx.tap();
								},
								className: `relative ink-border rounded-lg p-2 font-display uppercase text-sm transition-transform hover:-translate-y-0.5 ${prefs.tileSkin === s.id ? "ring-4 ring-hq-red bg-hq-yellow -rotate-1 scale-[1.02]" : "bg-hq-cream"}`,
								children: [s.label, prefs.tileSkin === s.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-2 -right-2 h-7 w-7 rounded-full bg-hq-red text-hq-cream ink-border flex items-center justify-center font-hq text-sm animate-hq-pop",
									children: "✓"
								})]
							}, s.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
						tone: "cream",
						title: "Regras",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: prefs.ruleset === "draw" ? "primary" : "ghost",
									size: "sm",
									onClick: () => setPrefs({ ruleset: "draw" }),
									children: "Draw (compra)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: prefs.ruleset === "block" ? "primary" : "ghost",
									size: "sm",
									onClick: () => setPrefs({ ruleset: "block" }),
									children: "Bloqueio (passa)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 font-display uppercase text-sm",
								children: ["Pontuação alvo: ", prefs.targetScore]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 30,
								max: 200,
								step: 10,
								value: prefs.targetScore,
								onChange: (e) => setPrefs({ targetScore: Number(e.target.value) }),
								className: "w-full accent-hq-red"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-xs opacity-70",
								children: "All Fives e Mexican Train em breve."
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { Settings as component };
