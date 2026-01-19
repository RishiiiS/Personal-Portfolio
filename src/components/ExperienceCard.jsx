import React from 'react';
import '../styles/ExperienceCard.css';

const ExperienceCard = ({ icon: Icon, title, organization, date, description }) => {
    return (
        <div className="experience-card">
            <div className="experience-icon-wrapper">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <div className="experience-details">
                <h3 className="experience-title">{title}</h3>
                <div className="experience-meta">
                    <span className="experience-org">{organization}</span>
                    <span className="experience-date">{date}</span>
                </div>
                <p className="experience-description">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;
