import { Github, Linkedin, Mail } from "lucide-react";


export const hero = {
    fullText: "Preethi Vijaykumar Hiremath",
    role: "Backend Engineer | ML Systems Engineer",
    subtitle:
        "Backend engineer with 2+ years at Deutsche Bank specializing in high-performance distributed systems and machine learning applications.",
    primaryAction: { label: "Get In Touch", href: "mailto:preethivhiremath.vh25@gmail.com" },
    secondaryAction: { label: "Resume", href: "/resume.pdf" },
    profileImagePath: "/preethi_pfp.jpg",
};

export const aboutTimeline = [
    {
        role: "React Developer Intern",
        company: "Inovact Pvt Ltd",
        period: "Aug 2021 - Nov 2021",
        description: "Built component-driven UI systems and improved frontend performance",
        color: "from-blue-500 to-cyan-500",
    },
    {
        role: "Web Intern",
        company: "Luxeveda Brand Services",
        period: "Apr 2023 - Jun 2023",
        description: "Worked on IoT backend systems with real-time communication",
        color: "from-cyan-500 to-purple-500",
    },
    {
        role: "Graduate Analyst",
        company: "Deutsche India Pvt Ltd",
        period: "Jul 2023 - Oct 2024",
        description: "Built distributed financial systems and optimized database performance",
        color: "from-purple-500 to-pink-500",
    },
    {
        role: "Senior Analyst",
        company: "Deutsche India Pvt Ltd",
        period: "Oct 2024 - Mar 2026",
        description: "Led microservices migration and mission-critical systems",
        color: "from-pink-500 to-red-500",
    },
] as const;

export const aboutSection = {
    heading: "Career Evolution",
    subheading: "From frontend intern to backend and ML systems engineer",
    summary:
        "Backend engineer with 2+ years at Deutsche Bank, advanced to Senior Analyst level, reducing memory usage by 95% via microservices migration. Experience building distributed financial systems across APAC, US, and EMEA. Applied machine learning in EEG signal processing and LLM integrations. Open-source contributor to developer security tooling and neuroscience libraries.",
};

export const contactCards = [
    {
        icon: Mail,
        label: "Email",
        value: "preethivhiremath.vh25@gmail.com",
        link: "mailto:preethivhiremath.vh25@gmail.com",
        color: "from-red-400 to-pink-500",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@preethihiremath",
        link: "https://github.com/preethihiremath",
        color: "from-gray-400 to-gray-600",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Preethi Vijaykumar",
        link: "https://www.linkedin.com/in/preethivhirematha04a071b5/",
        color: "from-blue-400 to-blue-600",
    },
] as const;

export const contactSection = {
    heading: "Let's Connect",
    subheading: "Open to backend, ML, and distributed systems roles",
    ctaHeading: "Let’s build something impactful",
    ctaText: "Currently seeking Werkstudent or full-time opportunities in Germany",
    footerText: "© 2026 Preethi Vijaykumar Hiremath. Built with React & Tailwind",
};


