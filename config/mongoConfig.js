//!----------------------------------------------------------Connecting Mongoose to Module--------------------------------------
const mongoose = require('mongoose')

//! This function is a try/catch. Either the try works or it will catch an error. In the try, the function is awaiting to make a connection to MongoDB with the URI stated in out .env file. After it is sucessful, it will console.log a message
//! If it fails, it will catch an error and console.log that error
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //! make req to connect to Mongo
        mongoose.connection //! checking for connection
        console.log('MongoDB Connected'); 
    } catch (error) {
        console.error(error);
    }
}