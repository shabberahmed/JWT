// import jwt from "jsonwebtoken"

// export const middleWare=(req,res,next)=>{
//     const header=req.headers['x-auth']
//     if(!header){
//         res.json({
//             message:"no token found"
//         })
       
//     }
//     try{
//         jwt.verify(header,process.env.ACCESS)
//         next()
        
//     }
//     catch(err){
//         res.json({
//             message:err
//         })
//     }
// }
import jwt from "jsonwebtoken";

export const middleWare = (req, res, next) => {
  const header = req.headers['x-auth'];
  if (!header) {
    return res.status(401).json({ message: "No token found" });
  }
  
  try {
    jwt.verify(header, process.env.ACCESS);
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
