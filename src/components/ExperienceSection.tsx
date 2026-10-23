import React from 'react';
import { Briefcase, Trophy, PlusCircle } from 'lucide-react';
import { experience, achievements } from '../data/portfolioData';

const ExperienceSection: React.FC = () => {
  const hasContent = experience.length > 0 || achievements.length > 0;

  return (
    <section id="experience" className="section-padding" aria-label="Experience and Achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Experience & <span className="gradient-text">Achievements</span></h2>
          <p className="section-subtitle">Internships, work experience, and notable achievements.</p>
        </div>

        <div className="mt-12">
          {!hasContent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5 flex items-center justify-center mb-5">
                <Briefcase size={36} className="text-purple-400/50" />
              </div>
              <h3 className="text-gray-300 font-semibold text-lg mb-2">No Experience Added Yet</h3>
              <p className="text-gray-500 text-sm max-w-sm">
                Add internships and achievements in <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code> under <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">experience</code> and <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">achievements</code>.
              </p>
              <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
                <PlusCircle size={14} />
                <span>Add experience and achievements in portfolioData.ts</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Experience */}
              {experience.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-xl mb-6">
                    <Briefcase size={20} className="text-blue-400" />
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    {experience.map((exp, idx) => (
                      <div key={idx} className="card group hover:border-blue-500/30 transition-all duration-300">
                        <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h4>
                        <p className="text-blue-400 text-sm mt-0.5">{exp.company}</p>
                        <p className="text-gray-500 text-xs mt-1 mb-3">{exp.duration}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="px-2.5 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {achievements.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-xl mb-6">
                    <Trophy size={20} className="text-yellow-400" />
                    Achievements
                  </h3>
                  <div className="space-y-6">
                    {achievements.map((ach, idx) => (
                      <div key={idx} className="card group hover:border-yellow-500/30 transition-all duration-300">
                        <h4 className="font-semibold text-white group-hover:text-yellow-300 transition-colors">{ach.title}</h4>
                        <p className="text-gray-500 text-xs mt-0.5 mb-2">{ach.year}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{ach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
