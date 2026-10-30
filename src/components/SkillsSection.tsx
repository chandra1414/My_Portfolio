import React, { useState } from 'react';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiPython, SiFastapi,
  SiMysql, SiMongodb, SiPostgresql,
  SiDjango, SiNodedotjs, SiGit, SiTypescript
} from 'react-icons/si';

// All user skills with authentic colors for dark mode & crisp high-contrast colors for light mode
const allSkills = [
  // Frontend
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    lightColor: '#D97706', // Rich amber/gold for light mode
    glow: 'rgba(247,223,30,0.35)',
    category: 'Frontend Development',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#38BDF8',
    lightColor: '#2563EB',
    glow: 'rgba(56,189,248,0.35)',
    category: 'Frontend Development',
  },
  {
    name: 'React.js',
    icon: SiReact,
    color: '#61DAFB',
    lightColor: '#0284C7', // Deep cyan-blue for white background
    glow: 'rgba(97,218,251,0.35)',
    category: 'Frontend Development',
  },
  {
    name: 'HTML5',
    icon: SiHtml5,
    color: '#E34F26',
    lightColor: '#EA580C',
    glow: 'rgba(227,79,38,0.35)',
    category: 'Frontend Development',
  },
  {
    name: 'CSS3',
    icon: SiCss,
    color: '#38BDF8',
    lightColor: '#2563EB',
    glow: 'rgba(56,189,248,0.35)',
    category: 'Frontend Development',
  },
  // Backend
  {
    name: 'Python',
    icon: SiPython,
    color: '#38BDF8',
    lightColor: '#0284C7',
    glow: 'rgba(56,189,248,0.35)',
    category: 'Backend Development',
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    color: '#2DD4BF',
    lightColor: '#0D9488',
    glow: 'rgba(45,212,191,0.35)',
    category: 'Backend Development',
  },
  // Databases
  {
    name: 'MySQL',
    icon: SiMysql,
    color: '#38BDF8',
    lightColor: '#00758F',
    glow: 'rgba(56,189,248,0.35)',
    category: 'Database Management',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#4ADE80',
    lightColor: '#16A34A',
    glow: 'rgba(74,222,128,0.35)',
    category: 'Database Management',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#60A5FA',
    lightColor: '#2563EB',
    glow: 'rgba(96,165,250,0.35)',
    category: 'Database Management',
  },
  // Frameworks & Tools
  {
    name: 'Django',
    icon: SiDjango,
    color: '#34D399', // Vibrant emerald green in dark mode
    lightColor: '#0C4B33', // Deep forest green in light mode
    glow: 'rgba(52,211,153,0.35)',
    category: 'Frameworks & Technologies',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#4ADE80',
    lightColor: '#16A34A',
    glow: 'rgba(74,222,128,0.35)',
    category: 'Frameworks & Technologies',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: '#FB923C',
    lightColor: '#EA580C',
    glow: 'rgba(251,146,60,0.35)',
    category: 'Frameworks & Technologies',
  },
];

const categories = [
  'All',
  'Frontend Development',
  'Backend Development',
  'Database Management',
  'Frameworks & Technologies',
] as const;

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding overflow-hidden relative" aria-label="Skills">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-8">
          <p className="skills-subheading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-purple-400 mb-2">
            WHAT I WORK WITH
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="mx-auto mt-2.5 w-14 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
        </div>

        {/* ── Filter Category Pills ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'active-pill bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-md shadow-purple-500/25 scale-105'
                    : 'inactive-pill bg-slate-900/40 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Top Skills Grid (Filtered) - Reduced Size ── */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto mb-14 min-h-[130px]">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${idx}`}
                className="flex flex-col items-center justify-center group w-16 sm:w-20 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {/* Icon box (reduced from 72px to 52px) */}
                <div
                  className="skill-card-box w-12 h-12 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center p-2.5 bg-slate-900/60 backdrop-blur-sm border border-white/10 shadow-md group-hover:border-white/30 transition-all duration-300"
                  style={{
                    boxShadow: `0 6px 18px -4px ${skill.glow}`,
                  }}
                >
                  <div
                    className="skill-icon-wrap transition-transform duration-300 group-hover:scale-115"
                    style={{
                      '--icon-color': skill.color,
                      '--icon-color-light': skill.lightColor,
                    } as React.CSSProperties}
                  >
                    <Icon size={26} />
                  </div>
                </div>

                {/* Skill Name */}
                <span className="skill-card-label text-[11px] sm:text-xs font-semibold text-gray-300 group-hover:text-white mt-2 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── ALL TECHNOLOGIES Horizontal Scrolling Marquee - Reduced Size ── */}
        <div className="border-t border-white/10 pt-10">
          {/* Subtitle */}
          <div className="text-center mb-6">
            <span className="marquee-subheading text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
              ALL TECHNOLOGIES
            </span>
          </div>

          {/* Marquee Track Container */}
          <div className="relative w-full overflow-hidden py-3 group">
            {/* Edge fade gradients for smooth infinite illusion */}
            <div className="marquee-fade-left absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--color-navy-900)] to-transparent z-10 pointer-events-none" />
            <div className="marquee-fade-right absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--color-navy-900)] to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee Track */}
            <div className="flex gap-3 sm:gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...allSkills, ...allSkills, ...allSkills].map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`marquee-${tech.name}-${idx}`}
                    className="marquee-card w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] rounded-xl flex flex-col items-center justify-center p-2 bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-md transition-all duration-300 hover:scale-108 hover:-translate-y-1 hover:border-white/30 cursor-pointer flex-shrink-0 group/card"
                    style={{
                      boxShadow: `0 6px 16px -4px ${tech.glow}`,
                    }}
                  >
                    <div
                      className="skill-icon-wrap transition-transform duration-300 group-hover/card:scale-115"
                      style={{
                        '--icon-color': tech.color,
                        '--icon-color-light': tech.lightColor,
                      } as React.CSSProperties}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="marquee-card-label text-[10px] sm:text-[11px] font-semibold text-gray-300 group-hover/card:text-white mt-1.5 text-center leading-none tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
