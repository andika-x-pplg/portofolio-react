import React from 'react'
import Index from '../components/HeroRole/Index'
import { FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Beranda = () => {
  return (
    <>
 // Hero
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

          {/* Icons */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-4xl text-white" />
            <FaTiktok className="text-4xl text-white" />
            <FaInstagram className="text-4xl text-white" />
            <MdEmail className="text-4xl text-white" />
          </div>
        </div>

        {/* Gambar */}
        <div className="w-full flex-1">
          <img
            className="h-150 w-full object-cover object-center"
            src="https://preview.redd.it/manga-end-theory-something-takemichi-can-do-to-save-everyone-v0-yyfrcoatja481.jpg?width=768&format=pjpg&auto=webp&s=1820f1c58ca82f43c21dcf225020587dda736fa8"
            alt=""
          />

          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-500/15 bg-white/5 px-5 py-2.5 text-sm font-normal text-gray-500">
            Samarinda, Indonesia
          </p>
        </div>
        </div>

        {/* Tentang */}
        <div className="mt-3 flex flex-1 flex-center gap-2 rounded-full border-slate-800/15 bg-white/5 px-5 py-2.5 text-2xl font-normal text-blue-900">
          About
        </div>
    </>
  )
}

export default Beranda