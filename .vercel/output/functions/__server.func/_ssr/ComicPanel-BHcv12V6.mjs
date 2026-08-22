import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn } from "./ComicButton-CA0Q43IX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ComicPanel-BHcv12V6.js
var import_jsx_runtime = require_jsx_runtime();
function ComicPanel({ children, className, tone = "cream", title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative ink-border-lg rounded-2xl", {
			cream: "bg-hq-cream text-hq-ink",
			yellow: "bg-hq-yellow text-hq-ink",
			blue: "bg-hq-blue text-hq-cream",
			red: "bg-hq-red text-hq-cream",
			ink: "bg-hq-ink text-hq-cream"
		}[tone], className),
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -top-4 left-4 rotate-[-4deg] bg-hq-red text-hq-cream ink-border rounded-md px-3 py-0.5 font-display uppercase text-sm",
			children: title
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4 md:p-5",
			children
		})]
	});
}
//#endregion
export { ComicPanel as t };
