import React from 'react'
import Index from '../components/HeroRole/Index'

const Beranda = () => {
  return (
    // Avaliable for work
    <div className="w-[90%] mx-auto p-10 mt-10 flex justify-between items-stars">
      <div className='space-y-5 flex-1'>
        <div className="bg-linear-to-r bg-white/5  border border-slate-500/15 inline-flex items-center  text-gray-500 font-normal text-2x1 rounded-full gap-2 px-5 py-2.5">
          🟢 Available for work
        </div>

        {/* Judul */}
        <h1 className='text-5xl font-bold max-w-sm text-white'>Hi, I'm <span className='bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-600'>Andika </span> <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-blue-500">
          Esda Saputra</span>
        </h1>
        <Index />
        <p className="text-lg max-w-lg  items-center text-slate-500">I craft modern, high-performance web and mobile applications with clean code and beautiful UI/UX — from React frontends to Laravel backends and Flutter apps.</p>
        <div className='flex items-center gap-5'>
          <button className="bg-linear-to-r text-lg from-blue-500 to-purple-600 cursor-pointer px-5 py-2.5 rounded-full text-white font-semibold">Download CV</button>
          <button className="bg-white/5 border-r-slate-500/15 text-lg cursor-pointer px-5 py-2.5 rounded-full text-white font-semibold">Contact Me</button>
        </div>
      </div>

      <div className=" w-full flex-1 h-150 ">
        <img className='w-full h-full object-center object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiSofqPowCSl_yfH1nsdAWPlfHapwqPuRGQu992tdmSz9KsowILCoSOyo&s=10" alt="" />
      </div>
    </div>
  )
}

export default Beranda