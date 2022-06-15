const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({         

    name : {
        type : String,
        required: true
    },

    phone : {
        type: String,
        required: true
    },

    email : {
        type : String
    },

    contactType:{
        type : String,
        default:'personal'
    },

    created_at: {
        type: Date,
        date: Date.now()
    },

});
module.exports = mongoose.model('contact', contactSchema)