# ⚔️ RPG Eldrin (Terminal)

Um RPG de texto desenvolvido em Node.js, jogado diretamente no terminal, com foco em combate, exploração e progressão de personagem.

---

## 🎮 Sobre o Projeto

O **RPG Eldrin** é um jogo interativo via terminal onde o jogador pode:

- Explorar o mundo 🎲  
- Enfrentar inimigos ⚔️  
- Gerenciar inventário 🎒  
- Comprar e vender itens 🏪  
- Equipar armas e armaduras 🛡️  
- Evoluir com XP e níveis ⭐  

O projeto foi desenvolvido com foco em prática de lógica, organização de código e arquitetura modular em JavaScript.

---

## 🚀 Funcionalidades

- ⚔️ Sistema de combate por turnos
- 👾 Inimigos com emoji dinâmico (ex: 👺 Goblin)
- 🎒 Sistema de inventário com quantidade
- 🗡️ Equipamentos (weapon / defense)
- 🏪 Sistema de loja (compra e venda)
- 💰 Sistema de ouro
- ⭐ Sistema de XP e level up
- 🎲 Eventos de exploração:
  - inimigos
  - itens
  - ouro
  - nada
- 💀 Sistema de morte do jogador
- 💾 Sistema de save/load (Player1 / Player2)
- 🎨 Interface com cores ANSI no terminal
- ⏸️ Sistema de pause com fluxo controlado

---

## 🎮 Menu do Jogo

### Menu Inicial
```
==================
⚔️ RPG ELDRIN ⚔️
==================

1 - Novo jogo 💡
2 - Carregar jogo ⏳
3 - Sair ❌
```

### Menu Principal
```
=====================
⚔️ MENU PRINCIPAL ⚔️
=====================

1. Explorar 🗺️
2. Inventário 🎒
3. Usar item ⚙️
4. Equipar item 🛡️
5. Status do personagem 🧙
6. Loja 🏪
0. Sair ❌
```

```
project/
├── classes/
│   ├── enemy.js
│   ├── item.js
│   └── player.js
│
├── data/
│   ├── enemies.json
│   ├── itens.json
│   ├── Player1.json
│   └── Player2.json
│
├── systems/
│   ├── battle.js
│   ├── buyItem.js
│   ├── enemyEncounter.js
│   ├── equipItem.js
│   ├── escape.js
│   ├── explore.js
│   ├── gold.js
│   ├── inventory.js
│   ├── itemFound.js
│   ├── loadGame.js
│   ├── newGame.js
│   ├── pause.js
│   ├── playerDeath.js
│   ├── playerStatus.js
│   ├── sellItem.js
│   ├── store.js
│   └── useItem.js
│
├── utils/
│   ├── getEnemyDisplayName.js
│   ├── getPlayerAttack.js
│   └── getPlayerDefense.js
│
└── index.js
```

---

## 🧠 Conceitos Aplicados

- Programação orientada a objetos (classes)
- Modularização de código
- Separação de responsabilidades
- Manipulação de arrays (`find`, `splice`, `forEach`)
- Sistema de probabilidades
- Funções utilitárias (`utils`)
- Entrada de dados com `readline`
- Controle de fluxo com callbacks
- Persistência com JSON

---

## 🎨 Interface

O jogo utiliza cores ANSI para melhorar a experiência:

| Elemento | Cor |
|--------|-----|
| Texto padrão | branco |
| Dano | vermelho |
| HP | verde |
| Recompensa | amarelo |
| Menu | ciano |
| Título | roxo |

---

## ⚔️ Sistema de Combate

- Dano baseado em variação (mínimo até máximo)
- Influência de equipamentos
- Sistema de contra-ataque
- Controle de HP mínimo (não negativo)
- Progressão por XP e level

---

## 🏪 Sistema de Loja

- Compra de itens com ouro
- Venda com valor reduzido (~70%)
- Integração com inventário
- Controle de quantidade

---

## 💀 Sistema de Morte

Quando o jogador morre:

- Pode perder itens
- Retorna ao fluxo principal

---

## ⚙️ Como Executar

```bash
git clone https://github.com/joaopedro-h/RPG-node.js.git
cd RPG-node.js
node index.js
