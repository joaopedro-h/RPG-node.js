function battle(menuJogo, player, rl, enemy, turn, pause) {

        const minAttackPlayer = Math.floor(player.attack / 2); /* Define o ataque mínimo, aonde é pega o ataque máximo e divide por 2. */
        const maxAttackPlayer = player.attack; /* Ataque máximo do jogador. */
        const attackPlayer = Math.floor(Math.random() * (maxAttackPlayer - minAttackPlayer + 1) + minAttackPlayer);
        /*Calcula um dano aleatório entre minAttack (metade do ataque) e maxAttack (ataque total)*/
        
        console.clear();
        console.log(`\nVocê atacou o ${enemy.name} causando ${attackPlayer} de dano! 💥\n`);
        
        enemy.hp -= attackPlayer;
                    
        if (enemy.hp <= 0) {  /* Caso o inimigo chegue a 0 de vida ele é derrotado, dropando XP ao jogador. */
            console.clear();
            console.log(`Você derrotou o ${enemy.name}! 🏆` );
            console.log(`XP obtido na luta: ${enemy.xp} ⭐ `);
            
            player.xp += enemy.xp;
            pause(rl, menuJogo);
            return;     
        }

        const minAttackEnemy = Math.floor(enemy.attack / 2); 
        const maxAttackEnemy = enemy.attack; 
        const attackEnemy = Math.floor(Math.random() * (maxAttackEnemy - minAttackEnemy + 1) + minAttackEnemy);

        console.log(`O ${enemy.name} te atacou causando ${attackEnemy} de dano! 💥\n`);

        player.hp -= attackEnemy;
                    
        if (player.hp <= 0) {
            console.clear();  
            console.log(`Você foi morto pelo ${enemy.name}! 💀` );
            pause(rl, menuJogo); 
            return;     
        }

        turn();
}

module.exports = battle; /* Exportando a função para ser utilizada no "enemyEncounter.js" */