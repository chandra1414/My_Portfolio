import React from 'react';
import { GraduationCap, Code2, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden" aria-label="About Me">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header matching reference image ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Photo card with gradient border & floating badges ── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-pink-500/30 via-purple-600/30 to-cyan-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gradient Border Frame (matches reference image) */}
              <div className="relative p-[3px] rounded-[32px] bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400 shadow-2xl shadow-purple-950/60 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] md:w-[340px] md:h-[450px] rounded-[29px] overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.profilePhoto}
                    alt={`${personalInfo.name} — Profile Photo`}
                    className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />

                  {/* Fallback avatar if photo fails to load */}
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-purple-950 p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-3xl font-extrabold mb-3">
                      {personalInfo.name.split(' ').map(n => n[0]).join('').slice(0, 3)}
                    </div>
                    <span className="text-white font-semibold text-sm">{personalInfo.name}</span>
                    <span className="text-gray-400 text-xs mt-1">CSE-AI Graduate</span>
                  </div>

                  {/* Subtle dark bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* ── Floating badge 1: Top-Left (Education) ── */}
              <div
                className="absolute -left-4 sm:-left-8 top-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/70 animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Education</p>
                  <p className="text-gray-300 text-[11px] mt-1 font-medium leading-none">B.Tech CSE (AI)</p>
                </div>
              </div>

              {/* ── Floating badge 2: Bottom-Right (College / Role) ── */}
              <div
                className="absolute -right-4 sm:-right-8 bottom-12 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/70 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-300 flex-shrink-0">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Pragati EC</p>
                  <p className="text-gray-300 text-[11px] mt-1 font-medium leading-none">CSE-AI Graduate</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Sub-heading badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold tracking-wide">
              <Sparkles size={14} className="text-pink-400" />
              <span>Full Stack & AI Enthusiast</span>
            </div>

            {/* Main Title matching reference layout */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Aspiring Software Developer &{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CSE-AI Graduate
              </span>
            </h3>

            {/* Bio Description with highlighted keywords */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a Computer Science and Engineering (Artificial Intelligence) graduate from{' '}
                <strong className="text-purple-300 font-semibold">Pragati Engineering College</strong>. With a solid foundation in both frontend and backend development, I am passionate about engineering modern, scalable, and intelligent software applications.
              </p>
              <p>
                My technical journey began with a Diploma in Computer Science at{' '}
                <strong className="text-blue-300 font-semibold">Chaitanya Institute of Science and Technology</strong>, where I developed core computer science and software development principles. I specialize in building responsive user interfaces using <strong className="text-cyan-300 font-semibold">React.js</strong> and designing robust backend services with <strong className="text-pink-300 font-semibold">Python, FastAPI, and Django</strong>.
              </p>
              <p>
                I love turning complex problems into elegant, user-friendly solutions and am actively looking for opportunities where I can contribute to impactful software engineering teams.
              </p>
            </div>

            {/* Quick feature tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                '🎓 CSE-AI Graduate',
                '⚛️ React.js',
                '🐍 Python & FastAPI',
                '🗄️ MySQL & MongoDB',
                '🚀 Available for Work',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/30"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)',
                }}
                aria-label="Download Full Resume"
              >
                <FileText size={18} />
                View Full Resume
              </a>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-gray-300 hover:text-white border border-white/15 hover:border-purple-500/40 hover:bg-white/5 transition-all"
              >
                Get in Touch
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
