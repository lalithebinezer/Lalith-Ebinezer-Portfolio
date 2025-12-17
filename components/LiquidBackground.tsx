import React from 'react';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 print:hidden">
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -20px) rotate(2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, -15px) rotate(-2deg); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite;
        }
      `}</style>

      {/* Minimalist Ambient Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-200/50 dark:bg-zinc-900/50 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-200/50 dark:bg-zinc-900/50 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      
      {/* Digital Twin Conceptual Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* 1. Subtle Background Grid - Represents Infrastructure/Foundation */}
        <svg className="absolute w-full h-full opacity-[0.02] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-900 dark:text-zinc-100" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* 2. Rotating Wireframe Geometry - Represents 3D/BIM Models */}
        <div className="absolute top-[15%] right-[10%] w-80 h-80 opacity-[0.03] dark:opacity-[0.06] animate-[spin_60s_linear_infinite]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-zinc-800 dark:text-zinc-200 w-full h-full">
            {/* Hexagonal Prism / Cube Isometric */}
            <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" strokeWidth="0.5" />
            <path d="M50 5 L50 50 L90 75" strokeWidth="0.5" />
            <path d="M50 50 L10 75" strokeWidth="0.5" />
            <path d="M10 25 L50 50" strokeWidth="0.5" />
            <path d="M90 25 L50 50" strokeWidth="0.5" />
            {/* Connection Nodes */}
            <circle cx="50" cy="5" r="1.5" fill="currentColor" />
            <circle cx="90" cy="25" r="1.5" fill="currentColor" />
            <circle cx="90" cy="75" r="1.5" fill="currentColor" />
            <circle cx="50" cy="95" r="1.5" fill="currentColor" />
            <circle cx="10" cy="75" r="1.5" fill="currentColor" />
            <circle cx="10" cy="25" r="1.5" fill="currentColor" />
            <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>

        {/* 3. Floating Data Network - Represents IoT/Connectivity */}
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 opacity-[0.04] dark:opacity-[0.08] animate-float-slow">
           <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-sky-800 dark:text-sky-200 w-full h-full">
             <circle cx="20" cy="20" r="1.5" fill="currentColor" />
             <circle cx="80" cy="30" r="1.5" fill="currentColor" />
             <circle cx="50" cy="80" r="1.5" fill="currentColor" />
             <circle cx="30" cy="50" r="1.5" fill="currentColor" />
             <circle cx="70" cy="60" r="1.5" fill="currentColor" />
             
             {/* Dashed Data Lines */}
             <path d="M20 20 L80 30" strokeWidth="0.3" strokeDasharray="2 2" />
             <path d="M80 30 L50 80" strokeWidth="0.3" strokeDasharray="2 2" />
             <path d="M50 80 L30 50" strokeWidth="0.3" strokeDasharray="2 2" />
             <path d="M30 50 L20 20" strokeWidth="0.3" strokeDasharray="2 2" />
             <path d="M30 50 L70 60" strokeWidth="0.3" strokeDasharray="2 2" />
             <path d="M70 60 L80 30" strokeWidth="0.3" strokeDasharray="2 2" />
           </svg>
        </div>

        {/* 4. Abstract "Sensor" Pulse - Represents Real-time Data */}
        <div className="absolute top-[40%] left-[15%] opacity-[0.05] dark:opacity-[0.1] animate-float-reverse">
           <svg width="120" height="120" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-zinc-600 dark:text-zinc-400" strokeDasharray="4 4" />
             <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-zinc-600 dark:text-zinc-400" />
             <circle cx="50" cy="50" r="2" fill="currentColor" className="text-sky-500 animate-ping" style={{ animationDuration: '4s' }} />
           </svg>
        </div>

      </div>
      
      {/* Existing Noise Filter */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
};

export default LiquidBackground;