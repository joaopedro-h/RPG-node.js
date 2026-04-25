function getPlayerDefense(player, baseAttackEnemy) {
    
    const defense = player.inventory.find(item => item.type === "defense" && item.equipped);

    const bonus = defense ? defense.value : 0;

    return Math.max (0, baseAttackEnemy - bonus);

}

module.exports = getPlayerDefense;