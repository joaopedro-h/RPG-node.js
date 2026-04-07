function escape(menuJogo, rl, pause) {
    
    console.log("Você fugiu! 🏃🏻‍♂️‍➡️");     
    pause(rl, menuJogo);
}

module.exports = escape;  /* Exportando a função para ser utilizada no "enemyEncounter.js" */