import React from 'react'
import {AnimatePresence, motion} from 'motion/react'

function loginModel({open, onClose}) {
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
        </div>
        
        </div>

        </motion.div>
    </motion.div>}
    </AnimatePresence>
   
  )
}

export default loginModel
