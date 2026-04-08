const pause = require("./pause");

function inventory(menuJogo, player, rl) {
        
    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("Seu inventário está vazio! 🚫");
    }

    player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
        console.log(`${index + 1}. ${item}`);
    });

    /* Aonde percorre cada item do array, é necessário sempre passar o item como primeiro parâmetro e o index em segundo caso seja necessário os dois.   */

    pause(rl, menuJogo);
}

module.exports = inventory;