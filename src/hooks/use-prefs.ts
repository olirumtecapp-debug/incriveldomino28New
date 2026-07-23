import { useSyncExternalStore } from "react";
import { getPrefs, subscribePrefs, type Prefs } from "@/lib/preferences";

export function usePrefs(): Prefs {
  return useSyncExternalStore(
    (cb) => subscribePrefs(cb),
    () => getPrefs(),
    () => getPrefs(),
  );
}