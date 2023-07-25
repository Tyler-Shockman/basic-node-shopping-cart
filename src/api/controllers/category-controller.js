import { categoryService } from "../../services/category-service.js";

export default class CategoryController {
    static async getAllCategories(req, res) {
        const categories = await categoryService.getAllCategories()
        res.status(200).send(categories)
    }

    static async getCategory(req, res, next) {
        const categoryId = req.params.categoryId
        const category = await categoryService.getCategory(categoryId)
        res.status(200).send(category)
    }
}