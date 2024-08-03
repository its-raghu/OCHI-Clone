import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-16 gap-5 border-t-[1px] border-zinc-500'>
        <div className='w-1/2 h-[27vw] bg-[#004D43] rounded-2xl flex justify-center items-center relative'>
            <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 border-[1.2px] border-[#CDEA68] text-[#CDEA68] px-3 py-1 rounded-3xl'>&copy;2024</button>
        </div>
        <div className='w-1/4 h-[27vw] bg-[#212121] rounded-2xl flex justify-center items-center relative'>
            <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 border-[1.2px] border-[#CDEA68] text-[#CDEA68] px-3 py-1 rounded-3xl'>&copy;2024</button>
        </div>
        <div className='w-1/4 h-[27vw] bg-[#212121] rounded-2xl flex justify-center items-center relative'>
            <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 border-[1.2px] border-[#CDEA68] text-[#CDEA68] px-3 py-1 rounded-3xl'>&copy;2024</button>
        </div>
    </div>
  )
}

export default Cards