const express = require('express');

const router = express.Router();

const blogModel = require('../Models/blogSchema');
//! Get
router.get('/', async (req, res) => {

    try {
        const blog = await blogModel.find()
        res.status(201).json(blog)
    } catch (error) {
        console.log(error)
    }
 });

//! Post
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

//! Get by ID
router.get('/:id', async (req,res) => { 
    const id = req.params.id
    try {
        const blog = await blogModel.findById(id)
        res.status(200).json(blog)
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: 'ID not found!'})
    }
});

//! Update by ID
router.put('/:id', async (req,res) => {
    const id = req.params.id
    const newBlogData = req.body
    try {
        const blog = await blogModel.findByIdAndUpdate(id, newBlogData)  //! Going to find ID and update
        res.status(202).json(blog)
    } catch(error){
        console.log(error);
        res.status(400).json({msg: "Can't update blog"})
    }
});

//! Delete by ID
router.delete('/:id', async (req,res) => {
    const id = req.params.id

    try {
        const blog = await blogModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Blog was deleted'})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:'Unable to delete'})
    }
});
module.exports = router
