const mongoose=require("mongoose")

const MessegeSchema=mongoose.Schema({
    messege:{
        type:String
    },
    conversationId:{
        type:String
    },
    sender:{
        type:String
    },
    mestype:{
        type:String
    }
},{
    timestamps:true
})

const MessegeModel=mongoose.model("Messege",MessegeSchema)

module.exports=MessegeModel