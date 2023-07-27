import { database } from "../db/connection.js";
import ItemNotFoundException from "../exceptions/ItemNotFoundException.js";

export default class ItemService {
    // TODO: RE-ORDER THE METHODS HERE IN THE SAME ORDER AS IN category-service.js.
    async getItem(itemId) {
        const item = (await new Promise((resolve, reject) => {
            // TODO: REMOVE THE ${itemId} FROM THE QUERY STRING AND PUT INTO A QUERY PARAM. THIS WILL HELP PROTECT AGAINST SQL INJECTION.
            database.getConnection().query(`SELECT id, category_id, name FROM items WHERE id = ${itemId}`, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        }))[0]
        if (!item) throw new ItemNotFoundException(`None with id = ${itemId}.`)
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