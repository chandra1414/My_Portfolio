# S Bhuvana Chandra — Portfolio Website

A complete, professional personal portfolio website built with **React + TypeScript + Tailwind CSS + Vite**.

## 🚀 Quick Start

```bash
# Navigate to project
cd bhuvana-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server will start at **http://localhost:5173**

## 📁 Project Structure

```
bhuvana-portfolio/
├── public/
│   ├── profile.jpg          ← Add your profile photo here
│   ├── resume.pdf           ← Add your resume PDF here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts  ← ⭐ Edit all your info here
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## ✏️ How to Edit Your Portfolio

All personal data is centralized in **`src/data/portfolioData.ts`**. You do NOT need to touch any component files.

### Add Your Profile Photo
Place your photo as `public/profile.jpg`.

### Add Your Resume
Place your resume as `public/resume.pdf`.

### Update Social Links
In `portfolioData.ts`, update:
```ts
linkedin: "https://linkedin.com/in/your-handle",
twitter:  "https://twitter.com/your-handle",
email:    "your.actual@email.com",
```

### Add Certifications
```ts
export const certifications: Certification[] = [
  {
    name: "React - The Complete Guide",
    provider: "Udemy",
    date: "October 2024",
    credentialUrl: "https://udemy.com/certificate/...",
  },
];
```

### Add More Projects
```ts
export const projects: Project[] = [
  // existing Durga Mata project...
  {
    id: 2,
    title: "My New Project",
    description: "What this project does.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    liveUrl: "https://my-project.netlify.app",
    githubUrl: "https://github.com/chandra1414/my-project",
    image: "/screenshots/my-project.png",  // place in public/screenshots/
  },
];
```

### Add Internship Experience
```ts
export const experience: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Company Name",
    duration: "June 2024 – August 2024",
    description: "What you did and learned.",
    technologies: ["React", "Python", "FastAPI"],
  },
];
```

### Enable Real Contact Form Email
The form currently shows a demo response. To enable real email delivery:
1. Sign up at [EmailJS](https://www.emailjs.com) or [Formspree](https://formspree.io)
2. Follow their integration guides for React
3. Replace the `setTimeout` in `ContactSection.tsx` with the real API call

## 🎨 Design Features
- Dark navy/black background with blue/purple gradient accents
- Smooth scroll navigation with active section highlighting
- Light/Dark theme toggle
- Responsive mobile menu
- Animated hero section with decorative blobs
- Vertical education timeline
- Skill category cards with color-coded tech pills
- Project cards with live demo links
- Contact form with validation
- SEO meta tags and Open Graph support
- Custom animated scrollbar

## 📦 Tech Stack
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) — fast build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Lucide React](https://lucide.dev/) — icon library

## 🌐 Deployment (Netlify)
```bash
npm run build
# Upload the `dist/` folder to Netlify
```
Or connect your GitHub repo to Netlify for automatic deploys.
