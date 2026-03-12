// const express=require("express")
const postModel=require("../model/post.model")
const ImageKit=require("@imagekit/nodejs")//imagekit package download krne ke baad 
const  { toFile }=require("@imagekit/nodejs")//imagekit package download krne ke baad 
const jwt =require("jsonwebtoken")

// below code is used to connect the server to oue imagekit account
const imagekit= new ImageKit({
    privateKey:process.env.IMAGE_PRIVATE_KEY  
})

async function createPostController(req,res){
    console.log(req.body,req.file)//from this line we will get caption
    console.log(req.user)

    //from below part we will get the image url
    const file=await imagekit.files.upload({ //file server se imagekit upload krne ka code hain ye 
        file:await toFile(Buffer.from(req.file.buffer),"file"),
        fileName:"Test",
        folder:"cohort-2-insta_clone"
    })
    //here we are creating post
    const post=await postModel.create({
        caption:req.body.caption,
        image:file.url,
        user:req.user,
        postId:req.body.postId
    })

    res.status(201).json({
        message:"post created successfully",
        post
    })

}

async function getPost(req,res){
    const Posts=await postModel.find({user:req.user})
    console.log(Posts)
    res.status(200).json({
        message:"post found successfully",
        Posts
    })

}

async function getPostDetails(req,res){
    const userId=req.user
    const postId=req.params.postId

    const post =await postModel.findById(postId)

    if(!post){ 
        return res.status(404).json({
            message:"post not found"
        })
    }
    const isValidPost= post.user.toString()===userId

    if(!isValidPost){
        return res.status(403).json({
            message:"forbidden content",
        })
    }

    res.status(200).json({
        message:"post founnd successfully",
        post
    })
}

module.exports={
    createPostController,
    getPost,
    getPostDetails
}
