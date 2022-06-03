//! Load package in var
const express = require('express')


const app = express()

//! Creating a server using app.get and a call back function with req and res variables. Refer back to 5/19 @ 3:02:00  
app.get('/', (req, res) => {
    res.send('Hello Express!')
})



//! Home page
app.get('/home', (req, res) => {
    //! You can add a string of text or HTML tags
    res.send('<h1> Home Page </h1>')
})

app.get('/about', (req,res) =>{
    res.send('<h1>An was here</h1>')
})
//! Listen for req (port # and callback function)
app.listen(3000, () => {
    console.log('Server is running....');
})
//! Type in terminal node server express and then go to browser and type in localhost.3000
//! To access a specfici path, use '/' 