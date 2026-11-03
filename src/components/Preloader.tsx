// ==============================================================================
// Preloader.tsx — Cinematic Split-Screen & 3D Flying Letters Intro
//
// Lifecycle of this intro animation:
// 1. "Bhuvana Portfolio" letters fly in from 3D coordinates, spin, and snap into place.
// 2. Light bloom radiates behind the title accompanied by a glitch effect.
// 3. Subtitle "Python Full Stack Developer" expands with a gradient underline bar.
// 4. At 2.45s, top and bottom curtain doors split open vertically like cinematic shutters,
//    revealing the portfolio hero underneath seamlessly.
// 5. At 3.35s, onComplete() fires and the intro component unmounts from the DOM.
// ==============================================================================

import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Shutter split completes by ~3.3s; unmount and clean up at 3.35s
    const timer = setTimeout(() => {
      setMounted(false);
      onComplete();
    }, 3350);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!mounted) return null;

  const word1 = "Bhuvana";
  const word2 = "Portfolio";

  return (
    <div className="cinematic-intro" aria-hidden="true">
      {/* Top half shutter door */}
      <div className="intro__half intro__half--top" />
      
      {/* Bottom half shutter door */}
      <div className="intro__half intro__half--bottom" />
      
      {/* Central stage holding flying letters and subtitle */}
      <div className="intro__stage">
        <h2 className="intro__title">
          {/* First word: Bhuvana */}
          <span className="intro__word">
            {word1.split('').map((char, idx) => (
              <span
                key={idx}
                className="intro__char"
                style={{ '--i': idx } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>
          {/* Second word: Portfolio */}
          <span className="intro__word">
            {word2.split('').map((char, idx) => (
              <span
                key={idx}
                className="intro__char"
                style={{ '--i': word1.length + idx } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>
        </h2>
        
        {/* Role Subtitle */}
        <p className="intro__sub">Python Full Stack Developer</p>
        
        {/* Animated gradient underline bar */}
        <span className="intro__bar" />
      </div>
    </div>
  );
};

export default Preloader;
