// Profile.js
import React, { useState } from 'react'

const Profile = ({ userName }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className='relative w-12 h-12 rounded-lg bg-gray-500 overflow-hidden cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Circle */}
      <div className='absolute inset-0 flex items-center justify-center text-white font-bold'>
        {/* Initials or icon */}
        {userName.slice(0, 1).toUpperCase()}
      </div>

      {/* Expanded Section */}
      {isHovered && (
        <div className='absolute top-0 left-0 w-40 h-12 bg-gray-700 text-white text-sm flex items-center justify-start pl-4 rounded-full transition-all duration-300'>
          {userName}
        </div>
      )}
    </div>
  )
}

export default Profile
