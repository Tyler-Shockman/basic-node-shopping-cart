export function tryWrapper(controllerMethod) {
    return async function (req, res, next) {
        try {
            await controllerMethod(req, res)
        } catch (err) {
           next(err)
        }
    }
}
