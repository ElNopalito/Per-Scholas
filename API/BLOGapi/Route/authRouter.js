const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const {check, validationResult} = require('express-validator');
const userModel = require('../Models/userSchema');

//!-------------------------------------------POST---------------------------------
router.post('/', [
    check("email", "Please use valid email").isEmail(),
    check("password", 'Please enter a password').notEmpty(),
], async (req,res) => {
    const userData = req.body
    const error = validationResult(req)

    if (!error.isEmpty()) {                         
        return res.json(error.array())                     
     }
     
     try {
        const user = await userModel.findOne({email: userData.email})

        if(!user){
            return res.json('User not found')
        }

        
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