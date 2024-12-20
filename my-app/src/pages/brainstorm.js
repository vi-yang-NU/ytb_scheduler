import React from 'react'
import Navigation from '../components/Navigation.js'

const Brainstorm = () => {
  return (
    <div className='min-h-screen  bg-[#2E2850]'>
      <div className='grid grid-cols-10 gap-4 max-w-full mx-auto h-full'>
        <div className='col-span-1 h-full'>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Brainstorm
