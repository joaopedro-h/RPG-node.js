const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pause = require("./systems/pause");
const newGame = require("./systems/newGame");
const loadGame = require("./systems//loadGame");
const explore = require("./systems/explore");
const inventory = require("./systems/inventory");
const playerStatus = require("./systems/playerStatus");
const useItem = require('./systems/useItem');
const equipItem = require("./systems/equipItem");
const store = require('./systems/store');
    
const fs = require("fs");   

function saveData(player) {
    if (!player) return; /* Se o jogador não existir, a função não é executada, não salvando nada. */

    const data = JSON.stringify(player, null, 2); /* Pega o objeto "player" e transforma em string JSON, ficando armazenado na variável "data - (dados)." */
    const path = `./data/${player.name}.json`; /* Usa o nome do jogador para definir o arquivo JSON, cada player é um arquivo diferente. */  /* "path" é o caminho do arquivo. */
    fs.writeFileSync(path, data); /* Cria o arquivo se não existir e sobrescreve caso já exista. */
}

function menuInicial() {  /* Criado o menu inicial do jogo, aonde o jogador escolhe se deseja iniciar um novo jogo ou carregar um jogo já criado. */

    console.clear();
    console.log("\x1b[90m=================\x1b[0m");
    console.log("\x1b[91m⚔️  RPG ELDRIN ⚔️\x1b[0m")
    console.log("\x1b[90m=================\n\x1b[0m");

    console.log("1 - Novo jogo. 💡");
    console.log("2 - Carregar jogo. ⏳");
    console.log("3 - Sair. ❌");

    rl.question(`\nEscolha uma opção: `, (opcao) => {

        opcao = Number(opcao);

        if (opcao === 1) {
            newGame(rl, menuJogo, saveData, (newPlayer) => {
                player = newPlayer;
            });

        }else if (opcao === 2) {
            loadGame(menuJogo, menuInicial, rl, pause);

        }else if (opcao === 3) {
            console.log("Saindo do jogo...");
            rl.close();

        }else{
            console.log("Opção inválida!");
            menuInicial(player);
        }
    });
}

function menuJogo(player) { /* Criado o menu principal do jogo. */
  
  console.clear();

  console.log("\x1b[90m=====================\x1b[0m");
  console.log("\x1b[91m⚔️  MENU PRINCIPAL ⚔️\x1b[0m")
  console.log("\x1b[90m=====================\n\x1b[0m");

  console.log("1. Explorar ⚔️");
  console.log("2. Inventário 🎒");
  console.log("3. Usar item ⚙️");
  console.log("4. Equipar item ⚙️");
  console.log("5. Status do personagem 👤");
  console.log("6. Loja 🏪");
  console.log("0. Sair ❌\n");

    rl.question(`Escolha uma opção: `, (opcao) => {
        
        opcao = Number(opcao); /*Feito a conversão de string para número inteiro para que fosse compatível no case.*/

        switch (opcao) {
            
            case 1: 
                explore(() => menuJogo(player), player, rl, pause, saveData);
                break;
        
            case 2:
                inventory(() => menuJogo(player), player, rl, pause);
                break;

            case 3:
                useItem(() => menuJogo(player), player, rl, pause, saveData);
                break;

            case 4:
                equipItem(() => menuJogo(player), player, rl, pause, saveData);
                break;

            case 5:
                playerStatus(() => menuJogo(player), player, rl, pause);
                break;

            case 6:
                store(() => menuJogo(player), player, rl, pause, saveData);
                break;

            case 0:
                menuInicial(player);
                break;
            
            default:
                console.log("\nOpção inválida, tente novamente!\n");
                menuJogo(player);
        }
    });

}

menuInicial();