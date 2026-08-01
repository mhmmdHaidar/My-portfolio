export const portfolioData = {
  personal: {
    name: "Nur Muhammad Haidar",
    nickname: "Haidar",
    role: "Full-Stack Web Developer",
    tagline: "Building Digital Value & High-Performance Web Applications.",
    location: "Kab Tangerang, Banten, Indonesia",
    email: "mhmmdhaidar1212@gmail.com", // User can change this anytime
    phone: "+6283877392831",
    bio: "Saya adalah seorang Web Developer passionate yang berfokus pada pengembangan aplikasi web modern, antarmuka interaktif responsif, dan arsitektur sistem yang scalable. Memiliki ketertarikan tinggi pada UI/UX clean design serta pengalaman membuat berbagai solusi digital berbasis React, Next.js, dan Laravel.",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1MILDc7xheYrrt9tCLdH35GxdPlyEdGsG",
    avatarMain: "/assets/haidar2.webp",
    avatarAlt: "/assets/haidar1.webp",
  },
  stats: [
    { label: "Tahun Pengalaman", value: "2+", suffix: "Tahun" },
    { label: "Teknologi Dikuasai", value: "15+", suffix: "Stack" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/mhmmdHaidar/", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-haidar-02998935a", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/hdarrrr_12", icon: "Instagram" }
  ],
  keywordsTicker: [
    "Full-Stack Development",
    "Modern Web Applications",
    "React & Next.js",
    "Laravel & API Systems",
    "Responsive UI/UX Design",
    "Tailwind CSS",
    "Database Optimization",
    "Performance & SEO"
  ],
  experiences: [
    {
      period: "2024 - Sekarang",
      role: "Full-Stack Web Developer",
      company: "Freelance / Independent Projects",
      description: "Merancang dan mendesain aplikasi web berbasis React, Next.js, dan Laravel untuk berbagai klien. Bertanggung jawab mulai dari UI/UX mockup hingga deployment server.",
      skills: ["React", "Next.js", "Laravel", "Tailwind CSS", "REST API", "MySQL"]
    },
    {
      period: "2023 - 2024",
      role: "Frontend Developer Specialist",
      company: "Digital Studio & Projects",
      description: "Mengembangkan antarmuka pengguna interaktif dengan performa tinggi, animasi smooth, dan integrasi API real-time.",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      period: "2022 - 2023",
      role: "Junior Web Developer",
      company: "Academic & Community Projects",
      description: "Membangun sistem informasi, platform web landing page, dan aplikasi manajemen inventaris berbasis web.",
      skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "MySQL", "Git"]
    }
  ],
  skillCategories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Lanjutan", icon: "Code2" },
        { name: "Next.js", level: "Lanjutan", icon: "Globe" },
        { name: "TypeScript / JS", level: "Lanjutan", icon: "FileCode" },
        { name: "Tailwind CSS", level: "Ahli", icon: "Palette" },
        { name: "Framer Motion", level: "Menengah", icon: "Sparkles" },
        { name: "HTML5 / CSS3", level: "Ahli", icon: "Layout" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js / Express", level: "Menengah", icon: "Server" },
        { name: "Laravel (PHP)", level: "Lanjutan", icon: "Cpu" },
        { name: "Python", level: "Menengah", icon: "Code2" },
        { name: "RESTful API", level: "Lanjutan", icon: "Network" },
        { name: "MySQL / MariaDB", level: "Lanjutan", icon: "Database" },
        { name: "PostgreSQL", level: "Menengah", icon: "Database" },
        { name: "Firebase", level: "Menengah", icon: "Flame" }
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: "Lanjutan", icon: "GitBranch" },
        { name: "Vite / Webpack", level: "Lanjutan", icon: "Zap" },
        { name: "Figma (UI/UX)", level: "Menengah", icon: "Figma" },
        { name: "Postman", level: "Lanjutan", icon: "Send" },
        { name: "VS Code", level: "Ahli", icon: "Terminal" },
        { name: "Vercel / Netlify", level: "Lanjutan", icon: "Cloud" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Monoalphabetic Cipher",
      category: "Web",
      shortDesc: "Simulator untuk enkripsi presisi, Ubah teks biasa menjadi sandi rahasia dalam hitungan detik menggunakan algoritma Monoalphabetic Cipher berbasis web.",
      fullDesc: "Aplikasi web ini merupakan transformasi dan modernisasi dari konsep tersebut ke dalam bentuk antarmuka web interaktif (React.js), yang memungkinkan pengguna untuk memvisualisasikan bagaimana permutasi kunci dan distribusi frekuensi karakter bekerja secara real-time.",
      thumbnail: "/assets/monoalphabetic/ma1.webp",
      images: [
        "/assets/monoalphabetic/ma1.webp",
        "/assets/monoalphabetic/ma2.webp",
        "/assets/monoalphabetic/ma3.webp"
      ],
      tags: ["React", "Vanilla css", "JavaScript ES6+", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmmdHaidar/Monoalphabetic-app",
      features: [
        "Simulator ini berjalan sepenuhnya di sisi klien (Client-Side).",
        "Interaktif 3D animasi",
        "Mode Gelap / Terang responsif",
        "Enkripsi & Dekripsi teks dengan algoritma Monoalphabetic Cipher"
      ]
    },
    {
      id: "proj-2",
      title: "Smart Inventory & Asset Management",
      category: "Web",
      shortDesc: "Sistem inventaris enterprise berbasis Laravel untuk pencatatan barang dan pelaporan transaksi otomatis.",
      fullDesc: "Sistem manajemen stok & inventaris perusahaan dengan modul role-based access control (RBAC), audit logging, barcode scanner, dan laporan ekspor PDF/Excel.",
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
      features: [
        "Role Based Access Control (Superadmin, Manager, Staff)",
        "Automated Stock In/Out Logs & Low Stock Notifications",
        "Interactive Financial & Transaction Analytics Dashboard",
        "Export Laporan PDF & Excel 1-Klik"
      ]
    },
    {
      id: "proj-3",
      title: "CareerAI - Job Matcher & Skill Gap Analyzer",
      category: "Web",
      shortDesc: "Career adalah platform berbasis AI yang dirancang untuk membantu mahasiswa dan fresh graduate mempersiapkan diri menghadapi dunia kerja profesional.",
      fullDesc: "CareerAI adalah platform berbasis AI yang dirancang untuk membantu mahasiswa dan fresh graduate mempersiapkan diri menghadapi dunia kerja profesional. Dengan CareerAI, pengguna dapat mengunggah CV mereka dan mendapatkan analisis mendalam mengenai kekuatan, kelemahan, serta rekomendasi peningkatan yang dipersonalisasi. Selain itu, platform ini menyediakan fitur simulasi wawancara kerja interaktif yang menggunakan teknologi AI canggih untuk memberikan pengalaman wawancara yang realistis dan membantu pengguna membangun kepercayaan diri.",
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
      features: [
        "Ekstraksi CV PDF Instant",
        "Analisis Skill Gap & Rekomendasi Karir",
        "Simulasi Wawancara Interaktif",
        "Peta Skill Gap & Roadmap"
      ]
    },
    {
      id: "proj-4",
      title: "Landing Page Coffee Shop",
      category: "Web",
      shortDesc: "Landing page untuk coffee shop dengan desain modern dan interaktif.",
      fullDesc: "Aplikasi website berkonsep Company Profile & Digital Menu untuk bisnis coffee shop. Dibangun dari hulu ke hilir memadukan keandalan Laravel sebagai backend dan React.js lewat jembatan Inertia.js untuk pengalaman antarmuka SPA (Single Page Application) yang mulus. Mengusung tema visual ",
      thumbnail: "/assets/Coffeeshop/khi1.webp",
      images: [
        "/assets/Coffeeshop/khi1.webp",
        "/assets/Coffeeshop/khi2.webp",
        "/assets/Coffeeshop/khi3.webp"
      ],
      tags: ["React", "laravel", "Tailwind CSS", "Framer Motion", "Filament"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmmdHaidar/CoffeeShop-Landing-Page",
      features: [
        "Desain Modern & Responsif",
        "Digital Menu Interaktif",
        "Galeri & Ambience",
        "Admin Panel kebutuhan Konten",
        "Informasi Bisnis Integratif"
      ]
    }
  ],
  certificates: [
    {
      id: "cert-1",
      image: "/assets/certificates/wpu.webp",
      title: "Course Laravel WPU",
      issuer: "WPU ( Web Programming Unpas )",
      year: "2026",
      description: "Mempelajari pengembangan aplikasi web modern berbasis framework Laravel, mencakup arsitektur MVC, pengolahan database dengan Eloquent ORM, serta pembuatan RESTful API."
    },
    {
      id: "cert-2",
      image: "/assets/certificates/zahir.webp",
      title: "Basis Data PT Zahir Internasional",
      issuer: "Zahir Internasional",
      year: "2024",
      description: "Mengolah dan memverifikasi basis data transaksi serta menyusun laporan sistem informasi rumah sakit terintegrasi berdasarkan studi kasus PT Zahir Internasional."
    },
    {
      id: "cert-3",
      image: "/assets/certificates/pcap.webp",
      title: "PCAP: Programming Essentials in Python",
      issuer: "Cisco",
      year: "2024",
      description: "Menguasai konsep dasar pemrograman Python, meliputi struktur data, logika algoritma, pemrosesan fungsi & modul, penanganan eksepsi, serta penerapan Object-Oriented Programming (OOP)."
    },
    {
      id: "cert-4",
      image: "/assets/certificates/itcamp.webp",
      title: "IT Camp HMTI UBSI",
      issuer: "HMTI UBSI",
      year: "2024",
      description: "mengasah jiwa kepemimpinan (leadership), meningkatkan kesadaran diri (self-awareness), sertamembangun orientasi kerja sama dalam tim."
    },
    {
      id: "cert-5",
      image: "/assets/certificates/wakil.webp",
      title: "Wakil Ketua Koordinasi HMTI UBSi",
      issuer: "HMTI UBSI",
      year: "2026",
      description: "Bertanggung jawab atas koordinasi antar departemen, memastikan kelancaran program kerja, serta menjadi jembatan komunikasi antara pengurus dan anggota Himpunan Mahasiswa Teknik Informatika."
    }
  ]
};
