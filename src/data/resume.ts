import { Github, Linkedin, Mail } from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Dharanish A M",
    role: "Software Developer",
    phone: "+91 8668030261",
    email: "dharanish816@gmail.com",
    location: "Coimbatore, India",
    social: [
      { name: "GitHub", url: "https://github.com/Dharanish-AM", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/dharanish-a-m-40a797295/", icon: Linkedin },
      { name: "Email", url: "mailto:dharanish816@gmail.com", icon: Mail },
    ]
  },
  education: [
    {
      degree: "B.E CSE",
      institution: "Sri Eshwar College of Engineering",
      duration: "2023 – 2027",
      score: "CGPA: 8.12 (Till 4th Sem)"
    },
    {
      degree: "HSC",
      institution: "PKD Matriculation Higher Secondary School",
      duration: "2021 – 2023",
      score: "75.50%"
    },
    {
      degree: "SSLC",
      institution: "PKD Matriculation Higher Secondary School",
      duration: "2020 – 2021",
      score: ""
    }
  ],
  experience: [
    {
      company: "RAMPeX Technologies",
      role: "Software Developer Intern",
      duration: "11 Months",
      description: "Architected and developed scalable, modular full-stack applications with maintainable architecture and cloud deployment. Contributed to an Agile team, handling end-to-end development, CI/CD, code reviews, and testing to deliver production-ready solutions."
    }
  ],
  projects: [
    {
      name: "BioKey",
      year: "2024",
      description: "Cloud-based media platform with fingerprint authentication, featuring a custom biometric device and secure, encrypted cross-platform access.",
      techStack: ["React Native", "React", "Node.js", "Redux", "Docker", "AWS EC2", "CI/CD", "MongoDB"],
      link: "https://github.com/Dharanish-AM/BioKey",
      github: "https://github.com/Dharanish-AM/BioKey"
    },
    {
      name: "AlgoLog",
      year: "2025",
      description: "Centralized student analytics platform for real-time tracking of coding performance via automated web scraping and insights-driven dashboards.",
      techStack: ["React", "Node.js", "Redux", "Tailwind CSS", "Web Scraping", "Cheerio", "Chart.js", "MongoDB"],
      link: "https://github.com/Dharanish-AM/AlgoLog",
      github: "https://github.com/Dharanish-AM/AlgoLog"
    },
    {
      name: "Swoosh",
      year: "2025",
      description: "Secure, QR-driven peer-to-peer file sharing platform offering instant, isolated rooms and high-performance, encrypted transfers.",
      techStack: ["React", "TailwindCSS", "Redux Toolkit", "Electron", "Spring Boot", "Spring Cloud", "Spring Security", "MySQL"],
      link: "https://github.com/Dharanish-AM/Swoosh",
      github: "https://github.com/Dharanish-AM/Swoosh"
    },
    {
      name: "Vulnora AI",
      year: "Ongoing",
      description: "Enterprise-grade, offline security scanner using LLM analysis to detect complex vulnerabilities and hardcoded secrets with deep contextual accuracy.",
      techStack: ["Python", "FastAPI", "React", "Node.js", "Tailwind", "Ollama", "Llama 3", "Electron", "CLI"],
      status: "Ongoing",
      link: "https://github.com/Dharanish-AM/Vulnora-AI",
      github: "https://github.com/Dharanish-AM/Vulnora-AI"
    },
    {
      name: "TownTrolley",
      year: "2024",
      description: "Marketplace connecting farmers directly with customers for local produce, empowering community agriculture.",
      techStack: ["React", "Express", "Node", "MongoDB", "Leaflet"],
      link: "https://github.com/JeyaprakashRajesh/TownTrolley",
      github: "https://github.com/JeyaprakashRajesh/TownTrolley"
    },
    {
      name: "Earthing Healthiness Monitor",
      year: "2024",
      description: "IoT system monitoring earth leakage currents in real-time using LoRa sensors and a web dashboard.",
      techStack: ["React", "Express", "Node", "MongoDB", "LoRa", "Sensors"],
      link: "https://github.com/Dharanish-AM/Earthing-Healthiness-Monitor",
      github: "https://github.com/Dharanish-AM/Earthing-Healthiness-Monitor"
    },
    {
      name: "Eatzly",
      year: "2024",
      description: "QR-based mobile food ordering platform streamlining menu browsing, ordering, and payments.",
      techStack: ["React", "Express", "Node", "MongoDB", "QR Codes"],
      link: "https://github.com/JeyaprakashRajesh/Eatzly",
      github: "https://github.com/JeyaprakashRajesh/Eatzly"
    },
    {
      name: "MILVER",
      year: "2024",
      description: "Milk delivery management system optimizing driver routes and tracking bottle distribution.",
      techStack: ["React", "Express", "Node", "MongoDB", "Leaflet"],
      link: "https://github.com/Dharanish-AM/MILVER",
      github: "https://github.com/Dharanish-AM/MILVER"
    },
    {
      name: "TrackWise",
      year: "2024",
      description: "Student activity tracker for tutors with task assignment, submission monitoring, and simplified analytics.",
      techStack: ["React", "Node", "Express", "MongoDB"],
      link: "https://github.com/Dharanish-AM/TrackWise",
      github: "https://github.com/Dharanish-AM/TrackWise"
    },
    {
      name: "NeuroBridge",
      year: "2024",
      description: "AI platform analyzing EEG signals to detect attention levels and mental states for neurofeedback.",
      techStack: ["AI", "EEG", "React", "TailwindCSS", "Node", "Express"],
      link: "https://github.com/Dharanish-AM/NeuroBridge",
      github: "https://github.com/Dharanish-AM/NeuroBridge"
    },
    {
      name: "CmdCast",
      year: "2024",
      description: "Real-time tool for broadcasting and synchronizing terminal commands across multiple developer machines.",
      techStack: ["Node", "Socket.io", "React", "Express", "WebRTC"],
      link: "https://github.com/Dharanish-AM/CmdCast",
      github: "https://github.com/Dharanish-AM/CmdCast"
    },
    {
      name: "RouteLens — VS Code Extension",
      year: "2024",
      description: "VS Code extension visualizing Node.js API endpoints in a tree view for easier debugging.",
      techStack: ["JavaScript", "VSCode API", "Node.js", "Express", "Fastify", "AST Parsing", "Babel"],
      link: "https://github.com/Dharanish-AM/RouteLens",
      github: "https://github.com/Dharanish-AM/RouteLens"
    },
    {
      name: "Code Tracer CLI",
      year: "2024",
      description: "CLI tool for JavaScript/TypeScript codebase analysis, detecting circular dependencies and performance bottlenecks.",
      techStack: ["Node.js", "JavaScript", "TypeScript", "CLI", "CodeAnalysis"],
      link: "https://github.com/Dharanish-AM/Code-Tracer-CLI",
      github: "https://github.com/Dharanish-AM/Code-Tracer-CLI"
    },
    {
      name: "InterVue AI",
      year: "2024",
      description: "AI interview simulator generating real-time technical questions and providing structured feedback on responses.",
      techStack: ["React", "Node.js", "FastAPI", "Python", "OpenAI", "WebSockets", "Speech-to-Text", "AI Evaluation Engine"],
      link: "https://github.com/Dharanish-AM/InterVue-AI",
      github: "https://github.com/Dharanish-AM/InterVue-AI"
    },
    {
      name: "ThinkBook LM",
      year: "2024",
      description: "Privacy-focused, offline research assistant using local RAG to answer questions from documents without cloud data transfer.",
      techStack: ["FastAPI", "React", "Tailwind", "Ollama", "Llama 3.1", "ChromaDB", "SentenceTransformers", "Local RAG"],
      link: "https://github.com/Dharanish-AM/ThinkBook-LM",
      github: "https://github.com/Dharanish-AM/ThinkBook-LM"
    }
  ],
  certifications: [
    { name: "Certified AppSec Practitioner", provider: "The SecOps Group", year: "2025" },
    { name: "ACE Multicloud Network Associate", provider: "Aviatrix", year: "2025" },
    { name: "AWS Academy Graduate – Cloud Foundations", provider: "Amazon Web Services", year: "2025" },
    { name: "IBM Full-Stack Software Developer Professional Certificate", provider: "Coursera", year: "2024" },
    { name: "React Native - The Practical Guide", provider: "Udemy", year: "2025" }
  ],
  achievements: [
    "SIH 2024 & 2025 - Consecutively nominated after clearing prelims",
    "Futurepreneur 2024 (StartupTN) - Secured 3rd place (Coimbatore zone)",
    "Patent Publication - BioKey: A Biometric Authentication-Based Application",
    "Paper Publication - Lurnix: An Intelligent Ecosystem for Neurodiverse Learning",
    "Coding Carnival - Secured 1st Runner-Up among 3200+ participants",
    "Open Source - Built RouteLens (VS Code) & Code Tracer CLI (NPM)",
    "GitHub: 14+ Real-World Projects (8+ Solo Projects) with 1000+ Contributions",
    "LeetCode: 110+ problems"
  ],
  skills: {
    languages: ["C", "C++", "Java", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Node.js", "Express", "Spring Boot", "Redux", "Tailwind CSS"],
    cloud: ["AWS", "Docker", "Kubernetes", "MongoDB", "MySQL", "Redis", "Firebase", "Nginx", "Jenkins", "GitHub Actions", "Vercel", "Netlify", "Render", "Terraform"],
    systemDesign: ["Microservices", "REST APIs", "WebSockets", "Event-Driven Systems", "Load Balancing", "Caching", "Fault Tolerance", "API Gateways", "CI/CD", "Containerization"],
    tools: ["JWT", "OAuth2", "API Security", "Vulnerability Testing", "Burp Suite", "Git", "Postman", "Figma", "Linux CLI"]
  }
};
