import { itemService } from "../../services/item-service.js"

export default class ItemsController {
    static async getAllItems(req, res) {
        const items = await itemService.getAllItems()
        res.status(200).send(items)
    }

    static async getItem(req, res) {
        const itemId = req.params.itemId
        const item = await itemService.getItem(itemId)
        res.status(200).send(item)
    }
}