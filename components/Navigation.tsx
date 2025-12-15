import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial theme check
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || 'dark'; // Default to dark for consistency with original design
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  // Manual scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Increased offset for floating nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Island Navigation */}
      <nav 
        className={`fixed z-50 transition-all duration-500 ease-in-out print:hidden 
          left-1/2 -translate-x-1/2 
          ${isScrolled ? 'top-4 w-[90%] max-w-4xl' : 'top-6 w-[95%] max-w-6xl'}
          rounded-full border border-zinc-200/50 dark:border-white/10 
          bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl shadow-lg shadow-zinc-200/20 dark:shadow-black/20
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4 md:px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight cursor-pointer pl-2"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Lalith Ebinezer Portfolio Home"
          >
            LalithEbinezer<span className="text-sky-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 pr-4 border-r border-zinc-200 dark:border-white/10 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-all cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors mr-2"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
            </button>

            <a 
              href="mailto:lalithebinezer26@gmail.com"
              className="px-5 py-2 text-sm font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-full hover:scale-105 transition-transform"
              aria-label="Send email to hire me"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center md:hidden gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
            </button>

            <button 
              className="p-2 text-zinc-900 dark:text-zinc-200 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Detached from floating nav for better layout) */}
      <div 
        className={`fixed inset-0 z-40 md:hidden bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="space-y-6 text-center">
           {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`block text-2xl font-semibold text-zinc-800 dark:text-zinc-200 hover:text-sky-500 transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-8 transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <a 
              href="mailto:lalithebinezer26@gmail.com"
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-sky-600 rounded-full hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/30"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;