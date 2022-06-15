const express = require('express')
const contactsModel = require('../Model/contactSchema')

const router = express.Router();

   router.get('/', async (req, res) => {

    try {
        const contacts = await contactsModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Still not working huh?"})
    }
 });
   
   router.post('/', async (req,res) => {
    const contactsData = req.body
    try {
        const contacts = await contactsModel.create(contactsData)
        res.status(201).json(contacts)
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "WHY WON'T YOU WORK, STUPID ******"})
    }
   })
   
   module.exports = router