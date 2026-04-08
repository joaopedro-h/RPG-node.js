function escape(menuJogo, rl, pause, player) {
    
    let goldLost = Math.floor(Math.random() * 10) + 1 ;  /* Gera um número aleatório entre 1 e 10, que vai ser a quantidade de ouro perdida na fuga. */

    console.clear();
    console.log("Você fugiu! 🏃🏻‍♂️‍➡️");
    player.gold -= goldLost;

    if (player.gold <= 0) {
        player.gold = 0;
        console.log("Você perdeu todas as moedas restantes de ouro nessa fuga!");
        
    }else{
        console.log(`Ops.. deixou cair ${goldLost} moedas de ouro na fuga. 💰`);
    }

    
    
    pause(rl, menuJogo);
}

module.exports = escape;  /* Exportando a função para ser utilizada no "enemyEncounter.js" */