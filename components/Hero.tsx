import React, { useState, useRef } from 'react';
import { MapPin, Mail, Linkedin, Phone } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 7 degrees for subtle effect)
    const rotateX = ((y - centerY) / centerY) * -7; 
    const rotateY = ((x - centerX) / centerX) * 7;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setScale(1.05);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-20 pb-10 md:pt-24 md:pb-12" aria-label="Introduction">
      {/* PRINT LAYOUT HEADER - Visible only when printing */}
      <div className="hidden print:block w-full text-left mb-8 border-b-2 border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-black mb-2">{PROFILE.name}</h1>
        <h2 className="text-xl text-slate-700 mb-4">{PROFILE.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
           <span className="flex items-center"><Mail className="w-4 h-4 mr-1" aria-hidden="true" /> {PROFILE.contact.email}</span>
           <span className="flex items-center"><Phone className="w-4 h-4 mr-1" aria-hidden="true" /> {PROFILE.contact.phone}</span>
           <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" aria-hidden="true" /> {PROFILE.location}</span>
           <span className="flex items-center"><Linkedin className="w-4 h-4 mr-1" aria-hidden="true" /> {PROFILE.contact.linkedin}</span>
        </div>
      </div>

      {/* WEB LAYOUT - Standard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center print:block">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <div className="print:hidden inline-flex items-center px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Available for Consulting
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white print:hidden">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 block sm:inline">{PROFILE.name}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-light tracking-tight print:hidden">
              {PROFILE.title}
            </h2>
            
            <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm md:text-base print:hidden">
              <MapPin className="w-4 h-4 mr-2 text-sky-500" aria-hidden="true" />
              {PROFILE.location}
            </div>
          </div>

          <div className="prose prose-invert max-w-lg text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed print:text-black print:max-w-full">
            <p>{PROFILE.summary[0]}</p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 print:text-slate-600">{PROFILE.summary[1]}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 print:hidden">
            <a 
              href={`mailto:${PROFILE.contact.email}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
              aria-label="Send an email to contact me"
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Contact Me
            </a>
            <a 
              href={`https://www.${PROFILE.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium transition-all hover:border-slate-400 dark:hover:border-slate-500 backdrop-blur-sm"
              aria-label="Visit my LinkedIn profile (opens in a new tab)"
            >
              <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Image with 3D Tilt Effect */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end print:hidden" style={{ perspective: '1000px' }}>
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative group cursor-pointer w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-[26rem]"
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${scale}, ${scale}, ${scale})`,
              transition: scale === 1 ? 'transform 0.5s ease-in-out' : 'transform 0.1s ease-out'
            }}
            role="img"
            aria-label={`Profile picture of ${PROFILE.name}`}
          >
            {/* Glow/Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl h-full w-full">
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
              />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;