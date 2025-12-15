import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LiquidBackground from './components/LiquidBackground';

const App: React.FC = () => {
  useEffect(() => {
    // Security: Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Security: Disable Developer Tools Shortcuts and View Source
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      
      // Prevent Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
      }

      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
      }
    };

    // Security: Disable Image Dragging
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-200 selection:bg-sky-200 dark:selection:bg-slate-700 relative transition-colors duration-300">
      <LiquidBackground />
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-32 relative z-10 mb-12 md:mb-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;