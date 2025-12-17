import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, ChevronLeft, ChevronRight, Layers, Code, Box } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import FadeIn from './FadeIn';

// Categories for filtering
const FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'dev', label: 'Development & Automation' },
  { id: 'bim', label: 'BIM & Strategy' },
  { id: 'vis', label: '3D & Visualization' }
];

// Helper to map project category to filter id
const getCategoryId = (cat: string) => {
   const c = cat.toLowerCase();
   if (c.includes('web') || c.includes('data') || c.includes('cloud') || c.includes('automation')) return 'dev';
   if (c.includes('construction') || c.includes('consult') || c.includes('bim') || c.includes('strategy')) return 'bim';
   if (c.includes('3d') || c.includes('vr') || c.includes('virtual') || c.includes('sim')) return 'vis';
   return 'all';
};

// Fallback images based on category
const getPlaceholderImage = (category: string): string => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('data') || categoryLower.includes('visualization')) {
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
  }
  if (categoryLower.includes('web') || categoryLower.includes('development') || categoryLower.includes('cloud')) {
    return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80";
  }
  if (categoryLower.includes('3d') || categoryLower.includes('simulation') || categoryLower.includes('vr')) {
    return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80";
  }
  if (categoryLower.includes('construction') || categoryLower.includes('bim')) {
    return "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";
  }
  return "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80";
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter Logic
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(PROJECTS);
    } else {
      setVisibleProjects(PROJECTS.filter(p => getCategoryId(p.category) === activeFilter));
    }
  }, [activeFilter]);

  // Modal Logic
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
      // Small delay to ensure render
      setTimeout(() => modalRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject]);

  const getProjectImages = (project: Project | null) => {
    if (!project) return [];
    if (project.images && project.images.length > 0) return project.images;
    return [getPlaceholderImage(project.category)];
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
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900 scroll-mt-20">
      <div className="flex flex-col space-y-12">
        
        {/* Header & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <FadeIn>
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white tracking-tight">
                Selected Works
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-lg">
                A curated collection of digital twins, automation tools, and strategic implementations.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100} direction="left">
            <div className="flex flex-wrap gap-2 p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl overflow-hidden">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProjects.map((project, index) => {
            const hasImages = project.images && project.images.length > 0;
            const coverImage = hasImages ? project.images![0] : getPlaceholderImage(project.category);
            const categoryId = getCategoryId(project.category);

            return (
              <FadeIn key={`${project.title}-${index}`} delay={index * 100}>
                <div 
                  className="group relative flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(project); }}
                >
                  {/* Card Image Container */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-500 ease-out-expo group-hover:shadow-xl group-hover:-translate-y-2">
                    <img 
                      src={coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                       <span className="text-white font-serif text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                         View Case Study
                       </span>
                       <div className="mt-4 flex gap-2 flex-wrap justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                             <span key={i} className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full border border-white/10">
                               {tech}
                             </span>
                          ))}
                          {project.technologies.length > 3 && (
                             <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full border border-white/10">+{project.technologies.length - 3}</span>
                          )}
                       </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-5 px-1">
                    <div className="flex items-center justify-between mb-2">
                       <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 
                         ${categoryId === 'dev' ? 'text-blue-600 dark:text-blue-400' : 
                           categoryId === 'bim' ? 'text-orange-600 dark:text-orange-400' : 
                           'text-purple-600 dark:text-purple-400'}`}>
                         {project.category}
                       </span>
                       <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-sky-600 transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-end md:items-center justify-center sm:p-4 backdrop-blur-md bg-zinc-900/40 dark:bg-black/60 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div 
            ref={modalRef}
            className="w-full max-h-[85vh] md:max-w-6xl md:h-[85vh] bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-t-2xl md:rounded-2xl outline-none"
            tabIndex={-1}
          >
             {/* Modal Image Gallery (Left/Top) */}
             <div className="w-full md:w-[60%] h-[35vh] md:h-full bg-zinc-100 dark:bg-zinc-900 relative group shrink-0">
                <img 
                  src={currentImages[currentImageIndex]} 
                  className="w-full h-full object-contain md:object-cover" 
                  alt={selectedProject.title} 
                />
                
                {/* Image Navigation Controls */}
                {currentImages.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
                
                {/* Image Dots */}
                {currentImages.length > 1 && (
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {currentImages.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                        />
                      ))}
                   </div>
                )}
                
                {/* Close Button Mobile (Overlay) */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:hidden p-3 bg-black/50 text-white rounded-full backdrop-blur-md z-50 hover:bg-black/70 active:scale-95 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
             </div>

             {/* Modal Content (Right/Bottom) */}
             <div className="w-full md:w-[40%] flex flex-col h-[50vh] md:h-full bg-white dark:bg-zinc-950 min-h-0">
                
                {/* Content Header */}
                <div className="p-6 md:p-10 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-start shrink-0">
                   <div>
                      <div className="flex items-center gap-2 mb-3">
                         {getCategoryId(selectedProject.category) === 'dev' && <Code className="w-4 h-4 text-blue-500" />}
                         {getCategoryId(selectedProject.category) === 'bim' && <Layers className="w-4 h-4 text-orange-500" />}
                         {getCategoryId(selectedProject.category) === 'vis' && <Box className="w-4 h-4 text-purple-500" />}
                         <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            {selectedProject.category}
                         </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 dark:text-white leading-tight">
                        {selectedProject.title}
                      </h2>
                   </div>
                   <button 
                     onClick={() => setSelectedProject(null)}
                     className="hidden md:flex p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                     aria-label="Close modal"
                   >
                     <X className="w-6 h-6" />
                   </button>
                </div>

                {/* Scrollable Description */}
                <div className="p-6 md:p-10 overflow-y-auto flex-grow">
                   <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mb-8">
                     {selectedProject.description}
                   </p>

                   <div className="space-y-6">
                      {selectedProject.features && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                             {selectedProject.features.map((feature, i) => (
                               <li key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                                  <span className="mt-1.5 w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0"></span>
                                  <span>{feature}</span>
                               </li>
                             ))}
                          </ul>
                        </div>
                      )}

                      <div>
                         <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3">Technologies</h4>
                         <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech, i) => (
                               <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-700/50">
                                 {tech}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 md:p-10 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
                   <div className="flex gap-4">
                      {selectedProject.links?.demo && (
                        <a 
                          href={selectedProject.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                        >
                           <ExternalLink className="w-4 h-4" />
                           View Project
                        </a>
                      )}
                      {selectedProject.links?.code && (
                        <a 
                          href={selectedProject.links.code} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 active:scale-[0.98] transition-all"
                        >
                           <Github className="w-4 h-4" />
                           Source Code
                        </a>
                      )}
                      {!selectedProject.links?.demo && !selectedProject.links?.code && (
                         <div className="w-full text-center text-sm text-zinc-500 italic">
                            Confidential Project - Detailed case study available upon request.
                         </div>
                      )}
                   </div>
                </div>

             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;