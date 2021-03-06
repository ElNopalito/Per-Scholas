//!---------------------------------------------------------------------Setting variables-------------------------------------------------------

//! We are importing express by using the require operator
const express = require('express');

//!We are grabbing pokemon.js and installing in the server.js. Remember: server.js is your main module that controls the entire network. Any time you want to manipulate or add the network, do it on server.js
const pokemonData = require('./Models/pokemon');

//! We are setting app to the express variable
const app = express();

//! This is the port our local host will run on. If something is not working correctly, just set it 3001,3002,etcetc until it works.
const PORT = 3000;

//! We are importing the env file using require and testing with console.log
require('dotenv').config();
//console.log(process.env.MONGODB_URI);

//! Importing mongoose using require
const mongoose = require('mongoose');

//!Importing Schema model
const pokemonModel = require('./Models/PokemonModel');


//!Middleware
//! Ask Abe about this
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//!------------------------------------------------------Setting ejs files. This is what will appear on frontend instead of HTML/CSS------------------------------------------

app.set('view engine', 'ejs');
app.set('views', './Views');

//!-------------------------------------------------------Setting up Servers(remember: servers that are more specific need to be set first as JS reads from top down)-------------------------

//!This is setting up our home server. Usually it will start with app.get(a file route using "/", (req,res) then a function =>{
    //!Within the function will have a res.send('insert string or data')
//!})

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App')
});

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
    });
});

//! This allows us to grab the id of the pokemon.js. Not really sure what it was for, but could be for displaying index of pokemon in the index.ejs file. Refer to 1:24:00----------
// app.get('/pokemon/:id'), (req,res) => {
//     res.send(req.params.id)
// })

//! Creating new Pokemon form. new.ejs is a template with a form. 
app.get('/pokemon/new', (req,res) =>{
    res.render('New', {
        pageTitle: 'New',
        pageHeader: ' Create new Pokemon',
        })
})
//! Async code. This function is 
app.post('/pokemon', async (req,res) => {
    const newPokemon = req.body
    newPokemon.img = `http://img.pokemondb.net/artwork/${req.body.name}`;
    await pokemonModel.create(newPokemon, (error, result) => {
            if (error){
                console.log(error);
            } 
            console.log(result);
    })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pageTitle: 'Details',
        pageHeader:'Gotta Catch Them All',
        pokemon: pokemonData[req.params.id]
    })
})

//!-------------------------------------------------------------Server Response------------------------------------------------------------------------------------------------------

//! After app.get will be app.listen. Basically it will listen a act as a return function. So when app.get function is triggered, the app.listen function will trigger too. Usually it will have console.log(`Server is running on ${PORT})
//! We are also connecting Mongoose using dot notation.
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongoose connected');
}) 