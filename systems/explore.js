const enemies = require("../data/enemies.json");  /* Feito a importação dos inimigos criados para a exploração. */
const pause = require("./pause");

function explore(menuJogo, player, rl) {
    
    console.clear();
    console.log("=============================");
    console.log("🌲 FLORESTA DE BROKILON 🌲")
    console.log("=============================\n");
    
    const event = Math.floor(Math.random() * 4);

    switch (event) {

        case 0:
            enemyEncounter(menuJogo, player, rl);
            break;
    
        case 1:
            gold(menuJogo,player, rl);
            break;

        case 2:
            console.log("\nVocê encontrou um item! 🗝️\n\n");
            pause(rl, menuJogo);
            break;


        case 3:
            console.log("\nNada aconteceu... 🍃\n\n");
            pause(rl, menuJogo);
            break;           
    }
}


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
                
                if (acao === 1) {
                    console.log(`Você atacou o ${enemy.name}! 💥`);
        
                    enemy.hp -= player.attack;
                    
                    if (enemy.hp <= 0) {  /* Caso o inimigo chegue a 0 de vida ele é derrotado, dropando XP ao jogador. */
                        console.log(`Você derrotou o ${enemy.name}! 🏆` );
                        player.xp += enemy.xp;
                        pause(rl, menuJogo);
                        return;     
                    }

                    console.log(`O ${enemy.name} te atacou! 💥`);

                    player.hp -= enemy.attack;
                    
                    if (player.hp <= 0) {  
                        console.log(`Você foi morto pelo ${enemy.name}! 💀` );
                        pause(rl, menuJogo);      
                    }

                    turn();
                    
                }else{
                    console.log("Você fugiu! 🏃🏻‍♂️‍➡️");
        
                    pause(rl, menuJogo);
                }
            });
        }
}


function gold(menuJogo, player, rl) {

    let gold = [] /* Definido o array do gold. */

    for (let i = 1; i <= 100; i++) {  /* Adiciona dentro do "gold" os números de 1 até 100. */
        gold.push(i);
    }

    goldFound = gold[Math.floor(Math.random() * gold.length)];  /* Gera um número aleatório entre 1 e 100, que vai ser a quantidade de ouro encontrada. */
    player.gold += goldFound;  /* Adiciona a quantidade de ouro encontrada para o usuário. */

    console.log(`\nVocê achou ${goldFound} moedas de ouro! 💰\n\n`);

    pause(rl, menuJogo);
}

module.exports = explore;