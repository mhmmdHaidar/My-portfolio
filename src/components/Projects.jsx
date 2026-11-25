import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { useLanguage, getLocalized } from '../context/LanguageContext';

export default function Projects() {
  const { language, t } = useLanguage();
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category?.en || p.category).filter(Boolean))],
    [projects]
  );

  const categoryLabels = useMemo(() => {
    const labels = { All: language === 'en' ? 'All' : 'Semua' };
    projects.forEach((p) => {
      const key = p.category?.en || p.category;
      if (key) {
        labels[key] = getLocalized(p.category, language);
      }
    });
    return labels;
  }, [projects, language]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => (p.category?.en || p.category) === activeCategory);
  }, [projects, activeCategory]);

  const handleCardKeyDown = (event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden print:block print:py-5 print:h-auto print:overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 print:mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-[0.25em] font-semibold mb-4 print:mb-2">
            {t('txt_portfolio_eyebrow')}
          </p>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            {t('txt_projects')}
          </h2>
          <p className="text-gray-500 text-sm mt-4 print:mt-1 print:text-xs">
            {t('txt_projects_subtitle')}
          </p>
        </div>

        {/* Category Filter Tabs (shown only when multiple categories exist) */}
        {categories.length > 2 && (
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap print:hidden">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                    isActive
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-sm text-gray-500 py-12">{t('txt_no_projects')}</p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4 print:mb-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isHidden = !showAll && idx >= 3;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    role="button"
                    tabIndex={isHidden ? -1 : 0}
                    aria-label={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => handleCardKeyDown(e, project)}
                    className={`group cursor-pointer print:break-inside-avoid print:mb-2 print:!opacity-100 print:!transform-none ${
                      isHidden ? 'hidden print:block' : ''
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200 shadow-md group-hover:shadow-xl transition-shadow duration-300 print:aspect-[21/9] print:rounded-lg">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="mt-4 flex items-start justify-between gap-2 print:mt-2">
                      <div>
                        <h3 className="text-base font-extrabold text-black group-hover:underline underline-offset-2 print:text-sm">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 print:text-[10px] print:mt-0.5 print:leading-tight">
                          {getLocalized(project.shortDesc, language)}
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 rounded-full border border-gray-300 text-[11px] font-semibold text-gray-600 print:px-2 print:py-0 print:text-[9px]">
                        {getLocalized(project.category, language)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Load More / See Less Toggle */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12 print:hidden">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <span>{showAll ? t('btn_see_less') : t('btn_load_more_projects')}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
