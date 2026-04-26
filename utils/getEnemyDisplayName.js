function getEnemyDisplayName(enemy) {  /* Função para adicionar emojis nos nomes dos inimigos sem precisar alterar no JSON. */
    const emojis = {
        goblin: "👺",  /* O nome precisa estar igual no JSON enemies, onde está "type". */
        ogro: "🧌  ",
        lobo: "🐺",
        javali: "🐗",
        dragao: "🐲"
    };

    const emoji = emojis[enemy.type] || "👾"; /* emojis[eneny.type] ele pega o tipo do inimigo, exemplo: emojis[goblin], no qual retorna para a variável "emoji", se não achar nada, retorna o emoji 👾.*/

    return `${emoji} ${enemy.name} ${emoji}`; /* Retorna para a função o nome do inimigo junto com os emojis. */
}

module.exports = getEnemyDisplayName