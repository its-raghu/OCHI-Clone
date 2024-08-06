import React from 'react'

function Featured() {
  return (
      <div data-scroll data-scroll-section data-scroll-speed="-0.01" className='w-full rounded-t-3xl'>
        <div className='px-14 pt-24 pb-7 font-Neue text-[3.5vw] border-b-[1px] border-zinc-500'>Featured projects</div>

        <div className='w-full h-screen flex gap-4 p-16'>
          <div className='w-1/2'>
            <div className='flex gap-2 items-center pb-4 font-Neue text-lg '>
              <div className='bg-black w-3 h-3 rounded-full'></div>
              <p>FYDE</p>
            </div>
            <div className='w-full h-[38vw] overflow-hidden rounded-2xl hover:scale-95 ease-in-out duration-700'>
              <div className='w-full h-[38vw] bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] bg-cover hover:scale-110 ease-in-out duration-700'></div>
            </div>
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
            <div className='w-full h-[38vw] rounded-2xl hover:scale-95 ease-in-out duration-1000 overflow-hidden'>
              <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")] bg-cover hover:scale-110 ease-in-out duration-700'></div>
            </div>
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
            <div className='w-full h-[38vw] bg-[#D8D8D8] rounded-2xl hover:scale-95 ease-in-out duration-1000 overflow-hidden'>
              <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")] bg-cover hover:scale-110 ease-in-out duration-700'></div>
            </div>
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
            <div className='w-full h-[38vw] bg-[#211F21] rounded-2xl hover:scale-95 ease-in-out duration-1000 overflow-hidden'>
              <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")] bg-cover hover:scale-110 ease-in-out duration-700'></div>
            </div>
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