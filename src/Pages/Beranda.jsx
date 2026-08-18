import React, { useState, useEffect } from 'react'
import Index from '../components/HeroRole/Index'
import { FaGithub, FaTiktok, FaInstagram, FaCode, FaReact, FaLaravel, FaPhp, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, } from "react-icons/fa";
import { MdEmail, MdOutlineRocketLaunch, MdLocationOn, MdKeyboardArrowUp } from "react-icons/md";
import { LuSparkles, LuGraduationCap, LuPanelsTopLeft, LuServer, LuWrench, LuBriefcaseBusiness, LuAward } from 'react-icons/lu';
import { CiMobile2 } from 'react-icons/ci';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiMysql, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { FaFlutter, FaGitlab } from 'react-icons/fa6';
import { IoLogoIonic } from 'react-icons/io';
import netubeImage from "../assets/gambar/netube.png";
import WarungNusantaraImage from "../assets/gambar/WarungNusantara.png";
import portofolioImage from "../assets//gambar/portofolio.png";
import andikaImage from "../assets/gambar/andika.png";
import 'animate.css'
import { useInView } from 'react-intersection-observer';

const Beranda = () => {
  // State untuk form contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  // Handler untuk perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields');
      return;
    }

    // Kirim email menggunakan mailto (alternative: bisa pakai EmailJS atau backend API)
    const mailtoLink = `mailto:andikaesdasaputra@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setFormStatus('Thank you! Your message has been sent.');
    
    // Clear status setelah 3 detik
    setTimeout(() => {
      setFormStatus('');
    }, 3000);
  };

  // Data social media links
  const socialLinks = {
    github: 'https://github.com/yourusername', // Ganti dengan username GitHub Anda
    tiktok: 'https://tiktok.com/@yourusername', // Ganti dengan username TikTok Anda
    instagram: 'https://instagram.com/yourusername', // Ganti dengan username Instagram Anda
    email: 'mailto:andikaesdasaputra@gmail.com'
  };

  // Small Stat component using requestAnimationFrame + useInView
  const Stat = ({ end, suffix = '', label }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!inView) return;
      let start = null;
      const duration = 1500;
      const from = 0;
      const to = Number(end) || 0;
      let rafId = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const current = Math.floor(progress * (to - from) + from);
        setValue(current);
        if (progress < 1) {
          rafId = window.requestAnimationFrame(step);
        } else {
          setValue(to);
        }
      };

      rafId = window.requestAnimationFrame(step);
      return () => {
        if (rafId) window.cancelAnimationFrame(rafId);
      };
    }, [inView, end]);

    return (
      <div ref={ref}>
        <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {value}{suffix}
        </h3>
        <p className="mt-3 text-lg text-slate-400">{label}</p>
      </div>
    );
  };

  return (
    <>
      {/*  Hero */}
      <div id="hero" className="w-[90%] mx-auto p-10 mt-10 flex justify-between items-stars">
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
            <a
              href="/CV_Andika_Esda_Saputra.pdf"
              download="CV_Andika_Esda_Saputra.pdf"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=andikaesdasaputra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-slate-500/15 bg-white/5 px-5 py-2.5 text-lg font-semibold text-white transition hover:bg-slate-400"
            >
              Contact Me
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-blue-500"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl text-white hover:text-blue-500 cursor-pointer" />
            </a>
            <a 
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-blue-500"
              aria-label="TikTok"
            >
              <FaTiktok className="text-4xl text-white hover:text-blue-500 cursor-pointer" />
            </a>
            <a 
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-blue-500"
              aria-label="Instagram"
            >
              <FaInstagram className="text-4xl text-white hover:text-blue-500 cursor-pointer" />
            </a>
            <a 
              href={socialLinks.email}
              className="transition hover:scale-110 hover:text-blue-500"
              aria-label="Email"
            >
              <MdEmail className="text-4xl text-white hover:text-blue-500 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="w-full flex-1">
          <img
            className="h-150 w-full object-cover object-center"
            src={andikaImage}
            alt=""
          />

          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-500/15 bg-white/5 px-5 py-2.5 text-sm font-normal text-gray-500">
            Samarinda, Indonesia
          </p>
        </div>
      </div>

      {/* About */}
      <div id="about" className="mt-20 flex flex-col items-center text-center ">

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
        <div className="flex w-full gap-6 pr-8 items-start animate__animated animate__fadeIn animate__faster">

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
      <div id="skills" className="mt-20 flex flex-col items-center text-center">

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
        <div className="mt-16 grid w-full maxx-w-7xl grid-cols-4 gap-6 px-6 animate__animated animate__fadeIn animate__faster">

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
      <div id="projects" className="mt-20 flex flex-col items-center text-center">

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
        <div className="mt-12 grid w-full grid-cols-2 gap-8 px-8 animate__animated animate__fadeIn animate__faster">

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
      <div id="experience" className="mt-20 flex flex-col items-center text-center">

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
          <Stat end={10} suffix="+" label="Projects Completed" />

          {/* Start 2 */}
          <Stat end={15} suffix="+" label="Technologies Learned" />

          {/* Start 3 */}
          <Stat end={1} label="Certificates" />

          {/* Start 4 */}
          <Stat end={3} suffix="+" label="Years of Learning" />

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
            <FaLaravel className='text-red-500 text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Laravel
            </p>
          </div>

          {/* Flutter */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaFlutter className='text-blue-500 text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Flutter
            </p>
          </div>

          {/* PHP */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaPhp className='text-[#777cb5] text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              PHP
            </p>
          </div>

          {/* JavaScript */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <BiLogoJavascript className='text-yellow-300 text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              JavaScript
            </p>
          </div>

          {/* MySql */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <SiMysql className='text-blue-500 text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              MySQL
            </p>
          </div>

          {/* Firebase */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <SiFirebase className='text-[#ffc929] text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Firebase
            </p>
          </div>

          {/* Git */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaGitAlt className='text-[#f04f32] text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Git
            </p>
          </div>

          {/* Github */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaGithub className='text-white text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Github
            </p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <SiTailwindcss className='text-cyan-500 text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Tailwind CSS
            </p>
          </div>

          {/* HTML */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaHtml5 className='text-[#e34c27] text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              HTML
            </p>
          </div>

          {/* CSS */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaCss3Alt className='text-[#274ce3] text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              CSS
            </p>
          </div>

          {/* Java */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaJava className='text-white text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Java
            </p>
          </div>

          {/* Gitlab */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <FaGitlab className='text-black text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Gitlab
            </p>
          </div>

          {/* Ionic */}
          <div className="flex h-36 flex-col items-center justify-center rounded-3xl border border-sltae-700 bg-slate-800 transition hover:border-blue-500">
            <IoLogoIonic className='text-cyan-500 text-5xl' />
            <p className="mt-4 text-base font-medium text-slate-400">
              Ionic
            </p>
          </div>
        </div>
      </div>


      {/* Achivements */}
      <div className="mt-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          Certificates
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
          Certifications & achievements
        </h2>

        <p className="mt-3 text-xl font-normal text-slate-400">
          Proof of continuous learning across the modern development stack.
        </p>

        {/* Certificate Card */}
        <div className="mt-16 w-full px-8">

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">

            {/* Bagian Atas */}
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <LuAward className="text-6xl text-blue-500" />
            </div>

            {/* Isi Card */}
            <div className="p-6 text-left">

              {/* Tahun */}
              <p className="text-sm font-medium text-purple-400">
                2024
              </p>

              {/* Nama Sertifikat */}
              <h3 className="mt-2 text-xl font-bold text-white">
                LearningX
              </h3>

              {/* Penerbit */}
              <p className="mt-2 text-base text-slate-400">
                LearningX Academy
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Kontak */}
      <div id="contact" className="mt-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/5 px-5 py-4 text-sm font-medium uppercase tracking-widest text-blue-500">
          CONTACT
        </div>

        {/* Judul */}
        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
          Let's build
          <br />
          something together
        </h2>

        <p className="mt-3 text-xl font-normal text-slate-400">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>


        {/* Contact Content */}
        <div className="mt-16 grid w-full grid-cols-2 gap-10 px-8">

          {/* ================= LEFT CARD ================= */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-10 text-left">

            {/* Judul */}
            <h3 className="text-2xl font-bold text-white">
              Get in touch
            </h3>

            {/* Deskripsi */}
            <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-400">
              Whether it's a freelance project, an internship, or a
              full-time role — I'd love to hear from you.
            </p>


            {/* Email */}
            <div className="mt-10 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                <MdEmail className="text-2xl text-blue-500" />
              </div>

              <span className="text-lg text-slate-400">
                andikaesdasaputra@gmail.com
              </span>

            </div>


            {/* Lokasi */}
            <div className="mt-5 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                <MdLocationOn className="text-2xl text-purple-400" />
              </div>

              <span className="text-lg text-slate-400">
                Samarinda, Indonesia
              </span>

            </div>


            {/* Social Media */}
            <div className="mt-16 flex items-center gap-4">

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-slate-400 hover:text-blue-500" />
              </a>


              {/* TikTok */}
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="TikTok"
              >
                <FaTiktok className="text-2xl text-slate-400 hover:text-blue-500" />
              </a>


              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-slate-400 hover:text-blue-500" />
              </a>

            </div>

          </div>


          {/* ================= RIGHT CARD ================= */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-10 text-left">

            <form onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label className="text-lg font-semibold text-white">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="mt-3 w-full rounded-full border border-slate-700 bg-slate-700/60 px-6 py-4 text-lg text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="text-lg font-semibold text-white">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@email.com"
                    required
                    className="mt-3 w-full rounded-full border border-slate-700 bg-slate-700/60 px-6 py-4 text-lg text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

              </div>


              {/* Message */}
              <div className="mt-7">

                <label className="text-lg font-semibold text-white">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="mt-3 w-full resize-none rounded-3xl border border-slate-700 bg-slate-700/60 px-6 py-5 text-lg text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

              </div>

              {/* Status Message */}
              {formStatus && (
                <div className={`mt-4 rounded-full px-6 py-3 text-center ${formStatus.includes('Thank') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {formStatus}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 text-lg font-semibold text-white transition hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20"
              >
                <MdOutlineRocketLaunch className="text-2xl" />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 px-8 pb-8">

        <div className="rounded-3xl border border-slate-700 bg-slate-800 p-10">

          {/* Bagian Atas */}
          <div className="grid grid-cols-3 items-start gap-10">

            {/* Profile */}
            <div>

              {/* Logo + Nama */}
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                  <span className="text-lg font-bold text-white">
                    AE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Andika Esda Saputra
                </h3>

              </div>

              {/* Deskripsi */}
              <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-400">
                Full Stack Web Developer crafting modern web
                <br />
                & mobile experiences.
              </p>

            </div>


            {/* Navigation */}
            <div className="flex justify-center">

              <nav className="flex items-center gap-8">

                <a
                  href="#hero"
                  className="text-lg text-slate-400 transition hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-lg text-slate-400 transition hover:text-white"
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="text-lg text-slate-400 transition hover:text-white"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="text-lg text-slate-400 transition hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#experience"
                  className="text-lg text-slate-400 transition hover:text-white"
                >
                  Experience
                </a>

                <a
                  href="#contact"
                  className="text-lg text-slate-400 transition hover:text-white"
                >
                  Contact
                </a>

              </nav>

            </div>


            {/* Social Media */}
            <div className="flex justify-end gap-4">

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-700/40 transition hover:border-blue-500 hover:bg-blue-500/10"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-slate-400 hover:text-blue-500" />
              </a>

              {/* TikTok */}
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-700/40 transition hover:border-blue-500 hover:bg-blue-500/10"
                aria-label="TikTok"
              >
                <FaTiktok className="text-2xl text-slate-400 hover:text-blue-500" />
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-700/40 transition hover:border-blue-500 hover:bg-blue-500/10"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-slate-400 hover:text-blue-500" />
              </a>

            </div>

          </div>


          {/* Garis */}
          <div className="my-10 h-px bg-slate-700"></div>


          {/* Bagian Bawah */}
          <div className="flex items-center justify-between">

            {/* Copyright */}
            <p className="text-lg text-slate-400">
              © 2026 Andika Esda Saputra. All rights reserved.
            </p>


            {/* Back To Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-700/40 px-6 py-3 text-base font-medium text-slate-400 transition hover:border-blue-500 hover:text-white"
            >
              Back to Top
              <MdKeyboardArrowUp className="text-xl" />
            </button>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Beranda