// ==============================================================================
// main.tsx — The Starting Point (Entry Point) of the entire React Application
// 
// ఈ ఫైల్ మొత్తం React ప్రాజెక్ట్‌కు గుండెకాయ లాంటిది.
// బ్రౌజర్ index.html లోని <div id="root"></div> ని తీసుకుని, అందులో మన
// App కాంపోనెంట్‌ను render (display) చేస్తుంది.
// ==============================================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global styles, Tailwind CSS మరియు Animation rules
import App from './App.tsx' // Main master component

// document.getElementById('root') ద్వారా HTML పేజీలోని root div లోకి React App ని inject చేస్తున్నాము
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
