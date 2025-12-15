import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-20 print:py-0">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 md:mb-16 flex items-center print:text-black print:mb-6">
        <span className="bg-gradient-to-r from-sky-400 to-indigo-500 w-8 md:w-12 h-1 mr-4 rounded-full print:hidden"></span>
        Professional Experience
      </h3>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800/50 ml-3 md:ml-6 space-y-12 md:space-y-16 print:border-none print:ml-0 print:space-y-8">
        {/* Gradient Line for Timeline (Web only) */}
        <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-200 dark:to-slate-900 print:hidden"></div>

        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 md:pl-12 group print:pl-0">
            {/* Timeline Dot (Web only) */}
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 bg-slate-400 dark:bg-slate-600 group-hover:bg-sky-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.3)] print:hidden" />
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 print:mb-1">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors print:text-black print:text-lg">
                  {job.role}
                </h4>
                <div className="text-sky-600 dark:text-sky-500 font-medium text-base sm:text-lg mt-1 print:text-slate-800 print:font-semibold">{job.company}</div>
              </div>
              <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-xs sm:text-sm text-slate-500 dark:text-slate-500 space-y-1 print:text-slate-600 print:flex-row print:gap-4 print:mt-0">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 print:hidden" />
                  {job.period}
                </span>
                <span className="flex items-center print:hidden">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  {job.location}
                </span>
              </div>
            </div>

            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 print:space-y-1 print:mt-2">
              {job.description.map((point, idx) => (
                <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed print:text-black print:text-sm">
                  <span className="mt-2.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500/50 group-hover:bg-sky-500 dark:group-hover:bg-sky-400 transition-colors print:hidden"></span>
                  <span className="print:list-disc print:ml-4">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;