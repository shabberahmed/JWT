import mongoose from "mongoose";

const loginSchema=mongoose.Schema(
    {
        email:String,
        password:String
    }
)
export default mongoose.model("jsonwebtoken",loginSchema)