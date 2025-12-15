import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm print:hidden">
      <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
      <p className="mt-2 text-xs">Based in {PROFILE.location} • {PROFILE.contact.address}</p>
    </footer>
  );
};

export default Footer;