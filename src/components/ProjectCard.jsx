import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ icon: Icon, title, description, techStack, stars, demoLink, codeLink, isFeatured }) => {
    return (
        <div className={`project-card ${isFeatured ? 'featured' : ''}`}>
            <div className="card-header">
                <div className="project-icon">
                    {Icon && <Icon size={24} />}
                </div>
                <div className="project-stars">
                    <Star size={16} className="star-icon" fill="#fbbf24" stroke="#fbbf24" />
                    <span>{stars}</span>
                </div>
            </div>

            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>

            <div className="project-tech">
                {techStack}
            </div>

            <div className="project-links">
                <a href={demoLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} />
                    Demo
                </a>
                <a href={codeLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
