import React, { useState } from 'react';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiPython, SiFastapi,
  SiMysql, SiMongodb, SiPostgresql,
  SiDjango, SiNodedotjs, SiGit, SiTypescript
} from 'react-icons/si';

// All user skills with authentic colors and category mappings
const allSkills = [
  // Frontend
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', glow: 'rgba(247,223,30,0.3)',   category: 'Frontend Development' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', glow: 'rgba(49,120,198,0.3)',  category: 'Frontend Development' },
  { name: 'React.js',   icon: SiReact,      color: '#61DAFB', glow: 'rgba(97,218,251,0.3)',  category: 'Frontend Development' },
  { name: 'HTML5',      icon: SiHtml5,      color: '#E34F26', glow: 'rgba(227,79,38,0.3)',   category: 'Frontend Development' },
  { name: 'CSS3',       icon: SiCss,        color: '#1572B6', glow: 'rgba(21,114,182,0.3)',  category: 'Frontend Development' },
  // Backend
  { name: 'Python',     icon: SiPython,     color: '#3776AB', glow: 'rgba(55,118,171,0.3)',  category: 'Backend Development' },
  { name: 'FastAPI',    icon: SiFastapi,    color: '#009688', glow: 'rgba(0,150,136,0.3)',   category: 'Backend Development' },
  // Databases
  { name: 'MySQL',      icon: SiMysql,      color: '#4479A1', glow: 'rgba(68,121,161,0.3)',  category: 'Database Management' },
  { name: 'MongoDB',    icon: SiMongodb,    color: '#47A248', glow: 'rgba(71,162,72,0.3)',   category: 'Database Management' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', glow: 'rgba(51,103,145,0.3)',  category: 'Database Management' },
  // Frameworks & Tools
  { name: 'Django',     icon: SiDjango,     color: '#092E20', glow: 'rgba(9,46,32,0.4)',      category: 'Frameworks & Technologies' },
  { name: 'Node.js',    icon: SiNodedotjs,  color: '#339933', glow: 'rgba(51,153,51,0.3)',   category: 'Frameworks & Technologies' },
  { name: 'Git',        icon: SiGit,        color: '#F05032', glow: 'rgba(240,80,50,0.3)',   category: 'Frameworks & Technologies' },
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header matching reference image ── */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-purple-400 mb-2">
            WHAT I WORK WITH
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
        </div>

        {/* ── Filter Category Pills ── */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/25 scale-105'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Top Skills Grid (Filtered) ── */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl mx-auto mb-20 min-h-[160px]">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${idx}`}
                className="flex flex-col items-center justify-center group w-20 sm:w-24 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Icon box with glowing hover effect */}
                <div
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center p-3.5 bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-lg group-hover:border-white/25 transition-all duration-300"
                  style={{
                    boxShadow: `0 8px 24px -6px ${skill.glow}`,
                  }}
                >
                  <div
                    className="transition-transform duration-300 group-hover:scale-115 group-hover:rotate-[-4deg]"
                    style={{ color: skill.color }}
                  >
                    <Icon size={38} />
                  </div>
                </div>

                {/* Skill Name */}
                <span className="text-xs font-medium text-gray-300 group-hover:text-white mt-2.5 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── ALL TECHNOLOGIES Horizontal Scrolling Marquee (Exact Match with Image) ── */}
        <div className="mt-8 border-t border-white/5 pt-12">
          {/* Subtitle */}
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400/90">
              ALL TECHNOLOGIES
            </span>
          </div>

          {/* Marquee Track Container */}
          <div className="relative w-full overflow-hidden py-4 group">
            {/* Edge fade gradients for smooth infinite illusion */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--color-navy-900)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--color-navy-900)] to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee Track */}
            <div className="flex gap-4 sm:gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...allSkills, ...allSkills, ...allSkills].map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`marquee-${tech.name}-${idx}`}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex flex-col items-center justify-center p-3 bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-white/30 cursor-pointer flex-shrink-0 group/card"
                    style={{
                      boxShadow: `0 8px 24px -6px ${tech.glow}`,
                    }}
                  >
                    <div
                      className="transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-[-4deg]"
                      style={{ color: tech.color }}
                    >
                      <Icon size={34} />
                    </div>
                    <span className="text-xs font-semibold text-gray-300 group-hover/card:text-white mt-2.5 text-center leading-none tracking-tight">
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
