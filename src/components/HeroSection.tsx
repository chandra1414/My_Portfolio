import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  FileText, MessageSquare, ChevronDown,
  Code2, Cpu, Globe, Sparkles, Brain
} from 'lucide-react';
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

// ── Typing animation roles ───────────────────────────────────────────────────
const roles = [
  'Python Full Stack Developer',
  'CSE-AI Graduate',
  'React.js & Frontend Developer',
  'FastAPI & Backend Engineer',
  'Problem Solver & Software Builder',
];

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

// ── Crazy 3D Interactive Particle Galaxy Canvas ──────────────────────────────
interface Point3D {
  x: number;
  y: number;
  z: number;
  r: number;
  color: string;
}

const ParticleGalaxy3D: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Create 3D sphere / galaxy points
    const COUNT = 110;
    const points: Point3D[] = [];
    const colors = ['#38bdf8', '#818cf8', '#c084fc', '#f472b6', '#34d399'];

    for (let i = 0; i < COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 220 + Math.random() * 280;

      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        r: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rafId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation interaction
      targetRotY += 0.0025 + mousePos.x * 0.0003;
      targetRotX = mousePos.y * 0.0004;

      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const fov = 450;
      const centerX = width * 0.65; // Anchored slightly towards the right 3D hero avatar
      const centerY = height * 0.48;

      const projected: { px: number; py: number; pz: number; r: number; color: string; scale: number }[] = [];

      // 3D rotation matrix calculation
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const depth = z2 + 500;
        if (depth > 10) {
          const scale = fov / depth;
          const px = x1 * scale + centerX;
          const py = y2 * scale + centerY;

          projected.push({
            px,
            py,
            pz: z2,
            r: p.r * scale,
            color: p.color,
            scale,
          });
        }
      }

      // Draw 3D connecting neural cyber lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.15, Math.min(0.9, (p.pz + 300) / 600));

        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(0.5, p.r), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12 * p.scale;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

// ── 3D Levitating Tech Hologram Badge ────────────────────────────────────────
interface HoloBadgeProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
  position: string;
  tilt: { x: number; y: number };
  depth: number;
}

