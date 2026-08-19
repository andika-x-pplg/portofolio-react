import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import clsx from 'clsx'
import { HiMenu, HiX } from 'react-icons/hi'

const Index = () => {
    const [isScroll, setScroll] = useState(false); 
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const onScroll = () => {
        const now = window.scrollY > 30;
        setScroll(prev => (prev === now ? prev : now));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu when clicking on a link
    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Handle smooth scroll manually for mobile
    const handleMobileClick = (e, targetId) => {
        e.preventDefault();
        closeMenu();
        
        // Wait for menu to close, then scroll
        setTimeout(() => {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className={clsx('border rounded-full sticky top-4 md:top-10 left-0 w-[95%] md:w-[90%] max-w-5xl mx-auto z-50', isScroll ? 'bg-white/5 backdrop-blur-sm shadow-sm border-slate-500/15' : 'shadow-none bg-transparent border-transparent' )}>
            <nav className='w-[90%] md:w-[90%] flex items-center justify-between mx-auto py-2 md:py-2.5'>
                {/* Logo & Name */}
                <div className="flex items-center gap-2 md:gap-3 lg:gap-5" >
                    <div className='h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm md:text-base font-bold'>
                        AE
                    </div>

                    <div className='flex justify-start text-zinc-100 text-sm md:text-base font-semibold'>
                        Andika Esda
                    </div>
                </div>

                {/* Desktop Menu - Hidden on Mobile */}
                <div className='hidden lg:flex text-zinc-100 space-x-4 xl:space-x-5 text-sm xl:text-base'>
                    <HashLink to={'/#hero'} className="hover:text-blue-400 transition">
                        Home
                    </HashLink>
                    <HashLink smooth to={'/#about'} className="hover:text-blue-400 transition">
                        About
                    </HashLink>
                    <HashLink smooth to={'/#skills'} className="hover:text-blue-400 transition">
                        Skills
                    </HashLink>
                    <HashLink smooth to={'/#projects'} className="hover:text-blue-400 transition">
                        Projects
                    </HashLink>
                    <HashLink smooth to={'/#experience'} className="hover:text-blue-400 transition">
                        Experience
                    </HashLink>
                    <HashLink smooth to={'/#contact'} className="hover:text-blue-400 transition">
                        Contact
                    </HashLink>
                </div>

                {/* Desktop Hire Me Button - Hidden on Mobile */}
                <HashLink 
                    smooth 
                    to={'/#contact'} 
                    className="hidden md:flex bg-gradient-to-r text-white font-semibold from-blue-500 to-purple-500 rounded-full px-4 md:px-5 py-2 md:py-2.5 items-center hover:scale-105 transition text-sm md:text-base"
                >
                    Hire Me
                </HashLink>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-zinc-100 p-2 hover:text-blue-400 transition z-50 relative"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <HiX className="text-2xl" />
                    ) : (
                        <HiMenu className="text-2xl" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-20 z-40">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeMenu}
                    ></div>
                    
                    {/* Menu Container */}
                    <div className="relative mx-4 mt-2 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                        <div className="flex flex-col p-4 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
                            <a 
                                href="#hero"
                                onClick={(e) => handleMobileClick(e, '#hero')}
                                className="text-zinc-100 hover:text-blue-400 hover:bg-white/5 px-4 py-3 rounded-lg transition text-sm font-medium"
                            >
                                Home
                            </a>
                            <a 
                                href="#about"
                                onClick={(e) => handleMobileClick(e, '#about')}
                                className="text-zinc-100 hover:text-blue-400 hover:bg-white/5 px-4 py-3 rounded-lg transition text-sm font-medium"
                            >
                                About
                            </a>
                            <a 
                                href="#skills"
                                onClick={(e) => handleMobileClick(e, '#skills')}
                                className="text-zinc-100 hover:text-blue-400 hover:bg-white/5 px-4 py-3 rounded-lg transition text-sm font-medium"
                            >
                                Skills
                            </a>
                            <a 
                                href="#projects"
                                onClick={(e) => handleMobileClick(e, '#projects')}
                                className="text-zinc-100 hover:text-blue-400 hover:bg-white/5 px-4 py-3 rounded-lg transition text-sm font-medium"
                            >
                                Projects
                            </a>
                            <a 
                                href="#experience"
                                onClick={(e) => handleMobileClick(e, '#experience')}
                                className="text-zinc-100 hover:text-blue-400 hover:bg-white/5 px-4 py-3 rounded-lg transition text-sm font-medium"
                            >
                                Experience
                            </a>
                            <a 
                                href="#contact"
                                onClick={(e) => handleMobileClick(e, '#contact')}
                                className="text-zinc-100 hover:text-blue-400 hover:bg-white/5 px-4 py-3 rounded-lg transition text-sm font-medium"
                            >
                                Contact
                            </a>
                            
                            {/* Mobile Hire Me Button */}
                            <a 
                                href="#contact"
                                onClick={(e) => handleMobileClick(e, '#contact')}
                                className="bg-gradient-to-r text-white font-semibold from-blue-500 to-purple-500 rounded-lg px-4 py-3 text-center hover:scale-[1.02] transition mt-2 text-sm"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Index