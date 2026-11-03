// ==============================================================================
// HeroSection.tsx — Clean, Ultra-Stylish Animated Profile Hero Section
//
// Features:
// 1. Deep cosmic dark background (#060713) with soft ambient neon radial glows
// 2. Clean left column:
//    - "Available for Opportunities" status pill
//    - "Hi, I'm 👋" and single-line constant-color name "S Bhuvana Chandra"
//    - Typewriter subtitle for roles with glowing cursor
//    - Formatted bio with bold highlights
//    - 5 Social media icon buttons (LinkedIn, WhatsApp, Instagram, Facebook, GitHub)
//    - "View Resume" and "Let's Talk" CTA buttons
//    - Quick stats summary (Technologies, Projects, Graduate status)
// 3. Right column — Ultra-Stylish Clean Animated Profile Card:
//    - Rotating multi-color neon laser border beam (purple, pink, cyan)
//    - 3D interactive tilt on mouse hover
//    - Holographic shimmer scanline gliding across the portrait
//    - Interactive toggle switch between "✨ 3D Animated Avatar" and "📸 Real Photo"
//    - Unobstructed, clean portrait display (no floating badges on the picture)
// 4. Floating Cyber Tech Badges (2 on left screen margin, 2 on right screen margin):
//    - Left: "React.js & TypeScript", "Python & FastAPI"
//    - Right: "AI & Intelligent Systems", "15+ Real-world Projects"
// 5. Scroll down indicator button
// ==============================================================================

