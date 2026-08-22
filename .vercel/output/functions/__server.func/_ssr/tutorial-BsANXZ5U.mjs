import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as ComicButton } from "./ComicButton-CA0Q43IX.mjs";
import { t as ComicPanel } from "./ComicPanel-BHcv12V6.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DominoTile } from "./DominoTile-mrsadwqL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tutorial-BsANXZ5U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PANELS = [
	{
		title: "As peças",
		body: "Cada peça de dominó tem dois lados numerados de 0 a 6. São 28 peças no total. As peças com os dois lados iguais são chamadas de 'duplas'.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl p-6 flex justify-center items-center gap-3 flex-wrap min-h-[120px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: 6,
					b: 6,
					size: 48,
					variant: "classic"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: 3,
					b: 5,
					size: 48,
					variant: "classic"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: 0,
					b: 4,
					size: 48,
					variant: "classic"
				})
			]
		})
	},
	{
		title: "O objetivo",
		body: "Ficar sem peças na mão (DOMINOU!) ou, se o jogo travar, ter a menor soma de pontos nas peças restantes.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-hq text-4xl text-center bg-hq-yellow text-hq-ink ink-border rounded-xl py-4",
			children: "🏆 DOMINOU!"
		})
	},
	{
		title: "Como jogar",
		body: "Na sua vez, encaixe uma peça que combine com uma das pontas da mesa. Se não puder jogar, você compra do monte (modo Draw) ou passa (modo Bloqueio).",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl p-6 flex justify-center items-center gap-1 min-h-[120px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: 3,
					b: 5,
					size: 38,
					variant: "classic"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: 5,
					b: 2,
					size: 38,
					variant: "classic"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DominoTile, {
					a: 2,
					b: 2,
					size: 38,
					orientation: "v",
					variant: "classic"
				})
			]
		})
	},
	{
		title: "Bloqueio",
		body: "Se ninguém consegue jogar, o jogo trava. Cada jogador soma os pontos das peças na mão. Menor pontuação vence a rodada.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-hq text-4xl text-center bg-hq-blue text-hq-cream ink-border rounded-xl py-4",
			children: "🔒 BLOQUEOU!"
		})
	},
	{
		title: "Pontuação",
		body: "Quem vence a rodada ganha a soma dos pontos das peças do adversário. Primeiro a 100 pontos leva o jogo.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-hq text-4xl text-center bg-hq-red text-hq-cream ink-border rounded-xl py-4",
			children: "⭐ 100 PTS!"
		})
	},
	{
		title: "Dicas de mestre",
		body: "Segure duplas para casos de emergência. Observe o que o adversário pede e negue as pontas favoritas dele. Bloqueie quando estiver com poucos pontos.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-hq text-3xl text-center bg-hq-yellow text-hq-ink ink-border rounded-xl py-4",
			children: "🧠 SACADA!"
		})
	}
];
function Tutorial() {
	const [i, setI] = (0, import_react.useState)(0);
	const p = PANELS[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
							variant: "ghost",
							size: "sm",
							children: "← Menu"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display uppercase",
						children: [
							"Painel ",
							i + 1,
							" de ",
							PANELS.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicPanel, {
					tone: "cream",
					title: p.title,
					className: "min-h-[300px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-4 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-relaxed",
							children: p.body
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: p.visual })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
						variant: "ghost",
						size: "md",
						onClick: () => setI(Math.max(0, i - 1)),
						disabled: i === 0,
						children: "← Anterior"
					}), i < PANELS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
						variant: "primary",
						size: "md",
						onClick: () => setI(i + 1),
						children: "Próximo →"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/play/casual",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
							variant: "primary",
							size: "md",
							children: "Jogar agora! 🎲"
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { Tutorial as component };
