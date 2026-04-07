const enemyEncounter = require("./enemyEncounter");  /* Importando a função "enemyEncounter" (e as demais abaixo) para ser utilizada na função "explore.js" */
const gold = require("./gold");
const pause = require("./pause");

function explore(menuJogo, player, rl) {
    
    console.clear();
    console.log("=============================");
    console.log("🌲 FLORESTA DE BROKILON 🌲")
    console.log("=============================\n");
    
    const event = Math.floor(Math.random() * 4);

    switch (event) {

        case 0:
            enemyEncounter(menuJogo, player, rl);
            break;
    
        case 1:
            gold(menuJogo,player, rl, pause);
            break;

        case 2:
            console.log("\nVocê encontrou um item! 🗝️\n\n");
            pause(rl, menuJogo);
            break;

        case 3:
            console.log("\nNada aconteceu... 🍃\n\n");
            pause(rl, menuJogo);
            break;           
    }
}

module.exports = explore;  /* Exportando a função para ser utilizada no "index.js" */