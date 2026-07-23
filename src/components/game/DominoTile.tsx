import { cn } from "@/lib/utils";
import type { Pip } from "@/game/types";

const PIP_POSITIONS: Record<number, [number, number][]> = {
  0: [],
  1: [[0.5, 0.5]],
  2: [[0.25, 0.25], [0.75, 0.75]],
  3: [[0.25, 0.25], [0.5, 0.5], [0.75, 0.75]],
  4: [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]],
  5: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.5], [0.25, 0.75], [0.75, 0.75]],
  6: [[0.25, 0.2], [0.75, 0.2], [0.25, 0.5], [0.75, 0.5], [0.25, 0.8], [0.75, 0.8]],
};

function Face({ pips, size, variant = "default" }: { pips: Pip; size: number; variant?: "default" | "classic" }) {
  const fill = variant === "classic" ? "#ffffff" : "var(--hq-cream)";
  const pipFill = variant === "classic" ? "#000000" : "var(--hq-ink)";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="block">
      <rect x="2" y="2" width="96" height="96" rx="8" fill={fill} stroke="var(--hq-ink)" strokeWidth="4" />
      {PIP_POSITIONS[pips].map(([x, y], i) => (
        <circle key={i} cx={x * 100} cy={y * 100} r="9" fill={pipFill} />
      ))}
    </svg>
  );
}

export function DominoTile({
  a, b, size = 42, orientation = "h", playable, selected, hidden, onClick, className, variant = "default",
}: {
  a: Pip; b: Pip; size?: number;
  orientation?: "h" | "v";
  playable?: boolean; selected?: boolean; hidden?: boolean;
  onClick?: () => void; className?: string;
  variant?: "default" | "classic";
}) {
  const isVertical = orientation === "v";
  const w = isVertical ? size : size * 2;
  const h = isVertical ? size * 2 : size;
  if (hidden) {
    return (
      <div
        style={{ width: w, height: h }}
        className={cn("ink-border rounded-lg bg-hq-red halftone", className)}
      />
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      style={{ width: w, height: h }}
      className={cn(
        "ink-border rounded-lg flex overflow-hidden relative",
        variant === "classic" ? "bg-white" : "bg-hq-cream",
        isVertical ? "flex-col" : "flex-row",
        playable && "ring-4 ring-hq-yellow ring-offset-0 animate-pulse",
        selected && "-translate-y-2",
        onClick ? "cursor-pointer hover:-translate-y-1 transition-transform" : "cursor-default",
        className,
      )}
    >
      <div className={cn("flex items-center justify-center", isVertical ? "h-1/2 w-full" : "w-1/2 h-full")}>
        <Face pips={a} size={size - 6} variant={variant} />
      </div>
      <div className={cn("bg-hq-ink", isVertical ? "h-[3px] w-full" : "w-[3px] h-full")} />
      <div className={cn("flex items-center justify-center", isVertical ? "h-1/2 w-full" : "w-1/2 h-full")}>
        <Face pips={b} size={size - 6} variant={variant} />
      </div>
    </button>
  );
}