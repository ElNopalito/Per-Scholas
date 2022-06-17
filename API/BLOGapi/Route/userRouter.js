const express = require('express');

const router = express.Router();

const userModel = require('../Models/userSchema');

router.post('/', async (req,res) => {
    const userData = req.body

    try {
        const user = await userModel.create(userData)
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json("Nah, didn't work")
    }
});

router.get('/', async (req,res) => {
    try {
        const user = await userModel.find()
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json('TRY AGAIN')
    }
});

router.put('/:user', async (req,res) => {
    const user = req.params.user
    const newUserData = req.body

    try {
        const user = await userModel.findById(user)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'ID not found!'})    }
});

router.delete('/:user', async (req,res) => {
    const user = req.params.user

    try {
        const user = await userModel.findByIdAndDelete(user)
        res.status(200).json({msg: 'User was deleted'})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'Unable to delete'})
    }
});

module.exports = router
