function equipItem(next, player, rl, pause, saveData) {
    
    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("Seu inventário está vazio! 🚫");
        pause(rl, next);
        return;

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            if ((item.type === "weapon" || item.type === "defense")) {
                console.log(`${index + 1}. ${item.name} (x${item.quantity})\n`);
            }
        });

    }

    rl.question(`Qual item deseja equipar? `, (equippedItem) => {

        const i = Number(equippedItem) - 1;

        const item = player.inventory[i];  /* Variável "item" se torna o item do inventário da posição índice "i". */

        if (!item) { /* Significa = se o item NÃO existir o "if" é executado. */
            console.log("Item inválido! ❌");
            pause(rl, next);
            return;
        }

        if (item.type === "weapon") {

            player.inventory.forEach(item => {
                if (item.type === "weapon") {
                    item.equipped = false;
                }
            });

            item.equipped = true;
            
            console.log(`Você equipou a ${item.name} e ganhou ${item.value} de ataque 💥`)

        }else if (item.type === "defense") {

            player.inventory.forEach(item => {
                if (item.type === "defense") {
                    item.equipped = false;
                }
            });

            item.equipped = true;
            
            console.log(`Você equipou a ${item.name} e ganhou ${item.value} de defesa 💥`)

        }

        saveData(player);
        pause(rl, next);

    });
}

module.exports = equipItem;