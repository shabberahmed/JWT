import mongoose from "mongoose";

 const con=async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("connected to mongoose"))
    .catch((err)=>console.log(err,"this is mongoose error"))
}
export default con