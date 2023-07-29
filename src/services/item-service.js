import { database } from "../db/connection.js";
import ItemNotFoundException from "../exceptions/ItemNotFoundException.js";

export default class ItemService {
    async getItem(itemId) {
        const item = (await new Promise((resolve, reject) => {
            database.getConnection().query(`SELECT id, category_id, name FROM items WHERE id = ?`, [itemId], (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        }))[0]
        if (!item) throw new ItemNotFoundException(`None with id = ${itemId}.`)
        return item
    }

    async getAllItems() {
        const items = await new Promise((resolve, reject) => {
            database.getConnection().query('SELECT id, category_id, name FROM items', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
        return items
    }
}

export const itemService = new ItemService()