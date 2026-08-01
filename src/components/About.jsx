import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#f8f8f8] bg-dot-grid overflow-hidden print:block print:py-10 print:h-auto print:overflow-visible">
      
      {/* Decorative arc - top left */}
      <div className="decorative-arc -left-40 top-20 w-[500px] h-[500px] print:hidden"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 print:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center print:block">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="print:!opacity-100 print:!transform-none"
          >
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
              Who I Am
            </h2>
            <p className="text-lg font-bold text-black mt-2 mb-1">{personal.name}</p>
            <div className="w-12 h-[3px] bg-black mb-8"></div>

            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
              <p>
                {personal.bio}
              </p>
              <p>
                Fokus utama saya adalah membangun solusi web yang scalable, responsif di semua perangkat, serta memiliki antarmuka yang bersih dan mudah digunakan oleh pengguna.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 mt-10 print:hidden">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl sm:text-4xl font-black text-black">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-10 print:hidden">
              <a
                href={personal.resumeUrl}
                className="inline-flex px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  if (personal.resumeUrl === "#") {
                    e.preventDefault();
                    alert("CV akan segera diunggah. Silakan hubungi saya langsung!");
                  }
                }}
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end print:hidden"
          >
            <div className="relative">
              <div className="w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={personal.avatarAlt || personal.avatarMain}
                  alt={personal.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
