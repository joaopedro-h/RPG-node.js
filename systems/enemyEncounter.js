const Enemy = require("../classes/enemy");
const enemiesData = require("../data/enemies.json")  /* Feito a importação dos inimigos criados para a exploração, a partir do "enemies.json" */
const battle = require("./battle");  /* Importando a função "battle.js" (e as demais abaixo) para ser utilizada na função "enemyEncounter.js" */
const useItem = require("./useItem");
const escape = require("./escape");  
const pause = require("./pause");  


function enemyEncounter(menuJogo, player, rl) {

    const randomEnemyData = enemiesData[Math.floor(Math.random() * enemiesData.length)];  /* É gerado um inimigo aleátorio que exista dentro do "enemies.json". */
    const enemy = new Enemy(randomEnemyData.name, randomEnemyData.hp, randomEnemyData.attack, randomEnemyData.xp);  /* Gerado uma nova instância da classe "Enemy". */
    
    console.log(`⚔️  Você encontrou um ${enemy.name}  ⚔️`);
            
        turn();
        function turn() {
            
            console.log("1. Atacar");
            console.log("2. Usar item");
            console.log("3. Fugir");
            
            rl.question(`\nEscolha sua acão: `, (acao) => {
        
                acao = Number(acao);
                
                switch (acao) {
                    case 1:
                        battle(menuJogo, player, rl, enemy, turn, pause);
                        break;
                        
                    case 2:
                        useItem(menuJogo, player, rl, pause);
                        break;

                    case 3:
                        escape(menuJogo, rl, pause, player);
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