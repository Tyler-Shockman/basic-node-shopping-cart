import { database } from "../db/connection.js";
import ItemNotInCartException from "../exceptions/ItemNotInCartException.js";

export default class ItemService {
    async getItem(itemId) {
        const item = (await new Promise((resolve, reject) => {
            database.getConnection().query(`SELECT * FROM items WHERE id = ${itemId}`, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        }))[0]
        if (!item) throw new ItemNotInCartException(`None with id = ${itemId}.`)
        return item
    }

    async getAllItems() {
        const items = await new Promise((resolve, reject) => {
            database.getConnection().query('SELECT * FROM items', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
        return items
    }
}

export const itemService = new ItemService()