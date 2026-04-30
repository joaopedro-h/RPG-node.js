function desequipItem(menuJogo, player, rl, pause, saveData) {

    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    const itemEquipped = player.inventory.find(item => item.equipped === true); /* Busca no inventário do jogador se existe algum item equipado. */

    if (!itemEquipped) {  /* if para caso o jogador estiver sem nada equipado aparecer a mensagem informando sobre não ter nenhum item equipado. */
        console.log("\x1b[91mVocê não tem nenhum item equipado! 🚫\x1b[0m");
        pause(rl, () => menuJogo(player));
        return;

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            if ((item.type === "weapon" || item.type === "defense")) {
                console.log(`${index + 1}. ${item.name}\n`);
            }
        });
    }

    rl.question(`Qual item deseja desequipar? `, (desequipItem) => {

        const i = Number(desequipItem) - 1;

        const item = player.inventory[i];

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