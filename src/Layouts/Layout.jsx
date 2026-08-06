
import Index from '../components/Navbar/Index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Index />
        
        <main className='bg-[#0f172a]'>
            <Outlet />
        </main>
    </>
  )
}

export default Layout