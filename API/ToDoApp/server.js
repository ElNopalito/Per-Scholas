const express = require('express');
const { default: helmet } = require('helmet');
require('dotenv').config()// init dotenv

//! We are imporing mongoConfig which is where Mongoose is connected.
const mongoConfig = require('./config/mongoConfig')

//! Routers
const todosRouter = require('./route/todosRouter');
const userRouter = require('./route/userRouter')

const app = express();
const PORT = 3000;

app.use(express.json())
//! Security
app.use(helmet())

//! Importing Router
app.use('/todos', todosRouter)
app.use('/users', userRouter)
//!-------------------------------------MAIN ROUTE--------------------------------------------------------------------------------------------------------------------
app.get('/', (req,res) => {
    res.status(200).json({message: 'welcome to API'}) //! res.status allows us to send custom 200 code.
})




//!----------------------------------Listening---------------------------------------------------------------------------------------------------------------------
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})
