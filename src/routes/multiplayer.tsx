import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";

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
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><ComicButton variant="ghost" size="sm">← Menu</ComicButton></Link>
          <h1 className="font-hq text-3xl">Multiplayer</h1>
        </div>

        <ComicPanel tone="yellow" title="Criar sala" className="mb-4">
          {hostCode ? (
            <div className="text-center">
              <div className="font-display uppercase text-sm">Seu código de sala:</div>
              <div className="font-hq text-6xl tracking-widest my-3">{hostCode}</div>
              <p className="text-sm">Compartilhe com um amigo. Aguardando conexão...</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-hq-cream ink-border rounded-md px-3 py-1 font-display uppercase text-xs">
                <span className="w-2 h-2 bg-hq-red rounded-full animate-pulse" /> lobby aberto
              </div>
            </div>
          ) : (
            <ComicButton variant="primary" size="lg" onClick={() => setHostCode(randomCode())}>
              🎲 Criar nova sala
            </ComicButton>
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
            <ComicButton variant="primary" size="md" disabled={code.length < 4}>
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