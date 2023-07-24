import { database } from "../db/connection.js";

class CategoryService {
    async getAllCategories() {
        const categories = await new Promise((resolve, reject) => {
            database.getConnection().query('SELECT * FROM category', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
        return categories
    }

    async getCategory(categoryId) {
        const category = (await new Promise((resolve, reject) => {
            database.getConnection().query(`SELECT * FROM category WHERE id = ${categoryId}`, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        }))[0]
        if (!category) throw new Error(`No item with id = ${categoryId}.`)
        return category
    }
}

export const categoryService = new CategoryService()