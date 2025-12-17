import React, { useState, useEffect } from 'react';
import { Sun, Moon, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active Section Detection
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within the viewport (with some offset)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
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
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
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
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <nav 
        className={`fixed z-50 top-0 left-0 right-0 w-full transition-all duration-500 ease-out-expo print:hidden
          ${isScrolled || isMobileMenuOpen ? 'bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3 md:py-4 shadow-sm' : 'bg-transparent py-5 md:py-6'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold font-serif text-zinc-900 dark:text-zinc-50 tracking-tight cursor-pointer z-50 relative"
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
                className={`text-sm font-medium transition-colors relative group py-1
                  ${activeSection === link.id 
                    ? 'text-zinc-900 dark:text-white' 
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-sky-600 transition-all duration-300 ease-out-expo
                  ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
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
          <div className="flex items-center md:hidden gap-2 z-50">
             <button 
              onClick={toggleTheme}
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-full active:bg-zinc-100 dark:active:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Animated Hamburger Button */}
            <button 
              className="p-2 text-zinc-900 dark:text-white flex items-center justify-center focus:outline-none active:bg-zinc-100 dark:active:bg-zinc-800 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
               <div className="relative w-6 h-5">
                 <span 
                   className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-out-expo ${
                     isMobileMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-0'
                   }`} 
                 />
                 <span 
                   className={`absolute left-0 top-2.5 w-full h-0.5 bg-current transform transition-all duration-300 ease-out-expo ${
                     isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                   }`} 
                 />
                 <span 
                   className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-out-expo ${
                     isMobileMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-5'
                   }`} 
                 />
               </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden bg-zinc-50/98 dark:bg-zinc-950/98 backdrop-blur-xl transition-all duration-500 ease-out-expo ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full w-full px-6 pt-24 pb-8 relative overflow-y-auto">
           {/* Navigation Links */}
           <div className="flex-grow flex flex-col justify-center space-y-8">
             {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-4xl font-serif font-bold transition-all duration-500 transform origin-left 
                  ${activeSection === link.id ? 'text-sky-600' : 'text-zinc-900 dark:text-white hover:text-sky-600'}
                  ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                `}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
           </div>
          
          {/* Footer / Contact Info in Mobile Menu */}
          <div 
            className={`mt-auto pt-8 border-t border-zinc-200 dark:border-zinc-800 transition-all duration-700 delay-300 transform ${
               isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
             <div className="flex flex-col gap-6">
               <a 
                  href={`mailto:${PROFILE.contact.email}`}
                  className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl text-center hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" /> Let's Talk
                </a>
                
                <div className="flex justify-between items-end">
                    <div className="flex gap-4 text-zinc-500 dark:text-zinc-400">
                        <a href={`https://${PROFILE.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors p-2 -ml-2 rounded-full active:bg-zinc-100 dark:active:bg-zinc-800">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 flex items-center mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        Riyadh, KSA
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;