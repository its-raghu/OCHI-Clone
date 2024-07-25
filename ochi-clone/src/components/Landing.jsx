import React from 'react'

function Landing() {
  return (
    <div className='w-full h-screen bg-sky-100 pt-1'>
        <div className='mt-48 ml-16'>
            {["we create","eye-opening","presentations"].map((items,index)=>{
                return(
                    <div className='masker'>
                        <h1 className='text-[170px] uppercase font-Grotesk leading-[125px]'>{items}</h1>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Landing