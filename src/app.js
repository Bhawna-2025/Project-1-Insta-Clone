const express= require("express")
const cookieParser=require("cookie-parser")

const app=express()
app.use(express.json())
app.use(cookieParser())

/*reuired routes */
const authRouter = require("./routes/auth.routes")
const postRouter=require("./routes/post.routes")
const userRouter = require("./routes/user.routes")
const likeRouter =require("./routes/like.routes")

/*using routes */
app.use("/api/auth",authRouter)//uservali request
app.use("/api/post",postRouter)//post vali request
app.use("/api/user",userRouter)//follow vali request
app.use("/api/posts",likeRouter)//like vali request

module.exports=app