import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"


const app=express() 
const port=process.env.PORT || 5000
app.use(express.json()) //to parse json data from request body
app.use(cookieParser()) //to parse cookies from request header
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

//middlewares


app.listen(port, ()=>{
    console.log("Server is started")
    connectDB()
})
