import React from 'react'
import Homepage from "../assets/Homepage.jpg";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.25" className='bg-[#CDEA68] rounded-3xl font-Neue'>
        <div className='w-'>
            <h1 className='text-[3.6vw] leading-[4vw] px-16 py-28 pb-14'>Ochi is a strategic partner for fast-growing tech<br>
            </br> businesses that need to raise funds, sell products,<br>
            </br> explain complex ideas, and hire great people.</h1>
        </div>
        <div className='border-t-[1px] flex gap-5 border-[#879944] px-16 pt-5 pb-14'>
            <div className='w-1/2'>
                <h1 className='text-[3.6vw]'>Our approach:</h1>
                <button className='bg-[#000000] text-white mt-2 px-8 py-6 flex items-center gap-12 rounded-full text-xl uppercase'>Read More<div className='w-3 h-3 bg-white rounded-full'></div></button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About