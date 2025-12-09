import React from 'react';
import { SKILLS, EXPERIENCES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Tech Stack as JSON */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold uppercase">System_Specs</h2>
              <span className="text-xs text-dim border border-white/10 px-2 py-1">READ ONLY</span>
            </div>
            
            <div className="bg-surface border border-white/10 p-6 font-mono text-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-dim mb-2">{'// dependencies.json'}</div>
              <div className="text-white">{'{'}</div>
              <div className="pl-4 space-y-1">
                {SKILLS.map((skill, i) => (
                  <div key={skill.name} className="flex">
                    <span className="text-secondary">"{skill.name.toLowerCase().replace('.', '_')}"</span>
                    <span className="text-white">: </span>
                    <span className="text-primary">"^{skill.level}.0.0"</span>
                    {i < SKILLS.length - 1 && <span className="text-white">,</span>}
                  </div>
                ))}
              </div>
              <div className="text-white">{'}'}</div>

              {/* Decorative Visualizer */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs text-dim mb-2">
                    <span>CPU LOAD</span>
                    <span>12%</span>
                </div>
                <div className="w-full h-8 bg-black border border-dim relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 w-[12%] animate-pulse"></div>
                    <div className="absolute inset-0 grid grid-cols-12 gap-1">
                         {[...Array(12)].map((_, i) => (
                             <div key={i} className="border-r border-black/50 h-full"></div>
                         ))}
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changelog (Experience) */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold uppercase">Changelog</h2>
              <span className="text-xs text-dim border border-white/10 px-2 py-1">LATEST</span>
            </div>

            <div className="space-y-8 border-l border-white/10 ml-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-white/50 group-hover:bg-primary group-hover:border-primary transition-colors"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs text-dim font-mono bg-white/5 px-2 py-0.5">@{exp.company}</span>
                  </div>
                  
                  <div className="text-secondary text-xs font-mono mb-3">{exp.id} :: {exp.period}</div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-neutral-400 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-dim">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
