import { createFileRoute, Link } from "@tanstack/react-router";
import { ComicButton } from "@/components/comic/ComicButton";
import { ComicPanel } from "@/components/comic/ComicPanel";
import { usePrefs } from "@/hooks/use-prefs";
import { setPrefs } from "@/lib/preferences";
import { primeAudio, sfx } from "@/lib/audio";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Configurações — Incrível Dominó" },
      { name: "description", content: "Ajuste volume, tema da mesa, skin das peças, apelido e regras." },
      { property: "og:title", content: "Configurações — Incrível Dominó" },
      { property: "og:description", content: "Personalize sua experiência no Incrível Dominó." },
    ],
  }),
  component: Settings,
});

const TABLES = [
  { id: "hq", label: "HQ Clássico", swatch: "bg-hq-cream" },
  { id: "botequim", label: "Botequim", swatch: "bg-[oklch(0.4_0.1_60)]" },
  { id: "neon", label: "Neon Noir", swatch: "bg-[oklch(0.25_0.15_300)]" },
  { id: "praia", label: "Praia", swatch: "bg-[oklch(0.85_0.12_180)]" },
  { id: "espaco", label: "Espaço", swatch: "bg-[oklch(0.2_0.08_270)]" },
  { id: "circo", label: "Circo", swatch: "bg-hq-red" },
] as const;

const SKINS = [
  { id: "hq", label: "HQ" },
  { id: "classic", label: "Clássico" },
  { id: "wood", label: "Madeira" },
  { id: "neon", label: "Neon" },
] as const;

function Settings() {
  const prefs = usePrefs();
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><ComicButton variant="ghost" size="sm">← Menu</ComicButton></Link>
          <h1 className="font-hq text-3xl">Configurações</h1>
        </div>

        <div className="grid gap-6">
          <ComicPanel tone="yellow" title="Perfil">
            <label className="block font-display uppercase text-sm mb-1">Apelido</label>
            <input
              value={prefs.nickname}
              onChange={(e) => setPrefs({ nickname: e.target.value.slice(0, 20) })}
              className="w-full px-3 py-2 ink-border rounded-md bg-hq-cream font-body"
              placeholder="Seu apelido"
            />
          </ComicPanel>

          <ComicPanel tone="cream" title="Áudio">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display uppercase">Mudo</span>
              <ComicButton
                variant={prefs.muted ? "ghost" : "primary"}
                size="sm"
                onClick={() => { primeAudio(); setPrefs({ muted: !prefs.muted }); sfx.tap(); }}
              >
                {prefs.muted ? "🔇 Silenciado" : "🔊 Ligado"}
              </ComicButton>
            </div>
            {(["master", "music", "sfx"] as const).map((k) => (
              <div key={k} className="mb-3">
                <div className="flex justify-between font-display uppercase text-sm">
                  <span>{k === "master" ? "Geral" : k === "music" ? "Música" : "Efeitos"}</span>
                  <span>{Math.round(prefs.volume[k] * 100)}%</span>
                </div>
                <input
                  type="range" min={0} max={100} step={1}
                  value={prefs.volume[k] * 100}
                  onChange={(e) => setPrefs({ volume: { ...prefs.volume, [k]: Number(e.target.value) / 100 } })}
                  className="w-full accent-hq-red"
                />
              </div>
            ))}
            <ComicButton variant="accent" size="sm" onClick={() => { primeAudio(); sfx.combo(); }}>
              🔊 Testar som
            </ComicButton>
          </ComicPanel>

          <ComicPanel tone="cream" title="Mesa">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {TABLES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setPrefs({ tableTheme: t.id }); sfx.tap(); }}
                  className={`ink-border rounded-lg p-2 text-xs font-display uppercase ${prefs.tableTheme === t.id ? "ring-4 ring-hq-red" : ""}`}
                >
                  <div className={`h-10 rounded ${t.swatch} mb-1 ink-border`} />
                  {t.label}
                </button>
              ))}
            </div>
          </ComicPanel>

          <ComicPanel tone="cream" title="Skin das peças">
            <div className="grid grid-cols-4 gap-2">
              {SKINS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setPrefs({ tileSkin: s.id }); sfx.tap(); }}
                  className={`ink-border rounded-lg p-2 font-display uppercase text-sm ${prefs.tileSkin === s.id ? "ring-4 ring-hq-red bg-hq-yellow" : ""}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </ComicPanel>

          <ComicPanel tone="cream" title="Regras">
            <div className="flex gap-2 flex-wrap">
              <ComicButton
                variant={prefs.ruleset === "draw" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setPrefs({ ruleset: "draw" })}
              >
                Draw (compra)
              </ComicButton>
              <ComicButton
                variant={prefs.ruleset === "block" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setPrefs({ ruleset: "block" })}
              >
                Bloqueio (passa)
              </ComicButton>
            </div>
            <div className="mt-3 font-display uppercase text-sm">Pontuação alvo: {prefs.targetScore}</div>
            <input
              type="range" min={30} max={200} step={10}
              value={prefs.targetScore}
              onChange={(e) => setPrefs({ targetScore: Number(e.target.value) })}
              className="w-full accent-hq-red"
            />
            <div className="mt-2 text-xs opacity-70">All Fives e Mexican Train em breve.</div>
          </ComicPanel>
        </div>
      </div>
    </main>
  );
}