function playerDeath(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    const rand = Math.random();

    if (rand < 0.2) {
        console.log("\x1b[38;2;150;0;255mVocê escapou por pouco! 😱\x1b[0m");
        player.hp = 1;
        pause(rl, () => menuJogo(player));
        return;
    }   
    
    console.log("\x1b[31mVOCÊ MORREU \x1b[0 💀\n");

    if (player.inventory.length > 0) {
        
        const i = Math.floor(Math.random() * player.inventory.length);
        const itemDrop = player.inventory.splice(i, 1)[0];
        
        console.log(`\x1b[91mVocê perdeu ${itemDrop.name}\x1b[0m\n`);

    }else{

        console.log("\x1b[91mVocê não tinha itens.. ❌\x1b[0m");
    }

    player.hp = 20;
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