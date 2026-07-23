import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { FullscreenToggle } from "@/components/comic/FullscreenToggle";
import { CHARACTERS, pickLine } from "@/game/characters";
import type { Character } from "@/game/characters";

export const Route = createFileRoute("/multiplayer")({
  head: () => ({
    meta: [
      { title: "Multiplayer — Incrível Dominó" },
      { name: "description", content: "Crie ou entre em salas de dominó online por código." },
      { property: "og:title", content: "Multiplayer — Incrível Dominó" },
      { property: "og:description", content: "Salas por código para jogar com amigos." },
    ],
  }),
  component: Multiplayer,
});

function randomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function Multiplayer() {
  const [code, setCode] = useState<string>("");
  const [hostCode, setHostCode] = useState<string | null>(null);
  const [selected, setSelected] = useState<Character | null>(null);
  const [bubble, setBubble] = useState<string>("");

  const sendTaunt = (kind: "start" | "play" | "win" | "blocked" | "lose") => {
    if (!selected) return;
    setBubble(pickLine(selected, kind));
    setTimeout(() => setBubble(""), 2500);
  };

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><ComicButton variant="ghost" size="sm">← Menu</ComicButton></Link>
          <h1 className="font-hq text-3xl">Multiplayer</h1>
          <FullscreenToggle size="sm" />
        </div>

        <ComicPanel tone="red" title="Escolha seu personagem" className="mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {CHARACTERS.map((c) => {
              const active = selected?.id === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => { setSelected(c); setBubble(pickLine(c, "start")); setTimeout(() => setBubble(""), 2500); }}
                  className={`ink-border rounded-md p-2 text-left transition-transform hover:-translate-y-0.5 bg-hq-cream text-hq-ink ${active ? "ring-4 ring-hq-yellow -rotate-1" : ""}`}
                >
                  <img
                    src={c.portrait}
                    alt={c.name}
                    loading="lazy"
                    width={96}
                    height={96}
                    className="w-full aspect-square object-cover rounded-md ink-border bg-hq-cream mb-1"
                  />
                  <div className="font-hq text-base sm:text-lg truncate">{c.name}</div>
                  <div className="text-[11px] font-semibold opacity-80 line-clamp-2">{c.tagline}</div>
                </button>
              );
            })}
          </div>
          {selected && (
            <div className="mt-3 relative">
              <div className="flex flex-wrap gap-2">
                <ComicButton size="sm" variant="secondary" onClick={() => sendTaunt("play")}>💬 Provocar</ComicButton>
                <ComicButton size="sm" variant="accent" onClick={() => sendTaunt("win")}>🏆 Comemorar</ComicButton>
                <ComicButton size="sm" variant="ghost" onClick={() => sendTaunt("blocked")}>🚫 Travou!</ComicButton>
                <ComicButton size="sm" variant="primary" onClick={() => sendTaunt("lose")}>😅 Foi mal</ComicButton>
              </div>
              {bubble && (
                <div className="mt-3 inline-flex items-center gap-2 bg-hq-cream text-hq-ink ink-border rounded-md px-3 py-2 font-semibold -rotate-1 animate-hq-pop max-w-full">
                  <img src={selected.portrait} alt={selected.name} loading="lazy" width={32} height={32} className="h-8 w-8 rounded-full object-cover ink-border shrink-0" />
                  <span>{bubble}</span>
                </div>
              )}
            </div>
          )}
        </ComicPanel>

        <ComicPanel tone="yellow" title="Criar sala" className="mb-4">
          {hostCode ? (
            <div className="text-center">
              <div className="font-display uppercase text-sm">Seu código de sala:</div>
              <div className="font-hq text-6xl tracking-widest my-3">{hostCode}</div>
              <p className="text-sm">
                Compartilhe com um amigo. Aguardando conexão
                {selected ? ` como ${selected.emoji} ${selected.name}` : ""}...
              </p>
              <div className="mt-3 inline-flex items-center gap-2 bg-hq-cream ink-border rounded-md px-3 py-1 font-display uppercase text-xs">
                <span className="w-2 h-2 bg-hq-red rounded-full animate-pulse" /> lobby aberto
              </div>
            </div>
          ) : (
            <ComicButton variant="primary" size="lg" disabled={!selected} onClick={() => setHostCode(randomCode())}>
              🎲 Criar nova sala
            </ComicButton>
          )}
          {!selected && !hostCode && (
            <p className="text-xs mt-2 font-semibold opacity-80">Escolha um personagem acima antes de criar a sala.</p>
          )}
        </ComicPanel>

        <ComicPanel tone="blue" title="Entrar por código">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 6))}
            placeholder="ABC123"
            className="w-full px-4 py-3 ink-border rounded-md font-hq text-3xl tracking-widest text-center bg-hq-cream text-hq-ink"
          />
          <div className="mt-3 flex justify-end">
            <ComicButton variant="primary" size="md" disabled={code.length < 4 || !selected}>
              Entrar →
            </ComicButton>
          </div>
        </ComicPanel>

        <ComicPanel tone="ink" className="mt-6 text-center">
          <div className="font-hq text-2xl mb-1">🚧 Em breve</div>
          <p className="text-sm opacity-90">
            O motor multiplayer online (2–4 jogadores, sync realtime, chat de emotes HQ) está sendo finalizado.
            Enquanto isso, jogue no modo Casual ou Campanha contra a IA.
          </p>
          <div className="mt-3">
            <Link to="/play/casual"><ComicButton variant="secondary" size="sm">Jogar Casual</ComicButton></Link>
          </div>
        </ComicPanel>
      </div>
    </main>
  );
}