function escape(menuJogo, rl, pause, player, saveData) {
    
    let goldLost = Math.floor(Math.random() * 10) + 1 ;  /* Gera um número aleatório entre 1 e 10, que vai ser a quantidade de ouro perdida na fuga. */

    console.clear();
    console.log("Você fugiu! 🏃🏻‍♂️‍➡️");
    player.gold -= goldLost;

    if (player.gold <= 0) {
        player.gold = 0;
        console.log("\x1b[33mVocê perdeu todas as moedas restantes de ouro nessa fuga! 💰\x1b[0");
        
    }else{
        console.log(`\x1b[33mOps.. deixou cair ${goldLost} moedas de ouro na fuga. 💰\x1b[0`);
    }

    saveData(player);
    pause(rl, () => menuJogo(player));
}

module.exports = escape;  /* Exportando a função para ser utilizada no "enemyEncounter.js" */