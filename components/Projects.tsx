import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, FolderGit2, Mail, Maximize2, X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PROJECTS, PROFILE } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once when it comes into view
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle Modal Accessibility (Focus Trap & Escape Key) & Carousel Navigation
  useEffect(() => {
    if (selectedProject) {
      // Reset image index when opening modal
      setCurrentImageIndex(0);

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const nextImage = () => {
    if (!selectedProject?.images || selectedProject.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  };

  const prevImage = () => {
    if (!selectedProject?.images || selectedProject.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-12 md:py-20 print:py-0 relative" aria-label="Featured Projects">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 md:mb-12 flex items-center print:text-black">
        <span className="bg-gradient-to-r from-sky-400 to-indigo-500 w-8 md:w-12 h-1 mr-4 rounded-full print:hidden"></span>
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 print:block print:space-y-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className={`group relative flex flex-col h-full print:block print:h-auto transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } print:opacity-100 print:translate-y-0`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col h-full relative transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2">
              {/* Liquid Flow Border Effect - Web Only */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 animate-gradient-flow print:hidden" />
              
              <div className="relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-300 print:bg-transparent print:border-none print:p-0 print:mb-4">
                <div className="mb-4 flex items-center justify-between print:mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400 print:hidden" aria-hidden="true">
                      <FolderGit2 className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-lg print:text-black print:border-slate-300 print:bg-slate-100">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-3 text-slate-500 dark:text-slate-400 print:hidden">
                    {project.links.code && (
                      <a 
                        href={project.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors print:text-black">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow print:text-slate-700 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 text-xs font-medium text-sky-600 dark:text-sky-300 bg-sky-50 dark:bg-sky-500/10 rounded-full border border-sky-200 dark:border-sky-500/20 print:text-slate-800 print:border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                     <span className="px-2.5 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full">
                       +{project.technologies.length - 3}
                     </span>
                  )}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn print:hidden"
                  aria-expanded="false"
                  aria-label={`Learn more about ${project.title}`}
                >
                  <Maximize2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-12 md:mt-16 text-center print:hidden transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-base md:text-lg">
          Interested in collaborating on a project or have a question?
        </p>
        <a 
          href={`mailto:${PROFILE.contact.email}`}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all hover:-translate-y-0.5 group text-sm md:text-base"
          aria-label="Send email to get in touch"
        >
          <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" aria-hidden="true" />
          Get in Touch
        </a>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 print:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div 
            ref={modalRef}
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="inline-block px-2.5 py-1 mb-3 text-xs font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-lg">
                  {selectedProject.category}
                </span>
                <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h2>
              </div>
              <button 
                ref={closeButtonRef}
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Close details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              
              {/* Image Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden group/carousel bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Dots Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex 
                                ? 'bg-white w-6' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-48 md:h-64 mb-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-700">
                  <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                  <span className="text-sm">No images available</span>
                </div>
              )}

              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              {/* Key Features Section */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                        <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer (Links) */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 rounded-b-2xl flex flex-wrap gap-4">
              {selectedProject.links.demo && (
                <a 
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors shadow-lg shadow-sky-500/20"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              )}
              {selectedProject.links.code && (
                <a 
                  href={selectedProject.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              )}
              {!selectedProject.links.demo && !selectedProject.links.code && (
                <span className="text-slate-500 text-sm italic flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                  Internal / Confidential Project
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;