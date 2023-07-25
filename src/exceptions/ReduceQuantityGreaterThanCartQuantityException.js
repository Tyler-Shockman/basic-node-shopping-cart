export default class ReduceQuantityGreaterThanCartQuantityException extends Error {
    constructor(additionalMessage) {
        super(`Existing quantity of item in cart is less than the quantity that you are trying to remove. ${additionalMessage}`.trim())
        this.name = "ReduceQuantityGreaterThanCartQuantityException"
        this.statusCode = 400
    }
}
