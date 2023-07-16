import jwt from "jsonwebtoken";
import loginModel from "../models/loginModel.js";
import bcrypt from "bcrypt"
export const postSingUp=async(req,res)=>{
    const{email,password}=req.body;
    const hasdpassword=bcrypt.hashSync(password,12)
    try{
        const user=await new loginModel({
            email:email,
            password:hasdpassword
        })
        await user.save()
        res.json({
            message:"data sent"
        })
    }
    catch(err){
        res.json({
            message:err
        })
    }
}
export const loginController=async(req,res)=>{
const {email,password}=req.body;
try{
    const checkEmail=await loginModel.findOne({email})
    if(!checkEmail){
        res.json({
            message:"email not found in our data base "
        })
    }
    else{
        const checkPassword=await bcrypt.compareSync(password,checkEmail.password)
        const token=jwt.sign({email},process.env.ACCESS,{expiresIn:'1m'})
        if(checkPassword){
            res.json({
                message:"successful login",
                token:token
            })
        }
        else{
            res.json({
                message:"wrong password"
            })
        }
    }
}
catch(err){
    res.json({
        message:err
    })
}
}
export const myData=async(req,res)=>{
    try{
        const data=await loginModel.find()

    //   res.status(200).json({
    //       data:data
    //     })
    res.send(JSON.stringify({
        data: data
      }));
      
    }
    catch(err){
        res.json({
            err
        })
    }
    
}