const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
//! express-validator ensures the information inputted in Schema is correct to work; like usernames/ passwords. If the check works, the validationResult will not be needed Takes two functions. 6/9 2:22:35
const {check, validationResult} = require('express-validator');

const userModel = require('../Models/userSchema');

//! POST REQ
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

            //!Making sure users with same emails don't duplicate 
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

        //! Creating new JWT Token
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

//! GET REQ
router.get('/', async (req,res) => {
    try {
        const user = await userModel.find()
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json('TRY AGAIN')
    }
})

//! GET BY ID REQ
router.get('/:id', async (req,res) => { 
    const user = req.params.id
    try {
        const user = await userModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.error(error);
        res.status(400).json({msg: 'User not found!'})
    }
});

//! DEL REQ
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
