import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Copy, Check, Home } from "lucide-react";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { sfx } from "@/lib/audio";
import qrAsset from "@/assets/qrcode-c6.png.asset.json";

export const Route = createFileRoute("/doacao")({
  head: () => ({
    meta: [
      { title: "Doação — Incrível Dominó" },
      {
        name: "description",
        content:
          "Curtiu o Incrível Dominó? Apoie o desenvolvedor com uma doação via Pix. Qualquer valor ajuda a manter o projeto vivo!",
      },
      { property: "og:title", content: "Apoie o Incrível Dominó" },
      {
        property: "og:description",
        content:
          "Se você gostou do jogo, considere fazer uma doação. Toda ajuda faz diferença!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Apoie o Incrível Dominó" },
      {
        name: "twitter:description",
        content: "Doe via Pix e ajude o Incrível Dominó a crescer.",
      },
    ],
  }),
  component: DoacaoPage,
});

function DoacaoPage() {
  const [copied, setCopied] = useState(false);

  const copyName = async () => {
    try {
      await navigator.clipboard.writeText("Murilo Ferreira da Silva");
      try { sfx.tap(); } catch {}
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <main className="min-h-[100svh] bg-hq-cream">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <Link to="/">
            <ComicButton variant="ghost" size="sm">← Menu</ComicButton>
          </Link>
          <div className="font-hq text-2xl uppercase text-hq-red" style={{ WebkitTextStroke: "1px var(--hq-ink)" }}>
            Doação
          </div>
          <div className="w-[72px]" />
        </div>

        <ComicPanel tone="ink">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-hq-yellow text-hq-ink ink-border rounded-md font-display uppercase text-xs tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current" /> Apoie o projeto
          </div>
          <h1 className="font-hq text-4xl sm:text-6xl leading-[0.95] text-hq-cream" style={{ WebkitTextStroke: "1px var(--hq-ink)" }}>
            FAÇA UMA<br />DOAÇÃO 🁢
          </h1>
          <p className="mt-4 max-w-lg text-sm sm:text-base text-hq-cream/95 font-display">
            Se você curtiu o <span className="underline decoration-hq-yellow decoration-[3px]">Incrível Dominó</span> e acha que tem potencial, considere apoiar o desenvolvedor. Qualquer valor ajuda a manter o projeto vivo e trazer novidades! 🚀
          </p>
        </ComicPanel>

        <div className="mt-5 grid gap-5 md:grid-cols-[auto_1fr] items-start">
          <div className="ink-border rounded-xl bg-hq-cream p-3 mx-auto md:mx-0 w-full max-w-[280px]">
            <div className="ink-border rounded-lg bg-white p-3">
              <img
                src={qrAsset.url}
                alt="QR Code Pix C6 Bank — Murilo Ferreira da Silva"
                className="w-full h-auto block"
              />
            </div>
            <div className="mt-3 text-center font-hq text-base uppercase tracking-widest">
              Pix · Aponte a câmera
            </div>
          </div>

          <div className="ink-border rounded-xl bg-hq-cream p-5 space-y-4">
            <div>
              <div className="font-display uppercase text-xs opacity-70 tracking-widest">Banco</div>
              <div className="font-bold text-xl">C6 Bank</div>
            </div>

            <div>
              <div className="font-display uppercase text-xs opacity-70 tracking-widest">Favorecido</div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="font-bold text-xl">Murilo Ferreira da Silva</div>
                <button
                  onClick={copyName}
                  className="ink-border rounded-md bg-hq-cream p-1.5 hover:-translate-y-0.5 transition-transform"
                  title="Copiar nome"
                  aria-label="Copiar nome"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-sm mt-1 italic opacity-70 font-display">
                Motorista &amp; desenvolvedor 🚗💻
              </div>
            </div>

            <div className="pt-3 border-t-2 border-dashed border-hq-ink/70">
              <p className="text-sm font-display">
                💛 Obrigado por chegar até aqui! Seu apoio faz uma diferença enorme.
              </p>
            </div>

            <Link to="/">
              <ComicButton variant="primary" size="sm">
                <Home className="w-4 h-4 mr-1 inline" /> Voltar pro jogo
              </ComicButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}