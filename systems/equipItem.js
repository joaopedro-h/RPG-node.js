function equipItem(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    let filteredItens = []; /* Array criado para armazenar só os itens específicos.*/
    let counter = 1; /* Variável criada para organizar a posição de cada item na tela para o jogador. */

    if (player.inventory.length === 0) {  /* if para caso o inventário estiver vazio aparecer a mensagem informando sobre não ter nenhum item. */
        console.log("\x1b[91mVocê não possui itens equipáveis! 🚫\x1b[0m");
        pause(rl, () => menuJogo(player));
        return;

    }else{
        
        player.inventory.forEach((item) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            if ((item.type === "weapon" || item.type === "defense")) {
                console.log(`${counter}. ${item.name}\n`);
                filteredItens.push(item); /* Armaneza somente os itens desejados. */
                counter++; /* Faz a contagem de cada posição para o jogador. */
            }
        });
    }

    console.log("\n0. Sair ❌\n");

    rl.question(`Qual item deseja equipar? `, (equippedItem) => {

        if (equippedItem === "0") { /* Se o usuário digitar "0" ele retorna para o menu. */
            console.log("Saindo... 🏃🏻‍♂️‍➡️");
            pause(rl, () => menuJogo(player));
            return;
        }

        const i = Number(equippedItem) - 1;
        const item = filteredItens[i];  /* Variável "item" se torna o item do inventário da posição índice "i". */

        if (!item) { /* Significa = se o item NÃO existir o "if" é executado. */
            console.log("\x1b[91mItem não encontrado! ❌\x1b[0m");
            pause(rl, () => menuJogo(player));
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