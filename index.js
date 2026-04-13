const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//let player;  /* player recebe as informações assim que o personagem é criado no "newGame". */

const pause = require("./systems/pause");
const newGame = require("./systems/newGame");
const loadGame = require("./systems//loadGame");
const explore = require("./systems/explore");
const inventory = require("./systems/inventory");
const playerStatus = require("./systems/playerStatus");
const useItem = require('./systems/useItem');
    
const fs = require("fs");

function saveData() {
    
    const data = JSON.stringify(player, null, 2);
    const path = `./data/${player.name}.json`; /* Usa o nome do jogador para identificar o arquivo JSON. */
    fs.writeFileSync(path, data);
}

function menuInicial() {  /* Criado o menu inicial do jogo, aonde o jogador escolhe se deseja iniciar um novo jogo ou carregar um jogo já criado. */

    console.clear();
    console.log("=================");
    console.log("⚔️  RPG TERMINAL")
    console.log("=================\n");

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
            menuInicial();
        }
    });
}

function menuJogo() { /* Criado o menu principal do jogo. */
  
  console.clear();  
  console.log("1. Explorar ⚔️");
  console.log("2. Inventário 🎒");
  console.log("3. Usar item ⚙️");
  console.log("4. Status do personagem 👤");
  console.log("5. Sair ❌\n");

    rl.question(`Escolha uma opção: `, (opcao) => {
        
        opcao = Number(opcao); /*Feito a conversão de string para número inteiro para que fosse compatível no case.*/

        switch (opcao) {
            
            case 1: 
                explore(menuJogo, player, rl, pause, saveData, loadGame);
                break;
        
            case 2:
                inventory(menuJogo, player, rl, pause);
                break;

            case 3:
                useItem(menuJogo, player, rl, pause, saveData, loadGame);
                break;

            case 4:
                playerStatus(menuJogo, player, rl, pause, loadGame);
                break;

            case 5:
                menuInicial();
                break;
            
            default:
                console.log("\nOpção inválida, tente novamente!\n");
                menuJogo();
        }
    });

}

menuInicial();