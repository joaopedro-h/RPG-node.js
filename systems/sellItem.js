function sellItem(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("====================");
    console.log("COMERCIANTE 🧝🏽");
    console.log(`\x1b[33mSeu ouro: ${player.gold} 💰\x1b[0m`);
    console.log("====================\n");
    console.log("Itens disponíveis para venda: \n");

    if (player.inventory.length === 0) {
        console.log("\x1b[91mSeu inventário está vazio! 🚫\x1b[0m");
        pause(rl, () => menuJogo(player));
        return;
    }
    
    player.inventory.forEach((item, index ) => {
        const sellPrice = Math.floor(item.price * 0.7);   
        console.log(`${index + 1}. ${item.name} (x${item.quantity})`);
        console.log(`x${sellPrice} 💰\n`);
    });

    console.log("\n0. Sair ❌");

    rl.question(`\nQual item deseja vender? `, (sellItem) => {

        const i = Number(sellItem) - 1;
        const itemPlayer = player.inventory[i];

        if (sellItem === "0") {  /* Se o usuário digitar "0" ele retorna para o menu. */
            console.log("Saindo... 🏃🏻‍♂️‍➡️");
            pause(rl, () => menuJogo(player));
            return;
        }

        if (!itemPlayer) {
            console.log("\x1b[91mItem não encontrado! ❌\x1b[0m");
            pause(rl, () => menuJogo(player));
            return;

        }else{

            const sellPrice = Math.floor(itemPlayer.price * 0.7); 
            player.gold += sellPrice;
            itemPlayer.quantity -= 1;
            
            console.clear();
            console.log(`Você vendeu ${itemPlayer.name} por ${sellPrice} moedas de ouro 💰`);
            console.log(`\x1b[33mSeu ouro: ${player.gold} 💰\x1b[0m`);

            if (itemPlayer.quantity === 0) {
                player.inventory.splice(i, 1);
            }
        }
        
        saveData(player);
        pause(rl, () => menuJogo(player));

    });
}

module.exports = sellItem;