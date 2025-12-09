import React, { useState, useEffect } from 'react';
import { Terminal, Activity, Wifi } from 'lucide-react';

const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: './HOME', id: 'home' },
    { label: './PROJECTS', id: 'projects' },
    { label: './STACK', id: 'about' },
    { label: './CONTACT', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-white/10 h-10 flex items-center justify-between px-4 text-xs tracking-wider select-none">
      {/* Left: Branding */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Terminal size={14} />
          <span className="font-bold">PEIIII_OS <span className="text-dim">v2.5.0</span></span>
        </div>
        <div className="hidden md:flex items-center gap-4 ml-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-dim hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Status Indicators */}
      <div className="flex items-center gap-4 text-dim">
        <div className="hidden md:flex items-center gap-2">
          <Activity size={12} className="text-primary animate-pulse" />
          <span>SYSTEM NORMAL</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi size={12} />
          <span>{time.toLocaleTimeString([], {hour12: false})}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
