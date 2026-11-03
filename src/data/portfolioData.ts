// ==============================================================================
// PORTFOLIO DATA (portfolioData.ts) — Central Portfolio Database
// 
// 💡 This is the single source of truth for your entire portfolio website.
// To update your name, bio, skills, education, projects, or links, simply edit
// this file. All website components automatically reflect these changes!
// ==============================================================================

// ----- TypeScript Interface Definitions -----
export interface Certification {
  name: string;
  provider: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  category?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  icon: string;
  status: string;
  description?: string;
}

// ==============================================================================
// 1. Personal Info — Bio, Headline, Social Media Links & Resume
// ==============================================================================
export const personalInfo = {
  name: "Bhuvana Chandra",
  headline: "Aspiring Software Developer | CSE-AI Graduate",
  tagline: "Building intelligent, scalable solutions with passion.",
  about: `I'm Bhuvana Chandra , a Computer Science and Engineering (Artificial Intelligence) student at Pragati Engineering College. With a strong foundation in both frontend and backend development, I am passionate about creating practical software solutions that are clean, efficient, and user-friendly.

My journey in technology began during my Diploma at Chaitanya Institute of Science and Technology, where I developed a solid understanding of core programming concepts and computer systems. I am constantly expanding my skill set — exploring modern web frameworks, databases, and AI-driven technologies.

I enjoy turning ideas into working software and am eager to contribute to real-world projects, collaborate with talented teams, and grow as a developer. When I'm not coding, I'm exploring new technologies and creative digital art.`,

  // Social profile links
  github: "https://github.com/chandra1414",
  linkedin: "https://www.linkedin.com/in/bhuvan2004/?isSelfProfile=true",
  twitter: "https://twitter.com/bhuvan2004",
  email: "bhuvanasurampudi94@gmail.com",

  // Path to your resume PDF (stored inside the public/ folder)
  resumeUrl: "/resume.pdf",

  // Path to your profile photo (stored inside the public/ folder)
  profilePhoto: "/profile.jpg",
};

// ----- Skills -----
export const skills = [
  {
    category: "Frontend Development",
    icon: "Monitor",
    color: "from-blue-500 to-cyan-500",
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    category: "Backend Development",
    icon: "Server",
    color: "from-purple-500 to-pink-500",
    items: ["Python", "FastAPI"],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "from-green-500 to-teal-500",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Frameworks & Technologies",
    icon: "Layers",
    color: "from-orange-500 to-yellow-500",
    items: ["Django", "Node.js"],
  },
];

// ==============================================================================
// 3. Education — Academic Timeline (Degrees, Specialization, College & Location)
// ==============================================================================
export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (Artificial Intelligence)", // Rendered prominently in BOLD
    institution: "Pragati Engineering College",
    location: "Surampalem, Andhra Pradesh",
    duration: "2023 – 2026",
    icon: "GraduationCap",
    status: "Completed",
    description: "B.Tech in Computer Science and Engineering with AI specialization. Focused on machine learning, full-stack development, and intelligent software engineering principles.",
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "Chaitanya Institute of Science and Technology",
    location: "Madhavapatnam, Andhra Pradesh",
    duration: "2020 – 2023",
    icon: "BookOpen",
    status: "Completed",
    description: "Completed diploma education in Computer Science and Engineering, building strong foundations in core programming, data structures, and computer applications.",
  },
  {
    degree: "Secondary Education (S.S.C)",
    field: "Secondary School Certificate",
    institution: "Camp School",
    location: "Ramachandrapuram, Andhra Pradesh",
    duration: "", // Passing year not provided
    icon: "School",
    status: "Completed",
    description: "Completed secondary education at Camp School, Ramachandrapuram with foundational academic excellence.",
  },
];

// ==============================================================================
// 4. Certifications — Professional Certificates & Courses
// ==============================================================================
export const certifications: Certification[] = [];

// ==============================================================================
// 5. Projects — Featured Real-World Applications & Live Demos
// Each project includes: title, description, tags, liveUrl, and screenshot image path
// ==============================================================================
export const projects: Project[] = [
  {
    id: 1,
    title: "Halo Chat Messenger Application",
    description:
      "HaloChat – Real-Time Chat Application A full-stack chat application featuring instant messaging, voice notes, media sharing, online status, and typing indicators using React, Node.js, Express, Socket.IO, and MongoDB.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Socket.IO", "MongoDB Compass", "MongoDB Atlas", "Mongoose"],
    liveUrl: "https://halo-chat-messenger-app.vercel.app/",
    githubUrl: "",
    image: "/screenshots/HaloChat.png",
    category: "Full Stack",
    featured: true,
  },
  
  {
    id: 2,
    title: "Gemini Chatbot",
    description:
      "AI Chatbot – Interactive Conversational Assistant A web-based AI chatbot built with Python, Streamlit, LangChain, and Google Gemini, featuring real-time streaming responses, conversation memory, chat history, and customizable model settings.",
    tags: ["Python 3", "Streamlit", "LangChain", "Google Gemini API"],
    liveUrl: "https://bhuvan-gemini-chatbot.streamlit.app/",
    githubUrl: "",
    image: "/screenshots/chatbot.png",
    category: "AI & Python",
    featured: true,
  },

  {
    id: 3,
    title: "Online Test Platform",
    description:
      "CodeGen – Online Coding & Assessment Platform A full-stack coding and examination platform built with Python, Django, MySQL, Bootstrap, and JavaScript, featuring timed exams, MCQ and coding challenges, automatic evaluation, secure code execution, performance analytics, PDF certificates, and a live leaderboard.",
    tags: ["python", "django", "MySQL/sqlite", "Html/Bootstrap 5", "JavaScript"],
    liveUrl: "https://online-test-platform-five.vercel.app/login/?next=/",
    githubUrl: "",
    image: "/screenshots/codegen.png",
    category: "Full Stack",
    featured: true,
  },

  {
    id: 4,
    title: "Todo Task Manager",
    description:
      "A clean, responsive task manager built with React, Vite, and Tailwind CSS. Add, edit, complete, delete, filter, and search tasks, with automatic browser storage.",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://todo-task-manager-three.vercel.app/",
    githubUrl: "",
    image: "/screenshots/Todo.png",
    category: "Web Development",
    featured: false,
  },

  {
    id: 5,
    title: "Durga Mata Drawing Animation",
    description:
      "A creative canvas-based drawing animation project that digitally recreates the artwork of Durga Mata using animated strokes and visual effects.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    liveUrl: "https://chandra1414.github.io/Durgamata_Drawing_animation/",
    githubUrl: "",
    image: "",
    category: "Web Development",
    featured: false,
  },

  {
    id: 6, 
    title: "Photography Website",
    description:
      "A sleek modern photography showcase website with interactive image galleries, smooth transitions, responsive photo grids, and mobile-friendly layouts.",
    tags: ["Html", "css", "JavaScript"],
    liveUrl: "https://photography-website-sqhy.vercel.app/",
    githubUrl: "",
    image: "",
    category: "Web Development",
    featured: false,
  },
];

// ----- Experience -----
// Add internships / work experience here:
export const experience: Experience[] = [];

// ----- Achievements -----
// Add achievements / awards here:
export const achievements: Achievement[] = [];

// ----- Navigation -----
export const navLinks = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Education",      href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects",       href: "#projects" },
  { label: "Experience",     href: "#experience" },
  { label: "Contact",        href: "#contact" },
];
