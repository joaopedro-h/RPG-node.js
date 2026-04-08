function gold(menuJogo, player, rl, pause) {

    let goldFound = Math.floor(Math.random() * 100) + 1;  /* Gera um número aleatório entre 1 e 100, que vai ser a quantidade de ouro encontrada. */
    player.gold += goldFound;  /* Adiciona a quantidade de ouro encontrada para o usuário. */

    console.log(`\nVocê achou ${goldFound} moedas de ouro! 💰\n\n`);

    pause(rl, menuJogo);
}

module.exports = gold;  /* Exportando a função para ser utilizada no "explore.js" */

