function pause(rl, next) {  /* Função criada para utilizar um pause após finalizar cada função do game, trocando next por "menuJogo" dentro das funções. */
    rl.question("\n⏎ Pressione ENTER para continuar...", () => next());
}

module.exports = pause;