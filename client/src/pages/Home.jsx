import React from 'react'
import {motion} from "motion/react"

function Home() {
  return (
    <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
    <motion.div
    className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'>
    <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-lg font-semibold'>
            WebGen.ai

        </div>
        <div className='flex items-center gap-5'>
            <div className='hidden md-inline text-sm text-zinc-400 hover:text-white cursor-pointer'>
                Pricing
            </div>
            <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm'>
                Get Started
            </button>

        </div>
        </div>    

    </motion.div>
    
    </div>
  )
}

export default Home
