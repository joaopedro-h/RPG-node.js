const itens = require("../data/itens.json");  /* Feito a importação dos itens criados para a exploração, a partir do "itens.json" */

function itemFound(menuJogo, player, rl, pause) {
    
    const randomItem = itens[Math.floor(Math.random() * itens.length)];
    const itemFound = {... randomItem};
    
    console.log(`\nVocê encontrou um item! 🗝️`);
    console.log(`${itemFound.name}.`);

    player.inventory.push(itemFound.name);
    
    
    pause(rl, menuJogo);

}

module.exports = itemFound;