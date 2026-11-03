// ==============================================================================
// main.tsx — Application Entry Point
// 
// This file is the root entry point of the entire React application.
// It finds the HTML root container (<div id="root"></div> in index.html)
// and mounts the main <App /> component into the DOM.
// ==============================================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global styles, Tailwind CSS rules, and custom animations
import App from './App.tsx' // Master Application component

// Mount and render the React application inside the root element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
