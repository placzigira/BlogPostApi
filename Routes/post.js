const router= require('express').Router()
const Post = require('../Models/postSchema')
// Adding New Post 
router.post('/add', async (req,res)=>{
    try{
        const newPost= await Post.create(req.body)
        
        res.status(200).json(newPost)

    }catch(err){
        res.status(500).json(err)
    }
})
// Fetching All Posts
router.get('/fetch', async (req,res)=>{
    try{
        const Posts= await Post.find();
    res.status(200).json(Posts)
    } catch(err){
        res.status(404).json(err)
    }
})

// Update Routes
router.patch('/update/:id', async (req,res)=>{
    try{
     const updatePost= await Post.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description
        }
     },{new: true})
 res.status(200).json(updatePost)
    }catch(err){
        res.status(500).json(err)
    }
})

//  Delete Route

router.delete('/delete/:id', async(req,res)=>{
    try{
        const deleteById= await Post.findByIdAndDelete(req.params.id)
    res.status(200).json("deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

// Fetch By Id

router.get('/getone/:id', async (req,res)=>{
    try{
        const getOne= await Post.findById(req.params.id)
    res.status(200).json(getOne)
    }catch(err){
    res.status(500).json("Fetched Wrong Id")
    }
})
module.exports= router 