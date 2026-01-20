import React from 'react';
import '../styles/StatusCard.css';

const StatusCard = () => {
    return (
        <div className="status-card">
            <div className="status-indicator">
                <div className="pulsing-dot"></div>
            </div>
            <h3 className="status-title">Open to Work</h3>
            <p className="status-subtitle">Available for new projects</p>
        </div>
    );
};

export default StatusCard;
