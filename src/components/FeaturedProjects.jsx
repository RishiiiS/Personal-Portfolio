import React from 'react';
import { Code, Cloud, CheckSquare, Database, Smartphone, Zap } from 'lucide-react';
import ProjectCard from './ProjectCard';
import '../styles/FeaturedProjects.css';

const projects = [
    {
        icon: Code,
        title: "Social Media Dashboard",
        description: "Real-time analytics platform with interactive charts and engagement metrics",
        techStack: "React, Firebase, Chart.js",
        stars: 124,
        demoLink: "#",
        codeLink: "#"
    },
    {
        icon: Cloud,
        title: "Weather Forecast App",
        description: "Beautiful weather app with 7-day forecast and location-based predictions",
        techStack: "Vue.js, OpenWeather API, Geolocation",
        stars: 89,
        demoLink: "#",
        codeLink: "#"
    },
    {
        icon: CheckSquare,
        title: "Task Management System",
        description: "Collaborative kanban board with real-time updates and team features",
        techStack: "MERN Stack, Socket.io, Redux",
        stars: 156,
        demoLink: "#",
        codeLink: "#"
    },
    {
        icon: Database,
        title: "E-commerce Platform",
        description: "Full-featured online store with payment integration and admin dashboard",
        techStack: "Next.js, Stripe, PostgreSQL",
        stars: 203,
        demoLink: "#",
        codeLink: "#",
        isFeatured: true
    },
    {
        icon: Smartphone,
        title: "Fitness Tracking App",
        description: "Cross-platform mobile app for tracking workouts and nutrition goals",
        techStack: "React Native, Firebase, HealthKit",
        stars: 167,
        demoLink: "#",
        codeLink: "#"
    },
    {
        icon: Zap,
        title: "AI Chat Assistant",
        description: "Intelligent chatbot with context awareness and natural language processing",
        techStack: "Python, OpenAI API, FastAPI",
        stars: 298,
        demoLink: "#",
        codeLink: "#"
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
