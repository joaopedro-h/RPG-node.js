function pause(rl, next) {  /* Função criada para utilizar um pause após finalizar cada função do game, trocando next por "menuJogo" dentro das funções. */
    rl.question("\n\x1b[36m⏎ Pressione ENTER para continuar... \x1b[0m ", () => next());
}

module.exports = pause;  /* Exportando a função para ser utilizada nas outras funções. */