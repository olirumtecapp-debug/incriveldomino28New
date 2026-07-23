import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-hq-red text-hq-cream",
  secondary: "bg-hq-yellow text-hq-ink",
  accent: "bg-hq-blue text-hq-cream",
  ghost: "bg-hq-cream text-hq-ink",
};
const SIZES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-xl",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size };

export const ComicButton = forwardRef<HTMLButtonElement, Props>(function ComicButton(
  { className, variant = "primary", size = "md", ...props }, ref,
) {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "font-display uppercase tracking-wide inline-flex items-center justify-center gap-2",
        "ink-border rounded-lg transition-transform active:translate-x-[3px] active:translate-y-[3px]",
        "active:shadow-none hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
    />
  );
});