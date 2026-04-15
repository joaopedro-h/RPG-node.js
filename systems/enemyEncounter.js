const Enemy = require("../classes/enemy");
const enemiesData = require("../data/enemies.json")  /* Feito a importação dos inimigos criados para a exploração, a partir do "enemies.json" */
const battle = require("./battle");  /* Importando a função "battle.js" (e as demais abaixo) para ser utilizada na função "enemyEncounter.js" */
const useItem = require("./useItem");
const escape = require("./escape");  
const pause = require("./pause");  


function enemyEncounter(menuJogo, player, rl, saveData) {

    let enemy; /* Variável que irá receber o inimigo criado. */
    const rand = Math.random(); /* Math.random gera um número entre 0 e 0.99. */
    let cumulativeChance = 0;  /* Irá acumular as chances dos inimigos. */

    for (const enemyData of enemiesData) { /* "enemyData" é uma variável temporária (representa cada inimigo do JSON, ex:[0] = Goblin, [1] = Ogro, etc) */  /* "enemiesData" representa a lista de inimigos JSON. */
        cumulativeChance += enemyData.chance; /* A cada looping é adicionado a chance dos inimigos a variável "cumulativeChance". */

        if (rand < cumulativeChance) {
            enemy = new Enemy (
                enemyData.name,
                enemyData.hp,
                enemyData.attack,
                enemyData.xp
            );
            break; /* break para o loop imediatamente, evitando trocar o inimigo. */
        }
    }

    console.log(`⚔️  Você encontrou um... ❗❗\n`);
            
        console.log(`${enemy.name}\n`);
        
        turn();
        function turn() {
            
            console.log("1. Atacar ⚔️");
            console.log("2. Usar item ⚙️");
            console.log("3. Fugir 🏃🏻💨");
            
            rl.question(`\nEscolha sua acão: `, (acao) => {
        
                acao = Number(acao);
                
                switch (acao) {
                    case 1:
                        battle(menuJogo, player, rl, enemy, turn, pause, saveData);
                        break;
                        
                    case 2:
                        useItem(() => turn(player), player, rl, pause, saveData);
                        break;

                    case 3:
                        escape(menuJogo, rl, pause, player, saveData);
                        break;

                    default:
                        console.clear();
                        console.log("Opcão inválida...");
                        turn();
                        break;
                }
            });
        }       
}

module.exports = enemyEncounter;  /* Exportando a função para ser utilizada no explore.js */