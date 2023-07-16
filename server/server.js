import Express  from "express";
import dotenv from "dotenv"
import  con  from "./database/con.js";
import route from "./routes/loginRoutes.js";
import cors from "cors"
const app=Express()
dotenv.config()
app.use(Express.json())
app.use(cors())
app.use(route)
con()
.then(()=>{
    app.listen(1010,()=>console.log("server started on port-NO:1010"))
})
.catch((err)=>console.log(err))