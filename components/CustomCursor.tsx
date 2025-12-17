import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices that have a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation for high-performance cursor movement
      // We offset by roughly half the size of the magnifier to center the "lens"
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for interactive elements
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');

      setIsHovering(!!isInteractive);
    };

    // Inject styles to hide default cursor globally when this component is active
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.innerHTML = `
      @media (pointer: fine) {
        *, *::before, *::after {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      aria-hidden="true"
    >
      {/* 
        Vintage Magnifier Container 
        Centered on the mouse coordinates via transform in JS, 
        then we offset internal elements to align the lens center.
      */}
      <div 
        className={`relative -top-12 -left-12 w-24 h-24 transition-transform duration-500 ease-out-expo ${
          isHovering ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
        }`}
      >
        {/* The Handle */}
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-16 h-4 bg-amber-900 rounded-sm origin-top-left rotate-45 border border-amber-950 shadow-lg"
          style={{
            background: 'linear-gradient(to bottom, #8B4513, #3E2723)',
            boxShadow: '2px 4px 6px rgba(0,0,0,0.4)'
          }}
        >
            {/* Handle detail/highlight */}
            <div className="absolute top-[2px] left-[5px] right-[5px] h-[2px] bg-amber-700/50 rounded-full"></div>
        </div>

        {/* The Rim (Brass/Gold) */}
        <div className="absolute inset-0 rounded-full border-[6px] border-yellow-600 shadow-xl box-border bg-transparent z-10"
             style={{
               borderColor: '#CD7F32', // Bronze/Brass color
               background: 'transparent',
               boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 2px 4px 8px rgba(0,0,0,0.3)'
             }}
        ></div>

        {/* The Connector (Handle to Rim) */}
        <div className="absolute bottom-[6px] right-[6px] w-6 h-4 bg-yellow-700 rotate-45 z-0 transform translate-x-1 translate-y-1"></div>

        {/* 
           The Lens (Glass Effect)
           Uses backdrop-filter to simulate magnification/glass properties 
           by brightening and increasing contrast of the content behind it.
        */}
        <div 
          className="absolute inset-[6px] rounded-full overflow-hidden z-20"
          style={{
            backdropFilter: 'brightness(1.15) contrast(1.1) saturate(1.1)',
            WebkitBackdropFilter: 'brightness(1.15) contrast(1.1) saturate(1.1)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 20%, transparent 60%)',
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2)'
          }}
        >
          {/* Reflection Glare */}
          <div className="absolute top-[15%] left-[15%] w-[25%] h-[15%] bg-white/40 rounded-[50%] blur-[2px] transform -rotate-45"></div>
          <div className="absolute bottom-[20%] right-[20%] w-[10%] h-[10%] bg-white/20 rounded-full blur-[4px]"></div>
        </div>

      </div>
    </div>
  );
};

export default CustomCursor;