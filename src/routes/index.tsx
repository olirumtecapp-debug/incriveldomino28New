import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ComicButton } from "@/components/comic/ComicButton";
import { FullscreenToggle } from "@/components/comic/FullscreenToggle";
import { primeAudio, playMusic, stopMusic, sfx } from "@/lib/audio";
import heroAsset from "@/assets/hero-incrivel-domino.jpg.asset.json";
import logoAsset from "@/assets/logo-incrivel-domino.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Incrível Dominó — Dominó estilo HQ" },
      { name: "description", content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro." },
      { property: "og:title", content: "Incrível Dominó — Dominó estilo HQ" },
      { property: "og:description", content: "Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos. Grátis, sem cadastro." },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: Index,
});

const MODES = [
  { to: "/play/casual",   title: "Clássico", desc: "Você vs. IA. O dominó puro.",          color: "bg-hq-red text-hq-cream" },
  { to: "/play/relax",    title: "Rápido",   desc: "Rodadas curtas, sem pressão.",         color: "bg-hq-yellow text-hq-ink" },
  { to: "/play/campanha", title: "Campanha", desc: "Enfrente os 6 adversários, um a um.", color: "bg-hq-blue text-hq-cream" },
] as const;

function Index() {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowTitle(true), 100);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    return () => stopMusic();
  }, []);
  return (
    <main className="min-h-[100svh] relative overflow-x-hidden bg-hq-cream">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroAsset.url})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hq-cream/20 to-hq-cream" />
      <div className="absolute inset-0 halftone opacity-15 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-4 sm:py-6 lg:py-8">
        {/* Top nav */}
        <nav className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
          <div
            className="font-hq text-2xl sm:text-3xl text-hq-red"
            style={{ WebkitTextStroke: "1px var(--hq-ink)" }}
          >
            ID<span className="text-hq-yellow">28</span>
          </div>
          <div className="flex shrink-0 gap-2 items-center">
            <Link
              to="/multiplayer"
              onClick={() => { primeAudio(); sfx.tap(); }}
              className="px-2.5 py-1 bg-hq-cream text-hq-ink ink-border font-display uppercase text-sm sm:text-base hover:-translate-y-0.5 transition-transform rounded-md"
            >
              Online
            </Link>
            <Link
              to="/tutorial"
              onClick={() => { primeAudio(); sfx.tap(); }}
              className="px-2.5 py-1 bg-hq-cream text-hq-ink ink-border font-display uppercase text-sm sm:text-base hover:-translate-y-0.5 transition-transform rounded-md"
            >
              Ajuda
            </Link>
            
            <FullscreenToggle />
          </div>
        </nav>

        {/* Logo hero */}
        <div className="flex flex-col items-center text-center">
          <img
            src={logoAsset.url}
            alt="Incrível Dominó"
            width={1400}
            height={900}
            className={`w-[80vw] max-w-2xl max-h-[30vh] object-contain drop-shadow-2xl ${showTitle ? "animate-hq-pop" : "opacity-0"}`}
          />

          <p className="mt-3 max-w-md text-sm sm:text-base font-semibold text-hq-ink bg-hq-yellow ink-border px-3 py-1.5 -rotate-1 mx-2 rounded-md">
            Peças voando. Mesa fervendo. O dominó mais divertido dos quadrinhos.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center w-full sm:w-auto px-2">
            <Link
              to="/characters"
              onClick={() => { primeAudio(); sfx.tap(); }}
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 bg-hq-red text-hq-cream ink-border font-display uppercase text-xl sm:text-2xl hover:-translate-y-0.5 transition-transform rounded-md"
              style={{ WebkitTextStroke: "0.75px var(--hq-ink)" }}
            >
              Jogar agora
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/tutorial"
              onClick={() => { primeAudio(); sfx.tap(); }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-hq-cream text-hq-ink ink-border font-display uppercase text-base sm:text-lg hover:-translate-y-0.5 transition-transform rounded-md"
            >
              Como jogar
            </Link>
          </div>
        </div>

        {/* Modes panels */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {MODES.map((m, i) => (
            <Link
              key={m.to}
              to={m.to}
              onClick={() => { primeAudio(); sfx.tap(); }}
              className={`block ink-border p-3 sm:p-4 rounded-md ${m.color} ${i % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"} hover:-translate-y-0.5 transition-transform`}
            >
              <h3
                className="font-display uppercase text-xl sm:text-2xl mb-1"
                style={{ WebkitTextStroke: "0.75px var(--hq-ink)" }}
              >
                {m.title}
              </h3>
              <p className="font-semibold text-xs sm:text-sm">{m.desc}</p>
              <div className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-90">
                Jogar →
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary controls */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link to="/characters" onClick={() => { primeAudio(); sfx.tap(); }}>
            <ComicButton variant="accent" size="sm">🎭 Personagens</ComicButton>
          </Link>
          <Link to="/settings" onClick={() => { primeAudio(); sfx.tap(); }}>
            <ComicButton variant="ghost" size="sm">⚙️ Configurações</ComicButton>
          </Link>
          <ComicButton variant="primary" size="sm" onClick={() => { primeAudio(); playMusic("menu"); }}>
            🎵 Tocar tema
          </ComicButton>
        </div>

        <footer className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs font-semibold px-2 text-hq-ink">
          Feito com traço grosso e halftone. © Incrível Dominó
        </footer>
      </div>
    </main>
  );
}
