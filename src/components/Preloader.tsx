// ==============================================================================
// Preloader.tsx — సినిమాటిక్ ఓపెనింగ్ ఇంట్రో యానిమేషన్
//
// పోర్ట్‌ఫోలియో ఓపెన్ అవ్వగానే:
// 1. "Bhuvan Portfolio" అక్షరాలు 3D లో స్పిన్ అవుతూ స్క్రీన్ నలుమూలల నుండి వచ్చి కలుస్తాయి.
// 2. టైటిల్ వెనుక లైట్ బ్లూమ్ & గ్లిచ్ ఎఫెక్ట్ వస్తుంది.
// 3. సబ్‌టైటిల్ "Python Full Stack Developer" & గ్రేడియంట్ లైన్ వస్తాయి.
// 4. 2.45 సెకన్ల వద్ద పై భాగం & కింది భాగం షట్టర్ డోర్స్ లాగా విడిపోయి మెయిన్ సైట్‌ను చూపిస్తాయి.
// ==============================================================================

import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // 3.35 సెకన్లలో యానిమేషన్ పూర్తవగానే స్క్రీన్ నుండి ఇంట్రోను తీసివేస్తాం
    const timer = setTimeout(() => {
      setMounted(false);
      onComplete();
    }, 3350);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!mounted) return null;

  const word1 = "Bhuvan";
  const word2 = "Portfolio";

  return (
    <div className="cinematic-intro" aria-hidden="true">
      {/* పై భాగం షట్టర్ డోర్ */}
      <div className="intro__half intro__half--top" />
      
      {/* కింది భాగం షట్టర్ డోర్ */}
      <div className="intro__half intro__half--bottom" />
      
      {/* మధ్యలో ఉండే స్టేజ్ (లెటర్స్ మరియు సబ్‌టైటిల్) */}
      <div className="intro__stage">
        <h2 className="intro__title">
          {/* మొదటి పదం: Bhuvan */}
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
          {/* రెండవ పదం: Portfolio */}
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
        {/* సబ్‌టైటిల్ */}
        <p className="intro__sub">Python Full Stack Developer</p>
        
        {/* కలర్‌ఫుల్ లైన్ బార్ */}
        <span className="intro__bar" />
      </div>
    </div>
  );
};

export default Preloader;
