import React from 'react';
import '../styles/AchievementCard.css';

const AchievementCard = ({ icon: Icon, title }) => {
    return (
        <div className="achievement-card">
            <div className="achievement-icon-wrapper">
                <Icon size={28} />
            </div>
            <h3 className="achievement-title">{title}</h3>
        </div>
    );
};

export default AchievementCard;
