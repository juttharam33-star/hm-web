// src/components/Hero.jsx
import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import Sparkles from './Sparkles';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-10 pb-20 overflow-hidden border-b border-olive-700/60">
      <Sparkles />

      <section className="relative z-10 min-h-[85vh] flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-olive-800/90 border border-emerald-500/40 text-xs font-mono text-olive-100 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              Full-Stack Engineer & Systems Architect
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-olive-100 leading-[1.05]">
              Hi, I am Haram <br />
              <span className="font-semibold text-emerald-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                A full stack developer
              </span>
            </h1>

            <p className="text-base sm:text-lg text-olive-400 font-normal leading-relaxed max-w-xl">
              {personalInfo.tagline} Building production-grade applications, interactive web tools, and high-performance backend platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-emerald-500 text-olive-950 font-bold text-sm rounded-xl hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
              >
                Explore Projects 🚀
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-olive-800 text-olive-100 border border-olive-700 font-medium text-sm rounded-xl hover:border-emerald-400 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Column: 3D Card with your girl picture & scanline animation */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: mousePos.x === 0 ? 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
              }}
              className="relative bg-olive-800/90 border border-emerald-500/50 rounded-2xl p-5 shadow-2xl backdrop-blur-md animate-cyber-float animate-pulse-border group cursor-pointer"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-olive-400 pb-3 mb-3 border-b border-olive-700/60 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  SYSTEM // CONTROL CENTER
                </span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>

              {/* Your Image Rendered Here */}
              <div className="aspect-video bg-olive-900 rounded-xl overflow-hidden relative border border-olive-700 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/girl.jpg" 
                  alt="Haram at Workstation"
                  className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Laser Scan Line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34D399] animate-scan-beam pointer-events-none"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/90 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 bg-olive-950/90 text-emerald-400 rounded-md backdrop-blur border border-emerald-500/30 text-[10px] font-bold">
                    Terminal // React & Node.js
                  </span>
                  <span className="text-emerald-400 font-bold animate-pulse">● Active Session</span>
                </div>
              </div>

              <div className="mt-4 pt-2 flex justify-between items-center text-xs font-mono text-olive-400">
                <span>React • Tailwind • Node.js</span>
                <span className="text-emerald-400">Faisalabad / Remote</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Moving Marquee */}
      <div className="mt-12 py-3 bg-olive-900/80 border-y border-olive-700/60 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xs font-mono text-olive-400 gap-12">
          <span>REACT.JS DEVELOPMENT</span>
          <span className="text-emerald-400">•</span>
          <span>TAILWIND CSS V4</span>
          <span className="text-emerald-400">•</span>
          <span>NODE.JS BACKEND</span>
          <span className="text-emerald-400">•</span>
          <span>MONGODB ATLAS</span>
          <span className="text-emerald-400">•</span>
          <span>REST APIS & AI INTEGRATION</span>
          <span className="text-emerald-400">•</span>
          <span>FULL-STACK ARCHITECTURE</span>
        </div>
      </div>
    </div>
  );
}