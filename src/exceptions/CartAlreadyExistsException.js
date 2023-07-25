export default class CartAlreadyExistsException extends Error {
    constructor(additionalMessage) {
        super(`Cart already exists. ${additionalMessage}`.trim())
        this.name = "CartAlreadyExistsException"
    }
}
