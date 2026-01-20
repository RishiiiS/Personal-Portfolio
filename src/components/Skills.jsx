import React from 'react';
import '../styles/Skills.css';

const skillCategories = [
    {
        title: "Languages",
        skills: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "NoSQL"
        ]
    },
    {
        title: "Frontend & Design",
        skills: [
            "React",
            "Tailwind CSS",
            "Bootstrap",
            "Figma",
            "Canva"
        ]
    },
    {
        title: "Backend & Database",
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Prisma ORM",
            "Supabase",
            "Firebase"
        ]
    },
    {
        title: "Data & AI",
        skills: [
            "NumPy",
            "Pandas",
            "Generative AI",
            "OpenAI API",
            "Hugging Face",
            "Data Structures"
        ]
    },
    {
        title: "Other Tools",
        skills: [
            "Git",
            "GitHub",
            "GitHub Actions",
            "Postman",
            "OAuth 2.0",
            "Event-Driven Architecture",
            "API Testing"
        ]
    }
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="skills-title">Skills & Technologies</h2>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className="skill-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
