// ==============================================================================
// App.tsx — Master Application Controller
//
// This is the core controller of the portfolio application.
// Responsibilities:
// 1. Theme Management (Dark Mode / Light Mode switching and persistence)
// 2. Cinematic Intro Preloader Controller (plays on initial page load)
// 3. Layout Architecture (Navbar -> All Page Sections -> Footer)
// ==============================================================================

import { useState, useEffect } from 'react'

// Section Component Imports:
import Preloader from './components/Preloader'                         // Cinematic 3D flying letters & split-screen intro
import Navbar from './components/Navbar'                               // Fixed top navigation bar with brand, links & theme toggle
import HeroSection from './components/HeroSection'                     // Hero landing section (typewriter, particles, photo & stats)
import AboutSection from './components/AboutSection'                   // About Me section (biography & profile details)
import SkillsSection from './components/SkillsSection'                 // Tech stack with category tabs & infinite scrolling marquee
import EducationSection from './components/EducationSection'           // Academic history timeline with bold specialization branches
import CertificationsSection from './components/CertificationsSection' // Professional courses & certificates
import ProjectsSection from './components/ProjectsSection'             // Featured real-world projects & live demo links
import ExperienceSection from './components/ExperienceSection'         // Work & project experience timeline
import ContactSection from './components/ContactSection'               // Interactive contact form & social media links
import Footer from './components/Footer'                               // Bottom footer with branding & back-to-top button
import './index.css'

function App() {
  // [1] isLoading State:
  // Controls whether the cinematic preloader intro screen is visible.
  // Defaults to `true` on page load, and switches to `false` when onComplete() fires.
  const [isLoading, setIsLoading] = useState(true)

  // [2] isDark State:
  // Tracks active theme (true = Dark Mode, false = Light Mode).
  // Initializes from browser localStorage so the user's preference is remembered across visits.
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved !== null ? saved === 'dark' : true
  })

  // [3] useEffect Hook for Theme Persistence:
  // Dynamically attaches the 'dark' or 'light' CSS class to the root <html> tag
  // and syncs the updated preference to browser localStorage.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('portfolio-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('portfolio-theme', 'light')
    }
  }, [isDark])

  // Handler to toggle between Dark and Light mode
  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <>
      {/* ── 1. Cinematic Intro Preloader (3D Flying letters & shutter split screen) ── */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* ── 2. Main Portfolio Layout Container ── */}
      <div className={isDark ? 'dark bg-[var(--color-navy-900)] text-gray-100' : 'light bg-[#f1f5f9] text-slate-800'}>
        
        {/* Top Navigation Bar */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        {/* Main Content Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        {/* Page Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
