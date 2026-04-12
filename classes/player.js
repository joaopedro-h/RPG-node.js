class PlayerGame {
    constructor(name) {
        this.name = name
        this.hp = 100
        this.maxHp = 100
        this.attack = 15
        this.defense = 10
        this.gold = 0
        this.xp = 0
        this.level = 1
        this.inventory = []
    }
}

module.exports = PlayerGame;