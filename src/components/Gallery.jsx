import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// We keep the component name as Gallery to avoid breaking existing imports/routing, 
// but functionally it is now the Certificates section.
export default function Gallery() {
  const { certificates } = portfolioData;
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="certificates" className="relative py-20 md:py-28 bg-[#f8f8f8] bg-dot-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-black text-black leading-[1.05] tracking-tight italic">
              Certificates
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-md">
              A collection of my professional certifications and completed courses.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold text-gray-600">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              {certificates?.length || 0} Certificates
            </span>
          </div>
        </div>

        {/* Certificates Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates && certificates.slice(0, visibleCount).map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
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
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-black text-lg mb-2 leading-tight line-clamp-2">
                    {cert.title}
                  </h3>
                  {cert.description && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full shrink-0">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More Button */}
        {certificates && visibleCount < certificates.length && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={handleShowMore}
              className="px-8 py-3.5 bg-black text-white rounded-full font-bold text-[15px] hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
            >
              Show More Certificates
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
