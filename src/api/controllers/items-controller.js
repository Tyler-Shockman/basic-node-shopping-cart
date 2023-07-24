import { Database } from "../../db/connection.js"

export default class ItemsController {
    static async getAllItems(req, res) {
        const result = await new Promise((resolve, reject) => {
            Database.getConnection().query('SELECT * FROM items', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
        res.send(result)
    }

    static async getItemCategories(req, res) {
        const result = await new Promise((resolve, reject) => {
            Database.getConnection().query('SELECT * FROM category', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
        res.send(result)
    }
}