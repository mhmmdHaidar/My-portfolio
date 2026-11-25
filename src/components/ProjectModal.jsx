import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage, getLocalized } from '../context/LanguageContext';
import { useModalBehavior } from '../hooks/useModalBehavior';

export default function ProjectModal({ project, onClose }) {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = project?.images?.length ? project.images : [project?.thumbnail].filter(Boolean);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project?.id]);

  useModalBehavior(Boolean(project), onClose);

  const nextSlide = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length]
  );

  const prevSlide = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length]
  );

  useEffect(() => {
    if (!project || images.length <= 1) return undefined;
    const handleArrows = (event) => {
      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleArrows);
    return () => window.removeEventListener('keydown', handleArrows);
  }, [project, images.length, nextSlide, prevSlide]);

  if (!project) return null;

  const featuresList = Array.isArray(project.features)
    ? project.features
    : project.features?.[language] || project.features?.en || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-700 hover:text-black shadow-sm transition-colors"
        >
          <X size={16} />
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
                transition={{ duration: 0.25 }}
                src={images[currentIndex]}
                alt={`${project.title} preview ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-md transition-all text-black z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-md transition-all text-black z-10"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Slide ${idx + 1}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all shadow-sm ${
                        currentIndex === idx ? 'bg-white w-5' : 'bg-white/60 hover:bg-white/90 w-2'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h3 id="project-modal-title" className="text-2xl font-extrabold text-black">
                {project.title}
              </h3>
              <span className="shrink-0 px-3 py-1 rounded-full border border-gray-300 text-xs font-semibold text-gray-600">
                {getLocalized(project.category, language)}
              </span>
            </div>

            <p className="text-[15px] text-gray-600 leading-relaxed">
              {getLocalized(project.fullDesc || project.shortDesc, language)}
            </p>

            {featuresList.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                  {t('txt_key_features')}
                </h4>
                <ul className="space-y-2">
                  {featuresList.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                {t('txt_tech_stack')}
              </h4>
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

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {t('txt_source_code')}
                </a>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
  );
}
