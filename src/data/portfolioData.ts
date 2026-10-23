// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

// ----- Type definitions -----
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

// ----- Personal Info -----
export const personalInfo = {
  name: "S Bhuvana Chandra",
  headline: "Aspiring Software Developer | CSE-AI Graduate",
  tagline: "Building intelligent, scalable solutions with passion.",
  about: `I'm S Bhuvana Chandra, a Computer Science and Engineering (Artificial Intelligence) student at Pragati Engineering College. With a strong foundation in both frontend and backend development, I am passionate about creating practical software solutions that are clean, efficient, and user-friendly.

My journey in technology began during my Diploma at Chaitanya Institute of Science and Technology, where I developed a solid understanding of core programming concepts and computer systems. I am constantly expanding my skill set — exploring modern web frameworks, databases, and AI-driven technologies.

I enjoy turning ideas into working software and am eager to contribute to real-world projects, collaborate with talented teams, and grow as a developer. When I'm not coding, I'm exploring new technologies and creative digital art.`,

  // Social links — replace # with your actual profile URLs
  github: "https://github.com/chandra1414",
  linkedin: "https://www.linkedin.com/in/bhuvan2004/?isSelfProfile=true",      // Replace with your LinkedIn URL
  twitter: "https://twitter.com/bhuvan2004",      // Replace with your Twitter/X URL
  email: "bhuvanasurampudi94@gmail.com", // Replace with your email

  // Resume — place your resume PDF at public/resume.pdf
  resumeUrl: "/resume.pdf",

  // Profile photo — place your photo at public/profile.jpg
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

// ----- Education -----
export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (Artificial Intelligence)",
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

// ----- Certifications -----
// Add your real certifications below. Example:
// { name: "React - The Complete Guide", provider: "Udemy", date: "Month Year", credentialUrl: "https://..." }
export const certifications: Certification[] = [];

// ----- Projects -----
export const projects: Project[] = [
  {
    id: 1,
    title: "Durga Mata Drawing Animation",
    description:
      "A creative canvas-based drawing animation project that digitally recreates the artwork of Durga Mata using animated strokes and visual effects.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    liveUrl: "https://chandra1414.github.io/Durgamata_Drawing_animation/",
    githubUrl: "", // Repository URL not verified — leave blank or add your own
    image: "",    // Add a screenshot path like "/screenshots/durga.png"
  },

  {
    id: 2,
    title: "Online Test Platform",
    description:
      "A creative canvas-based drawing animation project that digitally recreates the artwork of Durga Mata using animated strokes and visual effects.",
    tags: ["python","django","MySQL/sqlite","Html/Bootstrap 5","JavaScript"],
    liveUrl: "https://online-test-platform-five.vercel.app/login/?next=/",
    githubUrl: "", // Repository URL not verified — leave blank or add your own
    image: "",    // Add a screenshot path like "/screenshots/durga.png"
  },

  {
    id: 3,
    title: "Gemini Chatbot",
    description:
      "A creative canvas-based drawing animation project that digitally recreates the artwork of Durga Mata using animated strokes and visual effects.",
    tags: ["Python 3","Streamlit","LangChain","Google Gemini API"],
    liveUrl: "https://gemini-chatbott.onrender.com/",
    githubUrl: "", // Repository URL not verified — leave blank or add your own
    image: "",    // Add a screenshot path like "/screenshots/durga.png"
  },

  {
    id: 4, 
    title:"Photography Website",
    description:
      "A creative canvas-based drawing animation project that digitally recreates the artwork of Durga Mata using animated strokes and visual effects.",
    tags: ["Html","css","JavaScript"],
    liveUrl: "https://photography-website-sqhy.vercel.app/",
    githubUrl: "", // Repository URL not verified — leave blank or add your own
    image: "",    // Add a screenshot path like "/screenshots/durga.png"
  },


  // Add more projects here:
  // { id: 2, title: "...", description: "...", tags: [], liveUrl: "...", githubUrl: "..." },
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
