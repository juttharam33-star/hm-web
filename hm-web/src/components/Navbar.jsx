import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-olive-950/90 backdrop-blur-xl border-b border-olive-700/50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-lg font-semibold tracking-tight text-olive-100 flex items-center gap-2.5 cursor-pointer group"
        >
          <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399] group-hover:scale-125 transition-transform"></span>
          {personalInfo.name} <span className="text-olive-400 font-mono text-xs">/ HM-Web</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-olive-400 hover:text-emerald-400 transition-colors cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium text-olive-400 hover:text-emerald-400 transition-colors cursor-pointer">Portfolio</button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-olive-400 hover:text-emerald-400 transition-colors cursor-pointer">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-olive-400 hover:text-emerald-400 transition-colors cursor-pointer">Contact</button>
        </nav>

        <button 
          onClick={() => scrollToSection('contact')}
          className="px-5 py-2.5 bg-emerald-500 text-olive-950 font-semibold text-xs font-mono rounded-lg hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
        >
          Let's Talk
        </button>
      </div>
    </header>
  );
}