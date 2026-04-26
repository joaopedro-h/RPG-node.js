function playerDeath(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    const rand = Math.random(); /* Math.random gera um número entre 0 e 0.99. */

    if (rand < 0.2) {
        console.log("\x1b[38;2;150;0;255mVocê escapou por pouco! 😱\x1b[0m");
        player.hp = 1;
        pause(rl, () => menuJogo(player));
        return;
    }   
    
    console.log("\x1b[31mVOCÊ MORREU \x1b[0 💀\n");

    if (player.inventory.length > 0) { /* Se o jogador tiver 1 item (ou mais) no inventário, será sorteado um item para ser dropado. */
        
        const i = Math.floor(Math.random() * player.inventory.length);
        const itemDrop = player.inventory.splice(i, 1)[0];
        
        console.log(`\x1b[91mVocê perdeu ${itemDrop.name}\x1b[0m\n`);

    }else{ /* Se o jogador não tiver nada, mostra a mensagem de que não tinha nenhum item no inventário. */

        console.log("\x1b[91mVocê não tinha itens.. ❌\x1b[0m");
    }
 
    player.hp = 20; /* Aqui o jogador irá retornar com 20 de HP, 0 de XP atual e vai perder 30% do ouro total. */
    player.xp = 0;
    player.gold = Math.floor(player.gold * 0.7);

    console.log("======================================\n");
    console.log("RETORNANDO PARA O ACAMPAMENTO.. 🏕️\n");
    console.log(`❤️\x1b[32m  HP: ${player.hp}\x1b[31m `);
    console.log(`💰\x1b[33m Ouro: ${player.gold}\x1b[31m `);  
    console.log(`⭐\x1b[35m XP: ${player.xp}\x1b[31m \n`);       
    console.log("======================================"); 


    saveData(player);
    pause(rl, () => menuJogo(player));

}

module.exports = playerDeath;