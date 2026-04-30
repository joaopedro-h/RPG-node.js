const equipItem = require("./equipItem");
const desequipItem = require("./desequipItem");

function buildConfig(menuJogo, player, rl, pause, saveData) {
    
    console.clear();
    console.log("\n========== BUILD ATUAL ==========\n"); /* Mostra a build atual para o jogador, assim sabendo quais itens estão equipados ou não. */
        
    player.inventory.forEach((item) => {
        if (item.type === "weapon" || item.type === "defense" ) {

            if (item.equipped === true) {
                console.log(`${item.name} = Equipado ✅`);
                console.log(`${item.description}\n`);
                        
            }else{
                console.log(`${item.name}  = Desequipado ❌`);
                console.log(`${item.description}\n`);
            }
        }
    });
    
    console.log("=================================\n");
    
    console.log("1. Equipar item ✅");  /* Mostra ao jogador as opções para equipar/desequipar itens. */
    console.log("2. Desequipar item ❌\n");
    
    rl.question(`Escolha uma opção: `, (opcao) => {

        opcao = Number(opcao);

        if (opcao === 1) {
            equipItem(menuJogo, player, rl, pause, saveData);
            return;

        }else if (opcao === 2) {
            desequipItem(menuJogo, player, rl, pause, saveData);
            return;

        }else {
            console.log("Opção inválida!");
            buildConfig(menuJogo, player, rl, pause, saveData);
            return;
        }

    });
}

module.exports = buildConfig;