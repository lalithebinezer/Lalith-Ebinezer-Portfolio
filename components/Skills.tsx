import React from 'react';
import { SKILLS } from '../constants';
import FadeIn from './FadeIn';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-28">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
             <FadeIn>
                <div className="sticky top-32 flex flex-col gap-4">
                   <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-zinc-900 dark:text-white mb-2">
                     <Cpu className="w-6 h-6" />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white">
                      Technical <br /> Expertise
                   </h3>
                   <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                     A comprehensive toolkit covering BIM implementation, software infrastructure, and digital strategy. I am passionate about staying ahead of industry trends and continuously expanding my technical horizon.
                   </p>
                </div>
             </FadeIn>
          </div>

          <div className="md:col-span-2 space-y-16">
             {/* Skills Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {SKILLS.map((category, idx) => (
                  <FadeIn key={idx} delay={idx * 100}>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                        {category.title}
                        <span className="text-xs text-zinc-400 font-normal normal-case">0{idx + 1}</span>
                      </h4>
                      <ul className="space-y-3">
                        {category.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300 cursor-default transform hover:translate-x-1 flex items-center">
                            <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mr-3"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Skills;