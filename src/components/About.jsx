import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();
  const { personal, stats } = portfolioData;

  const [cards, setCards] = useState(personal.aboutImages || [personal.avatarAlt || personal.avatarMain]);

  const moveCardToBack = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const topCard = newCards.shift();
      newCards.push(topCard);
      return newCards;
    });
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden print:block print:py-10 print:h-auto print:overflow-visible">
      
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
              {t('txt_who_i_am')}
            </h2>
            <p className="text-lg font-bold text-black mt-2 mb-1">{personal.name}</p>
            <div className="w-12 h-[3px] bg-black mb-8"></div>

            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
              <p>
                {personal.bio[language]}
              </p>
              <p>
                {personal.bio_extra[language]}
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 mt-10 print:hidden">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl sm:text-4xl font-black text-black">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">{stat.label[language]}</p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-10 print:hidden">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  if (personal.resumeUrl === "#") {
                    e.preventDefault();
                    alert("CV akan segera diunggah. Silakan hubungi saya langsung!");
                  }
                }}
              >
                {t('btn_download_cv')}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Card Stack Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end print:hidden relative h-[450px] sm:h-[500px] mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-sm aspect-[3/4]">
              {cards.map((card, index) => {
                const isTop = index === 0;
                return (
                  <motion.div
                    key={card}
                    layout // Animates position/layout changes automatically
                    onClick={isTop ? moveCardToBack : undefined}
                    animate={{
                      y: index * 15,
                      scale: 1 - index * 0.05,
                      zIndex: cards.length - index,
                      opacity: 1 - index * 0.15,
                      rotate: index === 0 ? 0 : (index % 2 === 0 ? index * 2 : -index * 3),
                    }}
                    whileHover={isTop ? { y: -10, rotate: -2 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className={`absolute top-0 left-0 w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] bg-gray-200 border-[6px] border-white origin-bottom ${isTop ? 'cursor-pointer' : 'pointer-events-none'}`}
                  >
                    {/* Subtle Overlay to make back cards darker */}
                    {!isTop && <div className="absolute inset-0 bg-black/10 z-10"></div>}
                    
                    <img
                      src={card}
                      alt="Profile Stack"
                      className="w-full h-full object-cover transition-transform duration-500 pointer-events-none"
                      draggable={false}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
