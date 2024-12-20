import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dash_page' // Ensure these match your file structure
import Analytics from './pages/analytics'
import Brainstorm from './pages/brainstorm'
import Editor from './pages/editor'
import Scheduler from './pages/scheduler'
import Home from './pages/home'

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Track mouse movement for the custom cursor
  useEffect(() => {
    const handleMouseMove = event => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Router>
      <div className='min-h-screen bg-[#2E2850] cursor-none relative'>
        {/* Custom Circle Cursor */}
        <div
          className='fixed w-4 h-4 border-2 border-yellow-300 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100'
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        ></div>

        {/* Routes */}
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/brainstorm' element={<Brainstorm />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/scheduler' element={<Scheduler />} />
          <Route path='/product' element={<Home />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
