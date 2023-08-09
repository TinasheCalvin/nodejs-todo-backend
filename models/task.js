const mongoose = require('mongoose')

let Schema = mongoose.Schema

let TaskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    isImportant: {
        type: Boolean,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', TaskSchema)