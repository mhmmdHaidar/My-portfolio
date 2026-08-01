import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code2, Terminal, Braces, Cpu } from 'lucide-react';

export default function Hero() {
  const { personal, keywordsTicker } = portfolioData;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const floatingShapes = [
    { icon: <Code2 size={24} />, position: 'top-[10%] left-0 md:-left-12', delay: 0 },
    { icon: <Terminal size={24} />, position: 'bottom-[15%] left-4 md:-left-8', delay: 1.5 },
    { icon: <Braces size={28} />, position: 'top-[20%] right-0 md:-right-8', delay: 0.8 },
    { icon: <Cpu size={26} />, position: 'bottom-[25%] right-4 md:-right-4', delay: 2.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-[#0e0e1a] to-[#0a0c1a] flex flex-col justify-between overflow-hidden">

      {/* Dynamic Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-blue-900/10 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
      
      {/* Subtle Dot Matrix Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>

      {/* Vertical Drifting Typography Watermarks */}
      <div className="absolute inset-y-0 left-[-2%] md:left-4 z-0 flex flex-row items-center justify-center gap-2 md:gap-6 pointer-events-none select-none overflow-hidden">
        {/* WM 1: CREATIVE DEVELOPER */}
        <motion.div 
          animate={{ y: ['-20%', '20%', '-20%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <h1 className="text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] font-black leading-none tracking-tighter text-white/10">
            CREATIVE DEVELOPER
          </h1>
        </motion.div>

        {/* WM 2: HAIDAR */}
        <motion.div 
          animate={{ y: ['20%', '-20%', '20%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <h1 className="text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] font-black leading-none tracking-tighter text-transparent opacity-20" style={{ WebkitTextStroke: '3px white' }}>
            HAIDAR
          </h1>
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hero-glow absolute inset-0 pointer-events-none z-0"
      ></motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center relative z-10 px-6 pt-28 pb-20 w-full max-w-7xl mx-auto gap-12 lg:gap-24">

        {/* Left Side: Hero Text */}
        <div className="relative z-30 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-black text-white leading-[1.1] tracking-tight"
          >
            <motion.span 
              initial={{ color: "#ffffff" }}
              whileHover={{ textShadow: "0px 0px 25px rgba(255,255,255,0.8)" }}
              transition={{ duration: 0.3 }}
              className="inline-block cursor-default"
            >
              Welcome to My Portfolio.
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 md:mt-8 space-y-2 relative"
          >
            <p className="text-gray-400 text-sm md:text-lg max-w-lg font-medium">
              I craft modern web experiences that are{' '}
              <span className="text-white font-bold underline decoration-gray-500 underline-offset-4 decoration-2">
                scalable
              </span>,{' '}
              interactive, and visually striking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 hidden lg:block"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black rounded-full text-[15px] font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 group/btn"
            >
              <span>Explore My Work</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Circular portrait */}
        <div className="flex-1 flex justify-center items-center relative w-full pt-6 lg:pt-0">
          <motion.div
            style={{ y }}
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[480px] lg:h-[480px] pointer-events-none flex items-center justify-center relative z-20"
          >
            {/* Orbiting ring with glowing meteors */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10%] border border-gray-800/80 rounded-full border-t-indigo-500/30 border-r-cyan-500/30"
            >
              {/* Glowing Meteor 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_15px_4px_rgba(99,102,241,0.6)]"></div>
              {/* Glowing Meteor 2 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_4px_rgba(34,211,238,0.6)]"></div>
            </motion.div>

            <div className="w-full h-full rounded-full overflow-hidden opacity-90 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
              <motion.img
                initial={{ scale: 1.95, y: '0%', filter: 'blur(4px)' }}
                animate={{ scale: 1.65, y: '-8%', filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={personal.avatarMain}
                alt={personal.name}
                className="w-full h-full object-cover object-center pointer-events-auto"
              />
            </div>
          </motion.div>

          {/* Abstract Floating Shapes */}
          {floatingShapes.map((shape, idx) => (
            <motion.div
              key={idx}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: shape.delay 
              }}
              className={`absolute ${shape.position} flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white/50 shadow-2xl z-30 pointer-events-none`}
            >
              {shape.icon}
            </motion.div>
          ))}
        </div>

        {/* Mobile Button (Explore My Work) shown BELOW portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full flex justify-center lg:hidden mt-4 relative z-30"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black rounded-full text-[15px] font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 group/btn"
          >
            <span>Explore My Work</span>
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

      </div>

    </section>
  );
}
