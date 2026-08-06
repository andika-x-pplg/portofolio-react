import { NavLink, Link } from 'react-router-dom'

const Index = () => {
    return (
        <header className='border-b border-l-slate-500/15 bg-black'>
            <nav className='w-[90%] flex items-center justify-between mx-auto py-5'>
            <div className="flex items-center gap-5" >
                <div className='h-10 w-10 flex items-center justify-center rounded-full bg-purple-950 text-zinc-100'>
                    AE
                </div>

                    <div className='flex justify-start text-zinc-100'>
                        Andhika Esda
                    </div>
                </div>

                <div className='text-zinc-100 space-x-5'>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                    <NavLink to={'/'}>
                        About
                    </NavLink>
                    <NavLink to={'/'}>
                        Skills
                    </NavLink>
                    <NavLink to={'/'}>
                        Projects
                    </NavLink>
                    <NavLink to={'/'}>
                        Experience
                    </NavLink>
                    <NavLink to={'/'}>
                        Contact
                    </NavLink>
                </div>

                <Link className="bg-linear-to-r text-white font-semibold from-[#4e7ef5] to-[#875ff5] text-xl rounded-full px-5 py-2.5 flex items-center">
                    Hire Me
                </Link>
            </nav>
        </header>
    )
}

export default Index