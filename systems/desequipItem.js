function desequipItem(menuJogo, player, rl, pause, saveData) {

    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    let filteredItens = []; /* Array criado para armazenar só os itens específicos.*/
    let counter = 1; /* Variável criada para organizar a posição de cada item na tela para o jogador. */

    const itemEquipped = player.inventory.find(item => item.equipped === true); /* Busca no inventário do jogador se existe algum item equipado. */

    if (!itemEquipped) {  /* if para caso o jogador estiver sem nada equipado aparecer a mensagem informando sobre não ter nenhum item equipado. */
        console.log("\x1b[91mVocê não tem nenhum item equipado! 🚫\x1b[0m");
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

    rl.question(`Qual item deseja desequipar? `, (desequipItem) => {

        if (desequipItem === "0") { /* Se o usuário digitar "0" ele retorna para o menu. */
            console.log("Saindo... 🏃🏻‍♂️‍➡️");
            pause(rl, () => menuJogo(player));
            return;
        }

        const i = Number(desequipItem) - 1;
        const item = filteredItens[i];

        if (!item) { /* Significa = se o item NÃO existir o "if" é executado. */
            console.log("\x1b[91mItem não encontrado! ❌\x1b[0m");
            pause(rl, () => menuJogo(player));
            return;
        }

        if (item.type === "weapon") {
            
            item.equipped = false;
            console.log(`Você desequipou ${item.name}`);
            
        }else if (item.type === "defense") {

            item.equipped = false;
            console.log(`Você desequipou ${item.name}`);
        }

        saveData(player);
        pause(rl, () => menuJogo(player));

    });
}

module.exports = desequipItem;