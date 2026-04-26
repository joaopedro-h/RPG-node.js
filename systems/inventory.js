function inventory(menuJogo, player, rl, pause) {
        
    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("\x1b[91mSeu inventário está vazio! 🚫\x1b[0m");

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            console.log(`${index + 1}. ${item.name} (x${item.quantity})`);
        });

        /* Aonde percorre cada item do array, é necessário sempre passar o "item" (ou qualquer outro nome, foi utilizado item para fazer sentido ao código) como primeiro parâmetro e o index em segundo caso seja necessário os dois.*/
    }

    pause(rl, () => menuJogo(player));
}

module.exports = inventory;