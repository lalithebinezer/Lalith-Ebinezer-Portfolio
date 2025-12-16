import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-8';
        case 'down': return '-translate-y-8';
        case 'left': return 'translate-x-8';
        case 'right': return '-translate-x-8';
        case 'none': return '';
        default: return 'translate-y-8';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;