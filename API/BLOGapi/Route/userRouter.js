const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');

const router = express.Router();

const userModel = require('../Models/userSchema');

//!------------------------------------------POST User-----------------------------------------
router.post('/', [
    check('username', "Username is required!").notEmpty(),
    check("email", "Please use valid email").isEmail(),
    check("password", 'Please enter a password').notEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6}),
  
] ,async (req,res) => {
    const userData = req.body
    const error = validationResult(req)
  
    if (!error.isEmpty()) {                 
       return res.json(error.array())                   
    };
    
    try {

         const userExist = await userModel.findOne({email: userData.email});
         
         if (userExist){
            return res.json({msg: 'User already exist'})
         }

        //! salt rounds
        const saltRounds = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds)
        console.log(hashedPassword);
        userData.password = hashedPassword
        const user = await userModel.create(userData)

    
         const payLoad = {
            id: user._id,
            email: user.email
         }

         const SECRET_KEY= 'INSERT RANDOM HASH'

         const TOKEN = jwt.sign(payLoad, SECRET_KEY)

        res.status(201).json({
            user: user,
            token: TOKEN
        })
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

router.delete('/:id', async (req,res) => {
    const id = req.params.id

    try {
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'User was deleted'})
    } catch (error) {
        console.log(error);
        res.status(400).json('Unable to delete user!')
    }
});

module.exports = router
