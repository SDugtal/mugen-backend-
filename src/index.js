import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is ruuning at port : ${process.env.PORT}`)
    })

})
.catch((err)=>{
    console.log("MONGO db connntion faild !!",err)
})

/*
import express from "express";
const app=express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        app.on("error", (error)=>{
            console.log("not able to connect",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`APp is listing on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR : ",error)
    }
})()
*/