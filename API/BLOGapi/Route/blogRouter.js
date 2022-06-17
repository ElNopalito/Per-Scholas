const express = require('express');

const router = express.Router();

const blogModel = require('../Models/blogSchema');

router.post('/', async (req,res) => {
    const blogData = req.body

    try {
        const blog = await blogModel.create(blogData)
        res.status(201).json(blog)
    } catch (error) {
        console.log(error);
        res.status(400).json('Try again')
    }
});

router.get('/:blog', async (req,res) => { 
    const blog = req.params.id
    try {
        const todo = await todoModel.findById(blog)
        res.status(200).json(blog)
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: 'ID not found!'})
    }
});

router.put('/:blog', async (req,res) => {
    const blog = req.params.id
    const newBlogData = req.body
    try {
        const todo = await todoModel.findByIdAndUpdate(blog, newBlogData)  //! Going to find ID and update
        res.status(202).json(blog)
    } catch(error){
        console.log(error);
        res.status(400).json({msg: "Can't update blog"})
    }
});

router.delete('/:blog', async (req,res) => {
    const blog = req.params.id

    try {
        const blog = await blogModel.findByIdAndDelete(blog)
        res.status(200).json({msg: 'Blog was deleted'})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:'Unable to delete'})
    }
});
module.exports = router
