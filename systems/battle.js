function battle(menuJogo, player, rl, enemy, turn, pause) {

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
}

module.exports = battle; /* Exportando a função para ser utilizada no "enemyEncounter.js" */