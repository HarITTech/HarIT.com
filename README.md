🚀 HarIT Tech Solution – Official Repository
<div align="center"> <img width="1200" height="450" src="./logo.png" alt="HarIT Tech Solution Banner" /> <h3>Smart • Scalable • Modern IT Solutions</h3> </div>
📌 Overview

This repository contains the complete source code for the HarIT Tech Solution website — a modern, responsive, production-ready web application built using:

⚛️ React + TypeScript

⚡ Vite

🎨 Tailwind CSS

🎭 Framer Motion animations

💼 Reusable Components

🧩 Modular Pages (Home, Services, Solutions, About, Contact)

This project is designed to represent HarIT Tech’s brand identity — clean UI, fast performance, modern animations, and fully responsive layouts.

🏗️ Tech Stack
Category	Technologies
Frontend	React, TypeScript, Vite
Styling	Tailwind CSS, Custom Theme, Google Fonts (Inter)
Animations	Framer Motion
Icons	lucide-react
HTTP	Axios
State	Local/Component State
Backend (optional)	Node.js (Express) — for sending emails
Deployment	Vercel / Netlify / GitHub Pages
📂 Project Structure
HarIT.com/
│── public/
│   ├── logo.png
│   └── assets/ (images, illustrations)
│
│── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── assets/ (logos, banners, hero images)
│   ├── index.tsx
│   ├── App.tsx
│── index.html
│── index.css
│── tailwind.config.cjs
│── vite.config.ts
│── package.json
│── README.md  ← (this file)

⚙️ Installation & Setup
📦 1. Install Dependencies
npm install

🔐 2. Environment Setup (optional for contact form / AI features)

Create a .env.local file:

GEMINI_API_KEY=your_api_key_here

▶️ 3. Run the Development Server
npm run dev


Your project will run at:

👉 http://localhost:5173

🚢 Production Build

To create an optimized build:

npm run build


To preview the production output:

npm run preview

🌐 Deployment Options

You can deploy this website easily to:

✓ Vercel (Recommended)

Connect your GitHub repo

It auto-detects Vite

Deploys in seconds

✓ Netlify

Drag & drop /dist

Or connect repo → auto deploy

✓ GitHub Pages

Use vite.config.ts → base path

npm run build

Push /dist

🎨 Branding & Theme

We use a custom Tailwind theme designed specially for HarIT Tech:

Colors
colors: {
  brand: {
    bg: '#F7F4EF',
    orange: '#FF7A1A',
    orangeHover: '#E6680C',
    dark: '#18181B',
    grey: '#E5E7EB',
    text: '#333333',
  },
  'off-white': '#F7F4EF',
  'navy-blue': '#18181B',
}

Fonts
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  'sans-body': ['Inter', 'sans-serif'],
}

✨ Key Features

✔ Fully responsive
✔ Modern UI
✔ Smooth page animations
✔ SEO meta tags
✔ OpenGraph & Twitter preview
✔ Optimized performance
✔ Reusable UI components
✔ Clean folder structure
✔ Company branding included

📞 Contact & Support

HarIT Tech Solution
Smart Digital IT Services
📍 Nagpur, Maharashtra
📧 harittechsolution@gmail.com

🌐 Website: https://harittech.in/