const itensData = require("../data/itens.json");
const Item = require("../classes/item");

function buyItem(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("====================");
    console.log("LOJA 🏪");
    console.log(`Seu ouro: ${player.gold} 💰`);
    console.log("====================\n");
    console.log("Itens disponíveis: \n");
        
    itensData.forEach((item, index)=> {
        console.log(`${index + 1}. ${item.name}: ${item.price} 💰`);
    });
        
    rl.question(`\nQual item deseja comprar? `, (buyItem) =>{
    
        const i = Number(buyItem) - 1; /* Pega o número que o usuário digitou e transforma no índice correto do array. */
        const itemStore = itensData[i];
    
        if (!itemStore) { /* Se o jogador escolher um item que não existe a venda é retornado para o menu. */
            console.log("Item inválido! ❌");
            pause(rl, () => menuJogo(player));
            return
        }
    
        if (player.gold >= itemStore.price) { /* Verifica se o jogador tem ouro o suficiente para comprar o item. */
                
            const newItem = new Item(  /*Cria uma instância do item para que não seja adicionado diretamente o item do JSON.*/
                itemStore.name,
                itemStore.type,
                itemStore.value,
                itemStore.quantity,
                itemStore.description
            )
    
            const existingItem = player.inventory.find(itemPlayer => itemPlayer.name === itemStore.name); /* Verifica se o jogador já tem alguma quantidade do item comprado no inventário.*/
        
            if (existingItem) {  /* Se o item já existir, apenas adiciona uma quantidade. */
                existingItem.quantity += 1;
        
            }else{  /*Caso não exista, é adicionado o item ao inventário.*/
                player.inventory.push(newItem);
            }
    
            player.gold -= itemStore.price; /* Desconta a quantidade de ouro do jogador. */
            console.log(`Você comprou ${itemStore.name}! ✅`);
    
    
        }else{
            console.log("Ouro insuficiente! 💰");
        }
    
        saveData(player);
        pause(rl, () => menuJogo(player));
    });
}

module.exports = buyItem;