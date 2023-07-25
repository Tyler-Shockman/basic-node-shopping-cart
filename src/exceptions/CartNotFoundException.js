export default class CartNotFoundException extends Error {
    constructor(additionalMessage) {
        super(`Unable to find cart. ${additionalMessage}`.trim())
        this.name = "CartNotFoundException"
        this.statusCode = 404
    }
}
