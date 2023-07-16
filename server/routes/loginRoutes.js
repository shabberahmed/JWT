import { Router } from "express";
import { loginController, myData, postSingUp } from "../controllers/mianContollers.js";
import { middleWare } from "../middlewares/middleware.js";

const route=Router()
route.post("/signup",postSingUp)
route.post("/login",loginController)
route.get("/data",middleWare,myData)
export default route;