import React, { useState, useEffect, useRef } from 'react';
import {
  FileText, MessageSquare, ChevronDown, Sparkles,
  Camera, Wand2
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
  'Problem Solver & Tech Enthusiast',
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

// ── Stylish Animated Profile Avatar Card Component ───────────────────────────
const AnimatedProfileCard: React.FC = () => {
  // Toggle state: true = stylish 3D animated avatar, false = real photo
  const [useAnimatedAvatar, setUseAnimatedAvatar] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setTilt({
      x: (mouseX / (rect.width / 2)) * 8,
      y: -(mouseY / (rect.height / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const activePhoto = useAnimatedAvatar
    ? '/animated-avatar.jpg'
    : personalInfo.profilePhoto;

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-4">

      {/* ── Ambient Radial Glow behind the Card ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[440px] h-[380px] sm:h-[440px] rounded-full blur-[100px] opacity-30 bg-gradient-to-tr from-purple-600 via-pink-600 to-cyan-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Main 3D Interactive Card Container ── */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative transition-transform duration-300 ease-out"
        style={{
          perspective: 1000,
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        {/* Outer Rotating Multi-Color Neon Laser Border Beam */}
        <div className="relative p-[3px] rounded-[38px] sm:rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(139,92,246,0.3)] group">

          {/* Continuous Rotating Conic Laser Ribbon */}
          <div
            className="absolute -inset-[100%] animate-border-beam pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 15%, #a855f7 35%, #ec4899 55%, #06b6d4 75%, transparent 100%)',
            }}
          />

          {/* Inner Card Body with Dark Glassmorphism */}
          <div className="relative w-[285px] sm:w-[325px] md:w-[350px] h-[375px] sm:h-[420px] md:h-[445px] rounded-[35px] sm:rounded-[41px] overflow-hidden bg-gradient-to-b from-[#10142b] via-[#0b0e20] to-[#070914] border border-white/10 flex flex-col items-center justify-between p-4">

            {/* Top Bar with Live Status & Mode Switch */}
            <div className="w-full flex items-center justify-between z-10 pt-1 px-1">
              {/* Live Status Beacon */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider">
                  Active
                </span>
              </div>

              {/* Avatar Toggle Button (3D Animated <-> Real Photo) */}
              <button
                onClick={() => setUseAnimatedAvatar(!useAnimatedAvatar)}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-[10.5px] font-bold text-purple-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-950/40"
                title="Click to switch between 3D Animated Avatar and Real Photo"
              >
                {useAnimatedAvatar ? (
                  <>
                    <Camera size={12} className="text-pink-400" />
                    <span>Real Photo</span>
                  </>
                ) : (
                  <>
                    <Wand2 size={12} className="text-cyan-400" />
                    <span>3D Avatar</span>
                  </>
                )}
              </button>
            </div>

            {/* Profile Image Viewport (Clean, Uncluttered & Sharp) */}
            <div className="relative w-full flex-1 my-2 rounded-2xl overflow-hidden bg-slate-950/60 border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={activePhoto}
                alt="Bhuvana Chandra — Profile Avatar"
                className="w-full h-full object-cover object-[center_18%] transition-all duration-700"
              />

              {/* Holographic Shimmer Scanline */}
              <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none animate-holo-scanline" />

              {/* Bottom Subtle Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070914] via-transparent to-transparent pointer-events-none opacity-80" />
            </div>

            {/* Bottom Card Identity & Badge */}
            <div className="w-full z-10 flex flex-col items-center gap-1 pb-1">
              <div className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-yellow-400" />
                <span className="text-white font-extrabold text-sm sm:text-base tracking-tight">
                  Bhuvana Chandra
                </span>
              </div>
              <span className="text-[11px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
                CSE-AI Graduate
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Helper caption */}
      <p className="mt-4 text-[10.5px] font-bold text-gray-400 tracking-wide flex items-center gap-1.5">
        <Sparkles size={12} className="text-yellow-400" />
        Click top-right button to toggle Real Photo / 3D Avatar
      </p>
    </div>
  );
};

// ── Main Hero Section Component ──────────────────────────────────────────────
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
      {/* ── Soft Ambient Background Neon Lighting (Subtle, Clean & Identical across Mobile & Laptop) ── */}
      <div
        className="absolute top-1/4 left-1/4 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full blur-[100px] sm:blur-[120px] opacity-10 sm:opacity-15 bg-purple-600 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full blur-[100px] sm:blur-[120px] opacity-08 sm:opacity-12 bg-pink-600 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full blur-[100px] sm:blur-[120px] opacity-06 sm:opacity-10 bg-cyan-600 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Left Side Floating Badges (Floating top to bottom continuously) ── */}
      <div className="hidden lg:flex flex-col gap-8 absolute left-3 xl:left-8 top-1/4 z-20 pointer-events-none">
        <div className="pointer-events-auto px-4 py-2 rounded-2xl bg-slate-900/85 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-200 flex items-center gap-2.5 shadow-2xl shadow-black/80 hover:border-cyan-500/40 transition-all hover:scale-105 animate-float-down">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          <span>React.js & TypeScript</span>
        </div>
        <div
          className="pointer-events-auto px-4 py-2 rounded-2xl bg-slate-900/85 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-200 flex items-center gap-2.5 shadow-2xl shadow-black/80 hover:border-emerald-500/40 transition-all hover:scale-105 animate-float-up"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          <span>Python & FastAPI</span>
        </div>
      </div>

      {/* ── Right Side Floating Badges (Floating top to bottom continuously) ── */}
      <div className="hidden lg:flex flex-col gap-8 absolute right-3 xl:right-8 top-1/4 z-20 pointer-events-none">
        <div
          className="pointer-events-auto px-4 py-2 rounded-2xl bg-slate-900/85 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-200 flex items-center gap-2.5 shadow-2xl shadow-black/80 hover:border-pink-500/40 transition-all hover:scale-105 animate-float-up"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6]" />
          <span>AI & Intelligent Systems</span>
        </div>
        <div
          className="pointer-events-auto px-4 py-2 rounded-2xl bg-slate-900/85 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-200 flex items-center gap-2.5 shadow-2xl shadow-black/80 hover:border-purple-500/40 transition-all hover:scale-105 animate-float-down"
          style={{ animationDelay: '1.8s' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
          <span>15+ Real-world Projects</span>
        </div>
      </div>

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

            {/* Main Greeting & Name Heading (Single line with reduced responsive font size & premium Outfit font) */}
            <h1 className="leading-tight mb-2 tracking-tight">
              <span className="block text-gray-300 text-lg sm:text-xl md:text-2xl font-bold mb-1 drop-shadow-[0_2px_15px_rgba(255,255,255,0.15)]">
                Hi, I'm
              </span>
              <span className="hero-name-font hero-name-gradient text-3xl sm:text-4xl md:text-5xl font-extrabold whitespace-nowrap block drop-shadow-[0_2px_20px_rgba(168,85,247,0.35)]">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typewriter Role Subtitle (White text as requested) */}
            <div className="min-h-[34px] mb-5 flex items-center justify-center lg:justify-start">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-wide flex items-center drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
                <span>{typed}</span>
                <span className="inline-block w-0.5 h-5 bg-white align-middle ml-1.5 rounded-full animate-blink shadow-md shadow-white/80" />
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

          {/* ════════ RIGHT COLUMN: CLEAN ANIMATED PROFILE CARD (NO OVERLAPPING BADGES) ════════ */}
          <div className="flex-1 flex justify-center items-center w-full z-20">
            <AnimatedProfileCard />
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
