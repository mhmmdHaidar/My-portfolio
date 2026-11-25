import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Instagram, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useModalBehavior } from '../hooks/useModalBehavior';

export default function Navbar({ activeSection, isDarkSection }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);
  useModalBehavior(isContactModalOpen, closeContactModal);

  const navLinks = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBackground = scrolled
    ? isDarkSection
      ? 'bg-slate-950/75 backdrop-blur-md border-b border-white/10'
      : 'bg-[#f8f8f8]/85 backdrop-blur-md border-b border-black/5'
    : 'bg-transparent';

  const whatsappUrl = `https://wa.me/${portfolioData.personal.phone.replace(/[^0-9]/g, '')}`;
  const instagramUrl = portfolioData.socials.find((s) => s.name === 'Instagram')?.url || '#';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${headerBackground}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              className={`text-2xl font-black tracking-tight transition-colors ${
                isDarkSection ? 'text-white' : 'text-black'
              }`}
            >
              Haidar<span className="text-gray-400">.</span>
            </a>

            {/* Desktop Nav */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const linkId = link.href.replace('#', '');
                const isActive =
                  activeSection === linkId ||
                  (linkId === 'about' && ['about', 'experience', 'skills'].includes(activeSection)) ||
                  (linkId === 'projects' && ['projects', 'certificates'].includes(activeSection));
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative ${
                      isDarkSection
                        ? isActive
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                        : isActive
                          ? 'text-black'
                          : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                          isDarkSection ? 'bg-white' : 'bg-black'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 md:gap-6">
              {/* Language Toggle */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris'}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                  isDarkSection
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-black/20 text-black hover:bg-black/5'
                }`}
              >
                <span className={language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
                <span className="opacity-30">|</span>
                <span className={language === 'id' ? 'opacity-100' : 'opacity-50'}>ID</span>
              </button>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className={`hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  isDarkSection
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {t('btn_lets_talk')}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                className={`md:hidden p-2 ${isDarkSection ? 'text-white' : 'text-black'}`}
              >
                <div className="space-y-1.5">
                  <span
                    className={`block w-6 h-0.5 transition-all ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    } ${isDarkSection ? 'bg-white' : 'bg-black'}`}
                  />
                  <span
                    className={`block w-6 h-0.5 transition-all ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    } ${isDarkSection ? 'bg-white' : 'bg-black'}`}
                  />
                  <span
                    className={`block w-6 h-0.5 transition-all ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    } ${isDarkSection ? 'bg-white' : 'bg-black'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-200 px-6 pb-6 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-black border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="mt-4 block w-full text-center py-3 bg-black text-white rounded-full text-sm font-semibold"
              >
                {t('btn_lets_talk')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeContactModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 z-10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 id="contact-modal-title" className="text-xl font-black text-black">
                  {t('txt_contact')}
                </h3>
                <button
                  type="button"
                  onClick={closeContactModal}
                  aria-label="Close contact dialog"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-black/20 hover:bg-gray-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 text-black group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-black">{t('txt_email_me')}</p>
                    <p className="text-xs text-gray-500 truncate">{portfolioData.personal.email}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">WhatsApp</p>
                    <p className="text-xs text-gray-500">{portfolioData.personal.phone}</p>
                  </div>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#E1306C]/30 hover:bg-[#E1306C]/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E1306C]/10 flex items-center justify-center shrink-0 text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">Instagram</p>
                    <p className="text-xs text-gray-500">{t('txt_view_profile')}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
