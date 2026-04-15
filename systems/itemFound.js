const Item = require("../classes/item")  /* Importa os dados da classe Item, aonde contém as informações base do item, em seguida o item é gerado uma nova instância. */
const itensData = require("../data/itens.json");  /* Feito a importação dos itens criados para a exploração, a partir do "itens.json" */

function itemFound(menuJogo, player, rl, pause, saveData) {
    
    const randomItem = itensData[Math.floor(Math.random() * itensData.length)];
    const itemFound = new Item (randomItem.name, randomItem.type, randomItem.value, randomItem.quantity, randomItem.description); /* Gerado uma nova instância da classe "Item". */
    
    
    console.log(`\nVocê encontrou um item! 🗝️\n`);
    console.log(`${itemFound.name}.`);
    console.log(`${itemFound.description}.`);

    const existingItem = player.inventory.find(item => item.name === itemFound.name); /* "find" retorna o item encontrado para variável, ou seja, existingItem virá o própio item encontrado. */

    if (existingItem) {  /* Se o item já existir é adicionado apenas uma quantidade a mais no inventário. */
        existingItem.quantity += 1;

    } else {  /* Se o item NÃO existir é adicionado o item por completo. */

        player.inventory.push(itemFound); 
    }   

    saveData(player);
    pause(rl, () => menuJogo(player));

}

module.exports = itemFound;