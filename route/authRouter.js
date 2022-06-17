const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const {check, validationResult} = require('express-validator');
const userModel = require('../Models/userSchema');

//! User login
router.post('/', [
    check("email", "Please use valid email").isEmail(),
    check("password", 'Please enter a password').notEmpty(),
], async (req,res) => {
    const userData = req.body
    const error = validationResult(req)

    if (!error.isEmpty()) {                         //! By putting an "!", we are checking the opposite logic so !error.isEmpty = NOT EMPTY
        return res.json(error.array())                     //! Will tell you what error is in POSTMAN and using return will STOP the app at this function
     }
     
     try {
        const user = await userModel.findOne({email: userData.email})

        if(!user){
            return res.json('User not found')
        }

        //! Compare password to hashed PW, making sure password works
        const isMatch = await bcrypt.compare(userData.password, user.password)

        if(!isMatch){
            return res.json('Password is not a match')
        } else{
            res.status(200).json('Sucess!')
        }
     } catch (error) {
        console.log(error);
        res.status(500).json('Server error')
     }
});

module.exports = router