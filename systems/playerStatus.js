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
        
        pause(rl, menuJogo);
}

module.exports = playerStatus;