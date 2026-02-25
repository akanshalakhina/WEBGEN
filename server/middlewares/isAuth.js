import jwt from "jsonwebtoken"

const isAuth=async(req,res,next)=>{
    try{
        const token =req.cookies.token
        if(!token){
            return res.status(400).json({message:"Token not found"})
        }
       const decoded =  await jwt.verify(token,process.env.JWT_SECRET)
       req.user= await User.findByIdd(decoded.id)
       next()
    }catch(error){
        return res.status(500).json({message:"Invalid token"})
    }


} //server side middleware to check if user is authenticated before allowing access to certain routes