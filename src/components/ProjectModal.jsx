import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [project.thumbnail];

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-h-[80vh] overflow-y-auto">
            {/* Image Slider */}
            <div className="relative aspect-[16/9] bg-gray-100 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={images[currentIndex]}
                  alt={`${project.title} - ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md transition-all text-black z-10"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md transition-all text-black z-10"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all shadow-sm ${currentIndex === idx ? 'bg-white w-5' : 'bg-white/60 hover:bg-white/90'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-extrabold text-black">{project.title}</h3>
                <span className="shrink-0 px-3 py-1 rounded-full border border-gray-300 text-xs font-semibold text-gray-500">
                  {project.category[language] || project.category}
                </span>
              </div>

              <p className="text-[15px] text-gray-600 leading-relaxed">
                {(project.fullDesc && project.fullDesc[language]) || (project.shortDesc && project.shortDesc[language]) || project.fullDesc || project.shortDesc}
              </p>

              {/* Features */}
              {project.features && (
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{t('txt_key_features')}</h4>
                  <ul className="space-y-2">
                    {(project.features[language] || project.features).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{t('txt_tech_stack')}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t('txt_source_code')}
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
                  >
                    {t('txt_live_demo')} →
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
