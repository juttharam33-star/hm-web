// src/components/Contact.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <AnimatedSection>
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-xs font-mono uppercase tracking-widest text-accent-pink mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-5xl font-light text-olive-100 mb-4">
            Initiate an Opportunity
          </h3>
          <p className="text-olive-400 text-sm leading-relaxed">
            Whether you have a technical contract, a full-stack role, or an innovative web project, reach out directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="bg-olive-800 border border-olive-700 rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <h4 className="text-lg font-medium text-olive-100 mb-4">Direct Channels</h4>
              <div className="space-y-4 text-sm text-olive-400 font-mono">
                <div>
                  <span className="block text-[10px] text-olive-500 uppercase font-sans">Email</span>
                  <a href="mailto:juttharam33@gmail.com" className="text-accent-pink underline break-all text-xs">
                    juttharam33@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-olive-500 uppercase font-sans">GitHub</span>
                  <a href="https://github.com/juttharam33-star" target="_blank" rel="noreferrer" className="text-olive-100 hover:text-accent-pink underline text-xs">
                    juttharam33-star
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-olive-500 uppercase font-sans">Location</span>
                  <span className="text-xs text-olive-100">Faisalabad, Pakistan (Remote)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-olive-700 text-xs text-olive-400">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-sage mr-2 animate-pulse"></span>
              Responding within 24 hours.
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-olive-800 border border-olive-700 rounded-2xl p-8 shadow-xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-olive-400 mb-2">YOUR NAME</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-olive-900 border border-olive-700 rounded-lg text-sm text-olive-100 focus:outline-none focus:border-accent-pink transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-olive-400 mb-2">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 bg-olive-900 border border-olive-700 rounded-lg text-sm text-olive-100 focus:outline-none focus:border-accent-pink transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-olive-400 mb-2">MESSAGE</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project or role scope..."
                  className="w-full px-4 py-3 bg-olive-900 border border-olive-700 rounded-lg text-sm text-olive-100 focus:outline-none focus:border-accent-pink transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent-pink text-white font-medium text-sm rounded-lg hover:opacity-90 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}