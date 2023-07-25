export function errorHandler(error, req, res, next) {
    console.error(error)

    if (error.statusCode) res.status(error.statusCode).send(makeErrorResponse(error.statusCode, error.message))
    else res.status(500).send(makeErrorResponse(500, error.message))
}

function makeErrorResponse(statusCode, errorMessage) {
    return {
        status: statusCode,
        message: errorMessage
    }
}
