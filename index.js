const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let player;  /* player recebe as informações assim que o personagem é criado no "newGame". */

const newGame = require("./systems/newGame");
const loadGame = require("./systems//loadGame");
const explore = require("./systems/explore");
const inventory = require("./systems/inventory");
const playerStatus = require("./systems/playerStatus");
const enemyEncounter = require('./systems/enemyEncounter');


function menuInicial() {  /* Criado o menu inicial do jogo, aonde o jogador escolhe se deseja iniciar um novo jogo ou carregar um jogo já criado. */

    console.clear();
    console.log("=================");
    console.log("⚔️  RPG TERMINAL")
    console.log("=================");

    console.log("1 - Novo jogo.");
    console.log("2 - Carregar jogo.");
    console.log("3 - Sair.");

    rl.question(`Escolha uma opção: `, (opcao) => {

        opcao = Number(opcao);

        if (opcao === 1) {
            newGame(rl, menuJogo, (newPlayer) => {
                player = newPlayer;
            });

        }else if (opcao === 2) {
            loadGame(menuJogo);

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
  console.log("3. Status do personagem 👤");
  console.log("4. Sair ❌\n");

    rl.question(`Escolha uma opção: `, (opcao) => {
        
        opcao = Number(opcao); /*Feito a conversão de string para número inteiro para que fosse compatível no case.*/

        switch (opcao) {
            
            case 1: 
                explore(menuJogo, player, rl, enemyEncounter);
                break;
        
            case 2:
                inventory(menuJogo, player, rl);
                break;

            case 3:
                playerStatus(menuJogo, player, rl);
                break;

            case 4:
                menuInicial();
                break;
            
            default:
                console.log("\nOpção inválida, tente novamente!\n");
                menuJogo();
        }
    });

}

menuInicial();







