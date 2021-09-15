const mongoose =require('mongoose');
const ytSchema = mongoose.Schema({
    title:String,
    likes:Number,
    dislikes:Number,
    comments:Number,
    views:Number
})

module.exports = mongoose.model("YTModel",ytSchema)