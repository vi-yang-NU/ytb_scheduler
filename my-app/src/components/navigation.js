import React, { useState } from 'react'
import homeIcon from './images/home_white.png'
import editIcon from './images/edit_white.png'
import chartIcon from './images/chart_white.png'
import bulbIcon from './images/bulb_white.png'
import kunai from './images/kunai.png'

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`bg-gray-900 text-white h-64 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-14'
      } relative z-10`}
      style={{
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '50px',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '50px'
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`flex items-center border-b border-gray-700 py-3 ${
          isExpanded ? 'justify-start px-4' : 'justify-center'
        }`}
      >
        {/* Logo - Only visible when collapsed */}
        {!isExpanded && (
          <div className='bg-indigo-500 rounded-full h-10 w-10 flex items-center justify-center'>
            <img src={kunai} alt='Kunai Icon' className='h-8 w-8' />
          </div>
        )}

        {/* Company Name - Only visible when expanded */}
        {isExpanded && (
          <span
            className={`text-2xl font-bold flex items-center justify-center whitespace-nowrap transition-all duration-300 h-10 ${
              isExpanded ? 'opacity-100' : 'opacity-0 w-0 hidden'
            }`}
          >
            Ninja Schedule
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className='mt-6'>
        <ul className='space-y-4'>
          {/* Home */}
          <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
            <img src={homeIcon} alt='Home Icon' className='h-6 w-6' />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
              }`}
            >
              Home
            </span>
          </li>

          {/* Edit Manager */}
          <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
            <img src={editIcon} alt='Edit Icon' className='h-6 w-6' />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
              }`}
            >
              Edit Manager
            </span>
          </li>

          {/* Analytics */}
          <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
            <img src={chartIcon} alt='Chart Icon' className='h-6 w-6' />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
              }`}
            >
              Analytics
            </span>
          </li>

          {/* Ideas */}
          <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
            <img src={bulbIcon} alt='Bulb Icon' className='h-6 w-6' />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
              }`}
            >
              Ideas
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
