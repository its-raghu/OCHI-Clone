import React from 'react'

function Eyes() {
  return (
    <div className='h-screen w-full'>
      <div className='h-screen w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover relative'>
        <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex gap-10'>
          <div className='bg-white w-[14vw] h-[14vw] rounded-full relative'>
            <div className='bg-black w-3/5 h-3/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='bg-white w-1/6 h-1/6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            </div>
          </div>
          <div className='bg-white w-[14vw] h-[14vw] rounded-full relative'>
            <div className='bg-black w-3/5 h-3/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='bg-white w-1/6 h-1/6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes