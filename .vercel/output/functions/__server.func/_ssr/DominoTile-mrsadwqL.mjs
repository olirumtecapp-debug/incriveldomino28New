import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn } from "./ComicButton-CA0Q43IX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DominoTile-mrsadwqL.js
var import_jsx_runtime = require_jsx_runtime();
var PIP_POSITIONS = {
	0: [],
	1: [[.5, .5]],
	2: [[.25, .25], [.75, .75]],
	3: [
		[.25, .25],
		[.5, .5],
		[.75, .75]
	],
	4: [
		[.25, .25],
		[.75, .25],
		[.25, .75],
		[.75, .75]
	],
	5: [
		[.25, .25],
		[.75, .25],
		[.5, .5],
		[.25, .75],
		[.75, .75]
	],
	6: [
		[.25, .2],
		[.75, .2],
		[.25, .5],
		[.75, .5],
		[.25, .8],
		[.75, .8]
	]
};
function Face({ pips, size, variant = "default" }) {
	const fill = variant === "classic" ? "#ffffff" : "var(--hq-cream)";
	const pipFill = variant === "classic" ? "#000000" : "var(--hq-ink)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		width: size,
		height: size,
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "2",
			width: "96",
			height: "96",
			rx: "8",
			fill,
			stroke: "var(--hq-ink)",
			strokeWidth: "4"
		}), PIP_POSITIONS[pips].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x * 100,
			cy: y * 100,
			r: "9",
			fill: pipFill
		}, i))]
	});
}
function DominoTile({ a, b, size = 42, orientation = "h", playable, selected, hidden, onClick, className, variant = "default" }) {
	const isVertical = orientation === "v";
	const w = isVertical ? size : size * 2;
	const h = isVertical ? size * 2 : size;
	if (hidden) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width: w,
			height: h
		},
		className: cn("ink-border rounded-lg bg-hq-red halftone", className)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: !onClick,
		style: {
			width: w,
			height: h
		},
		className: cn("ink-border rounded-lg flex overflow-hidden relative", variant === "classic" ? "bg-white" : "bg-hq-cream", isVertical ? "flex-col" : "flex-row", playable && "ring-4 ring-hq-yellow ring-offset-0 animate-pulse", selected && "-translate-y-2", onClick ? "cursor-pointer hover:-translate-y-1 transition-transform" : "cursor-default", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex items-center justify-center", isVertical ? "h-1/2 w-full" : "w-1/2 h-full"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
					pips: a,
					size: size - 6,
					variant
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("bg-hq-ink", isVertical ? "h-[3px] w-full" : "w-[3px] h-full") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex items-center justify-center", isVertical ? "h-1/2 w-full" : "w-1/2 h-full"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
					pips: b,
					size: size - 6,
					variant
				})
			})
		]
	});
}
//#endregion
export { DominoTile as t };
