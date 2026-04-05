const pause = require("./pause");

function playerStatus(menuJogo, player, rl) {
        
        console.log("\n===== STATUS DO PERSONAGEM =====\n");
        console.log(`👤 Nome: ${player.name}`);
        console.log(`❤️  HP: ${player.hp}`);
        console.log(`❤️  HP máximo: ${player.maxHp}`);
        console.log(`🗡️  Ataque: ${player.attack}`);
        console.log(`🛡️  Defesa: ${player.defense}`);
        console.log(`💰 Ouro: ${player.gold}`);  
        console.log(`⭐ XP: ${player.xp}`); 
        console.log(`🎒 Inventário: ${player.inventory}\n`);
        
        pause(rl, menuJogo);
}

module.exports = playerStatus;