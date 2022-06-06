const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    name: {
        type: String, //! name must always be string
        required: true//! if not, it will throw error
    },
    img: {
        type: String,//! img will always be a string
        required: true
    }
});

//! Defining mongoose.model as a string name and Schema
module.exports = mongoose.model('Pokemon', pokemonSchema)