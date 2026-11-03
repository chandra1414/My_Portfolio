// ==============================================================================
// ScrollReveal.tsx — Scroll-Triggered Entrance Animation Component
//
// This component wraps any UI element and applies smooth entrance animations
// (Fade In, Slide In, Zoom In) whenever the user scrolls it into view.
// Uses the browser's native IntersectionObserver API and re-triggers on every visit.
// ==============================================================================

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  className = '',
  threshold = 0.1,
}) => {
  // State indicating whether the element is currently visible inside the viewport
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IntersectionObserver watches when the wrapped element enters or leaves the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Replays animation every time the element comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  // Dynamic animation transform styles
  const getInitialStyle = (): React.CSSProperties => {
    let transform = 'translateY(32px)';

    if (animation === 'fade-down') transform = 'translateY(-32px)';
    if (animation === 'fade-left') transform = 'translateX(-35px)';
    if (animation === 'fade-right') transform = 'translateX(35px)';
    if (animation === 'zoom-in') transform = 'scale(0.92)';
    if (animation === 'flip-up') transform = 'perspective(1000px) rotateX(15deg) translateY(25px)';

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'none' : transform,
      transition: isVisible
        ? `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
        : `opacity 250ms ease-out, transform 250ms ease-out`,
      willChange: 'opacity, transform',
    };
  };

  return (
    <div ref={elementRef} style={getInitialStyle()} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
