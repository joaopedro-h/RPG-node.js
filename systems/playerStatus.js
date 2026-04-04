

function playerStatus(menuJogo, player) {
        
        console.log("\n===== STATUS DO PERSONAGEM =====\n");
        console.log(`👤 Nome: ${player.name}`);
        console.log(`❤️  HP: ${player.hp}`);
        console.log(`❤️  HP máximo: ${player.maxHp}`);
        console.log(`🗡️  Ataque: ${player.attack}`);
        console.log(`🛡️  Defesa: ${player.defense}`);
        console.log(`💰 Ouro: ${player.gold}`);  
        console.log(`🎒 Inventário: ${player.inventory}\n`);
        menuJogo();
}

module.exports = playerStatus;