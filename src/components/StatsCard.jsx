import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import '../styles/StatsCard.css';

const StatsCard = () => {
    return (
        <div className="stats-card">
            <div className="stat-item">
                <div className="stat-icon-wrapper">
                    <Award size={24} />
                </div>
                <div className="stat-info">
                    <div className="stat-value">8/10</div>
                    <div className="stat-label">CGPA</div>
                </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
                <div className="stat-icon-wrapper blue">
                    <BookOpen size={24} />
                </div>
                <div className="stat-info">
                    <div className="stat-value">CSE</div>
                    <div className="stat-label">Major</div>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
