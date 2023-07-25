export default class CategoryNotFoundException extends Error {
    constructor(additionalMessage) {
        super(`Unable to find category. ${additionalMessage}`.trim())
        this.name = "CategoryNotFoundException"
        this.statusCode = 404
    }
}
