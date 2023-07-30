import CartAlreadyExistsException from "../exceptions/CartAlreadyExistsException.js";
import CartNotFoundException from "../exceptions/CartNotFoundException.js";
import { baseLogger } from "../logging/base-logger.js";
import Cart from "../models/cart.js";
import { redis } from "../redis/connection.js";
import { itemService } from "./item-service.js";

class CartService {
    async getCart(cartId) {
        const cartJson = await redis.getConnection().get(cartId)
        if (!cartJson) return null
        return Cart.fromJson(cartJson)
    }

    async createNewCart(cartId) {
        const existingCart = await this.getCart(cartId)
        if (existingCart) throw new CartAlreadyExistsException()
        const newCart = new Cart(cartId)
        await redis.getConnection().set(cartId, newCart.toJson())
        baseLogger.info(`New cart created with id ${cartId}.`)
        return newCart
    }

    async addItemToCart(cartId, itemId, quantity = 1) {
        const cart = await this.#getCartOrFail(cartId)
        const item = await itemService.getItem(itemId)
        cart.addItem(item, quantity)
        await redis.getConnection().set(cartId, cart.toJson())
        baseLogger.info(`Item with id ${itemId} and quantity ${quantity} added to cart with id ${cartId}.`)
        return cart
    }

    async reduceItemInCart(cartId, itemId, quantity = 1) {
        const cart = await this.#getCartOrFail(cartId)
        const item = await itemService.getItem(itemId)
        cart.reduceItem(item, quantity)
        await redis.getConnection().set(cartId, cart.toJson())
        baseLogger.info(`Item with id ${itemId} and quantity ${quantity} reduced from cart with id ${cartId}.`)
        return cart
    }

    async removeItemFromCart(cartId, itemId) {
        const cart = await this.#getCartOrFail(cartId)
        const item = await itemService.getItem(itemId)
        cart.removeItem(item)
        await redis.getConnection().set(cartId, cart.toJson())
        baseLogger.info(`Item with id ${itemId} removed from cart with id ${cartId}.`)
        return cart
    }

    async emptyCart(cartId) {
        const cart = await this.#getCartOrFail(cartId)
        cart.emptyCart()
        await redis.getConnection().set(cartId, cart.toJson())
        baseLogger.info(`Cart with id ${cartId} emptied.`)
        return cart
    }

    async deleteCart(cartId) {
        await this.#getCartOrFail(cartId)
        await redis.getConnection().del(cartId)
        baseLogger.info(`Cart with id ${cartId} deleted.`)
    }

    async #getCartOrFail(cartId) {
        const cart = await this.getCart(cartId)
        if (!cart) throw new CartNotFoundException(`None with id = ${cartId}`)
        return cart
    }
}

export const cartService = new CartService()