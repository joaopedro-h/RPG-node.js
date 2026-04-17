const playerDeath = require("./playerDeath");

function battle(menuJogo, player, rl, enemy, turn, pause, saveData) {

        const minAttackPlayer = Math.floor(player.attack / 2); /* Define o ataque mínimo, aonde é pega o ataque máximo e divide por 2. */
        const maxAttackPlayer = player.attack; /* Ataque máximo do jogador. */
        const attackPlayer = Math.floor(Math.random() * (maxAttackPlayer - minAttackPlayer + 1) + minAttackPlayer);
        /*Calcula um dano aleatório entre minAttack (metade do ataque) e maxAttack (ataque total)*/
        
        console.clear();
        console.log(`\nVocê atacou o ${enemy.name} causando ${attackPlayer} de dano! 💥`);
        enemy.hp -= attackPlayer;
        console.log(`❤️  HP do inimigo após ataque: ${enemy.hp}\n`);
                    
        if (enemy.hp <= 0) {  /* Caso o inimigo chegue a 0 de vida ele é derrotado, dropando XP ao jogador. */
            console.clear();

            console.log(`Você derrotou o ${enemy.name}! 🏆` );
            console.log(`XP obtido na luta: ${enemy.xp} ⭐`);
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

        console.log(`O ${enemy.name} te contra-atacou causando ${attackEnemy} de dano! 💥`);
        player.hp -= attackEnemy;
        console.log(`❤️  Seu HP após ataque: ${player.hp}\n`);

                    
        if (player.hp <= 0) { /* Se o jogador estiver com 0 ou menos de vida, é chamado a função de jogador morto. */
            playerDeath(() => menuJogo(player), player, rl, pause, saveData);
            return;     
        }

        saveData(player);
        turn();
}

module.exports = battle; /* Exportando a função para ser utilizada no "enemyEncounter.js" */