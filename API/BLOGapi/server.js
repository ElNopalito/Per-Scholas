const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcrypt')
require('dotenv').config();

const PORT = 3000;

const mongoConfig = require('./Config/mongoConfig');

const userModel = require('./Models/userSchema');
const blogModel = require('./Models/blogSchema');

const userRouter = require('./Route/userRouter');
const blogRouter = require('./Route/blogRouter');

const app = express();
app.use(express.json());
app.use('/Blog', blogRouter);
app.use('/User', userRouter);
//!----------------------------------------MAIN SERVER------------------------------------- 
app.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to API'})
})
//!----------------------------------------APP LISTEN---------------------------------------
app.listen(PORT, () => { 
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})
