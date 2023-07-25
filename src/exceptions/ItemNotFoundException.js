export default class ItemNotFoundException extends Error {
    constructor(additionalMessage) {
        super(`Unable to find item. ${additionalMessage}`.trim())
        this.name = "ItemNotFoundException"
        this.statusCode = 404
    }
}
