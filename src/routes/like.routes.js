const express=require("express")
const postController = require("../controller/post.cotroller")
const identifyUser = require("../middleware/auth.middleware")
const likeRouter = express.Router()

likeRouter.post("/like/:postId",identifyUser,postController.likePostController)


module.exports=likeRouter