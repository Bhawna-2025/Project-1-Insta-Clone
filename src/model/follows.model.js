const mongoose=require("mongoose")
const followSchema=new mongoose.Schema({
    follower:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:[true,"folllower is required"]
    },
    following:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:[true,"following in required"]
    }
},{timestamps:true})

const followModel=mongoose.model("model",followSchema)
module.exports=followModel