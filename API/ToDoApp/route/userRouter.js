const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

//! express-validator ensures the information inputted in Schema is correct to work; like usernames/ passwords. If the check works, the validationResult will not be needed Takes two functions. 6/9 2:22:35
const {check, validationResult} = require('express-validator');

const userModel = require('../Models/userSchema');


router.post('/', [
    check('username', "Username is required!").notEmpty(),
    check("email", "Please use valid email").isEmail(),
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

router.get('/:id', async (req,res) => {
    const id = req.params.id
    try {
        const user = await userModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json('TRY AGAIN')
    }
});

router.put('/:id', async (req,res) => {
    const id = req.params.id
    const newUserData = req.body

    try {
        const user = await userModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'ID not found!'})    }
});

router.delete('/:id', async (req,res) => {
    const id = req.params.id

    try {
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'User was deleted'})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'Unable to delete'})
    }
});

module.exports = router
