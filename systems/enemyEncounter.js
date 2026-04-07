const enemies = require("../data/enemies.json")  /* Feito a importação dos inimigos criados para a exploração, a partir do "enemies.json" */
const battle = require("./battle");  /* Importando a função "battle.js" (e as demais abaixo) para ser utilizada na função "enemyEncounter.js" */
const escape = require("./escape");  
const pause = require("./pause");  

function enemyEncounter(menuJogo, player, rl) {

    const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];  /* É gerado um inimigo aleátorio que exista dentro do "enemies.json". */
    const enemy = {...randomEnemy};  /* Foi feito uma cópia usando spread operator do inimigo gerado, para que fosse alterado o contéudo original dentro do "enemies.json". */
    
    console.log(`⚔️  Você encontrou um ${enemy.name}  ⚔️`);
            
        turn();
        function turn() {
            
            console.log("1. Atacar");
            console.log("2. Fugir");
            
            rl.question(`\nEscolha sua acão: `, (acao) => {
        
                acao = Number(acao);
                
                switch (acao) {
                    case 1:
                        battle(menuJogo, player, rl, enemy, turn, pause);
                        break;
                        
                    case 2:
                        escape(menuJogo, rl, pause);
                        break;

                    default:
                        console.log("Opcão inválida...");
                        turn();
                        break;
                }
            });
        }       
}

module.exports = enemyEncounter;  /* Exportando a função para ser utilizada no explore.js */