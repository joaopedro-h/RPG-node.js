function useItem(next, player, rl, pause, saveData) { 
    /* Foi passado um parâmetro de "next" pois a função será usada em dois momentos diferentes, será usada na batalha e a função passada será "turn()" e também será usada no menu e a função passada será "menuJogo()". */

    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("\x1b[91mSeu inventário está vazio! 🚫\x1b[0m");
        pause(rl, next);
        return;

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            if ((item.type === "heal" || item.type === "accessory" || item.type === "experience")) {
                console.log(`${index + 1}. ${item.name} (x${item.quantity})`);
            }
        });

        /* Aonde percorre cada item do array, é necessário sempre passar o "item" (ou qualquer outro nome, foi utilizado item para fazer sentido ao código) como primeiro parâmetro e o index em segundo caso seja necessário os dois.*/
    }

    rl.question(`\nQual item deseja usar? `, (usedItem) => {


        const i = Number(usedItem) - 1; /* Transforma em índice. */

        const item = player.inventory[i];  /* Variável "item" se torna o item do inventário da posição índice "i". */


        if (!item) { /* Significa = se o item NÃO existir o "if" é executado. */
            console.log("\x1b[91mItem não encontrado! ❌\x1b[0m");
            pause(rl, next);
            return;
        }
        
        if (item.type === "heal" && item.value === 20) {

            player.hp += item.value;

            if (player.hp > player.maxHp) {
                player.hp = player.maxHp
            }

            console.log(`\x1b[32mVocê usou ${item.name} e recuperou ${item.value} de HP \x1b[0m ❤️`)

        } else if (item.type === "heal" && item.value === 40) {

            player.hp += item.value;

            if (player.hp > player.maxHp) {
                player.hp = player.maxHp
            }

            console.log(`\x1b[32mVocê usou ${item.name} e recuperou ${item.value} de HP \x1b[0m ❤️`)

        } else if (item.type === "accessory"){

            player.maxHp += item.value;

            console.log(`\x1b[32mVocê usou ${item.name} e aumentou ${item.value} de HP máximo \x1b[0m ❤️`)

        } else if (item.type === "experience"){

            player.xp += item.value;

            console.log(`\x1b[35mVocê usou ${item.name} e ganhou ${item.value} de XP \x1b[0m⭐`)

        }
        
        item.quantity -= 1; /* Reduz a quantidade usada pelo usuário. */

        if (item.quantity <= 0) { /* Se a quantidade chegar a 0 o item é removido do inventário. */
            player.inventory.splice(i, 1);
        }

        saveData(player);
        pause(rl, next);

    });

}

module.exports = useItem;