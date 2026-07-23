# Auditoria — Regras de Colocação das Peças

Arquivo revisado: `src/game/engine.ts`.

## ✅ Primeira jogada
`newGame` distribui 7 peças para cada lado e define o primeiro a jogar
comparando a maior dupla de cada mão (`bestDouble`). Empate cai no
`opts.firstMover`. **Correto** para partidas 1v1 contra IA. Para regra
estrita de "quem tem 6|6 começa" na primeira mão, basta uma checagem
extra antes da comparação — não crítico.

## ✅ Encaixe nas pontas
`legalMoves` só aceita peças cujo `a` ou `b` case com `leftEnd` ou
`rightEnd`. Doubles no meio permanecem com ambas as pontas iguais ao
número da dupla, e a atualização de `leftEnd`/`rightEnd` em `applyMove`
usa o número externo (`outer`) corretamente. **Correto.**

## ✅ Doubles perpendiculares
`applyMove` grava `orientation: "v"` sempre que `tile.a === tile.b`, e o
renderizador `DominoTile` respeita essa orientação. **Correto.**

## ✅ Passe
`applyMove` com `kind: "pass"` só é aceito se `legalMoves(...).length === 0`
e, no ruleset `draw`, se o boneyard estiver vazio. A UI (`play.$mode.tsx`)
usa `autoPassOrDrawIfStuck`, então o jogador não consegue passar tendo
jogada legal. **Correto.**

## ✅ Compra (ruleset "draw")
`canDraw` respeita ruleset e boneyard. Após comprar, o turno só passa se
o jogador continuar sem jogada e o boneyard esvaziar. **Correto.**

## ✅ Fim de rodada
- Vitória por dominar: pontos somam pips da mão adversária.
- Bloqueio (`consecutivePasses >= 2`): vence quem tem menos pips; empate
  é registrado como `draw`. **Correto.**

## Observação (não bloqueante)
A regra "quem tem 6|6 abre a primeira mão do jogo" pode ser adicionada
opcionalmente em `newGame`, mas o comportamento atual (maior dupla) já é
conforme a variação Bloqueio mais comum jogada casualmente.

**Conclusão:** motor de colocação de peças está correto — nenhuma
correção obrigatória.