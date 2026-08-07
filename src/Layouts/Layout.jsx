
import Index from '../components/Navbar/Index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen bg-[#0f172a]'>
        <Index />
        
        <main className="">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout