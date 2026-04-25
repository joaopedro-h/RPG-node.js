function playerDeath(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    const rand = Math.random();

    if (rand < 0.2) {
        console.log("Você escapou por pouco! 😱");
        player.hp = 1;
        pause(rl, () => menuJogo(player));
        return;
    }   
    
    console.log("\x1b[31m VOCÊ MORREU \x1b[0 💀\n");

    if (player.inventory.length > 0) {
        
        const i = Math.floor(Math.random() * player.inventory.length);
        const itemDrop = player.inventory.splice(i, 1)[0];
        
        console.log(`Você perdeu ${itemDrop.name}\n`);

    }else{

        console.log("Você não tinha itens.. ❌");
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