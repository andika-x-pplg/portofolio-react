import { useState } from 'react'
import Index from '../components/Navbar/Index'
import { Outlet } from 'react-router-dom'
import WebGLBackground from '../components/WebGLBackground/WebGLBackground'
import CustomCursor from '../components/CustomCursor/CustomCursor'
import EngineLoader from '../components/EngineLoader/EngineLoader'

const Layout = () => {
  const [booting, setBooting] = useState(() => {
    if (typeof window === 'undefined') return true
    return !sessionStorage.getItem('engine-started')
  })

  const handleBootDone = () => {
    sessionStorage.setItem('engine-started', '1')
    setBooting(false)
  }

  return (
    <div className='min-h-screen bg-[#0f172a] relative'>
      {booting && <EngineLoader onDone={handleBootDone} />}

      <WebGLBackground />
      <CustomCursor />

      <Index />

      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
