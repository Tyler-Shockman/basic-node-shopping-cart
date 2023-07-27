import { database } from "../db/connection.js";
import ItemNotFoundException from "../exceptions/ItemNotFoundException.js";

export default class ItemService {
    // TODO: RE-ORDER THE METHODS HERE IN THE SAME ORDER AS IN category-service.js.
    async getItem(itemId) {
        const item = (await new Promise((resolve, reject) => {
            // TODO: REMOVE THE ${itemId} FROM THE QUERY STRING AND PUT INTO A QUERY PARAM. THIS WILL HELP PROTECT AGAINST SQL INJECTION.
            // TODO: SELECT EXACTLY WHAT IS NEEDED HERE. THIS PROTECTS AGAINST SOMETHING NEED AND CONFIDENTIAL GETTING ADDED IN THE FUTURE AND THEN RETURNED. IT IS ALSO A GOOD OVERALL PRACTICE.
            database.getConnection().query(`SELECT * FROM items WHERE id = ${itemId}`, (err, data) => {
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