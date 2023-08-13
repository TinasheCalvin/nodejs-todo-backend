const BaseError = require("./baseError")
const httpStatusCodes = require("./httpStatusCode")

class Api500Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR,
        description = "Internal Server Error",
        isOperational = true
    ) {
        super(name, statusCode, description, isOperational)
    }
}

module.exports = Api500Error