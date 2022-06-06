const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type : String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    completed: {
        default: false
    },

    created_at: {
        type: Date,
        date: Date.now()
    },
})

module.exports = mongoose.model('Todo', todoSchema)