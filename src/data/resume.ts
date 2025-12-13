import { Github, Linkedin, Mail } from "lucide-react";

export const resumeData = {
  personal: {
    name: "Dharanish A M",
    role: "Software Developer",
    phone: "+91 8668030261",
    email: "dharanish816@gmail.com",
    location: "Coimbatore, India",
    social: [
      { name: "GitHub", url: "https://github.com/Dharanish-AM", icon: Github },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dharanish-a-m-40a797295/",
        icon: Linkedin,
      },
      { name: "Email", url: "mailto:dharanish816@gmail.com", icon: Mail },
    ],
    about: {
      bio: [
        "I’m a Software Developer from Coimbatore, India, crafting scalable, secure, and user-centric digital experiences.",
        "I specialize in building system architectures that perform under real-world load—whether it’s distributed backends, cloud-native apps, or intelligent tools powered by AI.",
        "I thrive at the intersection of engineering, problem-solving, and product thinking. Every project I build is driven by clarity, precision, and a relentless commitment to grow beyond yesterday’s limits.",
      ],
      quote: "Turning ideas into systems. Turning systems into impact.",
      tagline: "Code. Scale. Secure. Repeat.",
    },
    mission:
      "To engineer high-quality software that blends performance, security, and simplicity—delivering solutions that scale with purpose and stand the test of time.",
    principles: [
      {
        title: "Build with intention",
        description: "Every line of code should serve clarity, not complexity.",
      },
      {
        title: "Deliver with discipline",
        description:
          "Ship thoughtfully, iterate quickly, and own what you create.",
      },
      {
        title: "Architect for trust",
        description:
          "Design systems that are secure, reliable, and resilient by default.",
      },
    ],
    status: "Code. Scale. Secure. Repeat.",
  },
  hero: {
    name: "Dharanish A M",
    role: "Software Developer",
    mission: "I create clean, fast, and secure software that scales.",
    specialties: ["Full-Stack", "Cloud", "Security", "AI"],
    principles: [
      "Keep it simple",
      "Build with purpose",
      "Trust through design",
    ],
    status: "Engineering what's next.",
  },
  education: [
    {
      degree: "B.E CSE",
      institution: "Sri Eshwar College of Engineering",
      duration: "2023 – 2027",
      score: "CGPA: 8.12 (Till 4th Sem)",
    },
    {
      degree: "HSC",
      institution: "PKD Matriculation Higher Secondary School",
      duration: "2021 – 2023",
      score: "75.50%",
    },
    {
      degree: "SSLC",
      institution: "PKD Matriculation Higher Secondary School",
      duration: "2020 – 2021",
      score: "",
    },
  ],
  experience: [
    {
      company: "RAMPeX Technologies",
      role: "Software Developer Intern",
      duration: "11 Months",
      description:
        "Architected and developed scalable, modular full-stack applications with maintainable architecture and cloud deployment. Contributed to an Agile team, handling end-to-end development, CI/CD, code reviews, and testing to deliver production-ready solutions.",
    },
  ],
  projects: [
    {
      name: "BioKey",
      year: "2024",
      description:
        "BioKey is a cloud-powered biometric media access system integrating a custom fingerprint device with secure authentication. I engineered a cross-platform architecture enabling encrypted, reliable, and low-latency media retrieval with seamless plug‑and‑play usability and scalable cloud deployment.",
      techStack: [
        "React Native",
        "React",
        "Node.js",
        "Redux",
        "Docker",
        "AWS EC2",
        "CI/CD",
        "MongoDB",
      ],
      link: "https://github.com/Dharanish-AM/BioKey",
      github: "https://github.com/Dharanish-AM/BioKey",
    },
    {
      name: "AlgoLog",
      year: "2025",
      description:
        "AlgoLog is a real-time coding analytics platform that aggregates student performance across multiple platforms using an automated scraping pipeline. It visualizes progress through interactive dashboards and generates insights to help institutions track outcomes at scale.",
      techStack: [
        "React",
        "Node.js",
        "Redux",
        "Tailwind CSS",
        "Web Scraping",
        "Cheerio",
        "Chart.js",
        "MongoDB",
      ],
      link: "https://github.com/Dharanish-AM/AlgoLog",
      github: "https://github.com/Dharanish-AM/AlgoLog",
    },
    {
      name: "Swoosh",
      year: "2025",
      description:
        "Swoosh is a secure peer-to-peer file-sharing platform enabling instant QR-based device pairing. It creates isolated, encrypted transfer rooms and uses a hybrid Electron + Spring microservice backend to ensure fast, reliable, and scalable file transfers.",
      techStack: [
        "React",
        "TailwindCSS",
        "Redux Toolkit",
        "Electron",
        "Spring Boot",
        "Spring Cloud",
        "Spring Security",
        "MySQL",
      ],
      link: "https://github.com/Dharanish-AM/Swoosh",
      github: "https://github.com/Dharanish-AM/Swoosh",
    },
    {
      name: "Vulnora AI",
      year: "Ongoing",
      description:
        "Vulnora AI is an offline, LLM-driven security scanner that detects deep, context-rich vulnerabilities and hardcoded secrets. It validates findings, generates actionable fixes, and supports multi-language analysis through a modular, cross-platform architecture.",
      techStack: [
        "Python",
        "FastAPI",
        "React",
        "Node.js",
        "Tailwind",
        "Ollama",
        "Llama 3",
        "Electron",
        "CLI",
      ],
      status: "Ongoing",
      link: "https://github.com/Dharanish-AM/Vulnora-AI",
      github: "https://github.com/Dharanish-AM/Vulnora-AI",
    },
    {
      name: "TownTrolley",
      year: "2024",
      description:
        "TownTrolley is a local-produce marketplace connecting farmers and customers. It supports real-time listings, location-based discovery, and secure ordering to strengthen community agriculture.",
      techStack: ["React", "Express", "Node", "MongoDB", "Leaflet"],
      link: "https://github.com/JeyaprakashRajesh/TownTrolley",
      github: "https://github.com/JeyaprakashRajesh/TownTrolley",
    },
    {
      name: "Earthing Healthiness Monitor",
      year: "2024",
      description:
        "An IoT-based monitoring system tracking earth leakage currents using LoRa sensors, offering real-time analytics and early fault detection through an interactive dashboard.",
      techStack: ["React", "Express", "Node", "MongoDB", "LoRa", "Sensors"],
      link: "https://github.com/Dharanish-AM/Earthing-Healthiness-Monitor",
      github: "https://github.com/Dharanish-AM/Earthing-Healthiness-Monitor",
    },
    {
      name: "Eatzly",
      year: "2024",
      description:
        "Eatzly is a QR-based food ordering platform that digitizes menu browsing, ordering, and payments to improve order accuracy and reduce restaurant wait times.",
      techStack: ["React", "Express", "Node", "MongoDB", "QR Codes"],
      link: "https://github.com/JeyaprakashRajesh/Eatzly",
      github: "https://github.com/JeyaprakashRajesh/Eatzly",
    },
    {
      name: "MILVER",
      year: "2024",
      description:
        "MILVER automates milk delivery logistics by optimizing routes, tracking bottle usage, and simplifying subscription-based order management.",
      techStack: ["React", "Express", "Node", "MongoDB", "Leaflet"],
      link: "https://github.com/Dharanish-AM/MILVER",
      github: "https://github.com/Dharanish-AM/MILVER",
    },
    {
      name: "TrackWise",
      year: "2024",
      description:
        "TrackWise is a student activity management tool for tutors featuring task assignment, submission tracking, and performance visualization.",
      techStack: ["React", "Node", "Express", "MongoDB"],
      link: "https://github.com/Dharanish-AM/TrackWise",
      github: "https://github.com/Dharanish-AM/TrackWise",
    },
    {
      name: "NeuroBridge",
      year: "2024",
      description:
        "NeuroBridge analyzes EEG data to infer cognitive states such as focus and relaxation, using AI-driven insights presented through a real-time neurofeedback dashboard.",
      techStack: ["AI", "EEG", "React", "TailwindCSS", "Node", "Express"],
      link: "https://github.com/Dharanish-AM/NeuroBridge",
      github: "https://github.com/Dharanish-AM/NeuroBridge",
    },
    {
      name: "CmdCast",
      year: "2024",
      description:
        "CmdCast is a real-time collaboration tool that broadcasts terminal commands across multiple machines using WebRTC and WebSockets, ideal for workshops and pair programming.",
      techStack: ["Node", "Socket.io", "React", "Express", "WebRTC"],
      link: "https://github.com/Dharanish-AM/CmdCast",
      github: "https://github.com/Dharanish-AM/CmdCast",
    },
    {
      name: "RouteLens — VS Code Extension",
      year: "2024",
      description:
        "RouteLens is a VS Code extension that parses Node.js projects to visualize API routes in a structured tree view, improving debugging and project understanding.",
      techStack: [
        "JavaScript",
        "VSCode API",
        "Node.js",
        "Express",
        "Fastify",
        "AST Parsing",
        "Babel",
      ],
      link: "https://github.com/Dharanish-AM/RouteLens",
      github: "https://github.com/Dharanish-AM/RouteLens",
    },
    {
      name: "Code Tracer CLI",
      year: "2024",
      description:
        "Code Tracer is a CLI tool that analyzes JavaScript/TypeScript projects to detect circular dependencies, performance bottlenecks, and structural issues using automated static analysis.",
      techStack: ["Node.js", "JavaScript", "TypeScript", "CLI", "CodeAnalysis"],
      link: "https://github.com/Dharanish-AM/Code-Tracer-CLI",
      github: "https://github.com/Dharanish-AM/Code-Tracer-CLI",
    },
    {
      name: "InterVue AI",
      year: "2024",
      description:
        "InterVue AI is an interactive interview simulator that generates real-time technical questions, evaluates user responses using AI, and provides structured improvement feedback.",
      techStack: [
        "React",
        "Node.js",
        "FastAPI",
        "Python",
        "OpenAI",
        "WebSockets",
        "AI Evaluation Engine",
      ],
      link: "https://github.com/Dharanish-AM/InterVue-AI",
      github: "https://github.com/Dharanish-AM/InterVue-AI",
    },
    {
      name: "ThinkBook LM",
      year: "2024",
      description:
        "ThinkBook LM is a privacy-focused research assistant using offline RAG pipelines to answer questions from documents locally, ensuring complete data confidentiality with accurate contextual results.",
      techStack: [
        "FastAPI",
        "React",
        "Tailwind",
        "Ollama",
        "Llama 3.1",
        "ChromaDB",
        "SentenceTransformers",
        "Local RAG",
      ],
      link: "https://github.com/Dharanish-AM/ThinkBook-LM",
      github: "https://github.com/Dharanish-AM/ThinkBook-LM",
    },
  ],
  certifications: [
    {
      name: "Certified AppSec Practitioner",
      provider: "The SecOps Group",
      year: "2025",
    },
    {
      name: "ACE Multicloud Network Associate",
      provider: "Aviatrix",
      year: "2025",
    },
    {
      name: "AWS Academy Graduate – Cloud Foundations",
      provider: "Amazon Web Services",
      year: "2025",
    },
    {
      name: "IBM Full-Stack Software Developer Professional Certificate",
      provider: "Coursera",
      year: "2024",
    },
    {
      name: "React Native - The Practical Guide",
      provider: "Udemy",
      year: "2025",
    },
    {
      name: "The Complete Full-Stack Web Development Bootcamp",
      provider: "Udemy",
      year: "2024",
    }
  ],
  achievements: [
    {
      title: "SIH 2024 & 2025",
      description:
        "Consecutively nominated after clearing prelims to represent the institution with innovative solutions.",
    },
    {
      title: "Futurepreneur 2024 (StartupTN)",
      description:
        "Secured 3rd place (Coimbatore zone) for developing a high-impact startup idea.",
    },
    {
      title: "Patent Publication",
      description:
        "BioKey: A Biometric Authentication-Based Application for Secure Data Access (202541051836A).",
    },
    {
      title: "Paper Publication",
      description:
        "Lurnix: An Intelligent Ecosystem for Neurodiverse Learning through AI and Multimodal Content.",
    },
    // {
    //   title: "Coding Carnival",
    //   description:
    //     "Secured 1st Runner-Up among 3200+ participants on Engineers’ Day.",
    // },
    {
      title: "Open Source",
      description:
        "Built RouteLens (VS Code) & Code Tracer CLI (NPM) for enhanced developer productivity.",
    },
    {
      title: "GitHub",
      description:
        "14+ Real-World Projects (8+ Solo Projects) with 1000+ Contributions; LeetCode: 110+ problems.",
    },
  ],
  skills: {
    languages: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express",
      "Spring Boot",
      "Redux",
      "Tailwind CSS",
    ],
    cloud: [
      "AWS",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "Nginx",
      "Jenkins",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "Render",
      "Terraform basics",
    ],
    systemDesign: [
      "Microservices",
      "REST APIs",
      "WebSockets",
      "Event-Driven Systems",
      "Load Balancing",
      "Caching",
      "Fault Tolerance",
      "API Gateways",
      "CI/CD",
      "Containerization",
      "Message Queues",
      "Rate Limiting",
      "Monitoring & Logging",
    ],
    tools: [
      "JWT",
      "OAuth2",
      "API Security",
      "Vulnerability Testing",
      "Burp Suite",
      "Git",
      "Postman",
      "Figma",
      "Linux CLI",
    ],
  },
};
