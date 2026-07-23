import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { primeAudio, playMusic, stopMusic, sfx } from "@/lib/audio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Incrível Dominó — Menu" },
      { name: "description", content: "Menu principal do Incrível Dominó. Escolha seu modo: Campanha, Casual, Relax, Desafio ou Multiplayer." },
      { property: "og:title", content: "Incrível Dominó" },
      { property: "og:description", content: "Dominó premium em estilo HQ com IA caricata e efeitos explosivos." },
    ],
  }),
  component: Index,
});

const MODES: { to: string; label: string; desc: string; tone: "yellow" | "red" | "blue" | "cream" | "ink"; emoji: string }[] = [
  { to: "/play/campanha", label: "Campanha", desc: "Enfrente todos os personagens rumo à Lenda", tone: "red", emoji: "🎯" },
  { to: "/play/casual",   label: "Casual",   desc: "Partida rápida contra a IA",                 tone: "yellow", emoji: "⚡" },
  { to: "/play/relax",    label: "Relax",    desc: "Sem tempo, sem pressão. Só diversão",         tone: "blue", emoji: "🌊" },
  { to: "/play/desafio",  label: "Desafio",  desc: "Puzzle diário — supere seu recorde",          tone: "cream", emoji: "🧩" },
  { to: "/multiplayer",   label: "Online",   desc: "Jogue em salas com código",                   tone: "ink", emoji: "🌐" },
];

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
    <main className="min-h-screen w-full px-4 py-8 md:py-12">
      {/* Marquee com onomatopeias */}
      <div className="mb-8 overflow-hidden ink-border-lg rounded-xl bg-hq-ink py-2">
        <div className="flex gap-8 animate-marquee whitespace-nowrap font-hq text-hq-yellow text-2xl uppercase">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-8">
              <span>💥 DOMINOU!</span><span className="text-hq-red">⚡ COMBO!</span>
              <span className="text-hq-cream">🔒 BLOQUEOU!</span><span>🏆 VITÓRIA!</span>
              <span className="text-hq-blue">🎲 INCRÍVEL DOMINÓ!</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <div className={showTitle ? "animate-hq-pop inline-block" : "opacity-0"}>
            <h1 className="font-hq text-6xl md:text-8xl leading-none">
              <span className="inline-block bg-hq-yellow text-hq-ink px-4 py-1 ink-border-lg rounded-xl -rotate-3">INCRÍVEL</span>{" "}
              <span className="inline-block bg-hq-red text-hq-cream px-4 py-1 ink-border-lg rounded-xl rotate-2 mt-2">DOMINÓ</span>
            </h1>
          </div>
          <p className="mt-6 font-display text-xl md:text-2xl text-hq-ink uppercase">
            Pop Art • Ação • Estratégia
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODES.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              onClick={() => { primeAudio(); sfx.tap(); }}
              className="block group"
            >
              <ComicPanel tone={m.tone} className="h-full transition-transform group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
                <div className="text-4xl mb-2">{m.emoji}</div>
                <div className="font-hq text-3xl uppercase">{m.label}</div>
                <div className="mt-1 text-sm opacity-90">{m.desc}</div>
              </ComicPanel>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/tutorial" onClick={() => { primeAudio(); sfx.tap(); }}>
            <ComicButton variant="secondary" size="md">📖 Tutorial</ComicButton>
          </Link>
          <Link to="/characters" onClick={() => { primeAudio(); sfx.tap(); }}>
            <ComicButton variant="accent" size="md">🎭 Personagens</ComicButton>
          </Link>
          <Link to="/settings" onClick={() => { primeAudio(); sfx.tap(); }}>
            <ComicButton variant="ghost" size="md">⚙️ Configurações</ComicButton>
          </Link>
          <ComicButton variant="primary" size="md" onClick={() => { primeAudio(); playMusic("menu"); }}>
            🎵 Tocar tema
          </ComicButton>
        </div>

        <footer className="mt-12 text-center font-display uppercase text-sm text-hq-ink/70">
          Feito com muita tinta e halftone.
        </footer>
      </div>
    </main>
  );
}
