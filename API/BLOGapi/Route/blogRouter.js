const express = require('express')

const router = express.Router();

const blogModel = require('../Models/blogSchema')

route.post('/', async (req,res) => {
    const blogData = req.body

    try {
        const blog = await blogModel.create(blogData)
        res.status(201).json(blog)
    } catch (error) {
        console.log(error);
        res.status(400).json('Try again')
    }
})

