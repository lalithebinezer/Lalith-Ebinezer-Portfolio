import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-20">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Ready to <span className="text-sky-600">transform</span> your construction workflows?
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Whether you need strategic BIM implementation, custom automation tools, or a complete digital twin solution, I'm here to help you build the future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${PROFILE.contact.email}`}
              className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-lg rounded-full overflow-hidden transition-transform duration-300 ease-out-expo hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Say Hello
              </span>
            </a>

            <a 
              href={`https://${PROFILE.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-lg rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 ease-out-expo hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5 text-[#0a66c2]" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="pt-12 flex flex-col items-center gap-4 opacity-60">
             <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-400 to-transparent"></div>
             <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
               <MapPin className="w-4 h-4" />
               {PROFILE.location}
             </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;