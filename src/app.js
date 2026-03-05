const express= require("express")
const cookieParser=require("cookie-parser")
const authRouter = require("./routes/auth.routes")
const postRouter=require("./routes/post.routes")

const app=express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)//jitne bhi hamare auth related routes hain usme prefix lg jyga 
app.use("/api/post",postRouter)
module.exports=app