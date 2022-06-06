const express = require('express')
const todoModel = require('../Models/todoSchema')
//! Create router
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const todos = await todoModel.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
    }
 })


router.post('/', async (req,res) =>{
    const todoData = req.body //! getting body data using req method

    try {
        const todo = await todoModel.create(todoData) //! create the todo in Database
        res.status(201).json(todo)
        // res.status(201).json({data: todo})
    } catch (error){
        console.error(error);
        res.status(400).json('HELP ME')
    }
})

//! Get todo by ID
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        const todo = await todoModel.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        console.error(error);
    }
})
module.exports = router