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
        if (!inCart) throw new Error('Item is not in cart. Cannot reduce.')
        else if (quantity > inCart.count) throw new Error('Reduce quantity is greater than quantity in cart. Cannot reduce.')
        else if (quantity == inCart.count) delete this.items[item.id]
        else inCart.count -= quantity
    }

    removeItem(item) {
        const inCart = this.items[item.id]
        if (!inCart) throw new Error('Item is not in cart. Cannot remove.')
        delete this.items[item.id]
    }

    emptyCart() {
        this.items = new Map()
    }
}