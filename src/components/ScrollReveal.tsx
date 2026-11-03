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
  duration = 700,
  className = '',
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, disconnect to keep it visible
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Triggers slightly before element enters
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
    let transform = 'translateY(35px)';

    if (animation === 'fade-down') transform = 'translateY(-35px)';
    if (animation === 'fade-left') transform = 'translateX(-40px)';
    if (animation === 'fade-right') transform = 'translateX(40px)';
    if (animation === 'zoom-in') transform = 'scale(0.9)';
    if (animation === 'flip-up') transform = 'perspective(1000px) rotateX(18deg) translateY(25px)';

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'none' : transform,
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
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
