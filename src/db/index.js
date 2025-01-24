import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB= async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`\n MOngoDb connected DB host: $ {connectionInstance.connection.host} `);
       


    }catch(error){
        console.log("MONGODB connection faild",error);
        process.exit(1)
    }
}

export default connectDB