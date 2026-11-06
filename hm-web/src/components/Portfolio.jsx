import React from 'react';
import { projects, certifications } from '../data/portfolioData';

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-16">
      <div className="max-w-2xl">
        <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
          Visual Gallery & Projects
        </h2>
        <h3 className="text-3xl sm:text-5xl font-light text-olive-100 mb-4">
          Control Centers & Workstations
        </h3>
        <p className="text-olive-400 text-sm leading-relaxed">
          A visual curation of my coding environments, security testing modules, and full-stack production deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group bg-olive-800/80 border border-olive-700/80 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-400 transition-all duration-300">
          <div className="h-48 overflow-hidden bg-olive-900">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
              alt="Security Operations Workspace"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <span className="text-[10px] font-mono text-emerald-400 uppercase">Environment // 01</span>
            <h4 className="text-lg font-medium text-olive-100 mt-1 mb-2">Security & Terminal Operations</h4>
            <p className="text-xs text-olive-400">Configuring virtualized Linux environments and network mapping.</p>
          </div>
        </div>

        <div className="group bg-olive-800/80 border border-olive-700/80 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-400 transition-all duration-300">
          <div className="h-48 overflow-hidden bg-olive-900">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
              alt="Multi-Monitor Setup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <span className="text-[10px] font-mono text-emerald-400 uppercase">Environment // 02</span>
            <h4 className="text-lg font-medium text-olive-100 mt-1 mb-2">Full-Stack Rig</h4>
            <p className="text-xs text-olive-400">Building React and Node.js architectures across multi-monitor setups.</p>
          </div>
        </div>

        <div className="group bg-olive-800/80 border border-olive-700/80 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-400 transition-all duration-300">
          <div className="h-48 overflow-hidden bg-olive-900">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
              alt="Editorial UI Design"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <span className="text-[10px] font-mono text-emerald-400 uppercase">Environment // 03</span>
            <h4 className="text-lg font-medium text-olive-100 mt-1 mb-2">Editorial UI Design & Data</h4>
            <p className="text-xs text-olive-400">Crafting high-contrast layouts and interactive user interfaces.</p>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-2xl font-light text-olive-100 mb-8">Production Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <div 
              key={item.id}
              className="group bg-olive-800/80 border border-olive-700/80 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-olive-100 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  {item.liveUrl && (
                    <a 
                      href={item.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-mono text-emerald-400 underline underline-offset-4 hover:opacity-80"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
                <p className="text-olive-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-olive-700/60 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] font-mono px-3 py-1 bg-olive-900 border border-olive-700 rounded-md text-olive-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 border-t border-olive-700/60">
        <h3 className="text-2xl font-light text-olive-100 mb-8">
          Professional Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-8 bg-olive-800/80 border border-olive-700/80 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-mono text-emerald-400 block mb-1">{cert.date}</span>
                <h4 className="text-lg font-medium text-olive-100 mb-1">{cert.title}</h4>
                <p className="text-xs font-mono text-olive-400 mb-4">{cert.issuer}</p>
                <p className="text-sm text-olive-400 leading-relaxed mb-6">{cert.description}</p>
              </div>
              <span className="inline-block text-[10px] font-mono bg-olive-900 border border-olive-700 px-3 py-1.5 rounded text-olive-200 w-fit">
                ID: {cert.credentialId}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}