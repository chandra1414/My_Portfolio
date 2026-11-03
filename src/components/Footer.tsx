import React from 'react';
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navColumn1 = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
  ];

  const navColumn2 = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={16} />,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      hoverColor: 'hover:border-purple-500/60 hover:text-white',
    },
    {
      icon: <FaWhatsapp size={17} />,
      label: 'WhatsApp',
      href: 'https://wa.me/919491632168',
      hoverColor: 'hover:border-green-500/60 hover:text-white',
    },
    {
      icon: <FaInstagram size={16} />,
      label: 'Instagram',
      href: 'https://instagram.com',
      hoverColor: 'hover:border-pink-500/60 hover:text-white',
    },
    {
      icon: <FaFacebookF size={15} />,
      label: 'Facebook',
      href: 'https://facebook.com',
      hoverColor: 'hover:border-blue-500/60 hover:text-white',
    },
    {
      icon: <FaGithub size={16} />,
      label: 'GitHub',
      href: personalInfo.github,
      hoverColor: 'hover:border-white/60 hover:text-white',
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-14 pb-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid Matching Photo 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Brand & Bio (Left) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="text-3xl font-black tracking-wider bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              BHUVAN
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-sm">
              Aspiring Software Developer | CSE-AI Graduate, building intelligent, scalable cloud APIs and modern full-stack web applications with clean architecture.
            </p>
          </div>

          {/* Column 2: Navigation Links (Middle - 2 Columns) */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 block mb-4">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              <div className="flex flex-col gap-2.5">
                {navColumn1.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-purple-400 text-sm text-left transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {navColumn2.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-purple-400 text-sm text-left transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Connect / Social Icons (Right) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-start">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 block mb-4">
              CONNECT
            </span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 ${s.hoverColor} flex items-center justify-center text-gray-400 transition-all shadow-md group`}
                  aria-label={s.label}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution (Matching Photo 4) */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              React + TypeScript + Tailwind CSS
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
