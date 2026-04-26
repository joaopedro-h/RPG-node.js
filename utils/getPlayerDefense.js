function getPlayerDefense(player, baseAttackEnemy) {
    
    const defense = player.inventory.find(item => item.type === "defense" && item.equipped); /* Se o item existir, é retornado para "defense", se não, retorna null/undefined. */

    const bonus = defense ? defense.value : 0;  /* "defense" é a condição, se for "true" recebe o valor de "defense.value", se for false = 0. */

    return Math.max (0, baseAttackEnemy - bonus);  /* Vai retornar o valor base, que no qual é o "attackEnemy" da função "battle" + o bônus (se houver). */

    /* Esse valor do return precisa ser passado para uma variável, no caso em questão será a "finalAttackEnemy". */
}

module.exports = getPlayerDefense;