function sellItem(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("====================");
    console.log("COMERCIANTE 🧝🏽");
    console.log(`Seu ouro: ${player.gold} 💰`);
    console.log("====================\n");
    console.log("Itens disponíveis para venda: \n");

    if (player.inventory.length === 0) {
        console.log("Nenhum item no inventário.");
        pause(rl, () => menuJogo(player));
        return;
    }
    
    player.inventory.forEach((item, index ) => {
        const sellPrice = Math.floor(item.price * 0.7);   
        console.log(`${index + 1}. ${item.name} (x${item.quantity}): ${sellPrice} 💰`);
    });

    rl.question(`\nQual item deseja vender? `, (sellItem) => {

        const i = Number(sellItem) - 1;
        const itemPlayer = player.inventory[i];

        if (!itemPlayer) {
            console.log("Item não encontrado! ❌");
            pause(rl, () => menuJogo(player));
            return;

        }else{

            const sellPrice = Math.floor(itemPlayer.price * 0.7); 
            player.gold += sellPrice;
            itemPlayer.quantity -= 1;

            console.log(`Você vendeu ${itemPlayer.name} por ${sellPrice} moedas de ouro 💰`);
            console.log(`Seu ouro: ${player.gold}`);

            if (itemPlayer.quantity === 0) {
                player.inventory.splice(i, 1);
            }
        }
        
        saveData(player);
        pause(rl, () => menuJogo(player));

    });
}

module.exports = sellItem;