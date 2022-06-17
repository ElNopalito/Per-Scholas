const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3000;
const morgan = require('morgan');
const helmet = require('helmet');

const mongoConfig = require('./Config/mongoConfig');

const userModel = require('./Models/userSchema');
const blogModel = require('./Models/blogSchema');

const userRouter = require('./Route/userRouter');
const blogRouter = require('./Route/blogRouter');

app.use(express.json());
app.use('Blog', blogRouter);
app.use('/User', userRouter);
//!----------------------------------------MAIN SERVER------------------------------------- 
app.get('/blog', (req,res) => {
    res.status.json({message: 'Welcome to API'})
})
//!----------------------------------------APP LISTEN---------------------------------------
app.listen(PORT, () => { 
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})
