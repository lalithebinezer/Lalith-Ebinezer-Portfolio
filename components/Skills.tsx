import React from 'react';
import { SKILLS, EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 md:py-20 print:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 print:block">
        
        {/* Skills Column */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12 print:mb-8">
           <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 flex items-center print:text-black">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 w-8 md:w-12 h-1 mr-4 rounded-full print:hidden"></span>
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 print:block print:space-y-4">
            {SKILLS.map((category, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-5 md:p-6 rounded-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors print:border-none print:p-0 print:bg-transparent">
                <h4 className="text-sky-600 dark:text-sky-400 font-bold mb-4 tracking-wide uppercase text-xs md:text-sm print:text-black print:border-b print:border-slate-200 print:pb-1">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-xs md:text-sm rounded-md border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-default print:border print:border-slate-300 print:text-black print:bg-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="lg:col-span-1 print:mt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 flex items-center print:text-black">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 w-8 md:w-12 h-1 mr-4 rounded-full print:hidden"></span>
            Education
          </h3>
          
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl print:shadow-none print:border-none print:bg-transparent print:p-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center mb-5 md:mb-6 text-indigo-600 dark:text-indigo-400 print:hidden">
                  <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 print:text-black">{edu.degree}</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3 md:mb-4 text-sm md:text-base print:text-slate-800">{edu.institution}</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs md:text-sm print:text-slate-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;