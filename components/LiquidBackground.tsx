import React from 'react';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 print:hidden">
      
      {/* Minimalist Ambient Gradient - Very subtle */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-200/50 dark:bg-zinc-900/50 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-200/50 dark:bg-zinc-900/50 rounded-full blur-[120px] opacity-40"></div>
      
      {/* Optional: Very faint noise texture if needed for texture, otherwise clean */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
};

export default LiquidBackground;