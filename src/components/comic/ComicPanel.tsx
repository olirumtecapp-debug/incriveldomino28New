import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ComicPanel({
  children, className, tone = "cream", title,
}: {
  children: ReactNode; className?: string;
  tone?: "cream" | "yellow" | "blue" | "red" | "ink";
  title?: string;
}) {
  const tones = {
    cream: "bg-hq-cream text-hq-ink",
    yellow: "bg-hq-yellow text-hq-ink",
    blue: "bg-hq-blue text-hq-cream",
    red: "bg-hq-red text-hq-cream",
    ink: "bg-hq-ink text-hq-cream",
  } as const;
  return (
    <div className={cn("relative ink-border-lg rounded-2xl", tones[tone], className)}>
      {title ? (
        <div className="absolute -top-4 left-4 rotate-[-4deg] bg-hq-red text-hq-cream ink-border rounded-md px-3 py-0.5 font-display uppercase text-sm">
          {title}
        </div>
      ) : null}
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}