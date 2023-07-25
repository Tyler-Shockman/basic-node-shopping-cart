import { cartService } from "../../services/cart-service.js"
import crypto from 'crypto'
import CartNotFoundException from "../../exceptions/CartNotFoundException.js"

export default class CartController {
    static async getCart(req, res) {
        const cartId = req.params.cartId
        const cart = await cartService.getCart(cartId)
        if (!cart) throw new CartNotFoundException(`None with id = ${cartId}.`)
        res.status(200).send(cart)
    }

    static async createNewCart(req, res) {
        const cartId = crypto.randomUUID()
        const cart = await cartService.createNewCart(cartId)
        res.status(201).send(cart)
    }

    static async addItemToCart(req, res) {
        const cartId = req.params.cartId
        const itemId = req.params.itemId
        const quantity = parseInt(req.query.quantity) || 1
        const cart = await cartService.addItemToCart(cartId, itemId, quantity)
        res.status(200).send(cart)
    } 

    static async reduceItemInCart(req, res) {
        const cartId = req.params.cartId
        const itemId = req.params.itemId
        const quantity = parseInt(req.query.quantity) || 1
        const cart = await cartService.reduceItemInCart(cartId, itemId, quantity)
        res.status(200).send(cart)
    }

    static async removeItemFromCart(req, res) {
        const cartId = req.params.cartId
        const itemId = req.params.itemId
        const cart = await cartService.removeItemFromCart(cartId, itemId)
        res.status(200).send(cart)
    }

    static async emptyCart(req, res) {
        const cartId = req.params.cartId
        const cart = await cartService.emptyCart(cartId)
        res.status(200).send(cart)
    }

    static async deleteCart(req, res) {
        const cartId = req.params.cartId
        await cartService.deleteCart(cartId)
        res.status(204).send()
    }
}