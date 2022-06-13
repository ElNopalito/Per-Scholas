//!---------------------------------------------Using Mongoose to configure our Schema---------------------------------------------------
const mongoose = require('mongoose')

//! Mongoose will look at your Schema and document what is required. If you try to input in Postman without all required details, it will come up as an error.
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
        type: Boolean,
        default: false
    },

    created_at: {
        type: Date,
        date: Date.now()
    },
})

module.exports = mongoose.model('Todo', todoSchema)
