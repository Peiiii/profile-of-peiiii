import React, { useState, useEffect } from 'react';
import { Terminal, Activity, Wifi } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.stack, id: 'about' },
    { label: t.nav.contact, id: 'contact' },
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

      {/* Right: Status Indicators & Language Toggle */}
      <div className="flex items-center gap-6 text-dim">
        
        {/* Language Switcher - Hacker Style */}
        <div className="flex items-center gap-1 font-mono cursor-pointer border border-white/10 px-2 py-0.5 hover:border-primary/50 transition-colors">
          <span 
            className={`${language === 'en' ? 'text-primary font-bold' : 'text-dim hover:text-white'} transition-colors`}
            onClick={() => setLanguage('en')}
          >
            EN
          </span>
          <span className="text-dim/50">/</span>
          <span 
            className={`${language === 'zh' ? 'text-primary font-bold' : 'text-dim hover:text-white'} transition-colors`}
            onClick={() => setLanguage('zh')}
          >
            ZH
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Activity size={12} className="text-primary animate-pulse" />
          <span>{t.nav.system_normal}</span>
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
