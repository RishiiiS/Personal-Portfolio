import React from 'react';
import { Code, Cloud, CheckSquare, Database, Smartphone, Zap } from 'lucide-react';
import ProjectCard from './ProjectCard';
import '../styles/FeaturedProjects.css';

const projects = [
    {
        icon: Smartphone,
        title: "DoodleDash",
        description: "Real-time multiplayer drawing game with WebSocket-based sync and gesture-controlled input.",
        techStack: "Websockets,flask,OpenCV,Mediapipe,gunicorn",
        demoLink: "https://doodledashh.vercel.app/",
        codeLink: "https://github.com/RishiiiS/AI-Virtual-Painter"
    },
    {
        icon: Code,
        title: "MoneyTree",
        description: "MoneyTree is a full-stack expense tracking application that enables users to manage income and expenses with real-time analytics using React, Node.js, and PostgreSQL",
        techStack: "React, Node.js,postgresql,jwt,bcrypt",
        demoLink: "https://moneytree-tau-two.vercel.app/",
        codeLink: "https://github.com/RishiiiS/Expense_Manager"
    },
    {
        icon: Smartphone,
        title: "The Archive",
        description: "A full-stack blogging platform built with Next.js, Supabase, and Cloudinary, featuring authentication, blog creation, and optimized media handling.",
        techStack: "Next.js, Supabase, Cloudinary",
        demoLink: "https://archive-nu-mauve.vercel.app/",
        codeLink: "https://github.com/RishiiiS/Hivon_auto_Assignment"
    },
    {
        icon: Code,
        title: "Tairis",
        description: "Web Based First-Aid Assistance Platform for Emergency Response",
        techStack: "React, Node.js, Supabase",
        demoLink: "https://tairis-ecru.vercel.app/",
        codeLink: "https://github.com/RishiiiS/tairis/tree/main"
    },
    {
        icon: CheckSquare,
        title: "LifeLink",
        description: "LifeLink connects users to emergency support and trusted contacts in real time when every second matters.",
        techStack: "React, Node.js",
        demoLink: "https://lifelink-alpha.vercel.app/",
        codeLink: "https://github.com/RishiiiS/Lifelink"
    },

];

const FeaturedProjects = () => {
    return (
        <div className="featured-projects-container">
            <div className="featured-header">
                <Code className="header-icon" size={28} />
                <h2>Featured Projects</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;
