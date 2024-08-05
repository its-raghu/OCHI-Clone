import { motion } from "framer-motion"
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Landing() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.6" className='w-full h-screen pt-1'>
        <div className='mt-48 ml-16'>
            {["we create","eye-opening","presentations"].map((items,index)=>{
                return(
                    <div className='masker'>
                        <div className='flex items-baseline w-fit'>
                            {index === 1 && (<motion.p initial={{width:0}} animate={{width:"8.9vw"}} transition={{ease: [0.65, 0, 0.35, 1],duration : 1}} className='w-[8.9vw] h-[5.9vw] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKR9Qz5g-qUT_bdlIU4xOuJrv8VGfy1pKNw&s")] bg-cover rounded-lg mr-[0.9vw]'></motion.p>)}
                            <h1 className='text-[9vw] uppercase font-Grotesk leading-[6.7vw]'>{items}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='border-[#b2b2b2] border-t-[0.5px] mt-36 px-[68px] py-[20px] text-xl flex justify-between'>
            <p>For public and private companies</p>
            <p>From the first pitch to IPO</p>
            <div className='flex justify-end items-center gap-2'>
                <div className='uppercase py-[0.2vw] px-[0.7vw] border-[1px] text-md border-zinc-900 rounded-full'>Start the project</div>
                <div className='w-10 h-10 border-zinc-900 border-[1px] rounded-full flex justify-center items-center'><ArrowOutwardIcon /></div>
            </div>

        </div>
    </div> 
  )
}

export default Landing