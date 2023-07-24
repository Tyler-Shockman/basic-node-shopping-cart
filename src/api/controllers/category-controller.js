import { categoryService } from "../../services/category-service.js";

export default class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const categories = await categoryService.getAllCategories()
            res.status(200).send(categories)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async getCategory(req, res) {
        try {
            const categoryId = req.params.categoryId
            const category = await categoryService.getCategory(categoryId)
            res.status(200).send(category)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }
}