import React from 'react'

function Featured() {
  return (
      <div className='w-full bg-white rounded-3xl'>
        <div className='px-14 pt-24 pb-7 font-Neue text-[3.5vw] border-b-[1px] border-zinc-500'>Featured projects</div>
        <div className='w-full h-screen flex gap-4 p-16'>
          <div className='w-1/2'>
            <div className='flex gap-2 items-center pb-4 font-Neue text-lg'>
              <div className='bg-black w-3 h-3 rounded-full'></div>
              <p>FYDE</p>
            </div>
            <div className='w-full h-[38vw] bg-[#C4C4C5] rounded-2xl'></div>
            {["audit","copywriting","sales desk","slides design"].map((items, index)=>{
              return(
                <button className='border-[1px] border-gray-500 px-3 py-1 mr-3 mt-4 uppercase font-Neue text-xl rounded-full'>{items}</button>
              )
            })}
          </div>
          <div className='w-1/2'>
            <div className='flex gap-2 items-center pb-4 font-Neue text-lg'>
              <div className='bg-black w-3 h-3 rounded-full'></div>
              <p>VISE</p>
            </div>
            <div className='w-full h-[38vw] bg-[#19181E] rounded-2xl'></div>
            {["agency","company preparations"].map((items, index)=>{
              return(
                <button className='border-[1px] border-gray-500 px-3 py-1 mr-3 mt-4 uppercase font-Neue text-xl rounded-full'>{items}</button>
              )
            })}
          </div>
        </div>
        <div className='w-full h-screen flex gap-4 p-16'>
          <div className='w-1/2'>
            <div className='flex gap-2 items-center pb-4 font-Neue text-lg'>
              <div className='bg-black w-3 h-3 rounded-full'></div>
              <p>TRAWA</p>
            </div>
            <div className='w-full h-[38vw] bg-[#D8D8D8] rounded-2xl'></div>
            {["brand identity","design research","investor deck"].map((items, index)=>{
              return(
                <button className='border-[1px] border-gray-500 px-3 py-1 mr-3 mt-4 uppercase font-Neue text-xl rounded-full'>{items}</button>
              )
            })}
          </div>
          <div className='w-1/2'>
            <div className='flex gap-2 items-center pb-4 font-Neue text-lg'>
              <div className='bg-black w-3 h-3 rounded-full'></div>
              <p>PREMIUM BLEND</p>
            </div>
            <div className='w-full h-[38vw] bg-[#211F21] rounded-2xl'></div>
            {["branded template"].map((items, index)=>{
              return(
                <button className='border-[1px] border-gray-500 px-3 py-1 mr-3 mt-4 uppercase font-Neue text-xl rounded-full'>{items}</button>
              )
            })}
          </div>
        </div>
        
      </div>
  )
}

export default Featured