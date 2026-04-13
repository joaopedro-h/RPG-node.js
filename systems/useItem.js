function useItem(next, player, rl, pause, saveData) { 
    /* Foi passado um parâmetro de "next" pois a função será usada em dois momentos diferentes, será usada na batalha e a função passada será "turn()" e também será usada no menu e a função passada será "menuJogo()". */

    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("Seu inventário está vazio! 🚫");
        pause(rl, next);
        return;

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            console.log(`${index + 1}. ${item.name} (x${item.quantity})`);
        });

        /* Aonde percorre cada item do array, é necessário sempre passar o "item" (ou qualquer outro nome, foi utilizado item para fazer sentido ao código) como primeiro parâmetro e o index em segundo caso seja necessário os dois.*/
    }

    rl.question(`\nQual item deseja usar? `, (usedItem) => {


        const i = Number(usedItem) - 1; /* Transforma em índice. */

        const item = player.inventory[i];  /* Variável "item" se torna o item do inventário da posição índice "i". */


        if (!item) { /* Significa = se o item NÃO existir o "if" é executado. */
            console.log("Item inválido! ❌");
            pause(rl, next);
            return;
        }
        
        if (item.type === "heal") {

            player.hp += item.value;

            if (player.hp > player.maxHp) {
                player.hp = player.maxHp
            }

            console.log(`Você usou ${item.name} e recuperou ${item.value} de HP ❤️`)

        } else if (item.type === "accessory"){

            player.maxHp += item.value;

            console.log(`Você usou ${item.name} e aumentou ${item.value} de HP máximo ❤️`)

        }

        item.quantity -= 1; /* Reduz a quantidade usada pelo usuário. */

        if (item.quantity <= 0) { /* Se a quantidade chegar a 0 o item é removido do inventário. */
            player.inventory.splice(i, 1);
        }

        saveData();
        pause(rl, next);

    });

}

module.exports = useItem;