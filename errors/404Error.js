import BaseError from "./baseError"
import httpStatusCodes from "./httpStatusCode"

class Api404Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = "Not Found",
        isOperational = true
    ) {
        super(name, statusCode, description, isOperational)
    }
}

export default Api404Error