import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Landing />
      <Marquee />
    </div>
  )
}

export default App