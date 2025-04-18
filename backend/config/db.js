import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://neehanpraveen:abcabc@cluster0.glvhugt.mongodb.net/bloomingdale').then(()=>console.log("db connected"));
}