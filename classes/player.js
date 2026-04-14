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

    static fromJSON(data) { /* "data" é somente um parâmetro passado nesse momento, mas dentro da função "loadGame" será substituido por "parsed". */

        const player = new PlayerGame( /* Aqui é criado uma nova instância da classe, depois é preenchido com todos os atributos que estavam no "parsed". */
            data.name,
            data.hp,
            data.maxHp,
            data.attack,                    
            data.defense
        );                                /* Resumindo, essa função pega os dados do JSON e transforma em objeto da classe "PlayerGame", assim é possível usar o "player". */
        
        player.xp = data.xp;
        player.level = data.level;
        player.gold = data.gold;
        player.inventory = data.inventory;
        return player;
    }
}

module.exports = PlayerGame;