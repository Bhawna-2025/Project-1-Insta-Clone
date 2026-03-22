const express=require("express")
const postRouter=express.Router()
const postController = require("../controller/post.cotroller")
const multer=require("multer")
const upload=multer({storage:multer.memoryStorage()})
const identifyUser = require("../middleware/auth.middleware")

postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)
postRouter.get("/",identifyUser,postController.getPost)

postRouter.get("/details/:postId",identifyUser,postController.getPostDetails)

postRouter.get("/getFeed",identifyUser,postController.getFeedController)

module.exports=postRouter