const HoloBadge: React.FC<HoloBadgeProps> = ({ icon, label, sub, position, tilt, depth }) => {
  return (
    <div
      className={`hidden xl:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-purple-950/50 absolute transition-transform duration-150 ease-out select-none pointer-events-none ${position}`}
      style={{
        transform: `translate3d(${tilt.x * depth * 0.08}px, ${tilt.y * depth * 0.08}px, ${depth}px) rotateX(${tilt.y * 0.08}deg) rotateY(${tilt.x * -0.08}deg)`,
      }}
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-white tracking-wide">{label}</div>
        <div className="text-[10px] font-semibold text-purple-300/80 uppercase tracking-wider">{sub}</div>
      </div>
      {/* Edge glow */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </div>
  );
};

// ── Main Hero Section ───────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const typed = useTypewriter(roles);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Parallax & Tilt Tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMousePos({ x, y });
    setTilt({
      x: (x / (rect.width / 2)) * 14,
      y: (y / (rect.height / 2)) * -14,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
    setTilt({ x: 0, y: 0 });
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 perspective-1000"
      aria-label="Hero section"
    >
      {/* ── Background Deep Cosmic Theme ── */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      
      {/* ── Crazy 3D Interactive Star & Galaxy Canvas ── */}
      <ParticleGalaxy3D mousePos={mousePos} />

      {/* ── Ambient 3D Neon Orbs with Depth ── */}
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[110px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[110px] animate-pulse-slow animation-delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* ── Floating 3D Tech Hologram Badges with Interactive Parallax Depth ── */}
      <HoloBadge
        icon={<Cpu size={18} className="text-cyan-400" />}
        label="FastAPI & Python"
        sub="Backend Architecture"
        position="top-[18%] right-[38%]"
        tilt={tilt}
        depth={55}
      />
      <HoloBadge
        icon={<Code2 size={18} className="text-purple-400" />}
        label="React.js & Vite"
        sub="Frontend Engineering"
        position="top-[28%] right-[5%]"
        tilt={tilt}
        depth={75}
      />
      <HoloBadge
        icon={<Brain size={18} className="text-pink-400" />}
        label="AI & ML Solutions"
        sub="Intelligent Systems"
        position="bottom-[24%] right-[36%]"
        tilt={tilt}
        depth={65}
      />
      <HoloBadge
        icon={<Globe size={18} className="text-emerald-400" />}
        label="Node.js & MongoDB"
        sub="Full Stack Applications"
        position="bottom-[18%] right-[8%]"
        tilt={tilt}
        depth={45}
      />

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left Column: Action Content & Typography ── */}
          <div className="flex-1 text-center lg:text-left z-20">

            {/* Futuristic Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-purple-500/30 text-xs sm:text-sm font-semibold text-purple-300 mb-6 backdrop-blur-md shadow-lg shadow-purple-950/40 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Bold 3D Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 animate-fade-in-up animation-delay-100 tracking-tight">
              <span className="block text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-1 drop-shadow-[0_2px_15px_rgba(255,255,255,0.25)]">
                Hi, I'm
              </span>
              <span className="hero-name-gradient drop-shadow-[0_4px_30px_rgba(168,85,247,0.55)]">
                {personalInfo.name}
              </span>
            </h1>

            {/* Clean Action Subtitle (Dynamic Typewriter) */}
            <div className="min-h-[42px] mb-5 animate-fade-in-up animation-delay-200 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-200 tracking-tight flex items-center">
                <span>{typed}</span>
                <span className="inline-block w-1 h-7 bg-gradient-to-b from-purple-400 to-pink-500 align-middle ml-1.5 rounded-full animate-blink shadow-lg shadow-purple-500/80" />
              </p>
            </div>

            {/* Bio Matter with highlighted keywords */}
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed animate-fade-in-up animation-delay-300">
              Computer Science & Engineering (Artificial Intelligence) student at{' '}
              <strong className="text-gray-200 font-semibold">Pragati Engineering College</strong>, specializing in scalable{' '}
              <strong className="text-gray-200 font-semibold">API development</strong> and full-stack web applications using{' '}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 font-bold">
                Python, React.js, FastAPI
              </strong>
              , and modern databases with clean, performant, and modern architecture.
            </p>

            {/* Social Media Links Row (Matching Reference Photo 1) */}
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start animate-fade-in-up animation-delay-350">
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

            {/* 3D Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
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

            {/* Stats Row */}
            <div className="flex flex-wrap gap-7 mt-10 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
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

          {/* ── Right Column: Crazy 3D Quantum Gyro Avatar Stage ── */}
          <div
            className="hidden lg:flex flex-shrink-0 relative items-center justify-center preserve-3d"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* 3D Gyro Orbit Ring 1 (Tilted X-Axis) */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/40 animate-gyro-x pointer-events-none shadow-[0_0_20px_rgba(6,182,212,0.3)]" />

            {/* 3D Gyro Orbit Ring 2 (Tilted Y-Axis) */}
            <div className="absolute w-[380px] h-[380px] rounded-full border border-pink-500/40 animate-gyro-y pointer-events-none shadow-[0_0_20px_rgba(236,72,153,0.3)]" />

            {/* 3D Gyro Orbit Ring 3 (Diagonal Axis) */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/30 animate-gyro-diag pointer-events-none" />

            {/* Central Hologram Core Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-purple-600/35 to-pink-500/25 blur-2xl scale-125 animate-neon-aura pointer-events-none" />

            {/* Avatar Container Card */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-950/80">
              
              {/* Inner Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-900 group">
                
                {/* Profile Photo */}
                <img
                  src={personalInfo.profilePhoto}
                  alt={`${personalInfo.name} — Profile Portrait`}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Holographic Cyber Scanline Animation */}
                <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent pointer-events-none animate-holo-scan" />

                {/* Subtle Vignette Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 6 Cyber Radar Orbital Nodes around the Avatar */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-lg shadow-purple-500/80"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateY(-156px) translateX(-7px)`,
                  }}
                />
              ))}

              {/* Holographic Floating Mini Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-purple-500/40 text-white text-xs font-extrabold px-5 py-1.5 rounded-full shadow-2xl shadow-purple-950/80 whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md">
                <Sparkles size={13} className="text-yellow-400 animate-spin-slow" />
                <span>CSE-AI Graduate</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10">
        <button
          onClick={() => scrollTo('about')}
          className="text-gray-500 hover:text-purple-400 transition-colors flex flex-col items-center gap-1"
          aria-label="Scroll to About"
        >
          <span className="text-[10px] text-gray-500 font-bold tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
