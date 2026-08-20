import { useState, useEffect } from 'react'
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
import Reveal from '../components/Reveal/Reveal';
import HeroSparkles from '../components/HeroSparkles/HeroSparkles';
import { useTilt } from '../hooks/useTilt';
import { useMagnetic } from '../hooks/useMagnetic';

const Beranda = () => {
  // State untuk form contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  // 3D tilt bindings for interactive hover elements
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const { ref: dlRef, onMouseMove: dlOnMouseMove, onMouseLeave: dlOnMouseLeave, style: dlStyle } = useMagnetic({ strength: 0.3 });
  const { ref: cmRef, onMouseMove: cmOnMouseMove, onMouseLeave: cmOnMouseLeave, style: cmStyle } = useMagnetic({ strength: 0.3 });
  const { ref: smRef, onMouseMove: smOnMouseMove, onMouseLeave: smOnMouseLeave, style: smStyle } = useMagnetic({ strength: 0.2 });

  const { ref: skill1Ref, onMouseMove: skill1OnMouseMove, onMouseLeave: skill1OnMouseLeave, style: skill1Style } = useTilt({ max: 6, scale: 1.02 });
  const { ref: skill2Ref, onMouseMove: skill2OnMouseMove, onMouseLeave: skill2OnMouseLeave, style: skill2Style } = useTilt({ max: 6, scale: 1.02 });
  const { ref: skill3Ref, onMouseMove: skill3OnMouseMove, onMouseLeave: skill3OnMouseLeave, style: skill3Style } = useTilt({ max: 6, scale: 1.02 });
  const { ref: skill4Ref, onMouseMove: skill4OnMouseMove, onMouseLeave: skill4OnMouseLeave, style: skill4Style } = useTilt({ max: 6, scale: 1.02 });
  const { ref: certRef, onMouseMove: certOnMouseMove, onMouseLeave: certOnMouseLeave, style: certStyle } = useTilt({ max: 6, scale: 1.02 });

  const { ref: heroRef, onMouseMove: heroOnMouseMove, onMouseLeave: heroOnMouseLeave, style: heroStyle } = useTilt({ max: 6, scale: 1.02 });
  const { ref: project1Ref, onMouseMove: project1OnMouseMove, onMouseLeave: project1OnMouseLeave, style: project1Style } = useTilt({ max: 5, scale: 1.015 });
  const { ref: project2Ref, onMouseMove: project2OnMouseMove, onMouseLeave: project2OnMouseLeave, style: project2Style } = useTilt({ max: 5, scale: 1.015 });
  const { ref: project3Ref, onMouseMove: project3OnMouseMove, onMouseLeave: project3OnMouseLeave, style: project3Style } = useTilt({ max: 5, scale: 1.015 });

  // Handler untuk perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xnpaoren", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Thank you! Your message has been sent.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("Something went wrong. Please try again.");
    }
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
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400">
          {value}{suffix}
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg text-slate-400">{label}</p>
      </div>
    );
  };

  return (
    <>
      {/*  Hero */}
      <div id="hero" className="w-[90%] mx-auto p-4 md:p-8 lg:p-10 mt-6 md:mt-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className='space-y-3 md:space-y-4 flex-1 animate-slideInLeft text-center lg:text-left'>
          <div className="glitch-frame inline-flex items-center border border-slate-500/15 bg-white/5 text-gray-400 font-normal text-sm md:text-base rounded-full gap-2 px-4 py-2 md:px-5 md:py-2.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/35 animate-ping"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
            </span>
            Open for selected projects
          </div>

          {/* Judul - Ukuran diperkecil dan responsive */}
          <h1 className='glitch-text-subtle text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold max-w-lg text-white leading-tight'>
            Hi, I'm <span className='text-cyan-400'>Andika </span> 
            <span className="text-cyan-400">
            Esda Saputra</span>
          </h1>
          <Index />
          
          {/* Deskripsi - Ukuran diperkecil dan responsive */}
          <p className="text-sm md:text-base lg:text-base max-w-lg text-slate-500">
            I craft modern, high-performance web and mobile applications with clean code and beautiful UI/UX — from React frontends to Laravel backends and Flutter apps.
          </p>
          
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4'>
            <a
              ref={dlRef}
              onMouseMove={dlOnMouseMove}
              onMouseLeave={dlOnMouseLeave}
              style={dlStyle}
              href="/CV_Andika_Esda_Saputra.pdf"
              download="CV_Andika_Esda_Saputra.pdf"
              data-cursor="hover"
              data-cursor-text="Download"
              className="w-full sm:w-auto rounded-full bg-cyan-500 px-5 py-2.5 md:px-6 md:py-3 font-semibold text-white transition hover:bg-cyan-400 hover:scale-105 text-center text-sm md:text-base"
            >
              Download CV
            </a>
            <a
              ref={cmRef}
              onMouseMove={cmOnMouseMove}
              onMouseLeave={cmOnMouseLeave}
              style={cmStyle}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=andikaesdasaputra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="w-full sm:w-auto cursor-pointer rounded-full border border-slate-500/15 bg-white/5 px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-semibold text-white transition hover:bg-slate-400 text-center"
            >
              Contact Me
            </a>
          </div>

          {/* Icons - Responsive sizing */}
          <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/andika-x-pplg"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl md:text-3xl lg:text-3xl text-white hover:text-cyan-400 cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com/@dik9893"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-cyan-400"
              aria-label="TikTok"
            >
              <FaTiktok className="text-2xl md:text-3xl lg:text-3xl text-white hover:text-cyan-400 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/andika_esda_saputra?igsi=MWx4d291dncxdHVzeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-cyan-400"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl md:text-3xl lg:text-3xl text-white hover:text-cyan-400 cursor-pointer" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=andikaesdasaputra@gmail.com"
              className="transition hover:scale-110 hover:text-cyan-400"
              aria-label="Email"
            >
              <MdEmail className="text-2xl md:text-3xl lg:text-3xl text-white hover:text-cyan-400 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Gambar - Responsive dengan Aspect Ratio 1:1, interactive 3D tilt */}
        <div className="w-full flex-1 animate-slideInRight flex flex-col items-center">
          <div
            ref={heroRef}
            onMouseMove={heroOnMouseMove}
            onMouseLeave={heroOnMouseLeave}
            style={heroStyle}
            data-cursor="hover"
            data-cursor-text="Explore"
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-square rounded-2xl transform-3d"
          >
            <HeroSparkles />
            <div className="absolute inset-[8%] rounded-full border border-cyan-400/10 blur-[1px]" />
            <div className="absolute inset-[2%] rounded-[28px] bg-cyan-400/5 blur-2xl" />
            <img
              className="h-full w-full object-cover object-center rounded-2xl animate-float shadow-2xl ring-1 ring-white/10"
              src={andikaImage}
              alt="Andika Esda Saputra"
            />
            <div data-tilt-glare className="pointer-events-none absolute inset-0 rounded-2xl" />

            {/* Floating tech-stack pills orbiting the portrait */}
            <div className="hidden sm:flex absolute -top-5 -left-6 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1.5 shadow-lg animate-floatSlow">
              <FaReact className="text-cyan-400" />
              <span className="text-xs font-medium text-slate-300">React</span>
            </div>

            <div className="hidden sm:flex absolute -top-6 -right-7 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1.5 shadow-lg animate-floatMedium">
              <FaLaravel className="text-red-500" />
              <span className="text-xs font-medium text-slate-300">Laravel</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-5 -left-7 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1.5 shadow-lg animate-floatFast">
              <FaFlutter className="text-sky-500" />
              <span className="text-xs font-medium text-slate-300">Flutter</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1.5 shadow-lg animate-floatMedium">
              <BiLogoJavascript className="text-yellow-300" />
              <span className="text-xs font-medium text-slate-300">JavaScript</span>
            </div>
          </div>

          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-500/15 bg-white/5 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-normal text-gray-500">
            <MdLocationOn className="text-base md:text-lg" />
            Samarinda, Indonesia
          </p>
        </div>
      </div>

      {/* About */}
      <div id="about" className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-2 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
            About Me
          </div>

          {/* Judul */}
          <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Passionate about
            <br />
            building great software
          </h2>
        </Reveal>

        {/* Container Card 1 + Card-card kecil */}
        <div className="flex flex-col lg:flex-row w-full gap-4 md:gap-6 mt-12 md:mt-16 max-w-7xl animate-fadeIn delay-200">

          {/* Card 1 */}
          <div className="w-full lg:w-1/3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 lg:p-12 text-left hover:border-cyan-400/50 transition-all duration-300">
            <p className="text-base md:text-lg lg:text-xl font-normal text-slate-400">
              I'am a{" "}
              <span className="font-bold text-white">
                Full Stack Web Developer
              </span>{" "}
              passionate about web and mobile development. I love turning complex
              problems into simple, beautiful, and intuitive applications.
            </p>

            <p className="mt-3 text-base md:text-lg lg:text-xl font-normal text-slate-400">
              I'm always learning new technologies and enjoy building modern
              applications with thoughtful UI/UX. Whether it's a Laravel-powered
              platform, a React web app, or a Flutter mobile experience — I care
              about the details that make products feel premium.
            </p>
          </div>

          {/* Card-card kecil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-4 md:gap-6">

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">

              {/* Icons */}
              <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-cyan-400/20">
                <FaCode className="text-xl md:text-2xl text-cyan-400" />
              </div>

              {/* Judul */}
              <p className="text-lg md:text-xl font-bold text-white">
                Full Stack Focus
              </p>

              {/* Deskripsi */}
              <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg font-normal text-slate-400">
                Comfortable across the stack — React & Tailwind on the front,
                Laravel & MySQL on the back.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">

              {/* Icons */}
              <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-cyan-400/20">
                <MdOutlineRocketLaunch className="text-xl md:text-2xl text-cyan-400" />
              </div>

              {/* Judul */}
              <p className="text-lg md:text-xl font-bold text-white">
                Ship Fast
              </p>

              {/* Descripsi */}
              <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg font-normal text-slate-400">
                I turn ideas into polished, production-ready products with clean, maintainable code.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">

              {/* Icons */}
              <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-cyan-400/20">
                <LuSparkles className="text-xl md:text-2xl text-cyan-400" />
              </div>

              {/* Judul */}
              <p className="text-lg md:text-xl font-bold text-white">
                UI / UX Driven
              </p>

              {/* Descripsi */}
              <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg font-normal text-slate-400">
                Obsessed with details, micro-interactions, and interfaces that feel effortless.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 hover:scale-105 transition-all duration-300">

              {/* Icons */}
              <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-cyan-400/20">
                <LuGraduationCap className="text-xl md:text-2xl text-cyan-400" />
              </div>

              {/* Judul */}
              <p className="text-lg md:text-xl font-bold text-white">
                Always Learning
              </p>

              {/* Descripsi */}
              <p className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg font-normal text-slate-400">
                Continuously exploring new technologies, patterns, and design systems.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Skills */}
      <div id="skills" className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal axis="y">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
            Skills
          </div>

          {/* Judul */}
          <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            My technical toolkit
          </h2>
        </Reveal>

        <p className="mt-3 text-base md:text-lg lg:text-xl font-normal text-slate-400 animate-fadeIn delay-200">
          A curated set of technologies I use to design, build, and ship modern applications.
        </p>

        {/* Card Skills */}
        <div className="mt-12 md:mt-16 grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fadeIn delay-300">

          {/* Card 1 */}
          <div
            ref={skill1Ref}
            onMouseMove={skill1OnMouseMove}
            onMouseLeave={skill1OnMouseLeave}
            style={skill1Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 rounded-3xl" />
            <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/5">
              <LuPanelsTopLeft className="text-xl md:text-2xl text-cyan-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              Frontend
            </h3>

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                HTML
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                CSS
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                JavaScript
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                React
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={skill2Ref}
            onMouseMove={skill2OnMouseMove}
            onMouseLeave={skill2OnMouseLeave}
            style={skill2Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 rounded-3xl" />
            <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/5">
              <LuServer className="text-xl md:text-2xl text-cyan-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              Backend
            </h3>

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                PHP
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Laravel
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Mysql
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={skill3Ref}
            onMouseMove={skill3OnMouseMove}
            onMouseLeave={skill3OnMouseLeave}
            style={skill3Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 rounded-3xl" />
            <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/5">
              <CiMobile2 className="text-xl md:text-2xl font-bold text-cyan-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              Mobile
            </h3>

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Flutter
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Firebase
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={skill4Ref}
            onMouseMove={skill4OnMouseMove}
            onMouseLeave={skill4OnMouseLeave}
            style={skill4Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 rounded-3xl" />
            <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/5">
              <LuWrench className="text-xl md:text-2xl font-bold text-cyan-400" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              Tools
            </h3>

            <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Git
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                GitHub
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                VS Code
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Laragon
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300">
                Figma
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div id="projects" className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
            FEATURED PROJECTS
          </div>

          {/* Judul */}
          <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Work I'm proud of
          </h2>
        </Reveal>

        <p className="mt-3 text-base md:text-lg lg:text-xl font-normal text-slate-400 animate-fadeIn delay-200">
          A selection of real projects showcasing full-stack web and mobile development.
        </p>

        {/* Project Card */}
        <div className="mt-12 grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fadeIn delay-300">

          {/* Card 1 */}
          <div
            ref={project1Ref}
            onMouseMove={project1OnMouseMove}
            onMouseLeave={project1OnMouseLeave}
            style={project1Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-left overflow-hidden hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 z-10 rounded-3xl" />

            {/* Gambar + Hover Overlay */}
            <a
              href="https://github.com/andika-x-pplg/netube"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="View Code"
              className="group relative block w-full overflow-hidden"
            >
              <img
                src={netubeImage}
                alt="Netube Application"
                className="h-48 md:h-64 lg:h-80 w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                <div className="flex flex-col items-center gap-3 text-white transition-transform duration-300 group-hover:scale-100">
                  <FaGithub className="text-3xl md:text-4xl lg:text-5xl" />
                  <span className="text-base md:text-lg lg:text-xl font-semibold">
                    Netube Application
                  </span>
                </div>
              </div>
            </a>

            {/* Isi Card */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Netube Application
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                Movie application developed with Flutter featuring authentication, Firebase
                integration, a responsive interface, and rich movie browsing features.
              </p>

              {/* Teach */}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  Flutter
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  Firebase
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  Dart
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={project2Ref}
            onMouseMove={project2OnMouseMove}
            onMouseLeave={project2OnMouseLeave}
            style={project2Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-left overflow-hidden hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 z-10 rounded-3xl" />

            {/* Gambar + Hover Overlay */}
            <a
              href="https://github.com/andika-x-pplg/warung-nusantara"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="View Code"
              className="group relative block w-full overflow-hidden"
            >
              <img
                src={WarungNusantaraImage}
                alt="Warung Nusantara Web"
                className="h-48 md:h-64 lg:h-80 w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                <div className="flex flex-col items-center gap-3 text-white">
                  <FaGithub className="text-3xl md:text-4xl lg:text-5xl" />
                  <span className="text-base md:text-lg lg:text-xl font-semibold">
                    Warung Nusantara Web
                  </span>
                </div>
              </div>
            </a>

            {/* Isi Card */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Warung Nusantara Web
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                Modern food ordering website built with React featuring a shopping cart, dark mode,
                responsive design, local storage persistence, category filtering, and a clean UI.
              </p>

              {/* Teach */}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  React
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  JavaScript
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  CSS
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  Local Storage
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={project3Ref}
            onMouseMove={project3OnMouseMove}
            onMouseLeave={project3OnMouseLeave}
            style={project3Style}
            data-cursor="hover"
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-left overflow-hidden hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 z-10 rounded-3xl" />

            {/* Gambar + Hover Overlay */}
            <a
              href="https://github.com/andika-x-pplg/portofolio-react"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="View Code"
              className="group relative block w-full overflow-hidden"
            >
              <img
                src={portofolioImage}
                alt="Portofolio"
                className="h-48 md:h-64 lg:h-80 w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                <div className="flex flex-col items-center gap-3 text-white">
                  <FaGithub className="text-3xl md:text-4xl lg:text-5xl" />
                  <span className="text-base md:text-lg lg:text-xl font-semibold">
                    Portfolio
                  </span>
                </div>
              </div>
            </a>

            {/* Isi Card */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Portofolio
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                An elegant, dynamic, and simple modern portfolio.
              </p>

              {/* Teach */}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  React
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  Tailwind CSS
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Journey */}
      <div id="experience" className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal axis="y">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
            JOURNEY
          </div>

          {/* Judul */}
          <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Experience & growth
          </h2>
        </Reveal>

        <p className="mt-3 text-base md:text-lg lg:text-xl font-normal text-slate-400 animate-fadeIn delay-200">
          The path that shaped me as a developer.
        </p>


        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-12 md:mt-16 w-full max-w-6xl">

          {/* Garis Tengah - Hidden di mobile, animates drawing downward + traveling energy pulse */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden">
            <div className={`timeline-line h-full w-full bg-cyan-400/40 ${timelineInView ? 'is-visible' : ''}`} />
            {timelineInView && (
              <div className="timeline-pulse absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
            )}
          </div>


          {/* Timeline Item 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 mb-8 lg:mb-0">

            {/* Card */}
            <div className="lg:pr-12">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left lg:text-right hover:border-cyan-400/50 transition-all duration-300">

                {/* Badge + Tahun */}
                <div className="flex flex-col sm:flex-row justify-start lg:justify-end items-start sm:items-center gap-2 sm:gap-4">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-cyan-300">
                    Internship
                  </span>

                  <span className="text-sm md:text-base text-slate-400">
                    2026
                  </span>
                </div>

                {/* Judul */}
                <h3 className="mt-4 md:mt-5 text-lg md:text-xl lg:text-2xl font-bold text-white">
                  Web Developer Internship
                </h3>

                {/* Perusahaan */}
                <p className="mt-1 text-base md:text-lg text-cyan-400">
                  APTMI
                </p>

                {/* Deskripsi */}
                <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                  Built a production company profile platform with Laravel,
                  React, and Inertia.js. Implemented role-based access control
                  and a responsive admin dashboard used by the editorial team.
                </p>

              </div>
            </div>


            {/* Icon tengah - Hidden di mobile */}
            <div className="hidden lg:flex absolute left-1/2 top-5 h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-cyan-400 animate-ringPulse">
              <LuBriefcaseBusiness className="text-xl text-white" />
            </div>

            {/* Connector - Hidden di mobile */}
            <div
              style={{ transformOrigin: 'right' }}
              className={`hidden lg:block timeline-connector absolute right-1/2 top-9 h-px w-12 bg-cyan-400/50 ${timelineInView ? 'is-visible' : ''}`}
            />

          </div>

          {/* Timeline Item 2 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 my-8 lg:my-14">

            {/* Card */}
            <div className="lg:col-start-2 lg:pl-12">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left hover:border-cyan-400/50 transition-all duration-300">

                {/* Badge + Tahun */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-cyan-300">
                    Projects
                  </span>

                  <span className="text-sm md:text-base text-slate-400">
                    2025 - Present
                  </span>
                </div>

                {/* Judul */}
                <h3 className="mt-4 md:mt-5 text-lg md:text-xl lg:text-2xl font-bold text-white">
                  Freelance & Personal Projects
                </h3>

                {/* Keterangan */}
                <p className="mt-1 text-base md:text-lg text-cyan-400">
                  Self-directed
                </p>

                {/* Descripsi */}
                <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                  Designed and shipped full-stack web and mobile apps —
                  from food ordering platforms to movie apps — focusing on
                  clean architecture, performance, and delightful UI/UX.
                </p>

              </div>
            </div>

            {/* Icons Tengah - Hidden di mobile */}
            <div className="hidden lg:flex absolute left-1/2 top-5 h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-cyan-400 animate-ringPulse">
              <LuBriefcaseBusiness className="text-xl text-white" />
            </div>

            {/* Connector - Hidden di mobile */}
            <div className={`hidden lg:block timeline-connector absolute left-1/2 top-9 h-px w-12 bg-cyan-400/50 ${timelineInView ? 'is-visible' : ''}`} />

          </div>

          {/* Timeline Item 3 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">

            {/* Card */}
            <div className="lg:pr-12">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-left lg:text-right hover:border-cyan-400/50 transition-all duration-300">

                {/* Badge + Tahun */}
                <div className="flex flex-col sm:flex-row justify-start lg:justify-end items-start sm:items-center gap-2 sm:gap-4">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-cyan-300">
                    Learning
                  </span>

                  <span className="text-sm md:text-base text-slate-400">
                    2024
                  </span>
                </div>

                {/* Judul */}
                <h3 className="mt-4 md:mt-5 text-lg md:text-xl lg:text-2xl font-bold text-white">
                  Learning Journey
                </h3>

                {/* Perusahaan */}
                <p className="mt-1 text-base md:text-lg text-cyan-400">
                  Continuous Growth
                </p>

                {/* Deskripsi */}
                <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                  Deepened expertise across the modern stack: React, Laravel, Flutter, and
                  Firebase. Constantly exploring new tools, patterns, and design systems.
                </p>

              </div>
            </div>


            {/* Icon tengah - Hidden di mobile */}
            <div className="hidden lg:flex absolute left-1/2 top-5 h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-cyan-400 animate-ringPulse">
              <LuBriefcaseBusiness className="text-xl text-white" />
            </div>

            {/* Connector - Hidden di mobile */}
            <div
              style={{ transformOrigin: 'right' }}
              className={`hidden lg:block timeline-connector absolute right-1/2 top-9 h-px w-12 bg-cyan-400/50 ${timelineInView ? 'is-visible' : ''}`}
            />

          </div>

        </div>

      </div>

      {/* Stastics */}
      <div className="mt-16 md:mt-20 w-full px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 md:px-10 py-8 md:py-12 text-center gap-6 lg:gap-0 animate-fadeIn">

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
      <div className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal>
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
          TECH STACK
        </div>

        {/* Judul */}
        <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Technologies I work with
        </h2>
        </Reveal>

        {/* Tech Stack Cards */}
        <div className="mt-12 md:mt-16 grid w-full max-w-7xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 animate-fadeIn delay-200">

          {/* React */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
            <FaReact className="text-4xl md:text-5xl text-cyan-400" />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              React
            </p>
          </div>

          {/* Laravel */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-red-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
            <FaLaravel className='text-red-500 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Laravel
            </p>
          </div>

          {/* Flutter */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-sky-500 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20">
            <FaFlutter className='text-sky-500 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Flutter
            </p>
          </div>

          {/* PHP */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-[#777cb5] hover:scale-105 hover:shadow-lg hover:shadow-[#777cb5]/20">
            <FaPhp className='text-[#777cb5] text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              PHP
            </p>
          </div>

          {/* JavaScript */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300/20">
            <BiLogoJavascript className='text-yellow-300 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              JavaScript
            </p>
          </div>

          {/* MySql */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-sky-500 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20">
            <SiMysql className='text-sky-500 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              MySQL
            </p>
          </div>

          {/* Firebase */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-[#ffc929] hover:scale-105 hover:shadow-lg hover:shadow-[#ffc929]/20">
            <SiFirebase className='text-[#ffc929] text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Firebase
            </p>
          </div>

          {/* Git */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-[#f04f32] hover:scale-105 hover:shadow-lg hover:shadow-[#f04f32]/20">
            <FaGitAlt className='text-[#f04f32] text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Git
            </p>
          </div>

          {/* Github */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-white hover:scale-105 hover:shadow-lg hover:shadow-white/20">
            <FaGithub className='text-white text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Github
            </p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <SiTailwindcss className='text-cyan-500 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Tailwind CSS
            </p>
          </div>

          {/* HTML */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-[#e34c27] hover:scale-105 hover:shadow-lg hover:shadow-[#e34c27]/20">
            <FaHtml5 className='text-[#e34c27] text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              HTML
            </p>
          </div>

          {/* CSS */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-[#274ce3] hover:scale-105 hover:shadow-lg hover:shadow-[#274ce3]/20">
            <FaCss3Alt className='text-[#274ce3] text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              CSS
            </p>
          </div>

          {/* Java */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-white hover:scale-105 hover:shadow-lg hover:shadow-white/20">
            <FaJava className='text-white text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Java
            </p>
          </div>

          {/* Gitlab */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
            <FaGitlab className='text-orange-500 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Gitlab
            </p>
          </div>

          {/* Ionic */}
          <div className="flex h-28 md:h-32 lg:h-36 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <IoLogoIonic className='text-cyan-500 text-4xl md:text-5xl' />
            <p className="mt-3 md:mt-4 text-sm md:text-base font-medium text-slate-400">
              Ionic
            </p>
          </div>
        </div>
      </div>


      {/* Achivements */}
      <div className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal axis="y">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
            Certificates
          </div>

          {/* Judul */}
          <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Certifications & achievements
          </h2>
        </Reveal>

        <p className="mt-3 text-base md:text-lg lg:text-xl font-normal text-slate-400 animate-fadeIn delay-200">
          Proof of continuous learning across the modern development stack.
        </p>

        {/* Certificate Card */}
        <div className="mt-12 md:mt-16 w-full max-w-sm animate-fadeIn delay-300">

          <div
            ref={certRef}
            onMouseMove={certOnMouseMove}
            onMouseLeave={certOnMouseLeave}
            style={certStyle}
            data-cursor="hover"
            className="relative mx-auto w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-colors duration-300"
          >
            <div data-tilt-glare className="pointer-events-none absolute inset-0 z-10 rounded-3xl" />

            {/* Bagian Atas */}
            <div className="flex h-48 md:h-56 lg:h-64 items-center justify-center bg-slate-900">
              <LuAward className="text-5xl md:text-6xl text-cyan-400" />
            </div>

            {/* Isi Card */}
            <div className="p-5 md:p-6 text-left">

              {/* Tahun */}
              <p className="text-xs md:text-sm font-medium text-cyan-300">
                2024
              </p>

              {/* Nama Sertifikat */}
              <h3 className="mt-2 text-lg md:text-xl font-bold text-white">
                LearningX
              </h3>

              {/* Penerbit */}
              <p className="mt-2 text-sm md:text-base text-slate-400">
                LearningX Academy
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Kontak */}
      <div id="contact" className="mt-16 md:mt-20 flex flex-col items-center text-center px-4">

        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-widest text-cyan-400">
            CONTACT
          </div>

          {/* Judul */}
          <h2 className="mt-4 md:mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Let's build
            <br />
            something together
          </h2>
        </Reveal>

        <p className="mt-3 text-base md:text-lg lg:text-xl font-normal text-slate-400 animate-fadeIn delay-200">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>


        {/* Contact Content */}
        <div className="mt-12 md:mt-16 grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 animate-fadeIn delay-300">

          {/* ================= LEFT CARD ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 text-left hover:border-cyan-400/50 transition-all duration-300">

            {/* Judul */}
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Get in touch
            </h3>

            {/* Deskripsi */}
            <p className="mt-3 md:mt-4 max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
              Whether it's a freelance project, an internship, or a
              full-time role — I'd love to hear from you.
            </p>


            {/* Email */}
            <div className="mt-8 md:mt-10 flex items-center gap-3 md:gap-4">

              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-cyan-400/20">
                <MdEmail className="text-lg md:text-2xl text-cyan-400" />
              </div>

              <span className="text-sm md:text-base lg:text-lg text-slate-400 break-all">
                andikaesdasaputra@gmail.com
              </span>

            </div>


            {/* Lokasi */}
            <div className="mt-4 md:mt-5 flex items-center gap-3 md:gap-4">

              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-cyan-400/20">
                <MdLocationOn className="text-lg md:text-2xl text-cyan-300" />
              </div>

              <span className="text-sm md:text-base lg:text-lg text-slate-400">
                Samarinda, Indonesia
              </span>

            </div>


            {/* Social Media */}
            <div className="mt-12 md:mt-16 flex items-center gap-3 md:gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/andika-x-pplg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl md:text-2xl text-slate-400 hover:text-cyan-400" />
              </a>


              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dik9893"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl md:text-2xl text-slate-400 hover:text-cyan-400" />
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/andika_esda_saputra?igsi=MWx4d291dncxdHVzeA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl md:text-2xl text-slate-400 hover:text-cyan-400" />
              </a>

            </div>

          </div>


          {/* ================= RIGHT CARD ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 text-left hover:border-cyan-400/50 transition-all duration-300">

            <form onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                {/* Name */}
                <div>
                  <label className="text-base md:text-lg font-semibold text-white">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="mt-2 md:mt-3 w-full rounded-full border border-slate-700 bg-slate-700/60 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="text-base md:text-lg font-semibold text-white">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@email.com"
                    required
                    className="mt-2 md:mt-3 w-full rounded-full border border-slate-700 bg-slate-700/60 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

              </div>


              {/* Message */}
              <div className="mt-5 md:mt-7">

                <label className="text-base md:text-lg font-semibold text-white">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="mt-2 md:mt-3 w-full resize-none rounded-3xl border border-slate-700 bg-slate-700/60 px-4 md:px-6 py-4 md:py-5 text-sm md:text-base lg:text-lg text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />

              </div>

              {/* Status Message */}
              {formStatus && (
                <div className={`mt-4 rounded-full px-4 md:px-6 py-2 md:py-3 text-center text-sm md:text-base ${formStatus.includes('Thank') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {formStatus}
                </div>
              )}

              {/* Button */}
              <button
                ref={smRef}
                onMouseMove={smOnMouseMove}
                onMouseLeave={smOnMouseLeave}
                style={smStyle}
                type="submit"
                data-cursor="hover"
                data-cursor-text="Send"
                className="mt-6 md:mt-8 flex w-full items-center justify-center gap-2 md:gap-3 rounded-full bg-cyan-500 px-5 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold text-white transition hover:bg-cyan-400 hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <MdOutlineRocketLaunch className="text-lg md:text-2xl" />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 md:mt-20 px-4 md:px-8 pb-6 md:pb-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10">

          {/* Bagian Atas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-8 md:gap-10">

            {/* Profile */}
            <div>

              {/* Logo + Nama */}
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-cyan-500">
                  <span className="text-base md:text-lg font-bold text-white">
                    AE
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white">
                  Andika Esda Saputra
                </h3>

              </div>

              {/* Deskripsi */}
              <p className="mt-3 md:mt-4 max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
                Full Stack Web Developer crafting modern web & mobile experiences.
              </p>

            </div>


            {/* Navigation */}
            <div className="flex justify-start md:justify-center">

              <nav className="grid grid-cols-2 sm:flex sm:flex items-start sm:items-center gap-4 sm:gap-6 md:gap-8">

                <a
                  href="#hero"
                  className="text-sm md:text-base lg:text-lg text-slate-400 transition hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-sm md:text-base lg:text-lg text-slate-400 transition hover:text-white"
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="text-sm md:text-base lg:text-lg text-slate-400 transition hover:text-white"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="text-sm md:text-base lg:text-lg text-slate-400 transition hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#experience"
                  className="text-sm md:text-base lg:text-lg text-slate-400 transition hover:text-white"
                >
                  Experience
                </a>

                <a
                  href="#contact"
                  className="text-sm md:text-base lg:text-lg text-slate-400 transition hover:text-white"
                >
                  Contact
                </a>

              </nav>

            </div>


            {/* Social Media */}
            <div className="flex justify-start lg:justify-end gap-3 md:gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/andika-x-pplg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-700/40 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl md:text-2xl text-slate-400 hover:text-cyan-400" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dik9893"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-700/40 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl md:text-2xl text-slate-400 hover:text-cyan-400" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/andika_esda_saputra?igsi=MWx4d291dncxdHVzeA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-700/40 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl md:text-2xl text-slate-400 hover:text-cyan-400" />
              </a>

            </div>

          </div>


          {/* Garis */}
          <div className="my-6 md:my-10 h-px bg-slate-700"></div>


          {/* Bagian Bawah */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 text-center sm:text-left">
              © 2026 Andika Esda Saputra. All rights reserved.
            </p>


            {/* Back To Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-700/40 px-4 md:px-6 py-2 md:py-3 text-xs sm:text-sm md:text-base font-medium text-slate-400 transition hover:border-cyan-400 hover:text-white hover:scale-105"
            >
              Back to Top
              <MdKeyboardArrowUp className="text-lg md:text-xl" />
            </button>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Beranda