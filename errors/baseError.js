class BaseError extends Error {
    constructor(name, statusCode, isOperational, description) {
        super(description)
        // the line below sets the prototype of the current instance to that of the BaseError class
        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        // this line captures the stack trace of the error
        Error.captureStackTrace(this)
    }
}

export default BaseError