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
                    I’m a software engineer who enjoys building full-stack applications and experimenting with AI-driven ideas. I work mainly with Python and JavaScript and like creating practical, user-focused projects. I’m especially interested in AI, computer vision with OpenCV, and robotics, and I enjoy exploring how software connects with the real world.
                    
                </p>
                <p>
                   I learn by building, love solving problems, and focus on turning ideas into simple, working solutions.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
