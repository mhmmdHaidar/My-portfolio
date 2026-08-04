import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    btn_lets_talk: "Let's Talk",
    btn_download_cv: "Download CV",
    btn_explore: "Explore My Work",
    txt_interactive_portfolio: "Interactive Portfolio:",
    btn_visit_web: "Visit Website ↗",
    txt_who_i_am: "Who I Am",
    txt_experience: "Experience & Journey",
    txt_skills: "Technical Arsenal",
    txt_projects: "Featured Works",
    txt_gallery: "Life & Moments",
    txt_contact: "Contact Me",
    txt_get_in_touch: "GET IN TOUCH",
    txt_send_msg: "Send a Message",
    txt_usually_respond: "I usually respond within 24 hours.",
    placeholder_name: "Your Name",
    placeholder_email: "Your Email",
    placeholder_subject: "Subject",
    placeholder_msg: "Your Message",
    btn_sending: "Sending...",
    btn_sent_success: "Message Sent Successfully! ✅",
    btn_sent_error: "Failed to send ❌",
    btn_send_msg: "Send Message",
    txt_email_me: "Email Me",
    txt_view_profile: "View Profile",
    txt_chat_directly: "Chat directly",
    txt_live_demo: "Live Demo",
    txt_source_code: "Source Code",
    txt_tech_stack: "Tech Stack",
    txt_key_features: "Key Features",
    txt_design_credit: "Designed & Developed by",
    txt_all_rights: "All rights reserved.",
  },
  id: {
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_projects: "Projek",
    nav_contact: "Kontak",
    btn_lets_talk: "Mari Berbincang",
    btn_download_cv: "Unduh CV",
    btn_explore: "Lihat Karya Saya",
    txt_interactive_portfolio: "Portofolio Interaktif:",
    btn_visit_web: "Kunjungi Web ↗",
    txt_who_i_am: "Siapa Saya",
    txt_experience: "Pengalaman & Perjalanan",
    txt_skills: "Senjata Teknis",
    txt_projects: "Karya Pilihan",
    txt_gallery: "Kehidupan & Momen",
    txt_contact: "Hubungi Saya",
    txt_get_in_touch: "TETAP TERHUBUNG",
    txt_send_msg: "Kirim Pesan",
    txt_usually_respond: "Saya biasanya merespons dalam 24 jam.",
    placeholder_name: "Nama Anda",
    placeholder_email: "Email Anda",
    placeholder_subject: "Subjek",
    placeholder_msg: "Pesan Anda",
    btn_sending: "Mengirim...",
    btn_sent_success: "Pesan Berhasil Terkirim! ✅",
    btn_sent_error: "Gagal mengirim pesan ❌",
    btn_send_msg: "Kirim Pesan",
    txt_email_me: "Email Saya",
    txt_view_profile: "Lihat Profil",
    txt_chat_directly: "Chat langsung",
    txt_live_demo: "Demo Langsung",
    txt_source_code: "Kode Sumber",
    txt_tech_stack: "Teknologi",
    txt_key_features: "Fitur Utama",
    txt_design_credit: "Didesain & Dikembangkan oleh",
    txt_all_rights: "Hak cipta dilindungi.",
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'id' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
