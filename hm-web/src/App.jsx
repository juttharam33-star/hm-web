// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-olive-950 text-olive-100 font-sans selection:bg-emerald-500 selection:text-olive-950 overflow-x-hidden relative">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Floating Interactive AI Assistant */}
      <Chatbot />

      <footer className="border-t border-olive-700/60 py-12 px-6 mt-20 text-center text-xs font-mono text-olive-400">
        <p>© {new Date().getFullYear()} Haram. Crafted with React, Tailwind CSS, & Cyber Olive Aesthetics.</p>
      </footer>
    </div>
  );
}