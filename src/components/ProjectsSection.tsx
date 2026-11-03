import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const categories = ['All', 'Full Stack', 'Web Development', 'AI & Python'] as const;

const ProjectsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter projects by both search query and selected category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="projects" className="section-padding overflow-hidden relative bg-cosmic-section" aria-label="Projects">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Photo 3 */}
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="text-center mb-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
              WHAT I'VE BUILT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="mx-auto mt-2.5 w-14 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
          </div>
        </ScrollReveal>

        {/* Controls Row: Search Input + Category Filter Pills (Matching Photo 3) */}
        <ScrollReveal animation="fade-up" duration={600} delay={150}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            
            {/* Search Input Bar (Left) */}
            <div className="relative w-full md:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Category Filter Pills (Right) */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-md shadow-purple-500/30 scale-105'
                        : 'bg-slate-900/50 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Showing Count Indicator */}
          <div className="mb-8">
            <span className="text-xs text-gray-400 font-medium">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              duration={700}
              delay={idx * 100}
              className="h-full"
            >
              <article
                className="card h-full flex flex-col group hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden p-0 rounded-2xl shadow-xl bg-slate-900/60 border border-white/10 backdrop-blur-md"
                aria-label={project.title}
              >
                {/* Screenshot Container with Badges */}
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
                      <span className="text-xs">Preview coming soon</span>
                    </div>
                  )}

                  {/* Category Pill (Top-Left overlay matching Photo 3) */}
                  {project.category && (
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-lg border border-white/10 shadow-md">
                      {project.category}
                    </span>
                  )}

                  {/* Featured / Live Badge (Top-Right overlay matching Photo 3) */}
                  {project.featured ? (
                    <span className="absolute top-3 right-3 bg-purple-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow-md backdrop-blur-sm">
                      Featured
                    </span>
                  ) : project.liveUrl ? (
                    <span className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg shadow-md backdrop-blur-sm">
                      Live
                    </span>
                  ) : null}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Live Demo & Code Buttons matching Photo 3) */}
                  <div className="flex gap-3 pt-3 border-t border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-sm font-semibold transition-all shadow-md shadow-pink-500/20 active:scale-95"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl || "https://github.com/chandra1414"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-gray-200 hover:text-white text-sm font-semibold transition-all active:scale-95"
                      aria-label={`Source code of ${project.title}`}
                    >
                      <FaGithub size={15} />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
