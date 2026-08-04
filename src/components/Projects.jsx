import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language, t } = useLanguage();
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Web', 'Design', 'Other'];
  
  const categoryLabels = {
    'All': language === 'en' ? 'All' : 'Semua',
    'Web': 'Web',
    'Design': language === 'en' ? 'Design' : 'Desain',
    'Other': language === 'en' ? 'Other' : 'Lainnya'
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => (p.category[language] || p.category) === categoryLabels[activeCategory] || p.category.en === activeCategory || p.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden print:block print:py-5 print:h-auto print:overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 print:mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-semibold mb-4 print:mb-2">
            {language === 'en' ? 'PORTFOLIO' : 'PORTOFOLIO'}
          </p>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            {t('txt_projects')}
          </h2>
          <p className="text-gray-400 text-sm mt-4 print:mt-1 print:text-xs">
            {language === 'en' ? 'A collection of my recent work, side projects, and experiments.' : 'Kumpulan proyek terbaru, proyek sampingan, dan eksperimen saya.'}
          </p>
        </div>

        {/* Category Filter Tabs - pill style */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap print:hidden">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid - borderless style like reference */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4 print:mb-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isHidden = !showAll && idx >= 3;
              return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer print:break-inside-avoid print:mb-2 print:!opacity-100 print:!transform-none ${isHidden ? 'hidden print:block' : ''}`}
              >
                {/* Image container with rounded corners and shadow */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200 shadow-md group-hover:shadow-xl transition-shadow duration-300 print:aspect-[21/9] print:rounded-lg">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay with arrow icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5v11.25M19.5 4.5H8.25" />
                    </svg>
                  </div>
                </div>

                {/* Info below image */}
                <div className="mt-4 flex items-start justify-between gap-2 print:mt-2">
                  <div>
                    <h3 className="text-base font-extrabold text-black group-hover:underline underline-offset-2 print:text-sm">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 print:text-[10px] print:mt-0.5 print:leading-tight">{project.shortDesc[language] || project.shortDesc}</p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full border border-gray-300 text-[11px] font-semibold text-gray-500 print:px-2 print:py-0 print:text-[9px]">
                    {project.category[language] || project.category}
                  </span>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > 3 && !showAll && (
          <div className="flex justify-center mt-12 print:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              {language === 'en' ? 'Load More Projects' : 'Muat Lebih Banyak'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
