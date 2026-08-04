import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { language, t } = useLanguage();
  const { experiences } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden print:block print:py-5 print:h-auto print:overflow-visible">
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 print:mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-semibold mb-4 print:mb-2">
            {language === 'en' ? 'CAREER PATH' : 'PERJALANAN KARIR'}
          </p>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            {t('txt_experience')}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="space-y-12 print:space-y-4">
            <AnimatePresence>
              {experiences.map((exp, idx) => {
                const isHidden = !showAll && idx >= 2;
                return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative pl-16 md:pl-20 print:break-inside-avoid print:mb-2 print:!opacity-100 print:!transform-none ${isHidden ? 'hidden print:block' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-black border-4 border-[#f8f8f8]"></div>

                  {/* Period badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-xs font-bold text-gray-700 mb-4 print:py-0.5 print:mb-2 print:text-[10px]">
                    {exp.period[language] || exp.period}
                  </span>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-black leading-tight mb-2 print:text-base print:mb-1">
                    {exp.role[language] || exp.role}
                  </h3>
                  
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-4 print:mb-2 print:text-xs">
                    <svg className="w-4 h-4 print:w-3 print:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    <span>{exp.company}</span>
                  </p>

                  <p className="text-[15px] text-gray-600 leading-relaxed mb-4 print:text-xs print:mb-2 print:leading-snug">{exp.description[language] || exp.description}</p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full bg-gray-200/80 text-xs font-medium text-gray-600 print:px-2 print:py-0 print:text-[9px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* See More / See Less toggle */}
          {experiences.length > 2 && (
            <div className="flex justify-center mt-12 print:hidden">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {showAll ? (language === 'en' ? 'See Less' : 'Lihat Lebih Sedikit') : (language === 'en' ? 'See More' : 'Lihat Lebih Banyak')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
