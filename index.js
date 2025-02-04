const express=require("express")
const mongoose=require("mongoose")
const userRoutes=require("./routes/userRoutes")
const taskRoutes=require("./routes/taskRoutes")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
app.use(express.json())

const PORT=process.env.PORT

app.use("/api",userRoutes)
app.use("/api",taskRoutes)

mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("DB Connected"))
        .catch(err=>console.error(err))

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`);
    
})        


