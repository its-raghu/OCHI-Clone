import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX
      let deltaY = mouseY

      const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      setRotate(angle)
    })
  })  

  return (
    <div className='h-screen w-full'>
      <div className='h-screen w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover relative'>
        <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex gap-10'>
          <div className='bg-white w-[13vw] h-[13vw] rounded-full relative'>
            <div className='bg-black w-3/5 h-3/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='bg-white w-7 h-7 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='bg-white w-[13vw] h-[13vw] rounded-full relative'>
            <div className='bg-black w-3/5 h-3/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            {/* <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='bg-white w-7 h-7 rounded-full'></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes