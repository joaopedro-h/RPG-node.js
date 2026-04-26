const playerDeath = require("./playerDeath");
const getPlayerAttack = require("../utils/getPlayerAttack");
const getPlayerDefense = require("../utils/getPlayerDefense");
const getEnemyDisplayName = require ("../utils/getEnemyDisplayName");

function battle(menuJogo, player, rl, enemy, turn, pause, saveData) {

        const minAttackPlayer = Math.floor(player.attack / 2); /* Define o ataque mínimo, aonde é pega o ataque máximo e divide por 2. */
        const maxAttackPlayer = player.attack; /* Ataque máximo do jogador. */
        const attackPlayer = Math.floor(Math.random() * (maxAttackPlayer - minAttackPlayer + 1) + minAttackPlayer);
        /*Calcula um dano aleatório entre minAttack (metade do ataque) e maxAttack (ataque total)*/
        
        const finalAttackPlayer = getPlayerAttack(player, attackPlayer);

        console.clear();
        console.log(`${getEnemyDisplayName(enemy)}\n`);

        enemy.hp = Math.max(0, enemy.hp - finalAttackPlayer);
        console.log(`\x1b[33m⚔️  Você atacou o ${enemy.name}\x1b[0m`);
        console.log(`\x1b[31m💥 Dano causado: ${finalAttackPlayer}\x1b[0m`);
        console.log(`❤️ \x1b[32m HP do ${enemy.name}: ${enemy.hp}\x1b[0m\n`);
                    
        if (enemy.hp <= 0) {  /* Caso o inimigo chegue a 0 de vida ele é derrotado, dropando XP ao jogador. */

            console.log(`\x1b[93m Você derrotou o ${enemy.name}! \x1b[0m 🏆` );
            console.log(`\x1b[93m XP obtido na luta: ${enemy.xp} \x1b[0m ⭐`);
            player.xp += enemy.xp;

            
            while (player.xp >= player.level * 100) { /* Enquanto o XP do jogador for maior que o XP necessário o nível continuará subindo. */
                const xpNextLevel = player.level * 100; /* Cria modelo de nível, a cada novo nível será necessário +100 de XP para upar. */
                player.xp -= xpNextLevel; /* Desconta o XP do jogador. */
                player.level++ /* Aumenta o nível do jogador. */

                console.log(`Você subiu para o nível ${player.level}! 🎉`);
                player.attack += 3;
            }

            saveData(player);
            pause(rl, () => menuJogo(player));
            return;     
        }

        const minAttackEnemy = Math.floor(enemy.attack / 2); 
        const maxAttackEnemy = enemy.attack; 
        const attackEnemy = Math.floor(Math.random() * (maxAttackEnemy - minAttackEnemy + 1) + minAttackEnemy);

        const finalAttackEnemy = getPlayerDefense(player, attackEnemy);

        player.hp -= finalAttackEnemy;
        console.log(`\n\x1b[33m⚔️  ${enemy.name} te contra-atacou!\x1b[0m`);
        console.log(`\x1b[31m💥 Dano recebido: ${finalAttackEnemy}\x1b[0m`);
        console.log(`❤️ \x1b[32m Seu HP: ${player.hp}\x1b[0m\n`);

                    
        if (player.hp <= 0) { /* Se o jogador estiver com 0 ou menos de vida, é chamado a função de jogador morto. */
            playerDeath(() => menuJogo(player), player, rl, pause, saveData);
            return;     
        }

        saveData(player);
        turn();
}

module.exports = battle; /* Exportando a função para ser utilizada no "enemyEncounter.js" */