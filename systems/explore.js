const enemyEncounter = require("./enemyEncounter");  /* Importando a função "enemyEncounter" (e as demais abaixo) para ser utilizada na função "explore.js" */
const gold = require("./gold");
const itemFound = require("./itemFound");

function explore(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("=============================");
    console.log("🌲 FLORESTA DE BROKILON 🌲")
    console.log("=============================\n");
    
    let event;
    const rand = Math.random(); /* Math.random gera um número entre 0 e 0.99. */

    if (rand < 0.50) {
        event = 0; // 50% inimigo
    } else if (rand < 0.70) {
        event = 1; // 20% gold
    } else if (rand < 0.95) {
        event = 2; // 25% item
    } else {
        event = 3; // 5% nada
    }

    switch (event) {
        
        case 0:
            enemyEncounter(menuJogo, player, rl, saveData);
            break;
    
        case 1:
            gold(menuJogo, player, rl, pause, saveData);
            break;

        case 2:
            itemFound(menuJogo, player, rl, pause, saveData);
            break;

        case 3:
            console.log("\nNada aconteceu... 🍃\n\n");
            pause(rl, () => menuJogo(player));
            break;           
    }
}

module.exports = explore;  /* Exportando a função para ser utilizada no "index.js" */