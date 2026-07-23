import { createFileRoute, Link } from "@tanstack/react-router";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { CHARACTERS } from "@/game/characters";
import { usePrefs } from "@/hooks/use-prefs";
import { setPrefs } from "@/lib/preferences";
import { sfx } from "@/lib/audio";

export const Route = createFileRoute("/characters")({
  head: () => ({
    meta: [
      { title: "Personagens — Incrível Dominó" },
      { name: "description", content: "Conheça os personagens do Incrível Dominó, cada um com estilo e nível próprio." },
      { property: "og:title", content: "Personagens — Incrível Dominó" },
      { property: "og:description", content: "Do aprendiz Zeca ao lendário Capitão Mula-Seis." },
    ],
  }),
  component: Characters,
});

const DIFF_LABEL: Record<string, string> = {
  novato: "Novato",
  amador: "Amador",
  profissional: "Profissional",
  lendario: "Lendário",
};

function Characters() {
  const prefs = usePrefs();
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><ComicButton variant="ghost" size="sm">← Menu</ComicButton></Link>
          <h1 className="font-hq text-3xl">Personagens</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CHARACTERS.map((c) => {
            const selected = prefs.characterId === c.id;
            return (
              <ComicPanel key={c.id} tone={selected ? "yellow" : "cream"} className={selected ? "ring-4 ring-hq-red" : ""}>
                <div className="flex items-start gap-3">
                  <div className="text-5xl">{c.emoji}</div>
                  <div className="flex-1">
                    <div className="font-hq text-2xl">{c.name}</div>
                    <div className="font-display uppercase text-xs opacity-80">{DIFF_LABEL[c.difficulty]}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm">{c.tagline}</p>
                <blockquote className="mt-3 italic text-sm border-l-4 border-hq-ink pl-3">
                  “{c.lines.start[0]}”
                </blockquote>
                <div className="mt-4">
                  <ComicButton
                    variant={selected ? "primary" : "accent"}
                    size="sm"
                    onClick={() => { setPrefs({ characterId: c.id }); sfx.tap(); }}
                  >
                    {selected ? "✓ Selecionado" : "Escolher"}
                  </ComicButton>
                </div>
              </ComicPanel>
            );
          })}
        </div>
      </div>
    </main>
  );
}