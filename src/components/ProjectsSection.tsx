import React from 'react';
import { GitBranch, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Things I've built and shipped.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="card flex flex-col group hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up overflow-hidden p-0"
              style={{ animationDelay: `${idx * 120}ms` }}
              aria-label={project.title}
            >
              {/* Screenshot / Preview */}
              <div className="relative h-44 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-700">
                    <ImageIcon size={36} />
                    <span className="text-xs">Add screenshot in portfolioData.ts</span>
                  </div>
                )}
                {/* Live badge */}
                {project.liveUrl && (
                  <span className="absolute top-3 right-3 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Live
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-sm font-medium transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GitBranch size={14} />
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
