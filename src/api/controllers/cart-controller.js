import { cartService } from "../../services/cart-service.js"
import crypto from 'crypto'

export default class CartController {
    static async getCart(req, res) {
        try {
            const cartId = req.params.cartId
            const cart = await cartService.getCart(cartId)
            res.status(200).send(cart)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async createNewCart(req, res) {
        try {
            const cartId = crypto.randomUUID()
            const cart = await cartService.createNewCart(cartId)
            res.status(201).send(cart)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async addItemToCart(req, res) {
        try {
            const cartId = req.params.cartId
            const itemId = req.params.itemId
            const quantity = parseInt(req.query.quantity) || 1
            const cart = await cartService.addItemToCart(cartId, itemId, quantity)
            res.status(200).send(cart)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    } 

    static async reduceItemInCart(req, res) {
        try {
            const cartId = req.params.cartId
            const itemId = req.params.itemId
            const quantity = parseInt(req.query.quantity) || 1
            const cart = await cartService.reduceItemInCart(cartId, itemId, quantity)
            res.status(200).send(cart)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async removeItemFromCart(req, res) {
        try {
            const cartId = req.params.cartId
            const itemId = req.params.itemId
            const cart = await cartService.removeItemFromCart(cartId, itemId)
            res.status(200).send(cart)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async emptyCart(req, res) {
        try {
            const cartId = req.params.cartId
            const cart = await cartService.emptyCart(cartId)
            res.status(200).send(cart)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async deleteCart(req, res) {
        try {
            const cartId = req.params.cartId
            await cartService.deleteCart(cartId)
            res.status(204).send()
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }
}