// ==============================================================================
// HeroSection.tsx — Clean, Stylish Hero Landing Section
//
// Features:
// 1. Deep cosmic dark background (#060713) with soft ambient neon radial glows
// 2. Clean left column:
//    - "Available for Opportunities" status pill
//    - "Hi, I'm 👋" and gradient name "S Bhuvana Chandra"
//    - Typewriter subtitle for roles with glowing cursor
//    - Formatted bio with bold highlights
//    - 5 Social media icon buttons (LinkedIn, WhatsApp, Instagram, Facebook, GitHub)
//    - "View Resume" and "Let's Talk" CTA buttons
//    - Quick stats summary (Technologies, Projects, Graduate status)
// 3. Right column:
//    - Sleek circular profile portrait with subtle glowing orbital ring
//    - Floating tech pills (FastAPI, Python, React.js, Node.js)
//    - "CSE-AI Graduate" badge pill
// 4. Scroll down indicator button
// ==============================================================================

import React, { useState, useEffect } from 'react';
import {
  FileText, MessageSquare, ChevronDown, Sparkles
} from 'lucide-react';
import {
  FaLinkedinIn, FaWhatsapp, FaInstagram, FaFacebookF, FaGithub
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

// ── Dynamic Typewriter Roles ─────────────────────────────────────────────────
const roles = [
  'Python Full Stack Developer',
  'CSE-AI Graduate',
  'React.js & Frontend Developer',
  'FastAPI & Backend Engineer',
  'Problem Solver & Software Builder',
];

/** Custom hook for typewriter text effect */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting
      ? speed / 2
      : charIdx === current.length
      ? pause
      : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setCharIdx((i) => i + (deleting ? -1 : 1));
        setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// ── Hero Section Component ───────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const typed = useTypewriter(roles);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero-gradient"
      aria-label="Hero section"
    >
      {/* ── Soft Ambient Background Neon Lighting ── */}
      <div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[110px] opacity-15 bg-violet-600 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[110px] opacity-12 bg-pink-600 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full blur-[120px] opacity-10 bg-cyan-600 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">

          {/* ════════ LEFT COLUMN: TYPOGRAPHY, BIO & ACTIONS ════════ */}
          <div className="flex-1 text-center lg:text-left z-20">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/30 text-xs sm:text-sm font-semibold text-purple-300 mb-6 backdrop-blur-md shadow-lg shadow-purple-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Main Greeting & Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-2 tracking-tight">
              <span className="block text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-1 drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
                Hi, I'm
              </span>
              <span className="hero-name-gradient drop-shadow-[0_4px_30px_rgba(168,85,247,0.5)]">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typewriter Role Subtitle */}
            <div className="min-h-[42px] mb-5 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-200 tracking-tight flex items-center">
                <span>{typed}</span>
                <span className="inline-block w-1 h-7 bg-gradient-to-b from-purple-400 to-pink-500 align-middle ml-1.5 rounded-full animate-blink shadow-lg shadow-purple-500/80" />
              </p>
            </div>

            {/* Bio paragraph with highlighted keywords */}
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Computer Science & Engineering (<strong className="text-gray-200 font-semibold">Artificial Intelligence</strong>) student at{' '}
              <strong className="text-gray-200 font-semibold">Pragati Engineering College</strong>, specializing in scalable{' '}
              <strong className="text-gray-200 font-semibold">API development</strong> and full-stack web applications using{' '}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 font-bold">
                Python, React.js, FastAPI
              </strong>
              , and modern databases with clean, performant, and modern architecture.
            </p>

            {/* Social Media Links Row (5 Icon Buttons) */}
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 hover:border-purple-500 hover:bg-purple-500/15 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg shadow-purple-950/40 hover:-translate-y-1 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} className="group-hover:scale-115 transition-transform" />
              </a>
              <a
                href="https://wa.me/919491632168"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 hover:border-green-500 hover:bg-green-500/15 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg shadow-green-950/40 hover:-translate-y-1 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={19} className="group-hover:scale-115 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 hover:border-pink-500 hover:bg-pink-500/15 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg shadow-pink-950/40 hover:-translate-y-1 group"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="group-hover:scale-115 transition-transform" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 hover:border-blue-500 hover:bg-blue-500/15 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg shadow-blue-950/40 hover:-translate-y-1 group"
                aria-label="Facebook"
              >
                <FaFacebookF size={17} className="group-hover:scale-115 transition-transform" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900/90 border border-white/10 hover:border-white/60 hover:bg-white/10 hover:text-white flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg hover:-translate-y-1 group"
                aria-label="GitHub"
              >
                <FaGithub size={18} className="group-hover:scale-115 transition-transform" />
              </a>
            </div>

            {/* Action Buttons: View Resume & Let's Talk */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-purple-900/40 transition-all duration-300 hover:scale-105 active:scale-95 group"
                aria-label="View Resume"
              >
                <FileText size={18} className="group-hover:rotate-6 transition-transform" />
                View Resume
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 hover:border-purple-500/60 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl group"
                aria-label="Let's Talk"
              >
                <MessageSquare size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
                Let's Talk
              </button>
            </div>

            {/* Quick Stats Summary */}
            <div className="flex flex-wrap gap-7 mt-10 justify-center lg:justify-start">
              {[
                { val: '11+', label: 'Technologies' },
                { val: '15+', label: 'Projects' },
                { val: 'B.Tech', label: 'Graduate' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">{s.val}</div>
                  <div className="text-gray-400 text-xs font-semibold mt-0.5 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* ════════ RIGHT COLUMN: CLEAN CIRCULAR PROFILE PORTRAIT ════════ */}
          <div className="flex-1 flex justify-center items-center w-full z-20">
            <div className="relative flex items-center justify-center">

              {/* Glowing Background Radial Aura */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-cyan-500/20 blur-3xl scale-125 pointer-events-none"
                aria-hidden="true"
              />

              {/* Orbital Outer Ring with Subtle Orbital Nodes */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full border border-purple-500/25 flex items-center justify-center p-3 shadow-[0_0_50px_rgba(139,92,246,0.15)]">

                {/* Orbit Decorative Nodes */}
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <div className="absolute bottom-6 left-10 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
                <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
                <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />

                {/* Inner Gradient Border Ring */}
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-2xl">

                  {/* Profile Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-[#060713]">
                    <img
                      src={personalInfo.profilePhoto}
                      alt={`${personalInfo.name} — Profile Portrait`}
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
                    />

                    {/* Subtle Vignette Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                </div>

                {/* Bottom Badge Pill: CSE-AI Graduate */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-purple-500/40 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-2xl shadow-purple-950/80 whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles size={13} className="text-purple-400" />
                  <span>CSE-AI Graduate</span>
                </div>

              </div>

              {/* Floating Tech Stack Badges around Profile */}
              <div className="hidden sm:flex absolute -left-10 top-12 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-300 items-center gap-1.5 shadow-xl shadow-black/50 hover:border-purple-500/40 transition-colors">
                <span className="text-cyan-400 font-mono">&lt;</span>
                <span>React.js</span>
                <span className="text-cyan-400 font-mono">/&gt;</span>
              </div>

              <div className="hidden sm:flex absolute -left-12 bottom-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-300 items-center gap-1.5 shadow-xl shadow-black/50 hover:border-purple-500/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>FastAPI</span>
              </div>

              <div className="hidden sm:flex absolute -right-10 top-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-300 items-center gap-1.5 shadow-xl shadow-black/50 hover:border-purple-500/40 transition-colors">
                <span className="text-pink-400 font-mono">&lt;</span>
                <span>Node.js</span>
                <span className="text-pink-400 font-mono">/&gt;</span>
              </div>

              <div className="hidden sm:flex absolute -right-8 bottom-16 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-300 items-center gap-1.5 shadow-xl shadow-black/50 hover:border-purple-500/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Python</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10">
        <button
          onClick={() => scrollTo('about')}
          className="text-gray-500 hover:text-purple-400 transition-colors flex flex-col items-center gap-1"
          aria-label="Scroll to About"
        >
          <span className="text-[10px] text-gray-500 font-bold tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
