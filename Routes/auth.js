const router= require('express').Router()
const User= require('../Models/userSchema')

// Register
router.post('/register', async (req,res)=>{
    try{
    const newUser= new User(req.body)
    const user= await newUser.save();
    res.status(200).json(user)
    } catch (err){
        res.status(500).json(err)
    }
})
module.exports= router