import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

// Accent borders for each card matching reference image
const cardAccents = [
  {
    border: 'border-l-4 border-l-cyan-400 sm:border-t-2 sm:border-t-cyan-400',
    glow: 'hover:shadow-cyan-500/10 hover:border-cyan-500/30',
    collegeColor: 'text-cyan-400',
  },
  {
    border: 'border-l-4 border-l-pink-500 sm:border-t-2 sm:border-t-pink-500',
    glow: 'hover:shadow-pink-500/10 hover:border-pink-500/30',
    collegeColor: 'text-pink-400',
  },
  {
    border: 'border-l-4 border-l-purple-500 sm:border-t-2 sm:border-t-purple-500',
    glow: 'hover:shadow-purple-500/10 hover:border-purple-500/30',
    collegeColor: 'text-purple-400',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden" aria-label="Education">
      {/* Background glow accents */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            My academic journey and educational milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical connecting line */}
          <div 
            className="absolute left-[19px] sm:left-[35px] top-6 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" 
            aria-hidden="true" 
          />

          <div className="space-y-8 sm:space-y-10">
            {education.map((item, idx) => {
              const accent = cardAccents[idx % cardAccents.length];

              return (
                <div
                  key={idx}
                  className="relative flex items-start gap-4 sm:gap-8 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Timeline Node Icon (matches reference image circle) */}
                  <div className="relative z-10 -ml-[23px] sm:-ml-[27px] flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900 border-2 border-purple-500/80 shadow-lg shadow-purple-950/60 flex items-center justify-center text-purple-300">
                    <GraduationCap size={20} className="text-purple-300" />
                  </div>

                  {/* Education Card (matches reference image) */}
                  <div 
                    className={`flex-1 rounded-2xl p-6 sm:p-7 bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 group hover:-translate-y-1 ${accent.border} ${accent.glow}`}
                  >
                    {/* Header Row: Title and Date Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Date Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 self-start sm:self-auto">
                        <Calendar size={13} className="text-purple-400" />
                        {item.duration || "Passing year not provided"}
                      </span>
                    </div>

                    {/* Institution Name */}
                    <div className="mb-2">
                      <p className={`text-sm sm:text-base font-semibold ${accent.collegeColor}`}>
                        {item.institution}
                      </p>
                    </div>

                    {/* Location with Pin Icon */}
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                        <MapPin size={13} className="text-pink-400 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {/* Description */}
                    {item.description && (
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
