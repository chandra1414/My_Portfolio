import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation from 0% to 100%
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds duration

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(rawProgress);

      if (rawProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Hold at 100% briefly, then start silky fade out
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 650); // Matches CSS transition duration
        }, 250);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060a17] transition-all duration-700 ease-in-out select-none ${
        isFadingOut
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      aria-label="Loading portfolio"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Name Title matching screenshot */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.18em] sm:tracking-[0.25em] bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.45)] mb-3 animate-fade-in-up">
          BHUVAN
        </h1>

        {/* Small Tech Tagline */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-gray-400 mb-8 sm:mb-10 opacity-80">
          &lt; S BHUVANA CHANDRA /&gt;
        </p>

        {/* Animated Glowing Infinity Symbol in Center (Exact match with screenshot) */}
        <div className="relative w-24 h-16 sm:w-28 sm:h-20 mb-8 sm:mb-10 flex items-center justify-center">
          {/* Subtle Glow behind icon */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-400 blur-xl opacity-40 animate-pulse" />
          
          <svg
            className="w-full h-full relative z-10"
            viewBox="0 0 100 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter id="infinityGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path
              d="M30 15 C15 15 10 25 10 30 C10 35 15 45 30 45 C45 45 55 15 70 15 C85 15 90 25 90 30 C90 35 85 45 70 45 C55 45 45 15 30 15 Z"
              stroke="url(#infinityGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#infinityGlow)"
              className="animate-infinity-draw"
            />
          </svg>
        </div>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-72 md:w-80 mb-3">
          <div className="h-1 sm:h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden border border-white/5 p-0 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(168,85,247,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Percentage Counter (Exact match: LOADING 36%) */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gray-400/90 font-mono">
            LOADING {progress}%
          </span>
        </div>

      </div>

      {/* Skip button for user convenience */}
      <button
        onClick={() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 300);
        }}
        className="absolute bottom-6 right-6 text-[10px] tracking-widest uppercase text-gray-600 hover:text-gray-300 transition-colors px-3 py-1 rounded-full border border-white/5 hover:border-white/10"
      >
        Skip ➔
      </button>
    </div>
  );
};

export default Preloader;
