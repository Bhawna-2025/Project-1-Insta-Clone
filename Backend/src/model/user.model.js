const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type:String,
        unique:[true,"user name already exist"],
        required: [true,"user name is required"]
        },
    email:{
        type:String,
        unique:[true,"email already exist"],
        required:[true,"email is required"]
    },
    password: {
        type:String,
        required:[true,"email is required"],
        select:false //esse database by default password padhna bnd kr dega
    },
    bio: String,
    profile_img: {
        type:String,
        default:"https://ik.imagekit.io/fx7pfniyu/default%20user%20image.jpg"
        
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel