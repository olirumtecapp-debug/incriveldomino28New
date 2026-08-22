import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as ComicButton } from "./ComicButton-CA0Q43IX.mjs";
import { t as ComicPanel } from "./ComicPanel-BHcv12V6.mjs";
import { n as pickLine, t as CHARACTERS } from "./characters-CbiSUxJv.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FullscreenToggle } from "./FullscreenToggle-BoPo10o5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/multiplayer-Cdl9dwcc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function randomCode() {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * 32)]).join("");
}
function Multiplayer() {
	const [code, setCode] = (0, import_react.useState)("");
	const [hostCode, setHostCode] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [bubble, setBubble] = (0, import_react.useState)("");
	const sendTaunt = (kind) => {
		if (!selected) return;
		setBubble(pickLine(selected, kind));
		setTimeout(() => setBubble(""), 2500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
								variant: "ghost",
								size: "sm",
								children: "← Menu"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-hq text-3xl",
							children: "Multiplayer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenToggle, { size: "sm" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
					tone: "red",
					title: "Escolha seu personagem",
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
						children: CHARACTERS.map((c) => {
							const active = selected?.id === c.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSelected(c);
									setBubble(pickLine(c, "start"));
									setTimeout(() => setBubble(""), 2500);
								},
								className: `ink-border rounded-md p-2 text-left transition-transform hover:-translate-y-0.5 bg-hq-cream text-hq-ink ${active ? "ring-4 ring-hq-yellow -rotate-1" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.portrait,
										alt: c.name,
										loading: "lazy",
										width: 96,
										height: 96,
										className: "w-full aspect-square object-cover rounded-md ink-border bg-hq-cream mb-1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-hq text-base sm:text-lg truncate",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-semibold opacity-80 line-clamp-2",
										children: c.tagline
									})
								]
							}, c.id);
						})
					}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									size: "sm",
									variant: "secondary",
									onClick: () => sendTaunt("play"),
									children: "💬 Provocar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									size: "sm",
									variant: "accent",
									onClick: () => sendTaunt("win"),
									children: "🏆 Comemorar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									size: "sm",
									variant: "ghost",
									onClick: () => sendTaunt("blocked"),
									children: "🚫 Travou!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									size: "sm",
									variant: "primary",
									onClick: () => sendTaunt("lose"),
									children: "😅 Foi mal"
								})
							]
						}), bubble && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 inline-flex items-center gap-2 bg-hq-cream text-hq-ink ink-border rounded-md px-3 py-2 font-semibold -rotate-1 animate-hq-pop max-w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: selected.portrait,
								alt: selected.name,
								loading: "lazy",
								width: 32,
								height: 32,
								className: "h-8 w-8 rounded-full object-cover ink-border shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bubble })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
					tone: "yellow",
					title: "Criar sala",
					className: "mb-4",
					children: [hostCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display uppercase text-sm",
								children: "Seu código de sala:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-hq text-6xl tracking-widest my-3",
								children: hostCode
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									"Compartilhe com um amigo. Aguardando conexão",
									selected ? ` como ${selected.emoji} ${selected.name}` : "",
									"..."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 inline-flex items-center gap-2 bg-hq-cream ink-border rounded-md px-3 py-1 font-display uppercase text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 bg-hq-red rounded-full animate-pulse" }), " lobby aberto"]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
						variant: "primary",
						size: "lg",
						disabled: !selected,
						onClick: () => setHostCode(randomCode()),
						children: "🎲 Criar nova sala"
					}), !selected && !hostCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs mt-2 font-semibold opacity-80",
						children: "Escolha um personagem acima antes de criar a sala."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
					tone: "blue",
					title: "Entrar por código",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: code,
						onChange: (e) => setCode(e.target.value.toUpperCase().slice(0, 6)),
						placeholder: "ABC123",
						className: "w-full px-4 py-3 ink-border rounded-md font-hq text-3xl tracking-widest text-center bg-hq-cream text-hq-ink"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
							variant: "primary",
							size: "md",
							disabled: code.length < 4 || !selected,
							children: "Entrar →"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
					tone: "ink",
					className: "mt-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-hq text-2xl mb-1",
							children: "🚧 Em breve"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm opacity-90",
							children: "O motor multiplayer online (2–4 jogadores, sync realtime, chat de emotes HQ) está sendo finalizado. Enquanto isso, jogue no modo Casual ou Campanha contra a IA."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/play/casual",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: "secondary",
									size: "sm",
									children: "Jogar Casual"
								})
							})
						})
					]
				})
			]
		})
	});
}
//#endregion
export { Multiplayer as component };
