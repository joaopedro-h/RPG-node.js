const Item = require("../classes/item")  /* Importa os dados da classe Item, aonde contém as informações base do item, em seguida o item é gerado uma nova instância. */
const itensData = require("../data/itens.json");  /* Feito a importação dos itens criados para a exploração, a partir do "itens.json" */

function itemFound(menuJogo, player, rl, pause, saveData) {
    
    let itemFound;
    const rand = Math.random();
    let cumulativeChance = 0;

    for (const itemData of itensData) {
        cumulativeChance += itemData.chance;

        if (rand < cumulativeChance) {
            itemFound = new Item(
                itemData.name,
                itemData.type,
                itemData.value,
                itemData.quantity,
                itemData.description,
                itemData.price,
                itemData.equipped
            )
            break;
        }
    }

    console.log(`\x1b[38;5;214mVocê encontrou um item! 🗝️\x1b[0m\n`);
    console.log(`${itemFound.name}`);
    console.log(`${itemFound.description}`);

    const existingItem = player.inventory.find(itemPlayer => itemPlayer.name === itemFound.name); /* "find" retorna o item encontrado para variável, ou seja, existingItem virá o própio item encontrado. */

    if (existingItem) {  /* Se o item já existir é adicionado apenas uma quantidade a mais no inventário. */
        existingItem.quantity += 1;

    } else {  /* Se o item NÃO existir é adicionado o item por completo. */

        player.inventory.push(itemFound); 
    }   

    saveData(player);
    pause(rl, () => menuJogo(player));

}

module.exports = itemFound;