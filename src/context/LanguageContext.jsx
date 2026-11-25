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
    btn_see_more: "See More",
    btn_see_less: "See Less",
    btn_load_more_projects: "Load More Projects",
    btn_show_more_certs: "Show More Certificates",
    btn_view_document: "View Document",
    btn_sending: "Sending...",
    btn_sent_success: "Message Sent Successfully!",
    btn_sent_error: "Failed to send message",
    btn_send_msg: "Send Message",
    btn_visit_web: "Visit Website ↗",
    btn_print_pdf: "Print / Save PDF",
    txt_interactive_portfolio: "Interactive Portfolio:",
    txt_hero_headline: "Building Scalable Web Experiences.",
    txt_who_i_am: "Who I Am",
    txt_about_card_hint: "Click photo to cycle",
    txt_career_path: "CAREER PATH",
    txt_experience: "Experience & Journey",
    txt_skills: "Technical Skills",
    txt_skills_subtitle: "My preferred technologies and tools.",
    txt_portfolio_eyebrow: "PORTFOLIO",
    txt_projects: "Featured Works",
    txt_projects_subtitle: "A collection of my recent work, side projects, and experiments.",
    txt_no_projects: "No projects in this category yet.",
    txt_certificates: "Certificates",
    txt_certificates_subtitle: "A collection of my professional certifications and completed courses.",
    txt_contact: "Contact Me",
    txt_contact_subtitle: "Have a project in mind or want to collaborate? Send me a message.",
    txt_get_in_touch: "GET IN TOUCH",
    txt_send_msg: "Send a Message",
    txt_usually_respond: "I usually respond within 24 hours.",
    placeholder_name: "Your Name",
    placeholder_email: "Your Email",
    placeholder_subject: "Subject",
    placeholder_msg: "Your Message",
    txt_email_me: "Email Me",
    txt_copied: "Copied!",
    txt_view_profile: "View Profile",
    txt_live_demo: "Live Demo",
    txt_source_code: "Source Code",
    txt_tech_stack: "Tech Stack",
    txt_key_features: "Key Features",
    txt_available: "Available for new projects",
    txt_terminal_status: "Available for New Projects",
    txt_terminal_focus: "Interactive UI / UX Architecture",
    txt_currently_listening: "Currently Listening",
    txt_built_with: "Built with React, Tailwind CSS & Framer Motion",
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
    btn_see_more: "Lihat Lebih Banyak",
    btn_see_less: "Lihat Lebih Sedikit",
    btn_load_more_projects: "Muat Lebih Banyak",
    btn_show_more_certs: "Lihat Lebih Banyak",
    btn_view_document: "Lihat Sertifikat",
    btn_sending: "Mengirim...",
    btn_sent_success: "Pesan Berhasil Terkirim!",
    btn_sent_error: "Gagal mengirim pesan",
    btn_send_msg: "Kirim Pesan",
    btn_visit_web: "Kunjungi Web ↗",
    btn_print_pdf: "Cetak / Simpan PDF",
    txt_interactive_portfolio: "Portofolio Interaktif:",
    txt_hero_headline: "Membangun Aplikasi Web yang Scalable.",
    txt_who_i_am: "Siapa Saya",
    txt_about_card_hint: "Klik foto untuk mengganti",
    txt_career_path: "PERJALANAN KARIR",
    txt_experience: "Pengalaman & Perjalanan",
    txt_skills: "Keahlian Teknis",
    txt_skills_subtitle: "Teknologi dan alat andalan saya.",
    txt_portfolio_eyebrow: "PORTOFOLIO",
    txt_projects: "Karya Pilihan",
    txt_projects_subtitle: "Kumpulan proyek terbaru, proyek sampingan, dan eksperimen saya.",
    txt_no_projects: "Belum ada proyek di kategori ini.",
    txt_certificates: "Sertifikat",
    txt_certificates_subtitle: "Koleksi sertifikasi profesional dan kursus yang telah saya selesaikan.",
    txt_contact: "Hubungi Saya",
    txt_contact_subtitle: "Punya proyek yang ingin diwujudkan atau ingin berkolaborasi? Kirimi saya pesan.",
    txt_get_in_touch: "TETAP TERHUBUNG",
    txt_send_msg: "Kirim Pesan",
    txt_usually_respond: "Saya biasanya merespons dalam 24 jam.",
    placeholder_name: "Nama Anda",
    placeholder_email: "Email Anda",
    placeholder_subject: "Subjek",
    placeholder_msg: "Pesan Anda",
    txt_email_me: "Email Saya",
    txt_copied: "Tersalin!",
    txt_view_profile: "Lihat Profil",
    txt_live_demo: "Demo Langsung",
    txt_source_code: "Kode Sumber",
    txt_tech_stack: "Teknologi",
    txt_key_features: "Fitur Utama",
    txt_available: "Tersedia untuk proyek baru",
    txt_terminal_status: "Tersedia untuk Proyek Baru",
    txt_terminal_focus: "Arsitektur UI / UX Interaktif",
    txt_currently_listening: "Sedang Didengarkan",
    txt_built_with: "Dibangun dengan React, Tailwind CSS & Framer Motion",
    txt_all_rights: "Hak cipta dilindungi.",
  },
};

export function getLocalized(value, language) {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return value[language] ?? value.en ?? '';
  }
  return value ?? '';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang');
      return savedLang === 'en' || savedLang === 'id' ? savedLang : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // Ignore storage errors in restricted browsing contexts
    }
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'id' : 'en');
  };

  const t = (key) => translations[language]?.[key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
