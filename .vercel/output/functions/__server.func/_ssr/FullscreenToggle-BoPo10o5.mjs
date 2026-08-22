import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FullscreenToggle-BoPo10o5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useFullscreen() {
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onChange = () => setIsFullscreen(!!document.fullscreenElement);
		document.addEventListener("fullscreenchange", onChange);
		onChange();
		return () => document.removeEventListener("fullscreenchange", onChange);
	}, []);
	const enter = (0, import_react.useCallback)(async () => {
		try {
			if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
		} catch {}
	}, []);
	const exit = (0, import_react.useCallback)(async () => {
		try {
			if (document.fullscreenElement) await document.exitFullscreen();
		} catch {}
	}, []);
	return {
		isFullscreen,
		enter,
		exit,
		toggle: (0, import_react.useCallback)(() => {
			if (document.fullscreenElement) exit();
			else enter();
		}, [enter, exit])
	};
}
function FullscreenToggle({ size = "md", className = "" }) {
	const { isFullscreen, toggle } = useFullscreen();
	const sizeCls = size === "sm" ? "px-2 py-1 text-xs" : "px-2.5 py-1 text-sm sm:text-base";
	const label = isFullscreen ? "Padrão" : "Tela cheia";
	const icon = isFullscreen ? "🡼" : "⛶";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": label,
		title: label,
		className: `${isFullscreen ? "bg-hq-yellow text-hq-ink" : "bg-hq-cream text-hq-ink"} ink-border font-display uppercase inline-flex items-center gap-1 hover:-translate-y-0.5 transition-transform rounded-md ${sizeCls} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "text-base leading-none",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: label
		})]
	});
}
//#endregion
export { FullscreenToggle as t };
