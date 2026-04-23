function equipItem(next, player, rl, pause, saveData) {
    
    console.clear();
    console.log("🎒 INVENTÁRIO\n");

    if (player.inventory.length === 0) {  
        console.log("Seu inventário está vazio! 🚫");
        pause(rl, next);
        return;

    }else{
        
        player.inventory.forEach((item, index) => {  /* Inventário do jogador será exibido pelo "forEach".*/
            if ((item.type === "weapon" || item.type === "defense")) {
                console.log(`${index + 1}. ${item.name} (x${item.quantity})`);
            }
        });

    }







        

    
}

module.exports = equipItem;