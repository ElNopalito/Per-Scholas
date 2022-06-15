const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //! make req to connect to Mongo
        mongoose.connection //! checking for connection
        console.log('MongoDB Connected'); 
    } catch (error) {
        console.error(error);
    }
}

