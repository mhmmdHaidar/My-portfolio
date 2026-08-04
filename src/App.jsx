import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Global scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'gallery', 'contact'];
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200;
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && scrollPosition >= section.offsetTop) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're in a dark section (hero or footer area)
  const isDarkSection = activeSection === 'home';

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f8f8f8] text-gray-900 font-sans antialiased relative selection:bg-indigo-300 selection:text-black">
        {/* Scroll Progress Bar at the top */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1.5 bg-black z-[10000] origin-left shadow-sm print:hidden"
          style={{ scaleX }}
        />
        
        {/* Ambient Mesh/Aurora Gradients for Light Sections */}
        {!isDarkSection && (
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden transition-opacity duration-1000">
            <motion.div 
              animate={{
                x: [0, 50, 0, -50, 0],
                y: [0, -30, 30, -30, 0],
                scale: [1, 1.1, 1, 0.9, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-200/40 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{
                x: [0, -50, 0, 50, 0],
                y: [0, 40, -40, 40, 0],
                scale: [1, 0.9, 1.1, 0.9, 1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-cyan-200/40 rounded-full blur-[120px]" 
            />
            <motion.div 
              animate={{
                x: [0, 30, -30, 30, 0],
                y: [0, 30, 0, -30, 0],
                scale: [1, 1.2, 0.8, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[40%] right-[30%] w-[25rem] h-[25rem] bg-purple-200/40 rounded-full blur-[100px]" 
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
            <Gallery />
          </div>
          <div className="print:hidden">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
