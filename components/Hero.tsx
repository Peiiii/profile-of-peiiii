import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [text, setText] = useState('');
  
  useEffect(() => {
    // Reset typing effect when language changes
    setText('');
    let i = 0;
    const fullText = t.hero.typing_text;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [t.hero.typing_text]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-20 border-b border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-20 right-10 text-right opacity-10 pointer-events-none hidden md:block">
        <pre className="text-xs text-primary">
{`const engineer = {
  name: "Peiiii",
  level: "Senior",
  status: "Online",
  lang: "${language}"
};`}
        </pre>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Intro Tag */}
        <div className="mb-6 flex items-center gap-2 text-primary font-mono text-sm animate-fade-in">
          <span className="w-2 h-2 bg-primary"></span>
          <span>{t.hero.initializing}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 uppercase tracking-tight">
          <div className="overflow-hidden">
            <span className="block animate-slide-up">{t.hero.role_prefix}</span>
          </div>
          <div className="overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">
            <span className="block animate-slide-up" style={{ animationDelay: '100ms' }}>{t.hero.role_suffix}</span>
          </div>
        </h1>

        {/* Typing Subtitle */}
        <div className="h-20 md:h-12 mb-10">
          <p className="text-xl md:text-2xl text-dim font-mono">
            <span className="text-secondary mr-2">{'>'}</span>
            {text}
            <span className="animate-blink inline-block w-3 h-6 bg-primary ml-1 align-middle"></span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
            <span className="mr-2">{t.hero.view_work}</span>
            <ChevronRight size={16} />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            {t.hero.get_touch}
          </Button>
        </div>

      </div>

      {/* Bottom Status Line */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 p-4 flex justify-between text-xs text-dim font-mono">
        <div>{t.hero.mem}</div>
        <div className="hidden md:block">LOC: 41.02, -101.55</div>
        <div>{t.hero.render}</div>
      </div>
    </section>
  );
};

export default Hero;
