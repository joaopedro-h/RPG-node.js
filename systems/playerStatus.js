function playerStatus(menuJogo, player, rl, pause) {
        
        console.clear();
        console.log("\n===== STATUS DO PERSONAGEM =====\n");
        console.log(`👤 Nome: ${player.name}`);
        console.log(`❤️  HP: ${player.hp}`);
        console.log(`❤️  HP máximo: ${player.maxHp}`);
        console.log(`🗡️  Ataque: ${player.attack}`);
        console.log(`🛡️  Defesa: ${player.defense}`);
        console.log(`💰 Ouro: ${player.gold}`);  
        console.log(`⭐ XP: ${player.xp}`); 
        console.log(`🏆 Nível: ${player.level}`);
        

        console.log("\n===== BUILD DO PERSONAGEM =====\n");
        
        player.inventory.forEach((item) => {
            if (item.type === "weapon" || item.type === "defense" ) {

                if (item.equipped === true) {
                        item.equipped = "Equipado"
                }else{
                        item.equipped = "Desequipado"
                }

                console.log(`${item.name}  = ${item.equipped}`);
                console.log(`${item.description}\n`);
            }
        });

        pause(rl, () => menuJogo(player));
}

module.exports = playerStatus;