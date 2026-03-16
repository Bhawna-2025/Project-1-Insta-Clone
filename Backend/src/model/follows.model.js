const mongoose=require("mongoose")
const followSchema=new mongoose.Schema({
    follower:{
        type:String,
        required:[true,"folllower is required"]
    },
    followee:{
        type:String,
        required:[true,"following in required"]
    },
    status:{
        type:String,
        default:"pending",
        enum:{
            values:["pending","accepted","rejected"],
            message:"status can be pending, accepted or rejected"
        }
    }
},{timestamps:true})

followSchema.index({follower:1,followee:1},{unique:true})//schema/database level validation

const followModel=mongoose.model("follow",followSchema)
module.exports=followModel