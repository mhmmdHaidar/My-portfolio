import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// We keep the component name as Gallery to avoid breaking existing imports/routing, 
// but functionally it is now the Certificates section.
export default function Gallery() {
  const { language } = useLanguage();
  const { certificates } = portfolioData;
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="certificates" className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden print:block print:py-5 print:h-auto print:overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-12 print:mb-6">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            {language === 'en' ? 'Certificates' : 'Sertifikat'}
          </h2>
          <p className="text-gray-400 text-sm mt-4 print:mt-1 print:text-xs max-w-2xl mx-auto">
            {language === 'en' ? 'A collection of my professional certifications and completed courses.' : 'Koleksi sertifikasi profesional dan kursus yang telah saya selesaikan.'}
          </p>
        </div>

        {/* Certificates Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4 print:mb-4">
          {certificates && certificates.map((cert, idx) => {
            const isHidden = idx >= visibleCount;
            return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col print:break-inside-avoid print:!opacity-100 print:!transform-none print:border-gray-200 print:shadow-none ${isHidden ? 'hidden print:flex' : ''}`}
            >
              {/* Certificate Image */}
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative border-b border-gray-100 shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with a view button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedImage(cert.image)}
                    className="px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-full scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl"
                  >
                    View Document
                  </button>
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="p-6 flex-1 flex flex-col justify-between print:p-3">
                <div>
                  <h3 className="font-bold text-black text-lg mb-2 leading-tight line-clamp-2 print:text-sm print:mb-1">
                    {cert.title}
                  </h3>
                  {cert.description && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 print:text-[10px] print:leading-tight">
                      {cert.description[language] || cert.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4 print:mt-2 print:pt-2">
                  <span className="text-sm font-semibold text-gray-800 line-clamp-1 print:text-[10px]">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full shrink-0 print:px-2 print:py-0 print:text-[9px]">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
        
        {/* Load More Button */}
        {certificates && visibleCount < certificates.length && (
          <div className="mt-14 flex justify-center print:hidden">
            <button
              onClick={handleShowMore}
              className="px-8 py-3.5 bg-black text-white rounded-full font-bold text-[15px] hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
            >
              {language === 'en' ? 'Show More Certificates' : 'Lihat Lebih Banyak'}
            </button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl z-10 mx-auto flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-8 p-2 text-white/60 hover:text-white transition-colors hover:rotate-90 duration-300"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Certificate Detail"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
