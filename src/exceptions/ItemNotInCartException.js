export default class ItemNotInCartException extends Error {
    constructor(additionalMessage) {
        super(`Target item is not in the cart. ${additionalMessage}`.trim())
        this.name = "ItemNotInCartException"
        this.statusCode = 400
    }
}
