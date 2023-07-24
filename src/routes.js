import { Database } from "./db/connection.js"
import { Redis } from "./redis/connection.js"

const cartId = '1234'
const carrotId = 1

export default class Routes {
    static apply(app) {
        app.get('/items', async (req, res) => {
            const result = await new Promise((resolve, reject) => {
                Database.getConnection().query('SELECT * FROM items', (err, data) => {
                    if (err) reject(err)
                    resolve(data)
                })
            })
            res.send(result)
        })

        app.get('/categories', async (req, res) => {
            const result = await new Promise((resolve, reject) => {
                Database.getConnection().query('SELECT * FROM category', (err, data) => {
                    if (err) reject(err)
                    resolve(data)
                })
            })
            res.send(result)
        })

        app.get('/cart', async (req, res) => {
            const result = await Redis.getConnection().get(cartId)
            res.send(result)
        })

        app.get('/cart/add-carrot', async (req, res) => {
            const newCarrot = {
                itemId: carrotId,
                count: 1
            }
            let cart = null
            const exisitngCartJson = await Redis.getConnection().get(cartId)
            if (exisitngCartJson) {
                cart = JSON.parse(exisitngCartJson)
                const carrotsInCart = cart.items[carrotId]
                if (carrotsInCart) carrotsInCart.count += 1
                else cart.items[carrotId] = newCarrot
            } else {
                cart = {
                    cartId: cartId,
                    items: {}
                }
                cart.items[carrotId] = newCarrot
            }
            Redis.getConnection().set(cartId, JSON.stringify(cart))

            const result = await Redis.getConnection().get(cartId)
            res.send(result)
        })

        app.get('/cart/clear', async (req, res) => {
            await Redis.getConnection().del(cartId)
            const result = await Redis.getConnection().get(cartId)
            res.send(result)
        })
    }
}
