import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as subscribePrefs, t as getPrefs } from "./audio-BYXBkrHP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-prefs-DQ-1rmvK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function usePrefs() {
	return (0, import_react.useSyncExternalStore)((cb) => subscribePrefs(cb), () => getPrefs(), () => getPrefs());
}
//#endregion
export { usePrefs as t };
