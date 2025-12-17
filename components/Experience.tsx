import React from 'react';
import { EXPERIENCE } from '../constants';
import FadeIn from './FadeIn';
import { Briefcase, Users } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="md:col-span-1 mb-12 md:mb-0">
          <FadeIn>
            <div className="md:sticky md:top-32 space-y-6">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-zinc-900 dark:text-white mb-2">
                   <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white">
                  Experience
                </h3>
              </div>
              
              {/* Highlight Metric */}
              <div className="p-6 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Users className="w-16 h-16 text-sky-600 transform rotate-12" />
                </div>
                <span className="block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 mb-2">
                  10+
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white block mb-1">
                  Years of
                </span>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-tight block">
                  Client Satisfaction & <br/>Digital Transformation
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-3 space-y-12 md:space-y-20">
          {EXPERIENCE.map((job, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                {/* Left: Company & Location */}
                <div className="md:col-span-1">
                  <div className="md:sticky md:top-40">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-sky-600 transition-colors">
                      {job.company}
                    </h4>
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 block flex items-center">
                      {job.location}
                    </span>
                  </div>
                </div>
                
                {/* Right: Roles Timeline */}
                <div className="md:col-span-2 space-y-10 relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 ml-2 md:ml-0">
                  {job.roles.map((role, rIndex) => (
                    <div key={rIndex} className="relative">
                      {/* Timeline Dot */}
                      <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700 group-hover:border-zinc-100 dark:group-hover:border-zinc-900 transition-colors duration-300 ${rIndex === 0 ? 'bg-sky-600 dark:bg-sky-500' : ''}`}></div>
                      
                      <h5 className="text-xl font-serif font-bold text-zinc-800 dark:text-zinc-100 mb-1 group-hover:text-sky-600 transition-colors duration-300">
                        {role.title}
                      </h5>
                      <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-4 uppercase tracking-wide">
                        {role.period}
                      </div>
                      
                      <ul className="space-y-2">
                        {role.description.map((point, idx) => (
                          <li key={idx} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed relative pl-4">
                            <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;