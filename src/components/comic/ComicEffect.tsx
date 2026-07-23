import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type EffectKind = "dominou" | "combo" | "bloqueio" | "vitoria" | "derrota";

const CONFIG: Record<EffectKind, { text: string; bg: string; fg: string }> = {
  dominou:  { text: "DOMINOU!",  bg: "bg-hq-yellow", fg: "text-hq-ink" },
  combo:    { text: "COMBO!",    bg: "bg-hq-red",    fg: "text-hq-cream" },
  bloqueio: { text: "BLOQUEOU!", bg: "bg-hq-blue",   fg: "text-hq-cream" },
  vitoria:  { text: "VITÓRIA!",  bg: "bg-hq-yellow", fg: "text-hq-red" },
  derrota:  { text: "DERROTA!",  bg: "bg-hq-ink",    fg: "text-hq-cream" },
};

export function ComicEffect({ kind, onDone, duration = 1600 }: {
  kind: EffectKind | null; onDone?: () => void; duration?: number;
}) {
  const [show, setShow] = useState<EffectKind | null>(null);
  useEffect(() => {
    if (!kind) return;
    setShow(kind);
    const t = setTimeout(() => { setShow(null); onDone?.(); }, duration);
    return () => clearTimeout(t);
  }, [kind, duration, onDone]);
  if (!show) return null;
  const c = CONFIG[show];
  return (
    <div className="pointer-events-none fixed inset-0 z-50 grid place-items-center">
      <div
        className={cn(
          "burst ink-border-lg animate-hq-pop px-16 py-16 font-hq text-6xl md:text-8xl",
          c.bg, c.fg,
        )}
        style={{ filter: "drop-shadow(6px 6px 0 rgba(0,0,0,0.9))" }}
      >
        {c.text}
      </div>
    </div>
  );
}