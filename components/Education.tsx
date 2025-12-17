import React from 'react';
import { EDUCATION } from '../constants';
import FadeIn from './FadeIn';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <FadeIn>
            <div className="sticky top-32 flex flex-col gap-4">
               <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-zinc-900 dark:text-white mb-2">
                 <GraduationCap className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white">
                 Education
               </h3>
               <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                 Academic foundation in Civil Engineering and advanced specialized training in Digital Construction.
               </p>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-3 space-y-12">
           {EDUCATION.map((edu, index) => (
             <FadeIn key={index} delay={index * 100}>
                <div className="group relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 ml-2 hover:border-sky-500/30 transition-colors duration-300">
                   <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-zinc-50 dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-300 shadow-sm"></div>
                   
                   <h4 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition-colors">
                     {edu.degree}
                   </h4>
                   
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 mb-4">
                     <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                       {edu.institution}
                     </p>
                     <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
                     <p className="text-sm font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wide bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded w-fit">
                       {edu.period}
                     </p>
                   </div>
                </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Education;