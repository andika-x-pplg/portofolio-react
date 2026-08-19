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

    // Handle navigation click
    const handleNavClick = (sectionId) => {
        setMenuOpen(false);
        
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 80; // Offset untuk navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

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
        <>
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
                        <button onClick={() => handleNavClick('hero')} className="hover:text-blue-400 transition cursor-pointer">
                            Home
                        </button>
                        <button onClick={() => handleNavClick('about')} className="hover:text-blue-400 transition cursor-pointer">
                            About
                        </button>
                        <button onClick={() => handleNavClick('skills')} className="hover:text-blue-400 transition cursor-pointer">
                            Skills
                        </button>
                        <button onClick={() => handleNavClick('projects')} className="hover:text-blue-400 transition cursor-pointer">
                            Projects
                        </button>
                        <button onClick={() => handleNavClick('experience')} className="hover:text-blue-400 transition cursor-pointer">
                            Experience
                        </button>
                        <button onClick={() => handleNavClick('contact')} className="hover:text-blue-400 transition cursor-pointer">
                            Contact
                        </button>
                    </div>

                    {/* Desktop Hire Me Button - Hidden on Mobile */}
                    <button 
                        onClick={() => handleNavClick('contact')}
                        className="hidden md:flex bg-gradient-to-r text-white font-semibold from-blue-500 to-purple-500 rounded-full px-4 md:px-5 py-2 md:py-2.5 items-center hover:scale-105 transition text-sm md:text-base cursor-pointer"
                    >
                        Hire Me
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-zinc-100 p-2 hover:text-blue-400 transition z-[60] relative"
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {isMenuOpen ? (
                            <HiX className="text-2xl" />
                        ) : (
                            <HiMenu className="text-2xl" />
                        )}
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay - Outside header for better z-index control */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[45] pointer-events-none">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                        onClick={() => setMenuOpen(false)}
                    />
                    
                    {/* Menu Container */}
                    <div className="absolute top-24 left-4 right-4 pointer-events-auto">
                        <div className="bg-slate-800/98 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="flex flex-col p-2">
                                <button 
                                    onClick={() => handleNavClick('hero')}
                                    className="text-zinc-100 hover:text-blue-400 active:text-blue-500 hover:bg-white/10 active:bg-white/20 px-5 py-4 rounded-xl transition text-base font-medium text-left w-full"
                                    type="button"
                                >
                                    Home
                                </button>
                                <button 
                                    onClick={() => handleNavClick('about')}
                                    className="text-zinc-100 hover:text-blue-400 active:text-blue-500 hover:bg-white/10 active:bg-white/20 px-5 py-4 rounded-xl transition text-base font-medium text-left w-full"
                                    type="button"
                                >
                                    About
                                </button>
                                <button 
                                    onClick={() => handleNavClick('skills')}
                                    className="text-zinc-100 hover:text-blue-400 active:text-blue-500 hover:bg-white/10 active:bg-white/20 px-5 py-4 rounded-xl transition text-base font-medium text-left w-full"
                                    type="button"
                                >
                                    Skills
                                </button>
                                <button 
                                    onClick={() => handleNavClick('projects')}
                                    className="text-zinc-100 hover:text-blue-400 active:text-blue-500 hover:bg-white/10 active:bg-white/20 px-5 py-4 rounded-xl transition text-base font-medium text-left w-full"
                                    type="button"
                                >
                                    Projects
                                </button>
                                <button 
                                    onClick={() => handleNavClick('experience')}
                                    className="text-zinc-100 hover:text-blue-400 active:text-blue-500 hover:bg-white/10 active:bg-white/20 px-5 py-4 rounded-xl transition text-base font-medium text-left w-full"
                                    type="button"
                                >
                                    Experience
                                </button>
                                <button 
                                    onClick={() => handleNavClick('contact')}
                                    className="text-zinc-100 hover:text-blue-400 active:text-blue-500 hover:bg-white/10 active:bg-white/20 px-5 py-4 rounded-xl transition text-base font-medium text-left w-full"
                                    type="button"
                                >
                                    Contact
                                </button>
                                
                                {/* Mobile Hire Me Button */}
                                <button 
                                    onClick={() => handleNavClick('contact')}
                                    className="bg-gradient-to-r text-white font-bold from-blue-500 to-purple-500 rounded-xl px-5 py-4 text-center hover:scale-[1.02] active:scale-95 transition mt-2 text-base w-full"
                                    type="button"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Index