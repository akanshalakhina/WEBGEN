import  jwt  from "jsonwebtoken"
import User from "../models/user.model.js"

export const googleAuth=async(req,res)=>{
    try{
        const{name,email,avatar}=req.body
        if(!email){
            return res.status(400).json({
                message:"email is required"
            })
        }
        const user=await User.findOne({email})
        if(!user){
            user=await User.create({name,email,avatar})
        }
        const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(200).json(user)
        //when we login or sign up token is generated and stored in cookies if its in cookies user doesnt have to again login it will automatically login
   
    }catch(error){
        return res.status(500).json({message:`google auth error ${error}`}) //500 is internal server error

    }

}
export const logout=async(req,res)=>{
    try{
        return res.clearCookie("token",{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            
        })

    } catch(error){
         return res.status(500).json({message:`log out error ${error}`}) //500 is internal server error

    }
}
