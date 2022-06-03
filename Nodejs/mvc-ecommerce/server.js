const express = require('express')
const res = require('express/lib/response')

const getData = require('./Controllers/getData')
const productsData = getData()

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', './Views')

app.get('/', (req,res) => {
    res.render('home', {pageTitle: 'Home'})
})

app.get('/products', (req,res) =>{
    res.render('products', {data:productsData, pageTitle: 'Product Page'})
});





app.listen(PORT, ()=>{
    console.log([`Server is running on ${PORT}`]);
})