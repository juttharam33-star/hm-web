// src/components/Services.jsx
import React from 'react';
import { services } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  return (
    <AnimatedSection>
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-16">
        <div className="max-w-2xl">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent-pink mb-2">
            Capabilities & Deliverables
          </h2>
          <h3 className="text-3xl sm:text-5xl font-light text-olive-100 mb-4">
            Technical Services
          </h3>
          <p className="text-olive-400 text-sm leading-relaxed">
            Specialized development offerings engineered to deliver robust, scalable, and visually elite digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-olive-800 border border-olive-700 rounded-2xl flex flex-col justify-between hover:border-accent-pink hover:-translate-y-1 transition-all duration-500 shadow-xl"
            >
              <div>
                <span className="text-3xl font-mono font-light text-accent-pink block mb-6">
                  {service.id}
                </span>
                <h4 className="text-xl font-medium text-olive-100 mb-4">
                  {service.title}
                </h4>
                <p className="text-sm text-olive-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-olive-700 text-xs font-mono text-accent-pink">
                ✓ Production-Ready Delivery
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}