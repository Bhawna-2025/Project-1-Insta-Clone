
const jwt=require("jsonwebtoken") 

 function identifyUser(req, res, next){
    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"token not found,unauthorized access"
        })
    }
    let decoded=null
    try{
         decoded = jwt.verify(token,process.env.JWT_SECRET)
        }catch(err){
            return res.status(401).json({
                message:"Unauthorized Access"
            })
        }
    console.log(decoded) 
    req.user=decoded.id
    req.username=decoded.username

    next()
}
module.exports=identifyUser