const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

//! express-validator ensures the information inputted in Schema is correct to work; like usernames/ passwords. If the check works, the validationResult will not be needed Takes two functions. 6/9 2:22:35
const {check, validationResult} = require('express-validator');

const userModel = require('../Models/userSchema');

router.post('/', [
    check('username', "Username is required!").notEmpty(),
    check("email", "Please use valid email").isEmail(),
    check("password", 'Please enter a password').notEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6}),
  
] ,async (req,res) => {
    const userData = req.body
    const error = validationResult(req)
  
    if (!error.isEmpty()) {                         //! By putting an "!", we are checking the opposite logic so !error.isEmpty = NOT EMPTY
       return res.json(error.array())                     //! Will tell you what error is in POSTMAN and using return will STOP the app at this function
    }

    try {
        //! salt rounds
        const saltRounds = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds)
        console.log(hashedPassword);
        userData.password = hashedPassword

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
