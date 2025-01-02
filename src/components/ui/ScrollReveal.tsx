import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'flip';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 500,
  threshold = 0.1 
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-down':
        return '-translate-y-10 opacity-0';
      case 'fade-left':
        return 'translate-x-10 opacity-0';
      case 'fade-right':
        return '-translate-x-10 opacity-0';
      case 'zoom':
        return 'scale-95 opacity-0';
      case 'flip':
        return 'rotateX-90 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transform ${getAnimationClass()} transition-all duration-[${duration}ms] delay-[${delay}ms]`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}