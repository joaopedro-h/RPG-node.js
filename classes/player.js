class PlayerGame {
    constructor(name, hp, maxHp, attack, defense) {
        this.name = name
        this.hp = hp || 100
        this.maxHp = maxHp || 100
        this.attack = attack || 15
        this.defense = defense || 10
        this.gold = 0
        this.xp = 0
        this.level = 1
        this.inventory = []
    }

    static fromJSON(data) {
        const player = new PlayerGame(
            data.name,
            data.hp,
            data.maxHp,
            data.attack,
            data.defense
        );
        
        player.xp = data.xp;
        player.level = data.level;
        player.gold = data.gold;
        player.inventory = data.inventory;
        return player;
    }
}

module.exports = PlayerGame;