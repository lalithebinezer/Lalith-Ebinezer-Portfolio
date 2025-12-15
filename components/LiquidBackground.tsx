import React, { useEffect, useRef } from 'react';

const LiquidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--x', `${clientX}px`);
      containerRef.current.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 print:hidden">
      
      {/* 1. Base Grid Pattern */}
      <div className="absolute inset-0 bg-dot-black/[0.2] dark:bg-dot-white/[0.1] pointer-events-none" />

      {/* 2. Spotlight Mask Effect */}
      {/* This div tracks the mouse and reveals a radial gradient that acts as a spotlight */}
      <div 
        ref={containerRef}
        className="pointer-events-none absolute inset-0 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(14, 165, 233, 0.15), transparent 80%)`,
        }}
      />
      
      {/* 3. Vignette to fade edges into darkness (Focuses attention on center) */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* 4. Subtle Ambient Glow (Optional - keeps a bit of the original brand color) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 dark:bg-sky-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
    </div>
  );
};

export default LiquidBackground;