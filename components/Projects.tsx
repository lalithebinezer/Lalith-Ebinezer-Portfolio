import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import FadeIn from './FadeIn';

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedProject(null);
        else if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'ArrowLeft') prevImage();
      };
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => modalRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject]);

  const getProjectImages = (project: Project | null) => {
    if (!project) return [];
    return (project.images && project.images.length > 0) ? project.images : [PLACEHOLDER_IMAGE];
  };

  const currentImages = getProjectImages(selectedProject);

  const nextImage = () => {
    if (currentImages.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    if (currentImages.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-28">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-2">
              Selected Projects
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              A showcase of technical implementations and digital twins.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-8 bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="font-mono text-xs text-zinc-400">
            {PROJECTS.length} ITEMS
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {PROJECTS.map((project, index) => {
          const coverImage = project.images?.[0] || PLACEHOLDER_IMAGE;

          return (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-4 relative">
                  <img 
                    src={coverImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out-expo flex items-center justify-center">
                      <span className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">View Project</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-sky-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                          {project.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-sky-600 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4 backdrop-blur-sm bg-black/40 animate-fade-in">
          <div 
            ref={modalRef} 
            className="w-full h-full md:h-auto md:max-w-5xl md:max-h-[90vh] bg-white dark:bg-zinc-950 shadow-2xl outline-none overflow-y-auto flex flex-col md:flex-row transform transition-all duration-500 ease-out-expo"
            tabIndex={-1}
          >
             {/* Close Button Mobile - Floating */}
             <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full md:hidden backdrop-blur-md"
             >
                <X className="w-5 h-5" />
             </button>

             {/* Image Section */}
             <div className="w-full md:w-2/3 bg-zinc-100 dark:bg-zinc-900 relative min-h-[300px] md:min-h-auto flex items-center justify-center group flex-shrink-0">
                <img src={currentImages[currentImageIndex]} className="w-full h-full md:max-w-full md:max-h-[80vh] object-cover md:object-contain" alt={selectedProject.title} />
                
                {currentImages.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"><ChevronLeft /></button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"><ChevronRight /></button>
                  </>
                )}
             </div>

             {/* Content Section */}
             <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col bg-white dark:bg-zinc-950">
                <div className="flex justify-between items-start mb-6">
                   <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white pr-8 md:pr-0">
                     {selectedProject.title}
                   </h2>
                   <button onClick={() => setSelectedProject(null)} className="hidden md:block text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
                     <X />
                   </button>
                </div>

                <div className="space-y-6 flex-grow">
                   <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">About</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                   </div>
                   
                   <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
                             {t}
                          </span>
                        ))}
                      </div>
                   </div>

                   {selectedProject.links.demo || selectedProject.links.code ? (
                      <div className="pt-4 flex gap-4 mt-auto">
                         {selectedProject.links.demo && (
                           <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-sky-600 hover:underline flex items-center group">
                             Live Demo <ExternalLink className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                           </a>
                         )}
                         {selectedProject.links.code && (
                           <a href={selectedProject.links.code} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-zinc-900 dark:text-white hover:underline flex items-center group">
                             Source Code <Github className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                           </a>
                         )}
                      </div>
                   ) : null}
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;