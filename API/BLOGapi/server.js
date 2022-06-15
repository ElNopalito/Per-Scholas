const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000

const mongoConfig = require('./Config/mongoConfig')

app.get('/blog', (req,res) => {
    res.status.json({message: 'Welcome to API'})
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})