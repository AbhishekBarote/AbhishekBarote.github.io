
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
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "AI Agent Developer",
        icon: "https://img.icons8.com/color/48/bot.png",
    },
    {
        title: "LLM & RAG Engineer",
        icon: "https://img.icons8.com/color/48/brain--v1.png",
    },
    {
        title: "Full Stack AI Builder",
        icon: "https://img.icons8.com/color/48/source-code.png",
    },
    {
        title: "Workflow Automation",
        icon: "https://img.icons8.com/color/48/workflow.png",
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
        name: "Three.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
    },
    {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
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
        company_name: "Brainwonders",
        icon: "https://brainwonders.in/images/logo.png", // Placeholder or get actual logo if possible, using text for now
        iconBg: "#E6DEDD",
        date: "Oct 2025 - Dec 2025",
        points: [
            "Engineered and deployed conversational AI agents on the official website.",
            "Optimized chatbot latency and response accuracy for high-traffic scenarios.",
            "Designed NLP-driven workflows to personalize interactions.",
            "Collaborated with cross-functional teams to automate business support systems.",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "Dify Plugins Marketplace",
        icon: "https://asset.brandfetch.io/idO-3_k_3-/idJ5G_2_2-.png", // Dify logo placeholder from brandfetch
        iconBg: "#383E56",
        date: "2026",
        points: [
            "Developed and contributed a LinkedIn plugin to the official Dify Plugins Marketplace.",
            "Worked with plugin manifests, CI validation checks, packaging rules.",
            "Collaborated with maintainers through structured code reviews.",
            "Built and tested multiple Dify workflows using nodes, tools, and integrations.",
        ],
    },
];

const projects = [
    {
        name: "EdQuest",
        description:
            "AI-driven platform for quiz generation, answer evaluation, and personalized feedback. Visual builder for AI apps.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "fastapi",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/000000/FFF?text=EdQuest+AI", // AI Theme text
        source_code_link: "https://github.com/AbhishekBarote/edquest",
        live_link: "https://edquest-chi.vercel.app/",
    },
    {
        name: "Industrial Safety RAG",
        description:
            "A lightweight Retrieval-Augmented Generation (RAG) system over industrial safety PDFs.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "streamlit",
                color: "green-text-gradient",
            },
            {
                name: "rag",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/000000/FFF?text=Safety+RAG",
        source_code_link: "https://github.com/AbhishekBarote", // Assuming consistent with others
        live_link: "",
    },
    {
        name: "LinkedIn Dify Plugin",
        description:
            "Official LinkedIn plugin for Dify. AI workflow automation tool.",
        tags: [
            {
                name: "dify",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "automation",
                color: "pink-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400/006699/FFF?text=Dify+Plugin",
        source_code_link: "https://github.com/langgenius/dify-plugins",
        live_link: "",
    },
];

const testimonials = [];

export { services, technologies, experiences, testimonials, projects };
