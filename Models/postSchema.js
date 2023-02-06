const mongoose= require('mongoose')

const postSchema= new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        unique: false,
        required: true
    }
}, {timestamps:true})
module.exports= mongoose.model("post", postSchema)