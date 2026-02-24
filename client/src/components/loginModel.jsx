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
        className='relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent' //br means bottom to right
        >
        <div className='relative rounded-3xl bg-[#0bb0b] border border-white/10 shadow-[0_30px_rgba(0,0,0,0.8) overflow-hidden]'>

        </div>

        </motion.div>
    </motion.div>}
    </AnimatePresence>
   
  )
}

export default loginModel
