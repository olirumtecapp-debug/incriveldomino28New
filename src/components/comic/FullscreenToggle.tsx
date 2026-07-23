import { useFullscreen } from "@/hooks/use-fullscreen";

type Props = {
  size?: "sm" | "md";
  className?: string;
};

export function FullscreenToggle({ size = "md", className = "" }: Props) {
  const { isFullscreen, toggle } = useFullscreen();
  const sizeCls = size === "sm" ? "px-2 py-1 text-xs" : "px-2.5 py-1 text-sm sm:text-base";
  const label = isFullscreen ? "Padrão" : "Tela cheia";
  const icon = isFullscreen ? "🡼" : "⛶";
  const bg = isFullscreen ? "bg-hq-yellow text-hq-ink" : "bg-hq-cream text-hq-ink";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`${bg} ink-border font-display uppercase inline-flex items-center gap-1 hover:-translate-y-0.5 transition-transform rounded-md ${sizeCls} ${className}`}
    >
      <span aria-hidden className="text-base leading-none">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}