import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#f8f8f8] bg-dot-grid overflow-hidden print:block print:py-5 print:h-auto print:overflow-visible">
      
      {/* Decorative arcs */}
      <div className="decorative-arc -left-60 top-10 w-[600px] h-[600px] print:hidden"></div>
      <div className="decorative-arc -right-60 bottom-10 w-[600px] h-[600px] print:hidden"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 print:mb-6">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            Technical Arsenal
          </h2>
          <div className="w-12 h-[3px] bg-black mx-auto mt-4 mb-4 print:my-2"></div>
          <p className="text-gray-400 text-sm">My preferred weapons of choice.</p>
        </div>

        {/* Skills Cards Grid - 3 columns matching reference's 4-column with our 3 categories */}
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
                {cat.title}
              </h3>

              {/* 2x3 Grid of icon squares */}
              <div className="grid grid-cols-2 gap-3 mb-6 print:grid-cols-3 print:gap-1.5 print:mb-3">
                {cat.skills.slice(0, 6).map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="aspect-square rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group hover:bg-gray-100 transition-colors relative"
                  >
                    {/* Skill icon from cdn.simpleicons.org */}
                    <img 
                      src={`https://cdn.simpleicons.org/${getSimpleIconSlug(skill.name)}`}
                      alt={skill.name}
                      className="w-8 h-8 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 print:w-5 print:h-5"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center w-8 h-8 rounded bg-gray-200 text-gray-500 text-xs font-bold print:w-5 print:h-5 print:text-[8px]">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Text list of skills */}
              <p className="text-xs text-gray-400 text-center leading-relaxed print:text-[9px] print:leading-normal">
                {cat.skills.map(s => s.name).join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper to get simpleicons slug from skill name
function getSimpleIconSlug(name) {
  const slugMap = {
    'React.js': 'react',
    'Next.js': 'nextdotjs',
    'TypeScript / JS': 'typescript',
    'Tailwind CSS': 'tailwindcss',
    'Framer Motion': 'framer',
    'HTML5 / CSS3': 'html5',
    'Node.js / Express': 'nodedotjs',
    'Laravel (PHP)': 'laravel',
    'RESTful API': 'fastapi',
    'MySQL / MariaDB': 'mysql',
    'PostgreSQL': 'postgresql',
    'Firebase': 'firebase',
    'Git & GitHub': 'git',
    'Vite / Webpack': 'vite',
    'Figma (UI/UX)': 'figma',
    'Postman': 'postman',
    'VS Code': 'visualstudiocode',
    'Vercel / Netlify': 'vercel',
  };
  return slugMap[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');
}
