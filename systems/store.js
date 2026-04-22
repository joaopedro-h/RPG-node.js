const buyItem = require("./buyItem");
const sellItem = require("./sellItem");

function store(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("1. Comprar ✅");
    console.log("2. Vender ❌\n");
    
    rl.question(`Escolha uma opção: `, (opcao) => {

        opcao = Number(opcao);

        if(opcao === 1){
            buyItem(menuJogo, player, rl, pause, saveData);
            return;

        }else if (opcao === 2){
            sellItem(menuJogo, player, rl, pause, saveData);
            return;

        }else {
            console.log("Opção inválida!");
            store(menuJogo, player, rl, pause, saveData);
            return;
        }

    });
}

module.exports = store;