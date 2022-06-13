//!-----------------------------------------------------------Creating Routes for todos------------------------------------------------
const express = require('express');

//! The todoSchema is the list of require parameters in the Schema file. It is now todoModel
const todoModel = require('../Models/todoSchema');

//! Create router using express.router()
const router = express.Router();

//! Getting all todos from todoSchema
router.get('/', async (req, res) => {

    try {
        const todos = await todoModel.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
    }
 });

//! This is the Post. We first are creating a object called todoData and assigning it the value of req.body. req.body allows us to request the body of the Schema and sending it to server.js
//! In our try, we are awaiting for the schema to create a new todoData and is assigned to var todo
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
});

//! Get todo by specific ID
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        const todo = await todoModel.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: 'ID not found!'
        })
    }
});

//! Updating new Todos by ID
router.put('/:id', async (req,res) => {
    const id = req.params.id
    const newtodoData = req.body
    try {
        const todo = await todoModel.findByIdAndUpdate(id, newtodoData)  //! Going to find ID and update
        res.status().json(todo)
    } catch(error){
        console.log(error);
    }
});

//! Deleting a Todo by ID
router.delete('/:id', async (req,res) => {
    const od = req.params.id

    try {
        const todo = await todoModel.findByIdAndDelete
        res.status(200).json({msg: 'Todo was deleted'})
    } catch (error) {
        console.log(error);
    }
})
module.exports = router
