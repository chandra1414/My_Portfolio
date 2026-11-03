import React, { useState } from 'react';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiPython, SiFastapi, SiFlask,
  SiMysql, SiMongodb, SiPostgresql, SiOpensearch,
  SiNodedotjs, SiExpress, SiGit, SiDocker,
  SiTypescript, SiTailwindcss, SiFigma, SiPostman, SiC
} from 'react-icons/si';
import ScrollReveal from './ScrollReveal';

// All user skills matching Photo 2 reference
const allSkills = [
  // Frontend
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    category: 'Frontend Development',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    category: 'Frontend Development',
  },
  {
    name: 'React.js',
    icon: SiReact,
    color: '#61DAFB',
    category: 'Frontend Development',
  },
  {
    name: 'HTML5',
    icon: SiHtml5,
    color: '#E34F26',
    category: 'Frontend Development',
  },
  {
    name: 'CSS3',
    icon: SiCss,
    color: '#1572B6',
    category: 'Frontend Development',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    color: '#06B6D4',
    category: 'Frontend Development',
  },

  // Backend
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB',
    category: 'Backend Development',
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    color: '#009688',
    category: 'Backend Development',
  },
  {
    name: 'Flask',
    icon: SiFlask,
    color: '#94A3B8',
    category: 'Backend Development',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#5FA04E',
    category: 'Backend Development',
  },
  {
    name: 'Express',
    icon: SiExpress,
    color: '#E2E8F0',
    category: 'Backend Development',
  },

  // Databases
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    category: 'Database Management',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: '#4479A1',
    category: 'Database Management',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#4169E1',
    category: 'Database Management',
  },
  {
    name: 'OpenSearch',
    icon: SiOpensearch,
    color: '#005EB8',
    category: 'Database Management',
  },

  // Tools & DevOps
  {
    name: 'Git',
    icon: SiGit,
    color: '#F05032',
    category: 'Tools & DevOps',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    category: 'Tools & DevOps',
  },
  {
    name: 'Figma',
    icon: SiFigma,
    color: '#F24E1E',
    category: 'Tools & DevOps',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    color: '#FF6C37',
    category: 'Tools & DevOps',
  },
  {
    name: 'C',
    icon: SiC,
    color: '#A8B9CC',
    category: 'Tools & DevOps',
  },
];

const categories = [
  'All',
  'Frontend Development',
  'Backend Development',
  'Database Management',
  'Tools & DevOps',
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="text-center mb-10">
            <span className="skills-subheading text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
              WHAT I WORK WITH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              My Skills
            </h2>
            <div className="mx-auto mt-2.5 w-14 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
          </div>
        </ScrollReveal>

        {/* Filter Category Pills (Matching Photo 2) */}
        <ScrollReveal animation="fade-up" duration={600} delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-pill px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'active-pill bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/30 scale-105'
                      : 'inactive-pill bg-slate-900/50 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Top Skills Grid (Clean Icons without card boxes or vibrant box borders - Exactly matching Photo 2) */}
        <ScrollReveal animation="zoom-in" duration={700} delay={250}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-4xl mx-auto mb-16 min-h-[140px]">
            {filteredSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`${skill.name}-${idx}`}
                  className="flex flex-col items-center justify-center group w-18 sm:w-22 cursor-pointer transition-transform duration-200 hover:-translate-y-1.5"
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  {/* Clean Direct Icon without boxes or box borders */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                    <Icon size={38} color={skill.color} />
                  </div>

                  {/* Skill Name */}
                  <span className="text-xs sm:text-[13px] font-medium text-gray-300 group-hover:text-white mt-2.5 text-center leading-tight transition-colors">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ALL TECHNOLOGIES Horizontal Scrolling Marquee */}
        <ScrollReveal animation="fade-up" duration={700} delay={350}>
          <div className="border-t border-white/10 pt-10">
            {/* Subtitle */}
            <div className="text-center mb-6">
              <span className="marquee-subheading text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                ALL TECHNOLOGIES
              </span>
            </div>

            {/* Marquee Track Container */}
            <div className="relative w-full overflow-hidden py-3 group">
              <div className="marquee-fade-left absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--color-navy-900)] to-transparent z-10 pointer-events-none" />
              <div className="marquee-fade-right absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--color-navy-900)] to-transparent z-10 pointer-events-none" />

              <div className="flex gap-3 sm:gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
                {[...allSkills, ...allSkills].map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`marquee-${tech.name}-${idx}`}
                      className="marquee-card w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] rounded-xl flex flex-col items-center justify-center p-2 bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-md transition-all duration-300 hover:scale-108 hover:-translate-y-1 hover:border-white/30 cursor-pointer flex-shrink-0 group/card"
                    >
                      <div className="transition-transform duration-300 group-hover/card:scale-115">
                        <Icon size={26} color={tech.color} />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-gray-300 group-hover/card:text-white mt-1.5 text-center leading-tight truncate max-w-full px-1">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SkillsSection;
