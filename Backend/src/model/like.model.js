const mongoose=require("mongoose")

const likeSchema= mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:[true,"post Id is required for creating a like"]
    },
    user:{
        type:String,
        required:[true,"username is required"]
    },
},{
    timestamps:true
})

likeSchema.index({post:1, user:1},{unique:true})

const likeModel=mongoose.model("likes",likeSchema)

module.exports=likeModel