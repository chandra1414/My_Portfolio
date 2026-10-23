import React from 'react';
import { Award, ExternalLink, PlusCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-padding" aria-label="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Courses and credentials I've earned.</p>
        </div>

        <div className="mt-12">
          {certifications.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center mb-5">
                <Award size={36} className="text-blue-400/50" />
              </div>
              <h3 className="text-gray-300 font-semibold text-lg mb-2">No Certifications Added Yet</h3>
              <p className="text-gray-500 text-sm max-w-sm">
                Open <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code> and add your certifications to the <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">certifications</code> array.
              </p>
              <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
                <PlusCircle size={14} />
                <span>Add certifications in portfolioData.ts</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="card group hover:border-blue-500/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-blue-300 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1">{cert.provider}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{cert.date}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors"
                        aria-label={`View credential for ${cert.name}`}
                      >
                        View <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
