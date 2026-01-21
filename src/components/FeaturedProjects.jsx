import React from 'react';
import { Code, Cloud, CheckSquare, Database, Smartphone, Zap } from 'lucide-react';
import ProjectCard from './ProjectCard';
import '../styles/FeaturedProjects.css';

const projects = [
    {
        icon: Code,
        title: "Tairis",
        description: "Web Based First-Aid Assistance Platform for Emergency Response",
        techStack: "React, Node.js, Supabase",
        demoLink: "https://tairis-ecru.vercel.app/",
        codeLink: "https://github.com/RishiiiS/tairis/tree/main"
    },
    {
        icon: Smartphone,
        title: "AI Virtual Painter",
        description: "An AI-powered virtual painter that lets users draw in the air using hand gestures detected via computer vision.",
        techStack: "OpenCV, Mediapipe, Numpy,handTracking",
        demoLink: "https://drive.google.com/file/d/1Qh62jHRA8CrRGQf_PmJ-LmMRqVJCyIN8/view",
        codeLink: "https://github.com/RishiiiS/AI-Virtual-Painter"
    },
    {
        icon: CheckSquare,
        title: "LifeLink",
        description: "LifeLink connects users to emergency support and trusted contacts in real time when every second matters.",
        techStack: "React, Node.js",
        demoLink: "https://lifelink-alpha.vercel.app/",
        codeLink: "https://github.com/RishiiiS/Lifelink"
    }
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
