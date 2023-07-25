import ItemNotInCartException from "../exceptions/ItemNotInCartException.js"
import ReduceQuantityGreaterThanCartQuantityException from "../exceptions/ReduceQuantityGreaterThanCartQuantityException.js"

export default class Cart {
    constructor(cartId, items = new Map()) {
        this.cartId = cartId,
        this.items = items
    }

    static fromJson(cartJson) {
        const parsed = JSON.parse(cartJson)
        return new Cart(parsed.cartId, parsed.items)
    }

    toJson() {
        return JSON.stringify({
            cartId: this.cartId,
            items: this.items
        })
    }

    addItem(item, quantity) {
        const inCart = this.items[item.id]
        if (inCart) inCart.count += quantity
        else this.items[item.id] = {
            ...item,
            count: quantity
        }
    }

    reduceItem(item, quantity) {
        const inCart = this.items[item.id]
        if (!inCart) throw new ItemNotInCartException(`Cannot reduce ${item.name} quantity.`)
        else if (quantity > inCart.count) throw new ReduceQuantityGreaterThanCartQuantityException(`Cannot reduce ${item.name} qantity`)
        else if (quantity == inCart.count) delete this.items[item.id]
        else inCart.count -= quantity
    }

    removeItem(item) {
        const inCart = this.items[item.id]
        if (!inCart) throw new ItemNotInCartException(`Cannot remove ${item.name}.`)
        delete this.items[item.id]
    }

    emptyCart() {
        this.items = new Map()
    }
}