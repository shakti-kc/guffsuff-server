const  jwt  = require("jsonwebtoken")
const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },tokens:[{
        token:{
            type:String,
            
        }
    }]

},{
    timestamps:true
}
)


UserSchema.methods.createAuthToken=async function(){
try{
    let token=jwt.sign({_id:this._id},process.env.SECRET)
    this.tokens=this.tokens.concat({token})
    await this.save()
    console.log("Token was added")
    return token
}catch(err){
    console.log("Unable to generate token", err)
}
}

const UserModel=mongoose.model("User",UserSchema)

module.exports=UserModel