import React, { useEffect, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-24 pb-12 scroll-mt-28 overflow-hidden" aria-label="Introduction">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center w-full">
        
        {/* Left Column: Typography */}
        <div className="space-y-8 md:space-y-10 order-2 md:order-1">
          <div>
            <div className={`transition-all duration-1000 ease-out-expo delay-100 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4 tracking-wide uppercase text-xs md:text-sm">
                Digital Twin Consultant
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9] break-words">
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
              {PROFILE.summary[0]} Specialize in <span className="text-zinc-900 dark:text-white font-semibold">Autodesk Platform Services</span> and BIM implementation strategies.
            </p>
          </div>
          
          <div className={`flex flex-wrap gap-6 pt-2 transition-all duration-1000 ease-out-expo delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="flex items-center text-sm font-medium text-zinc-500">
               <MapPin className="w-4 h-4 mr-2" />
               {PROFILE.location}
             </div>
             <a 
               href="#projects" 
               className="group flex items-center text-sm font-bold text-zinc-900 dark:text-white border-b border-zinc-900 dark:border-white pb-1 hover:text-sky-600 hover:border-sky-600 transition-all"
             >
               View Selected Works <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
             </a>
          </div>
        </div>

        {/* Right Column: Clean Image */}
        <div className="order-1 md:order-2 relative px-4 md:px-0">
          <div className={`relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900 transition-all duration-1000 ease-out-expo delay-300 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img 
              src={PROFILE.image} 
              alt={PROFILE.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out-expo scale-110 hover:scale-105"
            />
            {/* Minimal overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Decorative minimalist element */}
          <div className={`absolute -bottom-6 -left-6 w-24 h-24 bg-zinc-100 dark:bg-zinc-800 -z-10 hidden md:block transition-all duration-1000 ease-out-expo delay-700 ${isMounted ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'}`}></div>
          <div className={`absolute -top-6 -right-6 w-24 h-24 border border-zinc-200 dark:border-zinc-800 -z-10 hidden md:block transition-all duration-1000 ease-out-expo delay-700 ${isMounted ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-4 -translate-y-4'}`}></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;