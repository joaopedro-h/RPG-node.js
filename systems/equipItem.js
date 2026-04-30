function equipItem(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("\x1b[91mSeu inventário está vazio! 🚫\x1b[0m");
        pause(rl, () => menuJogo(player));
        return;

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            if ((item.type === "weapon" || item.type === "defense")) {
                console.log(`${index + 1}. ${item.name}\n`);
            }
        });

    }

    rl.question(`Qual item deseja equipar? `, (equippedItem) => {

        const i = Number(equippedItem) - 1;

        const item = player.inventory[i];  /* Variável "item" se torna o item do inventário da posição índice "i". */

        if (!item) { /* Significa = se o item NÃO existir o "if" é executado. */
            console.log("\x1b[91mItem não encontrado! ❌\x1b[0m");
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
        pause(rl, () => menuJogo(player));

    });
}

module.exports = equipItem;