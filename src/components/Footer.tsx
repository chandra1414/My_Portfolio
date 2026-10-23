import React from 'react';
import { GitBranch, Link as LinkedInIcon, Mail, X as XIcon, ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: <GitBranch size={18} />, label: 'GitHub', href: personalInfo.github },
    { icon: <LinkedInIcon size={18} />, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: <XIcon size={18} />, label: 'Twitter / X', href: personalInfo.twitter },
    { icon: <Mail size={18} />, label: 'Email', href: `mailto:${personalInfo.email}` },
  ];

  return (
    <footer className="border-t border-white/5 bg-navy-950/50 backdrop-blur-sm" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
              {personalInfo.headline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href === '#' ? undefined : s.href}
                target={s.href?.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`social-icon-link ${s.href === '#' ? 'opacity-30 cursor-default pointer-events-none' : ''}`}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={12} className="text-red-500 fill-red-500" aria-hidden="true" />
            using React + TypeScript + Tailwind CSS.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm font-medium transition-colors duration-200 group"
            aria-label="Back to top"
          >
            Back to Top
            <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
