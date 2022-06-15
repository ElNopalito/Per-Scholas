const express = require('express')

const router = express.Router()

//! express-validator ensures the information inputted in Schema is correct to work; like usernames/ passwords. If the check works, the validationResult will not be needed Takes two functions. 6/9 2:22:35
const {check, validationResult} = require('express-validator')

const userModel = require('../Models/userSchema')

router.post('/', [
    check('username', "Username is required!").notEmpty(),
    check("email", "Please use valid email").isEmail()
] ,async (req,res) =>{
    const userData = req.body
    if (validationResult.isEmpty) {
        res.status(400).json(validationResult.array())
    }
    try {
        const user = await userModel.create(userData)
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json('TRY AGAIN')
    }
})

router.get('/', async (req,res) => {
    try {
        const user = await userModel.find()
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json('TRY AGAIN')
    }
})

module.exports = router
