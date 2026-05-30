import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "certifications",
        title: "Certifications",
    },
    {
        id: "contact",
        title: "Contact Me",
    },
];

const services = [
    {
        title: "AI Agent Developer",
        icon: "https://img.icons8.com/m-outlined/120/ffffff/bot.png",
    },
    {
        title: "LLM & RAG Engineer",
        icon: "https://img.icons8.com/m-outlined/120/ffffff/brain.png",
    },
    {
        title: "Full Stack AI Builder",
        icon: "https://img.icons8.com/m-outlined/120/ffffff/code.png",
    },
    {
        title: "Workflow Automation",
        icon: "https://img.icons8.com/m-outlined/120/ffffff/flow-chart.png",
    },
];

const technologies = [
    {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
        name: "FastAPI",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
    },
    {
        name: "Streamlit",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/streamlit/streamlit-original.svg",
    },
    {
        name: "React.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
];

const experiences = [
    {
        title: "AI Research Engineer Intern",
        company_name: "Brainwonders, Mumbai",
        icon: "https://www.brainwonders.in/images/logo.webp",
        iconBg: "#fff",
        date: "Oct 2025 - Dec 2025",
        points: [
            "Engineered and deployed conversational AI agents on the official website, improving automated query resolution and customer engagement.",
            "Designed NLP-driven workflows to personalize interactions and enhance response relevance.",
            "Optimized chatbot latency and response accuracy for high-traffic scenarios.",
            "Collaborated with cross-functional teams to automate business support systems using AI-driven pipelines.",
            "Elected President, Training and Placement Cell; led coordination between students, faculty and recruiters."
        ],
    },
    {
        title: "LinkedIn Plugin Developer",
        company_name: "Dify Plugins Marketplace",
        icon: "https://cloud.dify.ai/logo/logo.svg",
        iconBg: "#fff",
        date: "2026",
        points: [
            "Developed and contributed a LinkedIn plugin to the official Dify Plugins Marketplace.",
            "Contribution reviewed and merged into the dify-plugins main repository (PR #1890).",
            "Worked with plugin manifests, CI validation checks, packaging rules, and documentation standards.",
            "Collaborated with Dify maintainers through structured code reviews and iterative fixes.",
            "Built and tested multiple Dify workflows using nodes, tools, and integrations to design end-to-end LLM applications."
        ],
    },
];

const projects = [
    {
        name: "EdQuest — AI-Powered Learning",
        description:
            "AI-driven platform for quiz generation, answer evaluation, and personalized feedback. 1st Runner-Up in Hackathon for practical AI application.",
        tags: [
            { name: "python", color: "text-[#a0a0a0]" },
            { name: "fastapi", color: "text-[#a0a0a0]" },
            { name: "react", color: "text-[#a0a0a0]" },
            { name: "llms", color: "text-[#a0a0a0]" },
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400",
        source_code_link: "https://github.com/AbhishekBarote/edquest",
        live_link: "https://edquest-chi.vercel.app/",
    },
    {
        name: "Industrial Safety RAG",
        description:
            "A lightweight Retrieval-Augmented Generation (RAG) system over industrial safety PDFs with hybrid retrieval (vector + BM25).",
        tags: [
            { name: "python", color: "text-[#a0a0a0]" },
            { name: "fastapi", color: "text-[#a0a0a0]" },
            { name: "streamlit", color: "text-[#a0a0a0]" },
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400",
        source_code_link: "https://github.com/AbhishekBarote",
        live_link: "",
    },
    {
        name: "Brand Reputation Analysis",
        description:
            "A comprehensive data dashboard for analyzing brand sentiment, tracking reputation metrics, and uncovering NLP insights.",
        tags: [
            { name: "python", color: "text-[#a0a0a0]" },
            { name: "streamlit", color: "text-[#a0a0a0]" },
            { name: "nlp", color: "text-[#a0a0a0]" },
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
        source_code_link: "https://github.com/AbhishekBarote/Brand-Reputation-Analysis",
        live_link: "https://brand-reputation-analysis.streamlit.app/",
    },
];

const education = {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Mumbai",
    date: "2022 - 2026",
    gpa: "CGPA: 7.4 / 10.0"
}

const certifications = [
    {
        title: "Certified Software Engineer",
        issuer: "HackerRank",
        date: "Jun 2025",
        link: "https://www.hackerrank.com/certificates/iframe/f1c542a00979",
        image: "/image.png"
    },
    {
        title: "Career Essentials in Generative AI",
        issuer: "Microsoft & LinkedIn",
        date: "Sep 2025",
        link: "https://drive.google.com/file/d/1YdFAg6r_yXO1jH33QREMHpIMp_vJNcxN/view?usp=sharing",
        image: "/image4.png"
    },
    {
        title: "Deloitte Australia - Data Analytics Job Simulation",
        issuer: "Forage",
        date: "Jun 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4ExjbEoXXCC56NDBK_1749062219741_completion_certificate.pdf",
        image: "/image.png"
    },
    {
        title: "Career Essentials in Cybersecurity",
        issuer: "Microsoft & LinkedIn",
        date: "Jun 2024",
        link: "https://drive.google.com/file/d/1fN2Rrb2CFZc7Qgh10Xk6xXC06g_idOcZ/view?usp=sharing",
        image: "/image2.png"
    },
    {
        title: "Generative AI - Art of the Possible",
        issuer: "AWS Training & Certification",
        date: "May 2026",
        link: "https://drive.google.com/file/d/1IKnXFIDVzcg89jb6-N5d-qGL8LIwykan/view?usp=sharing",
        image: "/image3.png"
    }
];

export { services, technologies, experiences, projects, education, certifications };
