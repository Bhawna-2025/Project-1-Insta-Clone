const express=require("express")
const postController = require("../controller/post.cotroller")
const multer=require("multer")
const postRouter=express.Router()

const upload=multer({storage:multer.memoryStorage()})

postRouter.post("/",upload.single("image"),postController.createPostController)

module.exports=postRouter