import React, { useEffect, useRef, useState } from 'react';
import {
  GitBranch, ExternalLink, Download, ChevronDown,
  Code2, Cpu, Globe, Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// ── Typing animation hook ────────────────────────────────────────────────────
const roles = [
  'Full-Stack Developer 🚀',
  'CSE-AI Graduate 🎓',
  'React.js Enthusiast ⚛️',
  'Python Developer 🐍',
  'Problem Solver 💡',
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

// ── Animated particle canvas ─────────────────────────────────────────────────
const ParticleCanvas: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
      });

      // Draw faint connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

// ── Floating badge ───────────────────────────────────────────────────────────
const FloatingBadge: React.FC<{
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: string;
}> = ({ icon, label, className = '', delay = '0s' }) => (
  <div
    className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-800/80 border border-white/10 backdrop-blur-sm shadow-xl text-xs font-semibold text-gray-300 animate-float absolute ${className}`}
    style={{ animationDelay: delay }}
    aria-hidden="true"
  >
    {icon}
    {label}
  </div>
);

// ── Main HeroSection ─────────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const typed = useTypewriter(roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── Floating badges ── */}
      <FloatingBadge icon={<Code2 size={14} className="text-blue-400" />}   label="React.js"  className="top-1/4  left-8"  delay="0s"    />
      <FloatingBadge icon={<Cpu size={14}   className="text-purple-400" />} label="FastAPI"   className="top-1/3  left-4"  delay="0.5s"  />
      <FloatingBadge icon={<Globe size={14} className="text-cyan-400" />}   label="Node.js"   className="top-1/4  right-6" delay="1s"    />
      <FloatingBadge icon={<Sparkles size={14} className="text-yellow-400" />} label="Python" className="top-2/5  right-2" delay="1.5s"  />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/25 text-sm font-medium text-blue-300 mb-6 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Available for Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up animation-delay-100">
              <span className="block text-gray-400 text-2xl sm:text-3xl font-semibold mb-1">
                Hi, I'm 👋
              </span>
              <span className="hero-name-gradient">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 mb-5 animate-fade-in-up animation-delay-200">
              <p className="text-lg sm:text-xl font-semibold text-gray-200">
                <span className="text-blue-400">&lt;</span>
                <span className="text-white mx-1">{typed}</span>
                <span className="inline-block w-0.5 h-5 bg-blue-400 align-middle ml-0.5 animate-blink" />
                <span className="text-blue-400">/&gt;</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
              {personalInfo.tagline} Passionate about crafting clean code and seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <button
                onClick={() => scrollTo('projects')}
                className="hero-btn-primary group"
              >
                <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                View Projects
                <span className="hero-btn-shine" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="hero-btn-secondary"
              >
                Contact Me
              </button>

              <a
                href={personalInfo.resumeUrl}
                download
                className="hero-btn-ghost"
                aria-label="Download resume"
              >
                <Download size={17} />
                Resume
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
              {[
                { val: '11+', label: 'Technologies' },
                { val: '15+', label: 'Projects' },
                { val: 'B.Tech', label: 'Graduate' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-extrabold gradient-text">{s.val}</div>
                  <div className="text-gray-500 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            {personalInfo.github !== '#' && (
              <div className="flex gap-3 mt-8 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub profile"
                >
                  <GitBranch size={18} />
                </a>
              </div>
            )}
          </div>

          {/* ── Right: Avatar (Visible only on Laptop/PC - hidden on Mobile) ── */}
          <div className="hidden lg:block flex-shrink-0 animate-fade-in-up animation-delay-300">
            <div className="relative">

              {/* Outer spinning rings */}
              <div className="absolute -inset-6 rounded-full border border-blue-500/20 animate-spin-slow" />
              <div className="absolute -inset-12 rounded-full border border-purple-500/10 animate-spin-slow animation-delay-1000" style={{ animationDirection: 'reverse' }} />

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-40 scale-110" />

              {/* Hexagon-style avatar */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72">
                {/* Deco dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-500/50"
                    style={{
                      top: '50%', left: '50%',
                      transform: `rotate(${deg}deg) translateY(-138px) translateX(-6px)`,
                    }}
                  />
                ))}

                {/* Photo circle */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/20 bg-slate-900">
                  <img
                    src={personalInfo.profilePhoto}
                    alt={`${personalInfo.name} — profile photo`}
                    className="w-full h-full object-cover object-[center_15%]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fb = target.nextElementSibling as HTMLElement;
                      if (fb) fb.classList.remove('hidden');
                    }}
                  />
                  {/* Initials fallback */}
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center h-full gap-1 bg-gradient-to-br from-blue-900 to-purple-900">
                    <span className="text-white text-5xl font-extrabold tracking-wider select-none">
                      {personalInfo.name.split(' ').map(n => n[0]).join('').slice(0, 3)}
                    </span>
                    <span className="text-blue-200/70 text-[10px] mt-1">CSE-AI Graduate</span>
                  </div>
                </div>
              </div>

              {/* Floating mini-badge on avatar */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30 whitespace-nowrap">
                🎓 CSE-AI Graduate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <button
          onClick={() => scrollTo('about')}
          className="text-gray-600 hover:text-blue-400 transition-colors flex flex-col items-center gap-1"
          aria-label="Scroll to About"
        >
          <span className="text-xs text-gray-600 font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
