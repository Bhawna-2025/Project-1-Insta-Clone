const express=require("express")
const postController = require("../controller/post.cotroller")
const multer=require("multer")
const identifyUser = require("../middleware/auth.middleware")
const postRouter=express.Router()

const upload=multer({storage:multer.memoryStorage()})

postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)
postRouter.get("/",identifyUser,postController.getPost)

postRouter.get("/details/:postId",identifyUser,postController.getPostDetails)

module.exports=postRouter