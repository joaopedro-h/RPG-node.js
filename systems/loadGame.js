const fs = require("fs");
const PlayerGame = require("../classes/player");

function loadGame(menuJogo, menuInicial, rl, pause) {
    
    console.clear();
    rl.question(`Digite o nome do seu save: `, (savedName) => {

        /* "path" significa caminho. */
        const path = `./data/${savedName}.json`; /* "path" recebe o caminho do arquivo JSON que o usuário escolher. */

        if (!fs.existsSync(path)) {
            console.log("Nenhum save encontrado!");
            pause(rl, menuInicial);
            return;
        }

        /* "data" são os dados do jogador. */
        const data = fs.readFileSync(path, "utf-8"); /* "path" = caminho do arquivo JSON, é feito a leitura do que está dentro do arquivo e é retornado como string para "data" devido ao "utf-8".*/
        const parsed = JSON.parse(data); /* Converte a string para objeto, então "parsed" vira o objeto. */

        console.log("Carregando save... 💾");  
        
        const player = PlayerGame.fromJSON(parsed); /* Pega os dados salvos e recria meu personagem de verdade no jogo. */
        
        pause(rl, () => menuJogo(player)); /* Continua o jogo com o player carregado. */

    });
}

module.exports = loadGame;