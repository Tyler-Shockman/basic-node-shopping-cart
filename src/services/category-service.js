import { database } from "../db/connection.js";
import CategoryNotFoundException from "../exceptions/CategoryNotFoundException.js";

class CategoryService {
    async getCategory(categoryId) {
        const category = (await new Promise((resolve, reject) => {
            database.getConnection().query(`SELECT id, name FROM category WHERE id = ?`, [categoryId], (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        }))[0]
        if (!category) throw new CategoryNotFoundException(`None with id = ${categoryId}`)
        return category
    }

    async getAllCategories() {
        const categories = await new Promise((resolve, reject) => {
            database.getConnection().query('SELECT id, name FROM category', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
        return categories
    }
}

export const categoryService = new CategoryService()