import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='bg-[#004d43] w-full py-32 m-0 rounded-t-3xl'>
      <div className='border-t-2 border-b-2 border-zinc-500 flex'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration: 8}} className='text-[27vw] uppercase -mb-[8vw] pr-12 -mt-[12vw] whitespace-nowrap font-Grotesk text-white'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration: 8}} className='text-[27vw] uppercase -mb-[8vw] pr-12 -mt-[12vw] whitespace-nowrap font-Grotesk text-white'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee