import React from 'react';
import { Award, GitPullRequest, Users } from 'lucide-react';
import AchievementCard from './AchievementCard';
import '../styles/Achievements.css';

const achievements = [
    {
        icon: Award,
        title: "Hackathon Winner",
        subTitle: "1st Place - CodeJam 2025"
    },
    {
        icon: GitPullRequest,
        title: "Open Source",
        subTitle: "15+ Contributions"
    },
    {
        icon: Users,
        title: "Community",
        subTitle: "Tech Club President"
    }
];

const Achievements = () => {
    return (
        <div className="achievements-container">
            <div className="achievements-grid">
                {achievements.map((item, index) => (
                    <AchievementCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Achievements;
