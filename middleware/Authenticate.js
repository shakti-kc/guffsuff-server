const jwt=require("jsonwebtoken")
const UserModel = require("../model/UserModel")

const Authenticate=async(req,res,next)=>{
    try{
let token=await req.cookies.jwtoken
if(token){
    const verifyToken= jwt.verify(token,process.env.SECRET)
    if(verifyToken){
        console.log("Token is verified")
        const rootUser=await UserModel.findOne({_id:verifyToken._id, "tokens.token":token})
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next()
    }else{
        console.log("TOken not verified")
    }
}
}catch(err){
    console.log(err)
    res.status(401).json({ error: "User not Found " });
}
}


module.exports=Authenticate