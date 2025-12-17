import React, { useEffect, useState, useRef } from 'react';
import { MapPin, ArrowRight, Linkedin, Mouse } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Calculate rotation: range from -10 to 10 degrees
    const rotateX = (0.5 - y) * 20; 
    const rotateY = (x - 0.5) * 20;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center pt-32 pb-12 md:pt-40 md:pb-20 scroll-mt-28 overflow-hidden relative" aria-label="Introduction">
      <div className="flex-grow flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center w-full">
          
          {/* Left Column: Typography */}
          <div className="space-y-8 md:space-y-10 order-2 md:order-1">
            <div>
              <div className={`transition-all duration-1000 ease-out-expo delay-100 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4 tracking-wide uppercase text-xs md:text-sm">
                  Digital Twin Consultant
                </p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.95] md:leading-[0.9] break-words">
                <div className="overflow-hidden">
                   <span className={`block transition-transform duration-1000 ease-out-expo delay-200 ${isMounted ? 'translate-y-0' : 'translate-y-full'}`}>
                     {PROFILE.name.split(' ')[0]}
                   </span>
                </div>
                <div className="overflow-hidden">
                  <span className={`block transition-transform duration-1000 ease-out-expo delay-300 ${isMounted ? 'translate-y-0' : 'translate-y-full'}`}>
                    <span className="text-zinc-400 dark:text-zinc-600">{PROFILE.name.split(' ')[1]}</span><span className="text-sky-600">.</span>
                  </span>
                </div>
              </h1>
            </div>

            <div className={`max-w-md transition-all duration-1000 ease-out-expo delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
                {PROFILE.summary[0]} My expertise focuses on <span className="text-zinc-900 dark:text-white font-semibold">Autodesk Platform Services</span> and establishing robust <span className="text-zinc-900 dark:text-white font-semibold">CDE</span> platforms.
              </p>
            </div>
            
            <div className={`flex flex-wrap items-center gap-x-6 gap-y-4 pt-2 transition-all duration-1000 ease-out-expo delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <div className="flex items-center text-sm font-medium text-zinc-500 mr-2">
                 <MapPin className="w-4 h-4 mr-2" />
                 {PROFILE.location}
               </div>
               
               <a 
                 href="#projects" 
                 className="group flex items-center text-sm font-bold text-zinc-900 dark:text-white border-b border-zinc-900 dark:border-white pb-1 hover:text-sky-600 hover:border-sky-600 transition-all"
               >
                 View Selected Works <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
               </a>

               <a 
                 href={`https://${PROFILE.contact.linkedin}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex items-center text-sm font-bold text-zinc-500 dark:text-zinc-400 border-b border-zinc-300 dark:border-zinc-700 pb-1 hover:text-[#0a66c2] hover:border-[#0a66c2] transition-all"
               >
                 Connect <Linkedin className="w-4 h-4 ml-2 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
               </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Image */}
          <div className="order-1 md:order-2 relative px-2 sm:px-0">
            <div 
              className={`relative aspect-[3/4] md:aspect-[4/5] transition-all duration-1000 ease-out-expo delay-300 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ perspective: '1000px' }}
            >
              <div 
                 ref={imageContainerRef}
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}
                 className="w-full h-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-2xl relative cursor-pointer"
                 style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
                    transition: 'transform 0.1s ease-out',
                    transformStyle: 'preserve-3d'
                 }}
              >
                  <img 
                    src={PROFILE.image} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover object-center pointer-events-none"
                  />
                  
                  {/* Dynamic Glare Effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-200"
                    style={{
                       background: `linear-gradient(${135 + tilt.y * 2}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
                       opacity: Math.abs(tilt.x) + Math.abs(tilt.y) > 0 ? 0.3 : 0
                    }}
                  />
              </div>
            </div>
            
            {/* Decorative minimalist elements */}
            <div className={`absolute -bottom-6 -left-6 w-24 h-24 bg-zinc-100 dark:bg-zinc-800 -z-10 hidden md:block transition-all duration-1000 ease-out-expo delay-700 ${isMounted ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'}`}></div>
            <div className={`absolute -top-6 -right-6 w-24 h-24 border border-zinc-200 dark:border-zinc-800 -z-10 hidden md:block transition-all duration-1000 ease-out-expo delay-700 ${isMounted ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-4 -translate-y-4'}`}></div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600 animate-bounce">
           <span className="text-[10px] uppercase tracking-widest">Scroll</span>
           <Mouse className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;