const userModel = require("../model/user.model")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken")

async function registerController(req, res){
    const { username, email, password, bio, profile_img } = req.body
    const isUserAlreadyExist = await userModel.findOne({
        $or: [{ username },   //jb es se zada check krna ho toh or operater use krte hain
        { email }
        ]
    })

    if (isUserAlreadyExist) {
        res.status(409).json({
            message: "user already exist" + (isUserAlreadyExist.email == email ? "email is already exit" : "username is already exist")
        })
    }
    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({
        username,
        email,
        bio,
        profile_img,
        password: hash

    })
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)
    res.status(201).json({
        message: "user rejistered successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profile_img: user.profile_img
        }
    })

}

async function loginController(req, res){
    const { username, email, password } = req.body
    /*hume do cheez bnani hain like user login kr paye ya toh username,password se  ya email password se*/

    const user = await userModel.findOne({
        $or: [
            {
                // condition1
                username:username
            },
            {
                //consition2
                email:email
            }
        ]
    })
    //agar user na mile toh
    if(!user){
        return res.status(409).json({
            message:"user does not exist"
        })
    }
    //agar user mil gya toh
    const isvalidpassword = await bcrypt.compare(password,user.password)
    if(!isvalidpassword){
        res.status(409).json({
            message:"password is incorrect"
        })
    }
    const token=jwt.sign(   {
        id:user._id
        },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)
    res.status(200).json({
        message:"user loggedin succesfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profile_img
        }
    })
}

module.exports={
    registerController,
    loginController
}
