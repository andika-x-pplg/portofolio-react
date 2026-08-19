import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import clsx from 'clsx'

const Index = () => {
    const [isScroll, setScroll] = useState(false); 

    useEffect(() => {
    const onScroll = () => {
        const now = window.scrollY > 30;
        setScroll(prev => (prev === now ? prev : now));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={clsx('border rounded-full sticky top-10 left-0 w-[90%] max-w-5xl mx-auto z-100', isScroll ? 'bg-white/5 backdrop-blur-sm shadow-sm border-slate-500/15' : 'shadow-none bg-transparent border-transparent' )}>
            <nav className='w-[90%] flex items-center justify-between mx-auto py-2.5'>
            <div className="flex items-center gap-5" >
                <div className='h-10 w-10 flex items-center justify-center rounded-full bg-purple-950 text-zinc-100'>
                    AE
                </div>

                    <div className='flex justify-start text-zinc-100'>
                        Andhika Esda
                    </div>
                </div>

                <div className='text-zinc-100 space-x-5'>
                    <HashLink to={'/#hero'}>
                        Home
                    </HashLink>
                    <HashLink smooth to={'/#about'}>
                        About
                    </HashLink>
                    <HashLink smooth to={'/#skills'}>
                        Skills
                    </HashLink>
                    <HashLink smooth to={'/#projects'}>
                        Projects
                    </HashLink>
                    <HashLink smooth to={'/#experience'}>
                        Experience
                    </HashLink>
                    <HashLink smooth to={'/#contact'}>
                        Contact
                    </HashLink>
                </div>

                <HashLink smooth to={'/#contact'} className="bg-linear-to-r text-white font-semibold from-[#4e7ef5] to-[#875ff5]  rounded-full px-5 py-2.5 flex items-center">
                    Hire Me
                </HashLink>
            </nav>
        </header>
    )
}

export default Index