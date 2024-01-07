const mongoose=require("mongoose")

const connectDB=async()=>{
   mongoose.connect('mongodb+srv://prashant:prashant@cluster0.uw5ggus.mongodb.net/?retryWrites=true&w=majority' ).then(()=>console.log("mongo connected"))
    
}


module.exports=connectDB