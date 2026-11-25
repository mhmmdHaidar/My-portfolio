# Haidar — Portfolio

Personal portfolio website for **Nur Muhammad Haidar**, showcasing selected web engineering projects, technical skills, career journey, and professional certifications.

Live site: [haidar-portofolio.vercel.app](https://haidar-portofolio.vercel.app/)

## Features

- **Bilingual Support (EN / ID)** with persisted language preference and dynamic `<html lang>` syncing
- **Interactive UI**: Stacked photo cards, filterable projects with image-slider modal, certificate lightbox, and animated hero section
- **Print / Save PDF Mode**: Tailored print styles for exporting a clean portfolio summary
- **Contact Form**: Integrated with Web3Forms and bot honeypot protection
- **Accessibility & Performance**: Semantic headings, keyboard-accessible interactive elements, `prefers-reduced-motion` support, lazy-loaded `.webp` assets, and vendor chunk splitting

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion 12](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (optional)
cp .env.example .env

# 3. Start development server
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

| Variable | Description |
| :--- | :--- |
| `VITE_WEB3FORMS_KEY` | Optional Web3Forms access key for the contact form (`Contact.jsx`). |
