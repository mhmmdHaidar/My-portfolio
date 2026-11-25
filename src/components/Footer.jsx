import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  MapPin,
  ArrowUp,
  Check,
  Mail,
  MessageCircle,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Printer,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage, getLocalized } from '../context/LanguageContext';

const SOCIAL_ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

function formatWibTime() {
  return `${new Date().toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
  })} WIB`;
}

function LiveClock() {
  const [time, setTime] = useState(formatWibTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatWibTime());
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1.5">
      <Clock size={14} className="text-gray-400" />
      <span>{time}</span>
    </div>
  );
}

export default function Footer() {
  const { language, t } = useLanguage();
  const { personal, socials } = portfolioData;

  const [copiedItem, setCopiedItem] = useState(null);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleCopy = async (text, name) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(name);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopiedItem(null), 2000);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  };

  const whatsappNumber = personal.phone.replace(/[^0-9]/g, '');

  return (
    <footer id="footer" className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background watermark text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]"
      >
        <span className="text-[15rem] sm:text-[20rem] md:text-[28rem] font-black tracking-tighter whitespace-nowrap text-white">
          HAIDAR
        </span>
      </div>

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        {/* Availability Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/60 text-xs font-semibold text-green-400 print:hidden">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t('txt_available')}
          </span>
        </div>

        {/* Main CTA & Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-black leading-[1.05] tracking-tight mb-6">
              {language === 'en' ? (
                <>
                  Let&apos;s make
                  <br />
                  something
                  <br />
                  <span className="text-gray-500 italic">amazing</span>
                </>
              ) : (
                <>
                  Mari ciptakan
                  <br />
                  sesuatu yang
                  <br />
                  <span className="text-gray-500 italic">luar biasa</span>
                </>
              )}
            </h2>

            <p className="text-gray-400 text-sm md:text-base max-w-sm mb-8">
              {getLocalized(personal.tagline, language)}
            </p>

            <div className="flex flex-wrap gap-3 mb-8 print:hidden">
              {/* Email copy button */}
              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'Email')}
                className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                  {copiedItem === 'Email' ? <Check size={14} /> : <Mail size={14} />}
                </div>
                <p className="text-sm font-bold text-white leading-none">
                  {copiedItem === 'Email' ? t('txt_copied') : t('txt_email_me')}
                </p>
              </button>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                  <MessageCircle size={14} />
                </div>
                <p className="text-sm font-bold text-white leading-none">WhatsApp</p>
              </a>

              {/* Socials */}
              {socials.map((s) => {
                const IconComponent = SOCIAL_ICON_MAP[s.name.toLowerCase()] || ExternalLink;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                      <IconComponent size={14} />
                    </div>
                    <p className="text-sm font-bold text-white leading-none">{s.name}</p>
                  </a>
                );
              })}
            </div>

            {/* Print-only Social Contacts */}
            <div className="hidden print:flex flex-col gap-2.5 mb-8 text-black">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-600" />
                <a href={`mailto:${personal.email}`} className="text-sm font-bold">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-gray-600" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold"
                >
                  {whatsappNumber}
                </a>
              </div>
              {socials.map((s) => {
                const IconComponent = SOCIAL_ICON_MAP[s.name.toLowerCase()] || ExternalLink;
                return (
                  <div key={s.name} className="flex items-center gap-3">
                    <IconComponent size={16} className="text-gray-600" />
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold">
                      {s.name}: {s.url}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="w-fit flex items-center gap-4 text-xs font-medium text-gray-400 bg-white/5 px-4 py-2.5 rounded-full border border-white/5">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gray-400" /> {personal.location}
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-700" />
              <LiveClock />
            </div>
          </div>

          {/* Navigation & Widgets Column */}
          <div className="flex flex-col gap-8 w-full lg:max-w-sm lg:justify-self-end lg:ml-auto mt-12 lg:mt-0 print:hidden">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold mb-4">MENU</p>
              <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
                <a href="#home" className="text-sm font-semibold text-white hover:text-gray-400 transition-colors">
                  {t('nav_home')}
                </a>
                <a href="#about" className="text-sm font-semibold text-white hover:text-gray-400 transition-colors">
                  {t('nav_about')}
                </a>
                <a href="#projects" className="text-sm font-semibold text-white hover:text-gray-400 transition-colors">
                  {t('nav_projects')}
                </a>
                <a href="#contact" className="text-sm font-semibold text-white hover:text-gray-400 transition-colors">
                  {t('nav_contact')}
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              {/* Terminal Card */}
              <div className="w-full bg-[#050505] border border-white/10 rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-gray-400 ml-2 font-medium tracking-wide">guest@haidar-portfolio ~</span>
                </div>
                <div className="space-y-3 text-gray-400 relative z-10">
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2">
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400">~</span>
                      <span>status --current</span>
                    </p>
                    <p className="pl-5 text-white font-semibold">&quot;{t('txt_terminal_status')}&quot;</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2">
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400">~</span>
                      <span>focus --main</span>
                    </p>
                    <p className="pl-5 text-white font-semibold">&quot;{t('txt_terminal_focus')}&quot;</p>
                  </div>
                </div>
              </div>

              {/* Spotify Widget */}
              <a
                href={personal.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="relative w-12 h-12 rounded-xl flex-shrink-0 overflow-hidden">
                  <img
                    src="/assets/spotify.webp"
                    alt="Haidar's Coding Flow Playlist Cover"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col flex-grow overflow-hidden">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-wider leading-none">
                      {t('txt_currently_listening')}
                    </p>
                    <div aria-hidden="true" className="flex gap-[2px] items-end h-3">
                      <div className="w-[3px] bg-green-400 h-full animate-pulse" style={{ animationDelay: '0ms' }} />
                      <div className="w-[3px] bg-green-400 h-1/2 animate-pulse" style={{ animationDelay: '200ms' }} />
                      <div className="w-[3px] bg-green-400 h-3/4 animate-pulse" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-white truncate">Haidar&apos;s Coding Flow</p>
                  <p className="text-xs text-gray-400 truncate flex items-center gap-1.5 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.84c.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Spotify
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 relative">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-xs text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} {personal.name}. {t('txt_all_rights')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="md:absolute left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:-translate-y-2 transition-all duration-300 print:hidden"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>

          <div className="flex flex-col items-center md:items-end gap-3 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all text-xs font-bold text-gray-300"
            >
              <Printer size={14} className="group-hover:scale-110 transition-transform" />
              {t('btn_print_pdf')}
            </button>
            <p className="text-xs text-gray-400 font-medium text-center md:text-right">{t('txt_built_with')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
