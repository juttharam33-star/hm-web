// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "System initialized 👋 Hi! I'm Haram's virtual portfolio assistant. How can I help you explore her skills, projects, or professional background today?",
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    setTimeout(() => {
      let botReply = "";
      const q = userMessage.toLowerCase();

      // 1. Greetings & Goodbyes
      if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('greetings')) {
        botReply = "Hello! I'm here to help you navigate Haram's portfolio. Feel free to ask about her projects, technical stack, or availability.";
      } 
      else if (q.includes('bye') || q.includes('goodbye') || q.includes('see you') || q.includes('take care')) {
        botReply = "Goodbye! Thank you for visiting Haram's portfolio. You can reach out directly at juttharam33@gmail.com. Have a great day! 👋";
      }
      // 2. Compliments & Positive Feedback
      else if (q.includes('good') || q.includes('great') || q.includes('awesome') || q.includes('nice') || q.includes('impressive') || q.includes('talented') || q.includes('amazing') || q.includes('cool')) {
        botReply = "Thank you so much! Haram takes great pride in building clean, high-performance web applications. Let me know if you'd like to inspect her code or projects!";
      }
      // 3. Skills & Tech Stack
      else if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('react') || q.includes('node') || q.includes('tailwind') || q.includes('python')) {
        botReply = "Haram specializes in React, Node.js, Express.js, MongoDB Atlas, Tailwind CSS (v4), JavaScript (ES6+), Python, and Git version control.";
      }
      // 4. Projects & Portfolio Work
      else if (q.includes('project') || q.includes('portfolio') || q.includes('build') || q.includes('app') || q.includes('rastah')) {
        botReply = "Her key builds include a full-stack Student Task Manager (React + Node + MongoDB), a live streetwear frontend clone (Rastah), luxury automotive UI sites, and robust terminal utility scripts.";
      }
      // 5. Background, Experience & Education
      else if (q.includes('background') || q.includes('experience') || q.includes('education') || q.includes('study') || q.includes('degree') || q.includes('qualification') || q.includes('about her')) {
        botReply = "Haram is an ambitious full-stack developer with specialized training in custom web page design, front-end and back-end web engineering, and interactive application development.";
      }
      // 6. Schedule, Availability, Hiring & Contact
      else if (q.includes('schedule') || q.includes('available') || q.includes('hire') || q.includes('job') || q.includes('freelance') || q.includes('contract') || q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
        botReply = "Haram is actively open to new professional opportunities, freelance web projects, and remote contracts. You can connect with her via email at juttharam33@gmail.com or on LinkedIn under haram-hamid-96a949388.";
      }
      // 7. Professional Fallback for Random / Out-of-Scope Questions
      else {
        botReply = "I am just her virtual portfolio assistant, so I cannot answer that! However, I'd be happy to help you explore Haram's technical skills, featured projects, or connect you with her directly.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-5 py-3.5 bg-olive-800 border border-emerald-500/50 text-emerald-400 font-mono text-xs font-bold rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all cursor-pointer group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>AI Assistant</span>
          <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px]">
            ● Open To Work
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[490px] bg-olive-900 border border-emerald-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-cyber-float">
          <div className="p-4 bg-olive-800 border-b border-olive-700/60 flex justify-between items-center text-xs font-mono">
            <div className="flex items-center gap-2 text-olive-100 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Haram.AI // Portfolio Assistant
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-olive-400 hover:text-emerald-400 text-sm font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-2 bg-emerald-500/10 border-b border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-400">
            <span>● Status: Available for Hire</span>
            <span className="opacity-80">Remote / Full-Stack</span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500 text-olive-950 font-medium rounded-br-none'
                      : 'bg-olive-800 border border-olive-700 text-olive-100 rounded-bl-none font-mono'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-olive-800/80 border-t border-olive-700/60 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, background..."
              className="flex-1 px-3 py-2 bg-olive-900 border border-olive-700 rounded-xl text-xs text-olive-100 focus:outline-none focus:border-emerald-400 font-mono"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 text-olive-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-all cursor-pointer font-mono"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}