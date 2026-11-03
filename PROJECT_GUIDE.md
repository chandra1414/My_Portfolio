# 📘 Bhuvan Portfolio — Architecture & Developer Guide

Welcome to your portfolio project! This comprehensive guide walks you through the entire project architecture, the purpose of every file and folder, how state and themes work, and how you can easily update content like projects, education, skills, and resume in the future.

---

## 🗂️ 1. Project Directory Structure

```
bhuvana-portfolio/
├── public/                 📁 Static assets served directly to the browser
│   ├── profile.jpg         🖼️ Your profile portrait picture
│   ├── resume.pdf          📄 Downloadable & viewable Resume PDF
│   └── screenshots/        📸 Screenshots for projects (HaloChat, Gemini, etc.)
│
├── src/                    📁 Source code of the application
│   ├── data/
│   │   └── portfolioData.ts 💾 Central Database (Bio, Skills, Projects, Education)
│   │
│   ├── components/         🧩 Modular React UI Components
│   │   ├── Navbar.tsx             🔝 Fixed navigation header & theme switcher
│   │   ├── Preloader.tsx          🎬 Cinematic 3D split-screen opening intro
│   │   ├── HeroSection.tsx        👋 Hero landing view (typewriter, particles, badges)
│   │   ├── AboutSection.tsx       🙋‍♂️ Biography & personal summary
│   │   ├── SkillsSection.tsx      ⚡ Technical stack & infinite marquee logo carousel
│   │   ├── EducationSection.tsx   🎓 Academic timeline with bold specializations
│   │   ├── CertificationsSection.tsx 📜 Professional courses & credentials
│   │   ├── ProjectsSection.tsx    💻 Project cards with live demo buttons
│   │   ├── ExperienceSection.tsx  💼 Work and practical project milestones
│   │   ├── ContactSection.tsx     📬 Interactive contact form & social links
│   │   ├── Footer.tsx             🦶 Clean footer with Back to Top button
│   │   └── ScrollReveal.tsx       ✨ Reusable scroll entrance animation engine
│   │
│   ├── App.tsx             🎛️ Master application controller (layout & theme)
│   ├── main.tsx            🚀 Application bootstrap entry point
│   └── index.css           🎨 Tailwind directives, cosmic gradients & animations
│
├── index.html              🌐 Root HTML document (Fonts, Meta tags & SEO)
├── package.json            📦 Project dependencies (React, Vite, Tailwind, Lucide)
└── vite.config.ts          ⚡ Vite build tool configuration
```

---

## 🔍 2. Component & File Breakdown

### 1. `src/data/portfolioData.ts` (Single Source of Truth)
- **Purpose:** Acts as the central database for the entire website.
- **What it holds:** Personal bio, headline, social media URLs, email, education history, skills list, and project details.
- **Why it matters:** Whenever you want to edit your website details, you do not need to touch complex React code or CSS. Just update this single file, and every section on the website updates automatically!

### 2. `src/App.tsx` (Master Controller)
- **Purpose:** Organizes the website layout by placing components in order.
- **Key Responsibilities:**
  - **Theme Management:** Controls Dark Mode vs. Light Mode using React state and saves user choice in `localStorage`.
  - **Intro Preloader:** Displays the cinematic intro on first load, then unmounts it cleanly once the split-screen animation finishes.
  - **Layout:** Renders `<Navbar />`, `<main>` sections, and `<Footer />`.

### 3. `src/components/Preloader.tsx` (Cinematic Intro)
- **Purpose:** Runs when a user first lands on the website.
- **Animation Sequence:**
  - Characters of **"Bhuvana"** and **"Portfolio"** fly in with 3D spins from different screen corners.
  - Light bloom and glitch effects illuminate the title.
  - Subtitle **"Python Full Stack Developer"** and a gradient line bar expand.
  - At 2.45s, top and bottom curtains split vertically like cinematic shutters, seamlessly revealing the hero section underneath.

### 4. `src/components/Navbar.tsx` (Navigation Bar)
- **Purpose:** Pinned at the top of the screen during scrolling.
- **Features:**
  - Brand name **Bhuvan** in vivid gradient text.
  - Smooth anchor links (`#home`, `#about`, `#skills`, `#education`, `#projects`, `#contact`).
  - Dark / Light mode toggle button (Sun & Moon icons).
  - Responsive mobile drawer menu for phones and tablets.

### 5. `src/components/HeroSection.tsx` (Landing Hero)
- **Purpose:** High-impact first impression for visitors.
- **Features:**
  - Animated typewriter effect displaying rotating roles ("Full-Stack Developer", "Python Developer", "CSE-AI Graduate").
  - Animated cosmic floating particle canvas in the background.
  - Quick action buttons ("View Projects", "Contact Me", "Resume").
  - Circular glowing profile image card.

### 6. `src/components/SkillsSection.tsx` (Skills & Tech Stack)
- **Purpose:** Categorizes and showcases your technical proficiencies.
- **Features:**
  - Filter tabs ("All", "Frontend", "Backend", "Database", "Tools & Frameworks").
  - **Infinite Marquee:** An auto-scrolling row of tech brand logos moving continuously from left to right.

### 7. `src/components/EducationSection.tsx` (Academic Timeline)
- **Purpose:** Displays your academic degrees in an interactive timeline.
- **Features:**
  - Prominently displays the specialization branch in **BOLD** (e.g., **Computer Science and Engineering (Artificial Intelligence)**).
  - Shows colleges (Pragati Engineering College, CIST, Camp School), locations, and completion dates.

### 8. `src/components/ProjectsSection.tsx` (Projects Showcase)
- **Purpose:** Highlights your real-world software applications (HaloChat, Gemini Chatbot, CodeGen Online Test Platform, Todo App).
- **Features:**
  - High-resolution preview image cropped neatly for both laptops and mobile screens.
  - Technology tags (React, Node.js, Python, MongoDB, etc.).
  - "Live Demo" direct buttons opening your hosted applications.

### 9. `src/components/ScrollReveal.tsx` (Scroll Animation Engine)
- **Purpose:** Uses the browser's native `IntersectionObserver` to trigger smooth entrance animations (Fade Up, Slide Left, Zoom In) **every time** a section enters the viewport.

### 10. `src/index.css` (Master Styling & Themes)
- **Purpose:** Provides the styling system:
  - Deep cosmic navy dark theme (`#050816`).
  - Glare-free, high-contrast light theme (`#f1f5f9`).
  - Keyframe animations for particle glow, marquee scrolling, and shutter split.

---

## 🛠️ 3. How to Update Your Portfolio

| Action | What to do |
| :--- | :--- |
| **Add or Edit a Project** | Open `src/data/portfolioData.ts`, add a new object to the `projects` array, and put its screenshot inside `public/screenshots/`. |
| **Update your Resume** | Replace `public/resume.pdf` with your new PDF file (keep the same name). |
| **Update your Profile Picture** | Replace `public/profile.jpg` with your new picture (keep the same name). |
| **Add a Skill** | Edit the `skills` array in `src/data/portfolioData.ts`. |
| **Update Social Links or Email** | Edit the `personalInfo` object in `src/data/portfolioData.ts`. |

---

## 🚀 4. Development & Deployment Workflow

- **Run locally for development:**
  ```bash
  npm run dev
  ```
- **Test production build:**
  ```bash
  npm run build
  ```
- **Deploy changes to Vercel:**
  ```bash
  git add .
  git commit -m "Your descriptive commit message"
  git push origin main
  ```
  *(Pushing to GitHub triggers an automatic redeployment on Vercel within 1-2 minutes!)*
