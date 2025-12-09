import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const currentProjects = PROJECTS[language];

  return (
    <section id="projects" className="py-24 border-b border-white/5 relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold uppercase mb-2">{t.projects.title}</h2>
          <p className="text-dim text-sm font-mono">{t.projects.path}</p>
        </div>
        <div className="hidden md:block h-px w-1/3 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group border border-white/10 bg-surface/50 hover:bg-surfaceHighlight transition-colors duration-300 relative overflow-hidden"
            >
              {/* Header Bar of Card */}
              <div className="border-b border-white/10 bg-black/40 p-2 flex justify-between items-center text-xs font-mono text-dim">
                <div className="flex items-center gap-2">
                  <Folder size={12} className="text-secondary" />
                  <span>{project.id}</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-dim/30"></div>
                  <div className="w-2 h-2 rounded-full bg-dim/30"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase border border-white/20 px-1.5 py-0.5 text-neutral-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-white hover:text-secondary uppercase tracking-wider"
                    >
                      <ExternalLink size={14} /> {t.projects.run}
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-white hover:text-secondary uppercase tracking-wider"
                    >
                      <Github size={14} /> {t.projects.source}
                    </a>
                  )}
                </div>
              </div>

              {/* Background Number */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;