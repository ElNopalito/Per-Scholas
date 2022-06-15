const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();

const mongoConfig = require('./config/mongoConfig');
const contactRouter = require('./route/contactRouter')

app.use(express.json());

app.use('/contacts', contactRouter)

//!-----------------------------------Main Server----------------------------------
app.get('/', (req,res) => {
    res.status(200).json({message: 'welcome to API'})
})


//!----------------------------------------Listen-----------------------------------------------------
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})


