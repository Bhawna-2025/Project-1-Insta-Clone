const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
   image:{
        type:String,
        required:[true,"image required is required"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true,"user id is required for creating a post"]
    },
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }]
})

const postModel=mongoose.model("posts",postSchema)

module.exports=postModel