export const skillsSection = {
    heading: "Tech Stack",
    subheading: "Technologies I use to build scalable systems",
    skills: [
        { name: "Java", level: 95, color: "from-orange-400 to-red-500" },
        { name: "Spring Boot", level: 95, color: "from-green-400 to-green-600" },
        { name: "React", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Python", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "SQL", level: 85, color: "from-indigo-400 to-indigo-600" },
        { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
        { name: "Docker", level: 75, color: "from-blue-500 to-cyan-500" },
        { name: "GCP", level: 57, color: "from-yellow-400 to-orange-500" },
    ] as const,
    extraSkills: [
        "Git",
        "Kubernetes",
        "REST and SOAP API",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "LSTM",
        "Streamlit",
        "Linux",
    ] as const,
};

export const experienceSection = {
    heading: "Experience",
    subheading: "Building distributed systems and ML-driven applications",
    experiences: [
        {
            role: "Senior Analyst",
            company: "Deutsche India Pvt Ltd",
            period: "Oct 2024 - Mar 2026",
            location: "Bangalore, India",
            description: "Led backend systems modernization and critical infrastructure",
            achievements: [
                "Migrated legacy Java/C++ systems to Spring Boot microservices, reducing memory usage by 95% by handling race conditions and optimizing resource management; ",
                "Built real-time Oracle AQ messaging system enabling sub-second updates across APAC, US, and EMEA",
                "Designed and maintained RESTful and SOAP APIs; implemented TDD/BDD testing with JUnit and Mockito, reducing defect escape rate by 30% across 5 production services",
                "Part of SUSE Linux to RHEL 9 migration across 8 production pipelines, resolving compatibility issues and improving security",
        
            ],
            color: "from-purple-500 to-indigo-600",
        },
        {
            role: "Graduate Analyst",
            company: "Deutsche India Pvt Ltd",
            period: "Jul 2023 - Oct 2024",
            location: "Bangalore, India",
            description: "Focused on database performance and distributed pipelines",
            achievements: [
                "Optimized complex Oracle SQL using Global Temporary Tables, stored procedures, triggers, and user-defined types; improved query execution time by 20%+ across high-volume transaction processing services.",
                "Designed and maintained ETL pipelines integrating 6 upstream and downstream systems; implemented reconciliation logic ensuring thread-safe concurrent processing",
                "Contributed to Oracle Exadata (ExaCC) cloud migration; schema enhancements and SQL tuning reduced average query latency by 15%",
            ],
            color: "from-cyan-500 to-blue-600",
        },
        {
            role: "Web Intern",
            company: "Luxeveda Brand Services",
            period: "Apr 2023 - Jun 2023",
            location: "India",
            description: "Worked on IoT backend systems",
            achievements: [
                "Built Node.js MQTT backend for 10+ devices",
                "Achieved sub-100ms latency for air-quality monitoring system",
                "Designed REST APIs for device scheduling, maintenance tracking, and analytics."
            ],
            color: "from-blue-500 to-cyan-500",
        },
        {
            role: "React Developer Intern",
            company: "Inovact Pvt Ltd",
            period: "Aug 2021 - Nov 2021",
            location: "India",
            description: "Frontend engineering and UI development",
            achievements: [
                "Built 15+ reusable React components reducing load time by 20%",
                "Collaborated with cross-functional teams on scalable UI systems",
            ],
            color: "from-pink-500 to-purple-500",
        },
    ] as const,
};

export const projectSection = {
    heading: "Featured Projects",
    subheading: "Innovative solutions at the frontier of neuroscience and security",
};

export const heroSection = {
    brand: "PVH",
};
export const person = {
    shortName: "PVH",
}

export const navItems = [
   
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
] as const;

export const projects = 
[{ id: "brainsurf", title: "BrainSurf", 
    impact: "Open-source cognitive neuroscience toolkit for practical EEG workflows.",
     bullets: ["Developed comprehensive EEG signal processing library published on PyPI for cognitive neuroscience research.", "Built data preprocessing pipeline: artifact removal using Independent Component Analysis (ICA) and Wavelet-based iltering; reduced preprocessing time by 80%.", "Trained binary classification model (scikit-learn) to predict cognitive states from multi-channel EEG data; achieved 80%+ accuracy using cross-validation.", "Implemented statistical analysis module utilizing Welch’s t-tests and Power Spectral Density analysis for cognitive load assessment.", "Deployed interactive Streamlit web application enabling real-time EEG visualization, one-click preprocessing, and model inference for researchers"], 
     
     links: [{ label: "Github", href: "https://github.com/preethihiremath/brainsurf" },
        { label: "PyPI", href: "https://pypi.org/project/brainsurf/" }

     ], tags: ["Python", "PyPI", "EEG", "Signal Processing"], }, { id: "snitchlint", title: "SnitchLint", impact: "Security-first developer tooling.", bullets: ["A developer first static security analysis engine for JS/TS using the TypeScript AST", "Implemented a taint/dataflow analysis system that Tracks propagation across assignments, expressions, and function calls and Supports parameter seeding to detect vulnerabilities across helper functions", "Detects OWASP Top 10-inspired vulnerabilities (XSS, SQLi, SSRF, secrets, command injection, weak crypto)", "Integrated directly into VS Code Problems panel with stable rule codes and remediation hints", "Designed extensible rule engine architecture with typed models and test coverage"],
        
        
        links: [{ label: "Github", href: "https://github.com/preethihiremath/snitchlint" },
            { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=preethivhiremath.snitchlint" }


        ], tags: ["TypeScript", "OWASP", "VS Code", "ESLint"], }, { id: "translator", title: "Deep Learning Language Translator (Seq2Seq)", impact: "Language translation model.", bullets: ["Designed and trained character-level Seq2Seq model with LSTM encoder-decoder for English-to-French translation.", "Optimized training pipeline: vectorized dataset of 10,000 sentence pairs with one-hot encoding; managed categorical cross-entropy loss over 100 epochs.", "Implemented encoder-decoder architecture with attention-like mechanisms for sequence alignment.",], 
            links: [{ label: "Github", href: "https://github.com/preethihiremath/Translator_DL" }], tags: ["Python", "Keras", "LSTM", "TensorFlow"], },] as const;


export const skillLevels = [
  { name: "Java", value: 100 },
  { name: "Spring Boot", value: 100 },
  { name: "React", value: 95 },
  { name: "Python", value: 85 },
  { name: "SQL", value: 85 },
  { name: "Node.js", value: 70 },
  { name: "GCP", value: 70 },
  { name: "Docker", value: 60 },
  { name: "Kubernetes", value: 55 },
    { name: "TensorFlow", value: 65 },
  { name: "Keras", value: 65 },
  { name: "scikit-learn", value: 65 },
  { name: "LSTM", value: 60 },
  { name: "Streamlit", value: 65 },
  { name: "Prompt Eng", value: 55 },
];