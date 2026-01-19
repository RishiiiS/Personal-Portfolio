import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import '../styles/EducationExperience.css';

const experiences = [
    {
        icon: Briefcase,
        title: "Frontend Developer Intern",
        organization: "TechStart Inc.",
        date: "Summer 2025",
        description: "Built responsive web applications and improved load times by 40%"
    },
    {
        icon: GraduationCap,
        title: "Computer Science",
        organization: "State University",
        date: "2023 - Present",
        description: "Focus on Software Engineering and AI. Dean's List 2024-2025"
    }
];

const EducationExperience = () => {
    return (
        <div className="education-experience-container">
            <h2 className="section-title">Experience & Education</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default EducationExperience;
