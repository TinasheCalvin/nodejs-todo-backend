const BaseError = require("./baseError")
const httpStatusCodes = require("./httpStatusCode")

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

module.exports = Api404Error