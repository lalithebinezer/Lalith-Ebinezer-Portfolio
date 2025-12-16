import React from 'react';
import { EXPERIENCE } from '../constants';
import FadeIn from './FadeIn';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <FadeIn>
            <h3 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white sticky top-32">
              Experience
            </h3>
          </FadeIn>
        </div>

        <div className="md:col-span-3 space-y-20">
          {EXPERIENCE.map((job, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left: Company & Location */}
                <div className="md:col-span-1">
                  <div className="md:sticky md:top-40">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                      {job.company}
                    </h4>
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 block">
                      {job.location}
                    </span>
                  </div>
                </div>
                
                {/* Right: Roles Timeline */}
                {/* ml-6 on mobile ensures the -left-[41px] dots don't get cut off by screen edge */}
                <div className="md:col-span-2 space-y-12 relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 ml-6 md:ml-0">
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
                          <li key={idx} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
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