function gold(menuJogo, player, rl, pause, saveData) {

    let goldFound = Math.floor(Math.random() * 100) + 1;  /* Gera um número aleatório entre 1 e 100, que vai ser a quantidade de ouro encontrada. */
    player.gold += goldFound;  /* Adiciona a quantidade de ouro encontrada para o usuário. */

    console.log(`\n\x1b[33m Você achou ${goldFound} moedas de ouro! \x1b[0💰\n`);

    saveData(player);
    pause(rl, () => menuJogo(player));
}

module.exports = gold;  /* Exportando a função para ser utilizada no "explore.js" */

