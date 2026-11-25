export const portfolioData = {
  personal: {
    name: "Nur Muhammad Haidar",
    nickname: "Haidar",
    role: "Full-Stack Web Developer",
    tagline: {
      id: "Membangun Nilai Digital & Aplikasi Web Berkinerja Tinggi.",
      en: "Building Digital Value & High-Performance Web Applications."
    },
    location: "Kab Tangerang, Banten, Indonesia",
    email: "mhmmdhaidar1212@gmail.com",
    phone: "+6283877392831",
    bio: {
      id: "Saya adalah seorang Web Developer passionate yang berfokus pada pengembangan aplikasi web modern, antarmuka interaktif responsif, dan arsitektur sistem yang scalable. Memiliki ketertarikan tinggi pada UI/UX clean design serta pengalaman membuat berbagai solusi digital berbasis React, Next.js, dan Laravel.",
      en: "I am a passionate Web Developer focused on developing modern web applications, responsive interactive interfaces, and scalable system architectures. I have a strong interest in clean UI/UX design and experience in building various digital solutions based on React, Next.js, and Laravel."
    },
    bio_extra: {
      id: "Fokus utama saya adalah membangun solusi web yang scalable, responsif di semua perangkat, serta memiliki antarmuka yang bersih dan mudah digunakan oleh pengguna.",
      en: "My main focus is building web solutions that are scalable, responsive across all devices, and feature clean, user-friendly interfaces."
    },
    portfolioUrl: "https://haidar-portofolio.vercel.app/",
    spotifyUrl: "https://open.spotify.com/playlist/1pfIqB4U58IsW6UpDTQd4i?si=f61225d5ceff40a4",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1Vv6-3Jg7wlBN6gL21fCOfkwl8U9J2RP8",
    avatarMain: "/assets/haidar2.webp",
    aboutImages: [
      "/assets/aboutcard/haidar1.webp",
      "/assets/aboutcard/haidar2.webp",
      "/assets/aboutcard/haidar3.webp",
      "/assets/aboutcard/haidar4.webp",
      "/assets/aboutcard/haidar5.webp"
    ]
  },
  stats: [
    {
      label: { id: "Tahun Pengalaman", en: "Years Experience" },
      value: "2+",
      suffix: { id: "Tahun", en: "Years" }
    },
    {
      label: { id: "Teknologi Dikuasai", en: "Technologies Mastered" },
      value: "15+",
      suffix: { id: "Stack", en: "Stacks" }
    }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/mhmmdHaidar/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-haidar-02998935a" },
    { name: "Instagram", url: "https://www.instagram.com/hdarrrr_12" }
  ],
  experiences: [
    {
      period: { id: "2024 - Sekarang", en: "2024 - Present" },
      role: { id: "Full-Stack Web Developer", en: "Full-Stack Web Developer" },
      company: "Freelance / Independent Projects",
      description: {
        id: "Merancang dan mendesain aplikasi web berbasis React, Next.js, dan Laravel untuk berbagai klien. Bertanggung jawab mulai dari UI/UX mockup hingga deployment server.",
        en: "Designed and developed web applications based on React, Next.js, and Laravel for various clients. Responsible for everything from UI/UX mockups to server deployment."
      },
      skills: ["React", "Next.js", "Laravel", "Tailwind CSS", "REST API", "MySQL"]
    },
    {
      period: { id: "2023 - 2024", en: "2023 - 2024" },
      role: { id: "Frontend Developer Specialist", en: "Frontend Developer Specialist" },
      company: "Digital Studio & Projects",
      description: {
        id: "Mengembangkan antarmuka pengguna interaktif dengan performa tinggi, animasi smooth, dan integrasi API real-time.",
        en: "Developed high-performance interactive user interfaces, smooth animations, and real-time API integrations."
      },
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      period: { id: "2022 - 2023", en: "2022 - 2023" },
      role: { id: "Junior Web Developer", en: "Junior Web Developer" },
      company: "Academic & Community Projects",
      description: {
        id: "Membangun sistem informasi, platform web landing page, dan aplikasi manajemen inventaris berbasis web.",
        en: "Built information systems, web landing page platforms, and web-based inventory management applications."
      },
      skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "MySQL", "Git"]
    }
  ],
  skillCategories: [
    {
      title: { id: "Frontend Development", en: "Frontend Development" },
      skills: [
        { name: "React.js", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "react" },
        { name: "Next.js", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "nextdotjs" },
        { name: "TypeScript / JS", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "typescript" },
        { name: "Tailwind CSS", level: { id: "Ahli", en: "Expert" }, iconSlug: "tailwindcss" },
        { name: "Framer Motion", level: { id: "Menengah", en: "Intermediate" }, iconSlug: "framer" },
        { name: "HTML5 / CSS3", level: { id: "Ahli", en: "Expert" }, iconSlug: "html5" }
      ]
    },
    {
      title: { id: "Backend & Database", en: "Backend & Database" },
      skills: [
        { name: "Node.js / Express", level: { id: "Menengah", en: "Intermediate" }, iconSlug: "nodedotjs" },
        { name: "Laravel (PHP)", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "laravel" },
        { name: "Python", level: { id: "Menengah", en: "Intermediate" }, iconSlug: "python" },
        { name: "RESTful API", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: null, fallbackIcon: "webhook" },
        { name: "MySQL / MariaDB", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "mysql" },
        { name: "PostgreSQL", level: { id: "Menengah", en: "Intermediate" }, iconSlug: "postgresql" },
        { name: "Supabase", level: { id: "Menengah", en: "Intermediate" }, iconSlug: "supabase" }
      ]
    },
    {
      title: { id: "Tools & Workflow", en: "Tools & Workflow" },
      skills: [
        { name: "Git & GitHub", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "git" },
        { name: "Vite / Webpack", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "vite" },
        { name: "Figma (UI/UX)", level: { id: "Menengah", en: "Intermediate" }, iconSlug: "figma" },
        { name: "VS Code", level: { id: "Ahli", en: "Expert" }, iconSlug: null, fallbackIcon: "terminal" },
        { name: "Vercel / Netlify", level: { id: "Lanjutan", en: "Advanced" }, iconSlug: "vercel" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-6",
      title: "Uangku — Personal Finance PWA",
      category: { id: "Web", en: "Web" },
      shortDesc: {
        id: "Aplikasi web mobile (PWA) pengelolaan keuangan pribadi dengan multi-dompet kartu digital, anggaran bulanan, grafik arus kas, dan asisten interaktif Tupi.",
        en: "Installable mobile-first personal finance PWA featuring multi-wallet digital cards, monthly budgeting, interactive cashflow analytics, and the Tupi help assistant."
      },
      fullDesc: {
        id: "Uangku adalah aplikasi Progressive Web App (PWA) manajemen keuangan pribadi berbasis Laravel, Inertia.js, React, Supabase, dan Tailwind CSS yang dirancang mobile-first dengan dukungan mode gelap/terang. Pengguna dapat mengelola banyak dompet (Bank, Cash, E-Wallet, Investasi) bergaya kartu digital yang dapat dikustomisasi, mencatat pemasukan, pengeluaran, dan transfer antar dompet secara cepat, mengatur anggaran bulanan per kategori, menganalisis tren arus kas & rasio tabungan dengan grafik interaktif, mengekspor laporan CSV, hingga mengikuti tur panduan 9 langkah dan bertanya langsung lewat asisten Tupi.",
        en: "Uangku is a mobile-first Personal Finance Progressive Web App (PWA) built with Laravel, Inertia.js, React, Supabase, and Tailwind CSS with full Light/Dark mode support. Users can manage multiple wallets (Bank, Cash, E-Wallet, Investment) styled as customizable digital cards, quickly record income, expenses, and balance-neutral inter-wallet transfers, set monthly category budgets, analyze cashflow trends and savings ratios with interactive charts, export filtered CSV reports, and explore features via a 9-step mascot-guided onboarding tour and built-in Tupi Q&A assistant."
      },
      thumbnail: "/assets/uangku/u1.webp",
      images: [
        "/assets/uangku/u1.webp",
        "/assets/uangku/u2.webp",
        "/assets/uangku/u3.webp",
        "/assets/uangku/u4.webp",
        "/assets/uangku/u5.webp",
        "/assets/uangku/u6.webp",
        "/assets/uangku/u7.webp",
        "/assets/uangku/u8.webp"
      ],
      tags: ["Laravel", "React", "Inertia.js", "Supabase", "Tailwind CSS", "PWA"],
      liveUrl: "https://uangku-beta-two.vercel.app/",
      githubUrl: "https://github.com/mhmmdHaidar/uangku",
      features: {
        id: [
          "Installable Mobile-First PWA dengan Bottom Navigation & Mode Gelap/Terang",
          "Multi-Dompet Kartu Digital (Bank, E-Wallet, Cash, Investasi) dengan 8 Tema Gradien",
          "Pencatatan Kilat Pemasukan, Pengeluaran, Transfer Antar Dompet & Kategori Kustom",
          "Anggaran Bulanan per Kategori, Analisis Alokasi & Evaluasi Rasio Tabungan Otomatis",
          "Grafik Tren Arus Kas Interaktif (Bar/Area), Filter Multi-Periode & Ekspor CSV",
          "Tur Panduan Interaktif 9 Langkah & Asisten Bantuan Tanya Tupi"
        ],
        en: [
          "Installable Mobile-First PWA with Bottom Navigation & Light/Dark Mode",
          "Multi-Wallet Digital Cards (Bank, E-Wallet, Cash, Investment) with 8 Gradient Themes",
          "Quick Income, Expense, Balance-Neutral Inter-Wallet Transfers & Custom Categories",
          "Monthly Category Budgeting, Allocation Breakdown & Automated Savings-Ratio Evaluation",
          "Interactive Cashflow Trend Charts (Bar/Area), Multi-Period Filtering & CSV Export",
          "9-Step Interactive Spotlight Onboarding Tour & Built-In Tanya Tupi Assistant"
        ]
      }
    },
    {
      id: "proj-1",
      title: "Monoalphabetic Cipher",
      category: { id: "Web", en: "Web" },
      shortDesc: {
        id: "Simulator untuk enkripsi presisi. Ubah teks biasa menjadi sandi rahasia dalam hitungan detik menggunakan algoritma Monoalphabetic Cipher berbasis web.",
        en: "Precision encryption simulator. Turn plain text into secret cipher in seconds using a web-based Monoalphabetic Cipher algorithm."
      },
      fullDesc: {
        id: "Aplikasi web ini merupakan transformasi dan modernisasi dari konsep tersebut ke dalam bentuk antarmuka web interaktif (React.js), yang memungkinkan pengguna untuk memvisualisasikan bagaimana permutasi kunci dan distribusi frekuensi karakter bekerja secara real-time.",
        en: "This web app is a transformation and modernization of the encryption concept into an interactive web interface (React.js), allowing users to visualize how key permutations and character frequency distributions work in real-time."
      },
      thumbnail: "/assets/monoalphabetic/ma1.webp",
      images: [
        "/assets/monoalphabetic/ma1.webp",
        "/assets/monoalphabetic/ma2.webp",
        "/assets/monoalphabetic/ma3.webp"
      ],
      tags: ["React", "Vanilla CSS", "JavaScript ES6+", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmmdHaidar/Monoalphabetic-app",
      features: {
        id: [
          "Simulator ini berjalan sepenuhnya di sisi klien (Client-Side)",
          "Animasi 3D interaktif",
          "Mode Gelap / Terang responsif",
          "Enkripsi & dekripsi teks dengan algoritma Monoalphabetic Cipher"
        ],
        en: [
          "100% Client-Side Simulator",
          "Interactive 3D Animations",
          "Responsive Dark / Light Mode",
          "Text Encryption & Decryption using Monoalphabetic Cipher"
        ]
      }
    },
    {
      id: "proj-2",
      title: "Smart Inventory & Asset Management",
      category: { id: "Web", en: "Web" },
      shortDesc: {
        id: "Sistem inventaris enterprise berbasis Laravel untuk pencatatan barang dan pelaporan transaksi otomatis.",
        en: "Enterprise inventory system based on Laravel for item tracking and automated transaction reporting."
      },
      fullDesc: {
        id: "Sistem manajemen stok & inventaris perusahaan dengan modul role-based access control (RBAC), audit logging, barcode scanner, dan laporan ekspor PDF/Excel.",
        en: "Company stock & inventory management system with role-based access control (RBAC), audit logging, barcode scanner, and PDF/Excel export reports."
      },
      thumbnail: "/assets/smartinventory/smartinventory1.webp",
      images: [
        "/assets/smartinventory/si2.webp",
        "/assets/smartinventory/smartinventory1.webp",
        "/assets/smartinventory/si3.webp",
        "/assets/smartinventory/si4.webp"
      ],
      tags: ["Laravel 11", "MySQL", "Tailwind CSS", "Chart.js", "Alpine.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmmdHaidar/smart-inventory",
      features: {
        id: [
          "Role-Based Access Control (Superadmin, Manager, Staff)",
          "Log Keluar/Masuk Stok Otomatis & Notifikasi Stok Menipis",
          "Dashboard Analitik Keuangan & Transaksi Interaktif",
          "Ekspor Laporan PDF & Excel 1-Klik"
        ],
        en: [
          "Role-Based Access Control (Superadmin, Manager, Staff)",
          "Automated Stock In/Out Logs & Low Stock Notifications",
          "Interactive Financial & Transaction Analytics Dashboard",
          "1-Click PDF & Excel Report Export"
        ]
      }
    },
    {
      id: "proj-3",
      title: "CareerAI - Job Matcher & Skill Gap Analyzer",
      category: { id: "Web", en: "Web" },
      shortDesc: {
        id: "CareerAI adalah platform berbasis AI yang dirancang untuk membantu mahasiswa dan fresh graduate mempersiapkan diri menghadapi dunia kerja profesional.",
        en: "CareerAI is an AI-driven platform designed to help students and fresh graduates prepare for the professional workforce."
      },
      fullDesc: {
        id: "CareerAI adalah platform berbasis AI yang dirancang untuk membantu mahasiswa dan fresh graduate mempersiapkan diri menghadapi dunia kerja profesional. Dengan CareerAI, pengguna dapat mengunggah CV mereka dan mendapatkan analisis mendalam mengenai kekuatan, kelemahan, serta rekomendasi peningkatan yang dipersonalisasi. Selain itu, platform ini menyediakan fitur simulasi wawancara kerja interaktif yang menggunakan teknologi AI canggih untuk memberikan pengalaman wawancara yang realistis dan membantu pengguna membangun kepercayaan diri.",
        en: "CareerAI is an AI-driven platform designed to help students and fresh graduates prepare for the professional workforce. Users can upload their CV to receive an in-depth analysis of their strengths, weaknesses, and personalized improvement recommendations. Additionally, the platform features interactive AI mock interviews offering realistic experience to build user confidence."
      },
      thumbnail: "/assets/career/c1.webp",
      images: [
        "/assets/career/c1.webp",
        "/assets/career/c2.webp",
        "/assets/career/c3.webp",
        "/assets/career/c4.webp",
        "/assets/career/c5.webp",
        "/assets/career/c6.webp"
      ],
      tags: ["Laravel", "React", "API Gemini", "Tailwind CSS", "MySQL", "Inertia.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmmdHaidar/AI-Career",
      features: {
        id: [
          "Ekstraksi CV PDF Instan",
          "Analisis Skill Gap & Rekomendasi Karir",
          "Simulasi Wawancara Interaktif",
          "Peta Skill Gap & Roadmap"
        ],
        en: [
          "Instant PDF CV Extraction",
          "Skill Gap Analysis & Career Recommendations",
          "Interactive AI Mock Interviews",
          "Skill Gap Mapping & Roadmap"
        ]
      }
    },
    {
      id: "proj-4",
      title: "Landing Page Coffee Shop",
      category: { id: "Web", en: "Web" },
      shortDesc: {
        id: "Landing page untuk coffee shop dengan desain modern dan interaktif.",
        en: "Landing page for a coffee shop featuring a modern and interactive design."
      },
      fullDesc: {
        id: "Aplikasi website berkonsep Company Profile & Digital Menu untuk bisnis coffee shop. Dibangun dari hulu ke hilir memadukan keandalan Laravel sebagai backend dan React.js lewat jembatan Inertia.js untuk pengalaman antarmuka SPA (Single Page Application) yang mulus dengan tema visual yang modern.",
        en: "A Company Profile & Digital Menu web application for coffee shop businesses. Built end-to-end utilizing the reliability of Laravel as backend and React.js via Inertia.js for a smooth SPA (Single Page Application) interface, emphasizing a modern visual theme."
      },
      thumbnail: "/assets/Coffeeshop/khi1.webp",
      images: [
        "/assets/Coffeeshop/khi1.webp",
        "/assets/Coffeeshop/khi2.webp",
        "/assets/Coffeeshop/khi3.webp"
      ],
      tags: ["React", "Laravel", "Tailwind CSS", "Framer Motion", "Filament"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmmdHaidar/CoffeeShop-Landing-Page",
      features: {
        id: [
          "Desain Modern & Responsif",
          "Digital Menu Interaktif",
          "Galeri & Ambience",
          "Admin Panel Manajemen Konten",
          "Informasi Bisnis Terintegrasi"
        ],
        en: [
          "Modern & Responsive Design",
          "Interactive Digital Menu",
          "Gallery & Environment Showcases",
          "Content Management Admin Panel",
          "Integrated Business Information"
        ]
      }
    },
    {
      id: "proj-5",
      title: "Digital Khitanan Invitation Web",
      category: { id: "Web", en: "Web" },
      shortDesc: {
        id: "Website undangan khitanan digital dwibahasa (ID/EN) bertema Islami modern dengan animasi cover pintu ganda, nama tamu dinamis, dan RSVP real-time.",
        en: "Modern Islamic-themed bilingual (ID/EN) digital circumcision invitation web app featuring split-door cover animation, dynamic guest URLs, and real-time RSVP."
      },
      fullDesc: {
        id: "Aplikasi web undangan khitanan digital berkonsep mobile-first dengan estetika navy & emas bergaya geometris Islami. Dilengkapi animasi pembuka pintu ganda, personalisasi nama tamu melalui parameter URL (?to=), pengalih bahasa ID/EN instan, kontrol musik latar, hitung mundur acara, integrasi Google Maps & Google Calendar, galeri foto interaktif, serta buku ucapan & RSVP berbasis Firebase Firestore.",
        en: "A mobile-first digital circumcision invitation web application featuring an elegant navy-and-gold Islamic geometric aesthetic. Built with an animated split-door cover, dynamic guest personalization via URL query parameters (?to=), instant ID/EN language switching, background audio controls, live event countdown, Google Maps & Google Calendar integration, interactive photo gallery, and a real-time RSVP & guestbook powered by Firebase Firestore."
      },
      thumbnail: "/assets/undangan-digital/khitan-titan/uk1.webp",
      images: [
        "/assets/undangan-digital/khitan-titan/uk1.webp",
        "/assets/undangan-digital/khitan-titan/uk2.webp",
        "/assets/undangan-digital/khitan-titan/uk3.webp",
        "/assets/undangan-digital/khitan-titan/uk4.webp",
        "/assets/undangan-digital/khitan-titan/uk5.webp",
        "/assets/undangan-digital/khitan-titan/uk6.webp",
        "/assets/undangan-digital/khitan-titan/uk7.webp",
        "/assets/undangan-digital/khitan-titan/uk8.webp",
        "/assets/undangan-digital/khitan-titan/uk9.webp",
      ],
      tags: ["Vite", "JavaScript ES6+", "Tailwind CSS", "Firebase Firestore", "AOS"],
      liveUrl: "https://undangan-khitan-titan-mhahardika-ba.vercel.app/",
      githubUrl: "https://github.com/mhmmdHaidar/Undangan-khitan-Titan-Mhahardika-Bachtiar",
      features: {
        id: [
          "Animasi Cover Pintu Ganda & Personalisasi Nama Tamu via URL (?to=)",
          "Dukungan Dwibahasa Instan (Indonesia / Inggris) & Kontrol Musik Latar",
          "Live Countdown Acara, Embed Google Maps & Tombol Save to Calendar",
          "Buku Ucapan & Konfirmasi Kehadiran (RSVP) Real-Time dengan Firebase Firestore",
          "Galeri Foto Interaktif dengan Lightbox & Animasi Scroll (AOS)"
        ],
        en: [
          "Split-Door Cover Animation & Dynamic Guest Name via URL (?to=)",
          "Instant Bilingual Switcher (ID / EN) & Background Music Controls",
          "Live Event Countdown, Embedded Google Maps & Save to Calendar Integration",
          "Real-Time RSVP & Guestbook Wishes powered by Firebase Firestore",
          "Interactive Photo Gallery Lightbox & Scroll Animations (AOS)"
        ]
      }
    }
  ],
  certificates: [
    {
      id: "cert-1",
      image: "/assets/certificates/wpu.webp",
      title: "Course Laravel WPU",
      issuer: "WPU (Web Programming Unpas)",
      year: "2026",
      description: {
        id: "Mempelajari pengembangan aplikasi web modern berbasis framework Laravel, mencakup arsitektur MVC, pengolahan database dengan Eloquent ORM, serta pembuatan RESTful API.",
        en: "Learned modern web application development based on the Laravel framework, covering MVC architecture, database manipulation with Eloquent ORM, and RESTful API creation."
      }
    },
    {
      id: "cert-2",
      image: "/assets/certificates/zahir.webp",
      title: "Basis Data PT Zahir Internasional",
      issuer: "Zahir Internasional",
      year: "2024",
      description: {
        id: "Mengolah dan memverifikasi basis data transaksi serta menyusun laporan sistem informasi rumah sakit terintegrasi berdasarkan studi kasus PT Zahir Internasional.",
        en: "Processed and verified transaction databases and compiled integrated hospital information system reports based on a case study by PT Zahir Internasional."
      }
    },
    {
      id: "cert-3",
      image: "/assets/certificates/pcap.webp",
      title: "PCAP: Programming Essentials in Python",
      issuer: "Cisco",
      year: "2024",
      description: {
        id: "Menguasai konsep dasar pemrograman Python, meliputi struktur data, logika algoritma, pemrosesan fungsi & modul, penanganan eksepsi, serta penerapan Object-Oriented Programming (OOP).",
        en: "Mastered fundamental Python programming concepts, including data structures, algorithmic logic, functions & modules processing, exception handling, and Object-Oriented Programming (OOP)."
      }
    },
    {
      id: "cert-4",
      image: "/assets/certificates/itcamp.webp",
      title: "IT Camp HMTI UBSI",
      issuer: "HMTI UBSI",
      year: "2024",
      description: {
        id: "Mengasah jiwa kepemimpinan (leadership), meningkatkan kesadaran diri (self-awareness), serta membangun orientasi kerja sama dalam tim.",
        en: "Honed leadership skills, increased self-awareness, and built a foundation for robust teamwork and collaboration."
      }
    },
    {
      id: "cert-5",
      image: "/assets/certificates/wakil.webp",
      title: "Wakil Ketua Koordinasi HMTI UBSI",
      issuer: "HMTI UBSI",
      year: "2026",
      description: {
        id: "Bertanggung jawab atas koordinasi antar departemen, memastikan kelancaran program kerja, serta menjadi jembatan komunikasi antara pengurus dan anggota Himpunan Mahasiswa Teknik Informatika.",
        en: "Responsible for inter-departmental coordination, ensuring the smooth flow of work programs, and bridging communication between the board and members of the Informatics Engineering Student Association."
      }
    }
  ]
};
