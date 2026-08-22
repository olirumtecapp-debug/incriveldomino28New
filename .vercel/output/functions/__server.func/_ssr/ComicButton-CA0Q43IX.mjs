import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ComicButton-CA0Q43IX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var VARIANTS = {
	primary: "bg-hq-red text-hq-cream",
	secondary: "bg-hq-yellow text-hq-ink",
	accent: "bg-hq-blue text-hq-cream",
	ghost: "bg-hq-cream text-hq-ink"
};
var SIZES = {
	sm: "px-3 py-1.5 text-sm",
	md: "px-5 py-2.5 text-base",
	lg: "px-7 py-3.5 text-xl"
};
var ComicButton = (0, import_react.forwardRef)(function ComicButton({ className, variant = "primary", size = "md", ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		...props,
		className: cn("font-display uppercase tracking-wide inline-flex items-center justify-center gap-2", "ink-border rounded-lg transition-transform active:translate-x-[3px] active:translate-y-[3px]", "active:shadow-none hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none", VARIANTS[variant], SIZES[size], className)
	});
});
//#endregion
export { cn as n, ComicButton as t };
