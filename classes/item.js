class Item {
    constructor(name, type, value, quantity, description, price, equipped) {
        this.name = name
        this.type = type
        this.value = value
        this.quantity = quantity
        this.description = description
        this.price = price
        this.equipped = equipped
    }
}

module.exports = Item;