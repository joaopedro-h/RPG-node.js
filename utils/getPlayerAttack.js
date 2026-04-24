function getPlayerAttack(player, baseAttack) {
            
    const weapon = player.inventory.find(item => item.type === "weapon" && item.equipped); /* Se o item existir, é retornado para "weapon", se não, retorna null/undefined. */

    const bonus = weapon ? weapon.value : 0; /* "weapon" é a condição, se for "true" recebe o valor de "weapon.value", se for false = 0. */

    return baseAttack + bonus; /* Vai retornar o valor base, que no qual é o "playerAttack" da função "battle" + o bônus (se houver). */

    /* Esse valor do return precisa ser passado para uma variável, no caso em questão será a "finalAttack". */
}   

module.exports = getPlayerAttack;