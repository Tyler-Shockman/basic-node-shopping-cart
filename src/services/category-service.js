import { database } from "../db/connection.js";
import CategoryNotFoundException from "../exceptions/CategoryNotFoundException.js";

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
            // TODO: REMOVE THE ${categoryId} FROM THE QUERY STRING AND PUT INTO A QUERY PARAM. THIS WILL HELP PROTECT AGAINST SQL INJECTION.
            // TODO: SELECT EXACTLY WHAT IS NEEDED HERE. THIS PROTECTS AGAINST SOMETHING NEED AND CONFIDENTIAL GETTING ADDED IN THE FUTURE AND THEN RETURNED. IT IS ALSO A GOOD OVERALL PRACTICE.
            database.getConnection().query(`SELECT * FROM category WHERE id = ${categoryId}`, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        }))[0]
        if (!category) throw new CategoryNotFoundException(`None with id = ${categoryId}`)
        return category
    }
}

export const categoryService = new CategoryService()