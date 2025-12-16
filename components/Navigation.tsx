import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
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
      <nav 
        className={`fixed z-50 top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out print:hidden
          ${isScrolled ? 'bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4' : 'bg-transparent py-6'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold font-serif text-zinc-900 dark:text-zinc-50 tracking-tight cursor-pointer z-50"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Lalith Ebinezer<span className="text-sky-600">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors relative group"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}

            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700 mx-2"></div>

            <button 
              onClick={toggleTheme}
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a 
              href="mailto:lalithebinezer26@gmail.com"
              className="ml-2 text-sm font-bold text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white hover:border-sky-600 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-500 transition-all pb-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center md:hidden gap-4">
             <button 
              onClick={toggleTheme}
              className="text-zinc-500"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-zinc-900 dark:text-white z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden bg-zinc-50 dark:bg-zinc-950 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full w-full px-8 space-y-8">
           {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-3xl font-serif font-bold text-zinc-900 dark:text-white hover:text-sky-600 transition-all duration-500 transform ${
                 isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          
          <div 
            className={`pt-8 transition-all duration-500 transform ${
               isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
             <a 
              href="mailto:lalithebinezer26@gmail.com"
              className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;