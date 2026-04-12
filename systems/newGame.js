const PlayerGame = require("../classes/player");  /* Importa os dados da classe PlayerGame, aonde contém as informações do jogador, sendo definido somente o nome na função. */
const pause = require("./pause");  /* Importando a função "pause" para que seja usada na função "newGame" */

function newGame(rl, menuJogo, saveData, savePlayer) {
    
    rl.question(`\nDigite o nome do seu personagem: `, (nomePersonagem) =>{

        const player = new PlayerGame(nomePersonagem);

        console.clear();
        console.log("Personagem criado!\n");
        console.log(`👤 Nome: ${player.name}`);
        console.log(`❤️  HP: ${player.hp}`);
        console.log(`❤️  HP máximo: ${player.maxHp}`);
        console.log(`🗡️  Ataque: ${player.attack}`);
        console.log(`🛡️  Defesa: ${player.defense}`);
        console.log(`💰 Ouro: ${player.gold}`);
        console.log(`⭐ XP: ${player.xp}`);         
        console.log(`🏆 Nível: ${player.level}`);

        savePlayer(player); /* Serve para enviar o jogador criado dentro do newGame para o index.js. */
        /* Aonde dentro do index.js foi passado como parâmetro "newPlayer" */
        saveData();

        pause(rl, menuJogo);

    });
}

module.exports = newGame;  /* Exporta a funcão para "index.js" */