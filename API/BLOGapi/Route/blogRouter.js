
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const blogModel = require('../Models/blogSchema');
const authMiddleware = require('../Middleware/authMiddleware');
//!---------------------------------------------------Get Blog--------------------------------
router.get('/', authMiddleware, async (req, res) => {

    try {
        const blog = await blogModel.find()
        res.status(201).json(blog)
    } catch (error) {
        console.log(error)
    }
 });

//!--------------------------------------------------POST Blog----------------------------------------
router.post('/', authMiddleware, async (req,res) => {
    const blogData = req.body 

    try {
        const blog = await blogModel.create(blogData)
        res.status(201).json(blog)
    } catch (error) {
        console.log(error);
        res.status(400).json('Try again')
    }
});

//!-------------------------------------------------Get Blog by ID--------------------------------------
router.get('/:id', authMiddleware, async (req,res) => { 
    const id = req.params.id  
    try {
        const blog = await blogModel.findById(id)
        res.status(200).json(blog)
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: 'ID not found!'})
    }
});

//!-------------------------------------------Update Blog by ID----------------------------------
router.put('/:id',authMiddleware, async (req,res) => {
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

//!------------------------------------------------Delete Blog----------------------------------------------
router.delete('/:id', authMiddleware, async (req,res) => {
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
