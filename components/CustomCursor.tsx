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
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
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
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }} // Initial off-screen position
      aria-hidden="true"
    >
      {/* Digital Construction Reticle */}
      <div 
        className={`relative flex items-center justify-center transition-all duration-500 ease-out-expo ${
          isHovering ? 'w-12 h-12 rotate-90' : 'w-6 h-6 rotate-0'
        }`}
      >
        {/* Crosshair Lines - Extend on hover */}
        <div className={`absolute w-[140%] h-[1px] bg-white transition-all duration-500 ease-out-expo ${isHovering ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        <div className={`absolute h-[140%] w-[1px] bg-white transition-all duration-500 ease-out-expo ${isHovering ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

        {/* CAD Box Corners */}
        <div className={`absolute inset-0 transition-all duration-500 ease-out-expo ${isHovering ? 'scale-100' : 'scale-100'}`}>
            {/* Top Left */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-white transition-all duration-500 ${isHovering ? 'translate-x-0 translate-y-0' : 'translate-x-[2px] translate-y-[2px]'}`}></div>
            {/* Top Right */}
            <div className={`absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-white transition-all duration-500 ${isHovering ? 'translate-x-0 translate-y-0' : '-translate-x-[2px] translate-y-[2px]'}`}></div>
            {/* Bottom Right */}
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-white transition-all duration-500 ${isHovering ? 'translate-x-0 translate-y-0' : '-translate-x-[2px] -translate-y-[2px]'}`}></div>
            {/* Bottom Left */}
            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-white transition-all duration-500 ${isHovering ? 'translate-x-0 translate-y-0' : 'translate-x-[2px] -translate-y-[2px]'}`}></div>
        </div>

        {/* Center Precision Dot - Disappears on hover for clear view */}
        <div className={`w-1 h-1 bg-white rounded-full transition-all duration-300 ${isHovering ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></div>
      </div>
    </div>
  );
};

export default CustomCursor;