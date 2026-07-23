import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { DominoTile } from "@/components/game/DominoTile";

export const Route = createFileRoute("/tutorial")({
  head: () => ({
    meta: [
      { title: "Tutorial — Incrível Dominó" },
      { name: "description", content: "Aprenda a jogar dominó em painéis HQ ilustrados." },
      { property: "og:title", content: "Tutorial — Incrível Dominó" },
      { property: "og:description", content: "Regras, dicas e estratégia em painéis estilo quadrinhos." },
    ],
  }),
  component: Tutorial,
});

const PANELS: { title: string; body: string; visual: React.ReactNode }[] = [
  {
    title: "As peças",
    body: "Cada peça de dominó tem dois lados numerados de 0 a 6. São 28 peças no total. As peças com os dois lados iguais são chamadas de 'duplas'.",
    visual: (
      <div className="bg-hq-ink rounded-xl p-6 flex justify-center items-center gap-3 flex-wrap halftone ink-border min-h-[120px]">
        <DominoTile a={6} b={6} size={48} />
        <DominoTile a={3} b={5} size={48} />
        <DominoTile a={0} b={4} size={48} />
      </div>
    ),
  },
  {
    title: "O objetivo",
    body: "Ficar sem peças na mão (DOMINOU!) ou, se o jogo travar, ter a menor soma de pontos nas peças restantes.",
    visual: <div className="font-hq text-4xl text-center bg-hq-yellow text-hq-ink ink-border rounded-xl py-4">🏆 DOMINOU!</div>,
  },
  {
    title: "Como jogar",
    body: "Na sua vez, encaixe uma peça que combine com uma das pontas da mesa. Se não puder jogar, você compra do monte (modo Draw) ou passa (modo Bloqueio).",
    visual: (
      <div className="bg-hq-ink rounded-xl p-6 flex justify-center items-center gap-1 halftone ink-border min-h-[120px]">
        <DominoTile a={3} b={5} size={38} />
        <DominoTile a={5} b={2} size={38} />
        <DominoTile a={2} b={2} size={38} orientation="v" />
      </div>
    ),
  },
  {
    title: "Bloqueio",
    body: "Se ninguém consegue jogar, o jogo trava. Cada jogador soma os pontos das peças na mão. Menor pontuação vence a rodada.",
    visual: <div className="font-hq text-4xl text-center bg-hq-blue text-hq-cream ink-border rounded-xl py-4">🔒 BLOQUEOU!</div>,
  },
  {
    title: "Pontuação",
    body: "Quem vence a rodada ganha a soma dos pontos das peças do adversário. Primeiro a 100 pontos leva o jogo.",
    visual: <div className="font-hq text-4xl text-center bg-hq-red text-hq-cream ink-border rounded-xl py-4">⭐ 100 PTS!</div>,
  },
  {
    title: "Dicas de mestre",
    body: "Segure duplas para casos de emergência. Observe o que o adversário pede e negue as pontas favoritas dele. Bloqueie quando estiver com poucos pontos.",
    visual: <div className="font-hq text-3xl text-center bg-hq-yellow text-hq-ink ink-border rounded-xl py-4">🧠 SACADA!</div>,
  },
];

function Tutorial() {
  const [i, setI] = useState(0);
  const p = PANELS[i];
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><ComicButton variant="ghost" size="sm">← Menu</ComicButton></Link>
          <div className="font-display uppercase">Painel {i + 1} de {PANELS.length}</div>
        </div>
        <ComicPanel tone="cream" title={p.title} className="min-h-[300px]">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="font-display text-lg leading-relaxed">{p.body}</p>
            <div>{p.visual}</div>
          </div>
        </ComicPanel>
        <div className="mt-6 flex justify-between">
          <ComicButton variant="ghost" size="md" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>
            ← Anterior
          </ComicButton>
          {i < PANELS.length - 1 ? (
            <ComicButton variant="primary" size="md" onClick={() => setI(i + 1)}>
              Próximo →
            </ComicButton>
          ) : (
            <Link to="/play/casual"><ComicButton variant="primary" size="md">Jogar agora! 🎲</ComicButton></Link>
          )}
        </div>
      </div>
    </main>
  );
}