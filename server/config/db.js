import mongoose from "mongoose";

const dbconnect=async()=>{
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/TODO-Schema")
        console.log(`data base connected successfully ${mongoose.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
export default dbconnect