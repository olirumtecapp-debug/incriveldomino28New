import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ComicButton } from "./ComicButton-CA0Q43IX.mjs";
import { t as ComicPanel } from "./ComicPanel-BHcv12V6.mjs";
import { t as CHARACTERS } from "./characters-CbiSUxJv.mjs";
import { a as sfx, i as setPrefs } from "./audio-BYXBkrHP.mjs";
import { t as usePrefs } from "./use-prefs-DQ-1rmvK.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/characters-fXecJipT.js
var import_jsx_runtime = require_jsx_runtime();
var DIFF_LABEL = {
	novato: "Novato",
	amador: "Amador",
	profissional: "Profissional",
	lendario: "Lendário"
};
function Characters() {
	const prefs = usePrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
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
					children: "Personagens"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: CHARACTERS.map((c) => {
					const selected = prefs.characterId === c.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComicPanel, {
						tone: selected ? "yellow" : "cream",
						className: selected ? "ring-4 ring-hq-red" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.portrait,
									alt: c.name,
									loading: "lazy",
									width: 72,
									height: 72,
									className: "shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ink-border bg-hq-cream"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-hq text-2xl",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display uppercase text-xs opacity-80",
										children: DIFF_LABEL[c.difficulty]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: c.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-3 italic text-sm border-l-4 border-hq-ink pl-3",
								children: [
									"“",
									c.lines.start[0],
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComicButton, {
									variant: selected ? "primary" : "accent",
									size: "sm",
									onClick: () => {
										setPrefs({ characterId: c.id });
										sfx.tap();
									},
									children: selected ? "✓ Selecionado" : "Escolher"
								})
							})
						]
					}, c.id);
				})
			})]
		})
	});
}
//#endregion
export { Characters as component };
