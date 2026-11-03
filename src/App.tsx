// ==============================================================================
// App.tsx — Master Application Controller
//
// ఈ ఫైల్ మొత్తం పోర్ట్‌ఫోలియోలోని అన్ని సెక్షన్‌లను ఒకచోట చేర్చే ముఖ్యమైన ఫైల్:
// 1. Theme Management (Dark / Light Mode)
// 2. Cinematic Intro Preloader Controller (పేజీ ఓపెన్ అయినప్పుడు ఇంట్రో చూపించడం)
// 3. Page Structure Layout (Navbar -> Sections -> Footer)
// ==============================================================================

import { useState, useEffect } from 'react'

// అన్ని విడివిడి సెక్షన్ కాంపోనెంట్లను ఇక్కడ ఇంపోర్ట్ చేసుకుంటున్నాం:
import Preloader from './components/Preloader'                         // సినిమాటిక్ ఓపెనింగ్ ఇంట్రో స్క్రీన్
import Navbar from './components/Navbar'                               // పైభాగంలో ఉండే నావిగేషన్ బార్ (మెనూ, థీమ్ బటన్)
import HeroSection from './components/HeroSection'                     // మొదటి పేజీ వెల్‌కమ్ సెక్షన్ (టైప్‌రైటర్, ఫోటో, పార్టికల్స్)
import AboutSection from './components/AboutSection'                   // మీ గురించి వివరించే About Me సెక్షన్
import SkillsSection from './components/SkillsSection'                 // మీ ప్రోగ్రామింగ్ స్కిల్స్ & స్క్రోలింగ్ లోగోస్
import EducationSection from './components/EducationSection'           // చదువు వివరాల టైమ్‌లైన్ (B.Tech, Diploma, School)
import CertificationsSection from './components/CertificationsSection' // సర్టిఫికేషన్స్ సెక్షన్
import ProjectsSection from './components/ProjectsSection'             // మీ ప్రాజెక్ట్‌లు (HaloChat, Gemini Chatbot, etc.)
import ExperienceSection from './components/ExperienceSection'         // అనుభవం / వర్క్ లేదా అకడమిక్ ప్రాజెక్ట్ అనుభవం
import ContactSection from './components/ContactSection'               // మెసేజ్ పంపే ఫారమ్ & ఈమెయిల్/సోషల్ లింకులు
import Footer from './components/Footer'                               // పేజీ అడుగున ఉండే ఫుటర్ మరియు "Back to Top"
import './index.css'

function App() {
  // [1] isLoading State:
  // పేజీ మొదట లోడ్ అయినప్పుడు ఇంట్రో యానిమేషన్ కనిపించేలా `true` గా ఉంటుంది.
  // ఇంట్రో పూర్తికాగానే `onComplete()` ద్వారా `false` అవుతుంది.
  const [isLoading, setIsLoading] = useState(true)

  // [2] isDark State:
  // యూజర్ ఎంచుకున్న థీమ్ (Dark Mode లేదా Light Mode).
  // యూజర్ గతంలో ఏ థీమ్ ఎంచుకున్నారో localStorage నుండి చదువుకుంటుంది (default గా Dark Mode).
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved !== null ? saved === 'dark' : true
  })

  // [3] useEffect Hook:
  // థీమ్ మారిన ప్రతీసారి HTML <html> ట్యాగ్‌కు `dark` లేదా `light` క్లాస్‌ను అటాచ్ చేస్తుంది,
  // అలాగే యూజర్ ఛాయిస్‌ను బ్రౌజర్ localStorage లో సేవ్ చేస్తుంది.
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

  // థీమ్ మార్చడానికి ఉపయోగపడే ఫంక్షన్ (Dark నుండి Light కి, లేదా Light నుండి Dark కి)
  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <>
      {/* ── 1. సినిమాటిక్ ఓపెనింగ్ ఇంట్రో (3D ఫ్లయింగ్ లెటర్స్ & స్ప్లిట్ స్క్రీన్) ── */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* ── 2. మెయిన్ పోర్ట్‌ఫోలియో కంటైనర్ ── */}
      <div className={isDark ? 'dark bg-[var(--color-navy-900)] text-gray-100' : 'light bg-[#f1f5f9] text-slate-800'}>
        
        {/* టాప్ నావిగేషన్ బార్ */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        {/* పోర్ట్‌ఫోలియోలోని అన్ని ముఖ్యమైన సెక్షన్లు */}
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
        
        {/* బాటమ్ ఫుటర్ */}
        <Footer />
      </div>
    </>
  )
}

export default App
