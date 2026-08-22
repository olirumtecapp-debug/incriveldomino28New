import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as ComicButton } from "./ComicButton-CA0Q43IX.mjs";
import { a as sfx, n as playMusic, o as stopMusic, r as primeAudio } from "./audio-BYXBkrHP.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FullscreenToggle } from "./FullscreenToggle-BoPo10o5.mjs";
import { n as hero_incrivel_domino_jpg_asset_default } from "./router-CxPPI5aa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cqzlbs-P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_incrivel_domino_png_asset_default = {
	version: 1,
	asset_id: "a8254667-d81e-45e4-8d6e-3eab531e2f12",
	project_id: "2b6617c4-e6b8-47b6-b48e-3bc9aad1139d",
	url: "/__l5e/assets-v1/a8254667-d81e-45e4-8d6e-3eab531e2f12/logo-incrivel-domino.png",
	r2_key: "a/v1/2b6617c4-e6b8-47b6-b48e-3bc9aad1139d/a8254667-d81e-45e4-8d6e-3eab531e2f12/logo-incrivel-domino.png",
	original_filename: "logo-incrivel-domino.png",
	size: 1613650,
	content_type: "image/png",
	created_at: "2026-07-23T09:43:11Z"
};
var MODES = [
	{
		to: "/play/casual",
		title: "Clássico",
		desc: "Você vs. IA. O dominó puro.",
		color: "bg-hq-red text-hq-cream"
	},
	{
		to: "/play/relax",
		title: "Rápido",
		desc: "Rodadas curtas, sem pressão.",
		color: "bg-hq-yellow text-hq-ink"
	},
	{
		to: "/play/campanha",
		title: "Campanha",
		desc: "Enfrente os 6 adversários, um a um.",
		color: "bg-hq-blue text-hq-cream"
	}
];
function Index() {
	const [showTitle, setShowTitle] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setShowTitle(true), 100);
		return () => clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		return () => stopMusic();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-[100svh] relative overflow-x-hidden bg-hq-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center opacity-90",
				style: { backgroundImage: `url(${hero_incrivel_domino_jpg_asset_default.url})` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-hq-cream/20 to-hq-cream" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 halftone opacity-15 mix-blend-multiply pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-5xl px-4 py-4 sm:py-6 lg:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center justify-between gap-3 mb-4 sm:mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-hq text-2xl sm:text-3xl text-hq-red",
							style: { WebkitTextStroke: "1px var(--hq-ink)" },
							children: ["ID", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-hq-yellow",
								children: "28"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 gap-2 items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/multiplayer",
									onClick: () => {
										primeAudio();
										sfx.tap();
									},
									className: "px-2.5 py-1 bg-hq-cream text-hq-ink ink-border font-display uppercase text-sm sm:text-base hover:-translate-y-0.5 transition-transform rounded-md",
									children: "Online"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tutorial",
									onClick: () => {
										primeAudio();
										sfx.tap();
									},
									className: "px-2.5 py-1 bg-hq-cream text-hq-ink ink-border font-display uppercase text-sm sm:text-base hover:-translate-y-0.5 transition-transform rounded-md",
									children: "Ajuda"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenToggle, {})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_incrivel_domino_png_asset_default.url,
								alt: "Incrível Dominó",
								width: 1400,
								height: 900,
								className: `w-[80vw] max-w-2xl max-h-[30vh] object-contain drop-shadow-2xl ${showTitle ? "animate-hq-pop" : "opacity-0"}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm sm:text-base font-semibold text-hq-ink bg-hq-yellow ink-border px-3 py-1.5 -rotate-1 mx-2 rounded-md",
								children: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center w-full sm:w-auto px-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/characters",
									onClick: () => {
										primeAudio();
										sfx.tap();
									},
									className: "group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 bg-hq-red text-hq-cream ink-border font-display uppercase text-xl sm:text-2xl hover:-translate-y-0.5 transition-transform rounded-md",
									style: { WebkitTextStroke: "0.75px var(--hq-ink)" },
									children: ["Jogar agora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl group-hover:translate-x-1 transition-transform",
										children: "→"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tutorial",
									onClick: () => {
										primeAudio();
										sfx.tap();
									},
									className: "inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-hq-cream text-hq-ink ink-border font-display uppercase text-base sm:text-lg hover:-translate-y-0.5 transition-transform rounded-md",
									children: "Como jogar"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4",
						children: MODES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: m.to,
							onClick: () => {
								primeAudio();
								sfx.tap();
							},
							className: `block ink-border p-3 sm:p-4 rounded-md ${m.color} ${i % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"} hover:-translate-y-0.5 transition-transform`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display uppercase text-xl sm:text-2xl mb-1",
									style: { WebkitTextStroke: "0.75px var(--hq-ink)" },
									children: m.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-xs sm:text-sm",
									children: m.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-90",
									children: "Jogar →"
								})
							]
						}, m.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/characters",
								onClick: () => {
									primeAudio();
									sfx.tap();
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: "accent",
									size: "sm",
									children: "🎭 Personagens"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/settings",
								onClick: () => {
									primeAudio();
									sfx.tap();
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: "ghost",
									size: "sm",
									children: "⚙️ Configurações"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
								variant: "primary",
								size: "sm",
								onClick: () => {
									primeAudio();
									playMusic("menu");
								},
								children: "🎵 Tocar tema"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-6 sm:mt-8 text-center text-[10px] sm:text-xs font-semibold px-2 text-hq-ink",
						children: "Feito com traço grosso e halftone. © Incrível Dominó"
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
