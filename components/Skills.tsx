import React from 'react';
import { SKILLS, EDUCATION } from '../constants';
import FadeIn from './FadeIn';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-28">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
             <FadeIn>
                <h3 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white sticky top-32">
                   Expertise & <br /> Education
                </h3>
             </FadeIn>
          </div>

          <div className="md:col-span-2 space-y-16">
             {/* Skills Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SKILLS.map((category, idx) => (
                  <FadeIn key={idx} delay={idx * 100}>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                        {category.title}
                      </h4>
                      <ul className="space-y-2">
                        {category.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300 cursor-default transform hover:translate-x-1">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
             </div>

             {/* Education */}
             <div className="pt-8">
                <FadeIn delay={400}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                       Education
                    </h4>
                </FadeIn>
                <div className="space-y-8">
                  {EDUCATION.map((edu, index) => (
                    <FadeIn key={index} delay={500 + (index * 100)}>
                        <div>
                          <h5 className="text-lg font-serif font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition-colors">{edu.degree}</h5>
                          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{edu.institution}</p>
                          <p className="text-zinc-400 dark:text-zinc-600 text-xs font-mono mt-1">{edu.period}</p>
                        </div>
                    </FadeIn>
                  ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Skills;