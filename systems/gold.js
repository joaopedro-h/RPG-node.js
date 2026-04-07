function gold(menuJogo, player, rl, pause) {

    let gold = [] /* Definido o array do gold. */

    for (let i = 1; i <= 100; i++) {  /* Adiciona dentro do "gold" os números de 1 até 100. */
        gold.push(i);
    }

    goldFound = gold[Math.floor(Math.random() * gold.length)];  /* Gera um número aleatório entre 1 e 100, que vai ser a quantidade de ouro encontrada. */
    player.gold += goldFound;  /* Adiciona a quantidade de ouro encontrada para o usuário. */

    console.log(`\nVocê achou ${goldFound} moedas de ouro! 💰\n\n`);

    pause(rl, menuJogo);
}

module.exports = gold;  /* Exportando a função para ser utilizada no "explore.js" */

