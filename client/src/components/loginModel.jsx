import React from 'react'
import {AnimatePresence, motion} from 'motion/react'
import {signInWithPopup} from "firebase/auth"
import {auth, provider} from "../firebase"
import axios from 'axios'
import {serverUrl} from "../App"
import{useDispatch} from "react-redux"
import { setUserData } from '../redux/userSlice'

function loginModel({open, onClose}) {
    const dispatch=useDispatch()
    const handleGoogleAuth=async ()=>{
        try{
            const result=await signInWithPopup(auth, provider)
            const {date}=await axios.post(`${serverUrl}/api/auth/google`,{
                name: result.user.displayName,
                email: result.user.email,
                avatar: result.user.photoURL,
            },{withCredentials:true})
            dispatch(setUserData(date))
        }catch(error){
            console.error("Error signing in with Google:", error)
        }

    }
  return (
    <AnimatePresence>
    {open && <motion.div
    className='fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    onClick={onClose}
    >
        <motion.div
        initial={{scale:0.88,y:60, opacity:0}}
        animate={{scale:1,y:0, opacity:1}}
        exit={{scale:0.9,y:40, opacity:0}}
        transition={{duration:0.45,ease: "easeOut"}}
        className='relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent onClick={(e)=>e.stopPropagation()}' //br means bottom to right
        >
        <div className='relative rounded-3xl bg-[#0bb0b] border border-white/10 shadow-[0_30px_rgba(0,0,0,0.8) overflow-hidden]'>
        <motion.div
        animate={{opacity:[0.25,0.4,0.25]}}
        transition={{duration:6, repeat:Infinity}}
        className='absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]'
        />

        <motion.div
         animate={{opacity:[0.2,0.35,0.2]}}
        transition={{duration:6, repeat:Infinity, delay:2}}
        className='absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/30 blur-[140px]'
        /> 
        <button
        className='absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg onClick={onClose}'>
            X
        </button> 
        <div className='relative px-8 pt-14 pb-10 text-center'>
            <h1 className='inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xl text-zinc-300'> AI-powered website builder</h1>
            <h2 className='text-3xl font-semibold leading-tight mb-3 spaxe-x-2'>
                <span>Welcome to </span>
                <span className='bg-linear-to-r from purple-400 to-blue-400 bg-clip-text text-transparent'>WebGen.ai</span>
            </h2>
            <motion.button
            whileHover={{scale:1.04}}
            whileTap={{scale:0.96}}
            onClick={handleGoogleAuth}
            className='group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden'    
            >
                <div className='relative justify-center flex items-center gap-3'>
                    <img src="https://imgs.search.brave.com/7YIRraoXsNDcAEjhGdNAp5rXySQ7DBFz0RmyL0fvmkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTkxMjAy/My5wbmc_Zj13ZWJw/Jnc9MTI4"
                    alt="">
                    Continue with Google
                </img>

                </div>
                
            </motion.button>
            <div className='flex items-center gap-4 my-10'>
                <div className='h-px flex-1 bg-white/10'/>
                <span className='text-xs text-zinc-500 tracking-wide'>Secure Login</span>
                <div className='h-px flex-1 bg-white/10'/>

            </div>
            <p className='text-xs text-zinc-500 to leading-relaxed'>
                By continuing, you agree to our{" "}
                <span className='underline cursor-pointer hover:text-zinc-300'>
                    Terms of Service
                </span>{" "}
                and{" "}
                <span className='underline cursor-pointer hover:text-zinc-300'>
                 Privacy Policy
                </span>.
            </p>

        </div>
        
        </div>

        </motion.div>
    </motion.div>}
    </AnimatePresence>
   
  )
}

export default loginModel
