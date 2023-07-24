import { Redis } from "../../redis/connection.js"

export default class CartController {
    static async getCart(req, res) {
        const cartId = req.params.cartId
        const result = await Redis.getConnection().get(cartId)
        if (!result) res.status(404)
        res.send(result)
    }

    static async addItemToCart(req, res) {
        const cartId = req.params.cartId
        const itemId = req.params.itemId
        const quantity = parseInt(req.query.quantity) || 1
        const newItem = { itemId, count: quantity }

        let cart = null
        const exisitngCartJson = await Redis.getConnection().get(cartId)
        if (exisitngCartJson) {
            cart = JSON.parse(exisitngCartJson)
            const inCart = cart.items[itemId]
            if (inCart) inCart.count = parseInt(inCart.count) + quantity
            else cart.items[itemId] = newItem
        } else {
            cart = {
                cartId: cartId,
                items: {}
            }
            cart.items[itemId] = newItem
        }
        Redis.getConnection().set(cartId, JSON.stringify(cart))

        const result = await Redis.getConnection().get(cartId)
        res.send(result)
    }

    static async clearCart(req, res) {
        const cartId = req.params.cartId
        await Redis.getConnection().del(cartId)
        res.status(204).send()
    }
}