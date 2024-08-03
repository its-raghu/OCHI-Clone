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
            <div className='w-full h-[38vw] bg-green-400 rounded-2xl'></div>
            {["audit","copyright","sales desk","slides design"].map((items, index)=>{
              return(
                <button>{items}</button>
              )
            })}
          </div>
          <div className='w-1/2'>
            <div className='flex gap-2 items-center pb-4 font-Neue text-lg'>
              <div className='bg-black w-3 h-3 rounded-full'></div>
              <p>VISE</p>
            </div>
            <div className='w-full h-[38vw] bg-green-400 rounded-2xl'></div>
          </div>
        </div>
        
      </div>
  )
}

export default Featured