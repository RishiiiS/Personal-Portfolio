import React from 'react';
import { BookOpen } from 'lucide-react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-card">
            <div className="about-header">
                <BookOpen className="about-icon" size={24} />
                <h2>About Me</h2>
            </div>

            <div className="about-content">
                <p>
                    I'm a passionate computer science student who loves bringing ideas to life through code. With a strong foundation in web development and a keen eye for design, I create intuitive and visually appealing applications that solve real-world problems.
                </p>
                <p>
                    When I'm not coding, you'll find me contributing to open-source projects, participating in hackathons, or exploring the latest tech trends. I'm always eager to learn new technologies and collaborate with creative teams.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
