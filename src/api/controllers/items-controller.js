import { itemService } from "../../services/item-service.js"

export default class ItemsController {
    static async getAllItems(req, res) {
        try {
            const items = await itemService.getAllItems()
            res.status(200).send(items)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }

    static async getItem(req, res) {
        try {
            const itemId = req.params.itemId
            const item = await itemService.getItem(itemId)
            res.status(200).send(item)
        } catch (error) {
            console.error(error)
            res.status(500).send()
        }
    }
}