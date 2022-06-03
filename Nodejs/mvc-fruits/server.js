//! Load express in const var
const express = require('express')
//! Import controller function
const getData = require('./Controllers/getdata')
//! connecting getData to var fruitsData
const fruitsData = getData()
//! create instance of express
const app = express()

const PORT = 3001
//middleware function=updates the request as soon as they come in
app.use((req,res,next) => {
    console.log('Running middleware function..');
    next() //go to the next middleware or to the response
})
//! Middleware basically run a function that will update a req. It's like eventlistener
//! JSON Middleware
app.use(express.json())

app.use(express.urlencoded({extended:false}))

//! setting up view engine
app.set('view engine', 'ejs')
app.set('views', './Views')

//! Route

app.get('/fruits', (req,res) => {
    res.render('fruits',{data:fruitsData, pageTitle: 'Fruits Page'})
});


//! HTML Form Route
app.get('/fruits/new', (req,res) => {
    res.render("new-fruits")
})
//! Create new Fruits w/ POST route
app.post("/fruits", (req, res)=>{
    console.log(req.body);
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else{ req.body.readyToEat = false
    };
    fruitsData.push(req.body)
    res.redirect('/fruits')
})

    app.listen(PORT, ()=>{
        console.log([`Server is running on port: ${PORT}`]);
    })
