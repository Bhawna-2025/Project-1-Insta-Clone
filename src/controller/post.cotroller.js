const express=require("express")
const postModel=("../model/post.model.js")
const ImageKit=require("@imagekit/nodejs")//imagekit package download krne ke baad 
const  { toFile }=require("@imagekit/nodejs")//imagekit package download krne ke baad 

const imagekit= new ImageKit({
    privateKey:process.env.IMAGE_PRIVATE_KEY
})


async function createPostController(req,res){
    console.log(req.body,req.file)

    const file=await imagekit.files.upload({ //file server se imagekit upload krne ka code hain ye 
        file:await toFile(Buffer.from(req.file.buffer),"file"),
        fileName:"Test"
    })
    res.send(file)

}

module.exports={
    createPostController
}