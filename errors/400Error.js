const BaseError = require("./baseError")
const httpStatusCodes = require("./httpStatusCode")

class Api400Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = "Bad Request",
        isOperational = true
    ) {
        super(name, statusCode, description, isOperational)
    }
}

module.exports = Api400Error