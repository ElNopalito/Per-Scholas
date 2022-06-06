const express = require('express');
require('dotenv').config()// init dotenv

const mongoConfig = require('./config/mongoConfig')
const todosRouter = require('./route/todosRouter');

const app = express();
const PORT = 3000;

app.use(express.json())

//! Router
app.use('/todos', todosRouter)
//!-------------------------------------ROUTES--------------------------------------------------------------------------------------------------------------------
app.get('/', (req,res) => {
    res.status(200).json({message: 'welcome to API'})
})




//!----------------------------------Listening---------------------------------------------------------------------------------------------------------------------
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})