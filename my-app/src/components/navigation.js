import React, { useState } from 'react'
import homeIcon from './images/dash_white.png'
import editIcon from './images/edit_white.png'
import chartIcon from './images/chart_white.png'
import bulbIcon from './images/bulb_white.png'
import cloudIcon from './images/Brainstorm.png'
import kunai from './images/kunai.png'

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className='pl-6 pt-6 pb-6'
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`bg-gray-900 text-white h-72 transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-14'
        } relative z-10`}
        style={{
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '40px',
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '40px'
        }}
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
        {/* Invisible hover zone */}
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-300 ${
            isExpanded ? 'w-72' : 'w-24'
          }`}
          style={{
            zIndex: 0 // Ensure it's behind the navigation bar
          }}
        ></div>
        {/* Navigation */}
        <nav className='mt-3'>
          <ul className='space-y-4'>
            {/* Dashboard/ query and search*/}
            <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
              <img src={homeIcon} alt='Home Icon' className='h-6 w-6' />
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
                }`}
              >
                Dashboard
              </span>
            </li>

            {/* Ideas */}
            <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
              <img src={cloudIcon} alt='Bulb Icon' className='h-6 w-6' />
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
                }`}
              >
                Brainstorm
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
                Editor
              </span>
            </li>

            {/* Scheduler */}
            <li className='flex items-center px-4 hover:bg-gray-700 rounded-lg'>
              <img src={bulbIcon} alt='Bulb Icon' className='h-6 w-6' />
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  isExpanded ? 'opacity-100 ml-3' : 'opacity-0 w-0'
                }`}
              >
                Scheduler
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

          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
