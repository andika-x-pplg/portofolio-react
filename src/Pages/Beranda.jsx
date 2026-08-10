import React from 'react'
import Index from '../components/HeroRole/Index'
import { FaGithub, FaTiktok, FaInstagram, FaCode } from "react-icons/fa";
import { MdEmail, MdOutlineRocketLaunch } from "react-icons/md";
import { LuSparkles, LuGraduationCap } from 'react-icons/lu';

const Beranda = () => {
  return (
    <>
 {/*  Hero */}
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

      {/* About */}
      <div className="mt-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-2 text-sm font-medium uppercase tracking-widest text-blue-500">
          About Me
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
          Passionate about
          <br />
          building great sofewaree
        </h2>

        {/* Container Card 1 + Card-card kecil */}
        <div className="flex w-full gap-6 items-start">

          {/* Card 1 */}
          <div className="mt-15 ml-8 w-1/3 rounded-2xl border border-slate-700 bg-slate-800 p-20 text-left">
            <p className="text-xl font-normal text-slate-400">
              I'am a{" "}
              <span className="font-bold text-white">
                Full Stack Web Developer
              </span>{" "}
              passionate about web and mobile development. I love turning complex
              problems into simple, beautiful, and intuitive applications.
            </p>

            <p className="mt-3 text-xl font-normal text-slate-400">
              I'm always learning new technologies and enjoy building modern
              applications with thoughtful UI/UX. Whether it's a Laravel-powered
              platform, a React web app, or a Flutter mobile experience — I care
              about the details that make products feel premium.
            </p>
          </div>

          {/* Card-card kecil */}
          <div className="grid flex-1 grid-cols-2 gap-6">

            {/* Card 2 */}
            <div className="mt-15 ml-5 rounded-2xl border border-slate-700 bg-slate-800 p-8 text-left">

             {/* Icons */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                <FaCode className="text-2xl text-blue-500" />
              </div>

              {/* Judul */}
              <p className="text-xl font-bold text-white">
                Full Stack Focus
              </p>

              {/* Deskripsi */}
              <p className="mt-3 text-xl font-normal text-slate-400">
                Comfortable across the stack — React & Tailwind on the front,
                Laravel & MySQL on the back.
              </p>
            </div>

            {/* Card 3 */}
            <div className="mt-15 rounded-2xl border border-slate-700 bg-slate-800 p-8 text-left">

              {/* Icons */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                <MdOutlineRocketLaunch className="text-2xl text-blue-500" />
              </div>

              {/* Judul */}
              <p className="text-xl font-bold text-white">
                Ship Fast
              </p>

              {/* Descripsi */}
              <p className="mt-3 text-xl font-normal text-slate-400">
                I turn ideas into polished, production-ready products with clean, maintainable code.
              </p>
            </div>

            {/* Card 4 */}
            <div className="ml-5 rounded-2xl border border-slate-700 bg-slate-800 p-8 text-left">

              {/* Icons */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                <LuSparkles className="text-2xl text-blue-500" />
              </div>

              {/* Judul */}
              <p className="text-xl font-bold text-white">
                UI / UX Driven
              </p>

              {/* Descripsi */}
              <p className="mt-3 text-xl font-normal text-slate-400">
                Obsessed with details, micro-interactions, and interfaces that feel effortless.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-left">

              {/* Icons */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                <LuGraduationCap className="text-2xl text-blue-500" />
              </div>

              {/* Judul */}
              <p className="text-xl font-bold text-white">
                Always Learning
              </p>

              <p className="mt-3 text-xl font-normal text-slate-400">
                Continuously exploring new technologies, patterns, and design systems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Beranda