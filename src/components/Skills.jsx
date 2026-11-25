import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Webhook } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage, getLocalized } from '../context/LanguageContext';

const LUCIDE_FALLBACK_ICONS = {
  webhook: Webhook,
  terminal: Terminal,
};

function SkillIcon({ skill }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (skill.iconSlug && !imgFailed) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
        alt={skill.name}
        loading="lazy"
        decoding="async"
        className="w-7 h-7 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 print:w-5 print:h-5"
        onError={() => setImgFailed(true)}
      />
    );
  }

  const FallbackIcon = LUCIDE_FALLBACK_ICONS[skill.fallbackIcon];
  if (FallbackIcon) {
    return (
      <FallbackIcon
        size={26}
        className="text-gray-700 group-hover:text-black group-hover:scale-110 transition-all duration-300 print:w-5 print:h-5"
      />
    );
  }

  return (
    <div className="flex items-center justify-center w-7 h-7 rounded bg-gray-200 text-gray-600 text-xs font-bold print:w-5 print:h-5 print:text-[8px]">
      {skill.name.charAt(0)}
    </div>
  );
}

export default function Skills() {
  const { language, t } = useLanguage();
  const { skillCategories } = portfolioData;

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden print:block print:py-5 print:h-auto print:overflow-visible"
    >
      <div className="decorative-arc -left-60 top-10 w-[600px] h-[600px] print:hidden" />
      <div className="decorative-arc -right-60 bottom-10 w-[600px] h-[600px] print:hidden" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 print:mb-6">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            {t('txt_skills')}
          </h2>
          <div className="w-12 h-[3px] bg-black mx-auto mt-4 mb-4 print:my-2" />
          <p className="text-gray-500 text-sm">{t('txt_skills_subtitle')}</p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-3">
          {skillCategories.map((cat, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cIdx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm print:break-inside-avoid print:p-4 print:!opacity-100 print:!transform-none"
            >
              <h3 className="text-lg font-bold text-black italic text-center mb-6 print:mb-3 print:text-base">
                {getLocalized(cat.title, language)}
              </h3>

              {/* 3-column grid displaying all skills in category */}
              <div className="grid grid-cols-3 gap-3 mb-6 print:gap-1.5 print:mb-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={`${skill.name} — ${getLocalized(skill.level, language)}`}
                    className="rounded-xl bg-gray-50 border border-gray-100 p-3 flex flex-col items-center justify-center gap-2 group hover:bg-gray-100 transition-colors"
                  >
                    <SkillIcon skill={skill} />
                    <span className="text-[11px] font-medium text-gray-600 text-center leading-tight line-clamp-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center leading-relaxed print:text-[9px] print:leading-normal">
                {cat.skills.map((s) => s.name).join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
