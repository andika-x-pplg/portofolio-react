import React from 'react'
import Index from '../components/HeroRole/Index'
import { FaGithub, FaTiktok, FaInstagram, FaCode, FaReact, FaLaravel, FaFlutter, FaPhp, FaGit, FaHtml5, FaCss3, FaJava, FaVuejs } from "react-icons/fa";
import { MdEmail, MdOutlineRocketLaunch } from "react-icons/md";
import { LuSparkles, LuGraduationCap, LuPanelsTopLeft, LuServer, LuWrench, LuBriefcaseBusiness } from 'react-icons/lu';
import { CiMobile2 } from 'react-icons/ci';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiMysql, SiFirebase, SiTailwindcss } from 'react-icons/si';
import netubeImage from "../assets/gambar/netube.png";
import WarungNusantaraImage from "../assets/gambar/WarungNusantara.png";
import portofolioImage from "../assets//gambar/portofolio.png";

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
        <div className="flex w-full gap-6 pr-8 items-start">

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

              {/* Descripsi */}
              <p className="mt-3 text-xl font-normal text-slate-400">
                Continuously exploring new technologies, patterns, and design systems.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Skills */}
      <div className="mt-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          Skills
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
          My technical toolkit
        </h2>

        <p className="mt-3 text-xl font-normal text-slate-400">
          A curated set of technologies I use to design, build, and ship modern applications.
        </p>

        {/* Card Skills */}
        <div className="mt-16 grid w-full maxx-w-7xl grid-cols-4 gap-6 px-6">

          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-left">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5">
              <LuPanelsTopLeft className="text-2xl text-blue-500" />
            </div>


            <h3 className="text-2xl font-bold text-white">
              Frontend
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                HTML
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                CSS
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                JavaScript
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                React
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-left">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5">
              <LuServer className="text-2xl text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Backend
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                PHP
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Laravel
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Mysql
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-left">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5">
              <CiMobile2 className="text-2xl font-bold text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Mobile
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Flutter
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Firebase
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-left">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/5">
              <LuWrench className="text-2xl font-bold text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Tools
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Git
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                GitHub
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                VS Code
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Laragon
              </span>

              <span className="rounded-full border border-slate-600 bg-slate-700 px-4 py-2 text-sm text-slate-300">
                Figma
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mt-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          FEATURED PROJECTS
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
          Work I'm proud of
        </h2>

        <p className="mt-3 text-xl font-normal text-slate-400">
          A selection of real projects showcasing full-stack web and mobile development.
        </p>

        {/* Project Card */}
        <div className="mt-12 grid w-full grid-cols-2 gap-8 px-8">

          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 text-left overflow-hidden">

            {/* Gambar */}
            <div className="w-full">
              <img
                src={netubeImage}
                alt="Netube Application"
                className="h-80 w-full object-cover"
              />
            </div>

            {/* Isi Card */}
            <div className="p-8">

              <h3 className="text-2xl font-bold text-white">
                Netube Application
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Movie application developed with Flutter featuring authentication, Firebase
                integration, a responsive interface, and rich movie browsing features.
              </p>

              {/* Teach */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  Flutter
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  Firebase
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  Dart
                </span>
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 text-left overflow-hidden">

            {/* Gambar */}
            <div className="w-full">
              <img
                src={WarungNusantaraImage}
                alt="Warung Nusantara Web"
                className="h-80 w-full object-cover"
              />
            </div>

            {/* Isi Card */}
            <div className="p-8">

              <h3 className="text-2xl font-bold text-white">
                Warung Nusantara Web
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Modern food ordering website built with React featuring a shopping cart, dark mode,
                responsive design, local storage persistence, category filtering, and a clean UI.
              </p>

              {/* Teach */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  React
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  JavaScript
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  CSS
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  Local Storage
                </span>
              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 text-left overflow-hidden">

            {/* Gambar */}
            <div className="w-full">
              <img
                src={portofolioImage}
                alt="Portofolio"
                className="h-80 w-full object-cover"
              />
            </div>

            {/* Isi Card */}
            <div className="p-8">

              <h3 className="text-2xl font-bold text-white">
                Portofolio
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                An elegant, dynamic, and simple modern portfolio.
              </p>

              {/* Teach */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  React
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  Tailwind CSS
                </span>

                <span className="rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm text-blue-500">
                  JavaScript
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Journey */}
      <div className="mt-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          JOURNEY
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
          Experience & growth
        </h2>

        <p className="mt-3 text-xl font-normal text-slate-400">
          The path that shaped me as a developer.
        </p>


        {/* Timeline */}
        <div className="relative mt-16 w-full max-w-6xl">

          {/* Garis Tengah */}
          <div className="absolute left-1/2 top-0 h-full w-px translate-x-1/2 bg-blue-500">
          </div>


          {/* Timeline Item 1 - KIRI */}
          <div className="relative grid grid-cols-2">

            {/* Card kiri */}
            <div className="pr-12">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-right">

                {/* Badge + Tahun */}
                <div className="flex justify-end items-center gap-4">
                  <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                    Internship
                  </span>

                  <span className="text-slate-400">
                    2026
                  </span>
                </div>

                {/* Judul */}
                <h3 className="mt-5 text-2xl font-bold text-white">
                  Web Developer Internship
                </h3>

                {/* Perusahaan */}
                <p className="mt-1 text-lg text-blue-500">
                  APTMI
                </p>

                {/* Deskripsi */}
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  Built a production company profile platform with Laravel,
                  React, and Inertia.js. Implemented role-based access control
                  and a responsive admin dashboard used by the editorial team.
                </p>

              </div>
            </div>


            {/* Icon tengah */}
            <div className="absolute left-1/2 top-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-500">
              <LuBriefcaseBusiness className="text-xl text-white" />
            </div>

          </div>

          {/* Timeline Item 2 - Kanan */}
          <div className="relative mt-14 grid grid-cols-2">

            {/* Card Kanan */}
            <div className="col-start-2 pl-12">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-left">

                {/* Badge + Tahun */}
                <div className="flex items-center gap-4">
                  <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4  py-2 text-sm text-purple-400">
                    Projects
                  </span>

                  <span className="text-slate-400">
                    2025 - Present
                  </span>
                </div>

                {/* Judul */}
                <h3 className="mt-5 text-2xl font-bold text-white">
                  Freelance & Personal Projects
                </h3>

                {/* Keterangan */}
                <p className="mt-1 text-lg text-blue-500">
                  Self-directed
                </p>

                {/* Descripsi */}
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  Designed and shipped full-stack web and mobile apps —
                  from food ordering platforms to movie apps — focusing on
                  clean architecture, performance, and delightful UI/UX.
                </p>

              </div>
            </div>

            {/* Icons Tengah */}
            <div className="absolute left-1/2 top-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-500">
              <LuBriefcaseBusiness className="text-xl text-white" />
            </div>

          </div>

          {/* Timeline Item 3 - KIRI */}
          <div className="relative grid grid-cols-2">

            {/* Card kiri */}
            <div className="pr-12">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-right">

                {/* Badge + Tahun */}
                <div className="flex justify-end items-center gap-4">
                  <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                    Learning
                  </span>

                  <span className="text-slate-400">
                    2024
                  </span>
                </div>

                {/* Judul */}
                <h3 className="mt-5 text-2xl font-bold text-white">
                  Learning Journey
                </h3>

                {/* Perusahaan */}
                <p className="mt-1 text-lg text-blue-500">
                  Continuous Growth
                </p>

                {/* Deskripsi */}
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  Deepened expertise across the modern stack: React, Laravel, Flutter, and
                  Firebase. Constantly exploring new tools, patterns, and design systems.
                </p>

              </div>
            </div>


            {/* Icon tengah */}
            <div className="absolute left-1/2 top-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-500">
              <LuBriefcaseBusiness className="text-xl text-white" />
            </div>

          </div>

        </div>

      </div>

      {/* Stastics */}
      <div className="mt-20 w-full px-8">
        <div className="grid grid-cols-4 rounded-3xl border border-slate-700 bg-slate-800 px-10 py-12 text-center">

          {/* Start 1 */}
          <div>
            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              10+
            </h3>
            <p className="mt-3 text-lg text-slate-400">
              Projects Completed
            </p>
          </div>

          {/* Start 2 */}
          <div>
            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              15+
            </h3>
            <p className="mt-3 text-lg text-slate-400">
              Technologies Learned
            </p>
          </div>

          {/* Start 3 */}
          <div>
            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              1
            </h3>
            <p className="mt-3 text-lg text-slate-400">
              Certificates
            </p>
          </div>

          {/* Start 4 */}
          <div>
            <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              3+
            </h3>
            <p className="mt-3 text-lg text-slate-400">
              Years of Learning
            </p>
          </div>

        </div>
      </div>

      {/* TECH STACK */}
      <div className="mt-20 flex flex-col items-center text-center">
        
        {/* Badge */}
         <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          TECH STACK
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
         Technologies I work with
        </h2>

        {/* Tech Stack Cards */}
        <div className="mt-16 grid w-full grid-cols-5 gap-5 px-6">

          {/* React */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-800 transition hover:border-blue-500">
            <FaReact className="text-5xl text-cyan-400" />
            <p className="mt-4 text-base font-medium text-slate-400">
              React
            </p>
          </div>

          {/* Laravel */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaLaravel className="text-5xl text-red-500" />
            <p className="mt-4 text-base font-medium text-slate-400">
              Laravel
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Beranda