const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    profile_img:{
        type:String,
        required:[true,"image required is required"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true,"user id is required for creating a post"]
    }
})

const postModel=mongoose.model("posts",postSchema)

module.exports=postModel