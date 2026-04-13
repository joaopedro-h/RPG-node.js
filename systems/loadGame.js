const fs = require("fs");
const PlayerGame = require("../classes/player");

function loadGame(menuJogo, menuInicial, rl, pause) {
    
    console.clear();
    rl.question(`Digite o nome do seu save: `, (savedName) => {

        const path = `./data/${savedName}.json`;

        if (!fs.existsSync(path)) {
            console.log("Nenhum save encontrado!");
            pause(rl, menuInicial);
            return;
        }

        const data = fs.readFileSync(path, "utf-8");
        const parsed = JSON.parse(data); /* Converte a string para objeto. */

        console.log("Carregando save... 💾");  
        
        const player = PlayerGame.fromJSON(parsed);
        
        pause(rl, () => menuJogo(player)); /* Continua o jogo com o player carregado. */

    });
}

module.exports = loadGame;