//! We are importing express by using the require operator
const express = require('express')
//!We are grabbing pokemon.js and installing in the server.js. Remember: server.js is your main module that controls the entire network. Any time you want to mainipulate or add the network, do it on server.js
const pokemonData = require('./Models/pokemon')
//! We are setting app to the express variable
const app = express()
//! This is the port our local host will run on. If something is not working correctly, just set it 3001,3002,etcetc until it works.
const PORT = 3000
app.set('view engine', 'ejs')
app.set('views', './Views')

//!This is setting up our home server. Usually it will start with app.get(a file route using "/", (req,res) then a function =>{
    //!Within the function will have a res.send('insert string or data')
//!})
app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App')
})
// //! We are setting up our Pokemon server. We can have as many servers as needed. We are res.send the array that was on pokemon.js. 
// app.get('/pokemon', (req,res) => {
//     res.send(pokemonData)
// })
//! We are making it so that our Pokemon server will render the index.ejs file and the pokemonData var, which is the data of the pokemon.js file.
app.get('/pokemon',(req,res) => {
    res.render('index', {
        pageTitle: 'Pokemon',
        pageHeader: 'See all the Pokemon!',
        pokemonData: pokemonData,
    })
})
//! After app.get will be app.listen. Basically it will listen a act as a return function. So when app.get function is trriggered, the app.listen function will trigger too. Usually it will have console.log(`Server is running on ${PORT})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})



