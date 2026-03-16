const express=require("express")
const identifyUser = require("../middleware/auth.middleware")
const userController=require("../controller/user.controller")
const userRouter=express.Router()

userRouter.post("/follow/:username",identifyUser,userController.followUserController)
userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController)
userRouter.post("/accept/:username",identifyUser,userController.followAcceptedController)
userRouter.post("/reject/:username",identifyUser,userController.followRejectedController)

module.exports=userRouter