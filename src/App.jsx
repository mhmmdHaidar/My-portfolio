import React, { useState, useEffect } from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = ['home', 'about', 'experience', 'skills', 'projects', 'certificates', 'contact', 'footer'];
const DARK_SECTION_IDS = ['home', 'footer'];
const NAVBAR_TRIGGER_Y = 40;

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkSection, setIsDarkSection] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }

      const inDark = DARK_SECTION_IDS.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= NAVBAR_TRIGGER_Y && rect.bottom >= NAVBAR_TRIGGER_Y;
      });
      setIsDarkSection(inDark);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <div className="min-h-screen bg-[#f8f8f8] text-gray-900 font-sans antialiased relative selection:bg-indigo-300 selection:text-black">
          {/* Global scroll progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 bg-black z-[10000] origin-left shadow-sm print:hidden"
            style={{ scaleX }}
          />

          {/* Ambient mesh gradients for light sections */}
          {!isDarkSection && (
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden transition-opacity duration-1000">
              <motion.div
                animate={{
                  x: [0, 40, 0, -40, 0],
                  y: [0, -24, 24, -24, 0],
                  scale: [1, 1.06, 1, 0.94, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-200/40 rounded-full blur-[100px] will-change-transform"
              />
              <motion.div
                animate={{
                  x: [0, -40, 0, 40, 0],
                  y: [0, 32, -32, 32, 0],
                  scale: [1, 0.94, 1.06, 0.94, 1],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-cyan-200/40 rounded-full blur-[120px] will-change-transform"
              />
              <motion.div
                animate={{
                  x: [0, 24, -24, 24, 0],
                  y: [0, 24, 0, -24, 0],
                  scale: [1, 1.1, 0.9, 1.1, 1],
                }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[40%] right-[30%] w-[25rem] h-[25rem] bg-purple-200/40 rounded-full blur-[100px] will-change-transform"
              />
            </div>
          )}

          <Navbar activeSection={activeSection} isDarkSection={isDarkSection} />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <div className="print:block">
              <Certificates />
            </div>
            <div className="print:hidden">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </MotionConfig>
  );
}
