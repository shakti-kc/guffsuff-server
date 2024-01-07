const express=require("express")
const http=require("http")
const { Server } = require("socket.io");
const router=require("./router/apiRoute")
const connectDB=require("./db/conn")
const cors=require("cors");
const cookieParser = require("cookie-parser");
const app=express()
const server=http.createServer(app)
const PORT=4000
const io=new Server(server)
app.use(router)
app.use(cookieParser())
app.use(cors({
  origin: "https://gufsuff.netlify.app",
  credentials:true,
  methods: "GET,PUT,POST,PATCH,DELETE"
}))
//socket request
connectDB()
io.on('connection',(socket)=>{     //socket == client
  socket.emit("user_messege","Hello Js")
})






// http request
app.get('/',(req,res)=>{
    res.send("This is the home page from the backend server of GuffSuff")
})

server.listen(PORT,()=>{
    console.log("app started")
})