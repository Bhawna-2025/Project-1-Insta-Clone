const followModel = require("../model/follows.model")
const userModel=require("../model/user.model")

//for follow
async function followUserController(req, res) {
    const follower = req.username//jo follow karega jo logged in hain
    const followee = req.params.username//jisko follow kiya jyga

    //you can't follow yourself
    if (follower === followee) {
        return res.status(400).json({
            message: "you can't follow yourself"
        })
    }

    //check if that user exist or not in db whome you want to follow
    const isFolloweeExist = await userModel.findOne({ username: followee })
    console.log("user found:" , isFolloweeExist)
    if (!isFolloweeExist) {
       return  res.status(404).json({
            message: "whome you want to follow? there is no one present in db with this name!"
        })
    }

   //follower can follow the followee only one time
    const isAlreadyFollowed = await followModel.findOne({ follower, followee })
    if (isAlreadyFollowed) {
        return res.status(200).json({
            message: `you are already following ${followee}`,
            userFollowData: isAlreadyFollowed
        })
    }

    const userFollowData = await followModel.create({
        follower,
        followee,
        status:"pending"
    })

    res.status(200).json({
        message: `you are now following ${followee} `,
        userFollowData
    })
}

//for unfollow
async function unfollowUserController(req, res) {
    const follower = req.username//user2
    const followee = req.params.username//user1


    const isFollowDataExist = await followModel.findOneAndDelete({
        follower,
        followee
    })

    if (!isFollowDataExist) {
        return res.status(200).json({
            message: `you are already not following this ${followee}`
        })
    }


    return res.status(200).json({
        message: `${follower} successfully unfollowed ${followee}`
    })


}

//for accept follow
async function followAcceptedController(req,res){
    const followee = req.username
    const follower = req.params.username 

    const acceptReq = await followModel.findOne({
        followee,
        follower,
    }) 

    if(!acceptReq){
        return res.status(404).json({
            message:"request not found"
        })
    }

    acceptReq.status='accepted'
    
    await acceptReq.save()

    res.status(200).json({
        message:"Follow request is accepted.",
        acceptReq
    })
}

//for reject follow
async function followRejectedController(req,res){
     const followee = req.username
    const follower = req.params.username 

    const acceptReq = await followModel.findOne({
        followee,
        follower,
    }) 

    if(!acceptReq){
        return res.status(404).json({
            message:"request not found"
        })
    }

    acceptReq.status='rejected'
    
    await acceptReq.save()

    res.status(200).json({
        message:"Follow request is reject.",
        acceptReq
    })
}

module.exports = {
    followUserController,
    unfollowUserController,
    followAcceptedController,
    followRejectedController
}
