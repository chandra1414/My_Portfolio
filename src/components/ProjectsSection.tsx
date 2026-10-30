import React from 'react';
import { GitBranch, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="section-subtitle mt-3">Things I've built and shipped.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="card flex flex-col group hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 animate-fade-in-up overflow-hidden p-0 rounded-2xl shadow-lg"
              style={{ animationDelay: `${idx * 100}ms` }}
              aria-label={project.title}
            >
              {/* Screenshot / Preview Container - 16:10 aspect ratio for desktop/laptop & mobile perfection */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden border-b border-white/10 group/img">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-500 bg-slate-900/60">
                    <ImageIcon size={32} />
                    <span className="text-xs">No screenshot available</span>
                  </div>
                )}
                {/* Live badge */}
                {project.liveUrl && (
                  <span className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-sm">
                    Live
                  </span>
                )}
                {/* Subtle top glare highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="project-card-desc text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag px-2.5 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex gap-3 pt-2 border-t border-white/5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-blue-500/25"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-repo-btn flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-sm font-semibold transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GitBranch size={15} />
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
