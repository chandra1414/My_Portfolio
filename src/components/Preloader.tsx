import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Shutter split happens at 2.45s and finishes by ~3.3s.
    // Unmount clean-up at 3.35s
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
      <div className="intro__half intro__half--top" />
      <div className="intro__half intro__half--bottom" />
      <div className="intro__stage">
        <h2 className="intro__title">
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
        <p className="intro__sub">Python Full Stack Developer</p>
        <span className="intro__bar" />
      </div>
    </div>
  );
};

export default Preloader;
